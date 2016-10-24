{:index 3}
#Andrews' Pitchfork

* [Overview](#overview)
* [Basic settings](#basic_settings)
* [Visual Settings](#visual_settings)

## Overview

The Andrews' Pitchfork annotation allows to add an Andrews' pitchfork (an analysis tool developed by Alan Andrews) to a chart.

This article explains how to add an Andrews' Pitchfork and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add an Andrews' Pitchfork annotation to a chart, call the {api:anychart.core.annotations.PlotController#andrewsPitchfork}andrewsPitchfork(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.AndrewsPitchfork#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.AndrewsPitchfork#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.AndrewsPitchfork#secondXAnchor}secondXAnchor(){api}, {api:anychart.core.annotations.AndrewsPitchfork#secondValueAnchor}secondValueAnchor(){api}, {api:anychart.core.annotations.AndrewsPitchfork#secondXAnchor}thirdXAnchor(){api} and {api:anychart.core.annotations.AndrewsPitchfork#secondValueAnchor}thirdValueAnchor(){api} methods to set 3 points that determine the position of the andrewsPitchfork. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create an Andrews' pitchfork annotation
controller.andrewsPitchfork({
    xAnchor: '2006-10-15',
    valueAnchor: 24.55,
    secondXAnchor: '2007-01-07',
    secondValueAnchor: 28.92,
    thirdXAnchor: '2007-05-20',
    thirdValueAnchor: 25.52
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Andrews\_Pitchfork\_01{sample}

## Visual Settings

You can also configure the visual settings of an Andrews' Pitchfork annotation:

* {api:anychart.core.annotations.AndrewsPitchfork#color}color(){api} and {api:anychart.core.annotations.AndrewsPitchfork#stroke}stroke(){api} set the color and stroke
* {api:anychart.core.annotations.AndrewsPitchfork#hoverStroke}hoverStroke(){api} configures the stroke on hover
* {api:anychart.core.annotations.AndrewsPitchfork#selectStroke}selectStroke(){api} configures the stroke on select

In the sample below, there are two Andrews' Pitchfork annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Andrews' pitchfork annotation and configure its visual settings
andrewsPitchfork1 = controller.andrewsPitchfork({
    xAnchor: '2006-10-15',
    valueAnchor: 24.55,
    secondXAnchor: '2007-01-07',
    secondValueAnchor: 28.92,
    thirdXAnchor: '2007-05-20',
    thirdValueAnchor: 25.52,
    hoverStroke: "2 #FF0000",
    selectStroke: "5 #FF0000"
    });

// create the second Andrews' pitchfork annotation
andrewsPitchfork2 = controller.andrewsPitchfork();

// set the position of the second annotation
andrewsPitchfork2.xAnchor('2007-12-16');
andrewsPitchfork2.valueAnchor(28.60);
andrewsPitchfork2.secondXAnchor('2008-08-10');
andrewsPitchfork2.secondValueAnchor(24.91);
andrewsPitchfork2.thirdXAnchor('2008-02-10');
andrewsPitchfork2.thirdValueAnchor(23.30);

// configure the visual settings of the second annotation
andrewsPitchfork2.stroke("#2196F3", 3, "10 2");
```

{sample}STOCK\_Drawing\_Andrews\_Pitchfork\_02{sample}