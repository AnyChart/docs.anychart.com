#Vertical Charts

* [Overview](#overview)
* [Creating a Vertical Chart/Series](#creating_a_vertical_chart_series)
* [Changing the Orientation On-The-Fly](#onthefly)

## Overview

Most types of series can be drawn both in horizontal and vertical orientation, and this article explains how do it. It also  tells how to change the orientation of a chart on-the-fly.

<a name='creating_a_vertical_chart_series'></a>
## Creating a Vertical Chart/Series

(??? any.chart.verticalArea или просто verticalArea, как лучше?)
To create a vertical chart, use one of the three chart constructors: {api:anychart#bar}anychart.bar(){api}, {api:anychart#verticalLine}anychart.verticalLine(){api}, and {api:anychart#verticalArea}anychart.verticalArea(){api}.

There is no essential difference between them: they just switch the orientation of the axes, drawing the X-axis vertically and the Y-axis horizontally.

(??? тот же вопрос, что выше)
By default, if you just pass the data to the chart constructor, a series of the same type is created. For example, in the following sample the {api:anychart#verticalArea}anychart.verticalArea(){api} chart constructor draws a chart with an Area series: 

```
// create a data set
var data = anychart.data.set([
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
]);

// set the chart type
chart = anychart.verticalArea(data);
```

{sample}BCT\_Vertical\_Charts\_01{sample}

After creating a vertical chart, you can also specify the series type.

(???)
Most of the series types in AnyChart can be vertical – to find out whether this option is available for the series you need to draw, check whether the class of the series has the **isVertical** method. For example, here is the {api:anychart.core.cartesian.series.Line#isVertical}isVertical(){api} method of the {api:anychart.core.cartesian.series.Line}Line{api} series.

(??? verticalArea или anychart.verticalArea?)
In the sample below, the {api:anychart#verticalArea}anychart.verticalArea(){api} chart constructor is used with the {api:anychart.charts.Cartesian#splineArea}splineArea(){api} method to create two Spline Area series:

```
// set the chart type
var chart = anychart.verticalArea();

// create the first series, set the data and name
var series1 = chart.splineArea(seriesData_1);
series1.name("2004");

// create the second series, set the data and name  
var series2 = chart.splineArea(seriesData_2);
series2.name("2005");
```

{sample}BCT\_Vertical\_Charts\_02{sample}

(??? прежний вопрос)
In the next sample there are two series, Bar and Line, created by the {api:anychart.charts.Cartesian#bar}bar(){api} and {api:anychart.charts.Cartesian#line}line(){api} methods, and the chart constructor is {api:anychart#bar}anychart.bar(){api}:

```
// set the chart type
var chart = anychart.bar();

// create the first series
var series1 = chart.bar(seriesData_1);

// create the second series
var series2 = chart.line(seriesData_2);
```

{sample}BCT\_Vertical\_Charts\_03{sample}

<a name='onthefly'></a>
## Changing the Orientation On-The-Fly

(???)
After creating a series, you can change its orientation on-the-fly by calling the **isVertical** method and setting its parameter to either 'true' or 'false' (for example, here is the {api:anychart.{api:anychart.core.cartesian.series.Line#isVertical}isVertical(){api} method of the Line series). Please, keep in mind that it affects only the series, not the axes.

In the following sample this method is used to draw two horizontal (Area) and a vertical (Bar) series on the same chart:

```
// set the chart type
var chart = anychart.column();

// create the first series
var series1 = chart.column(seriesData_1);

// create the second series
var series2 = chart.column(seriesData_2);

// change the orientation of the second series to vertical
chart.getSeriesAt(0).isVertical(true);
```

{sample}BCT\_Vertical\_Charts\_04{sample}

To change the orientation of the whole chart on-the-fly, you should change the orientation of both the series and the [axes](..Axes_and_Grids/Axis_Orientation) (use the {api:anychart.core.axes.Linear#orientation}orientation(){api} method):

```
// set the chart type
chart = anychart.column();

// create the first series
var series1 = chart.column(seriesData_1);

// create the second series, set the data and name
var series2 = chart.column(seriesData_2);

// change the orientation of the series
chart.getSeriesAt(0).isVertical(true);
chart.getSeriesAt(1).isVertical(true);

// change the orientation of the axes
chart.xAxis().orientation('left');
chart.yAxis().orientation('bottom');
```

{sample}BCT\_Vertical\_Charts\_05{sample}