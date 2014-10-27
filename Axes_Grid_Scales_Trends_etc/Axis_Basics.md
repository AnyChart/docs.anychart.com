{:index 1}
# Axis Basics

* [Overview](#overview)
* [Declaration](#declaration)
* [Title](#title)
* [Position](#position)
* [Labels](#labels)
* [Axis line](#axis_line)
* [Tickmarks](#tickmarks)

## Overview

In AnyChart axes are used to control grids, axes labels, lines and tick marks.
   
* To know what scale options are available - please see: [Scale tutorial](Scales)
* To learn how to create additional axes - [Additional axes](Additional_Axes)
* To learn how to configure axes labels - [Axes Labels](Axes_Labels_Formatting)
* To learn more about Date/Time Scale - [Date/Time Axes](Date_Time_Axes)

In this section we will demonstrate most of the axes visualization options, which are the same for Y and X and Additional axes.

## Declaration

If you want to control any of the axes settings - you should do that using **Axis** methods:

```
  chart.xAxis().title().enabled(true).text('Sample X axis name');
```

## Title

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

## Position

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust position attribute of **
.yAxis()** or **.xAxis()** methods. Positioning depends on plot type and inversion of axes, you will find list of all possible positioning and inversion settings in [Axes Positioning and Inverting Templates](Axis_Orientation).

```
  chart.xAxis(0).orientation('top');
  chart.yAxis(0).orientation('right');
```

And here is the demonstration of this feature on the Single series column chart:

{sample}AGST\_Axes\_Basic\_02{sample}

## Labels

To enable axes labels you need to specify **.labels().enabled(true)** in desired axis. You can specify how labels should 
look like, padding between labels and an axis line, should labels be rotated or staggered, etc.

Learn more about axes labels formatting in [Axes Labels Tutorial](Axes_Labels_Formatting)

Look at the demonstration of possible labels display modes: "Normal" and "Stager".

```
  chart.xAxis().staggerMode(false);
```

{sample}AGST\_Axes\_Basic\_03{sample}

Rotated labels:

```
  chart.yAxis().labels().enabled(true).rotation(90);
  chart.xAxis().labels().enabled(true).rotation(90);
```

{sample}AGST\_Axes\_Basic\_04{sample}

```  
  chart.xAxis().staggerMode(true);  //enables stagger mode
  chart.xAxis().staggerLines(2);    //set the number of lines for labels
```

{sample}AGST\_Axes\_Basic\_05{sample}

## Axis Line

It is possible to tune visual appearance of axis segment line and zero line. To do this you need to use 
**.lineMarker()** with default settings.

```
  chart.lineMarker().stroke('2 red');    
```

As in any line, you can make it gradient, change opacity and thickness using **stroke()** method. 
<!--[Link in need]Read more about lines in [Borders and Lines](Lines-Border-Settings):[/link]-->

{sample}AGST\_Axes\_Basic\_06{sample}

## Tickmarks

Tickmarks are the small marks used to represent a point on an axis scale, there are major and minor ticks, first used to indicate major step of an axis scale, second - minor step. You can control their appearance and position. To enable/disable ticks set **.enabled(true)** or **.enabled(false)** to **.ticks()** or **.minorTicks()**

```
minorTicks().enabled(true)
ticks().enabled(false)
```

Ticks can be placed **inside** or **outside** relatively to the axis line. These features are controlled by **.position()** attributes:

```
  chart.yAxis().ticks().position('outside');
  chart.xAxis().ticks().position('inside');
```

The dashboard below shows how these settings work:

{sample}AGST\_Axes\_Basic\_07{sample}
