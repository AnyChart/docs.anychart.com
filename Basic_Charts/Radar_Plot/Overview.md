{:index 1}
# Radar Chart

## Overview

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative.

The radar chart is otherwise known as a web chart, spider chart, star chart, cobweb chart, star plot, irregular polygon, or kiviat diagram.

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
  {x: "H", value: 3876}
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
  {x: "H", value: 1876}
];

// create a chart
chart = anychart.radar();

// create the first series (line) and set the data
var series1 = chart.line(data_1);

// create the second series (area) and set the data
var series2 = chart.area(data_2);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Radar\_Chart\_01{sample}

## Start Angle

You can set the start angle of a radar chart by using the {api:anychart.charts.Radar#startAngle}startAngle(){api} method. The angle is 0&deg; by default.

In the sample below, the start angle of the first chart is not configured, and for the second chart it is set to 90&deg;:

```
// set the start angle
radar2.startAngle(90);
```

{sample}BCT\_Radar\_Chart\_02{sample}

## Axes and Scales

In this section you can find some settings of axes and scales that are often used with radar charts. To learn about all the available settings, see [Axes and Grids](../../Axes_and_Grids).

If you want to configure the stroke of the X- and Y-axes of your radar chart, use the {api:anychart.core.axes.Radar#stroke}stroke(){api} method:

```
// configure the appearance of the y-axis
chart.yAxis().stroke({
  color: "gray",
  thickness: 2,
  dash: "10 5"
});  

// configure the appearance of the X-axis
chart.xAxis().stroke({
  color: "#00cc99",
  thickness: 4,
});    
```

To [invert](../../Axes_and_Grids/Scales#inversion) a scale, call the {api:anychart.scales.Linear#inverted}inverted(){api} method:

```
// invert the y-scale
chart.yScale().inverted(true);
```

You might also want to create a [logarithmic scale](../../Axes_and_Grids/Scales#logarithmic). Use {api:anychart.scales#log}log(){api} for creating it and {api:anychart.charts.Radar#yScale}yScale(){api} for setting it as the Y-scale of your chart:

```
// create a logarithmic scale
var logScale = anychart.scales.log();

// set the minimum and maximum values of the scale
logScale.minimum(10);
logScale.maximum(10000); 

// set the logarithmic scale as the y-scale
chart.yScale(logScale); 
```

The following sample shows how to configure the appearance of the X- and Y-axes and invert the Y-scale:

{sample}BCT\_Radar\_Chart\_03{sample}

## Grids

This section explains how to configure the appearance and layout of grids on radar charts. You can also read about grids here: [Axis Basics: Grids](../../Axes_and_Grids/Axis_Basics#grids).

By default, there are two grids: {api:anychart.charts.Radar#yGrid}yGrid(){api} and {api:anychart.charts.Radar#xGrid}xGrid(){api}

You can configure the appearance of any grid - here is the list of available methods:

* {api:anychart.core.grids.Radar#stroke}stroke(){api} sets the stroke
* {api:anychart.core.grids.Polar#palette}palette(){api} sets the fills to create solid or interlaced effects.

### Stroke

In the sample below, there is a radar chart with the stroke of both grids configured:

```
// configure the stroke of the x-grid
chart.xGrid().stroke({
  color: "green",
  thickness: 0.5,
  opacity: 0.5
});

// configure the stroke of the circular grid
chart.yGrid().stroke({
  color: "green",
  thickness: 0.5,
  opacity: 0.5,
  dash: "10 5"
});
```

{sample}BCT\_Radar\_Chart\_04{sample}

### Cell Color

In this sample cells of the radial and circular grids are filled with color:

```
// color the even-odd cells of the x-grid
radar1.xGrid().palette(["gray 0.05", "gray 0.1"]);

// color the even-odd cells of the y-grid 
radar2.yGrid().palette(["gray 0.05", "gray 0.1"]);
```

{sample}BCT\_Radar\_Chart\_05{sample}

## Stacked Radar Charts

Stacked and percent stacked charts are multi-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms.

You can create stacked radar charts by enabling a special mode of the scale that makes series stack together. Read more: [Stacked Charts](../Stacked/Overview).

## Supported Types

Here is the list of supported radar charts:

* [Radar Area](Area_Chart)
* [Radar Line](Line_Chart)
* [Radar Marker](Marker_Chart)

See also stacked charts:

* [Radar Stacked Area Chart](../Stacked/Value/Radar_Area_Chart)
* [Radar Percent Stacked Area Chart](../Stacked/Percent/Radar_Area_Chart)