{:index 5}
# Scales

* [Overview](#overview)
* [Types](#types)
  * [Linear](#linear) 
  * [Logarithmic](#logarithmic)
  * [Ordinal](#ordinal)
  * [Date Time](#date_time)
* [Stack Mode](#stack_mode)
* [Minimum and Maximum](#minimum_and_maximum) 
* [Soft Minimum and Soft Maximum](#soft_minimum_and_soft_maximum) 
* [Stick to Zero](#stick_to_zero)
* [Minor and Major Ticks](#minor_and_major_ticks) 
* [Minimum and Maximum Gap](#minimum_and_maximum_gap)
* [Inversion](#inversion)
* [One Scale for Different Charts](#one_scale_for_different_charts)
* [Synchronization](#synchronization)

## Overview

Scales allow you to control such features as minimum and maximum scale values, scale inversion, intervals, scale type and so on for a single axis. To create additional axes - please read [Additional axis](Additional_Axes) first. To adjust axes display see: [Axis Basics tutorial](Axis_Basics).
  
In this section main scales options are explained.
  
API starting point for everything you can do with scales is: {api:anychart.scales}anychart.scales{api} namespace.

## Types

There are four types of scales in AnyChart charting framework: {api:anychart.scales.Linear}Linear{api}, {api:anychart.scales.Logarithmic}"Logarithmic"{api}, {api:anychart.scales.Ordinal}Ordinal{api} and {api:anychart.scales.DateTime}DateTime{api}. To set scale type use the appropriate constructor:

```
chart.xScale(anychart.scales.linear());

var newScale = anychart.scales.ordinal();
chart.yScale(newScale);
```

Note: working with extra axes is explained in [Additional Axes Tutorial](Additional_Axes)

### Linear

Linear scale type is a default type for yScale in most charts. Values for this scale should be numbers and scale intervals will be evenly distributed along the axis. This type of scale is used when values fall within one reasonable range.

```
chart.yScale(anychart.scales.linear());
```

{sample}AGST\_Scales\_01{sample}

### Logarithmic

A logarithmic scale is a scale of measurement that uses the logarithm of a physical quantity instead of the quantity itself. Presentation of data on a logarithmic scale can be helpful when the data covers a large range of values the logarithm reduces this to a more manageable range. 

```
chart.yScale(anychart.scales.log());
```

In the sample below **A = 637.166**, **B = 721.630**, and **C=1.000**, **D=78**, **E = 90**.

{sample}AGST\_Scales\_02{sample}

### Ordinal

Ordinal scale type is a default type for xScale in all cartesian charts. Values for this scale should be of string type and scale intervals will be set automatic.

```
chart.xScale(anychart.scales.ordinal());
```

{sample}AGST\_Scales\_03{sample}

**Note**: You can set custom names for ordinal scale using {api:anychart.scales.Ordinal#names}names(){api} method. Use string parameter for this method to set data field with names for scale values or use array as parameter for {api:anychart.scales.Ordinal#names}names(){api} method to set custom names.

### Date Time

A dateTime scale is a scale of measurement that is based on the **UTC Date** format, but accepts variety of data formats. Presentation of data on a dateTime scale can be helpful for displaying time lines and time intervals. More information about data formats and usage is in [Date/Time tutorial](Date_Time_Axes).

```
chart.yScale(anychart.scales.dateTime());
```

{sample}AGST\_Scales\_04{sample}

## Stack Mode

Scales control series stacking. Full description of stacking options can be found in [Stacked Charts](../Basic_Charts/Stacked/Overview).

To change scale mode you need to use {api:anychart.scales.Linear#stackMode}stackMode(){api} method. Possible values come from {api:anychart.enums.ScaleStackMode}anychart.enums.ScaleStackMode{api}:

To set *value stacking* mode use:

```
var yScaleValue = chart.yScale();
yScaleValue.stackMode("value");
```

To set *percent stacking* mode use:

```
var yScalePerent = chart.yScale();
yScaleValue.stackMode("percent");
```

Here is a basic sample of a chart with a stacked scale:

{sample}AGST\_Scales\_05{sample}

## Minimum and Maximum

Maximum and minimum values by default are calculated automatically. If you want to set them use 
{api:anychart.scales.Linear#minimum}minimum(){api} and {api:anychart.scales.Linear#maximum}maximum(){api} methods:

```
var yScale = chart.yScale();
yScale.minimum(-50);
yScale.maximum(100);
```

{sample}AGST\_Scales\_06{sample}

## Soft Minimum and Soft Maximum

In some cases you may have no need to define solid minimum or maximum and need a scale to be autocalculated, but at the same time you may want a scale to remain in a certain range (i.e. "never go below zero" or "never go above 100"): that's the case when soft maximum and soft_minimum parameters help you.

To set soft maximum and soft minimum use {api:anychart.scales.Linear#softMinimum}softMinimum(){api} and {api:anychart.scales.Linear#softMaximum}softMaximum(){api} methods:

```
var yScale = chart.yScale();
yScale.softMinimum(-50);
yScale.softMaximum(100);
```

Sample below shows how soft minimum and soft maximum help to show data better than simple minimum and maximum.

{sample}AGST\_Scales\_07{sample}

## Stick to Zero

{api:anychart.scales.Linear#stickToZero}stickToZero(){api} method allows to disable the default scale autocalculation behavior and always include zero in scale range.

## Minor and Major Ticks

For any scale, but ordinal, you can set {api:anychart.scales.Linear#ticks}major{api} and {api:anychart.scales.Linear#minorTicks}minor{api} ticks intervals, which are calculated automatically by default. 
  
Major and minor ticks intervals are axis steps, which define where axis labels (major interval), axis ticks (major and minor, correspondingly) and major and minor grids are displayed.

```
// get ticks
var yTicks = chart.yScale().ticks();

// set ticks interval
yTicks.interval(10);

// get minor ticks
var minorTicks = chart.yScale().minorTicks();

// set minor ticks interval
minorTicks.interval(2);
```

In the sample below you can see how interval settings affects grids, ticks and labels.

{sample}AGST\_Scales\_08{sample}

## Minimum and Maximum Gap

For any axis scale you can set minimum and maximum offsets. Maximum and minimum offsets are the spacing between maximum or minimum axis scale values and they are set as a ratio to the maximum and minimum scale values.

```
var yScale = chart.yScale();
yScale.minimumGap(0.5);
yScale.maximumGap(0.5);
```

In the sample below you can see how offsets settings affects js chart. The chart to the left has minimum and maximum offsets set to 0.5, the chart to the right has all the same settings, but offsets are not set. Note that offsets are ignored when maximum or minimum scale values are specified.

{sample}AGST\_Scales\_09{sample}

## Inversion

If you want to display scale in the inverted mode use {api:anychart.scales.Linear#inverted}inverted(){api} method with "true" parameter.

```
var yScale = chart.yScale();
yScale.inverted(true);
```

Sample of the chart with inverted scale:

{sample}AGST\_Scales\_10{sample}

## One Scale for Different Charts

Scale calculates values and in many cases it is very useful to adjust settings of one scale and then use it for multiple charts. in example below we will create custom scale, adjust it and apply it for 2 charts. Click "launch in playground" to see the code

{sample}AGST\_Scales\_11{sample}

## Synchronization

Sometimes you may encounter situations when you need to sync minimums and/or maximums of several scales and you don't want to set exact values [minimum and maximum](#minimum_and_maximum). In such cases you need to use several special methods: {api:anychart.charts.Cartesian#getYScales}getYScales{api} and {api:anychart.charts.Cartesian#getYScales}getXScales{api} - the allow you to get a collection of all scales from the chart, and the
{api:anychart.core.Chart#getStat}getStat(){api} method that can obtain maximums and minimums of all scales.

Let's see it in a sample: say you have created a [value stacked column chart with two stacked clusters](../Basic_Charts/Stacked/Overview#clustered) and you need scales to be in sync, then you need to do the following:

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

Here is a live sampe:

{sample}AGST\_Scales\_12{sample}

The same can be done with X Scales if needed:

```
// sync minimums and maximums of the scales
globalMax = chart.getStat("xScalesMax");
globalMin = chart.getStat("xScalesMin");
// get all y scales
var xScales = chart.getXScales();
// set the same minimum and maximum
for (var i = 0; i < xScales.length; i++) {
   xScales[i].minimum(globalMin);
   xScales[i].maximum(globalMax);
}  
```
