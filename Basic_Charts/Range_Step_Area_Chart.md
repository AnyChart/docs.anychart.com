{:index 3.1}
# Range Step Area Chart

## Overview

A range step area chart is a range area chart in which points are connected by horizontal and vertical line segments, looking like steps of a staircase. Like in the regular range area chart, the area between two lines that represent low and high Y-values is filled with color or a pattern.

Step charts are used when it is necessary to highlight the irregularity of changes: for example, when changes in tax rates or interest rates are visualized. They show periods with no change and emphasize the exact time of each change (the range version also emphasizing the difference between high and low values).

The Range Step Area and Range Area chart types share almost all the settings, so this article explains just how to create a basic Range Step Area chart and configure its only special setting – step direction. To learn about other settings, read the [Range Area Chart](Range_Area_Chart) article. You can also see the table below to get a brief overview of the Range Step Area chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.RangeStepArea}anychart.core.cartesian.series.RangeStepArea{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Range Step Area](Vertical/Range_Step_Area_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Range Step Area](../Stock_Charts/Series/Range_Step_Area)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Area](Area_Chart)</td></tr>
<tr><td></td><td>[Spline Area](Spline_Area_Chart)</td></tr>
<tr><td></td><td>[Step Area](Step_Area_Chart)</td></tr>
<tr><td></td><td>[Range Area](Range_Area_Chart)</td></tr>
<tr><td></td><td>[Range Spline Area](Range_Spline_Area_Chart)</td></tr>
<tr><td></td><td>[HiLo](HiLo_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/range-steplinearea-chart/" target="_blank">Chartopedia: Range Step Area Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

##Quick Start

To create a Range Step Area series, use the {api:anychart.charts.Cartesian#rangeStepArea}rangeStepArea(){api} method (before, of course, you should create a chart by using {api:anychart#area}anychart.area(){api} or any other cartesian chart constructor).

Since range area charts plot two Y-values per data point, you need to specify two values for each category by using the **"low"** and **"high"** parameters.

```
// create data
var data = [
  {x: "1995", low: 0.10, high: 0.15},
  {x: "1996", low: 0.10, high: 0.15},
  {x: "1997", low: 0.12, high: 0.17},
  {x: "1998", low: 0.13, high: 0.20},
  {x: "1999", low: 0.15, high: 0.20},
  {x: "2000", low: 0.15, high: 0.22},
  {x: "2001", low: 0.15, high: 0.22},
  {x: "2002", low: 0.19, high: 0.23},
  {x: "2003", low: 0.20, high: 0.23}
];

// create a chart
chart = anychart.area();

// create a range step area series and set the data
var series = chart.rangeStepArea(data);

// set step direction to the forward mode
series.stepDirection("forward");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Range\_Step\_Area\_Chart\_01{sample}

## Settings

The Range Step Area chart is a modification of the Range Area chart, so these two types share almost all the settings. You can find more settings in this article: [Range Area Chart](Range_Area_Chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Range Step Area chart (for example, legend and interactivity settings): [General Settings](General_Settings).

In addition, see the full list of methods available for the Range Step Area series: {api:anychart.core.cartesian.series.RangeStepArea}anychart.core.cartesian.series.RangeStepArea{api}.

## Special Settings 

### Step Direction

The Range Step Area chart is formed by horizontal line segments of the same width as the category, connected with each other by vertical segments. To set the exact way these segments are placed, use this method: {api:anychart.core.cartesian.series.RangeStepArea#stepDirection}stepDirection(){api}.

There are three modes of step direction: center, backward, and forward. The default mode is **center** (in this case data points are placed to the center of horizontal segments).

In the **forward** mode data points are the starting points of horizontal segments:  

```
// set step direction to the forward mode
series.stepDirection("forward");
```

{sample}BCT\_Range\_Step\_Area\_Chart\_02{sample}

The **backward** mode sets data points as the final points of horizontal segments: 

```
// set step direction to the backward mode
series.stepDirection("backward");
```

{sample}BCT\_Range\_Step\_Area\_Chart\_03{sample}