{:index 1}
# Scatter Plot

## Overview

AnyChart allows you to create scatter charts by using a special scatter chart constructor. It processes data points as-is: sets of arguments from different series don't influence each other, points are shown in the exact order they are set, and lines can be vertical and cross themselves. While the Cartesian constructor distributes points along the X-axis at equal intervals (categories), the scatter constructor distributes points according to their values.

Scatter charts are used mainly to visualize the results of mathematical calculations or physics experiments.

To learn more about the difference between the scatter and Cartesian constructors, read the [Scatter vs. Cartesian](#) article. See also the [Supported Types](#supported_types) section to find the list of supported series types.

This article explains how to create and configure scatter charts.

## Modules

Scatter charts require adding the [Core](../../Quick_Start/Modules#core) and [Scatter](../../Quick_Start/Modules#scatter) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-scatter.min.js"></script>
```

Alternatively, you can use the [Base](../../Quick_Start/Modules#base) module, which includes, among other things, the two modules mentioned above:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../../Quick_Start/Modules).

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

// create the first series (marker) and set the data
var series1 = chart.marker(data_1);

// create the second series (line) and set the data
var series2 = chart.line(data_2);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Scatter\_Chart\_01{sample}

## Grids

As a rule, scatter charts look better with grids. Use the {api:anychart.charts.Scatter#xGrid}xGgrid(){api}, {api:anychart.charts.Scatter#yGrid}yGgrid(){api}, {api:anychart.charts.Scatter#xMinorGrid}xMinorGrid(){api} and {api:anychart.charts.Scatter#yMinorGrid}yMinorGrid(){api} methods to create a major and a minor grids. 

The appearance of grids is configured with the {api:anychart.core.grids.Linear#stroke}stroke(){api} and {api:anychart.core.grids.Linear#palette}palette(){api} methods. 

For more information, see [Axis Basics: Grids](../../Axes_and_Grids/Axis_Basics#grids).

The sample below shows how to create minor and major grids and configure their strokes:

```
// enable major grids
chart.xGrid(true);
chart.yGrid(true);

// configure the visual settings of major grids
chart.xGrid().stroke({color: "#85adad", thickness: 0.7});
chart.yGrid().stroke({color: "#85adad", thickness: 0.7});

// enable minor grids
chart.xMinorGrid(true);
chart.yMinorGrid(true);

// configure the visual settings of minor grids
chart.xMinorGrid().stroke({color: "#85adad", thickness: 0.3, dash: 5});
chart.yMinorGrid().stroke({color: "#85adad", thickness: 0.3, dash: 5});
```

{sample}BCT\_Scatter\_Chart\_02{sample}

## Date/Time Scale

Scatter charts are typically used with date/time scales - to create such a scale, use the {api:anychart.scales#dateTime}dateTime(){api} method. You can learn more from this article: [Date/Time Axes](../../Axes_and_Grids/Date_Time_Axes).

In the following sample a data/time scale is set as the X-scale of a scatter chart (with the {api:anychart.charts.Scatter#xScale}xScale(){api} method):

```
// create a date/time scale
var dateScale = anychart.scales.dateTime();

// configure major and minor ticks on the date/time scale
dateScale.ticks().interval(1);
dateScale.minorTicks().interval(0, 2);

// set the date/time as the x-scale
chart.xScale(dateScale);
```

{sample}BCT\_Scatter\_Chart\_03{sample}

## Error Bars

In AnyChart, you can create charts with error bars (see [Error Chart](../Error_Chart)). This feature is often used with scatter charts, especially when they show results of some calculations or measurements.

Error bars are created with the {api:anychart.core.scatter.series.Base#error}error(){api} method.

**Note:** The key feature of error bars on scatter charts is that errors can be set both along the X- and Y-axes. Also, lower/upper and right/left errors can be different.

Here are the methods configuring error bars along the Y-axis:

* {api:anychart.core.utils.Error#valueError}valueError(){api} sets lower and upper Y-bars as equal
* {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api} sets lower Y-bars
* {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api} sets upper Y-bars

And these methods configure error bars along the X-axis:

* {api:anychart.core.utils.Error#xError}xError(){api} sets left and right X-bars as equal
* {api:anychart.core.utils.Error#xLowerError}xLowerError(){api} sets left X-bars
* {api:anychart.core.utils.Error#xUpperError}xUpperError(){api} sets right X-bars

**Note:** The {api:anychart.core.utils.Error#valueLowerError}valueLowerError(){api}, {api:anychart.core.utils.Error#valueUpperError}valueUpperError(){api}, {api:anychart.core.utils.Error#xLowerError}xLowerError(){api}, and {api:anychart.core.utils.Error#xUpperError}xUpperError(){api} methods have priority over {api:anychart.core.utils.Error#valueError}valueError(){api} and {api:anychart.core.utils.Error#xError}xError(){api}.

In the sample below, there is a Scatter Marker chart with X- and Y-error bars:

```
// create and configure error bars
var error = series.error();
error.valueLowerError(7);
error.valueUpperError(4);
error.xLowerError(0.1);
error.xUpperError(0.2);
```

{sample}BCT\_Scatter\_Chart\_04{sample}

## Drawing Tools and Annotations

Drawing tools provide you with the ability to draw/display custom objects on a chart - in our documentation these objects are usually called annotations. Typically, annotations are used in [stock charts](../../Stock_Charts/Overview). However, sometimes you may need to use hardcoded annotations with a scatter chart to visualize some basic shapes.

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
* [Scatter Line](Line_Chart)
* [Scatter Marker](Marker_Chart)

See also error charts:

* [Scatter Line with Error Bars](../Error_Chart/Line_Chart)
* [Scatter Marker with Error Bars](../Error_Chart/Marker_Chart)