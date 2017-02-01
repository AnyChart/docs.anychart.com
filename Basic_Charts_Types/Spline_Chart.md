{:index 1}
#Spline Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Settings](#settings)

## Overview

A spline chart is a line chart in which data points are connected by smooth curves: this modification is aimed to improve the design of a chart.

Like the regular line chart, it is commonly used to emphasize trends in data over equal time intervals.

The Line and Spline chart types share all the settings, so this article explains just how to create a basic Spline chart. To learn more, see the [Line Chart](Line_Chart) article.

See also:

* [General Settings](General_Settings) (settings that affect all chart types)
* {api:anychart.core.cartesian.series.Spline}anychart.core.cartesian.series.Spline{api} (a full list of methods available for the Spline series).

##Quick Start

To create a Spline series, use the {api:anychart.charts.Cartesian#spline}spline(){api} method (before, of course, you should create a chart by using {api:anychart#line}anychart.line(){api} or any other cartesian chart constructor):

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
var chart = anychart.line();

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

In addition, see a full list of methods available for the Spline series: you can find it in {api:anychart.core.cartesian.series.Spline}AnyChart API{api}.