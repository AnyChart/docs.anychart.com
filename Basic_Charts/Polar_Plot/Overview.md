{:index 1}
# Overview

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Start Angle](#start_angle)
* [Omitting points](#omitting_points)
* [Axes and Scales](#axes_and_scales)
* [Grid](#grid)
* [Supported Types](#supported_types)

## Overview

A polar chart...

This article explains how to create and configure polar charts. To find out which series can be drawn on a polar chart in AnyChart, see the [Supported Types](#supported_types) section.

## Quick Start

To create a polar chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor.

Then create one of the supported series types from this enum: {api:anychart.enums.PolarSeriesType}anychart.enums.PolarSeriesType{api}.


In the sample below, there is a polar chart with two series, Line and Area:

```

```

{sample}BCT\_Polar\_Chart\_01{sample}

## Start Angle

You can set the start angle of a polar chart by using the {api:anychart.charts.Polar#startAngle}startAngle(){api} method. The angle is 0° by default.

In the sample below, the start angle of the first chart is not configured, and for the second chart it is set to 90°:

```
// set the start angle
polar2.startAngle(90);
```

{sample}BCT\_Polar\_Chart\_02{sample}

## Omitting Points

```

```

{sample}BCT\_Polar\_Chart\_03{sample}

## Axes and Scales

In this section you can find some settings of axes and scales that are often used with polar charts. To learn about all the available settings, see [Axes and Grids](../../Axes_and_Grids).

If you want to configure the stroke of the X and Y axes of your polar chart, use the {api:anychart.core.axes.Polar#stroke}stroke(){api} method:

```
// configure the appearance of the Y-Axis
var yAxis = chart.yAxis();
yAxis.stroke({
  color: "gray",
  thickness: 2,
  dash: "10 5"
});  

// configure the appearance of the X-Axis
var xAxis = chart.xAxis();
xAxis.stroke({
  color: "#00cc99",
  thickness: 4,
});    
```

To [invert](../../Axes_and_Grids/Scales#inversion) a scale, call the {api:anychart.scales.Linear#inverted}inverted(){api} method:

```
// invert the Y-scale
var yScale = chart.yScale();
yScale.inverted(true);
```

You might also want to create a [logarithmic scale](../../Axes_and_Grids/Scales#logarithmic) – use {api:anychart.scales#log}log(){api}:

```
// create a logarithmic scale
var logScale = anychart.scales.log();

// set the minimum and maximum values of the scale
logScale.minimum(10);
logScale.maximum(10000); 

// set the logarithmic scale as the Y-scale
chart.yScale(logScale); 
```

The following sample shows how to configure the appearance of the X and Y axes and invert the Y-scale:

{sample}BCT\_Polar\_Chart\_04{sample}

## Grid

This section explains how configure the appearance and layout of grids on polar charts. To learn about grids in general, read [Axis Basics: Grids](../../Axes_and_Grids/Axis_Basics#grids).

The appearance is set with the {api:anychart.core.grids.Polar#stroke}stroke(){api}, {api:anychart.core.grids.Polar#evenFill}evenFill(){api}, and {api:anychart.core.grids.Polar#oddFill}oddFill(){api} methods. 

The {api:anychart.charts.Polar#grid}grid(){api} method is used to get grids by index. By default, there are two grids: a radial one with the index 0 and a circular one with the index 1. To change the default layouts, use the {api:anychart.core.grids.Polar#layot}layout(){api} method with either **radial** or **circuit** parameter.

For example, if you want your chart to have only a radial grid, get the grid with the index 1 and set the layout to "radial":

```
var grid = chart.grid(1);
// set the layout type
grid.layout("radial");
```

In case you want your chart to have only a circular grid, get the grid with the index 0 and set the layout to "circuit":

```
var grid = chart.grid(0);
// set the layout type
grid.layout("circuit");
```

In the sample below there is a Polar Line chart having only a radial grid, the odd- and even-numbered cells filled with different colors:

```
var grid = chart.grid(1);
// set the layout type
grid.layout("radial");
// set the fill of odd-numbered cells
grid.oddFill("#80ffdf", 0.1);
// set the fill of even-numbered cells
grid.evenFill("#ffdf80", 0.1);
```

{sample}BCT\_Radar\_Chart\_05{sample}

This sample shows a Polar Line chart having only a circular grid, the odd- and even-numbered cells filled with different colors:

```
var grid = chart.grid(0);
// set the layout type
grid.layout("circuit");
// set the fill of odd-numbered cells
grid.oddFill("#80ffdf", 0.1);
// set the fill of even-numbered cells
grid.evenFill("#ffdf80", 0.1);
```

{sample}BCT\_Polar\_Chart\_06{sample}

## Supported Types

Here is the list of supported polar charts:

* [Polar Area](Area_Chart)
* [Polar Column](Column_Chart)
* [Polar Line](Line_Chart)
* [Radar Marker](Marker_Chart)
* [Polar Polygon](Polygon_Chart)
* [Polar Polyline](Polyline_Chart)
* [Polar Range Column](Range_Column_Chart)