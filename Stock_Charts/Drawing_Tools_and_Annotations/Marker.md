{:index 3}
#Marker

* [Overview](#overview)
* [Basic settings](#basic_settings)
* [Visual Settings](#visual_settings)

## Overview

The Marker annotation allows to add a marker a chart.

This article explains how to add a Marker and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Marker annotation to a chart, call the {api:anychart.core.annotations.PlotController#marker}marker(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.Marker#xAnchor}xAnchor(){api} and {api:anychart.core.annotations.Marker#valueAnchor}valueAnchor(){api} methods to set the point that determines the position of the marker. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Marker annotation
controller.marker({
    xAnchor: "2007-01-07",
    valueAnchor: 28.92,
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Marker\_01{sample}

## Visual Settings

You can also configure the visual settings of a Marker annotation:

* {api:anychart.core.annotations.Marker#color}color(){api}, {api:anychart.core.annotations.Marker#fill}fill(){api}, {api:anychart.core.annotations.Marker#hatchFill}hatchFill(){api}, {api:anychart.core.annotations.Marker#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.annotations.Marker#hoverFill}hoverFill(){api}, {api:anychart.core.annotations.Marker#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.annotations.Marker#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.annotations.Marker#selectFill}selectFill(){api}, {api:anychart.core.annotations.Marker#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.annotations.Marker#selectStroke}selectStroke(){api} configure the visual settings on select

In the sample below, there are two Marker annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Marker annotation and configure its visual settings
marker1 = controller.marker({
    xAnchor: "2006-11-20",
    valueAnchor: 25.92,
    secondXAnchor: "2007-02-24",
    secondValueAnchor: 31.92,
    hoverFill: "#398CAE 0.3",
    hoverStroke: "2 #FF0000",
    selectFill: "#398CAE 0.3",
    selectHatchFill: "brick",
    selectStroke: "5 #FF0000"
});

// create the second Marker annotation
marker2 = controller.marker();

// set the position of the second annotation
marker2.xAnchor("2005-11-20");
marker2.valueAnchor(15.55);
marker2.secondXAnchor("2007-02-25");
marker2.secondValueAnchor(23.30);
 
// configure the visual settings of the second annotation
marker2.stroke("#2196F3", 3, "10 2");
marker2.fill(null);
```

{sample}STOCK\_Drawing\_Marker\_02{sample}

