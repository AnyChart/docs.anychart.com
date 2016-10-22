{:index 3}
#Vertical Line

* [Overview](#overview)
* [Basic settings](#basic_settings)
* [Visual Settings](#visual_settings)

## Overview

The Vertical Line annotation allows to add an vertical line to a chart.

This article explains how to add an Vertical Line and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add an Vertical Line annotation to a chart, call the {api:anychart.core.annotations.VerticalLine}verticalLine(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.VerticalLine#valueAnchor}xAnchor(){api}, method to set the point that determines the position of the Vertical Line. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// create a line series
var lineSeries = plot.line(mapping);
lineSeries.name('CSCO');

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a vertical line annotation
controller.verticalLine({
    xAnchor: '2007-09-23'
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Vertical\_Line\_01{sample}

## Visual Settings

You can also configure the visual settings of an Vertical Line annotation:

* {api:anychart.core.annotations.VerticalLine#color}color(){api} and {api:anychart.core.annotations.VerticalLine#stroke}stroke(){api} set the color and stroke
* {api:anychart.core.annotations.VerticalLine#hoverStroke}hoverStroke(){api} configures the stroke on hover
* {api:anychart.core.annotations.VerticalLine#selectStroke}selectStroke(){api} configures the Stroke on select

In the sample below, there are two Vertical Line annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first vertical line annotation and configure its visual settings
verticalLine1 = controller.verticalLine({
    xAnchor: '2007-09-23',
    hoverStroke: "2 #FF0000",
    selectStroke: "5 #FF0000"
});

// create the second vertical line annotation
verticalLine2 = controller.verticalLine();

// set the position of the second annotation
verticalLine2.xAnchor('2005-05-22');
 
// configure the visual settings of the second annotation
verticalLine2.stroke({color: "#2196F3"}, 3, "10 2");
```

{sample}STOCK\_Drawing\_Vertical\_Line\_02{sample}