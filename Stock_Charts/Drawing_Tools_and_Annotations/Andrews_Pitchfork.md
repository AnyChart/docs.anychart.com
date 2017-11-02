{:index 3}
# Andrews' Pitchfork

## Overview

The Andrews' Pitchfork annotation allows to add an Andrews' pitchfork (an analysis tool developed by Alan Andrews) to a chart.

This article explains how to add an Andrews' Pitchfork and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add an Andrews' Pitchfork annotation to a chart, call the {api:anychart.core.annotations.PlotController#andrewsPitchfork}andrewsPitchfork(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.AndrewsPitchfork#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.AndrewsPitchfork#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.AndrewsPitchfork#secondXAnchor}secondXAnchor(){api}, {api:anychart.core.annotations.AndrewsPitchfork#secondValueAnchor}secondValueAnchor(){api}, {api:anychart.core.annotations.AndrewsPitchfork#secondXAnchor}thirdXAnchor(){api} and {api:anychart.core.annotations.AndrewsPitchfork#secondValueAnchor}thirdValueAnchor(){api} methods to set 3 points that determine the position of the Andrews' pitchfork. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create an Andrews' Pitchfork annotation
controller.andrewsPitchfork({
    xAnchor: "2006-10-15",
    valueAnchor: 24.55,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92,
    thirdXAnchor: "2007-05-20",
    thirdValueAnchor: 25.52
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Andrews\_Pitchfork\_01{sample}

## Appearance

The [appearance settings](../../../Appearance_Settings) of an Andrews' Pitchfork annotation can be configured in three [states](../../../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#fill}fill(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.

In the sample below, there are two Andrews' Pitchfork annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Andrews' Pitchfork annotation and configure its visual settings
var andrewsPitchfork1 = controller.andrewsPitchfork({
    xAnchor: "2006-10-15",
    valueAnchor: 24.55,
    secondXAnchor: "2007-01-07",
    secondValueAnchor: 28.92,
    thirdXAnchor: "2007-05-20",
    thirdValueAnchor: 25.52,
    hovered: {stroke: "2 #ff0000"},
    selected: {stroke: "4 #ff0000"}
});

// create the second Andrews' Pitchfork annotation
var andrewsPitchfork2 = controller.andrewsPitchfork();

// set the position of the second annotation
andrewsPitchfork2.xAnchor("2007-12-16");
andrewsPitchfork2.valueAnchor(28.60);
andrewsPitchfork2.secondXAnchor("2008-08-10");
andrewsPitchfork2.secondValueAnchor(24.91);
andrewsPitchfork2.thirdXAnchor("2008-02-10");
andrewsPitchfork2.thirdValueAnchor(23.30);

// configure the visual settings of the second annotation
andrewsPitchfork2.normal().stroke("#006600", 1, "10 2");
andrewsPitchfork2.hovered().stroke("#00b300", 2, "10 2");
andrewsPitchfork2.selected().stroke("#00b300", 4, "10 2");
```

{sample}STOCK\_Drawing\_Andrews\_Pitchfork\_02{sample}