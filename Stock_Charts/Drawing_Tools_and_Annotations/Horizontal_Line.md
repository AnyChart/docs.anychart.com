{:index 3}
# Horizontal Line

## Overview

The Horizontal Line annotation allows you to add a horizontal line to a chart.

This article explains how to add a Horizontal Line and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Horizontal Line annotation to a chart, call the {api:anychart.core.annotations.PlotController#horizontalLine}horizontalLine(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.HorizontalLine#valueAnchor}valueAnchor(){api}, method to set the value that determines the position of the horizontal line. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Horizontal Line annotation
controller.horizontalLine({
    valueAnchor: 33.13
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Horizontal\_Line\_01{sample}

## Appearance

The [appearance settings](../../../Appearance_Settings) of a Horizontal Line annotation can be configured in three [states](../../../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.

In the sample below, there are two Horizontal Line annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Horizontal Line annotation and configure its visual settings
var horizontalLine1 = controller.horizontalLine({
    valueAnchor: 33.13,
    hovered: {stroke: "2 #ff0000"},
    selected: {stroke: "4 #ff0000"}
});

// create the second Horizontal Line annotation
var horizontalLine2 = controller.horizontalLine();

// set the position of the second annotation
horizontalLine2.valueAnchor(14.18);
 
// configure the visual settings of the second annotation
horizontalLine2.normal().stroke("#006600", 1, "10 2");
horizontalLine2.hovered().stroke("#00b300", 2, "10 2");
horizontalLine2.selected().stroke("#00b300", 4, "10 2");
```

{sample}STOCK\_Drawing\_Horizontal\_Line\_02{sample}