{:index 7.5}
# Waffle Chart

## Overview

A Waffle chart (also known as a square pie chart) displays parts of a whole as a grid of small cells — 10×10 by default — where each category is represented by a block of cells proportional to its share of the total. Waffle charts serve the same purpose as [Pie](Pie_Chart) charts but are often easier to read precisely: cells can be counted, and on the default grid one cell equals 1% of the total. This type works best with a small number of categories.

This article explains how to create a basic Waffle chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Waffle chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Waffle](../Quick_Start/Modules#waffle_chart)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Waffle}anychart.charts.Waffle{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[name (or x), value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Pie](Pie_Chart)</td></tr>
<tr><td></td><td>[Donut](Doughnut_Chart)</td></tr>
<tr><td></td><td>[Treemap](Treemap_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Waffle chart requires adding the [Core](../Quick_Start/Modules#core) and [Waffle](../Quick_Start/Modules#waffle_chart) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-waffle.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Waffle chart, use the {api:anychart#waffle}anychart.waffle(){api} chart constructor and pass your data to it. Each data point carries two values — the category `name` and its `value`:

```
// create data: each category's value is its share of the total
var data = [
  {name: "In-store", value: 43},
  {name: "Online", value: 31},
  {name: "Wholesale", value: 17},
  {name: "Other", value: 9}
];

// create a waffle chart and set the data
var chart = anychart.waffle(data);

// set the chart title
chart.title("Waffle Chart: Basic Sample");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Waffle\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Waffle chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data is passed to the {api:anychart#waffle}anychart.waffle(){api} chart constructor or to the {api:anychart.charts.Waffle#data}data(){api} method. A Waffle chart uses two data fields:

* `name` (or `x`) — the category name
* `value` — the value of the category (values that are zero or negative are ignored)

The chart always fills the whole grid: each category gets a number of cells proportional to its share of the total of all values (rounded by the largest-remainder method). So, on the default 10×10 grid one cell represents 1% of the total, and if your values sum up to 100, one cell corresponds to exactly one unit of value.

You can set points as objects, or map the columns of an {api:anychart.data#set}anychart.data.set(){api} with {api:anychart.data.Set#mapAs}mapAs(){api}:

```
// object notation
var data = [
  {name: "In-store", value: 43},
  {name: "Online", value: 31}
];

// or map the columns of a data set
var dataSet = anychart.data.set([
  ["In-store", 43],
  ["Online", 31]
]);
var mapping = dataSet.mapAs({name: 0, value: 1});

var chart = anychart.waffle(mapping);
```

{sample}BCT\_Waffle\_Chart\_07{sample}

### Appearance

The [appearance settings](../Appearance_Settings) of a Waffle chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.Waffle#normal}normal(){api}, {api:anychart.charts.Waffle#hovered}hovered(){api}, and {api:anychart.charts.Waffle#selected}selected(){api} methods — the settings apply to the cells of the hovered / selected category as a whole. A category is shown in the **hover** state when it is pointed at and in the **selected** state when it is clicked (Ctrl/Cmd + click adds more categories to the selection, and a click on the empty area clears it). You can also select a category programmatically with {api:anychart.charts.Waffle#select}select(){api} and clear the selection with {api:anychart.charts.Waffle#unselect}unselect(){api}.

In the normal state, the color of each category comes from the chart [palette](../Appearance_Settings/Palettes) — set your own with the {api:anychart.charts.Waffle#palette}palette(){api} method. By default, the hovered and selected states transform that base color (lighten and darken it, respectively). To customize them, use the {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} methods — with a plain color or with a function that transforms the palette color of the category, available as `this.sourceColor`:

```
// one palette color per category
chart.palette(["#1976d2", "#64b5f6", "#ffa000", "#dde3ea"]);

// separate the cells with a white stroke
chart.normal().stroke("#ffffff");

// lighten cells on hover and darken them when selected (clicked)
chart.hovered().fill(function () {
  return anychart.color.lighten(this.sourceColor, 0.35);
});
chart.selected().fill(function () {
  return anychart.color.darken(this.sourceColor, 0.3);
});
chart.selected().stroke("2 #212121");
```

{sample}BCT\_Waffle\_Chart\_02{sample}

### Grid Layout

By default, the grid consists of 10×10 = 100 cells. To change it, use the {api:anychart.charts.Waffle#rows}rows(){api} and {api:anychart.charts.Waffle#columns}columns(){api} methods — the cells are allocated among the categories proportionally, whatever the grid size is:

```
// change the default 10×10 grid
chart.rows(5);
chart.columns(20);
```

{sample}BCT\_Waffle\_Chart\_03{sample}

### Cells

The cells of a Waffle chart are squares by default, and their size is calculated automatically to fit the chart bounds. The following methods adjust the geometry of cells:

* {api:anychart.charts.Waffle#cellShape}cellShape(){api} — `"square"` (default) or `"circle"`
* {api:anychart.charts.Waffle#cellPadding}cellPadding(){api} — the gap between adjacent cells, in pixels (2 by default)
* {api:anychart.charts.Waffle#cellCornerRadius}cellCornerRadius(){api} — rounds the corners of square cells (0 by default)
* {api:anychart.charts.Waffle#cellSize}cellSize(){api} — an explicit cell height in pixels; 0 (default) means auto-fit to the chart bounds
* {api:anychart.charts.Waffle#cellAspectRatio}cellAspectRatio(){api} — the width-to-height ratio of a cell (1 by default)

```
// draw round cells with wider gaps between them
chart.cellShape("circle");
chart.cellPadding(4);
```

For square cells, you can round the corners instead:

```
chart.cellShape("square");
chart.cellCornerRadius(4);
```

{sample}BCT\_Waffle\_Chart\_04{sample}

### Fill Direction

The {api:anychart.charts.Waffle#fillDirection}fillDirection(){api} method sets the order in which the cells of categories fill the grid:

* `"left-to-right"` (default) — row by row, from the top row down
* `"right-to-left"` — row by row, each row filled from its right end
* `"top-to-bottom"` — column by column, from the left column on
* `"bottom-to-top"` — row by row, from the bottom row up

```
// fill the grid from the bottom up
chart.fillDirection("bottom-to-top");
```

{sample}BCT\_Waffle\_Chart\_09{sample}

### Labels

[Labels](../Common_Settings/Labels) identify categories directly on the grid: one label per category is placed at the center of its block of cells. Labels are disabled by default; enable them with the {api:anychart.charts.Waffle#labels}labels(){api} method. The default format is `"{%name}\n{%percent}%"`, and the `{%name}`, `{%value}`, and `{%percent}` [text formatter](../Common_Settings/Text_Formatters) tokens are available:

```
// enable the labels (the default format is "{%name}\n{%percent}%")
chart.labels().enabled(true);

// show the name and the value instead
chart.labels().format("{%name}: {%value}");
chart.labels().fontColor("#ffffff");
chart.labels().fontWeight(600);
```

{sample}BCT\_Waffle\_Chart\_05{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a category is hovered over. By default, it shows the category name as the title and `{%value} ({%percent}%)` as the text. To customize it, use the {api:anychart.charts.Waffle#tooltip}tooltip(){api} method with the same tokens as in [Labels](#labels):

```
// customize the tooltip title and text
chart.tooltip().titleFormat("Channel: {%name}");
chart.tooltip().format("{%value} orders — {%percent}% of the total");
```

{sample}BCT\_Waffle\_Chart\_06{sample}

### Legend

A [Legend](../Common_Settings/Legend) maps the colors to the category names. On a Waffle chart, the legend is enabled by default and placed under the plot. Use the {api:anychart.core.ui.Legend#position}position(){api} and {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api} methods to move it:

```
// move the legend to the right and make it vertical
chart.legend().position("right");
chart.legend().itemsLayout("vertical");
```

{sample}BCT\_Waffle\_Chart\_08{sample}
