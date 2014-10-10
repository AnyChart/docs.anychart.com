# Bubble Chart

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

## Layout

Bullet Chart was designed to represent data in the most effective and use minimum space for it. Layout is controlled 
by **.layout()** parameter. Here is a sample of code with both horizontal and vertical layouts.

```
    chart_1.layout('vertical');
    chart_2.layout('horizontal');
```
Here is the sample with both horizontal and vertical layouts.

{sample}BCT\_Bullet\_Chart\_02{sample}

## Axis

