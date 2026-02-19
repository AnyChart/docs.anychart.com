---
sidebar_position: 4.1
---
# Spline Area Chart

## Overview

A spline area chart is an area chart in which data points are connected by smooth curves: this modification is aimed to improve the design of a chart.

Like in the regular area chart, the area between the line segments and the X-axis is filled with color or a pattern to emphasize the magnitude of change over time.

The Spline Area and Area chart types share all the settings, so this article explains just how to create a basic Spline Area chart. To learn about other settings, read the [Area Chart](area-chart) article. You can also see the table below to get a brief overview of the Spline Area Chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../quick-start/modules#core) + [Basic Cartesian](../quick-start/modules#basic-cartesian) / [Base](../quick-start/modules#base)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.SplineArea}anychart.core.cartesian.series.SplineArea{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../working-with-data/overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../working-with-data/overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Spline Area](stacked/value/spline-area-chart), [Percent Stacked Spline Area](stacked/percent/spline-area-chart)</td></tr>
<tr><td>Vertical</td><td>[Vertical Spline Area](vertical/spline-area-chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Spline Area Chart with Error Bars](error-chart/spline-area-chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Spline Area](../stock-charts/series/spline-area)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Area](area-chart)</td></tr>
<tr><td></td><td>[Step Area](step-area-chart)</td></tr>
<tr><td></td><td>[Range Area](range-area-chart)</td></tr>
<tr><td></td><td>[Range Spline Area](range-spline-area-chart)</td></tr>
<tr><td></td><td>[Range Step Area](range-step-area-chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Spline Area Chart](https://www.anychart.com/chartopedia/chart-types/spline-area-chart/)</td></tr>
<tr><td></td><td>[General Settings](general-settings)</td></tr>
</table>

## Modules

The Step Area chart requires adding the [Core](../quick-start/modules#core) and [Basic Cartesian](../quick-start/modules#basic-cartesian) modules:

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

To create a Spline Area series, use the {api:anychart.charts.Cartesian#splineArea}splineArea(){api} method (before, of course, you should create a chart by using {api:anychart#area}anychart.area(){api} or any other cartesian chart constructor):

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
chart = anychart.area();

// create a spline area series and set the data
var series = chart.splineArea(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Spline\_Area\_Chart{sample}

## Settings

The Spline Area chart is a modification of the Area chart, so these two types share almost all the settings. You can find more settings in this article: [Area Chart](area-chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Spline Area chart (for example, legend and interactivity settings): [General Settings](general-settings).

In addition, see the full list of methods available for the Spline Area series: {api:anychart.core.cartesian.series.SplineArea}anychart.core.cartesian.series.SplineArea{api}.