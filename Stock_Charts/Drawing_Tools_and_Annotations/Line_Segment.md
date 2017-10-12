{:index 3}
# Line Segment

## Overview

The Line annotation allows to add a line segment to a chart.

This article explains how to add a Line and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Line annotation to a chart, call the {api:anychart.core.annotations.PlotController#line}line(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.Line#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.Line#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.Line#secondXAnchor}secondXAnchor(){api}, and {api:anychart.core.annotations.Line#secondValueAnchor}secondValueAnchor(){api} methods to set 2 points that determine the position of the line segment. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Line annotation
controller.line({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2008-04-06",
    secondValueAnchor: 23.38
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Line\_01{sample}

## Appearance

The [appearance settings](../../../Appearance_Settings) of a Line annotation can be configured in three states: **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.

In the sample below, there are two Line annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Line annotation and configure its visual settings
line1 = controller.line({
    xAnchor: "2006-07-30",
    valueAnchor: 17.24,
    secondXAnchor: "2008-04-06",
    secondValueAnchor: 23.38,
    hovered: {stroke: "2 #FF0000"},
    selected: {stroke: "5 #FF0000"}
});

// create the second Line annotation
line2 = controller.line();

// set the position of the second annotation
line2.xAnchor("2004-06-06");
line2.valueAnchor(23.82);
line2.secondXAnchor("2007-01-07");
line2.secondValueAnchor(28.92);
 
// configure the visual settings of the second annotation
line2.normal().stroke("#2196F3", 3, "10 2");
```

{sample}STOCK\_Drawing\_Line\_02{sample}