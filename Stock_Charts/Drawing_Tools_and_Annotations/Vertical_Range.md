{:index 3}
# Vertical Range

## Overview

The Vertical Range annotation allows you to add a vertical channel to a chart.

This article explains how to add a Vertical Range/Channel and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Vertical Channel annotation to a chart, call the {api:anychart.core.annotations.PlotController#verticalRange}verticalRange(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.VerticalRange#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.VerticalRange#secondXAnchor}secondXAnchor(){api} methods to set 2 points that determine the position of the vertical channel. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Vertical Channel annotation
controller.verticalRange({
    xAnchor: "2007-01-07",
    secondXAnchor: "2007-09-23",
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Vertical\_Channel\_01{sample}

## Appearance

The [appearance settings](../../../Appearance_Settings) of a Vertical Channel annotation can be configured in three [states](../../../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#fill}fill(){api}
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api}
* {api:anychart.core.StateSettings#stroke}stroke(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.
In the sample below, there are two Vertical Channel annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Vertical Channel annotation and configure its visual settings
var verticalChannel1 = controller.verticalRange({
    xAnchor: "2007-01-07",
    secondXAnchor: "2007-09-23",
    hovered: {
        fill: "#398cae 0.3",
        stroke: "2 #ff0000"
    },
    selected: {
        fill: "#398cae 0.3",
        hatchFill: "forward-diagonal",
        stroke: "4 #ff0000"
    }
});

// create the second Vertical Channel annotation
var verticalChannel2 = controller.verticalRange();

// set the position of the second annotation
verticalChannel2.xAnchor("2004-01-11");
verticalChannel2.secondXAnchor("2005-10-30");

// configure the visual settings of the second annotation
verticalChannel2.normal().fill("none");
verticalChannel2.normal().stroke("#006600", 1, "10 2");
verticalChannel2.hovered().stroke("#00b300", 2, "10 2");
verticalChannel2.selected().stroke("#00b300", 4, "10 2");  
```

{sample}STOCK\_Drawing\_Vertical\_Channel\_02{sample}