# Performance Boost

## Overview

Large datasets make a chart slow in two different ways, and AnyChart answers each with its own mechanism.

**Decimation** reduces how many points are *drawn*. The data stays intact - the chart selects a representative subset and renders that, so an 80,000-point line still looks like the same line but costs a fraction of the DOM.

**Boost** changes *how* points are drawn. Instead of one SVG element per point, the series is rasterized onto a single Canvas (or WebGL) layer, which removes the per-element cost entirely.

The two are configured separately, but they are not independent at runtime: as soon as boost engages for a series, decimation is skipped for it, because boost is meant to render every point cheaply and there would be nothing to gain. The two never combine. Which series boost can actually render is a separate question - see [What Boost Draws](#what_boost_draws).

Both are controlled by four settings, available on the chart and on individual series:

* {api:?entry=maxPointsRendered}maxPointsRendered(){api}
* {api:?entry=decimationAlgorithm}decimationAlgorithm(){api}
* {api:?entry=boostThreshold}boostThreshold(){api}
* {api:?entry=boostEnabled}boostEnabled(){api}

## Supported Chart Types

The settings are defined on the chart base that owns orthogonal scales, so they are available on:

* all Cartesian charts - line, area, column, bar, spline, step line, marker and the rest
* [Cartesian 3D](../Basic_Charts/3D/Overview), [Heat Map](../Basic_Charts/Heat_Map_Chart), [Pareto](../Basic_Charts/Pareto_Chart), [Waterfall](../Basic_Charts/Waterfall_Chart), [Mekko](../Basic_Charts/Marimekko_Chart/Mekko_Chart) and [Stream Graph](../Basic_Charts/Stream_Graph), which are built on the same base
* [Scatter](../Basic_Charts/Scatter_Plot/Overview), [Radar](../Basic_Charts/Radar_Plot/Overview) and [Polar](../Basic_Charts/Polar_Plot/Overview)

Having the methods is not the same as having an effect. Both mechanisms give up on stacked series, and three of those chart types stack by default:

* [Waterfall](../Basic_Charts/Waterfall_Chart) and [Stream Graph](../Basic_Charts/Stream_Graph) stack unconditionally - stacking is what those chart types *are* - so the four settings are accepted and then never change anything.
* [Mekko](../Basic_Charts/Marimekko_Chart/Mekko_Chart), Mosaic and Barmekko stack through their theme, so boost and decimation engage only if you turn stacking off with `chart.yScale().stackMode("none")`.

[Cartesian 3D](../Basic_Charts/3D/Overview) has a different limit: its series are never boosted, whatever `boostEnabled()` says. Decimation still applies there.

On [Stock](../Stock_Charts/Overview) the four methods exist on the series - not on the chart or the plot - but only `boostEnabled(true)` does anything. Decimation and the automatic boost threshold both need the Cartesian drawing plan, which stock series do not build, so `maxPointsRendered()`, `decimationAlgorithm()` and `boostThreshold()` are accepted and ignored, and the 1500-point default never applies. Stock does not need decimation anyway: it thins large series itself through [data grouping](../Stock_Charts/Data_Grouping).

[Gantt](../Gantt_Chart/Overview) has its own `boostEnabled()` and `boostThreshold()` with different meaning: they count visible rows rather than data points, and the threshold defaults to 500.

Charts without orthogonal scales - Pie, Treemap, Sankey, gauges and similar types - do not have these methods at all. Calling them there raises a TypeError rather than being ignored.

## Decimation

Decimation runs when a series has more points than `maxPointsRendered()`, which defaults to 1500.

```
// draw at most 2000 points per series
chart.maxPointsRendered(2000);
```

Setting it to `0` turns decimation off for the chart.

### Algorithms

`decimationAlgorithm()` accepts three values:

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
* **Series at or below the limit**, and any series when `maxPointsRendered()` is `0`.

The third rule is worth reading carefully: decimation is dropped the moment boost *engages*, which is decided before anything is drawn and without looking at whether the Canvas renderer knows the series shape. On an area series, where it does not, you get the worst of both - see [What Boost Draws](#what_boost_draws).

## Boost

Boost rasterizes a series onto a Canvas layer instead of building SVG elements.

By default `boostEnabled()` is `null`, meaning *automatic*: boost engages once a series exceeds `boostThreshold()`, which defaults to 5000 points.

```
// engage boost above 10000 points instead of the default 5000
chart.boostThreshold(10000);
```

Set `boostEnabled()` explicitly to force the decision:

```
// always boost, regardless of point count
chart.boostEnabled(true);

// never boost
chart.boostEnabled(false);
```

### When Boost is Skipped

These conditions are checked up front, before anything is drawn and before `boostEnabled(true)` is honored, so they apply in **every** mode:

* **Stacked series** and **3D series**.
* **OHLC and range-based series** - range area, range column, range stick, dumbbell and similar - because their marks are composite shapes.
* **Environments without Canvas or WebGL.**

Two more conditions apply only in automatic mode, and `boostEnabled(true)` bypasses both:

* **The point count is at or below `boostThreshold()`**, or the threshold is `0`.
* **The plot has more than one enabled series.** The boost canvas is composited above the SVG stage, so in a multi-series plot it would cover the SVG-rendered siblings and silently change their visible order.

Forcing boost on a multi-series plot is supported, as long as you accept that the boosted series is drawn above its SVG siblings.

The series *shape* is on neither list. Whether the Canvas renderer can draw the series at all is settled last, after the canvas has been attached and after decimation has already been dropped - which is what the next section is about.

### What Boost Draws

The Canvas renderer has a small repertoire of shapes. Three families come out the way you would expect:

* **column and bar** series
* **marker** series
* **bubble** series

**Line-shaped series** - line, spline, step line, jump line and stick - are boosted too, but the Canvas renderer fills them down to the zero line rather than stroking the outline, so a boosted line reads as an area. Keep `boostEnabled(false)` on them when the outline is the point.

**Area-shaped series** - area, spline area and step area - are not drawn by the renderer at all. Boost still engages: the canvas is attached, decimation is skipped for the series, the renderer then finds no shape it knows and hands the series back to SVG, which draws every point. A 20000-point area chart therefore renders 20000 SVG vertices with boost on and 1500 with `boostEnabled(false)` - boost does not merely fail to help an area chart, it makes it slower. Because the default `boostEnabled()` is *automatic*, a single-series area chart above 5000 points reaches that state on its own; set `boostEnabled(false)` there.

**Heat Map and Box** series fail harder still: the renderer accepts them, paints nothing, and does not hand them back to SVG, so the chart comes out empty for as long as boost is engaged. A heat map with more than 5000 cells falls into this by default too, so switch boost off there as well.

This sample draws 40000 markers on a single Canvas layer - a marker series is one of the shapes the renderer draws faithfully. Set `boostEnabled(false)` in the code to compare: the series falls back to SVG, and decimation - no longer pre-empted by boost - trims it to the default 1500 points:

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

Note that the built-in defaults below are what the engine *behaves* like, not necessarily what the getter returns. On Cartesian charts they come from the theme, so `chart.boostThreshold()` reads back 5000. On Scatter, Radar and Polar they are applied by the series as a fallback, so the getter returns `undefined` until the setting is assigned.

## Defaults

<table>
<tbody>
<tr>
<th width="220">Name</th>
<th width="120">Default</th>
<th>Description</th>
</tr>
<tr>
<td>maxPointsRendered()</td>
<td>1500</td>
<td>Decimation starts above this many points per series; 0 disables it</td>
</tr>
<tr>
<td>decimationAlgorithm()</td>
<td>"auto"</td>
<td>"min-max" for discrete series, "lttb" for continuous ones</td>
</tr>
<tr>
<td>boostThreshold()</td>
<td>5000</td>
<td>Automatic boost starts above this many points per series</td>
</tr>
<tr>
<td>boostEnabled()</td>
<td>null</td>
<td>Automatic - decided by boostThreshold() and the rules above</td>
</tr>
</tbody>
</table>
