{:index 5}
# Scales

* [Overview](#overview)
* [Types](#types)
  * [Linear](#linear) 
  * [Logarithmic](#logarithmic)
  * [Ordinal](#ordinal)
  * [Date Time](#date_time)
* [Stack Mode](#stack_mode)
  * [Clustered](#clustered)
* [Minimum and Maximum](#minimum_and_maximum) 
* [Soft Minimum and Soft Maximum](#soft_minimum_and_soft_maximum) 
* [Stick to Zero](#stick_to_zero)
* [Minor and Major Ticks](#minor_and_major_ticks) 
* [Minimum and Maximum Gap](#minimum_and_maximum_gap)
* [Inversion](#inversion)
* [One Scale for Different Charts](#one_scale_for_different_charts)

## Overview

Scales allow you to control such features as minimum and maximum scale values, scale inversion, intervals, scale type and so on for a single axis. To create additional axes - please read [Additional axis](Additional_Axes) first. To adjust axes display - please see: [Axis Basics tutorial](Axis_Basics).
  
  
In this section we will explain main scales options.
  
  
If you want to control any of scale settings - you should do that using {api:anychart.scales}scale(){api} method.

## Types

There are four types of scales in AnyChart charting framework: {api:anychart.scales.Linear}"Linear"{api}, {api:anychart.scales.Logarithmic}"Logarithmic"{api}, {api:anychart.scales.Ordinal}"Ordinal"{api} and {api:anychart.scales.DateTime}"DateTime"{api}. To set scale type use appropriate constructor:

```
  chart.xScale(anychart.scales.linear());

  var newScale = anychart.scales.ordinal();
  chart.yScale(newScale);
```

Note: working with extra axes is explained in [Additional Axes Tutorial](Additional_Axes)

### Linear

Linear scale type is a default type for yScale in most charts. Values for this scale should be numbers and scale intervals will be evenly distributed along the axis. This type of scale is used when values fall within one reasonable range.

```
  chart.xScale(anychart.scales.linear());
```

{sample}AGST\_Scales\_01{sample}

### Logarithmic

A logarithmic scale is a scale of measurement that uses the logarithm of a physical quantity instead of the quantity itself. Presentation of data on a logarithmic scale can be helpful when the data covers a large range of values the logarithm reduces this to a more manageable range. 
<!--You can set any positive number as a logarithm base using log_base attribute.-->

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

Scale mode defines some additional behavior of a chart. In the table below all modes are listed and their applicability to different chart types:

<table width="481" border="1" class="dtTABLE">
<tbody><tr>
<th width="210">Scale mode</th>
<th width="255">Charts</th>
</tr>
<tr>
<td>Normal</td>
<td>Default for all </td>
</tr>
<tr>
<td>Stacked</td>
<td>All liner types (Bar, Line, Area, etc.)</td>
</tr>
<tr>
<td>PercentStacked </td>
<td>All liner types (Bar, Line, Area, etc.)</td>
</tr>
</tbody></table>

To change scale mode you need to set {api:anychart.enums.ScaleStackMode}stackMode(){api} parameter. Possible attributes are: **value** and **percent**.

```
  var yScale = chart.yScale();
  yScale.stackMode("percent");
```

In the sample below stacked and percent stacked scales are demonstrated on the same data sets:

{sample}AGST\_Scales\_05{sample}

### Clustered

For stacked charts with multiple series it is possible to divide stacked series into groups. The groups can be created by using a new y scale for each group. New scale should be used as a parameter of {api:anychart.core.cartesian.series.ContinuousBase#yScale}yScale(){api} method for each series in the group:

```
  var newScale = anychart.scales.linear()

  var series = chart.column(data);
  series.yScale(newScale);
```

Here is a sample of clustered series groups in a stacked modes:

{sample}AGST\_Scales\_12{sample}

**Note**: You can find more accurate sample with information on scales' sync in [Stacked Bar-Column Charts](../Basic_Charts_Types/Stacked_Bar-Column_Charts#clustered_charts) and [Percent Stacked Bar-Column Charts](../Basic_Charts_Types/Percent_Stacked_Bar-Column_Charts#clustered_charts) articles.

## Minimum and Maximum

For any scale, but ordinal, you can set maximum and/or minimum values which are calculated automatically by default.

```
  var yScale = chart.yScale();
  yScale.minimum(-50);
  yScale.maximum(100);
```

Note, if you will set maximum value lesser than chart elements values, or minimum greater than them - these elements will be cropped, and you will see only a part of them or will not see them at all.

{sample}AGST\_Scales\_06{sample}

## Soft Minimum and Soft Maximum

For any scale, but ordinal, you can set soft maximum and/or soft minimum values.

```
  var yScale = chart.yScale();
  yScale.softMinimum(-50);
  yScale.softMaximum(100);
```

In some cases you may have no need to define solid minimum or maximum and need a scale to be autocalculated, but at the same time you may want a scale to remain in a certain range (i.e. "never go below zero" or "never go above 100"): that's the case when soft maximum and soft_minimum parameters help you.

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
