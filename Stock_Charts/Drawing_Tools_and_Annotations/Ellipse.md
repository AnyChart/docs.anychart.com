{:index 3}
#Ellipse

* [Overview](#overview)
* [Basic settings](#basic_settings)
* [Visual Settings](#visual_settings)

## Overview

The Ellipse annotation allows to add an ellipse or a circle to a chart.

[Drawing Tools and Annotations: General Settings](General_Settings)
[Drawing Tools and Annotations: Drawing](Drawing)
[Drawing Tools and Annotations: Seiralizing Deserializing](Serializing and Deserializing)


## Basic Settings

To add an Ellipse annotation to a chart, refer to the {api:anychart.core.annotations.PlotController}annotations(){api} object and call the {api:anychart.core.annotations.Ellipse}ellipse(){api} method.

The next step is to set 4 points that determine the position of the ellipse: use the {api:anychart.core.annotations.Ellipse#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.Ellipse#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.Ellipse#secondXAnchor}secondXAnchor(), and {api:anychart.core.annotations.Ellipse#secondValueAnchor}secondValueAnchor(){api} methods. Usually, the most convenient way to do this is object notation (see the [Serializing and Deserializing](Serializing_Deserializing) article):

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

* The {api:anychart.core.annotations.Ellipse#color}color(){api}, {api:anychart.core.annotations.Ellipse#fill}fill(){api}, {api:anychart.core.annotations.Ellipse#hatchFill}hatchFill(){api}, and {api:anychart.core.annotations.Ellipse#stroke}stroke(){api} methods set the color, fill, hatch fill, and stroke.
* The {api:anychart.core.annotations.Ellipse#hoverFill}hoverFill(){api}, {api:anychart.core.annotations.Ellipse#hoverHatchFill}hoverHatchFill(){api}, and {api:anychart.core.annotations.Ellipse#hoverStroke}hoverStroke(){api} methods configure the visual settings on hover.
* The {api:anychart.core.annotations.Ellipse#selectFill}selectFill(){api}, {api:anychart.core.annotations.Ellipse#selectHatchFill}selectHatchFill(){api}, and {api:anychart.core.annotations.Ellipse#selectStroke}selectStroke(){api} methods configure the visual settings on select.

In the sample below, there is an Ellipse annotation with some of the visual settings configured. Like in the previous one, object notation is used:

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

