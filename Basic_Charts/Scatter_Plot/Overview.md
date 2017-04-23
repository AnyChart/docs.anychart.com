{:index 1}
# Scatter Plot

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Grids](#grids)
* [Date/Time Scale](#date_time_scale)
* [Error Bars](#error_bars)
* [Drawing Tools and Annotations](#drawing_tools_and_annotations)
* [Supported Types](#supported_types)

## Overview

AnyChart allows you to create scatter charts by using a special scatter chart constructor. It processes data points as-is: sets of arguments from different series don't influence each other, points are shown in the exact order they are set, and lines can be vertical and cross themselves. While the Cartesian constructor distributes points along the X-axis at equal intervals (categories), the scatter constructor distributes points according to their values.

Scatter charts are used mainly to visualize the results of mathematical calculations or physics experiments.

To learn more about the difference between the scatter and Cartesian constructors, read the [Scatter vs. Cartesian](../../Architecture/Scatter_vs_Cartesian) article. See also the [Supported Types](#supported_types) section to find the list of supported series types.

This article explains how to create and configure scatter charts.

## Quick Start

To create a scatter chart, use the {api:anychart#scatter}anychart.scatter(){api} chart constructor. Then create one of the supported series types from this enum: {api:anychart.enums.ScatterSeriesType}anychart.enums.ScatterSeriesType{api}.

In the sample below, there are two series, Marker and Line, created by the {api:anychart.charts.Scatter#marker}marker(){api} and {api:anychart.charts.Scatter#line}line(){api} methods:

```
// create data for the first series
var data_1 = [
  {x: 0.6, value: 22},
  {x: 1.7, value: 55},
  {x: 2.3, value: 50},
  {x: 3.5, value: 80},
  {x: 3.9, value: 74},
  {x: 4, value: 68},
  {x: 4, value: 76},
  {x: 4.1, value: 84},
  {x: 4.7, value: 93}
];

// create data for the second series
var data_2 = [
  {x: 0.5, value: 17.5},
  {x: 4.75, value: 100}
];

// create a chart
chart = anychart.scatter();

// create the second series (marker) and set the data
var series1 = chart.marker(data_1);

// create the first series (line) and set the data
var series2 = chart.line(data_2);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Scatter\_Chart\_01{sample}


## Grids

As a rule, scatter charts look better with grids. Use the {api:anychart.charts.Scatter#grid}grid(){api} and {api:anychart.charts.Scatter#minorGrid}minorGrid(){api} methods to create a major and a minor grid. The appearance of grids is configured with the {api:anychart.core.grids.Linear#stroke}stroke(){api}, {api:anychart.core.grids.Linear#evenFill}evenFill(){api}, and {api:anychart.core.grids.Linear#oddFill}oddFill(){api} methods. 

For more information, see this article: [Axis Basics: Grids](../../Axes_and_Grids/Axis_Basics#grids).

The sample below shows how to create minor and major grids and configure their strokes:

```
// create major grids and bind them to the X and Y axes
chart.grid(0).axis(chart.xAxis());
chart.grid(1).axis(chart.yAxis());

// configure the visual settings of major grids
chart.grid(0).stroke({color: "#85adad", thickness: 0.7});
chart.grid(1).stroke({color: "#85adad", thickness: 0.7});

// create minor grids and bind them to the X and Y axes
chart.minorGrid(0).axis(chart.xAxis());
chart.minorGrid(1).axis(chart.yAxis());

// configure the visual settings of minor grids
chart.minorGrid(0).stroke({color: "#85adad", thickness: 0.3, dash: 5});
chart.minorGrid(1).stroke({color: "#85adad", thickness: 0.3, dash: 5});
```

{sample}BCT\_Scatter\_Chart\_02{sample}


<a name='date\_time\_scale'></a>
## Date/Time Scale

Scatter charts are typically used with date/time scales – to create such a scale, use the {api:anychart.scales#dateTime}dateTime(){api} method. You can learn more from this article: [Date/Time Axes](../../Axes_and_Grids/Date_Time_Axes).

In the following sample a data/time scale is set as the X-scale of a scatter chart (with the {api:anychart.anychart.charts.Scatter#xScale}xScale(){api} method):

```
// create a date/time scale
var dateScale = anychart.scales.dateTime();

// configure major and minor ticks on the date/time scale
dateScale.ticks().interval(1);
dateScale.minorTicks().interval(0, 2);

// set the date/time as the X-scale
chart.xScale(dateScale);
```

{sample}BCT\_Scatter\_Chart\_03{sample}

## Error Bars

In AnyChart, you can create charts with error bars (see [Error Chart](../Error_Chart)). This feature is often used with scatter charts, especially when they show results of some calculations or measurements.

Error bars are created with the {api:anychart.core.scatter.series.Marker#error}error(){api} method.

**Note:** Lower and upper errors can be different. Also,the key feature of error bars on scatter charts is that errors can be set both along the X and Y axes. 

Here are the methods configuring error bars along the Y-axis:

* {api:anychart.core.utils.Error#valueError}valueError(){api} sets the lower and upper Y-values as equal
* {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api} sets the lower Y-value
* {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api} sets the upper Y-value

And these methods configure error bars along the X-axis:

* {api:anychart.core.utils.Error#xError}xError(){api} sets the lower and upper X-values as equal
* {api:anychart.core.utils.Error#xLowerError}xLowerError(){api} sets the lower X-value
* {api:anychart.core.utils.Error#xUpperError}xUpperError(){api} sets the upper X-value

In the sample below, there is a Scatter Marker chart with X and Y error bars:

```
// create and configure error bars
var error = series.error();
error.xLowerError(0.2);
error.xUpperError(0.4);
error.valueUpperError(4);
error.valueLowerError(8);
```

{sample}BCT\_Scatter\_Chart\_04{sample}

## Drawing Tools and Annotations

Drawing tools provide you with the ability to draw/display custom objects on a chart – in our documentation these objects are usually called annotations. Typically, annotations are used in [stock charts](../../Stock_Charts/Overview). However, sometimes you may need to use hardcoded annotations with a scatter chart to visualize some basic shapes.

To add an annotation to a chart, refer to the {api:anychart.charts.Scatter#annotations}annotations(){api} object and call one of the methods used for creating annotations: {api:anychart.core.annotations.Ellipse}ellipse(){api}, {api:anychart.core.annotations.Rectangle}rectangle(){api}, {api:anychart.core.annotations.Triangle}triangle(){api}, and so on. To learn more, read about [annotations](../../Stock_Charts/Drawing_Tools_and_Annotations/Overview) in AnyStock.

Here is a sample scatter chart with two annotations, Ellipse and Rectangle. Some of their visual settings are configured:

```
// access the annotations() object of the chart to work with annotations
var controller = chart.annotations();

// create an ellipse annotation
var ellipse = controller.ellipse({
  xAnchor: "1.5",
  valueAnchor: 45,
  secondXAnchor: "2.6",
  secondValueAnchor: 62,
  fill: {opacity: 0},
  stroke: "2 red"
});

// create a rectangle annotation
var rectangle = controller.rectangle({
  xAnchor: "3.3",
  valueAnchor: 64,
  secondXAnchor: "4.4",
  secondValueAnchor: 88,
  fill: {opacity: 0},
  stroke: "2 red"
});

// disable interactivity for the ellipse annotation
ellipse.allowEdit(false);

// disable interactivity for the rectangle annotation
rectangle.allowEdit(false);
```

{sample}BCT\_Scatter\_Chart\_05{sample}

## Supported Types

Here is the list of supported scatter charts:

* [Scatter Bubble](Bubble_Chart)
* [Scatter Marker](Marker_Chart)
* [Scatter Line](Line_Chart)