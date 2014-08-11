# Axes Basics

              
* [Overview](#overview)
* [Definition](#definition)
* [Title](#title)
* [Position](#position)
* [Labels](#labels)
* [Axis line and Zero line](#axis-lines)
* [Tickmarks](#tickmarks)
* [Grids](#grids)
  * [Major and Minor](#grids)
  * [Dashed Grid Lines](#dashed)
  * [Interlaced grid](#interlace)
<!--* [Keywords Reference](#keywords)-->

<a name="overview"/>
## Overview
   
In AnyChart axes are used to control values or arguments scales, grids, axes labels, lines and tick marks.
   
* To know what scale options are available - please see: [Axes scale tutorial](Axes-Scales)
* To learn how to create additional axes - [Additional axes](Additional-Axes)
* To learn how to configure axes labels - [Axes Labels](axes-labels-text-formatting)
* To learn more about Date/Time Scale - [Date/Time Axes](DateTime-Axes)

In this section we will demonstrate most of the axes visualization options, which are the same for Y and X and Additional axes.

<a name="definition"/>
## Define an Axis

If you want to control any of the axes settings - you should do that though **Axis** method:

```
  chart.xAxis().title().enabled(true).text('Sample X axis name');
```
<a name="title"/>
## Setting Axis Title

You can define a title of any axis, you can control its position and font <!--and use keywords-->, when specifying text. Full reference of parameters can be found in Reference: **.yAxis().title()** or **.xAxis().title()**. Here is a sample titles definition:

```
var max = chart.yScale().maximum();
var min = chart.yScale().minimum();
chart.yAxis().title().align('bottom');
chart.yAxis(0).orientation('right');
chart.xAxis().title().text('Sample X axis name').fontWeight('400');
chart.yAxis().title().text('Y axis from ' + min + ' to ' + max);
```

As you can see, we've set titles both to X and Y axis <!--made X axis title bold-->and aligned Y axis <!--and used {%DataPlotYMax} and %DataPlotYMin keywords-->.

<!--Full reference of available keywords is available in the end of this article: Keywords reference.

General formatting questions are answered in Text Formatting and Keywords section.

Learn how to format keywords in Number Formatting section.-->

{sample}AGST\_Axes\_Basic\_01{sample}

<a name="position"/>
## Axes Position

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust position attribute of **.yAxis()** or **.xAxis()** methods. Positioning depends on plot type and inversion of axes, you will find list of all possible positioning and inversion settings in [Axes Positioning and Inverting Templates](Axes-Positioning).
```
chart.xAxis(0).orientation('top);
chart.yAxis(0).orientation('right');
```
And here is the demonstration of this feature on the Single-series column chart:

{sample}AGST\_Axes\_Basic\_02{sample}
<a name="labels"/>
## Axes Labels

To enable axes labels you need to specify **.labeles().enabled(true)** in desired axis. You can specify how labels should look like, padding between labels and an axis line, should labels be rotated or staggered, etc.
<br/><br/>
Learn more about axes labels formatting in [Axes Labels Tutorial](Axes_Labels_Tutorial)
<br/><br/>
Look at the demonstration of possible labels display modes: "Normal" and "Stager".
<br/><br/>
```
  chart.xAxis().staggerMode(false);
```
{sample}AGST\_Axes\_Basic\_03{sample}

Rotated labels:
```
  chart.yAxis().labels().enabled(true).rotation(90);
  chart.xAxis().labels().enabled(true).rotation(90);
```

Live Sample:  Axis Labels Sample - Normal Mode rotated by 90

{sample}AGST\_Axes\_Basic\_04{sample}

```  
  chart.yAxis().staggerMode(true);
  chart.yAxis().staggerLines(2);
  chart.xAxis().staggerMode(true);
  chart.xAxis().staggerLines(3);
```
 

{sample}AGST\_Axes\_Basic\_05{sample}


<a name="axis-lines"/>
## Axis lines

It is possible to tune visual appearance of axis segment line and zero line. To do this you need to use **.lineMarker()** with default settings.

```
  chart.lineMarker().stroke('2 red');    
```
As in any line, you can make it gradient, change opacity and thickness using **stroke()** method. <!--[Link in need]Read more about lines in [Borders and Lines](Lines-Border-Settings):[/link]-->

{sample}AGST\_Axes\_Basic\_06{sample}

<a name="tickmarks"/>
## Axis Tickmarks

Tickmarks are the small marks used to represent a point on an axis scale, there are major and minor ticks, first used to indicate major step of an axis scale, second - minor step. You can control their appearance and position. To enable/disable ticks set **.enabled(true)** or **.enabled(false)** to **.ticks()** or **.minorTicks()**

```
minorTicks().enabled(true)
ticks().enabled(false)
```
Ticks can be placed **inside** or **outside** relatively to axis line. These features are controlled by **.position()** attributes:

```
  chart.yAxis().ticks().position('outside');
  chart.xAxis().ticks().position('inside');
```
The dashboard below shows how these settings work:

{sample}AGST\_Axes\_Basic\_07{sample}


<a name="grids"/>
## Grid configuration
<a name="grids"/>
### Major and Minor Grids

There are two types of grids in AnyChart - major grid and minor grid, which correspond to [major and minor scale steps](Axes-Scales). To enable grid you have to specify:

```
  chart.minorGrid().enabled(true);
  chart.grid().enabled(true);
```
For each grid you can define line style:

```
 chart.grid().stroke('black');
 chart.minorGrid().stroke('black 0.5');
```
That's how simple grid will look like:

{sample}AGST\_Axes\_Basic\_08{sample}

to top
<a name="dashed"/>
### Dashed Grids

You can also make your grid lines dashed:

```
  chart.minorGrid().stroke({color: 'black', dash: '5 2 5', opacity: 0.2}).direction('horizontal');
```
And create chart like this:

{sample}AGST\_Axes\_Basic\_09{sample}

<a name="interlace"/>
### Even and Odd fills

You can use this method with both major and minor grids. To do this you need to set **.oddFill()** or/and **.evenFill()** attributes in corresponding grid. Fill can be gradient, image and/or hatch as well as any other fill.

```
    chart.grid(1).direction('horizontal').evenFill('white').oddFill('rgb(244,245,255');
```

That's how simple interlaced grid will look like:

{sample}AGST\_Axes\_Basic\_10{sample}
<!--
<a name="keywords"/>
### Keywords Reference

This table list all built-in keywords that can be used in axes titles formatting.

Keyword	Description
{%DataPlotYSum}	The sum of all the points y values.
{%DataPlotXSum}	The sum of all the points x values (Scatter plot charts).
{%DataPlotBubbleSizeSum}	The sum of all the points bubble sizes (Bubble chart).
{%DataPlotYMax}	The maximal of all the points y values.
{%DataPlotYMin}	The minimal of all the points y values.
{%DataPlotXMax}	The maximal of all the points x values (Scatter plot chart).
{%DataPlotXMin}	The minimal of all the points x values (Scatter plot chart).
{%DataPlotBubbleMaxSize}	The maximal of all the points bubble sizes (Bubble chart).
{%DataPlotBubbleMinSize}	The minimal of all the points bubble sizes (Bubble chart).
{%DataPlotXAverage}	The average x value of all the points (Scatter plot charts).
{%DataPlotYAverage}	The average y value of all the points.
{%DataPlotBubbleSizeAverage}	The average bubble size of all the points (Scatter plot charts).
{%DataPlotMaxYValuePointName}	The name of the point with a maximal of all the points y values.
{%DataPlotMinYValuePointName}	The name of the point with a minimal of all the points y values.
{%DataPlotMaxYValuePointSeriesName}	The name of the series with a maximal of all the points y values.
{%DataPlotMinYValuePointSeriesName}	The name of the series with a minimal of all the points y values.
{%DataPlotMaxYSumSeriesName}	The name of the series with a maximal sum of the points y values.
{%DataPlotMinYSumSeriesName}	The name of the series with a minimal sum of the points y values.
{%DataPlotYRangeMax}	The maximal of the ranges of the points within the chart.
{%DataPlotYRangeMin}	The minimal of the ranges of the points within the chart.
{%DataPlotYRangeSum}	The sum of the ranges of the points within the chart.
{%DataPlotPointCount}	The number of the points within the chart.
{%DataPlotSeriesCount}	The number of the series within the chart.
Axis
This table list all built-in keywords that provide axis data and axis-related precalculated values.

Keyword	Description
{%AxisSum}	The sum of all values of all points in series that are bound to this axis.
{%AxisBubbleSizeSum}	The sum of all bubble sizes of all points in series that are bound to this axis.
{%AxisMax}	The maximal value of all points in series that are bound to this axis.
{%AxisMin}	The minimal value of all points in series that are bound to this axis.
{%AxisScaleMax}	The maximal scale value.
{%AxisScaleMin}	The minimal scale value.
{%AxisBubbleSizeMax}	The maximal bubble size of all points in series that are bound to this axis.
{%AxisBubbleSizeMin}	The minimal bubble size of all points in series that are bound to this axis.
{%AxisAverage}	The average value of all points in series that are bound to this axis.
{%AxisMedian}	The median value of all points in series that are bound to this axis.
{%AxisMode}	The mode value of all points in series that are bound to this axis.
{%AxisName}	The name of the axis.
 -->