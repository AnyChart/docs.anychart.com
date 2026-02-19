---
sidebar_position: 1
---
# Stacked Charts

## Overview

The stacked charts are a popular visual aid used for categorizing and comparing the parts of a whole. Each element in the chart represents a whole, and the segments represent parts of that whole. Different colors used for the segments distinguish the categories. Stacked charts are otherwise known as stacked graphs. 

In AnyChart stacking is a [special mode of a Scale](../../axes-and-grids/scales#stack-mode) set by {api:?entry=stackMode}stackMode(){api} method, and [several types of series](#supported-types) are compatible with this mode. If a series can not be stacked it simply [ignores the mode](#with-unstackable-series).

There are two modes of stacking: **value** and **percent**. These article explains everything there is to know about stacking settings and options.

## Value Stacking

To create a **value stacked** chart you need to set scale stackMode to "value":

```
// create a chart
chart = anychart.column();

/* enable the value stacking mode
on the default primary value scale*/
chart.yScale().stackMode("value");
```

Here is a basic sample of a stacked column chart:

{sample}BCT\_Stacking\_01{sample}

## Percent Stacking

To create a **percent stacked** chart you need to set scale stackMode to "percent":

```
// create a chart
chart = anychart.column();

/* enable the percent stacking mode
on the default primary value scale*/
chart.yScale().stackMode("percent");
```

Percent stacked charts usually need some fine tuning to get going:

### Scale Interval

Setting scale to percent stacked mode will force it's [minimum and maximum](../../axes-and-grids/scales#minimum-and-maximum) to 0 and 100 but tick interval will remain auto-calculated. If you want to change interval use ticks interval settings:

```
/* enable the value stacking mode
on the default primary value scale*/
chart.yScale().stackMode("value");

// set the tick interval on the value scale
chart.yScale().ticks().interval(20);
```

### Axis Percent Labels

To add the percent symbol to axis labels, use [Axes Labels](../../axes-and-grids/axes-labels-formatting) formatting:

```
// configure labels on the y-axis
chart.yAxis().labels().format("{%value}%");
```

### Labels and Tooltips

To add the percent symbol to labels and tooltips, use [Text Formatters](../../common-settings/text-formatters):

```
// configure tooltips
chart.tooltip().format("{%yPercentOfCategory}%");
```

Here is a sample percent stacked chart with all typical settings put together:

{sample}BCT\_Stacking\_02{sample}

## Combination

### Clustered

With column, bar or stick series types it is possible to create so-called "clustered stacks". To do so you should create a scale for each stacked cluster and assign it to series in this cluster.  You also need to take care of axes manually in this case. 

Here us a sample of percent stacked clustered chart:

```
// create scales and set stacking modes
var yScale1 = anychart.scales.linear();
yScale1.stackMode("percent");

var yScale2 = anychart.scales.linear();
yScale2.stackMode("percent");

var yScale3 = anychart.scales.linear();
yScale3.stackMode("percent");

// create column series and bind them to different scales:
chart.column(seriesData_1).yScale(yScale1);
chart.column(seriesData_2).yScale(yScale1);

chart.column(seriesData_3).yScale(yScale2);
chart.column(seriesData_4).yScale(yScale2);

chart.column(seriesData_5).yScale(yScale3);
chart.column(seriesData_6).yScale(yScale3);
```

{sample}BCT\_Stacking\_03{sample}

If you do this with value stacking mode you should not forget about minimum and maximum auto-calculation and sync axes. The easiest way is to set the same values to minimums and maximums:

```
// create scales and set stacking modes
// set maximums and minimums
yScale1 = anychart.scales.linear();
yScale1.stackMode("value");
yScale1.maximum(20);
yScale1.minimum(0);

yScale2 = anychart.scales.linear();
yScale2.stackMode("percent");
yScale2.maximum(20);
yScale2.minimum(0);
```

But you can also [sync scales](../../axes-and-grids/scales#synchronization) after they auto-calculate their minimums and maximums, it can be done like that:

```
// sync minimums and maximums of the scales
globalMax = chart.getStat("yScalesMax");
globalMin = chart.getStat("yScalesMin");
// get all y scales
var yScales = chart.getYScales();
// set the same minimum and maximum
for (var i = 0; i < yScales.length; i++) {
   yScales[i].minimum(globalMin);
   yScales[i].maximum(globalMax);
}  
```

Here is a sample of clustered value stacked column chart with [synced scales](../../axes-and-grids/scales#synchronization):

{sample}BCT\_Stacking\_04{sample}

### Overlay

If you want to display several stacks of different type at once you have to create a scale for each stack and properly link series from each stack to a scale. You also need to take care of axes manually in this case.

```
// create a chart
chart = anychart.column();

// create scales and set stacking modes
yScale1 = anychart.scales.linear();
yScale1.stackMode("percent");

yScale2 = anychart.scales.linear();
yScale2.stackMode("percent");

// create area and column series
//bind them to different scales:
chart.area(seriesData_1).yScale(yScale1);
chart.area(seriesData_2).yScale(yScale1);

chart.column(seriesData_3).yScale(yScale2);
chart.column(seriesData_4).yScale(yScale2);
```

{sample}BCT\_Stacking\_05{sample}

### With Unstackable Series

When you combine a set of stackable series with any number of series if unstackable type the stackable series form a stack and unstackable series are displayed as always. This way you can show a trend over a stack without creating any extra scales. Please see a sample below:

```
/* enable the value stacking mode
on the default primary value scale*/
chart.yScale().stackMode("value");

// create column and line series
chart.column(seriesData_1);
chart.column(seriesData_2);
chart.line(seriesData_3);
```

{sample}BCT\_Stacking\_06{sample}

## Stacking Order

You can change the order of stacking using the {api:anychart.scales.Linear#stackDirection}stackDirection(){api} method:

```
yScale().stackMode("value");

// Set the stacking direction.
yScale().stackDirection("reverse")
```

Here is a sample that shows both stacking order directions"

{sample}BCT\_Stacking\_07{sample}

## Supported Types

Here is the list of supported stacked charts:

* [Stacked Area](./value/area-chart)
* [Stacked Bar](./value/bar-chart)
* [Stacked Column](./value/column-chart)
* [Stacked Spline Area](./value/spline-area-chart)
* [Stacked Step Area](./value/step-area-chart)
* [Stacked Stick](./value/stick-chart)
* [Percent Stacked Area](./percent/area-chart)
* [Percent Stacked Bar](./percent/bar-chart)
* [Percent Stacked Column](./percent/column-chart)
* [Percent Stacked Spline Area](./percent/spline-area-chart)
* [Percent Stacked Step Area](./percent/step-area-chart)
* [Percent Stacked Stick](./percent/stick-chart)

Here are vertical and 3D stacked charts:

* [Vertical Stacked Area](./value/vertical-area-chart)
* [Vertical Stacked Spline Area](./value/vertical-spline-area-chart)
* [Vertical Stacked Step Area](./value/vertical-step-area-chart)
* [Vertical Stacked Stick](./value/vertical-stick-chart)
* [3D Stacked Area](./value/3d-area-chart)
* [3D Stacked Bar](./value/3d-bar-chart)
* [3D Stacked Column](./value/3d-column-chart)
* [Vertical Percent Stacked Area](./percent/vertical-area-chart)
* [Vertical Percent Stacked Spline Area](./percent/vertical-spline-area-chart)
* [Vertical Percent Stacked Step Area](./percent/vertical-step-area-chart)
* [Vertical Percent Stacked Stick](./percent/vertical-stick-chart)
* [3D Percent Stacked Area](./percent/3d-area-chart)
* [3D Percent Stacked Bar](./percent/3d-bar-chart)
* [3D Percent Stacked Column](./percent/3d-column-chart)

See also polar and radar stacked charts:

* [Stacked Polygon](./value/polygon-chart)
* [Polar Stacked Column](./value/polar-column-chart)
* [Radar Stacked Area](./value/radar-area-chart)
* [Percent Stacked Polygon](./percent/polygon-chart)
* [Polar Percent Stacked Column](./percent/polar-column-chart)
* [Radar Percent Stacked Area](./percent/radar-area-chart)

## Marimekko Charts

Marimekko charts are a special type of stacked charts and though very similar, still are different. Please refer to [Marimekko Chart](../marimekko-chart) articles to learn how to build them with AnyChart.

* [Mekko Chart](../marimekko-chart)
* [Bar Mekko Chart](../marimekko-chart/bar-mekko-chart)
* [Mosaic Chart](../marimekko-chart/mosaic-chart)

