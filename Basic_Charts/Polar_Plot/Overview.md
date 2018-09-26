{:index 1}
# Polar Charts

## Overview

A polar chart is a [scatter chart](../Scatter_Plot/Overview) drawn in the polar coordinate system - a two-dimensional coordinate system where each point is determined by a distance from a fixed point and an angle from a fixed direction.

This article explains how to create and configure polar charts. To find out which series can be drawn on a polar chart in AnyChart, see the [Supported Types](#supported_types) section.

## Modules

Polar charts require adding the [Core](../../Quick_Start/Modules#core) and [Polar](../../Quick_Start/Modules#polar) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-polar.min.js"></script>
```

Learn more: [Modules](../../Quick_Start/Modules).

## Quick Start

To create a polar chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor.

Then add one of the supported series types from this enum: {api:anychart.enums.PolarSeriesType}anychart.enums.PolarSeriesType{api}. If you just pass your data to the chart constructor, a Marker series is created.

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

// set the maximum value of the x-scale
chart.xScale().maximum(360);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Polar\_Chart\_01{sample}

## Start Angle

You can set the start angle of a polar chart by using the {api:anychart.charts.Polar#startAngle}startAngle(){api} method. The angle is 0&deg; by default.

In the sample below, the start angle of the first chart is not configured, and for the second chart it is set to 90&deg;:

```
// set the start angle
polar2.startAngle(90);
```

{sample}BCT\_Polar\_Chart\_02{sample}

## Missing Points

It is possible to skip a point or several points in a data set of a polar chart. Just write `"missing"` in the `value` field of a point you want to skip:

```
// create data
var data = [
  {x: 0, value: 500},
  {x: 180, value: 200},
  {x: 360, value: "missing"},
];
```

{sample}BCT\_Polar\_Chart\_03{sample}

## Axes

To learn about axes in general, see the [Axes and Grids](../../Axes_and_Grids) section.

If you want to configure the stroke of the X- and Y-axes, use the {api:anychart.core.axes.Radar#stroke}stroke(){api} method:

```
// configure the appearance of the y-axis
chart.yAxis().stroke({
  color: "gray",
  thickness: 2,
  dash: "10 5"
});  

// configure the appearance of the x-axis
chart.xAxis().stroke({
  color: "#00cc99",
  thickness: 4,
});
```

{sample}BCT\_Polar\_Chart\_04{sample}

## Scales

To learn about scales in general, see the [Scales](../../Axes_and_Grids/Scales) section.

Polar charts have one special setting that changes how polar chart behave: by default polar plot is an implementations of a standard polar coordinate system where both x and y coordinates are considered numbers, this mode is usually used for mathematical purposes.

In this case you usually need to set minium and maximum values, as well as tick intervals:

```
// set the maximum value of the x-scale
chart.xScale().maximum(360);

// configure Y scale
chart.yScale().minimum(0).maximum(600);
chart.yScale().ticks().interval(100);
```

Here is a sample of such plot with a cardioid:

{sample}BCT\_Polar\_Chart\_05{sample}

But in some data visualization cases it may be useful to work with polar chart is a slightly different way that resembles, in a way, [Radar Charts](../Radar_Plot). This is a case when X coordinates are texts, not numbers. To turn this mode of use the {api:anychart.charts.Polar#sortPointsByX}sortPointsByX(){api} method and set X-scale type to ordinal:

```
// set the type of the x-scale
chart.xScale("ordinal");

// enable sorting points by x
chart.sortPointsByX(true);
```

With these setting you can use:
- [Polygon Chart](Polygon_Chart)
- [Polyline Chart](Polyline_Chart)
- [Column Chart](Column_Chart)
- [Range Column Chart](Range_Column_Chart)

And create charts like this one:

{sample}BCT\_Polar\_Chart\_06{sample}

## Grids

This section explains how to configure the appearance and layout of grids on polar charts. You can also read about grids here: [Axis Basics: Grids](../../Axes_and_Grids/Axis_Basics#grids).

By default, there are two grids: {api:anychart.charts.Polar#yGrid}yGrid(){api} and {api:anychart.charts.Polar#xGrid}xGrid(){api}

You can configure the appearance of any grid - here is the list of available methods:

* {api:anychart.core.grids.Polar#stroke}stroke(){api} sets the stroke
* {api:anychart.core.grids.Polar#palette}palette(){api} sets the fills to create solid or interlaced effects.

### Stroke

In the sample below, there is a polar chart with the stroke of both grids configured:

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

{sample}BCT\_Polar\_Chart\_07{sample}

### Cell Color

In this sample cells of the radial and circular grids are filled with color:

```
// color the even-odd cells of the x-grid
polar1.xGrid().palette(["gray 0.05", "gray 0.1"]));

// color the even-odd cells of the y-grid 
polar2.yGrid().palette(["gray 0.05", "gray 0.1"]);
```

{sample}BCT\_Polar\_Chart\_08{sample}

## Stacked Polar Charts

Stacked and percent stacked charts are multi-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms.

You can create stacked polar charts by enabling a special mode of the scale that makes series stack together. Read more: [Stacked Charts](../Stacked/Overview).

## Supported Types

Here is the list of supported polar charts:

* [Polar Area](Area_Chart)
* [Polar Column](Column_Chart)
* [Polar Line](Line_Chart)
* [Radar Marker](Marker_Chart)
* [Polar Polygon](Polygon_Chart)
* [Polar Polyline](Polyline_Chart)
* [Polar Range Column](Range_Column_Chart)

See also stacked charts:

* [Polar Stacked Column Chart](../Stacked/Value/Polar_Column_Chart)
* [Polar Percent Stacked Column Chart](../Stacked/Percent/Polar_Column_Chart)
* [Stacked Polygon Chart](../Stacked/Value/Polygon_Chart)
* [Percent Stacked Polygon Chart](../Stacked/Percent/Polygon_Chart)