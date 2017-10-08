{:index 3}
# Vertical Line

## Overview

The Vertical Line annotation allows to add a vertical line to a chart.

This article explains how to add a Vertical Line and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Vertical Line annotation to a chart, call the {api:anychart.core.annotations.PlotController#verticalLine}verticalLine(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.VerticalLine#valueAnchor}xAnchor(){api}, method to set the timestamp that determines the position of the vertical line. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Vertical Line annotation
controller.verticalLine({
    xAnchor: "2007-09-23"
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Vertical\_Line\_01{sample}

## Appearance

The [appearance settings](../../../Appearance_Settings) of a Vertical Line annotation can be configured in three states: **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.

In the sample below, there are two Vertical Line annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Vertical Line annotation and configure its visual settings
verticalLine1 = controller.verticalLine({
    xAnchor: "2007-09-23",
    hovered: {stroke: "2 #FF0000"},
    selected: {stroke: "5 #FF0000"}
});

// create the second Vertical Line annotation
verticalLine2 = controller.verticalLine();

// set the position of the second annotation
verticalLine2.xAnchor("2005-05-22");
 
// configure the visual settings of the second annotation
verticalLine2.normal().stroke("#2196F3", 3, "10 2");
```

{sample}STOCK\_Drawing\_Vertical\_Line\_02{sample}