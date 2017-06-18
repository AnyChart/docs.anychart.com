{:index 1}
# Overview

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Start Angle](#start_angle)
* [Axes and Scales](#axes_and_scales)
* [Grid](#grid)
* [Stacked Radar Charts](#stacked_radar_charts)
* [Supported Types](#supported_types)

## Overview

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative.

The radar chart is also known as a web chart, spider chart, star chart, cobweb chart, star plot, irregular polygon, or kiviat diagram.

This article explains how to create and configure radar charts. To find out which series can be drawn on a radar chart in AnyChart, see the [Supported Types](#supported_types) section.

## Quick Start

To create a radar chart, use the {api:anychart#radar}anychart.radar(){api} chart constructor.

AnyChart allows you to display three types of series on radar charts: Line, Area and Marker. If you just pass your data to the chart constructor, a Line series is created. You can also set the type of a series explicitly by calling one of the following methods:

* {api:anychart.charts.Cartesian#line}line(){api}
* {api:anychart.charts.Cartesian#area}area(){api}
* {api:anychart.charts.Cartesian#marker}marker(){api}


In the sample below, there is a radar chart with two series, Line and Area:

```
// create data for the first series
var data_1 = [
  {x: "A", value: 1222},
  {x: "B", value: 2431},
  {x: "C", value: 3624},
  {x: "D", value: 5243},
  {x: "E", value: 6813},
  {x: "F", value: 5321},
  {x: "G", value: 1567},
  {x: "H", value: 3876},
  {x: "I", value: 2187}
];

// create data for the second series
var data_2 = [
  {x: "A", value: 722},
  {x: "B", value: 1431},
  {x: "C", value: 1624},
  {x: "D", value: 1243},
  {x: "E", value: 1813},
  {x: "F", value: 1321},
  {x: "G", value: 567},
  {x: "H", value: 1876},
  {x: "I", value: 1187}
];

// create a chart
chart = anychart.radar();

// create the first series (line) and set the data
var series1 = chart.line(data_1);

// create the second series (marker) and set the data
var series2 = chart.area(data_2);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Radar\_Chart\_01{sample}

## Start Angle

You can set the start angle of a radar chart by using the {api:anychart.charts.Radar#startAngle}startAngle(){api} method. The angle is 0° by default.

In the sample below, the start angle of the first chart is not configured, and for the second chart it is set to 90°:

```
// set the start angle
radar2.startAngle(90);
```

{sample}BCT\_Radar\_Chart\_02{sample}

## Axes and Scales

In this section you can find some settings of axes and scales that are often used with radar charts. To learn about all the available settings, see [Axes and Grids](../../Axes_and_Grids).

If you want to configure the stroke of the X and Y axes of your radar chart, use the {api:anychart.core.axes.Radar#stroke}stroke(){api} method:

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

{sample}BCT\_Radar\_Chart\_03{sample}

## Grid

This section explains how configure the appearance and layout of grids on radar charts. To learn about grids in general, read [Axis Basics: Grids](../../Axes_and_Grids/Axis_Basics#grids).

The appearance is set with the {api:anychart.core.grids.Radar#stroke}stroke(){api}, {api:anychart.core.grids.Radar#evenFill}evenFill(){api}, and {api:anychart.core.grids.Radar#oddFill}oddFill(){api} methods. 

The {api:anychart.charts.Radar#grid}grid(){api} method is used to get grids by index. By default, there are two grids: a radial one with the index 0 and a circular one with the index 1. To change the default layouts, use the {api:anychart.core.grids.Radar#layot}layout(){api} method with either **radial** or **circuit** parameter.

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

In the sample below there is a Radar Line chart having only a radial grid, the odd- and even-numbered cells filled with different colors:

```
var grid = chart.grid(1);
// set the layout type
grid.layout("radial");
// set the fill of odd-numbered cells
grid.oddFill("#80ffdf", 0.1);
// set the fill of even-numbered cells
grid.evenFill("#ffdf80", 0.1);
```

{sample}BCT\_Radar\_Chart\_04{sample}

This sample shows a Radar Line chart having only a circular grid, the odd- and even-numbered cells filled with different colors:

```
var grid = chart.grid(0);
// set the layout type
grid.layout("circuit");
// set the fill of odd-numbered cells
grid.oddFill("#80ffdf", 0.1);
// set the fill of even-numbered cells
grid.evenFill("#ffdf80", 0.1);
```

{sample}BCT\_Radar\_Chart\_05{sample}

## Stacked Radar Charts

Stacked and percent stacked charts are multi-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms.

You can create [Radar Stacked Area](../Stacked/Value/Radar_Area_Chart) and [Radar Percent Stacked Area](../Stacked/Percent/Radar_Area_Chart) charts by enabling a special mode of the scale that makes series stack together. Read more: [Stacked Charts](../Stacked/Overview).

## Supported Types

Here is the list of supported radar charts:

* [Radar Line](Line_Chart)
* [Radar Area](Area_Chart)
* [Radar Marker](Marker_Chart)

See also [stacked](../Stacked/Overview) charts:

* [Radar Stacked Area Chart](../Stacked/Value/Radar_Area_Chart)
* [Radar Percent Stacked Area Chart](../Stacked/Percent/Radar_Area_Chart)