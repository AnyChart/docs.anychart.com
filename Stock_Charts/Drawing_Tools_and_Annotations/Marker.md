{:index 3}
#Marker

* [Overview](#overview)
* [Basic settings](#basic_settings)
* [Type and Size](#type_and_size)
* [Visual Settings](#visual_settings)

## Overview

The Marker annotation allows to add a marker to a chart.

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
    xAnchor: "2006-07-30",
    valueAnchor: 17.24
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Marker\_01{sample}

##Type and Size

In AnyChart, there are 22 types of markers you can choose from. By default, a Marker annotation looks like a down arrow. To pick another type, use the {api:anychart.core.annotations.Marker#color}color(){api}

In the following sample, there are two Marker annotations with the size and offset configured (by using an object in the first case and methods in the second). The first annotation is of the default type (down arrow), and the type of the second one is set to up arrow:

```
// create the first Marker annotation and configure its size and offset
marker1 = controller.marker({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    size: 40,
    offsetY: 10
});

// create the second Marker annotation
marker2 = controller.marker();

// set the position of the second annotation
marker2.xAnchor("2007-09-23");
marker2.valueAnchor(33.13);

// set the type of the second annotation
marker2.markerType("arrowDown");

// configure the size and offset of the second annotation
marker2.size(40);
marker2.offsetY(-10);
```

{sample}STOCK\_Drawing\_Marker\_02{sample}

## Visual Settings

You can also configure the visual settings of a Marker annotation:

* {api:anychart.core.annotations.Marker#color}color(){api}, {api:anychart.core.annotations.Marker#fill}fill(){api}, {api:anychart.core.annotations.Marker#hatchFill}hatchFill(){api}, {api:anychart.core.annotations.Marker#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.annotations.Marker#hoverFill}hoverFill(){api}, {api:anychart.core.annotations.Marker#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.annotations.Marker#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.annotations.Marker#selectFill}selectFill(){api}, {api:anychart.core.annotations.Marker#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.annotations.Marker#selectStroke}selectStroke(){api} configure the visual settings on select

In the sample below, there are two Marker annotations with some of the visual settings configured:

```
// create the first Marker annotation and configure its visual settings
marker1 = controller.marker({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    hoverFill: "#398CAE 0.3",
    hoverStroke: "2 #FF0000",
    selectFill: "#398CAE 0.3",
    selectHatchFill: "brick",
    selectStroke: "5 #FF0000"
});

// create the second Marker annotation
marker2 = controller.marker();

// set the position of the second annotation
marker2.xAnchor("2007-09-23");
marker2.valueAnchor(33.13);

// set the type of the second annotation
marker2.markerType("arrowDown");

// configure the visual settings of the second annotation
marker2.stroke("#2196F3", 3, "10 2");
marker2.fill(null);
```

{sample}STOCK\_Drawing\_Marker\_03{sample}

