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

## Appearance

The [appearance settings](../../../Appearance_Settings) of a Ray annotation can be configured in three states: **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.

In the sample below, there are two Ray annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Ray annotation and configure its visual settings
var ray1 = controller.ray({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2008-04-27",
    secondValueAnchor: 26.75,
    hovered: {stroke: "2 #ff0000"},
    selected: {stroke: "4 #ff0000"}
});

// create the second Ray annotation
var ray2 = controller.ray();

// set the position of the second annotation
ray2.xAnchor("2004-06-06");
ray2.valueAnchor(23.82);
ray2.secondXAnchor("2007-09-23");
ray2.secondValueAnchor(33.13);
 
// configure the visual settings of the second annotation
ray2.normal().stroke("#006600", 1, "10 2");
ray2.hovered().stroke("#00b300", 2, "10 2");
ray2.selected().stroke("#00b300", 4, "10 2");
```

{sample}STOCK\_Drawing\_Ray\_02{sample}