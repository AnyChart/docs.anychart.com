# Axes Scales
                                                                   
                                                                   
* [Overview](#overview)                                               	
* [Scale Type](#type)                             
  * [Linear Scale](#linear)                 
  * [Logarithmic Scale](#logarithmic)
  * [Ordinal Scale](#ordinal)
  * [Date Time Scale](#date)
* [Scale Stacked Mode](#mode)                                                                                           	 
* [Minimum and Maximum Scale Values](#min-max-values)         
* [Minor and Major Ticks Interval](#intervals)              
* [Minimum and Maximum Gap](#gap)     
* [Inverted Scale](#inverted)               
<!--* [Crossing value](#crossing)-->  
<!--* [Base value](#base-value)-->                   

<a name="overview"/>
## Overview
Axis scale allows you to control such features as minimum and maximum scale values, offsets, scale inversion, intervals, scale type and so on for a single axis. To create more axes - please read [Additional axes](Additional-Axis) first. To adjust axes display - please see: [Axes Basics tutorial](Axis_Basics).

In this section we will explain axis scale options, which are almost the same for all axes.

If you want to control any of scale settings - you should do that throw **scale()** method.

<a name="type"/>
## Scale Type

There are four types of scale in AnyChart: **"Linear"**, **"Logarithmic"**, **"Ordinal"** and **"DatiTime"**. To set scale type specify it after **anychart.scales** and write after dot the one, you need.

```
    chart.xScale(anychart.scales.linear());
    newScale = anychart.scales.ordinal();
    chart.yScale(newScale);
```
Note: working with extra axes is explained in [Additional Axes Tutorial](Additional-Axis)

<a name="linear"/>
### Linear Scale

Linear scale type is a default type for yScale in most charts. Values for this scale should be numbers and scale intervals will be evenly distributed along the axis. This type of scale is used when values fall within one reasonable range.

```
    chart.xScale(anychart.scales.linear());
```
{sample}AGST\_Axes\_Scale\_01{sample}

<a name="logarithmic"/>
### Logarithmic Scale

A logarithmic scale is a scale of measurement that uses the logarithm of a physical quantity instead of the quantity itself. Presentation of data on a logarithmic scale can be helpful when the data covers a large range of values the logarithm reduces this to a more manageable range. <!--You can set any positive number as a logarithm base using log_base attribute.-->

```
  chart.yScale(anychart.scales.log());
```

In the sample below **A = 637.166**, **B = 721.630**, and **C=1.000**, **D=78**, **E = 90**

{sample}AGST\_Axes\_Scale\_02{sample}

<a name="ordinal"/>
### Ordinal Scale

Ordinal scale type is a default type for xScale in most charts. Values for this scale should be string and scale intervals will be set automatic.

```
    chart.xScale(anychart.scales.ordinal());
```
{sample}AGST\_Axes\_Scale\_03{sample}

<a name="date"/>
### Date Time Scale

A dateTime scale is a scale of measurement that is based on the **UTC Date** format, but accepts variety of data formats. Presentation of data on a dateTime scale can be helpful for displaying time lines and time intervals. More information about data formats and usage is in [Date/Time tutorial](Date_Time_Axes).

```
  chart.yScale(anychart.scales.dateTime());
```

{sample}AGST\_Axes\_Scale\_04{sample}

<a name="mode"/>
## Scale Stacked Mode

Scale mode defines some additional behavior of an axes. In the table below all modes are listed and their applicability to different chart types:

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

{sample}AGST\_Axes\_Scale\_05{sample}

<a name="min-max-values"/>
## Minimum and Maximum Scale Values

For any axis scale you can set maximum and/or minimum values, which are calculated automatically by default.

```
    chart.yScale().minimum(-50).maximum(100);
```

Not that if will set maximum value lesser than chart elements values, or minimum bigger than them - these elements will be cut, and you will see only a part of them or will not see them at all.

{sample}AGST\_Axes\_Scale\_06{sample}

<a name="min-max-values"/>
## Major and Minor Ticks Intervals

For any axis scale you can set major and minor ticks intervals, which are calculated automatically by default. Major and minor ticks intervals are axis steps, which define where axis labels (major interval), axis ticks (major and minor, correspondingly) and major and minor grids are displayed.

```
    chart.yScale().ticks().interval(10);
    chart.yScale().minorTicks().interval(2);
```
In the sample below you can see how interval settings affects grids, ticks and labels.

{sample}AGST\_Axes\_Scale\_07{sample}

<a name="gap"/>
## Maximum and Minimum Gap

For any axis scale you can set minimum and maximum offsets. Maximum and minimum offsets are the spacing between maximum or minimum axis scale values and they are set as a ratio to the maximum and minimum scale values.

```
    chart.yScale().minimumGap(0.5).maximumGap(0.5);
```
In the sample below you can see how offsets settings affects chart, the chart to the left has minimum and maximum offsets set to 0.5, the chart to the right has all the same settings, but offsets are not set. Note that offsets are ignored when maximum or minimum scale values are specified.

{sample}AGST\_Axes\_Scale\_08{sample}

<a name="inverted"/>
## Inverted Scale

If you want to display scale in an inverted mode, to display bigger values to the bottom of the chart - you need to set **.inverted()** attribute to "true"

```
    chart.yScale().inverted(true);
```
Sample inverted scale chart:

{sample}AGST\_Axes\_Scale\_09{sample}

to top
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