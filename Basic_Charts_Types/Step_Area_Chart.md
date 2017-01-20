{:index 1}
#Step Area Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [Special Settings](#special_settings)
  * [Step Direction](#step_direction)

## Overview

A step area chart is an area chart in which points are connected by horizontal and vertical line segments, looking like steps of a staircase. The area between the line segments and the X-axis is filled with a color or a pattern.

Step area charts are used to visualize changes occurring at irregular intervals: for example, changes in tax rates or interest rates. While the basic area chart shows both the trend in data and the magnitude of change over time, the step area chart draws attention from the trend to highlight periods with no change and emphasize the exact time of each change (as well as its magnitude).

The Step Area and Area chart types share all the settings, so this article explains just how to create a basic step area chart and configure its only specific setting – step direction. To learn about other settings, see the [Area Chart](Area_Chart) article.

##Basic Settings

To create a step area series, use the {api:anychart.charts.Cartesian#stepArea}stepArea(){api} method (before, of course, you should create a chart by using {api:anychart#area}anychart.area(){api} or any other cartesian chart constructor):

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
var chart = anychart.area();

// create a step area series and set the data
var series = chart.stepArea(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Step\_Area\_Chart\_01{sample}

## Special Settings 

### Step Direction

The step area chart is formed by horizontal area segments of the same width as the category, connected with each other by vertical segments. To set the exact way these segments are placed, use this method: {api:anychart.core.cartesian.series.StepArea#stepDirection}stepArea(){api}.

There are three modes of step direction: center, backward, and forward.

The default mode is <strong>center</strong>. In this case data points are placed to the center of horizontal segments:

```
// create a step area series and set the data
var series = chart.stepArea(data);

// enable markers
series.markers(true);

// set the step direction to the center mode
series.stepDirection("center");
```

In the <strong>forward</strong> mode data points are the starting points of horizontal segments:  

{sample}BCT\_Step\_Area\_Chart\_02{sample}

```
// set the step direction to the center mode (default)
series.stepDirection("forward");
```

{sample}BCT\_Step\_Area\_Chart\_03{sample}

The <strong>backward</strong> mode sets data points as the final points of horizontal segments: 

```
// set the step direction to the center mode (default)
series.stepDirection("backward");
```

{sample}BCT\_Step\_Area\_Chart\_04{sample}