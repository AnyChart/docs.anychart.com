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

## Levels

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

## Appearance

The [appearance settings](../../Appearance_Settings) of a Fibonacci Arc annotation can be configured in three states: **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api}
* {api:anychart.core.StateSettings#trend}trend(){api}
* {api:anychart.core.StateSettings#labels}labels(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.

In the sample below, there are two Fibonacci Arc annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Fibonacci Arc annotation and configure its visual settings
var fibonacciArc1 = controller.fibonacciArc({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92,
    normal: {
        labels: {fontColor: "#FF0000"}
    },
    hovered: {
        stroke: "2 #FF0000",
        trend: "2 #0000FF",
        labels: {fontColor: "#FF0000"}
    },
    selected: {
        stroke: "5 #FF0000", 
        trend: "5 #0000FF",
        labels: {fontColor: "#FF0000"}
    }       
});

// create the second Fibonacci Arc annotation
var fibonacciArc2 = controller.fibonacciArc();

// set the position of the second annotation
fibonacciArc2.xAnchor("2004-01-11");
fibonacciArc2.valueAnchor(29.13);
fibonacciArc2.secondXAnchor("2004-08-08");
fibonacciArc2.secondValueAnchor(17.86);
 
// configure the visual settings of the second annotation
fibonacciArc2.normal().stroke("#2196F3", 3, "10 2");
fibonacciArc2.normal().labels().fontColor("#2196F3");
```

{sample}STOCK\_Drawing\_Fibonacci\_Arc\_03{sample}

To configure the visual settings of a certain level, use the {api:anychart.core.annotations.Base#normal}normal(){api}, {api:anychart.core.annotations.Base#selected}selected(){api}, and {api:anychart.core.annotations.Base#hovered}hovered(){api} methods combined with {api:anychart.core.StateSettings#stroke}stroke(){api} and a function as a parameter. In this function, get level values from the context:

```
// create a Fibonacci Arc annotation
controller.fibonacciArc({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92,
    normal: {stroke: colorLevels},
    hovered: {stroke: colorLevels},
    selected: {stroke: colorLevels}
});

function colorLevels(){
  if (this.level!==undefined) {
    switch (this.level) {
        case 0.5:
            return "red";
            break;
        case 0.618:
            return {color: "blue", dash: "2 2"};
            break;
        default:
                return "black";
    }
  }
};
```

{sample}STOCK\_Drawing\_Fibonacci\_Arc\_04{sample}

## Labels

You can change the text of Fibonacci Arc [labels](../../Common_Settings/Labels) with the help of [text formatters](../../Common_Settings/Text_Formatters).

Combine the {api:anychart.core.annotations.FibonacciArc#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with the following [tokens](../../Common_Settings/Text_Formatters#string_tokens):

* `{%level}` (shown by default)
* `{%levelValue}`

```
// create a Fibonacci Arc annotation
var fibonacciArc = controller.fibonacciArc({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92
});

// configure the annotation labels
fibonacciArc.labels().format("{%level} ({%levelValue})");
```

{sample}STOCK\_Drawing\_Fibonacci\_Arc\_05{sample}

Instead of tokens, you can also use [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions) and the following fields: *level*, *levelValue*:

```
// configure the annotation labels
fibonacciArc.labels().format(function(){
  var levelValue = this.levelValue.toFixed(1);
  switch (this.level) {
      case 1:
          return this.level + " (" + levelValue + ")";
          break;
      default:
              return this.level;
  }
});
```

{sample}STOCK\_Drawing\_Fibonacci\_Arc\_06{sample}