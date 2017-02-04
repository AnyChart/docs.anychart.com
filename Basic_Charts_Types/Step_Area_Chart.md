{:index 1}
#Step Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Settings](#settings)
* [Special Settings](#special_settings)
  * [Step Direction](#step_direction)

## Overview

A step area chart is an area chart in which points are connected by horizontal and vertical line segments, looking like steps of a staircase. The area between the line segments and the X-axis is filled with a color or a pattern.

Step area charts are used when it is necessary to highlight the irregularity of changes: for example, when changes in tax rates or interest rates are visualized. While the basic area chart shows both the trend in data and the magnitude of change over time, the step area chart draws attention from the trend to show periods with no change and emphasize the exact time of each change (as well as its magnitude).

The Step Area and Area chart types share almost all the settings, so this article explains just how to create a basic Step Area chart and configure its only special setting – step direction. To learn about other settings, read the [Area Chart](Area_Chart) article. You can also see the table below to get a brief overview of the Step Area Chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.StepArea}anychart.core.cartesian.series.StepArea{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Step Area](Stacked_Charts/Stacked_Step_Area_Chart), [Percent Stacked Step Area](Stacked_Charts/Persent_Stacked_Step_Area_Chart)</td></tr>
<tr><td>Vertical</td><td>[Vertical Step Area](Vertical_Charts/Vertical_Step_Area_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Step Area Chart with Error Bars](Error_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Step Area](../Stock_Charts/Series/Step_Area)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td>[Area](Area_Chart)</td></tr>
<tr><td>[Spline Area](Spline_Area_Chart)</td></tr>
<tr><td>[Range Area](Range_Area_Chart)</td></tr>
<tr><td>[Range Spline Area](Range_Spline_Area_Chart)</td></tr>
<tr><td>[Range Step Area](Range_Step_Area_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td><a href="http://www.anychart.com/chartopedia/chart-types/stepline-area-chart/" target="_blank">Chartopedia: Step Area Chart</a></td></tr>
<tr><td>[General Settings](General_Settings)</td></tr>
</table>

##Quick Start

To create a Step Area series, use the {api:anychart.charts.Cartesian#stepArea}stepArea(){api} method (before, of course, you should create a chart by using {api:anychart#area}anychart.area(){api} or any other cartesian chart constructor):

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
  ["2003", 0.20]
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

## Settings

The Step Area chart is a modification of the Area chart, so these two types share almost all the settings. You can find more settings in this article: [Area Chart](Area_Chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Step Area chart (for example, legend and interactivity settings): [General Settings](General_Settings).

In addition, see a full list of methods available for the Step Area series: {api:anychart.core.cartesian.series.StepArea}anychart.core.cartesian.series.StepArea{api}.

## Special Settings 

### Step Direction

The Step Area chart is formed by horizontal area segments of the same width as the category, connected with each other by vertical segments. To set the exact way these segments are placed, use this method: {api:anychart.core.cartesian.series.StepArea#stepDirection}stepArea(){api}.

There are three modes of step direction: center, backward, and forward.

The default mode is <strong>center</strong>. In this case data points are placed to the center of horizontal segments:

```
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