---
sidebar_position: 4.1
---
# Spline Chart

## Overview

A spline chart is a line chart in which data points are connected by smooth curves: this modification is aimed to improve the design of a chart.

Like the regular line chart, it is commonly used to emphasize trends in data over equal time intervals.

The Line and Spline chart types share all the settings, so this article explains just how to create a basic Spline chart. To learn about other settings, read the [Line Chart](line-chart) article. You can also see the table below to get a brief overview of the Spline chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td><a href="../quick-start/modules#core">Core</a> + <a href="../quick-start/modules#basic-cartesian">Basic Cartesian</a> / <a href="../quick-start/modules#base">Base</a></td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Spline}anychart.core.cartesian.series.Spline{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td><a href="../working-with-data/overview">x, value</a></td></tr>
<tr><td>Multiple Series</td><td><a href="../working-with-data/overview">YES</a></td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td><a href="vertical/spline-chart">Vertical Spline</a></td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td><a href="error-chart/spline-chart">Spline Chart with Error Bars</a></td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td><a href="../stock-charts/series/spline">Stock Spline</a></td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td><a href="line-chart">Line</a></td></tr>
<tr><td></td><td><a href="step-line-chart">Step Line</a></td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/spline-chart/">Chartopedia: Spline Chart</a></td></tr>
<tr><td></td><td><a href="general-settings">General Settings</a></td></tr>
</table>

## Modules

The Spline chart requires adding the [Core](../quick-start/modules#core) and [Basic Cartesian](../quick-start/modules#basic-cartesian) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

Alternatively, you can use the [Base](../quick-start/modules#base) module, which includes, among other things, the two modules mentioned above: 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../quick-start/modules).

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

The Spline chart is a modification of the Line chart, so these two types share all the settings. You can find more settings in this article: [Line Chart](line-chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Spline chart (for example, legend and interactivity settings): [General Settings](general-settings).

In addition, see the full list of methods available for the Spline series: {api:anychart.core.cartesian.series.Spline}anychart.core.cartesian.series.Spline{api}.