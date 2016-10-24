{:index 3}
#Trend Channel

* [Overview](#overview)
* [Basic settings](#basic_settings)
* [Visual Settings](#visual_settings)

## Overview

The Trend Channel annotation allows to add a trend channel to a chart.

This article explains how to add a Trend Channel and configure its basic and visual settings. You can find more settings and other useful information in the articles describing annotations in general:

* [Drawing Tools and Annotations: General Settings](General_Settings)
* [Drawing Tools and Annotations: Drawing](Drawing)
* [Drawing Tools and Annotations: Serializing and Deserializing](Serializing_Deserializing)

## Basic Settings

To add a Trend Channel annotation to a chart, call the {api:anychart.core.annotations.PlotController#trendChannel}trendChannel(){api} method of the {api:anychart.core.annotations.PlotController}annotations(){api} object.

Next, use the {api:anychart.core.annotations.TrendChannel#xAnchor}xAnchor(){api}, {api:anychart.core.annotations.TrendChannel#valueAnchor}valueAnchor(){api}, {api:anychart.core.annotations.TrendChannel#secondXAnchor}secondXAnchor(){api}, {api:anychart.core.annotations.TrendChannel#secondValueAnchor}secondValueAnchor(){api}, {api:anychart.core.annotations.TrendChannel#secondXAnchor}thirdXAnchor(){api} and {api:anychart.core.annotations.TrendChannel#secondValueAnchor}thirdValueAnchor(){api} methods to set 3 points that determine the position of the trendChannel. Usually, the most convenient way to do this is object notation:

```
// create a stock chart
chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot(0);

// access the annotations() object of the plot to work with annotations
var controller = plot.annotations();

// create a trend channel annotation
controller.trendChannel({
    xAnchor: '2007-01-07',
    valueAnchor: 28.92,
    secondXAnchor: '2007-09-23',
    secondValueAnchor: 33.13,
    thirdXAnchor: '2006-07-30',
    thirdValueAnchor: 17.24
});
```

This is how it looks like:

{sample}STOCK\_Drawing\_Trend\_Channel\_01{sample}

## Visual Settings

You can also configure the visual settings of a Trend Channel annotation:

* {api:anychart.core.annotations.TrendChannel#color}color(){api}, {api:anychart.core.annotations.TrendChannel#fill}fill(){api}, {api:anychart.core.annotations.TrendChannel#hatchFill}hatchFill(){api}, {api:anychart.core.annotations.TrendChannel#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.annotations.TrendChannel#hoverFill}hoverFill(){api}, {api:anychart.core.annotations.TrendChannel#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.annotations.TrendChannel#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.annotations.TrendChannel#selectFill}selectFill(){api}, {api:anychart.core.annotations.TrendChannel#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.annotations.TrendChannel#selectStroke}selectStroke(){api} configure the visual settings on select

In the sample below, there are two Trend Channel annotations with some of the visual settings configured (by using an object in the first case and methods in the second):

```
// create the first trend channel annotation and configure its visual settings
trendChannel1 = controller.trendChannel({
    xAnchor: '2007-01-07',
    valueAnchor: 28.92,
    secondXAnchor: '2007-09-23',
    secondValueAnchor: 33.13,
    thirdXAnchor: '2006-07-30',
    thirdValueAnchor: 17.24,
    hoverFill: "#398CAE 0.3",
    hoverStroke: "2 #FF0000",
    selectFill: "#398CAE 0.3",
    selectHatchFill: "brick",
    selectStroke: "5 #FF0000"
});

// create the second trend channel annotation
trendChannel2 = controller.trendChannel();

// set the position of the second annotation
trendChannel2.xAnchor('2004-01-11');
trendChannel2.valueAnchor(29.13);
trendChannel2.secondXAnchor('2005-10-30');
trendChannel2.secondValueAnchor(17.87);
trendChannel2.thirdXAnchor('2004-08-08');
trendChannel2.thirdValueAnchor(17.86);

// configure the visual settings of the second annotation
trendChannel2.stroke("#2196F3", 3, "10 2");
trendChannel2.fill(null);
```

{sample}STOCK\_Drawing\_Trend\_Channel\_02{sample}