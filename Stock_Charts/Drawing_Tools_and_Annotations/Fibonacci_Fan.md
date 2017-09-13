{:index 3}
# Fibonacci Fan

## Overview

The Fibonacci Fan annotation allows to add a Fibonacci fan to a chart.

This article explains how to add a Fibonacci Fan and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Fibonacci Fan annotation to a chart, call the {api:anychart.core.annotations.PlotController#fibonacciFan}fibonacciFan(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.FibonacciFan#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.FibonacciFan#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.FibonacciFan#secondXAnchor}secondXAnchor(){api}, and {api:anychart.core.annotations.FibonacciFan#secondValueAnchor}secondValueAnchor(){api} methods to set 2 points that determine the position of the Fibonacci fan. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Fibonacci Fan annotation
controller.fibonacciFan({
    xAnchor: "2007-01-07",
    valueAnchor: 28.92,
    secondXAnchor: "2009-03-01",
    secondValueAnchor: 14.18
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Fibonacci\_Fan\_01{sample}

## Configuring Levels and Time Levels

You can set the levels and time levels of a Fibonacci Fan annotation by using the {api:anychart.core.annotations.FibonacciFan#levels}levels(){api} and {api:anychart.core.annotations.FibonacciFan#timeLevels}timeLevels(){api} methods and passing arrays of values as parameters:

```
// create a Fibonacci Fan annotation
controller.fibonacciFan({
    xAnchor: "2007-01-07",
    valueAnchor: 28.92,
    secondXAnchor: "2009-03-01",
    secondValueAnchor: 14.18,
    levels: [0, 0.2, 0.4, 0.7, 1],
    timeLevels: [0, 0.2, 0.4, 0.7, 1]
});
```

{sample}STOCK\_Drawing\_Fibonacci\_Fan\_02{sample}

## Visual Settings

You can also configure the visual settings of a Fibonacci Fan annotation:

* {api:anychart.core.annotations.FibonacciFan#color}color(){api}, {api:anychart.core.annotations.FibonacciFan#stroke}stroke(){api}, {api:anychart.core.annotations.FibonacciFan#trend}trend(){api}, and {api:anychart.core.annotations.FibonacciFan#grid}grid(){api} set the color and stroke of the annotation, its trend, and grid
* {api:anychart.core.annotations.FibonacciFan#hoverStroke}hoverStroke(){api}, {api:anychart.core.annotations.FibonacciFan#hoverTrend}hoverTrend(){api}, and {api:anychart.core.annotations.FibonacciFan#hoverGrid}hoverGrid(){api} configure the visual settings on hover
* {api:anychart.core.annotations.FibonacciFan#selectStroke}selectStroke(){api}, {api:anychart.core.annotations.FibonacciFan#selectTrend}selectTrend(){api} and {api:anychart.core.annotations.FibonacciFan#selectGrid}selectGrid(){api} configure the visual settings on select

In the sample below, there are two Fibonacci Fan annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Fibonacci Fan annotation and configure its visual settings
    fibonacciFan1 = controller.fibonacciFan({
    xAnchor: "2007-01-07",
    valueAnchor: 28.92,
    secondXAnchor: "2009-03-01",
    secondValueAnchor: 14.18,
    hoverTrend: "#0000FF",
    hoverGrid: "#0000FF",
    hoverStroke: "#FF0000",
    selectTrend: "2 #0000FF",
    selectStroke: "2 #FF0000"     
});

// create the second Fibonacci Fan annotation
fibonacciFan2 = controller.fibonacciFan();

// set the position of the second annotation
fibonacciFan2.xAnchor("2006-07-30");
fibonacciFan2.valueAnchor(17.24);
fibonacciFan2.secondXAnchor("2004-01-11");
fibonacciFan2.secondValueAnchor(29.13);
 
// configure the visual settings of the second annotation
fibonacciFan2.stroke("#2196F3", 2, "10 2");
```

{sample}STOCK\_Drawing\_Fibonacci\_Fan\_03{sample}

To configure the visual settings of a certain level or time level, use the {api:anychart.core.annotations.FibonacciFan#stroke}stroke(){api},  {api:anychart.core.annotations.FibonacciFan#hoverStroke}hoverStroke(){api}, and {api:anychart.core.annotations.FibonacciFan#selectStroke}selectStroke(){api} methods with a function as a parameter. In this function, get level and time level values from the context:

```
// create a Fibonacci Fan annotation
controller.fibonacciFan({
    xAnchor: "2007-01-07",
    valueAnchor: 28.92,
    secondXAnchor: "2009-03-01",
    secondValueAnchor: 14.18,
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
  } else {
    switch (this.timeLevel) {
        case 0.618:
            return "Red";
            break;
        case 0.5:
            return {color: "Blue", dash: "2 2"};
            break;
        default:
                return "Black";
     }
    }
};
```

{sample}STOCK\_Drawing\_Fibonacci\_Fan\_04{sample}