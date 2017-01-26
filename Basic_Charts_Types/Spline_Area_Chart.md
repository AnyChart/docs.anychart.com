{:index 1}
#Spline Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Settings](#settings)

## Overview

A spline area chart is an area chart in which data points are connected by smooth curves: this modification is aimed to improve the design of a chart.

Like in the regular area chart, the area between the line segments and the X-axis is filled with a color or a pattern to emphasize the magnitude of change over time.

The Spline Area and Area chart types share all the settings, so this article explains just how to create a basic spline area chart. To learn more, see the [Area Chart](Area_Chart) article.

In addition, you can read the [General Settings](General_Settings) article and see {api:anychart.core.cartesian.series.Area}AnyChart API{api} to find a full list of methods available for the Spline Area series.

##Quick Start

To create a spline area series, use the {api:anychart.charts.Cartesian#splineArea}splineArea(){api} method (before, of course, you should create a chart by using {api:anychart#area}anychart.area(){api} or any other cartesian chart constructor):

```
// create a data set
var data = anychart.data.set([
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
]);

// create a chart
var chart = anychart.area();

// create a spline area series and set the data
var series = chart.splineArea(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Spline\_Area\_Chart{sample}

## Settings

The Spline Area chart is a modification of the Area chart, so these two types share all the settings. To learn more, see the [Area Chart](Area_Chart) article.

There are also settings that affect all chart types in AnyChart, including both Area and Spline Area. To learn more, read the [General Settings](General_Settings) article.