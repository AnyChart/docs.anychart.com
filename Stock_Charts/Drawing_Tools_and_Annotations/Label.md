{:index 3}
# Label

## Overview

Label annotations are created to add text annotations to the chart. You can add any text of your choice and even have some nice features that can make adding annotations easier. 

This article explains how to add a label and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Label annotation to a chart, call the {api:anychart.core.annotations.PlotController#label}label(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.Label#xAnchor}xAnchor(){api} and {api:anychart.core.annotations.Label#valueAnchor}valueAnchor(){api} methods to set the point that determines the position of the label. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Label annotation
controller.label({
    xAnchor: "2008-07-13",
    valueAnchor: 21.66,
    text: "Buy"
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Label\_01{sample}

## Text

The special thing about the label is obviously text. To set text use the {api:anychart.core.annotations.Label#text}text(){api} method. 

To configure the font use the {api:anychart.core.annotations.Label#fontSize}fontSize(){api}, {api:anychart.core.annotations.Label#fontFamily}fontFamily(){api}, and other methods.

```
// create the first label annotation and configure its text and size
var label1 = controller.label({
    xAnchor: "2008-07-13",
    valueAnchor: 21.66,
    fontSize: 30,
    text: "Buy"
});

// create the second Label annotation
var label2 = controller.label();

// set the position of the second annotation
label2.xAnchor("2007-01-07");
label2.valueAnchor(28.92);

// set the text of the second annotation
label2.text("Sell");

// configure the size and font family
label2.fontSize(30);
label2.fontFamily("Courier");
```

{sample}STOCK\_Drawing\_Label\_02{sample}

## Appearance

The [appearance settings](../../../Appearance_Settings) of a Label annotation can be configured in three [states](../../../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#background}background(){api}
* {api:anychart.core.StateSettings#fontColor}fontColor(){api}
* {api:anychart.core.StateSettings#fontSize}fontSize(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}
* and others listed in {api:anychart.core.annotations.Label}Label{api}.

You can also use object notation to specify the settings.

In the sample below, there are two label annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first label annotation and configure its size, offset and visual settings
var label1 = controller.label({
    xAnchor: "2008-07-13",
    valueAnchor: 21.66,
    fontSize: 30,
    text: "Buy",
    hovered: {fontColor: "#398cae 0.3"},
    selected: {fontColor: "Black"}
});

// create the second Label annotation
var label2 = controller.label();

// set the position of the second annotation
label2.xAnchor("2007-01-07");
label2.valueAnchor(28.92);

// set the text of the second annotation
label2.text("Sell");

// configure the visual settings of the second annotation
label2.normal().fontColor("Red");
label2.hovered().fontColor("Black");
label2.selected().fontColor("Black");
```

{sample}STOCK\_Drawing\_Label\_03{sample}
