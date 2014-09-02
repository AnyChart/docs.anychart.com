# Axes Labels Formatting

 * [Overview](#overview)
 * [Enabling/Disabling Axes Labels](#enable-axes-labels)
 * [Formatting Labels](#formatting)
   * [Prefixes/Postfixes](#prefix-postfix)
   * [Number Formatting](#number-formatting)
   * [Setting Maximum of Visible Characters](#max-char)
 * [Visual Appearance](#visual-appearance)
   * [Font](#font)
   * [Multi Line Labels and Align](#multiline-labels)
   * [Background](#background)
 * [Positioning](#positioning)
   * [Labels Align ](#labels-align)
   * [Padding](#padding)
   * [Rotated Labels ](#rotated)
   * [Stagger Mode ](#stagger)
 * [First and Last<!--and Crossing--> Labels](#first-last-crossing-labels)
 * [Y-Axis Labels: Fixed Width](#y-axis-labels-fixed-width)
 * [X-Axis Labels: Fixed Width and Text Wrapping](#x-axis-labels-wrapping-width)               
 <!--*[Keywords Reference ](#keywords)
   *[Axis keywords](#axis)
   *[Data plot keywords](#data-plot)-->

<a name="overview"/>
## Overview

With AnyChart you have a full control over the axes labels, you can format them, tune visual appearance and position.

In this tutorial all major settings and features of axes labels are described.

<a name="enable-axes-labels"/>
## Enabling/Disabling Axes Labels

Each axis in AnyChart has its own labels settings, these settings can be configured in labels sub node of a give axis.
By default labels for all axes are enabled. You can enable/disable labels for the given axis using enabled attribute of **labels()** node:
```
    chart.xAxis.labels().enabled(false)
```
In the sample below a line chart with Y-Axis, X-Axis and Secondary Y-Axis is shown, with labels enabled for both Y Axes and disabled for X-Axis:

{sample}AGST\_Labels\_Formatting\_01{sample}

<a name="formatting"/>
## Formatting Labels

In order to make chart readable and understandable it is very important to format axes labels in a proper way, for example: add "$" prefix if values are given in dollars or add "°F" postfix if values are given in Fahrenheit degrees.
<br/><br/>
You have a full control over the axis labels in **.textFormatter()** subnode of **.labels()** node.
<br/><br/>
<!--To make text formatting easier AnyChart has a special mechanism called Keywords. Every keyword is a unique token that can be specified in <format> node in a following way: {%KeywordName}, for example {%Value} or {%AxisName}. Before displaying text every keyword is replaced by a corresponding value. Full reference of available keywords can be found in the end of this tutorial:[link in need]Keywords reference[/link].-->

<!--The main keyword you should know to format labels is {%Value} - it stands for the axis value that corresponds to the label (labels are drawn near the major tickmark that correspond to major interval - see Axes Scales and Axes Basics for more).-->
TextFormatter always works with **function()**. By default labels show values of the axis and default textFormatter is:

```
    function(){
        return this.value
    }
```

<a name="prefix-postfix"/>
### Prefixes and Postfixes

To add prefix or postfix to the label you just need to adjust **return** method of your function:

```
    function(){
        return this.value + 'USD'
    }
```
<a name="number-formatting"/>
### Number Formatting

You may need to format the value that corresponds to the label, to do this you have all functions, provided with power of javascript. We set no limits on using java in our products.

Here is a sample of financial chart with euro and dollar axes. Dollar based axis set as main and additional euro axis gets value from dollar and transfer it into euro. Some separators were added to adjust x axes labels visual appearance

```
    chart.yAxis().labels().textFormatter(dollarFormatter);
    chart.yAxis().title().text('Revenue in US Dollars');
    chart.yAxis(1).orientation('right');
    chart.yAxis(1).title().text('Revenue in Euros');
    chart.yAxis(1).labels().textFormatter(function(){
        var value = this.value;
        value = value*0.7094716;
        value = value.toFixed(2);
        var num = value.split('.');
        if (num[0].length> 3)
            num[0] = num[0].substr(0, num[0].length-3) + '\'' + num[0].substr(num[0].length-3, 3);
        value = num.join('.');
        return '€ ' + value;
    });
    chart.xAxis().title().text('Month');
    function dollarFormatter() {
        return '$' + (this.value/1000) + ' 000 USD';  
    }
```
{sample}AGST\_Labels\_Formatting\_02{sample}

<a name="max-char"/>
### Setting Maximum of Visible Characters

If the value (a number or a text) is to large, you may want to limit the number of characters. Here is the previous sample with x axis labels symbols limited to 3.

{sample}AGST\_Labels\_Formatting\_03{sample}

<a name="visual-appearance"/>
## Visual Appearance

You can tune visual appearance of axes labels according to your chart design. Label visual settings consist of background settings (which include margins and border), font settings and effects.

<!--In general you can learn more about these settings in: [links need]Background tutorial, Fonts tutorial and Effects tutorial.[/links]--> In this section we will cover the basics that allow to tune labels appearance and some special features (Multi-line labels).

<a name="font"/>
## Font

Font settings of labels are configured using multiple attributes. You can specify size, face and color or set the text to HTML mode, also, you can add effects to be applied to the text:

```
    chart.xAxis().labels().fontFamily('Courier').fontSize(12).fontColor('red').fontWeight('bold').useHTML(false);
```

<!--Note: there are some special things you should know about font setting when working with [Rotated labels](#rotated), please study them and learn more about fonts in [link]AnyChart in Fonts tutorial[/link].-->

You can look at font settings at work in the [sample below](#sample).

<a name="multiline-labels"/>
### Multi Line Labels and Align

With AnyChart it is possible to control labels' alignment. It is useful, for example, when you want to set multiple label values on one scale:

```
    chart.yAxis().labels().hAlign('right');
```

<a name="background"/>
### Background

<!--As stated in the beginning of this section - you can learn more about background settings in [link]Background tutorial[/link], and here we will demonstrate the most usual task - enabling/disabling background and configuring labels border.-->

Labels background is configured with **.background()** method of **.labels()**. Here are sample settings - background is enabled for xAxis and only stroke method was adjusted:

```   
    chart.xAxis().labels().background().enabled(true).stroke('blue');
```


In this sample we will demonstrate labels background settings, multi-line labels and align and font settings:

<a name="sample"/>
{sample}AGST\_Labels\_Formatting\_04{sample}

<a name="positioning"/>
## Positioning

AnyChart gives you a number of options to control the position of axes labels, depending on the values displayed - you can choose where and how labels should be placed, whether they should be rotated or staggered and set alignment.

<a name="labels-align"/>
### Labels Align

To specify how labels are aligned you need to set **.hAlign()** and **.vAling()** attributes **.labels()**. **.hAlign** possible values are: "left", "start", "center", "end" and "right". As for **.vAlign()** values, it can be: "top", "middle" and "bottom". 

Also, you can change the position attribute and make labels appear inside of the data plot area, to do that set **.offsetX()** for yAxis and **.offsetY()** for xAxis.

```
    chart.yAxis().labels().offsetX(30);
```

<a name="padding"/>
### Padding

If you want to change the labels background size and text position inside background - use padding attribute (the value in Pixels). Padding may contain up to 4 values: Top&Bottom&Left&Right, Right&Left, Bottom, Left. It is not necessary to set all 4 values. Just remember, that each value has more priority, than the previous one.

```
    chart.yAxis().labels().padding(0,0,2,3)
```

<a name="rotated"/>
### Rotated Labels

One of the most useful features of label positioning is ability to show rotated labels. To rotate labels just set angle of rotation in rotation attribute:

```
    chart.yAxis().labels().rotation(90)
```

<a name="stagger"/>
### Stagger Mode

When you have a lot of long labels, you may find useful to use **.staggerLines()** display mode for labels, this may work particularly good on xAxis, when labels contain category names:

```
    chart.xAxis().staggerLines(2);
```
Here is a sample dashboard showing the most of positioning labels settings:
<a name="dashbord"/>
{sample}AGST\_Labels\_Formatting\_05{sample}

<a name="first-last-crossing-labels"/>
## First and Last <!--and Crossing--> labels

There are special attributes that give you a control over such special labels as: First (minimal value) label on the axis and Last label (maximal value). You can force them to be shown or hide them using appropriate attributes: **.drawFirstLabel()**, **.drawLastLable()** <!-- and show_cross_label-->.

Turning off the last the first label is shown on the [dashboard above](#dashbord) in "Labels Inside" Line chart.
```
    labelsInside.xAxis().drawFirstLabel(false);
    labelsInside.xAxis().drawLastLabel(false);
```

<a name="y-axis-labels-fixed-width"/>
## Y-Axis Labels: Fixed Width

You can set fixed width for Y-Axis labels. If label content doesn't fit - text is automatically wrapped.

This function may be of great use when you use Dashboards and you want to sync several charts left and/or right border, which is especially needed when they are displayed in a column and share the same X-Axis arguments.

To set the width you should use **.width()** attribute for **.labels()**, which accepts positive integer values in pixels:

```
    chart.yAxis().labels().width(50)
```
Sample dashboard shows two charts with values in completely different ranges: upper charts shows up to hundreds of thousands and the one beneath shows only hundreds and as the result charts aren't synced to the left:

{sample}AGST\_Labels\_Formatting\_06{sample}

And now the same data with Y-Axis label width set to 70 pixels, which results in synced left border:

{sample}AGST\_Labels\_Formatting\_07{sample}

<a name="x-axis-labels-wrapping-width"/>
## X-Axis Labels: Fixed Width and Text Wrapping

Sometimes you may encounter situation when point names (which are used as arguments and are displayed in X-Axis labels) are too long and chart engine removes some of them because they don't fit the chart size — it may be undesired result and it can be avoided in several ways, like allowing labels to overlap (changing value for axis **overlapMode**) <!--or using maxChar keyword in formatting-->, but you can also set fixed width and make them wrap.

To set the fixed width you have to use **.width()** attribute in **.labels()** element:

```
    chart.xAxis().labels().width(60)
```

The following example demonstrates standard behavior of the X-Axis labels. As you can see long labels cause component to skip several labels in order to prevent overlapping:

{sample}AGST\_Labels\_Formatting\_08{sample}

Exactly the same configuration but the labels width is set manually to 60 pixels. In this case, component wraps texts in order to fit in the width set:

{sample}AGST\_Labels\_Formatting\_09{sample}

This works as well for other plot types. The following example demonstrates the same data displayed on CategorizedHorizontal plot. In order to align multiline text to the right side **hAlign()** attribute is set to right:

{sample}AGST\_Labels\_Formatting\_10{sample}

<!--
Keywords reference

In the tables below you can find all built-in keywords that can be used in label texts, in Description column you an find notices that identify in what chart types keyword will be active.

to top

Axis

This table lists all built-in keywords that provide axis data and axis-related pre calculated values.

Keyword	Description
{%Value}	The value corresponding to the axis label.
{%AxisSum}	The sum of all y values of all points in series that are bound to this axis.
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

Data Plot

This table list all built-in keywords that provide category data and category-related pre calculated values.

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
to top

Current Page Online URL: Axes Labels Text Formatting-->