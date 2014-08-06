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
* [Keywords Reference](#keywords)

<a name="overview"/>
## Overview
   
In AnyChart axes are used to control values or arguments scales, grids, axes labels, lines and tick marks.
   
* To know what scale options are available - please see: Axes scale tutorial
* To learn how to create additional axes - Additional axes
* To learn how to configure axes labels - Axes Labels
* To learn more about Date/Time Scale - Date/Time Axes

In this section we will demonstrate most of the axes visualization options, which are the same for Y and X and Extra axes.

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

Full reference of available keywords is available in the end of this article: Keywords reference.

General formatting questions are answered in Text Formatting and Keywords section.

Learn how to format keywords in Number Formatting section.
{sample}AGST\_Axes\_Basic\_01{sample}

Axes position

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust position attribute of <y_axis> or <x_axis> nodes. Positioning depends on plot type and inversion of axes, you will find list of all possible positioning and inversion settings in Axes Positioning and Inverting Templates.

XML Syntax
XML Code
Plain code
01
<axes>
02
  <y_axis position="Opposite" />
03
  <x_axis position="Normal" />
04
</axes>
And here is the demonstration of this feature on the Single-series column chart:

Live Sample:  Axes Position Sample

to top

Axes labels

To enable axes labels you need to specify <labels enabled="true"/> sub-node in desired axis node. You can specify how labels should look like, padding between labels and an axis line, should labels be rotated or staggered, etc.

Learn more about axes labels formatting in Axes Labels Tutorial

Look at the demonstration of possible labels display modes: "Normal" and "Stager".

Labels normal mode

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <labels display_mode="Normal" />
03
</y_axis>
 

Live Sample:  Axis Labels Sample - Normal mode

Rotated labels:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <labels display_mode="Normal" rotation="90" />
03
</y_axis>
 

Live Sample:  Axis Labels Sample - Normal Mode rotatated to 90

Make labels staggered:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <labels display_mode="Stager" />
03
</y_axis>
 

Live Sample:  Axis Labels Sample - Stager Mode

to top

Axis lines

It is possible to tune visual appearance of axis segment line and zero line. To do this you need to specify line settings in <line> and <zero_line> sub-nodes of axis node.

XML Syntax
XML Code
Plain code
01
<axes>
02
  <y_axis>
03
    <line color="Red" />
04
    <zero_line color="Red" />
05
  </y_axis>
06
  <x_axis>
07
    <line_style color="Red" />
08
    <zero_line_style color="Red" />
09
  </x_axis>
10
</axes>
As in any line, you can make them gradient, change opacity and thickness, read more about lines in Borders and Lines:

Live Sample:  Axis Line and Zero Line Sample

to top

Axis tickmarks

Tickmarks are the small marks used to represent a point on an axis scale, there are major and minor tickmarks, first used to indicate major step of an axis scale, second - minor step. You can control their appearance and position. To enable/disable tickmarks set enabled="True" or enabled = "false" to <major_tickmark> or <minor_tickmark>

XML Syntax
XML Code
Plain code
01
<axes>
02
  <y_axis>
03
    <major_tickmark enabled="True" />
04
    <minor_tickmark enabled="False" />
05
  </y_axis>
06
</axes>
Tickmarks can be placed "inside", "outside" and "opposite" relatively to axis line. These features are controlled by inside, outside and opposite attributes:

XML Syntax
XML Code
Plain code
01
<axes>
02
  <y_axis>
03
    <major_tickmark enabled="True" outside="True" inside="False" opposite="False" />
04
    <minor_tickmark enabled="False" outside="False" inside="True" opposite="False" />
05
  </y_axis>
06
</axes>
The dashboard below shows how these settings work:

Live Sample:  Tickmarks Position Sample

to top

Grid configuration

Major and Minor Grids

There are two types of grids in AnyChart - major grid and minor grid, which correspond to major and minor scale steps. To enable grid you have to specify:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <major_grid enabled="True" />
03
  <minor_grid enabled="True" />
04
</y_axis>
For each grid you can define line style:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <major_grid enabled="True">
03
    <line color="Black" />
04
  </major_grid>
05
  <minor_grid enabled="True">
06
    <line color="Black" opacity="0.5" dashed="True" />
07
  </minor_grid>
08
</y_axis>
That's how simple grid will look like:

Live Sample:  Simple Grids Sample

to top

Dashed Grids

You can also make your grid lines dashed:

XML Syntax
XML Code
Plain code
01
<major_grid enabled="True">
02
  <line color="Black" opacity="0.2" dashed="True" dash_length="5" space_length="5" />
03
</major_grid>
And create chart like this:

Live Sample:  Simple Dashed Grids Sample

to top

Interlaced Grids

You can make both major and minor grids interlaced. To do this you need to set interlaced="True" attribute in corresponding grid nodes and specify even and/or odd fills. Fill can be gradient, image and/or hatch as well as any other fill.

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <major_grid enabled="True" interlaced="True">
03
    <interlaced_fills>
04
      <even>
05
        <fill color="rgb(244,245,255)" opacity="0.5" />
06
      </even>
07
    </interlaced_fills>
08
  </major_grid>
09
</y_axis>
That's how simple interlaced grid will look like:

Live Sample:  Interlaced Grids Sample

to top

Keywords Reference

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
 

to top

Current Page Online URL: Axes basics