{:index 3}
# Infinite Line

## Overview

The Infinite Line annotation allows to add an infinite line to a chart.

This article explains how to add an Infinite Line and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add an Infinite Line annotation to a chart, call the {api:anychart.core.annotations.PlotController#infiniteLine}infiniteLine(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.InfiniteLine#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.InfiniteLine#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.InfiniteLine#secondXAnchor}secondXAnchor(){api}, and {api:anychart.core.annotations.InfiniteLine#secondValueAnchor}secondValueAnchor(){api} methods to set 2 points that determine the position of the infinite line. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create an Infinite Line annotation
controller.infiniteLine({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2008-04-27",
    secondValueAnchor: 26.75
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Infinite\_Line\_01{sample}

## Appearance

The [appearance settings](../../../Appearance_Settings) of an Infinite Line annotation can be configured in three states: **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.

In the sample below, there are two Infinite Line annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Infinite Line annotation and configure its visual settings
var infiniteLine1 = controller.infiniteLine({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2008-04-27",
    secondValueAnchor: 26.75,
    hovered: {stroke: "2 #ff0000"},
    selected: {stroke: "4 #ff0000"}
});

// create the second Infinite Line annotation
var infiniteLine2 = controller.infiniteLine();

// set the position of the second annotation
infiniteLine2.xAnchor("2004-06-06");
infiniteLine2.valueAnchor(23.82);
infiniteLine2.secondXAnchor("2007-09-23");
infiniteLine2.secondValueAnchor(33.13);
 
// configure the visual settings of the second annotation
infiniteLine2.normal().stroke("#006600", 1, "10 2");
infiniteLine2.hovered().stroke("#00b300", 2, "10 2");
infiniteLine2.selected().stroke("#00b300", 4, "10 2");
```

{sample}STOCK\_Drawing\_Infinite\_Line\_02{sample}