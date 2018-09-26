{:index 3}
# Axes Labels Formatting

## Overview

With AnyChart, you've got a full control over the axes labels: you can format them, tune visual appearance and position.
All major settings and features of axes labels are described in this tutorial.

## Enable or Disable

Each axis in AnyChart JavaScript graphs has its own labels settings. By default labels for all axes are enabled. You can enable or disable labels for the given axis using enabled method of {api:anychart.core.axes.Linear#labels}labels(){api} method:

```
var labels = chart.xAxis().labels();
labels.enabled(false);
```

A line chart with labels enabled for both Y-axes and disabled for the X-axis is shown in the sample below.

{sample}AGST\_Labels\_Formatting\_01{sample}

## Formatting Labels

In order to make a chart readable and understandable it is very important to format axes labels in a proper way, e.g., add "$" prefix if values are given in dollars or add "&deg;F" postfix if values are given in Fahrenheit degrees.
  
You have a full control over the axis labels in {api:anychart.core.ui.LabelsFactory#format}format(){api} parameter of {api:anychart.core.axes.Linear#labels}labels(){api} method.
  
It's possible to make text formatting easier by using tokens - special substrings that represent each a label parameter. A token looks like *{%keywordName}*, for example `{%value}` or `{%axisName}`. Before displaying each token is being replaced by a corresponding value. In the [Text Formatters article](../Common_Settings/Text_Formatters#tokens_list) you can find a list of available tokens.

format works with function or with a string with or without tokens. A default axis label shows the axis value and the default label's format looks like the following:

```
chart.axis().format(function() {
  return this.value
});
```

The following code sample demonstrates setting the same parameter to show using tokens:

```
chart.axis().format("{%value}");
```

Tokens can be also used in xml and json, unlike other formatting methods. Setting tokens through the json format looks like the following:

```
"labels":{
  "enabled":true,
  "format":"${%value}{groupsSeparator: }"
}
```

### Prefixes and Postfixes

There are several ways how to edit prefix or postfix of the label. The easiest way is to use tokens through the {api:anychart.core.ui.LabelsFactory#format}format(){api} method:

```
chart.yAxis().labels().format("${%value}");
```

The code above shows the axis value with the dollar sign as prefix. Also, it's possible to set a formatting function. This code recalculates the dollar-axis values into euro and sets the euro sign as a prefix:

```
chart.yAxis(1).labels().format(function() {
  var value = this.value;
  // scale USD to EUR and rouns the result
  value = Math.round(value*0.7094716);
  return "\u20ac" + value;
});
```

{sample}AGST\_Labels\_Formatting\_02{sample}

### Number Formatting

It might be necessary to format the value that corresponds to the label, e.g., do scaling or some mathematical operations using tokens, format or any other javascript functions.
  
Here is a sample of financial chart with euro and dollar axes. Axis that represents dollar rate is set as main and the additional euro axis gets value from the dollar axis and transforms it into euro according to the exchange rate. Some separators are added to adjust the X-axis labels appearance.

```
// formats labels of additional axis
var yLabels1 = chart.yAxis(1).labels();
yLabels1.format("\u20ac{%value}{scale:(113e-2)|()}");
```

{sample}AGST\_Labels\_Formatting\_03{sample}

Find more about text formatting parameters in the [Text Formatters article](../Common_Settings/Text_Formatters#formatting_parameters).

### Label Length

If the label value is too long, it's possible to limit the number of characters using standard javascript method **substr()**: 

```
// limits length of the x-axis labels to 3 or less
chart.xAxis().labels().format(function() {
  var value = this.value;
  // limit the number of symbols to 3
  value = value.substr(0, 3);
  return value
});
```

{sample}AGST\_Labels\_Formatting\_04{sample}

Another way to limit the labels' length is to use the {api:anychart.core.ui.Label#width}width(){api} and the {api:anychart.core.ui.LabelsFactory.Label#textOverflow}textOverflow(){api} methods. The {api:anychart.core.ui.LabelsFactory.Label#textOverflow}textOverflow(){api} method allows to set how to show the text which overflows the defined width: simply cut it or to show it with an ellipsis in the restricted area.

```
// format labels
chart.xAxis().labels().width(45);
chart.xAxis().labels().height(50);
chart.xAxis().labels().textOverflow(anychart.graphics.vector.Text.TextOverflow.ELLIPSIS);
```

{sample}AGST\_Labels\_Formatting\_05{sample}

To limit the number of decimal characters or edit the separator use [formatting parameters](../Common_Settings/Text_Formatters#formatting_parameters).

## Visual Appearance

Visual appearance of axes labels can be customized according to the chart design. Label visual settings consist of background settings (which include margins, inner color and border) and font settings.  
  
Learn more about these settings in: [Background tutorial](../Appearance_Settings/Background), [Text Settings tutorial](../Appearance_Settings/Text_Settings).

The basic settings that allow to tune labels appearance and some special features (Multi-line labels) are considered below.

### Font

Font settings of labels are configured as any text. You can specify font face, size and color or set the text to HTML mode using {api:anychart.core.ui.Label#fontFamily}fontFamily(){api}, {api:anychart.core.ui.Label#fontSize}fontSize(){api}, {api:anychart.core.ui.Label#fontColor}fontColor(){api} and {api:anychart.core.ui.Label#useHtml}useHtml(){api} methods. 

```
var labels = chart.xAxis().labels();
labels.fontFamily("Courier");
labels.fontSize(12);
labels.fontColor("#125393");
labels.fontWeight("bold");
labels.useHtml(false);
```

### Background

Labels background is being configured with the (api:anychart.core.ui.Label#background).background(){api} method. Let's enable background for xAxis labels and adjust the stroke for them:

```   
// background settings
var xLabelsBackground = chart.xAxis().labels().background();
xLabelsBackground.enabled(true);
xLabelsBackground.stroke("#cecece");
xLabelsBackground.cornerType("round");
xLabelsBackground.corners(5);
```

{sample}AGST\_Labels\_Formatting\_06{sample}

Find more about background settings in [Background tutorial](../Appearance_Settings/Background).

## Positioning

AnyChart provides a number of options to control the position of axes labels, depending on the values displayed - choose where and how labels should be placed, whether they should be rotated or staggered and set alignment.

### Labels Alignment

To specify how labels are aligned set {api:anychart.graphics.vector.Text#hAlign}hAlign(){api} and {api:anychart.graphics.vector.Text#vAlign}vAlign(){api} methods. Using the {api:anychart.graphics.vector.Text#hAlign}hAlign(){api} method makes a noticable change if the labels consist of several lines.

```
// set function to format axes labels
var yLabels = chart.yAxis().labels();
yLabels.hAlign("center");
var xLabels = chart.xAxis().labels();
xLabels.offsetY(5);
```

{sample}AGST\_Labels\_Formatting\_07{sample}

### Side Position

By default, labels are shown outside of the data area (the area limited by the axes). However, they can be shown inside this area or on the axes. To set the side position of labels, call the {api:anychart.core.ui.Label#position}position(){api} method with one of the parameters listed in {api:anychart.enums.SidePosition}anychart.enums.SidePosition{api}:

* `"outside"` (default)
* `"inside"`
* `"center"`

The following sample shows how to place labels inside the data area: 

```
// change the side position of labels on the y-axis
chart.yAxis().labels().position("inside");

// change the side position of labels on the x-axis
chart.xAxis().labels().position("inside");
```

{sample}AGST\_Labels\_Formatting\_08{sample}

### Rotation

One of the most useful features of label positioning is ability to show rotated labels. To rotate labels set the angle of rotation in the {api:anychart.core.ui.LabelsFactory#rotation}rotation(){api} method:

```
var yAxisLabels = chart.yAxis().labels();
yAxisLabels.rotation(90)
```

{sample}AGST\_Labels\_Formatting\_09{sample}

### Stagger Mode

When there are a lot of labels with long values, especially containing category names, the {api:anychart.core.axes.Linear#staggerLines}staggerLines(){api} method becomes quite useful. It sets a number of staggered lines:

```
// enabling stagger mode
var xAxis = staggerLabels.xAxis();
xAxis.staggerMode(true);
// adjusting settings for stagger mode
xAxis.staggerLines(2);
```

{sample}AGST\_Labels\_Formatting\_10{sample}

## First and Last Labels

There are special methods for editing the first label (the one with the minimal value) on the axis and the last label (maximal value). You can force them to be shown or hide them using the {api:anychart.core.axes.Linear#drawFirstLabel}drawFirstLabel(){api} and {api:anychart.core.axes.Linear#drawLastLabel}drawLastLabel(){api} methods.

```
// disabling first and last labels
staggerAxis = staggerLabels.xAxis();
staggerAxis.drawFirstLabel(false);
staggerAxis.drawLastLabel(false);
```

{sample}AGST\_Labels\_Formatting\_11{sample}

## Y-Axis Labels: Fixed Width

It's possible to set fixed custom width for the Y-axis labels. This function may be of great use in dashboards when it's necessary to sync several charts left and/or right border, which is especially needed when they are displayed in a column and share the same X-axis arguments.

To set the axis width use {api:anychart.core.ui.Label#width}width(){api} attribute for {api:anychart.core.ui.Label}labels(){api}, which accepts positive integer values in pixels:

```
var labels = chart.yAxis().labels();
labels.width(50);
```

Sample dashboard shows two charts with values in completely different ranges: the upper chart shows up to hundreds of 
thousands and the one beneath shows only hundreds. As the result, the charts' Y-axes aren't synced to the left:

{sample}AGST\_Labels\_Formatting\_12{sample}

```
var labels = chart.yAxis().labels();
labels.width(70);
```

There is the same data with the Y-axis label width set to 70 pixels, which results in synced left border:

{sample}AGST\_Labels\_Formatting\_13{sample}

Please note that width restriction can lead to wrapping the labels' content, so the label text might not fit the custom width. 

## X-Axis Labels: Fixed Width and Text Wrapping

Sometimes you may encounter a situation when point names (which are used as arguments and are displayed in the X-axis labels) are too long and chart engine removes some of them because they don't fit the chart size this undesired result can be avoided in several ways: you can allow labels to overlap, change the overflow mode (use standard javascript **textOverflow()** method), or set fixed width to the labels and make them wrap their content.

The following example demonstrates standard behavior of the X-axis labels. As you can see long labels cause component to skip several labels in order to prevent overlapping:

{sample}AGST\_Labels\_Formatting\_14{sample}

The following sample demonstrates exactly the same configuration but the labels width is set manually to 60 pixels. In this case, component wraps text in order to fit the width:
  
To adjust the labels' width and allow or forbid the labels' text wrapping use {api:anychart.core.ui.Label#width}width(){api},  and {api:anychart.core.ui.LabelsFactory#wordWrap}wordWrap(){api} and {api:anychart.core.ui.LabelsFactory#wordBreak}wordBreak(){api} methods:

```
var xLabels = chart.xAxis().labels();
xLabels.width(60);
xLabels.wordWrap("break-word");
xLabels.wordBreak("break-all");
```

{sample}AGST\_Labels\_Formatting\_15{sample}

Find more about wrapping in the [Text Wrapping](../Graphics/Text_and_Fonts#wrap) article.

This works as well for other plot types. The following example demonstrates the same data displayed on a bar chart. In order to align multiline text to the right side {api:anychart.graphics.vector.Text#hAlign}hAlign(){api} attribute is set to right:

{sample}AGST\_Labels\_Formatting\_16{sample}

## Overlapping

As far as your labels can be unlimited in width AnyChart provides some tools to make axis labels more manageable. You can define the labels' visibility for the case of overlapping. The {api:anychart.core.axes.Linear#overlapMode}overlapMode(){api} of a chart's {api:anychart.core.axes.Linear}axis{api} uses `"noOverlap"` and `"allowOverlap"` parameters to control overlapping labels:

```
// x-axis getter
var xAxis = chart.xAxis();
// allow labels overlapping
xAxis.overlapMode("allowOverlap");
```

**Note**: overlapping is disabled by default. The sample below demonstrates x labels with overlapping allowed:

{sample}AGST\_Labels\_Formatting\_17{sample}

## Individual Settings

In some cases when there is a need in deep customization you can use {api:anychart.core.ui.LabelsFactory#getLabel}getLabel{api} and {api:anychart.core.ui.LabelsFactory#getLabelsCount}getLabelsCount{api} methods to access individual labels and solve different tasks.

**Note:** these methods work properly only after the full chart display. Use [Event listeners](../Common_Settings/Event_Listeners) or be sure you execute the code with these methods in proper tim.

Here is how you can change the look of selected labels, in this sample the labels with values greater than data series average:

```
// wait until chart is displayed
chart.listen('chartDraw', function () {
  // get a number of labels on the Y axis
  var count = chart.yAxis().labels().getLabelsCount();
  // go to through all labels
  for (var i = 0; i < count; i++) {
    // get label object
    var label = chart.yAxis().labels().getLabel(i);
    // get value of the scale this label
    value = chart.yAxis().scale().ticks().get()[i];
    // get chart average
    avg = chart.getSeries(0).getStat('average');
    // if the value is greater
    if (value > avg) {
      label.fontColor("red");
      label.background().enabled(true).stroke("black");
      label.draw();
    }
  }
});
```

{sample}AGST\_Labels\_Formatting\_18{sample}

Here is how you can create even/odd colored axis labels:

```
// wait until chart display
chart.listen('chartDraw', function () {
    // get the number of labels
    var count = chart.xAxis().labels().getLabelsCount();
    // loop through labels
    for (var i = 0; i < count; i++) {
        // choose color
        var color = i % 2 ? '#CD4A2D' : '#4C4C4C';
        // color the label
        var label = chart.xAxis().labels().getLabel(i);
        if (label) {
            label.fontColor(color);
            label.draw();
        }
    }
});
```

{sample}AGST\_Labels\_Formatting\_19{sample}

Or you can make axis labels interactive and change their look and content when user moves a mouse over them:

{sample}AGST\_Labels\_Formatting\_20{sample}