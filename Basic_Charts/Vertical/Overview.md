{:index 0}
# Vertical Charts

## Overview

In AnyChart you can draw a chart in a vertical orientation by switching the orientation of the axes. Most types of series support this feature – see the [Supported Types](#supported_types) section.

This article explains how to create a vertical chart and how to change the orientation of a chart on-the-fly.

## Quick Start

To create a vertical chart, use one of these three chart constructors:
* {api:anychart#vertical}anychart.vertical(){api}
* {api:anychart#verticalArea}anychart.verticalArea(){api}
* {api:anychart#verticalLine}anychart.verticalLine(){api}
* {api:anychart#bar}anychart.bar(){api}

There is no essential difference between them: they just switch the orientation of the axes, drawing the X-axis vertically and the Y-axis horizontally.

You can pass your data to the chart constructor to create a series of the same type. Alternatively, you can specify the series type manually. A series supports vertical orientation if its class has has the **isVertical** method. For example, here is the {api:anychart.core.cartesian.series.Line#isVertical}isVertical(){api} method of the {api:anychart.core.cartesian.series.Line}Line{api} series. You can also see the [Supported Types](#supported_types) section of this article.

In the sample below, there are two series, Spline Area and Spline, created by the {api:anychart.charts.Cartesian#splineArea}splineArea(){api} and {api:anychart.charts.Cartesian#spline}spline(){api} methods, and the chart constructor is {api:anychart#vertical}anychart.vertical(){api}:

```
// create a data set
var data = anychart.data.set([
  ["January", 10000, 12500],
  ["February", 12000, 15000],
  ["March", 13000, 16500],
  ["April", 10000, 13000],
  ["May", 9000, 11000]
]);

// map the data
var seriesData_1 = data.mapAs({x: 0, value: 1});
var seriesData_2 = data.mapAs({x: 0, value: 2});

// create a chart
chart = anychart.vertical();

// create the first series (bar)
var series1 = chart.splineArea(seriesData_1);

// create the second series (spline)
var series2 = chart.spline(seriesData_2);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Vertical\_01{sample}

## Switching On-the-Fly

### Series

After creating a series, you can change its orientation on-the-fly by calling the **isVertical()** method and setting its parameter to either `true` or `false` (for example, here is the {api:anychart.core.cartesian.series.Line#isVertical}isVertical(){api} method of the Line series).

**Note:** This setting affects only the series, not the axes.

In the following sample, this method is used to draw two horizontal (area) and a vertical (bar) series on the same chart:

```
// create a chart
chart = anychart.area();

// create the first series
var series1 = chart.area(seriesData_1);

// create the second series
var series2 = chart.area(seriesData_2);

// create the third series
var series2 = chart.column(seriesData_3);

// change the orientation of the third series to vertical
chart.getSeriesAt(2).isVertical(true);
```

{sample}BCT\_Vertical\_02{sample}

### Chart

To switch the orientation of the whole chart on-the-fly, with the basic cartesian charts you can simply use the {api:anychart.charts.Cartesian#isVertical}isVertical(){api} method.

```
// create a chart
chart = anychart.line();

// change the orientation of the chart
chart.isVertical(true);
```

{sample}BCT\_Vertical\_03{sample}

**Note**: To rotate charts like [Mekko](Mekko_Chart) or [Mosaic](Mosaic_Chart) you should rotate series one by one and  and [axes](../../Axes_and_Grids/Axis_Orientation). So, use the **isVertical()** method and {api:anychart.core.axes.Linear#orientation}orientation(){api} methods.

## Supported Types

Here is the list of supported vertical charts:

* [Bar (Vertical Column)](../Bar_Chart)
* [Range Bar (Vertical Column)](../Range_Bar_Chart)
* [Vertical Area](Area_Chart)
* [Vertical Bar Mekko](Bar_Mekko_Chart)
* [Vertical Box](Box_Chart)
* [Vertical Bubble](Bubble_Chart)
* [Vertical Japanese Candlestick](Japanese_Candlestick_Chart)
* [Vertical Jump Line](Jump_Line_Chart)
* [Vertical HiLo](HiLo_Chart)
* [Vertical Line](Line_Chart)
* [Vertical Marker](Marker_Chart)
* [Vertical Mekko](Mekko_Chart)
* [Vertical Mosaic](Mosaic_Chart)
* [Vertical OHLC](OHLC_Chart)
* [Vertical Range Area](Range_Area_Chart) 
* [Vertical Range Spline Area](Range_Spline_Area_Chart)
* [Vertical Range Step Area](Range_Step_Area_Chart)  
* [Vertical Spline](Spline_Chart)
* [Vertical Spline Area](Spline_Area_Chart)
* [Vertical Step Area](Step_Area_Chart)
* [Vertical Step Line](Step_Line_Chart)
* [Vertical Stick](Stick_Chart)

See also stacked charts:

* [Percent Stacked Bar (Vertical Column)](../Stacked/Percent/Bar_Chart)
* [Percent Stacked Vertical Area](../Stacked/Percent/Vertical_Area_Chart)
* [Percent Stacked Vertical Spline Area](../Stacked/Percent/Vertical_Spline_Area_Chart)
* [Percent Stacked Vertical Step Area](../Stacked/Percent/Vertical_Step_Area_Chart)
* [Value Stacked Bar (Vertical Column)](../Stacked/Value/Bar_Chart)
* [Value Stacked Vertical Area](../Stacked/Value/Vertical_Area_Chart)
* [Value Stacked Vertical Spline Area](../Stacked/Value/Vertical_Spline_Area_Chart)
* [Value Stacked Vertical Step Area](../Stacked/Value/Vertical_Step_Area_Chart)