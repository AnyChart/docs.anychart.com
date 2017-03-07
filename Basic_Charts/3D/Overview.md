{:index 1}
#3D Charts

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Z-Angle](#z_angle)
* [Z-Aspect](#z_aspect)
* [Z-Distribution](#z_distribution)
* [Supported Types](#supported_types)

## Overview

AnyChart supports 3D versions of the following chart types: Area, Bar, Column, and Pie. Some modifications of these types can be also drawn in 3D – see the [Supported Types](#supported_types) section.

This article explains how to create and configure 3D charts.


## Quick Start

To create a 3D chart, use one of the following chart constructors: {api:anychart#area3d}anychart.area3d(){api}, {api:anychart#column3d}anychart.column3d(){api}, {api:anychart#bar3d}anychart.bar3d(){api}, {api:anychart#pie3d}anychart.pie3d(){api}.

You can either pass your data to the chart constructor or create a series, using one of these methods: {api:anychart.charts.Cartesian#area}area(){api}, {api:anychart.charts.Cartesian#column}column(){api}, {api:anychart.charts.Cartesian#bar}bar(){api} (the second option is not available for the 3D Pie chart):

```
// create a 3d column chart
chart = anychart.column3d();

// create a column series and set the data
var series = chart.column(data);
```

{sample}BCT\_3d\_01{sample}

<a name='z_angle'></a>
## Z-Angle

3D charts can be shown from different angles of view: to set the angle, use the {api:anychart.charts.Cartesian3d#zAngle}zAngle(){api} method with any 3D chart except the 3D Pie.

**Note** The value you use as a parameter should fall in the range from 0 to 90. By default, the angle is 45°. 

In the following sample, there is a 3D Column chart with the Z-angle set to 20°.

```
// configure the z-angle of the chart
chart.zAngle(20);
```

{sample}BCT\_3d\_02{sample}

<a name='z_aspect'></a>
## Z-Aspect

3D charts can vary in depth: you can set it by using the {api:anychart.charts.Cartesian3d#zAspect}zAspect(){api} method with any 3D chart except the 3D Pie.

**Note** ???

In the sample below, there is a 3D Column chart with the Z-aspect set to 100 (the Z-angle is also configured):

```
// configure the z-aspect of the chart
chart.zAspect(100);
```

{sample}BCT\_3d\_03{sample}

<a name='z_distribution'></a>
## Z-Distribution

In 3D multi-series charts, series are distributed along the X-axis by defalut. However, you can also distribute them along the Z-axis: call the {api:anychart.charts.Cartesian3d#zDistribution}zDistribution(){api} and use **true** as a parameter (**false** enables the default X-distribution):

```
// enable the z-axis distribution mode
chart.zDistribution(true);
```

{sample}BCT\_3d\_04{sample}

##Supported Types

* [3D Area](3D_Area_Chart)
* [3D Bar](3D_Bar_Chart)
* [3D Column](3D_Column_Chart)
* [3D Pie](3D_Pie_Chart)
* [3D Vertical Area](3D_Vertical_Area_Chart)
* [3D Value Stacked Area](3D_Value_Stacked_Area_Chart)
* [3D Value Stacked Bar](3D_Value_Stacked_Bar_Chart)
* [3D Value Stacked Column](3D_Value_Stacked_Column_Chart)
* [3D Percent Stacked Area](3d_Percent_Stacked_Area_Chart)
* [3D Percent Stacked Bar](3D_Percent_Stacked_Bar_Chart)
* [3D Percent Stacked Column](3D_Column_Chart)
* [3D Percent Stacked Column](3D_Percent_Stacked_Column_Chart)
* [3D Vertical Value Stacked Area](3D_Vertical_Value_Stacked_Area_Chart)
* [3D Vertical Percent Stacked Area](3D_Vertical_Percent_Stacked_Area_Chart)