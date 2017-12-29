{:index 1}
# 3D Charts

## Overview

AnyChart supports 3D versions of the following chart types: Area, Bar, Column, Line, and Pie. Some modifications of these types can be also drawn in 3D – see the [Supported Types](#supported_types) section.

This article explains how to create and configure 3D charts.

## Quick Start

To create a 3D chart, use one of the following chart constructors:

* {api:anychart#area3d}anychart.area3d(){api}
* {api:anychart#bar3d}anychart.bar3d(){api}
* {api:anychart#column3d}anychart.column3d(){api}
* {api:anychart#pie3d}anychart.pie3d(){api}
* {api:anychart#line3d}anychart.line3d(){api}

You can either pass your data to the chart constructor or create a series by using one of these methods:

* {api:anychart.charts.Cartesian3d#area}area(){api}
* {api:anychart.charts.Cartesian3d#bar}bar(){api}
* {api:anychart.charts.Cartesian3d#column}column(){api}
* {api:anychart.charts.Cartesian3d#line}line(){api}
* {api:anychart.charts.Cartesian3d#line2d}line2d(){api}

That is how it looks like:

```
// create data
var data = [
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
];

// create a 3d column chart
chart = anychart.column3d();

// create a column series and set the data
var series = chart.column(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_3D\_01{sample}

## Z-Angle

3D charts can be shown from different angles of view: to set the angle, use the {api:anychart.charts.Cartesian3d#zAngle}zAngle(){api} method with any 3D chart except the 3D Pie.

**Note:** The value you use as a parameter should fall in the range from 0 to 90. By default, the angle is 45°. 

In the following sample, there is a 3D Column chart with the Z-angle set to 20°.

```
// configure the z-angle of the chart
chart.zAngle(20);
```

{sample}BCT\_3D\_02{sample}

## Z-Aspect

3D charts can vary in depth: to set it, use the {api:anychart.charts.Cartesian3d#zAspect}zAspect(){api} method with any 3D chart except the 3D Pie.

**Note:** You can set the depth either in pixels (numeric value) or in percent (string value).

In the sample below, there is a 3D Column chart with the Z-aspect set to 100% (the Z-angle is also configured):

```
// configure the z-aspect of the chart
chart.zAspect("100%"");
```

{sample}BCT\_3D\_03{sample}

## Z-Distribution

The series of multi-series 3D charts can be distributed either along the Z-axis or along the X-axis.

To enable or disable the Z-axis distribution, call the {api:anychart.charts.Cartesian3d#zDistribution}zDistribution(){api} method and use `true` or `false` as paramater (when the Z-axis distribution is disabled, series are distributed along the X-axis).

The default distribution depends on the chart constructor you use. For {api:anychart#bar3d}anychart.bar3d(){api} and {api:anychart#column3d}anychart.column3d(){api}, it is X-distribution. For {api:anychart#area3d}anychart.area3d(){api} and {api:anychart#line3d}anychart.line3d(){api}, it is Z-distribution.

Here is a sample 3D Column chart with the Z-axis distribution enabled:

```
// create a 3d column chart
chart = anychart.column3d();

// enable the z-axis distribution
chart.zDistribution(true);

// create series (column) and set the data
var series1 = chart.column(seriesData_1);
var series2 = chart.column(seriesData_2);
var series3 = chart.column(seriesData_3);
```

{sample}BCT\_3D\_04{sample}

##Supported Types

Here is the list of supported 3D charts:

* [3D Area](Area_Chart)
* [3D Bar](Bar_Chart)
* [3D Column](Column_Chart)
* [3D Doughnut](Doughnut_Chart)
* [3D Pie](Pie_Chart)
* [3D Line](Line_Chart)
* [3D 2D Line](2D_Line_Chart)

See also 3D stacked charts:

* [3D Percent Stacked Area](../Stacked/Percent/3D_Area_Chart)
* [3D Percent Stacked Bar](../Stacked/Percent/3D_Bar_Chart)
* [3D Percent Stacked Column](../Stacked/Percent/3D_Column_Chart)
* [3D Value Stacked Area](../Stacked/Value/3D_Area_Chart)
* [3D Value Stacked Bar](../Stacked/Value/3D_Bar_Chart)
* [3D Value Stacked Column](../Stacked/Value/3D_Column_Chart)