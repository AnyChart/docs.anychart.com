# Performance Boost

## Overview

Large datasets make a chart slow in two different ways, and AnyChart answers each with its own mechanism.

**Decimation** reduces how many points are *drawn*. The data stays intact - the chart selects a representative subset and renders that, so an 80,000-point line still looks like the same line but costs a fraction of the DOM.

**Boost** changes *how* points are drawn. Instead of one SVG element per point, the series is rasterized onto a single Canvas (or WebGL) layer, which removes the per-element cost entirely.

The two are configured separately, but they are not independent at runtime: as soon as boost engages for a series, decimation is skipped for it, because boost is meant to render every point cheaply and there would be nothing to gain. The two never combine. Whether the Canvas renderer has a way to draw the series shape at all is part of that same decision and is made before either mechanism runs, so a series boost turns down keeps its decimation - see [When Boost is Skipped](#when_boost_is_skipped).

Both are controlled by four settings, available on the chart and on individual series:

* {api:anychart.charts.Cartesian#maxPointsRendered}maxPointsRendered(){api}
* {api:anychart.charts.Cartesian#decimationAlgorithm}decimationAlgorithm(){api}
* {api:anychart.charts.Cartesian#boostThreshold}boostThreshold(){api}
* {api:anychart.charts.Cartesian#boostEnabled}boostEnabled(){api}

## Supported Chart Types

The settings are defined on the chart base that owns orthogonal scales, so they are available on:

* all Cartesian charts - line, area, column, bar, spline, step line, marker and the rest
* [Cartesian 3D](../Basic_Charts/3D/Overview), [Heat Map](../Basic_Charts/Heat_Map_Chart), [Pareto](../Basic_Charts/Pareto_Chart), [Waterfall](../Basic_Charts/Waterfall_Chart), [Mekko](../Basic_Charts/Marimekko_Chart/Mekko_Chart) and [Stream Graph](../Basic_Charts/Stream_Graph), which are built on the same base
* [Scatter](../Basic_Charts/Scatter_Plot/Overview), [Radar](../Basic_Charts/Radar_Plot/Overview) and [Polar](../Basic_Charts/Polar_Plot/Overview)

Having the methods is not the same as having an effect. Both mechanisms give up on stacked series, and three of those chart types stack by default:

* [Waterfall](../Basic_Charts/Waterfall_Chart) and [Stream Graph](../Basic_Charts/Stream_Graph) stack unconditionally - stacking is what those chart types *are* - so the four settings are accepted and then never change anything.
* [Mekko](../Basic_Charts/Marimekko_Chart/Mekko_Chart), Mosaic and Barmekko stack through their theme, so boost and decimation engage only if you turn stacking off with `chart.yScale().stackMode("none")`.

[Cartesian 3D](../Basic_Charts/3D/Overview) has a different limit: its series are never boosted, whatever {api:anychart.charts.Cartesian3d#boostEnabled}boostEnabled(){api} says. Decimation still applies there.

On [Stock](../Stock_Charts/Overview) the four methods exist on the series - not on the chart or the plot - but only `boostEnabled(true)` does anything. Decimation and the automatic boost threshold both need the Cartesian drawing plan, which stock series do not build, so `maxPointsRendered()`, `decimationAlgorithm()` and `boostThreshold()` are accepted and ignored, and the 1500-point default never applies. Stock does not need decimation anyway: it thins large series itself through [data grouping](../Stock_Charts/Data_Grouping).

[Timeline](../Basic_Charts/Timeline_Chart) series take `boostEnabled()` and `boostThreshold()` without complaint, but neither of the two series types can be boosted: moment and range are both refused, and `boostEnabled(true)` there only produces a warning - see [When Boost is Skipped](#when_boost_is_skipped).

[Gantt](../Gantt_Chart/Overview) has its own {api:anychart.charts.Gantt#boostEnabled}boostEnabled(){api} and {api:anychart.charts.Gantt#boostThreshold}boostThreshold(){api} with different meaning: they count visible rows rather than data points, and the threshold defaults to 500.

Charts without orthogonal scales - Pie, Treemap, Sankey, gauges and similar types - do not have these methods at all. Calling them there raises a TypeError rather than being ignored.

## Decimation

Decimation runs when a series has more points than {api:anychart.charts.Cartesian#maxPointsRendered}maxPointsRendered(){api}, which defaults to 1500.

```
// draw at most 2000 points per series
chart.maxPointsRendered(2000);
```

Setting it to `0` turns decimation off for the chart.

### Algorithms

{api:anychart.charts.Cartesian#decimationAlgorithm}decimationAlgorithm(){api} accepts three values:

* `"auto"` - the default. Picks the algorithm from the series shape: `"min-max"` for discrete series, the ones whose drawer marks each point separately, and `"lttb"` for continuous ones such as line, area and spline.
* `"lttb"` - Largest Triangle Three Buckets. Preserves the visual *shape* of a curve, keeping the points that contribute most to its silhouette. The right choice for line-like series.
* `"min-max"` - keeps the minimum and maximum Y of each bucket. Preserves the *envelope*, so spikes are never lost. The right choice when outliers matter.

```
chart.maxPointsRendered(2000);
chart.decimationAlgorithm("lttb");
```

The value is a plain string, not an enum: an unrecognized one is not rejected, it falls through to `"min-max"`.

This sample feeds 20000 points to a line chart and draws 2000 of them. It also switches boost off, because 20000 points is past the 5000-point boost threshold and a boosted series is never decimated. Switch the algorithm in the code to see the difference between preserving the shape and preserving the envelope:

{sample}CS\_Boost\_01{sample}

### When Decimation is Skipped

Decimation is deliberately not applied when dropping points would change what the chart means:

* **Stacked series** - removing a point from one series would break the stack alignment of the others.
* **Bubble and other size-encoded series** - every point is an independent mark whose size carries data, so subset selection built for line envelopes visibly removes bubbles and shrinks the cloud.
* **Series that boost has engaged for** - boost is supposed to draw all points cheaply, so there is nothing to gain.
* **Heat map series** - always, whatever boost is doing. Thinning selects points along one ordered axis, and a categorical matrix has no midpoint to collapse neighboring cells into, so both algorithms would delete most of the grid. This is the one series type that neither mechanism touches.
* **Series at or below the limit**, and any series when {api:anychart.charts.Cartesian#maxPointsRendered}maxPointsRendered(){api} is `0`.

The boost rule is narrower than it sounds. Boost only engages for a series it can actually draw, and the series shape is settled before the canvas is attached - so a series boost refuses keeps its decimation instead of losing it on the way in. Heat map is the exception, and for the reason above: it is left undecimated either way. Which shapes boost refuses is in [When Boost is Skipped](#when_boost_is_skipped).

## Boost

Boost rasterizes a series onto a Canvas layer instead of building SVG elements.

By default {api:anychart.charts.Cartesian#boostEnabled}boostEnabled(){api} is `null`, meaning *automatic*: boost engages once a series exceeds {api:anychart.charts.Cartesian#boostThreshold}boostThreshold(){api}, which defaults to 5000 points.

```
// engage boost above 10000 points instead of the default 5000
chart.boostThreshold(10000);
```

Set {api:anychart.charts.Cartesian#boostEnabled}boostEnabled(){api} explicitly to force the decision:

```
// always boost, regardless of point count
chart.boostEnabled(true);

// never boost
chart.boostEnabled(false);
```

### When Boost is Skipped

These conditions are checked up front, before anything is drawn and before {api:anychart.charts.Cartesian#boostEnabled}boostEnabled(true){api} is honored, so they apply in **every** mode:

* **Stacked series** and **3D series**.
* **OHLC and range-based series** - range area, range column, range stick, dumbbell and similar - because their marks are composite shapes.
* **Series whose drawer has no boost renderer** - area, spline area and step area, jump line, stick, box, heat map, timeline moment, timeline range, and the polar flavor of column. The refusal happens before the canvas is attached, so these series draw through SVG and are decimated exactly as they would be with boost off: at {api:anychart.charts.Cartesian#maxPointsRendered}maxPointsRendered(500){api}, 3000 points give 500 boxes, 500 polar sectors and 500 timeline moments whether or not `boostEnabled(true)` was asked for. Heat map, per the rule above, is not decimated either.
* **Environments without Canvas or WebGL.**

An explicit {api:anychart.charts.Cartesian#boostEnabled}boostEnabled(true){api} on a series with no boost renderer draws nothing differently - it prints a console warning naming the series type and leaves the series on the SVG path. The warning is de-duplicated, so redrawing the same chart does not repeat it.

Two more conditions apply only in automatic mode, and {api:anychart.charts.Cartesian#boostEnabled}boostEnabled(true){api} bypasses both:

* **The point count is at or below {api:anychart.charts.Cartesian#boostThreshold}boostThreshold(){api}**, or the threshold is `0`.
* **The plot has more than one enabled series.** The boost canvas is composited above the SVG stage, so in a multi-series plot it would cover the SVG-rendered siblings and silently change their visible order.

Forcing boost on a multi-series plot is supported, as long as you accept that the boosted series is drawn above its SVG siblings.

The series *shape* is on the first list, and it is checked first: whether the Canvas renderer has a way to draw the series decides the question before the canvas is attached and before decimation is dropped. What the renderer does with the shapes it does know is the next section.

Polar column is the only refusal that changes the *picture* rather than the cost. Above the threshold it used to paint cartesian columns over the polar grid; now it draws radial sectors like the rest of the chart and is decimated like any other series.

### What Boost Draws

The Canvas renderer has a small repertoire of shapes. Three families come out the way you would expect:

* **column and bar** series
* **marker** series
* **bubble** series

**Line-shaped series** - line, spline, step line, jump line and stick - are boosted too, but the Canvas renderer fills them down to the zero line rather than stroking the outline, so a boosted line reads as an area. Keep {api:anychart.charts.Cartesian#boostEnabled}boostEnabled(false){api} on them when the outline is the point.

**Refused series** - area-shaped series, box, heat map, the timeline series, polar column and the rest of the list in [When Boost is Skipped](#when_boost_is_skipped) - never reach the renderer at all: boost turns them down up front, so they draw through SVG and there is nothing to switch off by hand.

This sample draws 10000 markers on a single Canvas layer - a marker series is one of the shapes the renderer draws faithfully. Set {api:anychart.charts.Cartesian#boostEnabled}boostEnabled(false){api} in the code to compare: the series falls back to SVG, and decimation - no longer pre-empted by boost - trims it to the default 1500 points:

{sample}CS\_Boost\_02{sample}

## WebGL Renderer

Canvas boost ships in the main bundle and needs nothing extra. A WebGL renderer is available as a separate opt-in module for the heaviest datasets, `anychart-boost-webgl.min.js`. It can be added with a script tag like any other [module](../Quick_Start/Modules#boost_webgl_renderer), or loaded on demand:

```
// returns a promise; boost falls back to Canvas until it resolves
anychart.loadModule("boost-webgl").then(function () {
  chart.boostEnabled(true);
  chart.draw();
});
```

You can also warm it up ahead of time without waiting on the result:

```
anychart.preload("boost-webgl");
```

When the module is not loaded, boost uses Canvas - nothing breaks and no configuration changes are needed.

## Chart-Level and Series-Level Settings

All four settings exist on both the chart and the individual series. A series resolves each setting from its own value first, then the chart's, then the built-in default:

```
// chart-wide policy
chart.maxPointsRendered(2000);
chart.boostThreshold(10000);

// this one series keeps every point it has
var detail = chart.line(detailData);
detail.maxPointsRendered(50000);
```

Note that the built-in defaults below are what the engine *behaves* like, not necessarily what the getter returns. On Cartesian charts they come from the theme, so {api:anychart.charts.Cartesian#boostThreshold}chart.boostThreshold(){api} reads back 5000. On Scatter, Radar and Polar they are applied by the series as a fallback, so the getter returns `undefined` until the setting is assigned.

## Defaults

<table>
<tbody>
<tr>
<th width="220">Name</th>
<th width="120">Default</th>
<th>Description</th>
</tr>
<tr>
<td>{api:anychart.charts.Cartesian#maxPointsRendered}maxPointsRendered(){api}</td>
<td>1500</td>
<td>Decimation starts above this many points per series; 0 disables it</td>
</tr>
<tr>
<td>{api:anychart.charts.Cartesian#decimationAlgorithm}decimationAlgorithm(){api}</td>
<td>"auto"</td>
<td>"min-max" for discrete series, "lttb" for continuous ones</td>
</tr>
<tr>
<td>{api:anychart.charts.Cartesian#boostThreshold}boostThreshold(){api}</td>
<td>5000</td>
<td>Automatic boost starts above this many points per series</td>
</tr>
<tr>
<td>{api:anychart.charts.Cartesian#boostEnabled}boostEnabled(){api}</td>
<td>null</td>
<td>Automatic - decided by {api:anychart.charts.Cartesian#boostThreshold}boostThreshold(){api} and the rules above</td>
</tr>
</tbody>
</table>
