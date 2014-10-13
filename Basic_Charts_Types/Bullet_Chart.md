# Bullet Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
 * [Multi-series](#multi-series)
* [Size](#size)
* [Axes](#axes)
 * [Positioning](#orientation)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Colors](#colors)
 * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)
 
## Overview

A Bullet Chart is a variation of [Bar Chart](Bar_Chart) designed to compares a single, primary measure (for example, 
current year-to-date revenue) to one or more other measures to enrich its meaning (for example, 
compared to a target), and displays it in the context of qualitative ranges of performance, such as poor, 
satisfactory, and good. The qualitative ranges are displayed as varying intensities of a single hue to make them 
discernible by those who are color blind and to restrict the use of colors on the dashboard to a minimum.
  
  
Bullet chart always uses only one data series, but a dashboard may contain several bullet charts at the same time. 
This kind of charts can be of great help in some cases as far as it provides the clearest, 
most meaningful presentation of the data in the least amount of space.

## Chart

Bullet Chart consist of a main bar of key measure and a range bar of comparative measure. 
  
  
Let's create a simple Bullet Chart. Main bar represents 2005 Revenue and range bar represents maximum annual income 
ever fixed in the company. Data set for the chart is below

```
  // Create bullet chart
  var chart = anychart.bulletChart([
    {value: 637.166}                  //2005 revenue
  ]);
  chart.range().from(0).to(737.166);  //maximum annual  income ever fixed
```

{sample}BCT\_Bullet\_Chart\_01{sample}

## Ranges

Ranges or range bar in Bullet chart is a qualitative categories encoder (such as bad, satisfactory, 
and good). They are variables of color intensity rather than of hue. Ranges are controlled by **.range()** method and 
have two compulsory parameters: **.from()** and **.to()**. 

```
  chart.range().from(0).to(10);
```

Here is a sample with 5 ranges on one bullet chart:

{sample}BCT\_Bullet\_Chart\_02{sample}

**Note:** to avoid complexity that cannot be perceived efficiently and to maintain a clear distinction between the 
colors, you shouldn't exceed five ranges on one chart.

## Layout

Bullet Chart was designed to represent data in the most effective and use minimum space for it. Layout is controlled 
by **.layout()** parameter. Here is a sample of code with both horizontal and vertical layouts.

```
  chart_1.layout('vertical');
  chart_2.layout('horizontal');
```
Here is the sample with both horizontal and vertical layouts.

{sample}BCT\_Bullet\_Chart\_03{sample}

## Axis

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis 
scale and settings. All axis features are described in [Axes Basics](../Axes_Grid_Scales_Trends_etc/Axis_Basics) 
tutorial, In this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted 
and how minimum and maximum values can be controlled. 
  
  
**Note:** In most cases chart has at least two axes, but Bullet Chart always represents only one data series and 
there is no need in two axes.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust **orientation()** method of 
**.axis()** attributes.
  
  
Orientation depends on the layout of a chart. For horizontal layout axis orientation parameter can be set only *top* 
or *bottom*. As for vertical layout, axis orientation parameter may be only *left* or *right*

```
  chart.axis().orientation('top');
```

Here is a sample with data from dashboard above with only change of axis orientation

{sample}BCT\_Bullet\_Chart\_04{sample}

### Inversion

AnyChart allows to invert any axis on a dashboard. Inversion is controlled by axis **scale().inverted()** parameter:

```
  chart.scale().inverted(true);
```

Below is a demonstration of horizontal bullet chart with inverted axis. 

{sample}BCT\_Bullet\_Chart\_05{sample}

### Minimum and Maximum

By default AnyChart calculates axis minimum and maximum automatically, you can see it on the scale inversion chart 
sample above: minimal value on the Y Axis is 0, and maximum is 15. You can control these values by setting 
maximum and minimum attributes of the scale:

```
  chart.yScale().minimum(-5).maximum(20);
```

Look at the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_Bullet\_Chart\_06{sample}

## Markers

Marker is an object with a specified shape, size, and color or an image used to encode any comparative measures. 
Markers are controlled through data. Here is a sample of a bullet chart with two markers.

```
  var chart = anychart.bulletChart([
    {value: 225},                               // main quantity bar 
    {value: 275, type: 'ellipse', fill: 'gold'} // ellipse shaped marker
  ]);
```

{sample}BCT\_Bullet\_Chart\_07{sample}

**Note:** to avoid complexity we recommend to limit markers number to two. 

## Colors

Bullet Chart ranges use variables of color intensity rather than of hue. Ranges color can ba controlled with 
**.rangePalette()**

```
  chart.rangePalette(['#ffc658', '#ffd382', '#ffe0a8', '#ffe9c2', '#fff8e6']);
```

{sample}BCT\_Bullet\_Chart\_07{sample}
