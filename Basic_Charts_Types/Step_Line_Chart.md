{:index 1}
#Step Line Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Settings](#settings)
* [Special Settings](#special_settings)
  * [Step Direction](#step_direction)

## Overview

A step line chart is a line chart in which points are connected by horizontal and vertical line segments, looking like steps of a staircase.

Step line charts are used to visualize changes occurring at irregular intervals: for example, changes in tax rates or interest rates. While the line chart emphasizes the trend in data over time, the step line chart draws attention from the trend to highlight periods with no change and emphasize the exact time of each change as well as its magnitude.

The Step Line and Line chart types share almost all the settings, so this article explains just how to create a basic Step Line chart and configure its only special setting – step direction. To learn about other settings, see the [Line Chart](Line_Chart) article.

See also:

* [General Settings](General_Settings) (settings that affect all chart types)
* {api:anychart.core.cartesian.series.StepLine}AnyChart API{api} (a full list of methods available for the Step Line series).

##Quick Start

To create a Step Line series, use the {api:anychart.charts.Cartesian#stepLine}stepLine(){api} method (before, of course, you should create a chart by using {api:anychart#line}anychart.line(){api} or any other cartesian chart constructor):

```
// create a data set
var data = anychart.data.set([
  ["1995", 0.10],
  ["1996", 0.10],
  ["1997", 0.12],
  ["1998", 0.13],
  ["1999", 0.15],
  ["2000", 0.15],
  ["2001", 0.15],
  ["2002", 0.19],
  ["2003", 0.20],
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

{sample}BCT\_Step\_Line\_Chart\_02{sample}

## Settings

The Step Line chart is a modification of the Line chart, so these two types share almost all the settings. You can find more settings in this article: [Line Chart](Line_Chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Step Line chart (for example, legend and interactivity settings): [General Settings](General_Settings).

In addition, see a full list of methods available for the Step Line series: you can find it in {api:anychart.core.cartesian.series.StepLine}AnyChart API{api}.

## Special Settings 

### Step Direction

The Step Line chart is formed by horizontal line segments of the same width as the category, connected with each other by vertical segments. To set the exact way these segments are placed, use this method: {api:anychart.core.cartesian.series.StepLine#stepDirection}stepDirection(){api}.

There are three modes of step direction: center, backward, and forward.

The default mode is <strong>center</strong>. In this case data points are placed to the center of horizontal segments:

```
// set the step direction to the center mode
series.stepDirection("center");
```

In the <strong>forward</strong> mode data points are the starting points of horizontal segments:  

{sample}BCT\_Step\_Line\_Chart\_02{sample}

```
// set the step direction to the center mode (default)
series.stepDirection("forward");
```

{sample}BCT\_Step\_Line\_Chart\_03{sample}

The <strong>backward</strong> mode sets data points as the final points of horizontal segments: 

```
// set the step direction to the center mode (default)
series.stepDirection("backward");
```

{sample}BCT\_Step\_Line\_Chart\_04{sample}