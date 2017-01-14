{:index 1}
#Spline Area Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)

## Overview

A spline area chart is an area chart in which data points are connected by smooth curves. Like a regular area chart, it shows data arranged in columns or rows and emphasizes the magnitude of change over time, highlighting the total value across a trend. This modification is used to improve the design of a chart.

(???) ничего же, что технически речь идет о серии? можно здесь употреблять слово "чарт"?

The Spline Area and Area chart types share all the settings, so this article explains just how to create a basic spline area chart. To learn more, see the [Area Chart](Area_Chart) article.

##Basic Settings

(???) а тут уже пишу про серию, нормально? и нормально ли утверждение про any other chart constructor?

To create a spline area series, use the {api:anychart.charts.Cartesian#splineArea}splineArea(){api} (before, of course, you should create a chart by using the {api:anychart#area}anychart.area(){api} method or any other chart constructor):

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
var series = splineArea(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_SplineArea\_Chart{sample}