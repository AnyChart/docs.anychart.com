{:index 3.1}
#Range Spline Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Settings](#settings)

## Overview

A range spline area chart is a range area chart in which data points are connected by smooth curves: this modification is aimed to improve the design of a chart.

Like the regular range area chart, it looks like two lines representing low and high Y-values, the area between these lines being filled with color or a pattern to emphasize the difference between high and low values.

The Range Spline Area and Range Area chart types share all the settings, so this article explains just how to create a basic Range Area chart. To learn about other settings, read the [Range Area Chart](Range_Area_Chart) article. You can also see the table below to get a brief overview of the Range Spline Area chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.RangeSplineArea}anychart.core.cartesian.series.RangeSplineArea{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Range Spline Area](Vertical/Range_Spline_Area_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Range Spline Area](../Stock_Charts/Series/Range_Spline_Area)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Area](Area_Chart)</td></tr>
<tr><td></td><td>[Spline Area](Spline_Area_Chart)</td></tr>
<tr><td></td><td>[Step Area](Step_Area_Chart)</td></tr>
<tr><td></td><td>[Range Area](Range_Area_Chart)</td></tr>
<tr><td></td><td>[Range Step Area](Range_Step_Area_Chart)</td></tr>
<tr><td></td><td>[HiLo](HiLo_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/range-splinearea-chart/" target="_blank">Chartopedia: Range Spline Area Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

##Quick Start

To create a Range Spline Area series, use the {api:anychart.charts.Cartesian#rangeSplineArea}rangeSplineArea(){api} method (before, of course, you should create a chart by using {api:anychart#area}anychart.area(){api} or any other cartesian chart constructor).

Since range area charts plot two Y-values per data point, you need to specify two values for each category by using the <strong>"low"</strong> and <strong>"high"</strong> parameters. 

```
// create data
var data = [
  {x: "January", low: 0.7, high: 6.1},
  {x: "February", low: 0.6, high: 6.3},
  {x: "March", low: 1.9, high: 8.5},
  {x: "April", low: 3.1, high: 10.8},
  {x: "May", low: 5.7, high: 14.4}
];

// create a chart
var chart = anychart.area();

// create a range spline area series and set the data
var series = chart.rangeSplineArea(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Range\_Spline\_Area\_Chart{sample}

## Settings

The Rangee Spline Area chart is a modification of the Range Area chart, so these two types share almost all the settings. You can find more settings in this article: [Range Area Chart](Range_Area_Chart).

Also, in AnyChart there are many settings that are configured in the same way for all chart types, including the Range Spline Area chart (for example, legend and interactivity settings): [General Settings](General_Settings).

In addition, see the full list of methods available for the Range Spline Area series: {api:anychart.core.cartesian.series.RangeSplineArea}anychart.core.cartesian.series.RangeSplineArea{api}.