{:index 3}
# Fibonacci Arc

## Overview

The Fibonacci Arc annotation allows to add a Fibonacci arc to a chart.

This article explains how to add a Fibonacci Arc and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Fibonacci Arc annotation to a chart, call the {api:anychart.core.annotations.PlotController#fibonacciArc}fibonacciArc(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.FibonacciArc#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.FibonacciArc#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.FibonacciArc#secondXAnchor}secondXAnchor(){api}, and {api:anychart.core.annotations.FibonacciArc#secondValueAnchor}secondValueAnchor(){api} methods to set 2 points that determine the position of the Fibonacci arc. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Fibonacci Arc annotation
controller.fibonacciArc({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Fibonacci\_Arc\_01{sample}

## Configuring Levels

You can set the levels of a Fibonacci Arc annotation by using the {api:anychart.core.annotations.FibonacciArc#levels}levels(){api} method and passing an array of values as a parameter:

```
// create a Fibonacci Arc annotation
controller.fibonacciArc({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92,
    levels: [0, 0.2, 0.4, 0.7, 1]
});
```

{sample}STOCK\_Drawing\_Fibonacci\_Arc\_02{sample}

## Visual Settings

You can also configure the visual settings of a Fibonacci Arc annotation:

* {api:anychart.core.annotations.FibonacciArc#color}color(){api}, {api:anychart.core.annotations.FibonacciArc#stroke}stroke(){api}, and {api:anychart.core.annotations.FibonacciArc#trend}trend(){api} set the color and stroke of the annotation and its trend
* {api:anychart.core.annotations.FibonacciArc#hoverStroke}hoverStroke(){api} and {api:anychart.core.annotations.FibonacciArc#hoverTrend}hoverTrend(){api} configure the visual settings on hover
* {api:anychart.core.annotations.FibonacciArc#selectStroke}selectStroke(){api} and {api:anychart.core.annotations.FibonacciArc#selectTrend}selectTrend(){api} configure the visual settings on select

In the sample below, there are two Fibonacci Arc annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Fibonacci Arc annotation and configure its visual settings
fibonacciArc1 = controller.fibonacciArc({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92,
    hoverTrend: "2 #0000FF",
    hoverStroke: "2 #FF0000",
    selectTrend: "5 #0000FF",
    selectStroke: "5 #FF0000"        
});

// create the second Fibonacci Arc annotation
fibonacciArc2 = controller.fibonacciArc();

// set the position of the second annotation
fibonacciArc2.xAnchor("2004-01-11");
fibonacciArc2.valueAnchor(29.13);
fibonacciArc2.secondXAnchor("2004-08-08");
fibonacciArc2.secondValueAnchor(17.86);
 
// configure the visual settings of the second annotation
fibonacciArc2.stroke("#2196F3", 3, "10 2");
```

{sample}STOCK\_Drawing\_Fibonacci\_Arc\_03{sample}

To configure the visual settings of a certain level, use the {api:anychart.core.annotations.FibonacciArc#stroke}stroke(){api},  {api:anychart.core.annotations.FibonacciArc#hoverStroke}hoverStroke(){api}, and {api:anychart.core.annotations.FibonacciArc#selectStroke}selectStroke(){api} methods with a function as a parameter. In this function, get level values from the context:

```
// create a Fibonacci Arc annotation
controller.fibonacciArc({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92,
    stroke: colorLevels,
    hoverStroke: colorLevels,
    selectStroke: colorLevels
});

function colorLevels(){
  if (this.level!==undefined)
  {
    switch (this.level) {
        case 0.5:
            return "Red";
            break;
        case 0.618:
            return {color: "Blue", dash: "2 2"};
            break;
        default:
                return "Black"
        }
  }
};
```

{sample}STOCK\_Drawing\_Fibonacci\_Arc\_04{sample}