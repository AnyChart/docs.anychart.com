# Performance Boost

## Overview

Large datasets make a chart slow in two different ways, and AnyChart answers each with its own mechanism.

**Decimation** reduces how many points are *drawn*. The data stays intact - the chart selects a representative subset and renders that, so an 80,000-point line still looks like the same line but costs a fraction of the DOM.

**Boost** changes *how* points are drawn. Instead of one SVG element per point, the series is rasterised onto a single Canvas (or WebGL) layer, which removes the per-element cost entirely.

The two are configured separately, but they are not independent at runtime: when boost is drawing a series, decimation is skipped for it, because boost renders every point cheaply and there is nothing to gain.

Both are controlled by four settings, available on the chart and on individual series:

* {api:?entry=maxPointsRendered}maxPointsRendered(){api}
* {api:?entry=decimationAlgorithm}decimationAlgorithm(){api}
* {api:?entry=boostThreshold}boostThreshold(){api}
* {api:?entry=boostEnabled}boostEnabled(){api}

## Supported Chart Types

The settings are defined on the chart base that owns orthogonal scales, so they are available on:

* all Cartesian charts - line, area, column, bar, spline, step line, marker and the rest
* [Cartesian 3D](../Basic_Charts/3D/Overview), [Heat Map](../Basic_Charts/Heat_Map_Chart), [Pareto](../Basic_Charts/Pareto_Chart), [Waterfall](../Basic_Charts/Waterfall_Chart) and [Mekko](../Basic_Charts/Marimekko_Chart/Mekko_Chart), which are built on the same base
* [Scatter](../Basic_Charts/Scatter_Plot/Overview), [Radar](../Basic_Charts/Radar_Plot/Overview) and [Polar](../Basic_Charts/Polar_Plot/Overview)

[Stock](../Stock_Charts/Overview) series are built on the same series base, so the four settings work at series level there too, and the default 1500-point decimation applies.

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

The value is a plain string, not an enum: an unrecognised one is not rejected, it falls through to `"min-max"`.

This sample feeds 20000 points to a line chart and draws 2000 of them. It also switches boost off, because 20000 points is past the 5000-point boost threshold and a boosted series is never decimated. Switch the algorithm in the code to see the difference between preserving the shape and preserving the envelope:

{sample}CS\_Boost\_01{sample}

### When Decimation Is Skipped

Decimation is deliberately not applied when dropping points would change what the chart means:

* **Stacked series** - removing a point from one series would break the stack alignment of the others.
* **Bubble and other size-encoded series** - every point is an independent mark whose size carries data, so subset selection built for line envelopes visibly removes bubbles and shrinks the cloud.
* **Series that boost will render anyway** - boost draws all points cheaply, so there is nothing to gain.
* **Series at or below the limit**, and any series when `maxPointsRendered()` is `0`.

## Boost

Boost rasterises a series onto a Canvas layer instead of building SVG elements.

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

### When Boost Is Skipped

Some conditions are checked before `boostEnabled(true)` is honoured, so they apply in **every** mode:

* **Stacked series** and **3D series**.
* **OHLC and range-based series** - range area, range column and similar - because their marks are composite shapes.
* **Series whose drawer boost cannot render.** Boost draws line, step line, spline, area, bubble, marker and column shapes; anything else falls back to SVG.
* **Environments without Canvas or WebGL.**

Two more conditions apply only in automatic mode, and `boostEnabled(true)` bypasses both:

* **The point count is at or below `boostThreshold()`**, or the threshold is `0`.
* **The plot has more than one enabled series.** The boost canvas is composited above the SVG stage, so in a multi-series plot it would cover the SVG-rendered siblings and silently change their visible order.

Forcing boost on a multi-series plot is supported, as long as you accept that the boosted series is drawn above its SVG siblings.

This sample draws 40000 points on a single Canvas layer. Set `boostEnabled(false)` in the code to compare. The series then falls back to SVG, and decimation - no longer pre-empted by boost - trims it to the default 1500 points.

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
<th width='220'>Name</th>
<th width='120'>Default</th>
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
