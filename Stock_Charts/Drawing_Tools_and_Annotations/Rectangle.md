{:index 3}
# Rectangle

## Overview

The Rectangle annotation allows to add a rectangle or a square to a chart.

This article explains how to add a Rectangle and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Rectangle annotation to a chart, call the {api:anychart.core.annotations.PlotController#rectangle}rectangle(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.Rectangle#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.Rectangle#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.Rectangle#secondXAnchor}secondXAnchor(){api}, and {api:anychart.core.annotations.Rectangle#secondValueAnchor}secondValueAnchor(){api} methods to set 2 points that determine the position of the rectangle. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Rectangle annotation
controller.rectangle({
    xAnchor: "2006-11-19",
    valueAnchor: 29.84,
    secondXAnchor: "2007-03-25",
    secondValueAnchor: 25.11
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Rectangle\_01{sample}

## Visual Settings

You can also configure the visual settings of a Rectangle annotation:

* {api:anychart.core.annotations.Rectangle#color}color(){api}, {api:anychart.core.annotations.Rectangle#fill}fill(){api}, {api:anychart.core.annotations.Rectangle#hatchFill}hatchFill(){api}, {api:anychart.core.annotations.Rectangle#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.annotations.Rectangle#hoverFill}hoverFill(){api}, {api:anychart.core.annotations.Rectangle#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.annotations.Rectangle#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.annotations.Rectangle#selectFill}selectFill(){api}, {api:anychart.core.annotations.Rectangle#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.annotations.Rectangle#selectStroke}selectStroke(){api} configure the visual settings on select

In the sample below, there are two Rectangle annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Rectangle annotation and configure its visual settings
rectangle1 = controller.rectangle({
    xAnchor: "2006-11-19",
    valueAnchor: 29.84,
    secondXAnchor: "2007-03-25",
    secondValueAnchor: 25.11
    hoverFill: "#398CAE 0.3",
    hoverStroke: "2 #FF0000",
    selectFill: "#398CAE 0.3",
    selectHatchFill: "brick",
    selectStroke: "5 #FF0000"
});

// create the second Rectangle annotation
rectangle2 = controller.rectangle();

// set the position of the second annotation
rectangle2.xAnchor("2005-11-20");
rectangle2.valueAnchor(15.55);
rectangle2.secondXAnchor("2007-02-25");
rectangle2.secondValueAnchor(23.30);
 
// configure the visual settings of the second annotation
rectangle2.stroke("#2196F3", 3, "10 2");
rectangle2.fill(null);
```

{sample}STOCK\_Drawing\_Rectangle\_02{sample}