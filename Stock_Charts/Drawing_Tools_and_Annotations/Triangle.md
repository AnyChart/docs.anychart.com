{:index 3}
# Triangle

## Overview

The Triangle annotation allows to add a triangle to a chart.

This article explains how to add a Triangle and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Triangle annotation to a chart, call the {api:anychart.core.annotations.PlotController#triangle}triangle(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.Triangle#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.Triangle#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.Triangle#secondXAnchor}secondXAnchor(){api}, {api:anychart.core.annotations.Triangle#secondValueAnchor}secondValueAnchor(){api}, {api:anychart.core.annotations.Triangle#secondXAnchor}thirdXAnchor(){api} and {api:anychart.core.annotations.Triangle#secondValueAnchor}thirdValueAnchor(){api} methods to set 3 points that determine the position of the triangle. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Triangle annotation
controller.triangle({
    xAnchor: "2006-03-14",
    valueAnchor: 25.14,
    secondXAnchor: "2007-02-25",
    secondValueAnchor: 34.5,
    thirdXAnchor: "2007-02-04",
    thirdValueAnchor: 20.65
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Triangle\_01{sample}

## Appearance

The [appearance settings](../../../Appearance_Settings) of a Triangle annotation can be configured in three states: **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#fill}fill(){api}
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api}
* {api:anychart.core.StateSettings#stroke}stroke(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.

In the sample below, there are two Triangle annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Triangle annotation and configure its visual settings
var triangle1 = controller.triangle({
    xAnchor: "2006-03-14",
    valueAnchor: 25.14,
    secondXAnchor: "2007-02-25",
    secondValueAnchor: 34.5,
    thirdXAnchor: "2007-02-04",
    thirdValueAnchor: 20.65,
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

// create the second Triangle annotation
var triangle2 = controller.triangle();

// set the position of the second annotation
triangle2.xAnchor("2004-09-15");
triangle2.valueAnchor(15);
triangle2.secondXAnchor("2004-12-26");
triangle2.secondValueAnchor(23);
triangle2.thirdXAnchor("2005-10-02");
triangle2.thirdValueAnchor(15);

// configure the visual settings of the second annotation
riangle2.normal().fill(null);
triangle2.normal().stroke("#006600", 1, "10 2");
triangle2.hovered().stroke("#00b300", 2, "10 2");
triangle2.selected().stroke("#00b300", 4, "10 2");
```

{sample}STOCK\_Drawing\_Triangle\_02{sample}