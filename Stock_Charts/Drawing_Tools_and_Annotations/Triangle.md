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

## Visual Settings

You can also configure the visual settings of a Triangle annotation:

* {api:anychart.core.annotations.Triangle#color}color(){api}, {api:anychart.core.annotations.Triangle#fill}fill(){api}, {api:anychart.core.annotations.Triangle#hatchFill}hatchFill(){api}, {api:anychart.core.annotations.Triangle#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.annotations.Triangle#hoverFill}hoverFill(){api}, {api:anychart.core.annotations.Triangle#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.annotations.Triangle#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.annotations.Triangle#selectFill}selectFill(){api}, {api:anychart.core.annotations.Triangle#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.annotations.Triangle#selectStroke}selectStroke(){api} configure the visual settings on select

In the sample below, there are two Triangle annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Triangle annotation and configure its visual settings
triangle1 = controller.triangle({
    xAnchor: "2006-03-14",
    valueAnchor: 25.14,
    secondXAnchor: "2007-02-25",
    secondValueAnchor: 34.5,
    thirdXAnchor: "2007-02-04",
    thirdValueAnchor: 20.65,
    hoverFill: "#398CAE 0.3",
    hoverStroke: "2 #FF0000",
    selectFill: "#398CAE 0.3",
    selectHatchFill: "brick",
    selectStroke: "5 #FF0000"
});

// create the second Triangle annotation
triangle2 = controller.triangle();

// set the position of the second annotation
triangle2.xAnchor("2004-09-15");
triangle2.valueAnchor(15);
triangle2.secondXAnchor("2004-12-26");
triangle2.secondValueAnchor(23);
triangle2.thirdXAnchor("2005-10-02");
triangle2.thirdValueAnchor(15);

// configure the visual settings of the second annotation
triangle2.stroke("#2196F3", 3, "10 2");
triangle2.fill(null);
```

{sample}STOCK\_Drawing\_Triangle\_02{sample}