{:index 6}
# Stream Graph

## Overview

A Stream graph is a stacked area chart displaced around a shifting central baseline, which gives it a flowing, organic, "river-like" shape. Instead of stacking the series from a flat zero line, the whole stack is offset at every point — this makes a Stream graph a good choice for showing how the composition of a total changes over time across many series, when the overall shape matters more than exact values.

This article explains how to create a basic Stream graph as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Stream graph's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) + [Stream Graph](../Quick_Start/Modules#stream_graph)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.StreamGraph}anychart.charts.StreamGraph{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>Built-in (see [Offset](#offset))</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Stacked Area](Stacked/Value/Area_Chart)</td></tr>
<tr><td></td><td>[Spline Area](Spline_Area_Chart)</td></tr>
<tr><td></td><td>[Area](Area_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Stream graph requires adding the [Core](../Quick_Start/Modules#core), [Basic Cartesian](../Quick_Start/Modules#basic_cartesian), and [Stream Graph](../Quick_Start/Modules#stream_graph) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-stream-graph.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Stream graph, use the {api:anychart#streamGraph}anychart.streamGraph(){api} chart constructor. Each series (layer) of the stream is added with the {api:anychart.charts.StreamGraph#splineArea}splineArea(){api} method — the layers are always stacked, and the baseline is shifted automatically:

```
// create data: weekly volume of three acquisition channels
var searchData = [
  ["W1", 42],["W2", 45],["W3", 40],["W4", 38],["W5", 44],
  ["W6", 50],["W7", 55],["W8", 52],["W9", 48],["W10", 46]
];
var socialData = [
  ["W1", 30],["W2", 33],["W3", 36],["W4", 40],["W5", 38],
  ["W6", 35],["W7", 37],["W8", 42],["W9", 46],["W10", 49]
];
var emailData = [
  ["W1", 18],["W2", 20],["W3", 19],["W4", 22],["W5", 24],
  ["W6", 23],["W7", 21],["W8", 20],["W9", 22],["W10", 25]
];

// create a stream graph
var chart = anychart.streamGraph();

// add a series (layer) per channel
var series1 = chart.splineArea(searchData);
series1.name("Search");
var series2 = chart.splineArea(socialData);
series2.name("Social");
var series3 = chart.splineArea(emailData);
series3.name("Email");

// set the chart title
chart.title("Stream Graph: Basic Sample");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

You can also pass one or more data arrays straight to the constructor — a spline-area series is created for each of them:

```
var chart = anychart.streamGraph(searchData, socialData, emailData);
```

{sample}BCT\_Stream\_Graph\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Stream graph (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Each layer of a Stream graph is a separate series with two data fields:

* `x` — the category (usually a point in time)
* `value` — the value of the layer at that category

Data for a series is passed to the {api:anychart.charts.StreamGraph#splineArea}splineArea(){api} (or [area / step-area](#series_type)) method — as an array, or as a mapped [data set](../Working_with_Data/Data_Sets), which is convenient when all layers share one table. Missing values can be set as `null` — such points are skipped without corrupting the baseline:

```
// one data set with a column per channel: [week, search, social]
var dataSet = anychart.data.set([
  ["W1", 42, 30],["W2", 45, 33],["W3", 40, 36],["W4", 38, 40],["W5", 44, 38],
  ["W6", 50, 35],["W7", 55, 37],["W8", 52, 42],["W9", 48, 46],["W10", 46, 49]
]);

// map a column of the data set for each series
var searchMapping = dataSet.mapAs({x: 0, value: 1});
var socialMapping = dataSet.mapAs({x: 0, value: 2});

var chart = anychart.streamGraph();
var series1 = chart.splineArea(searchMapping);
series1.name("Search");
var series2 = chart.splineArea(socialMapping);
series2.name("Social");
```

{sample}BCT\_Stream\_Graph\_07{sample}

### Offset

The signature setting of the Stream graph is the **offset** — the algorithm that positions the baseline of the stack. It is controlled by the {api:anychart.charts.StreamGraph#offset}offset(){api} method:

* `"wiggle"` (default) — minimizes the change of slope of the layers (the Byron & Wattenberg "streamgraph" algorithm); the river meanders but stays compact
* `"silhouette"` — centers the stack symmetrically around the zero line
* `"expand"` — normalizes every category to a constant total height, so the chart shows shares of the total (like a percent-stacked chart with flat top and bottom edges)
* `"zero"` — stacks the layers from a flat zero baseline (an ordinary stacked area chart)

```
// center the stack symmetrically around the zero line
chart.offset("silhouette");
```

{sample}BCT\_Stream\_Graph\_03{sample}

### Series Type

By default, the layers are drawn as [Spline Area](Spline_Area_Chart) series with smooth curved edges. Layers can also be drawn as plain [Area](Area_Chart) series (straight edges) or [Step Area](Step_Area_Chart) series (staircase edges) — use the {api:anychart.charts.StreamGraph#area}area(){api} and {api:anychart.charts.StreamGraph#stepArea}stepArea(){api} methods, or switch the type of an existing series with {api:anychart.core.cartesian.series.Base#seriesType}seriesType(){api}:

```
// layers drawn as plain area series instead of spline-area
var series1 = chart.area(searchData);
var series2 = chart.area(socialData);
var series3 = chart.area(emailData);
```

{sample}BCT\_Stream\_Graph\_04{sample}

### Appearance

The color of each layer comes from the chart [palette](../Appearance_Settings/Palettes) — set your own with the {api:anychart.charts.StreamGraph#palette}palette(){api} method. The [appearance settings](../Appearance_Settings) of individual series are configured like in other area-based series: the {api:anychart.core.cartesian.series.Base#fill}fill(){api} method sets the layer fill, and the {api:anychart.core.cartesian.series.Base#stroke}stroke(){api} method sets its outline. Adjacent layers of a stream often read better when separated with a thin contrasting stroke:

```
// one palette color per layer
chart.palette(["#01497c", "#2c7da0", "#61a5c2"]);

// a thin white outline visually separates adjacent layers
series1.stroke("1.5 #ffffff");
series2.stroke("1.5 #ffffff");
series3.stroke("1.5 #ffffff");
```

{sample}BCT\_Stream\_Graph\_02{sample}

### Labels and Markers

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart, and [markers](../Common_Settings/Markers) are icons that highlight the data points. Both are configured per series:

```
// enable the labels on the first layer
series1.labels().enabled(true);
series1.labels().format("{%value}");
series1.labels().fontColor("#ffffff");

// enable the point markers on the second layer
series2.markers().enabled(true);
series2.markers().type("circle");
series2.markers().size(4);
```

{sample}BCT\_Stream\_Graph\_05{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. On a Stream graph, the tooltip works in the `"union"` [display mode](../Common_Settings/Tooltip#display_modes) by default: one tooltip lists the values of all layers at the hovered category. Use font settings and [text formatters](../Common_Settings/Text_Formatters) to configure the text, or switch the mode with {api:anychart.core.ui.Tooltip#displayMode}displayMode(){api}:

```
// the union tooltip lists all layers at the hovered category
chart.tooltip().titleFormat("Week {%x}");
chart.tooltip().format("{%seriesName}: {%value}");
```

{sample}BCT\_Stream\_Graph\_06{sample}

### Legend

A [Legend](../Common_Settings/Legend) helps identify the layers of the stream: it is enabled on the Stream graph by default, and each series adds one legend item, labeled with its {api:anychart.core.cartesian.series.Base#name}name(){api}. Use the {api:anychart.core.ui.Legend#position}position(){api} and {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api} methods to move it:

```
// the legend is enabled by default; move it to the right
chart.legend().position("right");
chart.legend().itemsLayout("vertical");
```

{sample}BCT\_Stream\_Graph\_08{sample}

### Axes

The X axis of a Stream graph works like in other cartesian charts. The Y axis is **disabled by default**: with the `"wiggle"` and `"silhouette"` offsets the vertical positions are relative, so the axis values would be misleading. If you use the `"zero"` offset, the Y axis becomes meaningful again — enable it with the {api:anychart.charts.StreamGraph#yAxis}yAxis(){api} method:

```
// stack the layers from the zero baseline and show the Y axis
chart.offset("zero");
chart.yAxis(true);
chart.yAxis().title("Weekly volume");
chart.xAxis().title("Week");
```

{sample}BCT\_Stream\_Graph\_09{sample}
