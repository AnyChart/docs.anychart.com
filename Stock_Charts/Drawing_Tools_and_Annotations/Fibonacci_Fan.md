{:index 3}
# Fibonacci Fan

## Overview

The Fibonacci Fan annotation allows you to add a Fibonacci fan to a chart.

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

## Levels and Time Levels

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

## Appearance

The [appearance settings](../../Appearance_Settings) of a Fibonacci Fan annotation can be configured in three [states](../../../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api}
* {api:anychart.core.StateSettings#trend}trend(){api}
* {api:anychart.core.StateSettings#grid}grid(){api}
* {api:anychart.core.StateSettings#labels}labels(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.

In the sample below, there are two Fibonacci Fan annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
var fibonacciFan1 = controller.fibonacciFan({
    xAnchor: "2007-01-07",
    valueAnchor: 28.92,
    secondXAnchor: "2009-03-01",
    secondValueAnchor: 14.18,
    normal: {
        labels: {fontColor: "#ff0000"},
        grid: null
    },
    hovered: {
        stroke: "#ff0000",
        trend: "#0000ff",
        labels: {fontColor: "#ff0000"}
    },
    selected: {
        stroke: "#ff0000",
        trend: "#0000ff",
        grid: "#a9a9a9",
        labels: {fontColor: "#ff0000"} 
    }       
});

// create the second Fibonacci Fan annotation
var fibonacciFan2 = controller.fibonacciFan();

// set the position of the second annotation
fibonacciFan2.xAnchor("2006-01-29");
fibonacciFan2.valueAnchor(18.2);
fibonacciFan2.secondXAnchor("2004-01-11");
fibonacciFan2.secondValueAnchor(29.13);
 
// configure the visual settings of the second annotation
fibonacciFan2.normal().labels().fontColor("#00b300");
fibonacciFan2.normal().grid(null);
fibonacciFan2.normal().stroke("#006600", 1, "10 2");
fibonacciFan2.hovered().stroke("#00b300", 1, "10 2");
fibonacciFan2.selected().stroke("#00b300", 1, "10 2");
fibonacciFan2.selected().grid("#a9a9a9");
```

{sample}STOCK\_Drawing\_Fibonacci\_Fan\_03{sample}

To configure the visual settings of a certain level or time level, use the {api:anychart.core.annotations.Base#normal}normal(){api}, {api:anychart.core.annotations.Base#selected}selected(){api}, and {api:anychart.core.annotations.Base#hovered}hovered(){api} methods combined with {api:anychart.core.StateSettings#stroke}stroke(){api} and a function as a parameter. In this function, get level values from the context:

```
// create a Fibonacci Fan annotation
controller.fibonacciFan({
    xAnchor: "2007-01-07",
    valueAnchor: 28.92,
    secondXAnchor: "2009-03-01",
    secondValueAnchor: 14.18,
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
  else {
    switch (this.timeLevel) {
        case 0.618:
            return "red";
            break;
        case 0.5:
            return {color: "blue", dash: "2 2"};
            break;
        default:
                return "black";
    }
  }
};
```

{sample}STOCK\_Drawing\_Fibonacci\_Fan\_04{sample}

## Labels

You can change the text of Fibonacci Fan [labels](../../Common_Settings/Labels) with the help of [text formatters](../../Common_Settings/Text_Formatters).

Combine the {api:anychart.core.annotations.FibonacciFan#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with the following [tokens](../../Common_Settings/Text_Formatters#string_tokens):

* `{%level}` (shown by default)
* `{%levelValue}`

```
// configure the annotation labels
fibonacciFan.labels().format("{%level} ({%levelValue})");
```

{sample}STOCK\_Drawing\_Fibonacci\_Fan\_05{sample}

Instead of tokens, you can also use [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `level` (shown by default)
* `levelValue`

```
// create a Fibonacci Fan annotation
var fibonacciFan = controller.fibonacciFan({
    xAnchor: "2007-01-07",
    valueAnchor: 28.92,
    secondXAnchor: "2009-03-01",
    secondValueAnchor: 14.18
});

// configure the annotation labels
fibonacciFan.labels().format(function() {
  var levelValue = this.levelValue.toFixed(1);
  if (this.level!==undefined) {
    return this.level + " (" + levelValue + ")";
  }
  else {
    return this.timeLevel;
  }
});
```

{sample}STOCK\_Drawing\_Fibonacci\_Fan\_06{sample}