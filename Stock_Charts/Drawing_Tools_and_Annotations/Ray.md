{:index 3}
# Ray

## Overview

The Ray annotation allows to add a ray to a chart.

This article explains how to add a Ray and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Ray annotation to a chart, call the {api:anychart.core.annotations.PlotController#ray}ray(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.Ray#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.Ray#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.Ray#secondXAnchor}secondXAnchor(){api}, and {api:anychart.core.annotations.Ray#secondValueAnchor}secondValueAnchor(){api} methods to set 2 points that determine the position of the ray. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Ray annotation
controller.ray({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2008-04-27",
    secondValueAnchor: 26.75
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Ray\_01{sample}

## Visual Settings

You can also configure the visual settings of a Ray annotation:

* {api:anychart.core.annotations.Ray#color}color(){api} and {api:anychart.core.annotations.Ray#stroke}stroke(){api} set the color and stroke
* {api:anychart.core.annotations.Ray#hoverStroke}hoverStroke(){api} configures the stroke on hover
* {api:anychart.core.annotations.Ray#selectStroke}selectStroke(){api} configures the stroke on select

In the sample below, there are two Ray annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Ray annotation and configure its visual settings
ray1 = controller.ray({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2008-04-27",
    secondValueAnchor: 26.75,
    hoverStroke: "2 #FF0000",
    selectStroke: "5 #FF0000"
});

// create the second Ray annotation
ray2 = controller.ray();

// set the position of the second annotation
ray2.xAnchor("2004-06-06");
ray2.valueAnchor(23.82);
ray2.secondXAnchor("2007-09-23");
ray2.secondValueAnchor(33.13);
 
// configure the visual settings of the second annotation
ray2.stroke("#2196F3", 3, "10 2");
```

{sample}STOCK\_Drawing\_Ray\_02{sample}