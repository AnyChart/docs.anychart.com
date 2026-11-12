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
<tr><td></td><td>[Chartopedia: Waffle Chart](https://www.anychart.com/chartopedia/chart-types/waffle-chart/)</td></tr>
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

Only rows with a positive value take part. The chart drops zero, negative, and non-numeric rows before it works out the total, so they get no cells, no legend entry, and no share of their own — and they do not change anyone else's share either.

{sample}BCT\_Waffle\_Chart\_01{sample}

## General Settings

In AnyChart, many settings work the same way for all chart types. This includes the Waffle chart. Legend and interactivity settings are examples.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

Each category's color comes from the chart [palette](../Appearance_Settings/Palettes). Set your own with the {api:anychart.charts.Waffle#palette}palette(){api} method. A category is drawn as one block of cells; to style the cells one by one, or per state, see [Cell States](#cell_states).

The [appearance settings](../Appearance_Settings) react to the three [states](../Common_Settings/Interactivity/States). Use the {api:anychart.charts.Waffle#normal}normal(){api}, {api:anychart.charts.Waffle#hovered}hovered(){api}, and {api:anychart.charts.Waffle#selected}selected(){api} methods with {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api}. A category is hovered when you point at it and selected when you click it. By default, hovering lightens the palette color, and selecting darkens it. To change how a state reacts, pass a function to fill() or stroke(): inside it, the palette color is available as `this.sourceColor`:

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

Cells can carry a hatch pattern as well as a color. Set it with {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} on {api:anychart.charts.Waffle#normal}normal(){api}: pass a pattern name, or `true` for the default backward-diagonal one. A pattern tells the categories apart without relying on color, which also survives black-and-white printing. Only the normal state draws it: `hovered().hatchFill()` and `selected().hatchFill()` accept a value and read it back, but never paint, so a hatched category keeps the same pattern in every state. The pattern covers the whole block, so it crosses any [label](#labels) sitting on it.

Clicking a category selects it and clears the previous one; clicking it again keeps it selected, and clicking the chart area outside the grid clears the selection. A click with Ctrl, Shift or Cmd held adds the category to the selection instead of replacing it, and a Ctrl-click on a selected category removes it again. To keep the selection to one category whatever the keys, set {api:anychart.charts.Waffle#selectionMode}selectionMode(){api} to `"single-select"`. In code, {api:anychart.charts.Waffle#select}select(){api} takes the index of a category, or an array of indexes to select several at once, and {api:anychart.charts.Waffle#unselect}unselect(){api} clears the selection — a category name is not accepted. How the chart reacts to clicks is a general interactivity setting: see [General Settings](General_Settings#interactivity).

### Grid Layout

By default, the grid has 10×10 = 100 cells. To change it, use the {api:anychart.charts.Waffle#rows}rows(){api} and {api:anychart.charts.Waffle#columns}columns(){api} methods.

When the data is valid, the chart always fills the whole grid. Each category gets a block of cells that matches its share of the total. When the shares do not divide into whole cells, the chart rounds them so that the blocks still add up to the exact full grid (the largest-remainder method): a block can be off by at most one cell, the grid as a whole is never off.

Two cases break that rule, and both are drawn as an empty chart area. A grid with no rows or no columns is accepted as it is and has nothing to fill, and a total that is not a finite number leaves every cell unpainted. Nothing is drawn in place of the grid, here or when the data itself is empty: the standard *No data* label is off until you turn it on with {api:anychart.charts.Waffle#noData}noData(){api} — see [No Data Label](../Working_with_Data/No_Data_Label).

```
// change the default 10x10 grid
chart.rows(5);
chart.columns(20);
```

In the sample below, the sliders set the number of rows and columns of the grid:

{sample}BCT\_Waffle\_Chart\_03{sample}

### Cells

The chart draws the cells on its own; you set how they look with the `cell()` method. Its settings fall into three groups: the [shape](#cell_shape) of the cells, the [sizing](#cell_size) of the grid, and the look of the cells in each [state](#cell_states).

#### Cell Shape

Cells are squares by default. To draw another shape, pass its name to `shape()` of the normal state: the names are the library's marker shapes, listed in {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}, such as a circle, a triangle, or an arrow; a cell takes every marker shape except the two line shapes. The legend icon repeats the shape you choose. For square cells, `cornerRadius()` rounds the corners; the other shapes ignore it. The shape name is matched without regard to case, and any other value keeps the current shape:

```
// draw round cells
chart.cell().normal().shape("circle");
// round the corners of square cells: the other shapes ignore the radius
chart.cell().normal().cornerRadius(4);
```

In the sample below, the dropdown switches the shape of the cells through every marker shape a cell accepts; for square cells, a slider rounds the corners:

{sample}BCT\_Waffle\_Chart\_04{sample}

#### Cell Size

By default, the chart fits the cells to the chart area. The `cell().padding()` method sets the gap between cells, and `cell().aspectRatio()` sets their width-to-height ratio.

To give the cells a fixed size instead, use `cell().size()`: each cell is then exactly that many pixels high, and its width is that size multiplied by the aspect ratio. A fixed-size grid does not shrink to fit: if it outgrows the chart area, it stays centered, and its edges are cut off. Set the size back to `0` to return to the automatic fit:

```
// widen the gaps between the cells
chart.cell().padding(4);

// fixed cell height, cells twice as wide as they are high
chart.cell().size(20);
chart.cell().aspectRatio(2);
```

In the sample below, the sliders set the gap between the cells, their fixed height, and their aspect ratio:

{sample}BCT\_Waffle\_Chart\_05{sample}

#### Cell States

The cells are styled per state. Call `cell().normal()`, `cell().hovered()`, or `cell().selected()`, then the `fill()`, `stroke()`, `hatchFill()`, or `shape()` method of that state. A setting of a cell state overrides the same setting of the chart state (see [Appearance](#appearance)). The hovered and selected states apply to the whole category of the cell.

To style the cells one by one, pass a function to `fill()`, `stroke()`, or `hatchFill()`. It is called for every cell with `this.cellIndex`, the number of the cell in the grid, `this.row` and `this.column`, its position, `this.state`, its state, and `this.sourceColor`, the palette color of its category:

```
// cell states: white gaps, round cells under the pointer, a red fill when selected
chart.cell().normal().stroke("#ffffff", 1);
chart.cell().hovered().shape("circle");
chart.cell().selected().fill("#d32f2f");

// a lighter fill for every other cell of a category
chart.cell().normal().fill(function () {
  return this.cellIndex % 2 ? anychart.color.lighten(this.sourceColor, 0.4) : this.sourceColor;
});
```

In the sample below, every other cell of a category is lighter, the cells of the category under the pointer turn round, and a selected category turns red:

{sample}BCT\_Waffle\_Chart\_06{sample}

### Fill Direction

The {api:anychart.charts.Waffle#fillDirection}fillDirection(){api} method sets the order in which cells fill the grid:

* `"left-to-right"` (default) — row by row, from the top row down
* `"right-to-left"` — row by row, each row filled from its right end
* `"top-to-bottom"` — column by column, starting from the left column
* `"bottom-to-top"` — row by row, from the bottom row up

Three of the four directions fill the grid row by row. `top-to-bottom` is different on purpose: it is the only direction that fills the grid column by column. Use it when the category blocks should grow from left to right, one column at a time.

Write the names with their hyphens, as above. The case does not matter, but any other spelling falls back to the default direction.

```
// fill the grid from the bottom up
chart.fillDirection("bottom-to-top");
```

In the sample below, use the switcher to compare all four directions on the same data:

{sample}BCT\_Waffle\_Chart\_07{sample}

### Labels

[Labels](../Common_Settings/Labels) are text elements shown directly on the grid: one label per category, at the center of its block of cells.

Labels are off by default. To turn them on, use the {api:anychart.charts.Waffle#labels}labels(){api} method. The default text is the category name. To change it, call {api:anychart.core.ui.LabelsFactory#format}format(){api} with a [text formatter](../Common_Settings/Text_Formatters): the `{%name}`, `{%value}`, and `{%percent}` tokens are available.

Each label sits on a white plate with rounded corners, so black text reads on any palette. The plate is a [background](../Appearance_Settings/Background): restyle it with {api:anychart.core.ui.LabelsFactory#background}background(){api}, and pick a {api:anychart.core.ui.LabelsFactory#fontColor}fontColor(){api} that reads on it:

```
// enable the labels
chart.labels().enabled(true);

// show the name and the value instead
chart.labels().format("{%name}: {%value}");

// restyle the label background and the font color on it
chart.labels().background().fill("#212121");
chart.labels().fontColor("#ffffff");
```

In the sample below, each label shows the name and the value in white on a dark plate:

{sample}BCT\_Waffle\_Chart\_08{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box. It appears when you hover over a category. On a Waffle chart, it shows the category name as the title by default, and below it the value, followed by the category's percent share in brackets, rounded to at most one decimal place. To change it, use the {api:anychart.charts.Waffle#tooltip}tooltip(){api} method with the same tokens as in [Labels](#labels). In the sample below, the values do not sum to 100, so the tooltip shows a value and a percentage that actually differ:

```
// customize the tooltip title and text
chart.tooltip().titleFormat("Channel: {%name}");
chart.tooltip().format("{%value} orders - {%percent}{decimalsCount:1}% of the total");
```

{sample}BCT\_Waffle\_Chart\_09{sample}

### Legend

A [Legend](../Common_Settings/Legend) links the colors to the category names. On a Waffle chart, the legend is on by default. It sits below the grid.

The legend items are interactive. Pointing at an item hovers its category, and clicking it selects the category — the same [states](../Common_Settings/Interactivity/States) as pointing at and clicking the block of cells itself.

Use the {api:anychart.core.ui.Legend#position}position(){api} and {api:anychart.core.ui.Legend#itemsLayout}itemsLayout(){api} methods to move the legend:

```
// move the legend to the right and make it vertical
chart.legend().position("right");
chart.legend().itemsLayout("vertical");
```

In the sample below, the legend sits to the right of the grid, with its items stacked vertically:

{sample}BCT\_Waffle\_Chart\_10{sample}
