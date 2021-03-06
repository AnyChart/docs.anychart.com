{:index 1.5}
# Jump Line Chart

## Overview

Jump Line Chart is similar to [Line Chart](Line_Chart) and [Step Line Chart](Step_Line_Chart): Jump Line considers the data points as the center points of "jumps" - horizontal line segments of a category width. 

The difference between Step Line and Jump Line is in vertical line segments, connecting the "steps" of a Step Line: nothing connects the points in JumpLine. 

Jump Line Charts are usually used for demonstrating rates.

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) / [Base](../Quick_Start/Modules#base)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.JumpLine}anychart.core.cartesian.series.JumpLine{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Jump Line](Vertical/Jump_Line_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Jump Line Chart with Error Bars](Error_Chart/Jump_Line_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Line](../Stock_Charts/Series/Jump_Line)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Line](Line_Chart)</td></tr>
<tr><td></td><td>[Step Line](Step_Line_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Jump Line Chart](https://www.anychart.com/chartopedia/chart-types/jump-line-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Jump Line chart rrequires adding the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

Alternatively, you can use the [Base](../Quick_Start/Modules#base) module, which includes, among other things, the two modules mentioned above: 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a chart, use the {api:anychart#jumpLine}anychart.jumpLine(){api} chart constructor. 

To create a Jump line series call the {api:anychart.charts.Cartesian#jumpLine}jumpLine(){api} method.

The following sample demonstrates how a basic Jump Line chart is created:

```
// create data
var data = [
  {x: "January", value: 10000},
  {x: "February", value: 12000},
  {x: "March", value: 18000},
  {x: "April", value: 11000},
  {x: "May", value: 9000}
];

// create a chart
chart = anychart.jumpLine();

// create a jump line series and set the data
var series = chart.jumpLine(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Jump\_Line\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Jump Line chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

The [appearance settings](../Appearance_Settings) of a Jump Line chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.JumpLine#normal}normal(){api}, {api:anychart.core.cartesian.series.JumpLine#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.JumpLine#selected}selected(){api} methods.

Combine them with the {api:anychart.core.StateSettings#stroke}stroke(){api} method. Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Jump Line series with appearance settings configured:

```
// create the first series
var series1 = chart.jumpLine(seriesData_1);

// configure the visual settings of the first series
series1.normal().stroke("#00cc99", 1, "10 5", "round");
series1.hovered().stroke("#00cc99", 2, "10 5", "round");
series1.selected().stroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.jumpLine(seriesData_2);

// configure the visual settings of the second series
series2.normal().stroke("#0066cc");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_Jump\_Line\_Chart\_02{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical Jump Line

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical/Overview).

Here is information about creating Vertical Jump Line series:

* [Vertical Jump Line](Vertical/Jump_Line_Chart)