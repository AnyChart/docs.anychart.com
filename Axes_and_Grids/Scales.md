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
* [Grids](#grids)
  * [Major and Minor](#major_and_minor)
  * [Dashed](#dashed)
  * [Even and Odd Fills](#even_and_odd_fills)
* [One Scale for Different Charts](#one_scale_for_different_charts)

## Overview

Scales allow you to control such features as minimum and maximum scale values, scale inversion, intervals, scale type and so on for a single axis. To create additional axes - please read [Additional axis](Additional_Axes) first. To adjust axes display - please see: [Axis Basics tutorial](Axis_Basics).
  
  
In this section we will explain main scales options.
  
  
If you want to control any of scale settings - you should do that using {api:anychart.scales}**scale()**{api} method.

## Types

There are four types of scales in AnyChart: {api:anychart.scales.Linear}**"Linear"**{api}, {api:anychart.scales.Logarithmic}**"Logarithmic"**{api}, {api:anychart.scales.Ordinal}**"Ordinal"**{api} and {api:anychart.scales.DateTime}**"DateTime"**{api}. To set scale type use appropriate constructor:

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

**Note**: You can set custom names for ordinal scale using {api:anychart.scales.Ordinal#names}**names()**{api} method. Use string parameter for this method to set data field with names for scale values or use array as parameter for {api:anychart.scales.Ordinal#names}**names()**{api} method to set custom names.

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

To change scale mode you need to set {api:anychart.enums.ScaleStackMode}**.stackMode()**{api} attribute. Possible attributes are: **value** and **percent**.

```
  var yScale = chart.yScale();
  yScale.stackMode("percent");
```

In the sample below stacked and percent stacked scales are demonstrated on the same data sets:

{sample}AGST\_Scales\_05{sample}

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

{api:anychart.scales.Linear#stickToZero}**stickToZero()**{api} method allows to disable the default scale autocalculation behavior and always show include zero in scale range.

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

In the sample below you can see how offsets settings affects chart, the chart to the left has minimum and maximum offsets set to 0.5, the chart to the right has all the same settings, but offsets are not set. Note that offsets are ignored when maximum or minimum scale values are specified.

{sample}AGST\_Scales\_09{sample}

## Inversion

If you want to display scale in an inverted mode use {api:anychart.scales.Linear#inverted}**.inverted()**{api} method with "true" parameter.

```
  var yScale = chart.yScale();
  yScale.inverted(true);
```

Sample of the chart with inverted scale:

{sample}AGST\_Scales\_10{sample}

## Grids

There are two types of grids in AnyChart - major grid that can be controlled using {api:anychart.charts.Cartesian#grid}**.grid()**{api} method and minor grid that is controlled with {api:anychart.charts.Cartesian#minorGrid}.minorGrid(){api} methods. Both grids are disabled by default. To enable major grid use {api:anychart.core.grids.Linear#enabled}**.enabled(true)**{api} method for {api:anychart.charts.Cartesian#grid}**.grid()**{api} and if you want to show minor grid use {api:anychart.core.grids.Linear#enabled}**.enabled(true)**{api} method for {api:anychart.charts.Cartesian#minorGrid}.minorGrid(){api}.

```
  var minorGrid = chart.minorGrid();
  minorGrid.enabled(true);
  var grid = chart.grid();
  grid.enabled(true);
```

Here is how default grid and minor grid of cartesian chart looks like:

{sample}AGST\_Scales\_15{sample}

### Visualization

You can control visual appearance of grid lines using {api:anychart.grids.Linear#stroke}**.stroke()**{api} method. Full information on lines settings can be found in [lines tutorial](../Appearance_Settings/Lines_Settings).

```
  var grid = chart.grid();
  grid.stroke({
    // set stroke color
    color: "#FFF",
    // set dashes and gaps length
    dash: "3 5"
  });
```

{sample}AGST\_Scales\_17{sample}
  

Grid's fill is controlled by two methods: {api:anychart.grids.Linear#evenFill}**.evenFill()**{api} method controls inner color of all even spaces between grid lines and {api:anychart.grids.Linear#oddFill}**.oddFill()**{api} method controls the color settings of all odd spaces.

```
  // grid settings
  var grid = chart.grid();
  // set odd fill
  grid.oddFill("#FFF 0.25");
  // set even fill
  grid.evenFill("#000 0.25");
```

{sample}AGST\_Scales\_18{sample}

**Note**: Grid lines correlate with ticks of the chart scale. To manage lines number adjust {api:anychart.scales.ScatterTicks#interval}**interval()**{api} parameter of the chart scale. Use {api:anychart.grids.Linear#scale}**scale()**{api} method to bind grid to a custom scale.

### Layout

Grids can be placed vertically or horizontally on the chart plot. You can control grid's organization using {api:anychart.grids.Linear#layout}**.layout()**{api} method. 

```
  var grid = chart.grid();
  grid.layout("vertical");
```

{sample}AGST\_Scales\_16{sample}

As far as [radar](../Basic_Charts_Types/Radar_Chart) and [polar](../Basic_Charts_Types/Polar_Chart) charts appearance vary greatly from other chart types, these chart types have their own grid layouts. For these chart types you can use **layout("curcuit")** to define circular layout or **.layout("radial")** to enable radial grid layout. 

```
  // create radar chart
  var chart = anychart.radar();
  
  var grid = chart.grid();
  grid.layout("curcuit");
```

Here is a sample of radar chart with circular grid:

{sample}AGST\_Scales\_19{sample}

And here is a sample of Polar chart with radial layout: 

{sample}AGST\_Scales\_20{sample}

## One Scale for Different Charts

Scale calculates values and in many cases it is very useful to adjust settings of one scale and then use it for multiple charts. in example below we will create custom scale, adjust it and apply it for 2 charts. Click "launch in playground" to see the code

{sample}AGST\_Scales\_14{sample}
