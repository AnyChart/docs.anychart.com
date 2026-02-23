---
slug: "/Basic_Charts/Line_Chart"
sidebar_position: 1.5
---
# Line Chart

## Overview

A line chart is a chart that shows information as a series of data points connected by straight line segments.

The line chart is very common in many fields. As a rule, it is used to emphasize trends in data over equal time intervals, such as months, quarters, fiscal years, and so on.

This article explains how to create a basic Line chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Line chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td><a href="../Quick_Start/Modules#core">Core</a> + <a href="../Quick_Start/Modules#basic-cartesian">Basic Cartesian</a> / <a href="../Quick_Start/Modules#base">Base</a></td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Line}anychart.core.cartesian.series.Line{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td><a href="../Working_with_Data/Overview">x, value</a></td></tr>
<tr><td>Multiple Series</td><td><a href="../Working_with_Data/Overview">YES</a></td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td><a href="Vertical/Line_Chart">Vertical Line</a></td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td><a href="Error_Chart/Line_Chart">Line Chart with Error Bars</a></td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td><a href="Polar_Plot/Line_Chart">Polar Line</a>, <a href="Polar_Plot/Polyline_Chart">Polyline</a></td></tr>
<tr><td>Radar</td><td><a href="Radar_Plot/Line_Chart">Radar Line</a></td></tr>
<tr><td>Scatter</td><td><a href="Scatter_Plot/Line_Chart">Scatter Line</a></td></tr>
<tr><td>Stock</td><td><a href="../Stock_Charts/Series/Line">Stock Line</a></td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td><a href="Spline_Chart">Spline</a></td></tr>
<tr><td></td><td><a href="Step_Line_Chart">Step Line</a></td></tr>
<tr><td></td><td><a href="Jump_Line_Chart">Jump Line</a></td></tr>
<tr><td></td><td><a href="Sparkline_Chart#line-sparkline-chart">Line Sparkline</a></td></tr>
<tr><td></td><td><a href="Polyline_Chart">Polyline</a></td></tr>

<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/line-chart/">Chartopedia: Line Chart</a></td></tr>
<tr><td></td><td><a href="General_Settings">General Settings</a></td></tr>
</table>

## Modules

The Line chart requires adding the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic-cartesian) modules:

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

To create a Line chart, use the {api:anychart#line}anychart.line(){api} chart constructor. If you pass the data to this chart constructor, it creates a line series.

To create a Line series explicitly, call the {api:anychart.charts.Cartesian#line}line(){api} method.

The following sample demonstrates how a basic Line chart is created:

```
// create data
var data = [
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
];
    
// create a chart
chart = anychart.line();

// create a line series and set the data
var series = chart.line(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Line\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Line chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

The [appearance settings](../Appearance_Settings) of a Line chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Line#normal}normal(){api}, {api:anychart.core.cartesian.series.Line#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Line#selected}selected(){api} methods.

Combine them with the {api:anychart.core.StateSettings#stroke}stroke(){api} method. Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Line series with appearance settings configured:

```
// create the first series
var series1 = chart.line(seriesData_1);

// configure the visual settings of the first series
series1.normal().stroke("#00cc99", 1, "10 5", "round");
series1.hovered().stroke("#00cc99", 2, "10 5", "round");
series1.selected().stroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.line(seriesData_2);

// configure the visual settings of the second series
series2.normal().stroke("#0066cc");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_Line\_Chart\_02{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Scales

When Line chart is used with the ordinal scale and you wish to remove the gaps to the right and left of the line you need to change the [ordinal scale mode](../Axes_and_Grids/Scales#ordinal) to `'continuous'`:

```
chart.xScale().mode('continuous');
```

{sample}BCT\_Line\_Chart\_03{sample}

### Vertical Line

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts](Vertical/Overview).

Here is information about creating Vertical Line series:

* [Vertical Line](Vertical/Line_Chart)
* [Vertical Spline](Vertical/Spline_Chart)
* [Vertical Step Line](Vertical/Step_Line_Chart)