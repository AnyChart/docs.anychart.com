{:index 7.5}
# Waffle Chart

## Overview

A Waffle chart shows parts of a whole. It uses a grid of small cells, 10×10 by default. Each category is a block of cells. The block's size matches its share of the total.

Waffle charts do the same job as [Pie](Pie_Chart) charts, which is why they are sometimes called square pie charts. But they often make exact values easier to read. You can count the cells. On the default grid, one cell equals 1% of the total. This type works best with a few categories.

This article shows how to make a basic Waffle chart. It also shows how to set options that are special to this type. The table below gives a quick overview of the Waffle chart's features:

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
<tr><td></td><td>[Doughnut](Doughnut_Chart)</td></tr>
<tr><td></td><td>[Treemap](Treemap_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Waffle chart needs the [Core](../Quick_Start/Modules#core) and [Waffle](../Quick_Start/Modules#waffle_chart) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-waffle.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To make a Waffle chart, use the {api:anychart#waffle}anychart.waffle(){api} chart constructor. Pass your data to it. Each row has two values. `name` is the category, and `value` is its quantity. You can use `x` in place of `name`. The chart reads either field (`name` wins if you set both). The chart works out each category's share (percent) of the total on its own.

```
// create data: each value is a quantity - the chart computes each category's share
var data = [
  {name: "In-store", value: 43},
  {name: "Online", value: 31},
  {name: "Wholesale", value: 17},
  {name: "Other", value: 9}
];

// create a waffle chart and set the data
var chart = anychart.waffle(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Waffle\_Chart\_01{sample}

## General Settings

In AnyChart, many settings work the same way for all chart types. This includes the Waffle chart. Legend and interactivity settings are examples.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

Each category's color comes from the chart [palette](../Appearance_Settings/Palettes). Set your own with the {api:anychart.charts.Waffle#palette}palette(){api} method. A category is drawn as one block of identical cells, so there is no per-cell styling: every cell in the block shares the same fill and stroke.

The [appearance settings](../Appearance_Settings) react to the three [states](../Common_Settings/Interactivity/States). Use the {api:anychart.charts.Waffle#normal}normal(){api}, {api:anychart.charts.Waffle#hovered}hovered(){api}, and {api:anychart.charts.Waffle#selected}selected(){api} methods with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api}. A category is hovered when you point at it and selected when you click it; {api:anychart.charts.Waffle#select}select(){api} and {api:anychart.charts.Waffle#unselect}unselect(){api} do the same in code. By default, hovering lightens the palette color, and selecting darkens it. To change how a state reacts, pass a function to fill() or stroke(): inside it, the palette color is available as `this.sourceColor`:

```
// one palette color per category
chart.palette(["#1976d2", "#64b5f6", "#ffa000", "#dde3ea"]);

// separate the cells with a white stroke
chart.normal().stroke("#ffffff");

// lighten cells on hover and darken them when selected
chart.hovered().fill(function () {
  return anychart.color.lighten(this.sourceColor, 0.35);
});
chart.selected().fill(function () {
  return anychart.color.darken(this.sourceColor, 0.3);
});
chart.selected().stroke("2 #212121");
```

In the sample below, pointing at a category lightens its block of cells, and clicking it darkens the block and gives its cells a dark outline:

{sample}BCT\_Waffle\_Chart\_02{sample}

### Grid Layout

By default, the grid has 10×10 = 100 cells. To change it, use the {api:anychart.charts.Waffle#rows}rows(){api} and {api:anychart.charts.Waffle#columns}columns(){api} methods.

The chart always fills the whole grid. Each category gets a number of cells that matches its share of the total. The chart rounds these numbers with the largest-remainder method. This method rounds shares so they still add up to the full grid. It works with any grid size. Say your values add up to 100. Then one cell of the default 10×10 grid equals exactly one unit of value.

When the shares do not divide evenly into cells, the chart hands the leftover cells to the categories with the largest remainders. For example, take the values 5, 3, and 1. Their exact shares of the default 100 cells are 55.6, 33.3, and 11.1 cells. The chart draws 56, 33, and 11 cells, together exactly 100.

```
// change the default 10x10 grid
chart.rows(5);
chart.columns(20);
```

In the sample below, the sliders set the number of rows and columns of the grid:

{sample}BCT\_Waffle\_Chart\_03{sample}

### Cells

The cells of a Waffle chart are squares by default. The chart works out their size on its own to fit the chart area. The following methods adjust the shape and size of cells:

* {api:anychart.charts.Waffle#cellShape}cellShape(){api} — `"square"` or `"circle"` (`"square"` by default)
* {api:anychart.charts.Waffle#cellPadding}cellPadding(){api} — the gap between cells, in pixels (2 by default)
* {api:anychart.charts.Waffle#cellCornerRadius}cellCornerRadius(){api} — rounds the corners of square cells (0 by default)
* {api:anychart.charts.Waffle#cellSize}cellSize(){api} — a fixed cell height in pixels (0 by default — the chart then works out the size on its own)
* {api:anychart.charts.Waffle#cellAspectRatio}cellAspectRatio(){api} — the width-to-height ratio of a cell (1 by default)

The two sizing modes work like this. With the default `cellSize(0)`, the chart fits the cells to the chart area, at the width-to-height ratio you set with `cellAspectRatio()`. When you set an explicit `cellSize`, the chart stops fitting: each cell is exactly that many pixels high and `cellSize × cellAspectRatio` pixels wide. If the grid then becomes bigger than the chart area, it does not shrink. The grid stays centered, and its edges are cut off.

```
// draw round cells with wider gaps between them
chart.cellShape("circle");
chart.cellPadding(4);
```

In the sample below, the cells are circles with a 4-pixel gap between them:

{sample}BCT\_Waffle\_Chart\_04{sample}

For square cells, you can round the corners instead:

```
chart.cellShape("square");
chart.cellCornerRadius(4);
```

### Fill Direction

The {api:anychart.charts.Waffle#fillDirection}fillDirection(){api} method sets the order in which cells fill the grid:

* `"left-to-right"` (default) — row by row, from the top row down
* `"right-to-left"` — row by row, each row filled from its right end
* `"top-to-bottom"` — column by column, starting from the left column
* `"bottom-to-top"` — row by row, from the bottom row up

Three of the four directions fill the grid row by row. `top-to-bottom` is different on purpose: it is the only direction that fills the grid column by column. Use it when the category blocks should grow from left to right, one column at a time.

```
// fill the grid from the bottom up
chart.fillDirection("bottom-to-top");
```

In the sample below, use the switcher to compare all four directions on the same data:

{sample}BCT\_Waffle\_Chart\_05{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements. You can place them anywhere on any chart. On a Waffle chart, they show category names directly on the grid. There is one label per category, placed at the center of its block of cells. Labels are off by default. Turn them on with the {api:anychart.charts.Waffle#labels}labels(){api} method. The default format is `"{%name}\n{%percent}%"`. You can use the `{%name}`, `{%value}`, and `{%percent}` [text formatter](../Common_Settings/Text_Formatters) tokens:

```
// enable the labels
chart.labels().enabled(true);

// show the name and the value instead
chart.labels().format("{%name}: {%value}");
chart.labels().fontColor("#ffffff");
chart.labels().fontWeight(600);
```

In the sample below, each block of cells carries a white label with the category name and its value:

{sample}BCT\_Waffle\_Chart\_06{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box. It appears when you hover over a category. On a Waffle chart, it shows the category name as the title by default. The default text is `{%value} ({%percent}%)`. To change it, use the {api:anychart.charts.Waffle#tooltip}tooltip(){api} method with the same tokens as in [Labels](#labels). In the sample below, the values do not sum to 100, so the tooltip shows a value and a percentage that actually differ:

```
// customize the tooltip title and text
chart.tooltip().titleFormat("Channel: {%name}");
chart.tooltip().format("{%value} orders - {%percent}{decimalsCount:1}% of the total");
```

{sample}BCT\_Waffle\_Chart\_07{sample}

### Legend

A [Legend](../Common_Settings/Legend) links the colors to the category names. On a Waffle chart, the legend is on by default. It sits below the grid. Use the {api:anychart.core.ui.Legend#position}position(){api} and {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api} methods to move it:

```
// move the legend to the right and make it vertical
chart.legend().position("right");
chart.legend().itemsLayout("vertical");
```

In the sample below, the legend sits to the right of the grid, with its items stacked vertically:

{sample}BCT\_Waffle\_Chart\_08{sample}
