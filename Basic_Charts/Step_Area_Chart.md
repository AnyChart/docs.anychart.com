{:index 6}
# Step Area Chart

## Overview

A step area chart is an area chart in which points are connected by horizontal and vertical line segments, looking like steps of a staircase. The area between the line segments and the X-axis is filled with color or a pattern.

Step area charts are used when it is necessary to highlight the irregularity of changes: for example, when changes in tax rates or interest rates are visualized. While the basic area chart shows both the trend in data and the magnitude of change over time, the step area chart draws attention from the trend to show periods with no change and emphasize the exact time of each change (as well as its magnitude).

The Step Area and Area chart types share almost all the settings, so this article explains just how to create a basic Step Area chart and configure its only special setting - step direction. To learn about other settings, read the [Area Chart](Area_Chart) article. You can also see the table below to get a brief overview of the Step Area chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Basic Cartesian](../Quick_Start/Modules#basic_cartesian_charts) / [Base](../Quick_Start/Modules#base)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.StepArea}anychart.core.cartesian.series.StepArea{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Step Area](Stacked/Value/Step_Area_Chart), [Percent Stacked Step Area](Stacked/Percent/Step_Area_Chart)</td></tr>
<tr><td>Vertical</td><td>[Vertical Step Area](Vertical/Step_Area_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Step Area Chart with Error Bars](Error_Chart/Step_Area_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Step Area](../Stock_Charts/Series/Step_Area)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Area](Area_Chart)</td></tr>
<tr><td></td><td>[Spline Area](Spline_Area_Chart)</td></tr>
<tr><td></td><td>[Range Area](Range_Area_Chart)</td></tr>
<tr><td></td><td>[Range Spline Area](Range_Spline_Area_Chart)</td></tr>
<tr><td></td><td>[Range Step Area](Range_Step_Area_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Step Area Chart](https://www.anychart.com/chartopedia/chart-types/stepline-area-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Step Area chart requires adding the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic_cartesian_charts) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

Alternatively, you can use the [Base](../Quick_Start/Modules#base) module, which includes, among other things, the two modules mentioned above: 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

##Quick Start

To create a Step Area series, use the {api:anychart.charts.Cartesian#stepArea}stepArea(){api} method (before, of course, you should create a chart by using {api:anychart#area}anychart.area(){api} or any other cartesian chart constructor):

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
chart = anychart.area();

// create a step area series and set the data
var series = chart.stepArea(data);

// set step direction to the forward mode
series.stepDirection("forward");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Step\_Area\_Chart\_01{sample}

## Settings

The Step Area chart is a modification of the Area chart, so these two types share almost all the settings. You can find more settings in this article: [Area Chart](Area_Chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Step Area chart (for example, legend and interactivity settings): [General Settings](General_Settings).

In addition, see the full list of methods available for the Step Area series: {api:anychart.core.cartesian.series.StepArea}anychart.core.cartesian.series.StepArea{api}.

## Special Settings 

### Step Direction

The Step Area chart is formed by horizontal line segments of the same width as the category, connected with each other by vertical segments. To set the exact way these segments are placed, use this method: {api:anychart.core.cartesian.series.StepArea#stepDirection}stepDirection(){api}.

There are three modes of step direction: center, backward, and forward. The default mode is **center** (in this case data points are placed to the center of horizontal segments).

In the **forward** mode data points are the starting points of horizontal segments:  

```
// set step direction to the forward mode
series.stepDirection("forward");
```

{sample}BCT\_Step\_Area\_Chart\_02{sample}

The **backward** mode sets data points as the final points of horizontal segments: 

```
// set step direction to the backward mode
series.stepDirection("backward");
```

{sample}BCT\_Step\_Area\_Chart\_03{sample}