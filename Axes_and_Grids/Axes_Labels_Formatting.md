{:index 3}
# Axes Labels Formatting

 * [Overview](#overview)
 * [Enable or Disable](#enable_or_disable)
 * [Formatting Labels](#formatting_labels)
   * [Prefixes and Postfixes](#prefixes_and_postfixes)
   * [Number Formatting](#number_formatting)
   * [Label Length](#label_length)
 * [Visual Appearance](#visual_appearance)
   * [Font](#font)
   * [Multiline](#multiline)
   * [Background](#background)
 * [Positioning](#positioning)
   * [Labels Align](#labels_align)
   * [Padding](#padding)
   * [Rotation](#rotation)
   * [Stagger Mode](#stagger_mode)
 * [First and Last Labels](#first_and_last_labels)
 * [Y-Axis Labels: Fixed Width](#y-axis_labels-fixed-width)
 * [X-Axis Labels: Fixed Width and Text Wrapping](#x-axis-labels-wrapping-width)
 * [Overlapping](#overlapping)

## Overview

With AnyChart you have a full control over the axes labels, you can format them, tune visual appearance and position.
  
  
In this tutorial all major settings and features of axes labels are described.

## Enable or Disable

Each axis in AnyChart JavaScript graphs has its own labels settings, these settings can be configured in labels sub parameter of the given axis. 
By default labels for all axes are enabled. You can enable or disable labels for the given axis using enabled method of {api:anychart.core.axes.Linear#labels}**labels()**{api} method:

```
  var labels = chart.xAxis().labels();
  labels.enabled(false);
```

In the sample below a line chart with Y-Axis, X-Axis and Secondary Y-Axis is shown, with labels enabled for both Y Axes and disabled for X-Axis:

{sample}AGST\_Labels\_Formatting\_01{sample}

## Formatting Labels

In order to make chart readable and understandable it is very important to format axes labels in a proper way, for example: 
add "$" prefix if values are given in dollars or add "°F" postfix if values are given in Fahrenheit degrees.
  
You have a full control over the axis labels in {api:anychart.core.ui.LabelsFactory#textFormatter}**textFormatter()**{api} parameter of {api:anychart.core.axes.Linear#labels}**labels()**{api} method.
  
<!--To make text formatting easier AnyChart has a special mechanism called Keywords. Every keyword is a unique token that 
can be specified in <format> node in a following way: {%KeywordName}, for example {%Value} or {%AxisName}. Before displaying 
text every keyword is replaced by a corresponding value. Full reference of available keywords can be found in the end of 
this tutorial:[link in need]Keywords reference[/link].-->

<!--The main keyword you should know to format labels is {%Value} - it stands for the axis value that corresponds to the 
label (labels are drawn near the major tickmark that correspond to major interval - see Axes Scales and Axes Basics for more).-->

TextFormatter always works with function. By default labels show values of the axis and default textFormatter is:

```
  function(){
    return this.value
  }
```

### Prefixes and Postfixes

To add prefix or postfix to the label you just need to adjust **return** of your {api:anychart.core.ui.LabelsFactory#textFormatter}**textFormatter()**{api} function:

```
  chart.yAxis().textFormatter(function(){
    return this.value + "USD"
  });
```

### Number Formatting

You may need to format the value that corresponds to the label, to do this you have all functions, provided with power of javascript. We set no limits on using java in our products.
  
  
Here is a sample of financial chart with euro and dollar axes. Dollar based axis set as main and additional euro axis gets 
value from dollar and transfer it into euro. Some separators were added to adjust x axes labels visual appearance

```
  var yLabels = chart.yAxis(0).labels();
  yLabels.textFormatter(function(){
    return "$" + (this.value/1000) + " 000 USD";
  });
  var yTitle = chart.yAxis(0).title();
  yTitle.text("Revenue in US Dollars");
  yTitle.enabled(true);
  
  var yAxis1 = chart.yAxis(1);
  yAxis1.orientation("right");
  yAxis1.title("Revenue in Euros");
  
  var yLabels1 = chart.yAxis(1).labels();
  yLabels1.textFormatter(function(){
    var value = this.value;
    // scale of USD
    value = value*0.7094716;
    // num decimal
    value = value.toFixed(2);
    // thousand separator
    var num = value.split(".");
    var main = "";
    for (var i=1;(i*3)<num[0].length;i++)
      main = "'" + num[0].substr(num[0].length-(i*3), 3) + main;
    var tail = num[0].substr(0, num[0].length-(main.length-main.length/4));
    num[0]=tail+main;
    // decimal Separator
    value = num.join(".");
  
    return "€ " + value;
  });
  
  var xTitle = chart.xAxis().title();
  xTitle.text("Month");
  xTitle.enabled(true);
```

{sample}AGST\_Labels\_Formatting\_02{sample}

### Label Length

If the value (a number or a text) is to large, you may want to limit the number of characters. Here is the previous sample with x axis labels symbols limited to 3.

{sample}AGST\_Labels\_Formatting\_03{sample}

## Visual Appearance

You can tune visual appearance of axes labels according to your chart design. Label visual settings consist of background settings (which include margins, inner color and border) and font settings<!--and effects-->.
  
  
In general you can learn more about these settings in: [Background tutorial](../Appearance_Settings/Background), [Text Settings tutorial](../Appearance_Settings/Text_Settings)<!-- and Effects tutorial[/links]-->.

  
In this section we will cover the basics that allow to tune labels appearance and some special features (Multi-line labels).

## Font

Font settings of labels are configured as any text. You can specify size, face and color or set the text to HTML mode:

```
  var labels = chart.xAxis().labels();
  labels.fontFamily("Courier");
  labels.fontSize(12);
  labels.fontColor("#125393");
  labels.fontWeight("bold");
  labels.useHtml(false);
```

You can look at font settings at work in the [sample below](#sample).

### Multiline

With AnyChart html5 charts it is possible to control labels' alignment. It is useful, for example, when you want to set multiple label values on one scale:

```
  var labels = chart.yAxis().labels();
  labels.hAlign("right");
```

### Background

As stated in the beginning of this section - you can learn more about background settings in [Background tutorial](../Appearance_Settings/Background), and here we will demonstrate the most usual task - enabling/disabling background and configuring labels border.
  
  
Labels background is configured with (api:anychart.core.ui.Label#background)**.background()**{api} method of {api:anychart.core.axes.Linear#labels}**labels()**{api}. Here are sample settings - background is enabled for xAxis and only stroke method is adjusted:

```   
  var labelsBackground = chart.xAxis().labels().background();
  labelsBackground.enabled(true);
  labelsBackground.stroke("#cecece");
```

In this sample we will demonstrate labels background settings, multi-line labels and align and font settings:

<a name="sample"/></a>
{sample}AGST\_Labels\_Formatting\_04{sample}

## Positioning

AnyChart gives you a number of options to control the position of axes labels, depending on the values displayed - you can choose where and how labels should be placed, whether they should be rotated or staggered and set alignment.

### Labels Align

To specify how labels are aligned you need to set {api:anychart.graphics.vector.Text#hAlign}**hAlign()**{api} and {api:anychart.graphics.vector.Text#vAlign}**vAlign()**{api} attributes of {api:anychart.core.axes.Linear#labels}**labels()**{api}. {api:anychart.graphics.vector.Text#hAlign}**hAlign()**{api} possible values are: "left", "start", "center", "end" and "right". As for {api:anychart.graphics.vector.Text#vAlign}**vAlign()**{api} values, it can be: "top", "middle" and "bottom".
  
Also, you can change the position attribute and make labels appear inside of the data plot area, to do that set {api:anychart.core.ui.Label#offsetX}**offsetX()**{api} for yAxis and {api:anychart.core.ui.Label#offsetY}**offsetY()**{api} for xAxis.

```
  var yAxisLabels = chart.yAxis().labels();
  yAxisLabels.offsetX(30);
```

### Padding

If you want to change the labels background size and text position inside background - use {api:anychart.core.ui.Label#padding}**padding()**{api} parameter (the value in Pixels). Padding may contain up to 4 values: Top&Bottom&Left&Right, Right&Left, Bottom, Left. It is not necessary to set all 4 values. Just remember, that each value has more priority, than the previous one.

```
  var yAxisLabels = chart.yAxis().labels();
  yAxisLabels.padding(0,0,2,3)
```

### Rotation

One of the most useful features of label positioning is ability to show rotated labels. To rotate labels just set angle of rotation in rotation method:

```
  var yAxisLabels = chart.yAxis().labels();
  yAxisLabels.rotation(90)
```

### Stagger Mode

When you have a lot of long labels, you may find useful to use {api:anychart.core.axes.Linear#staggerLines}**staggerLines()**{api} display mode for labels, this may work particularly good on xAxis, when labels contain category names, you can set how many stagger lines there may be:

```
  var xAxis = chart.xAxis();
  xAxis.staggerLines(2);
```

Here is a sample dashboard showing the most of positioning labels settings:

<a name="dashboard"/></a>
{sample}AGST\_Labels\_Formatting\_05{sample}

## First and Last Labels

There are special methods that give you a control over such special labels as: First (minimal value) label on the axis 
and Last label (maximal value). You can force them to be shown or hide them using appropriate methods: {api:anychart.core.axes.Linear#drawFirstLabel}**drawFirstLabel()**{api}, {api:anychart.core.axes.Linear#drawLastLabel}**drawLastLabel()**{api}.
  
  
Turning off the last the first label is shown on the [dashboard above](#dashboard) in "Labels Inside" Line chart.

```
  var xAxis = chart.xAxis();
  xAxis.drawFirstLabel(false);
  xAxis.drawLastLabel(false);
```

<a name="y-axis_labels-fixed-width"/>
## Y-Axis Labels: Fixed Width

You can set fixed width for Y-Axis labels. If label content doesn't fit - text is automatically wrapped.

This function may be of great use when you use Dashboards and you want to sync several charts left and/or right border, which is especially needed when they are displayed in a column and share the same X-Axis arguments.
   
   
To set the width you should use {api:anychart.core.ui.Label#width}**width()**{api} attribute for {api:anychart.core.ui.Label}**labels()**{api}, which accepts positive integer values in pixels:

```
  var labels = chart.yAxis().labels();
  labels.width(50);
```

Sample dashboard shows two charts with values in completely different ranges: upper charts shows up to hundreds of 
thousands and the one beneath shows only hundreds and as the result charts aren't synced to the left:

{sample}AGST\_Labels\_Formatting\_06{sample}

And now the same data with Y-Axis label width set to 70 pixels, which results in synced left border:

{sample}AGST\_Labels\_Formatting\_07{sample}

<a name="x-axis-labels-wrapping-width"/>
## X-Axis Labels: Fixed Width and Text Wrapping

Sometimes you may encounter situation when point names (which are used as arguments and are displayed in X-Axis labels) are too long and chart engine removes some of them because they don't fit the chart size — it may be undesired result and it can be avoided in several ways, like allowing labels to overlap (changing value for axis {api:anychart.core.axes.Linear#overlapMode}**overlapMode**{api})<!--or using maxChar keyword in formatting-->, but you can also set fixed width and make them wrap.
  
  
To set the fixed width you have to use {api:anychart.core.ui.Label#width}**width()**{api} attribute in {api:anychart.core.ui.Label}**labels()**{api} element:

```
  var xLabels = chart.xAxis().labels();
  xLabels.width(60);
```

The following example demonstrates standard behavior of the X-Axis labels. As you can see long labels cause component to skip several labels in order to prevent overlapping:

{sample}AGST\_Labels\_Formatting\_08{sample}

Exactly the same configuration but the labels width is set manually to 60 pixels. In this case, component wraps texts in order to fit in the width set:

{sample}AGST\_Labels\_Formatting\_09{sample}

This works as well for other plot types. The following example demonstrates the same data displayed on a bar chart. In order to align multiline text to the right side {api:anychart.graphics.vector.Text#hAlign}**hAlign()**{api} attribute is set to right:

{sample}AGST\_Labels\_Formatting\_10{sample}

## Overlapping

As far as your labels can be unlimited in width AnyChart provides some tools to make axis labels more manageable. You can define the labels' visibility for the case of overlapping. The {api:anychart.core.axes.Linear#overlapMode}overlapMode{api} of a chart's {api:anychart.core.axes.Linear}axis{api} uses **noOverlap** and **allowOverlap** parameters to control overlapping labels:

```
// x axis getter
var xAxis = chart.xAxis();
// allow labels overlapping
xAxis.overlapMode("allowOverlap");
```

**Note**: the overlap is disabled by default. The sample below demonstrates x labels with allowed overlap:

{sample}AGST\_Labels\_Formatting\_11{sample}

