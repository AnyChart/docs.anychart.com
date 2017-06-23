{:index 1}
# Overview

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Start Angle](#start_angle)
* [Omitting points](#omitting_points)
* [Axes](#axes)
* [Scales](#scales)
* [Grids](#grids)
* [Supported Types](#supported_types)

## Overview

A polar chart...

This article explains how to create and configure polar charts. To find out which series can be drawn on a polar chart in AnyChart, see the [Supported Types](#supported_types) section.

## Quick Start

To create a polar chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor.

Then create one of the supported series types from this enum: {api:anychart.enums.PolarSeriesType}anychart.enums.PolarSeriesType{api}.


In the sample below, there is a polar chart with two series, Line and Area:

```
// create data for the first series
var data_1 = [
  {x: 0, value: 500},
  {x: 180, value: 200},
];

// create data for the second series
var data_2 = [
  {x: 0, value: 0},
  {x: 180, value: 200},
];

// create a chart
chart = anychart.polar();

// create the first series (line) and set the data
var series1 = chart.line(data_1);

// create the second series (marker) and set the data
var series2 = chart.area(data_2);

// set the chart title
chart.title("Polar Plot: Basic Sample");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
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

##Axes

[Axis Basicss](../../Axes_and_Grids/Axis_Basics)

{api:anychart.core.axes.Radar#stroke}stroke(){api}

```
// configure the appearance of the Y-Axis
chart.yAxis().stroke({
  color: "gray",
  thickness: 2,
  dash: "10 5"
});  

// configure the appearance of the X-Axis
chart.xAxis().stroke({
  color: "#00cc99",
  thickness: 4,
});
```

{sample}BCT\_Polar\_Chart\_04{sample}

##Scales

```

```

{sample}BCT\_Polar\_Chart\_05{sample}

##Grids

```
// configure the stroke of the radial grid
chart.grid(0).stroke({
  color: "green",
  thickness: 0.5,
  opacity: 0.5
});

// configure the stroke of the circular grid
chart.grid(1).stroke({
  color: "green",
  thickness: 0.5,
  opacity: 0.5,
  dash: "10 5"
});
```

{sample}BCT\_Polar\_Chart\_06{sample}

```
// color the odd-numbered cells of the radial grid
chart.grid(0).oddFill({
  color: "gray",
  opacity: 0.05
});

// color the odd-numbered cells of the circular grid  
chart.grid(1).oddFill({
  color: "gray",
  opacity: 0.05
});

// color the even-numbered cells of the circular grid 
chart.grid(1).evenFill({
  color: "gray",
  opacity: 0.1
});
```

{sample}BCT\_Polar\_Chart\_07{sample}

## Supported Types

Here is the list of supported polar charts:

* [Polar Area](Area_Chart)
* [Polar Column](Column_Chart)
* [Polar Line](Line_Chart)
* [Radar Marker](Marker_Chart)
* [Polar Polygon](Polygon_Chart)
* [Polar Polyline](Polyline_Chart)
* [Polar Range Column](Range_Column_Chart)