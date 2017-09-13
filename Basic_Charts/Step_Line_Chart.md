{:index 6}
# Step Line Chart

## Overview

A step line chart is a line chart in which points are connected by horizontal and vertical line segments, looking like steps of a staircase.

Step line charts are used when it is necessary to highlight the irregularity of changes: for example, when changes in tax rates or interest rates are visualized. While the line chart emphasizes the trend in data over time, the step line chart draws attention from the trend to show periods with no change and emphasize the exact time of each change as well as its magnitude.

The Step Line and Line chart types share almost all the settings, so this article explains just how to create a basic Step Line chart and configure its only special setting – step direction. To learn about other settings, read the [Line Chart](Line_Chart) article. You can also see the table below to get a brief overview of the Step Line chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.StepLine}anychart.core.cartesian.series.StepLine{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Step Line](Vertical/Step_Line_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Step Line Chart with Error Bars](Error_Chart/Step_Line_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Step Line](../Stock_Charts/Series/Step_Line)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Line](Line_Chart)</td></tr>
<tr><td></td><td>[Spline](Spline_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/stepline-chart/" target="_blank">Chartopedia: Step Line Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

##Quick Start

To create a Step Line series, use the {api:anychart.charts.Cartesian#stepLine}stepLine(){api} method (before, of course, you should create a chart by using {api:anychart#line}anychart.line(){api} or any other cartesian chart constructor):

```
// create data
var data = [
  {x: "1995", value: 0.10},
  {x: "1996", value: 0.10},
  {x: "1997", value: 0.12},
  {x: "1998", value: 0.13},
  {x: "1999", value: 0.15},
  {x: "2000", value: 0.15},
  {x: "2001", value: 0.15},
  {x: "2002", value: 0.19},
  {x: "2003", value: 0.20}
];

// create a chart
var chart = anychart.line();

// create a step line series and set the data
var series = chart.stepLine(data);

// set step direction to the forward mode
series.stepDirection("forward");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Step\_Line\_Chart\_01{sample}

## Settings

The Step Line chart is a modification of the Line chart, so these two types share almost all the settings. You can find more settings in this article: [Line Chart](Line_Chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Step Line chart (for example, legend and interactivity settings): [General Settings](General_Settings).

In addition, see the full list of methods available for the Step Line series: {api:anychart.core.cartesian.series.StepLine}anychart.core.cartesian.series.StepLine{api}.

## Special Settings 

### Step Direction

The Step Line chart is formed by horizontal line segments of the same width as the category, connected with each other by vertical segments. To set the exact way these segments are placed, use this method: {api:anychart.core.cartesian.series.StepLine#stepDirection}stepDirection(){api}.

There are three modes of step direction: center, backward, and forward. The default mode is <strong>center</strong> (in this case data points are placed to the center of horizontal segments).

In the <strong>forward</strong> mode data points are the starting points of horizontal segments:  

```
// set step direction to the forward mode
series.stepDirection("forward");
```

{sample}BCT\_Step\_Line\_Chart\_02{sample}

The <strong>backward</strong> mode sets data points as the final points of horizontal segments: 

```
// set step direction to the backward mode
series.stepDirection("backward");
```

{sample}BCT\_Step\_Line\_Chart\_03{sample}