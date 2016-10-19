{:index 3}
#Ellipse

* [Overview](#overview)
* [Basic settings](#basic_settings)
* [Visual Settings](#visual_settings)

## Overview

The Ellipse annotation allows to add an ellipse or a circle to a chart.

This article explains how to add an Ellipse and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deseializing)

You can find other settings (which work with all annotation types), such as configuring hover gap and binding to axes, in the [Drawing Tools and Annotations: General Settings](General_Settings) article. To learn how to provide users with the opportunity to draw annotations, see [Drawing Tools and Annotations: Drawing](Drawing), and to learn about serializing and deserializing the settings, see [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deseializing).


## Basic Settings

To add an Ellipse annotation to a chart, refer to the {api:anychart.core.annotations.PlotController}annotations(){api} object and call the {api:anychart.core.annotations.Ellipse}ellipse(){api} method.

Next, use the {api:anychart.core.annotations.Ellipse#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.Ellipse#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.Ellipse#secondXAnchor}secondXAnchor(){api}, and {api:anychart.core.annotations.Ellipse#secondValueAnchor}secondValueAnchor(){api} methods to set 4 points that determine the position of the ellipse. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// create a line series
var lineSeries = plot.line(mapping);
lineSeries.name('CSCO');

// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an ellipse annotation
controller.ellipse({
    xAnchor: '2006-11-20',
    valueAnchor: 25.92,
    secondXAnchor: '2008-08-10',
    secondValueAnchor: 24.91,
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Ellipse\_01{sample}

## Visual Settings

You can also configure the visual settings of an Ellipse annotation:

* {api:anychart.core.annotations.Ellipse#color}color(){api}, {api:anychart.core.annotations.Ellipse#fill}fill(){api}, {api:anychart.core.annotations.Ellipse#hatchFill}hatchFill(){api}, {api:anychart.core.annotations.Ellipse#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.annotations.Ellipse#hoverFill}hoverFill(){api}, {api:anychart.core.annotations.Ellipse#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.annotations.Ellipse#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.annotations.Ellipse#selectFill}selectFill(){api}, {api:anychart.core.annotations.Ellipse#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.annotations.Ellipse#selectStroke}selectStroke(){api} configure the visual settings on select

In the sample below, there is an Ellipse annotation with some of the visual settings configured. Like in the previous sample, object notation is used:

```
// an auxiliary variable for working with annotations
var controller = plot.annotations();

// create an ellipse annotation and configure its visual settings
controller.ellipse({
    xAnchor: '2006-11-20',
    valueAnchor: 25.92,
    secondXAnchor: '2007-02-24',
    secondValueAnchor: 31.92,
    hoverFill: "#398CAE 0.3",
    hoverStroke: "2 #FF0000",
    selectFill: "#398CAE 0.3",
    selectStroke: "5 #FF0000"
});
```

{sample}STOCK\_Drawing\_Ellipse\_02{sample}

