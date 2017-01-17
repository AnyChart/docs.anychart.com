{:index 1}
#Step Line Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)

## Overview

A step line chart is a line chart in which data points are connected by horizontal and vertical lines. Like a regular area chart, it shows data arranged in columns or rows and emphasizes the magnitude of change over time, highlighting the total value across a trend.

The Step Line and Line chart types share all the settings, so this article explains just how to create a basic step line chart. To learn more, see the [Line Chart](Line_Chart) article.

##Basic Settings

To create a step line series, use the {api:anychart.charts.Cartesian#stepLine}stepLine(){api} method (before, of course, you should create a chart by using {api:anychart#line}anychart.line(){api} or any other cartesian chart constructor):

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

// create a step line series and set the data
var series = chart.stepLine(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_StepLine\_Chart\_02{sample}