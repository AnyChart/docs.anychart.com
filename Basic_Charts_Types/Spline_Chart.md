{:index 1}
#Spline Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)

## Overview

A spline chart is a line chart in which data points are connected by smooth curves: this modification is aimed to improve the design of a chart.

Like the regular line chart, it is commonly used to emphasize trends in data over equal time intervals.

The Line and Spline chart types share all the settings, so this article explains just how to create a basic spline chart. To learn more, see the [Line Chart](Line_Chart) article.

##Basic Settings

To create a spline series, use the {api:anychart.charts.Cartesian#spline}spline(){api} method (before, of course, you should create a chart by using {api:anychart#line}anychart.line(){api} or any other cartesian chart constructor):

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