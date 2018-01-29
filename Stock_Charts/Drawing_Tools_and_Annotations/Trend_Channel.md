{:index 3}
# Trend Channel

## Overview

The Trend Channel annotation allows you to add a trend channel to a chart.

This article explains how to add a Trend Channel and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Trend Channel annotation to a chart, call the {api:anychart.core.annotations.PlotController#trendChannel}trendChannel(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.TrendChannel#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.TrendChannel#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.TrendChannel#secondXAnchor}secondXAnchor(){api}, {api:anychart.core.annotations.TrendChannel#secondValueAnchor}secondValueAnchor(){api}, {api:anychart.core.annotations.TrendChannel#secondXAnchor}thirdXAnchor(){api} and {api:anychart.core.annotations.TrendChannel#secondValueAnchor}thirdValueAnchor(){api} methods to set 3 points that determine the position of the trend channel. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a Trend Channel annotation
controller.trendChannel({
    xAnchor: "2007-01-07",
    valueAnchor: 28.92,
    secondXAnchor: "2007-09-23",
    secondValueAnchor: 33.13,
    thirdXAnchor: "2006-07-30",
    thirdValueAnchor: 17.24
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Trend\_Channel\_01{sample}

## Appearance

The [appearance settings](../../../Appearance_Settings) of a Trend Channel annotation can be configured in three [states](../../../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the following methods:

* {api:anychart.core.annotations.Base#normal}normal(){api} 
* {api:anychart.core.annotations.Base#selected}selected(){api} 
* {api:anychart.core.annotations.Base#hovered}hovered(){api}

Combine them with these methods:

* {api:anychart.core.StateSettings#fill}fill(){api}
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api}
* {api:anychart.core.StateSettings#stroke}stroke(){api}
* {api:anychart.core.StateSettings#markers}markers(){api}

You can also use object notation to specify the settings.
In the sample below, there are two Trend Channel annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first Trend Channel annotation and configure its visual settings
var trendChannel1 = controller.trendChannel({
    xAnchor: "2007-01-07",
    valueAnchor: 28.92,
    secondXAnchor: "2007-09-23",
    secondValueAnchor: 33.13,
    thirdXAnchor: "2006-07-30",
    thirdValueAnchor: 17.24,
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

// create the second Trend Channel annotation
var trendChannel2 = controller.trendChannel();

// set the position of the second annotation
trendChannel2.xAnchor("2004-01-11");
trendChannel2.valueAnchor(29.13);
trendChannel2.secondXAnchor("2005-10-30");
trendChannel2.secondValueAnchor(17.87);
trendChannel2.thirdXAnchor("2004-08-08");
trendChannel2.thirdValueAnchor(17.86);

// configure the visual settings of the second annotation
trendChannel2.normal().fill(null);
trendChannel2.normal().stroke("#006600", 1, "10 2");
trendChannel2.hovered().stroke("#00b300", 2, "10 2");
trendChannel2.selected().stroke("#00b300", 4, "10 2");  
```

{sample}STOCK\_Drawing\_Trend\_Channel\_02{sample}