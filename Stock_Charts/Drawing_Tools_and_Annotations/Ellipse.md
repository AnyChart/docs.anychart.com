{:index 3}
# Ellipse

## Overview

The Ellipse annotation allows to add an ellipse or a circle to a chart.

This article explains how to add an Ellipse and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add an Ellipse annotation to a chart, call the {api:anychart.core.annotations.PlotController#ellipse}ellipse(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.Ellipse#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.Ellipse#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.Ellipse#secondXAnchor}secondXAnchor(){api}, and {api:anychart.core.annotations.Ellipse#secondValueAnchor}secondValueAnchor(){api} methods to set 2 points that determine the position of the ellipse. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create an Ellipse annotation
controller.ellipse({
    xAnchor: "2006-11-20",
    valueAnchor: 25.92,
    secondXAnchor: "2008-08-10",
    secondValueAnchor: 24.91,
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Ellipse\_01{sample}

## Appearance

The [appearance settings](../Appearance_Settings) of an Ellipse annotation can be configured in three states: **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with...

You can also use object notation to specify the settings.

In the sample below, there are two Ellipse annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Ellipse annotation and configure its visual settings
ellipse1 = controller.ellipse({
    xAnchor: "2006-11-20",
    valueAnchor: 25.92,
    secondXAnchor: "2007-02-24",
    secondValueAnchor: 31.92,
    hovered: {
        fill: "#398CAE 0.3",
        stroke: "2 #FF0000"
    },
    selected: {
        fill: "#398CAE 0.3",
        hatchFill: "brick",
        stroke: "5 #FF0000"
    }
});

// create the second Ellipse annotation
ellipse2 = controller.ellipse();

// set the position of the second annotation
ellipse2.xAnchor("2005-11-20");
ellipse2.valueAnchor(15.55);
ellipse2.secondXAnchor("2007-02-25");
ellipse2.secondValueAnchor(23.30);
 
// configure the visual settings of the second annotation
ellipse2.stroke("#2196F3", 3, "10 2");
ellipse2.fill(null);
```

{sample}STOCK\_Drawing\_Ellipse\_02{sample}