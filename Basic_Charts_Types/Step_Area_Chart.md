{:index 1}
#Step Area Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)

## Overview

A step area chart is an area chart in which data points are connected by horizontal and vertical lines. Like a regular area chart, it shows data arranged in columns or rows and emphasizes the magnitude of change over time, highlighting the total value across a trend.

The Step Area and Area chart types share all the settings, so this article explains just how to create a basic step area chart. To learn more, see the [Area Chart](Area_Chart) article.

##Basic Settings

To create a step area series, use the {api:anychart.charts.Cartesian#stepArea}stepArea(){api} method (before, of course, you should create a chart by using {api:anychart#area}anychart.area(){api} or any other cartesian chart constructor):

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

// create a step area series and set the data
var series = chart.stepArea(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_StepArea\_Chart\_01{sample}