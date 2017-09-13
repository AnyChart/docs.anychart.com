{:index 3}
# Horizontal Line

## Overview

The Horizontal Line annotation allows to add a horizontal line to a chart.

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

## Visual Settings

You can also configure the visual settings of a Horizontal Line annotation:

* {api:anychart.core.annotations.HorizontalLine#color}color(){api} and {api:anychart.core.annotations.HorizontalLine#stroke}stroke(){api} set the color and stroke
* {api:anychart.core.annotations.HorizontalLine#hoverStroke}hoverStroke(){api} configures the stroke on hover
* {api:anychart.core.annotations.HorizontalLine#selectStroke}selectStroke(){api} configures the stroke on select

In the sample below, there are two Horizontal Line annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Horizontal Line annotation and configure its visual settings
horizontalLine1 = controller.horizontalLine({
    valueAnchor: 33.13,
    hoverStroke: "2 #FF0000",
    selectStroke: "5 #FF0000"
});

// create the second Horizontal Line annotation
horizontalLine2 = controller.horizontalLine();

// set the position of the second annotation
horizontalLine2.valueAnchor(14.18);
 
// configure the visual settings of the second annotation
horizontalLine2.stroke("#2196F3", 3, "10 2");
```

{sample}STOCK\_Drawing\_Horizontal\_Line\_02{sample}