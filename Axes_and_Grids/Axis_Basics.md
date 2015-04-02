{:index 1}
# Axis Basics

* [Overview](#overview)
* [Declaration](#declaration)
* [Title](#title)
* [Orientation](#orientation)
* [Labels](#labels)
* [Axis Line](#axis_line)
* [Tickmarks](#tickmarks)

## Overview

In AnyChart axes are used to control grids, axes labels, lines and tick marks.
   
* To know what scale options are available - please see: [Scale tutorial](Scales)
* To learn how to create additional axes - [Additional axes](Additional_Axes)
* To learn how to configure axes labels - [Axes Labels](Axes_Labels_Formatting)
* To learn more about Date/Time Scale - [Date/Time Axes](Date_Time_Axes)

In this section we will demonstrate most of the axes visualization options, which are the same for Y and X and Additional axes.

## Declaration

If you want to control any of the axes settings - you should do that using {api:anychart.core.axes}**Axis**{api} methods:

```
  chart.xAxis().title().enabled(true).text('Sample X axis name');
```

## Title

You can define a title of any axis, you can control its position and font <!--and use keywords-->, when specifying text. Full reference of parameters can be found in Reference: {api:anychart.core.axes.Linear#title}**.yAxis().title()**{api} or {api:anychart.core.axes.Linear#title}**.xAxis().title()**{api}. Here is a sample titles definition:

```
  var max = chart.yScale().maximum();
  var min = chart.yScale().minimum();
  chart.yAxis().title().align('bottom');
  chart.yAxis().orientation('right');
  chart.xAxis().title().text('Sample X axis name').fontWeight('400');
  chart.yAxis().title().text('Y axis from ' + min + ' to ' + max);
```

As you can see, we've set titles both to X and Y axis and adjusted Y axis align<!--and used {%DataPlotYMax} and %DataPlotYMin keywords-->.

<!--Full reference of available keywords is available in the end of this article: Keywords reference.

General formatting questions are answered in Text Formatting and Keywords section.

Learn how to format keywords in Number Formatting section.-->

{sample}AGST\_Axes\_Basic\_01{sample}

## Orientation

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust {api:anychart.core.axes.Linear#orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} methods. Orientation depends on plot type and inversion of axes, you will find list of all possible orientation and inversion settings in [Axes Positioning and Inverting Templates](Axis_Orientation).

```
  chart.xAxis(0).orientation('top');
  chart.yAxis(0).orientation('right');
```

And here is the demonstration of this feature on the Single series column chart:

{sample}AGST\_Axes\_Basic\_02{sample}

## Labels

To enable or disable axis labels you need to specify {api:anychart.core.ui.LabelsFactory#enabled}**.labels().enabled()**{api} parameter of an axis. You can specify how labels should look like, padding between labels and an axis line, should labels be rotated or staggered, etc.

Learn more about axes labels formatting in [Axes Labels Tutorial](Axes_Labels_Formatting)

Look at the demonstration of possible labels display modes: "Normal" and "Stager".

```
  chart.xAxis().staggerMode(false);
```

{sample}AGST\_Axes\_Basic\_03{sample}

Rotated labels:

```
  chart.yAxis().labels().enabled(true).rotation(-90);
  chart.xAxis().labels().enabled(true).rotation(-90);
```

{sample}AGST\_Axes\_Basic\_04{sample}

```  
  chart.xAxis().staggerMode(true);  //enables stagger mode
  chart.xAxis().staggerLines(2);    //set the number of lines for labels
```

{sample}AGST\_Axes\_Basic\_05{sample}

## Axis Line

It is possible to tune visual appearance of axis segment line and zero line. To do this you need to use 
{api:anychart.charts.Cartesian#lineMarker}**.lineMarker()**{api} method.

```
  chart.lineMarker().stroke('2 red');    
```

As in any line, you can make it gradient, change opacity and thickness using {api:anychart.core.axes.Linear#stroke}**stroke()**{api} method.
Read more about lines in [Strokes and Lines tutorial](../Appearance_Settings/Strokes_and_Lines)

{sample}AGST\_Axes\_Basic\_06{sample}

## Tickmarks

Tickmarks are the small marks used to represent a point on an axis scale, there are major and minor ticks, first used to indicate major step of an axis scale, second - minor step. You can control their appearance and position. To enable/disable ticks set **.enabled(true)** or **.enabled(false)** to {api:anychart.core.axes.Linear#ticks}**.ticks()**{api} or {api:anychart.core.axes.Linear#minorTicks}**.minorTicks()**{api}

```
minorTicks().enabled(true)
ticks().enabled(false)
```

Ticks can be placed **inside** or **outside** relatively to the axis line. These features are controlled by {api:anychart.core.axes.Ticks#position}**.position()**{api} attributes:

```
  chart.yAxis().ticks().position('outside');
  chart.xAxis().ticks().position('inside');
```

The dashboard below shows how these settings work:

{sample}AGST\_Axes\_Basic\_07{sample}
