{:index 6}
# Stream Graph

## Overview

A Stream graph is a stacked area chart. But it does not stack the layers from a flat zero line. Instead, the whole stack is arranged around a central baseline that moves up and down. This gives the chart a flowing, "river-like" shape.

A Stream graph is best for one thing. Use it to show how the parts of a whole change over time. It works well when you have many series. It fits when the overall shape matters more than exact values.

This article shows how to create a basic Stream graph. It also shows how to set the options that are special to this type. You can read the table below for a short overview of the Stream graph's features:

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

To create a Stream graph, use the {api:anychart#streamGraph}anychart.streamGraph(){api} chart constructor. If you pass one or more data arrays to this chart constructor, it creates a Spline Area series (a layer) for each of them.

To create a series explicitly, call the {api:anychart.charts.StreamGraph#splineArea}splineArea(){api} method. The layers are always stacked, and the baseline shifts on its own.

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

## General Settings

In AnyChart, many settings work the same way for all chart types. This includes the Stream graph, for example its legend and interactivity settings.

A click on the stream selects a whole category: one point in every layer, because the points of a Stream graph are grouped by their `x`. Shift + click adds another category to the selection, a plain click and a Ctrl/Cmd + click both replace it, and a click outside the plot clears it. These gestures come from the `interactivity()` settings of the chart, where {api:anychart.core.utils.Interactivity#selectionMode}selectionMode(){api} narrows the selection to a single point or turns it off.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Each layer of a Stream graph is a separate series with two data fields:

* `x` — the category (usually a point in time)
* `value` — the value of the layer at that category

Besides plain arrays, a series accepts a mapping of an {api:anychart.data#set}anychart.data.set(){api}. Use it when all layers come in one table with a column per layer: map the columns of each series with {api:anychart.data.Set#mapAs}mapAs(){api}. A missing value is written as `null`: the point is skipped, and the baseline stays unbroken.

```
// one data set with a column per channel: [week, search, social]; the social value at W5 is missing
var dataSet = anychart.data.set([
  ["W1", 42, 30],["W2", 45, 33],["W3", 40, 36],["W4", 38, 40],["W5", 44, null],
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

In the sample below, the data comes from a shared data set, and the Social layer has no value at "W5": its band shows a gap, and the stream continues:

{sample}BCT\_Stream\_Graph\_02{sample}

### Offset

The layers of a Stream graph are always stacked. Two things shape the result: where the bottom of the stack, the **baseline**, is placed at each category, and the order the layers are stacked in (see [Layer Order](#layer_order)). The {api:anychart.charts.StreamGraph#offset}offset(){api} method sets the rule for the baseline:

* `"wiggle"` (default) — the baseline moves so that the layers bend as little as possible: the classic flowing stream
* `"silhouette"` — the baseline keeps the stack centered at every category: a symmetric outline. This is the mode that centers the stack exactly when the data mixes positive and negative values; `"wiggle"` buys its smoothness by letting the baseline wander instead
* `"expand"` — the stack is stretched to the same height everywhere: each layer shows its share of the total. A category whose values add up to zero has no shares to show, so the stream narrows to a point there and picks up again at the next one
* `"zero"` — the baseline is the flat zero line: an ordinary stacked area chart (see [Axes](#axes))

```
// set the initial offset mode
chart.offset("silhouette");

// apply the chosen offset mode: the chart redraws itself
function changeOffset(value) {
  chart.offset(value);
  // the Y axis is hidden by default; show it only for the flat zero baseline
  chart.yAxis(value == "zero");
}
```

Switch the offset in the sample below to compare all four modes on the same stream:

{sample}BCT\_Stream\_Graph\_03{sample}

The Y axis is hidden by default and the sample shows it only for `"zero"`: it is the one mode where the vertical position of a layer is a value (see [Axes](#axes)).

A series that is not part of the stack, a threshold or an average drawn with `line()` for example, is covered by the Y scale in the `"wiggle"`, `"silhouette"`, and `"zero"` modes, so it lands inside the plot. In `"expand"` it is not: that mode replaces the values with shares of the total, the extra series keeps its own values, and it ends up drawn far outside the plot, where nobody sees it. Put such a line on one of the other three modes.

### Layer Order

The layers are stacked in the order they are added, the first one on top. The {api:anychart.charts.StreamGraph#sortOrder}sortOrder(){api} method restacks them, which decides which layers end up in the middle of the stream, where a band bends the least and reads the best:

* `"none"` (default) — the order the layers were added in
* `"asc"` — the layers are ranked by size, the total of their values with negative ones counted as positive, and the smallest goes to the bottom
* `"desc"` — the same ranking upside down: the largest layer goes to the bottom
* `"inside-out"` — the order that goes with the `"wiggle"` baseline (see [Offset](#offset)): the layers are arranged so that the stream bends as little as possible

Instead of one of these values, pass a comparator function. It gets two layers and works like the comparator of `Array.prototype.sort()`, and the layer it sorts first goes to the bottom. An unknown value is ignored and the layers keep the order they were added in; a comparator that throws does the same and reports the error in the console.

The method restacks the bands only: the [legend](#legend) goes on listing the layers in the order they were added.

```
// set the initial layer order
chart.sortOrder("inside-out");

// apply the chosen layer order: the chart redraws itself
function changeSortOrder(value) {
  chart.sortOrder(value);
}
```

Switch the order in the sample below to see the same six layers restacked:

{sample}BCT\_Stream\_Graph\_04{sample}

### Series Type

Each layer is an ordinary cartesian series and can be drawn with any of the area series types. By default, the layers are {api:anychart.charts.StreamGraph#splineArea}splineArea(){api} series. To use another type, add the layer with the method of that type, for example {api:anychart.charts.StreamGraph#area}area(){api} or {api:anychart.charts.StreamGraph#stepArea}stepArea(){api}.

To change the type of a series that already exists, call its {api:anychart.core.cartesian.series.Base#seriesType}seriesType(){api} method. It works on a chart that is already drawn.

The extras that the Stream graph adds on top of an ordinary cartesian series belong to its spline-area settings: a layer drawn with another type carries no [layer label](#labels_and_markers) until you ask for one, and its markers sit on the edge of the band instead of in the middle of it. The sample below sets the labels for every type, so that the comparison stays about the shape of the stream:

```
// layers drawn as step-area series
var series1 = chart.stepArea(searchData);
var series2 = chart.stepArea(socialData);
var series3 = chart.stepArea(emailData);

// the layer labels are a spline-area default: set them for every type
chart.maxLabels().enabled(true);
chart.maxLabels().format("{%seriesName}");

// apply the chosen type to every layer: the chart redraws itself
function changeSeriesType(value) {
  for (var i = 0; i < chart.getSeriesCount(); i++) {
    chart.getSeriesAt(i).seriesType(value);
  }
}
```

Choose a series type in the sample below to see the same stream drawn with it:

{sample}BCT\_Stream\_Graph\_05{sample}

### Appearance

The color of each layer comes from the chart [palette](../Appearance_Settings/Palettes). Set your own with the {api:anychart.charts.StreamGraph#palette}palette(){api} method. You set the [appearance settings](../Appearance_Settings) of individual series the same way as in other area-based series. The {api:anychart.core.cartesian.series.SplineArea#fill}fill(){api} method sets the layer fill. The {api:anychart.core.cartesian.series.SplineArea#stroke}stroke(){api} method sets its outline. Layers next to each other often look clearer with a thin contrasting stroke between them:

```
// one palette color per layer
chart.palette(["#01497c", "#2c7da0", "#61a5c2"]);

// a thin white outline visually separates adjacent layers
series1.stroke("1.5 #ffffff");
series2.stroke("1.5 #ffffff");
series3.stroke("1.5 #ffffff");

// override the fill of one layer directly, a named color works too
series1.fill("coral");
```

In the sample below, the layers take their colors from a custom palette, a thin white stroke separates them, and the Search layer has a fill of its own:

{sample}BCT\_Stream\_Graph\_06{sample}

### Labels and Markers

A layer carries three kinds of marks: the layer label the chart draws on its own, the point labels you enable, and the point markers.

#### Layer Labels

Every layer is labeled on the stream itself, without any setting: one [label](../Common_Settings/Labels) with the {api:anychart.core.cartesian.series.Base#name}name(){api} of the layer, centered in the band. The chart draws it at the category where the band is thick enough to hold the whole text, never at the first or the last one, and leaves it out of a layer that has no such place — a thin band on a small chart ends up unlabeled. This label is the {api:anychart.core.StateSettings#maxLabels}maxLabels(){api} of the layer, and its {api:anychart.core.ui.LabelsFactory#enabled}enabled(){api} method turns it off.

The layer label is configured like any [label](../Common_Settings/Labels): set its text with {api:anychart.core.ui.LabelsFactory#format}format(){api} and a [text formatter](../Common_Settings/Text_Formatters) — it is built from the largest point of the layer, so `{%value}` prints that largest value — and use the usual font settings. As an example, the demo below moves the label inside the band with the {api:anychart.core.ui.LabelsFactory#position}position(){api} method of a layer's own {api:anychart.core.StateSettings#maxLabels}maxLabels(){api}: `"center"` by default, `"center-top"` and `"center-bottom"` push it to the edges (write the two-part names).

```
// show the layer name and its largest value
chart.maxLabels().format("{%seriesName}: {%value}");
// make the layer labels readable
chart.maxLabels().fontColor("#000000");
```

In the sample below, the layer labels show the name and the largest value of each layer; switch the position to move them inside their bands:

{sample}BCT\_Stream\_Graph\_07{sample}

#### Point Labels

Point [labels](../Common_Settings/Labels) are a separate setting and are off by default. Enabling the {api:anychart.core.cartesian.series.Base#labels}labels(){api} of a layer puts the value of every point at the top edge of the band; font settings such as {api:anychart.core.ui.LabelsFactory#fontColor}fontColor(){api} are available. The largest point of the layer is the exception: its label is the [layer label](#layer_labels), so it carries the layer name in the middle of the band instead of the value, and turning the layer label off leaves that point with no label at all.

To label a single point differently, add a `label` field to its data row: the settings in it override the series labels for that point:

```
// create data; a label field in a data row overrides the series labels for that point
var searchData = [
  ["W1", 42], ["W2", 45], ["W3", 40],
  {x: "W4", value: 38, label: {format: "low: {%value}", fontWeight: "bold"}},
  ["W5", 44], ["W6", 50], ["W7", 55], ["W8", 52], ["W9", 48], ["W10", 46]
];

// show the value at every point of the first layer
series1.labels().enabled(true);
// set the label font color
series1.labels().fontColor("#000000");
```

In the sample below, the Search layer shows a value label at every point, with a bold custom label at its lowest one. The largest point, `55` at W7, is the exception in action: it carries the layer name in the band instead of its value:

{sample}BCT\_Stream\_Graph\_08{sample}

#### Markers

[Markers](General_Settings#markers) are icons at the data points. On a Stream graph a marker sits in the middle of the band at its category rather than at the value of the point: the Y axis is hidden, so an icon on the edge of a band would read as a value the point does not have. Pointing at the stream paints such a marker too, which is how the chart shows the category under the pointer. To show markers of your own on a layer, enable the {api:anychart.core.cartesian.series.Base#markers}markers(){api} of that series and set their type and size:

```
// enable the point markers on the second layer
series2.markers().enabled(true);
series2.markers().type("triangle-up");
series2.markers().size(6);
```

In the sample below, the Social layer shows triangular point markers:

{sample}BCT\_Stream\_Graph\_09{sample}

### Tooltips

A [tooltip](../Common_Settings/Tooltip) is a text box that appears when a point is hovered. On a stream graph the tooltip is in the `"union"` [display mode](../Common_Settings/Tooltip#display_mode) by default: one box titled with the hovered category lists a line per layer, and the default line is the layer name and the value. To change the mode, call {api:anychart.core.ui.Tooltip#displayMode}displayMode(){api}.

To change the line of each layer, call {api:anychart.core.ui.Tooltip#format}format(){api} with a [text formatter](../Common_Settings/Text_Formatters); to change the title, call {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api}. A formatting function gets the points of all layers at the hovered category in `points`, so the title can carry their total. To use HTML tags in the text, enable {api:anychart.core.ui.Tooltip#useHtml}useHtml(){api}. To change how the lines are assembled, call {api:anychart.core.ui.Tooltip#unionFormat}unionFormat(){api}:

```
// allow HTML tags in the tooltip text
chart.tooltip().useHtml(true);

// the title shows the hovered category and the total of all layers
chart.tooltip().titleFormat(function () {
  var total = 0;
  for (var i = 0; i < this.points.length; i++) {
    total += this.points[i].value;
  }
  return this.x + " &middot; total <b>" + total + "k</b>";
});

// format the line of each layer
chart.tooltip().format("{%seriesName}: <b>{%value}k</b>");
```

Hover a point in the sample below: the title shows the week and the total, the lines list the layers:

{sample}BCT\_Stream\_Graph\_10{sample}

### Legend

A [Legend](../Common_Settings/Legend) helps you identify the layers of the stream. It is turned on for the Stream graph by default. Each series adds one legend item, labeled with its {api:anychart.core.cartesian.series.Base#name}name(){api}, and the items follow the order the layers were added in — which is not the order they are stacked in once [Layer Order](#layer_order) has restacked them. Use the {api:anychart.core.ui.Legend#position}position(){api} method to move it. Use the {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api} method to set how the items are arranged:

```
// the legend is enabled by default; move it to the right
chart.legend().position("right");
chart.legend().itemsLayout("vertical");
```

In the sample below, the legend sits to the right of the stream with its items in one vertical column:

{sample}BCT\_Stream\_Graph\_11{sample}

### Axes

The X axis of a stream graph works the same way as in other cartesian charts, see [Axis Basics](../Axes_and_Grids/Axis_Basics). The Y axis is **disabled by default**: with the `"wiggle"`, `"silhouette"`, and `"expand"` offsets (see [Offset](#offset)) the layers are placed around an internal baseline, and the values of the Y scale mean nothing to the reader. With the `"zero"` offset, the layers are stacked from zero and the Y axis shows the running totals, so it is worth enabling it with the {api:anychart.charts.StreamGraph#yAxis}yAxis(){api} method. Axis titles are set with {api:anychart.core.axes.Linear#title}title(){api}; axis labels are formatted with the {api:anychart.core.axes.Linear#labels}labels(){api} of the axis and a [text formatter](../Common_Settings/Text_Formatters), see [Axes Labels Formatting](../Axes_and_Grids/Axes_Labels_Formatting):

```
// stack the layers from the zero baseline and show the Y axis
chart.offset("zero");
chart.yAxis(true);

// set the titles of the axes
chart.yAxis().title("Weekly volume");
chart.xAxis().title("Week");

// format the Y axis labels with a unit
chart.yAxis().labels().format("{%value}k");
```

In the sample below, the layers are stacked from the zero baseline, both axes carry a title, and the Y axis labels show the unit:

{sample}BCT\_Stream\_Graph\_12{sample}
