# Performance: Boost and Decimation

## Overview

Large datasets make a chart slow in two different ways, and AnyChart answers each with its own mechanism.

**Decimation** reduces how many points are *drawn*. The data stays intact — the chart selects a representative subset and renders that, so an 80,000-point line still looks like the same line but costs a fraction of the DOM.

**Boost** changes *how* points are drawn. Instead of one SVG element per point, the series is rasterised onto a single Canvas (or WebGL) layer, which removes the per-element cost entirely.

The two are independent and can be tuned separately. Decimation is applied by default; boost engages automatically only past a threshold.

Both are configured with four settings, available on the chart and on individual series:

* {api:anychart.core.ChartWithOrthogonalScales#maxPointsRendered}maxPointsRendered(){api}
* {api:anychart.core.ChartWithOrthogonalScales#decimationAlgorithm}decimationAlgorithm(){api}
* {api:anychart.core.ChartWithOrthogonalScales#boostThreshold}boostThreshold(){api}
* {api:anychart.core.ChartWithOrthogonalScales#boostEnabled}boostEnabled(){api}

## Supported Chart Types

These settings live on `anychart.core.ChartWithOrthogonalScales`, so they are available on every chart type built on orthogonal scales: Cartesian charts (line, area, column, bar, spline, step line, marker, and so on), Scatter, Radar, and Polar.

They have no effect on charts without orthogonal scales — Pie, Treemap, Sankey, gauges and similar types ignore them.

## Decimation

Decimation runs when a series has more points than `maxPointsRendered`.

```
var chart = anychart.line(bigDataset);

// draw at most 2000 points per series (default: 1500)
chart.maxPointsRendered(2000);

chart.container('container');
chart.draw();
```

### Algorithms

`decimationAlgorithm()` accepts three values:

* `"auto"` — the default. Picks the algorithm from the series shape: `"min-max"` for discrete series (column, bar, and other types that draw one mark per point), `"lttb"` for continuous ones (line, area, spline).
* `"lttb"` — Largest Triangle Three Buckets. Preserves the visual *shape* of a curve, keeping the points that contribute most to its silhouette. The right choice for line-like series.
* `"min-max"` — keeps the minimum and maximum Y of each bucket. Preserves the *envelope*, so spikes are never lost. The right choice when outliers matter.

```
var chart = anychart.line(bigDataset);

chart.maxPointsRendered(2000);
chart.decimationAlgorithm('lttb');

chart.container('container');
chart.draw();
```

### When Decimation Is Skipped

Decimation is deliberately not applied when dropping points would change what the chart means:

* **Stacked series** — removing a point from one series would break the stack alignment of the others.
* **Bubble and other size-encoded series** — every point is an independent mark whose size carries data. Subset selection built for line envelopes visibly removes bubbles and shrinks the cloud, so it is not lossless here.
* **Series that boost will render anyway** — boost draws all points cheaply, so there is nothing to gain.
* **Series already under the limit** — no work is done when the point count is at or below `maxPointsRendered`.

## Boost

Boost rasterises a series onto a Canvas layer instead of building SVG elements.

By default `boostEnabled()` is `null`, meaning *automatic*: boost engages once a series exceeds `boostThreshold()`, which defaults to 5000 points.

```
var chart = anychart.line(hugeDataset);

// engage boost above 10000 points instead of the default 5000
chart.boostThreshold(10000);

chart.container('container');
chart.draw();
```

Set `boostEnabled()` explicitly to force the decision:

```
// always boost, regardless of point count
chart.boostEnabled(true);

// never boost
chart.boostEnabled(false);
```

### When Boost Is Skipped

In automatic mode boost is not used for:

* **Stacked series** and **3D series**.
* **OHLC and range-based series** (range area, range column, and similar) — their marks are composite shapes.
* **Plots with more than one enabled series.** The boost canvas is composited above the SVG stage, so in a multi-series plot it would cover the SVG-rendered siblings and silently change their visible order. Automatic boost therefore only applies when the series is the only enabled one in its plot.
* **Environments without Canvas or WebGL.**

Setting `boostEnabled(true)` bypasses both the threshold and the single-series rule. Use it when you have measured the trade-off and accept that a boosted series is drawn above its SVG siblings.

## WebGL Renderer

Canvas boost ships in the main bundle and needs nothing extra. A WebGL renderer is available as a separate opt-in module for the heaviest datasets:

```
// load on demand; boost falls back to Canvas until this resolves
anychart.loadModule('boost-webgl').then(function () {
  var chart = anychart.line(hugeDataset);
  chart.boostEnabled(true);
  chart.container('container');
  chart.draw();
});
```

You can also warm it up ahead of time without waiting on the result:

```
anychart.preload('boost-webgl');
```

When the module is not loaded, boost uses Canvas — nothing breaks and no configuration changes are needed.

## Chart-Level and Series-Level Settings

All four settings exist on both the chart and the individual series. A series resolves each setting from its own value first, then the chart's, then the built-in default:

```
var chart = anychart.line();

// chart-wide policy
chart.maxPointsRendered(2000);
chart.boostThreshold(10000);

var detail = chart.line(detailData);
// this one series keeps every point it has
detail.maxPointsRendered(50000);

chart.container('container');
chart.draw();
```

## Defaults

| Setting | Default | Meaning |
|---|---|---|
| `maxPointsRendered()` | `1500` | Decimation starts above this many points per series |
| `decimationAlgorithm()` | `"auto"` | `"min-max"` for discrete series, `"lttb"` for continuous |
| `boostThreshold()` | `5000` | Automatic boost starts above this many points per series |
| `boostEnabled()` | `null` | Automatic — decided by `boostThreshold()` and the rules above |
