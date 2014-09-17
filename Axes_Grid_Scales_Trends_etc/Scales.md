{:index 5}
# Scales
                                                                   
                                                                   
* [Overview](#overview)                                               	* [Types](#types)                             
  * [Linear](#linear)                 
  * [Logarithmic](#logarithmic)
  * [Ordinal](#ordinal)
  * [Date Time](#date_time)
* [Stack Mode](#stack_mode)                                                                                      	* [Minimum and Maximum](#minimum_and_maximum)         
* [Minor and Major Ticks](#intervals)              
* [Minimum and Maximum Gap](#gap)     
* [Inversion](#inversion)
* [Grids](#grids)
  * [Major and Minor](#grids)
  * [Dashed Grid](#dashed_grid)
  * [Even and Odd Fills](#interlace)
* [One Scale for Different Charts](#crosschart-scale)
<!--* [Crossing value](#crossing)-->  
<!--* [Base value](#base-value)-->                   

## Overview

Scales allow you to control such features as minimum and maximum scale values, offsets, scale inversion, intervals, scale type and so on for a single axis. To create additional axes - please read [Additional axes](Additional-Axis) first. To adjust axes display - please see: [Axes Basics tutorial](Axis_Basics).

In this section we will explain main scales options.

If you want to control any of scale settings - you should do that using **scale()** method.

## Types

There are four types of scales in AnyChart: **"Linear"**, **"Logarithmic"**, **"Ordinal"** and **"DateTime"**. To set scale type use appropriate constructor:

```
    chart.xScale(anychart.scales.linear());
    newScale = anychart.scales.ordinal();
    chart.yScale(newScale);
```

Note: working with extra axes is explained in [Additional Axes Tutorial](Additional-Axis)

### Linear

Linear scale type is a default type for yScale in most charts. Values for this scale should be numbers and scale intervals will be evenly distributed along the axis. This type of scale is used when values fall within one reasonable range.

```
    chart.xScale(anychart.scales.linear());
```

{sample}AGST\_Scales\_01{sample}

### Logarithmic

A logarithmic scale is a scale of measurement that uses the logarithm of a physical quantity instead of the quantity itself. Presentation of data on a logarithmic scale can be helpful when the data covers a large range of values the logarithm reduces this to a more manageable range. <!--You can set any positive number as a logarithm base using log_base attribute.-->

```
    chart.yScale(anychart.scales.log());
```

In the sample below **A = 637.166**, **B = 721.630**, and **C=1.000**, **D=78**, **E = 90**.

{sample}AGST\_Scales\_02{sample}

### Ordinal

Ordinal scale type is a default type for xScale in most charts. Values for this scale should be of string type and scale intervals will be set automatic.

```
    chart.xScale(anychart.scales.ordinal());
```
{sample}AGST\_Scales\_03{sample}

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

To change scale mode you need to set **.stackMode()** attribute. Possible attributes are: **value** and **percent**.

```
    chart.yScale().stackMode('value'); 
    chart.yScale().stackMode('percent');     
```

In the sample below stacked and percent stacked scales are demonstrated on the same data sets:

{sample}AGST\_Scales\_05{sample}

<a name="min-max-values"/>
## Minimum and Maximum Scale Values

For any scale, but ordinal, you can set maximum and/or minimum values which are calculated automatically by default.

```
    chart.yScale().minimum(-50).maximum(100);
```

Note, if will set maximum value lesser than chart elements values, or minimum greater than them - these elements will be cut, and you will see only a part of them or will not see them at all.

{sample}AGST\_Scales\_06{sample}

<a name="min-max-values"/>
## Major and Minor Ticks Intervals

For any scale, but ordinal, you can set major and minor ticks intervals, which are calculated automatically by default. Major and minor ticks intervals are axis steps, which define where axis labels (major interval), axis ticks (major and minor, correspondingly) and major and minor grids are displayed.

```
    chart.yScale().ticks().interval(10);
    chart.yScale().minorTicks().interval(2);
```

In the sample below you can see how interval settings affects grids, ticks and labels.

{sample}AGST\_Scales\_07{sample}

<a name="gap"/>
## Maximum and Minimum Gap

For any axis scale you can set minimum and maximum offsets. Maximum and minimum offsets are the spacing between maximum or minimum axis scale values and they are set as a ratio to the maximum and minimum scale values.

```
    chart.yScale().minimumGap(0.5).maximumGap(0.5);
```

In the sample below you can see how offsets settings affects chart, the chart to the left has minimum and maximum offsets set to 0.5, the chart to the right has all the same settings, but offsets are not set. Note that offsets are ignored when maximum or minimum scale values are specified.

{sample}AGST\_Scales\_08{sample}

## Inversion

If you want to display scale in an inverted mode use **.inverted()** method with "true" parameter.

```
    chart.yScale().inverted(true);
```

Sample inverted scale chart:

{sample}AGST\_Scales\_09{sample}

## Grids
### Major and Minor Grids

There are two types of grids in AnyChart - major grid and minor grid, which correspond to [major and minor scale steps](Axes-Scales). To enable grid you have to specify:

```
  chart.minorGrid().enabled(true);
  chart.grid().enabled(true);
```

For each grid you can define line style:

```
 chart.grid().stroke('black');
 chart.minorGrid().stroke('black 0.5');
```

That's how simple grid will look like:

{sample}AGST\_Scales\_10{sample}

<a name="dashed"/>
### Dashed Grid Lines

You can also make your grid lines dashed:

```
  chart.minorGrid().stroke({color: 'black', dash: '5 2 5', opacity: 0.2}).layout('horizontal');
```

And create chart like this:

{sample}AGST\_Scales\_11{sample}

<a name="interlace"/>
### Even and Odd fills

You can use this method with both major and minor grids. To do this you need to set **.oddFill()** or/and **.evenFill()** methods in the corresponding grid. Fill can be gradient, image and/or hatch as well as any other fill.

```
    chart.grid(1).layout('horizontal').evenFill('white').oddFill('rgb(244,245,255');
```

That's how simple interlaced grid looks like:

{sample}AGST\_Scales\_12{sample}

<a name="crosschart-scale"/>
## One Scale for Different Charts

Scale calculates values and in many cases it is very useful to adjust settings of one scale and then use it for multiple charts. in example below we will create custom scale, adjust it and apply it for 2 charts. Click "launch in playground" to see the code

{sample}AGST\_Scales\_13{sample}

<!--
Crossing axis value

If you want to display axis in the center of the chart you need to set "crossing" value. This value should be in the range of perpendicular axis.

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale crossing="3" />
03
</y_axis>
Sample with crossing value set to 3:

Live Sample:  Crossing value sample

to top
--><!--
Base axis scale value

Base scale is a value where ticks, grids and labels are starting to show. Setting base value is useful when you want to ignore some part of scale range, but do not want to ignore it using minimum value attribute.

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale base_value="30" />
03
</y_axis>
Sample with base value set to 30:

Live Sample:  Base value sample

to top

Current Page Online URL: Axes Scales-->
