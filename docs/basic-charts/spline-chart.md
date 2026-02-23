---
slug: "/Basic_Charts/Spline_Chart"
sidebar_position: 4.1
---
# Spline Chart

## Overview

A spline chart is a line chart in which data points are connected by smooth curves: this modification is aimed to improve the design of a chart.

Like the regular line chart, it is commonly used to emphasize trends in data over equal time intervals.

The Line and Spline chart types share all the settings, so this article explains just how to create a basic Spline chart. To learn about other settings, read the [Line Chart](Line_Chart) article. You can also see the table below to get a brief overview of the Spline chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td><a href="../Quick_Start/Modules#core">Core</a> + <a href="../Quick_Start/Modules#basic-cartesian">Basic Cartesian</a> / <a href="../Quick_Start/Modules#base">Base</a></td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Spline}anychart.core.cartesian.series.Spline{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td><a href="../Working_with_Data/Overview">x, value</a></td></tr>
<tr><td>Multiple Series</td><td><a href="../Working_with_Data/Overview">YES</a></td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td><a href="Vertical/Spline_Chart">Vertical Spline</a></td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td><a href="Error_Chart/Spline_Chart">Spline Chart with Error Bars</a></td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td><a href="../Stock_Charts/Series/Spline">Stock Spline</a></td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td><a href="Line_Chart">Line</a></td></tr>
<tr><td></td><td><a href="Step_Line_Chart">Step Line</a></td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/spline-chart/">Chartopedia: Spline Chart</a></td></tr>
<tr><td></td><td><a href="General_Settings">General Settings</a></td></tr>
</table>

## Modules

The Spline chart requires adding the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic-cartesian) modules:

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

To create a Spline series, use the {api:anychart.charts.Cartesian#spline}spline(){api} method (before, of course, you should create a chart by using {api:anychart#line}anychart.line(){api} or any other cartesian chart constructor):

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
chart = anychart.line();

// create a spline series and set the data
var series = chart.spline(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Spline\_Chart{sample}

## Settings

The Spline chart is a modification of the Line chart, so these two types share all the settings. You can find more settings in this article: [Line Chart](Line_Chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Spline chart (for example, legend and interactivity settings): [General Settings](General_Settings).

In addition, see the full list of methods available for the Spline series: {api:anychart.core.cartesian.series.Spline}anychart.core.cartesian.series.Spline{api}.