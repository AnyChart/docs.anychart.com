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

[A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative.

The radar chart is also known as a web chart, spider chart, star chart, cobweb chart, star plot, irregular polygon or kiviat diagram.]

[Supported Types](#supported_types)

This article explains how to create and configure radar charts.

## Chart

To create a radar chart, use the {api:anychart#radar}anychart.radar(){api} chart constructor.

AnyChart allows you to display three types of series on radar charts: Line, Area and Marker. If you just pass your data to the chart constructor, a Line series is created. You can also set the type of a series explicitly by calling one of the following methods:

* {api:anychart.charts.Cartesian#area}area(){api}
* {api:anychart.charts.Cartesian#bar}bar(){api}
* {api:anychart.charts.Cartesian#column}column(){api}


In the sample below, there is a radar chart with thwo series, Line and Area:

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

[By default radar starts drawing from the top center point (0°), but you can change this using {api:anychart.charts.Radar#startAngle}startAngle(){api} parameter:]

```
// set the start angle
radar2.startAngle(90);
```

{sample}BCT\_Radar\_Chart\_02{sample}

## Axes and Scales

[Axes Basics](../Axes_and_Grids/Axis_Basics)
(???) [Strokes and Lines tutorial](../Appearance_Settings/Strokes_and_Lines)

{api:anychart.core.axes.Radar#stroke}stroke(){api}

```
// configure the appearance of the Y-Axis
var yAxis = chart.yAxis();
yAxis.stroke({
  color: "gray",
  thickness: 2,
  dash: "10 5"
});  
```

[Scale tutorial](../Axes_and_Grids/Scales#types)

```
// invert the Y-scale
var yScale = chart.yScale();
yScale.inverted(true);
```

{api:anychart.scales.Logarithmic}scale(){api}

```
// create a logarithmic scale
var logScale = anychart.scales.log();

// set the minimum and maximum values of the scale
logScale.minimum(10);
logScale.maximum(10000); 

// set the logarithmic scale as the Y-scale
chart.yScale(logScale); 
```

{sample}BCT\_Radar\_Chart\_03{sample}

## Grid

[Grid section of Scale tutorial](../Axes_and_Grids/Scales#grids)


```
var grid = chart.grid(0);
// set the layout type
grid.layout("radial");
// set the fill of odd-numbered grids
grid.oddFill("#33ffcc", 0.1);
// set the fill of even-numbered grids
grid.evenFill("#3399ff", 0.1);
```

{sample}BCT\_Radar\_Chart\_04{sample}

```
var grid = chart.grid(0);
// set the layout type
grid.layout("circuit");
// set the fill of odd-numbered grids
grid.oddFill("#33ffcc", 0.1);
// set the fill of even-numbered grids
grid.evenFill("#3399ff", 0.1);
```

{sample}BCT\_Radar\_Chart\_05{sample}

## Stacked Radar Charts

## Series Types

Here is the list of supported radar charts:

* [Radar Line](Line_Chart)
* [Radar Area](Area_Chart)
* [Radar Marker](Marker_Chart)

See also [stacked](../Stacked/Overview) charts:

* [Radar Stacked Area Chart](../Stacked/Value/Radar_Area_Chart)
* [Radar Percent Stacked Area Chart](../Stacked/Percent/Radar_Area_Chart)