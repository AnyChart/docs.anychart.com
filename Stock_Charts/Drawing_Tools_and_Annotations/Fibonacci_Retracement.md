{:index 3}
#Fibonacci Retracement

* [Overview](#overview)
* [Basic settings](#basic_settings)
* [Visual Settings](#visual_settings)

## Overview

The Fibonacci Retracement annotation allows to add a Fibonacci retracement to a chart.

This article explains how to add a Fibonacci Retracement and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Fibonacci Retracement annotation to a chart, call the {api:anychart.core.annotations.PlotController#fibonacciRetracement}fibonacciRetracement(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.FibonacciRetracement#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.FibonacciRetracement#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.FibonacciRetracement#secondXAnchor}secondXAnchor(){api}, and {api:anychart.core.annotations.FibonacciRetracement#secondValueAnchor}secondValueAnchor(){api} methods to set 2 points that determine the position of the Fibonacci Retracement. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Fibonacci Retracement annotation
controller.fibonacciRetracement({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Fibonacci\_Retracement\_01{sample}

## Visual Settings

You can also configure the visual settings of a Fibonacci Retracement annotation:

* {api:anychart.core.annotations.FibonacciRetracement#color}color(){api}, {api:anychart.core.annotations.FibonacciRetracement#stroke}stroke(){api}, and {api:anychart.core.annotations.FibonacciRetracement#trend}trend(){api} set the color and stroke of the annotation and its trend
* {api:anychart.core.annotations.FibonacciRetracement#hoverStroke}hoverStroke(){api} and {api:anychart.core.annotations.FibonacciRetracement#hoverTrend}hoverTrend(){api} configure the visual settings on hover
* {api:anychart.core.annotations.FibonacciRetracement#selectStroke}selectStroke(){api} and {api:anychart.core.annotations.FibonacciRetracement#selectTrend}selectTrend(){api} configure the visual settings on select

In the sample below, there are two Fibonacci Retracement annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Fibonacci Retracement annotation and configure its visual settings
fibonacciRetracement1 = controller.fibonacciRetracement({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92,
    hoverTrend: "2 #0000FF",
    hoverStroke: "2 #FF0000",
    selectTrend: "5 #0000FF",
    selectStroke: "5 #FF0000"        
});

// create the second Fibonacci Retracement annotation
fibonacciRetracement2 = controller.fibonacciRetracement();

// set the position of the second annotation
fibonacciRetracement2.xAnchor("2004-01-11");
fibonacciRetracement2.valueAnchor(29.13);
fibonacciRetracement2.secondXAnchor("2004-08-08");
fibonacciRetracement2.secondValueAnchor(17.86);
 
// configure the visual settings of the second annotation
fibonacciRetracement2.stroke("#2196F3", 3, "10 2");
```

{sample}STOCK\_Drawing\_Fibonacci\_Retracement\_02{sample}