{:index 1.5}
# Lollipop Chart

## Overview

A Lollipop chart shows each data point as a thin stick with a round "head" marker at its end. The stick starts at the zero baseline. The head marks the value. This type is a variation of the [Column](Column_Chart) and [Stick](Stick_Chart) charts: it combines a [Stick](Stick_Chart) with a [Marker](Marker_Chart) head. Lollipop charts work well for data split into categories. They are lighter and less crowded than Column charts. Use them when you have many categories. They also help you highlight the value at the end of each stick.

This article shows how to build a basic Lollipop chart. It also shows how to set the options that are special to this type. The table below gives a short overview of the Lollipop chart's features:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) / [Base](../Quick_Start/Modules#base)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Lollipop}anychart.core.cartesian.series.Lollipop{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Lollipop](Stacked/Value/Lollipop_Chart), [Percent Stacked Lollipop](Stacked/Percent/Lollipop_Chart)</td></tr>
<tr><td>Vertical</td><td>[Vertical Lollipop](Vertical/Lollipop_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Lollipop Chart with Error Bars](Error_Chart/Lollipop_Chart)</td></tr>
<tr><td>Error Bars</td><td>[Lollipop Chart with Error Bars](Error_Chart/Lollipop_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Stick](Stick_Chart)</td></tr>
<tr><td></td><td>[Column](Column_Chart)</td></tr>
<tr><td></td><td>[Marker](Marker_Chart)</td></tr>
<tr><td></td><td>[Line](Line_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Lollipop Chart](https://www.anychart.com/chartopedia/chart-types/lollipop-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Lollipop chart needs the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

You can also use the [Base](../Quick_Start/Modules#base) module. It includes the two modules above and more: 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

A Lollipop chart is built on a Cartesian plot (a chart area with an X axis and a Y axis), like [Column](Column_Chart) and [Stick](Stick_Chart). There are two ways to create it.

To build a Lollipop chart from scratch, use the {api:anychart#lollipop}anychart.lollipop(){api} chart constructor. When you pass data to this constructor, it creates a Lollipop series. A point uses two data fields. The `x` field is the category. The `value` field sets the height of the stick and the position of the head. If you pass a plain array of numbers, only `value` is read, and `x` is set automatically.

```
// create data
var data = [
  {x: "January", value: 10000},
  {x: "February", value: 12000},
  {x: "March", value: 18000},
  {x: "April", value: 11000},
  {x: "May", value: 9000}
];

// create a lollipop chart
var chart = anychart.lollipop();

// create a lollipop series and set the data
var series = chart.lollipop(data);
// set the series name
series.name("Sales");

// set the chart title
chart.title("Lollipop Chart: Basic Sample");

// set the container id
chart.container("container");
// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Lollipop\_Chart\_01{sample}

## General Settings

AnyChart has many settings that work the same way for all chart types, including the Lollipop chart. Legend and interactivity settings are two examples.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

#### All Points

A lollipop point is a stick with a head. Two methods split it: {api:anychart.core.StateSettings#stroke}stroke(){api} sets the color and thickness of the stick, {api:anychart.core.StateSettings#fill}fill(){api} sets the color of the head. The head is a filled circle with no outline — `stroke()` does not affect it.

Set both per [state](../Common_Settings/Interactivity/States) with the {api:anychart.core.cartesian.series.Lollipop#normal}normal(){api}, {api:anychart.core.cartesian.series.Lollipop#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Lollipop#selected}selected(){api} methods. A point is hovered when you point at it and selected when you click it.

By default, the colors come from the chart [palette](../Appearance_Settings/Palettes): each series gets one base color for both the stick and the head. Your own `fill()` and `stroke()` override it.

```
// set the stroke and fill of the first series in the normal, hovered, and selected states
series1.normal().stroke("#00cc99", 2);
series1.normal().fill("#00cc99");
series1.hovered().stroke("#00cc99", 3);
series1.hovered().fill("#00cc99");
series1.selected().stroke("#00cc99", 4);
series1.selected().fill("#00cc99");
```

In the sample below, two series set their own stick and head colors in all three states:

{sample}BCT\_Lollipop\_Chart\_02{sample}

#### Point Size

The head is a circle, and its size is its radius. Set the radius with {api:anychart.core.cartesian.series.Lollipop#markers}markers(){api} and {api:anychart.core.ui.MarkersFactory#size}size(){api}; the default is 4 px. In the hovered and selected states, the head has a radius of its own: set it through {api:anychart.core.cartesian.series.Lollipop#hovered}hovered(){api} and {api:anychart.core.cartesian.series.Lollipop#selected}selected(){api}; the default is 6 px. The head is always a circle: the marker type does not change it.

```
// set the size of the lollipop heads
series.markers().size(10);
// set the size in the hovered and selected states
series.hovered().markers().size(12);
series.selected().markers().size(12);
```

In the sample below, the heads have a radius of 10 px, and 12 px when hovered or selected:

{sample}BCT\_Lollipop\_Chart\_03{sample}

#### Individual Points

If you use objects to set the data, you can change the look of individual points. Just add special fields to your data:

```
// create data with individual point settings
var data = [
  {x: "January", value: 10000},
  {x: "February", value: 12000},
  {x: "March", value: 18000,
   normal: {stroke: "3 #5cd65c", fill: "#5cd65c"},
   hovered: {stroke: "4 #5cd65c", fill: "#5cd65c"},
   selected: {stroke: "4 #5cd65c", fill: "#5cd65c"}},
  {x: "April", value: 11000},
  {x: "May", value: 9000}
];

// create a lollipop chart
var chart = anychart.lollipop();

// create a lollipop series and set the data
var series = chart.lollipop(data);
```

{sample}BCT\_Lollipop\_Chart\_04{sample}

The same fields can come from array data: map the extra columns with {api:anychart.data.Set#mapAs}mapAs(){api}. See [Data Sets: Mapping](../Working_with_Data/Data_Sets#mapping).

### Labels

[Labels](../Common_Settings/Labels) are text elements attached to points. Enable and format them with {api:anychart.core.cartesian.series.Lollipop#labels}labels(){api}, {api:anychart.core.ui.LabelsFactory#enabled}enabled(){api}, and {api:anychart.core.ui.LabelsFactory#format}format(){api}. The default label shows the value of the point above the head.

In {api:anychart.core.ui.LabelsFactory#format}format(){api}, use [text formatters](../Common_Settings/Text_Formatters): a token such as `{%value}` reads a field of the point.

```
// enable the series labels
series.labels().enabled(true);
// show the value of the point
series.labels().format("{%value}");
```

In the sample below, each label shows the value of its point:

{sample}BCT\_Lollipop\_Chart\_05{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box. It appears when you hover over a point on a chart. It has many visual and other settings. For example, you can edit the text with font settings and [text formatters](../Common_Settings/Text_Formatters). You can also change the background style and move the tooltip.

The tooltip has a title and a text body. Set them with {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} and {api:anychart.core.ui.Tooltip#format}format(){api}:

```
// set the tooltip title and text
series.tooltip().titleFormat("Month: {%x}");
series.tooltip().format("Value: {%value}");
```

In the sample below, hover over a point to see its month and value in the tooltip:

{sample}BCT\_Lollipop\_Chart\_06{sample}

### Stacked Lollipop

Several Lollipop series can be stacked on one another, by real values or by percentages: see [Stacked Charts](Stacked/Overview).

* [Stacked Lollipop](Stacked/Value/Lollipop_Chart)
* [Percent Stacked Lollipop](Stacked/Percent/Lollipop_Chart)

### Vertical Lollipop

Like most series types in AnyChart, the Lollipop series can be drawn with the categories running down the vertical axis: see [Vertical Charts](Vertical/Overview).

* [Vertical Lollipop](Vertical/Lollipop_Chart)

### Error Bars

A Lollipop series can carry error bars: see [Error Chart (Overview)](Error_Chart/Overview).

* [Lollipop Chart with Error Bars](Error_Chart/Lollipop_Chart)
