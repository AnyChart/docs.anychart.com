{:index 6}
# Stream Graph

## Overview

A Stream graph is a stacked area chart. But it does not stack the layers from a flat zero line. Instead, the whole stack moves around a central baseline that shifts. This gives the chart a flowing, organic, "river-like" shape.

A Stream graph works best in one case. Use it to show how the parts of a whole change over time. It works well when you have many series. It fits when the overall shape matters more than exact values.

This article shows how to create a basic Stream graph. It also shows how to set the options that are special to this type. You can also read the table below for a short overview of the Stream graph's features:

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
<tr><td>Error Bars</td><td>[YES](../Error_Chart/Overview)</td></tr>
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

The Stream graph needs the [Core](../Quick_Start/Modules#core), [Basic Cartesian](../Quick_Start/Modules#basic_cartesian), and [Stream Graph](../Quick_Start/Modules#stream_graph) modules:

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

To create a Stream graph, use the {api:anychart#streamGraph}anychart.streamGraph(){api} chart constructor. Add each series (layer) of the stream with the {api:anychart.charts.StreamGraph#splineArea}splineArea(){api} method. The layers are always stacked. The baseline shifts on its own.

The sample below shows how to create a basic Stream graph:

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

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Stream\_Graph\_01{sample}

You can also pass one or more data arrays straight to the constructor. A spline-area series is created for each one:

```
var chart = anychart.streamGraph(searchData, socialData, emailData);
```

## General Settings

In AnyChart, many settings work the same way for all chart types. This includes the Stream graph, for example legend and interactivity settings.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Each layer of a Stream graph is a separate series with two data fields:

* `x` — the category (usually a point in time)
* `value` — the value of the layer at that category

Pass the data for a series to the {api:anychart.charts.StreamGraph#splineArea}splineArea(){api} method (or the [area / step-area](#series_type) method). You can pass a plain array. You can also map the columns of a shared [data set](../Working_with_Data/Data_Sets). This is handy when all layers share one table. You can set missing values as `null`. Such points are skipped, and the baseline stays whole:

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

{sample}BCT\_Stream\_Graph\_02{sample}

### Offset

The key setting of the Stream graph is the **offset**. This is the algorithm that places the baseline of the stack. Control it with the {api:anychart.charts.StreamGraph#offset}offset(){api} method:

* `"wiggle"` (default) — reduces the change of slope of the layers (the Byron & Wattenberg "streamgraph" algorithm); the river bends but stays compact
* `"silhouette"` — centers the stack evenly around the zero line
* `"expand"` — gives every category the same total height; the chart then shows each layer's share of the total. It looks like a percent-stacked chart with flat top and bottom edges
* `"zero"` — stacks the layers from a flat zero baseline (an ordinary stacked area chart)

```
// center the stack symmetrically around the zero line
chart.offset("silhouette");
```

{sample}BCT\_Stream\_Graph\_03{sample}

### Series Type

By default, the layers are drawn as [Spline Area](Spline_Area_Chart) series with smooth curved edges. You can also draw the layers as plain [Area](Area_Chart) series (straight edges). Or draw them as [Step Area](Step_Area_Chart) series (staircase edges). Use the {api:anychart.charts.StreamGraph#area}area(){api} and {api:anychart.charts.StreamGraph#stepArea}stepArea(){api} methods. You can also change the type of an existing series with {api:anychart.core.cartesian.series.Base#seriesType}seriesType(){api}:

```
// layers drawn as plain area series instead of spline-area
var series1 = chart.area(searchData);
var series2 = chart.area(socialData);
var series3 = chart.area(emailData);

// or switch an existing series to a different type
series1.seriesType("stepArea");
```

{sample}BCT\_Stream\_Graph\_04{sample}

### Appearance

The color of each layer comes from the chart [palette](../Appearance_Settings/Palettes). Set your own with the {api:anychart.charts.StreamGraph#palette}palette(){api} method. You set the [appearance settings](../Appearance_Settings) of single series like in other area-based series. The {api:anychart.core.StateSettings#fill}fill(){api} method sets the layer fill. The {api:anychart.core.StateSettings#stroke}stroke(){api} method sets its outline. Layers next to each other often read better with a thin contrasting stroke between them:

```
// one palette color per layer
chart.palette(["#01497c", "#2c7da0", "#61a5c2"]);

// a thin white outline visually separates adjacent layers
series1.stroke("1.5 #ffffff");
series2.stroke("1.5 #ffffff");
series3.stroke("1.5 #ffffff");

// override the fill of one layer directly
series1.fill("#014f86");
```

{sample}BCT\_Stream\_Graph\_05{sample}

### Labels and Markers

[Labels](../Common_Settings/Labels) are text or image elements. You can place them anywhere on any chart. [Markers](General_Settings#markers) are icons that highlight the data points. You can turn on both on a whole series or on a single point. You set both per series. For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

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

{sample}BCT\_Stream\_Graph\_06{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box. It shows when you hover over a point on a chart. On a Stream graph, the tooltip uses the `"union"` [display mode](../Common_Settings/Tooltip#display_mode) by default. In this mode, one tooltip lists the values of all layers at the hovered category. Use font settings and [text formatters](../Common_Settings/Text_Formatters) to set the text. You can also change the mode with {api:anychart.core.ui.Tooltip#displayMode}displayMode(){api}:

```
// the union tooltip lists all layers at the hovered category
chart.tooltip().titleFormat("Week {%x}");
chart.tooltip().format("{%seriesName}: {%value}");
```

{sample}BCT\_Stream\_Graph\_07{sample}

### Legend

A [Legend](../Common_Settings/Legend) helps you identify the layers of the stream. It is turned on for the Stream graph by default. Each series adds one legend item, labeled with its {api:anychart.core.cartesian.series.Base#name}name(){api}. Use the {api:anychart.core.ui.Legend#position}position(){api} method to move it. Use the {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api} method to set how the items are arranged:

```
// the legend is enabled by default; move it to the right
chart.legend().position("right");
chart.legend().itemsLayout("vertical");
```

{sample}BCT\_Stream\_Graph\_08{sample}

### Axes

The X axis of a Stream graph works like in other cartesian charts. The Y axis is **disabled by default**. With the `"wiggle"` and `"silhouette"` offsets, the vertical positions are relative. So the axis values would mislead you. With the `"zero"` offset, the Y axis becomes meaningful again. Turn it on with the {api:anychart.charts.StreamGraph#yAxis}yAxis(){api} method:

```
// stack the layers from the zero baseline and show the Y axis
chart.offset("zero");
chart.yAxis(true);
chart.yAxis().title("Weekly volume");
chart.xAxis().title("Week");
```

{sample}BCT\_Stream\_Graph\_09{sample}
