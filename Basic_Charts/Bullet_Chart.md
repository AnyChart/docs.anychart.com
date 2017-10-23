{:index 1}
# Bullet Chart

* [Overview](#overview)
* [Chart](#chart)
* [Ranges](#ranges)
* [Layout](#layout)
* [Axis](#axis)
 * [Orientation](#orientation)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
* [Markers](#markers)
 * [Types](#types)
 * [Style](#style)
* [Colors](#colors)
* [Samples](#samples)

## Overview

A Bullet Chart is a variation of [Bar Chart](Bar_Chart) designed to compare a single, primary measure (for example, current year-to-date revenue) to one or more other measures to enrich its meaning (for example, compared to a target), and displays it in the context of qualitative ranges of performance, such as poor, satisfactory, and good. The qualitative ranges are displayed as blocks of one hue but with varying intensity, making them discernible by those who are color blind and to restrict the use of colors on the dashboard to a minimum.

Bullet chart always uses only one data series, but a dashboard may contain several bullet charts at the same time. This kind of charts can be of great help in some cases as far as it provides the clearest presentation of the data using less space.

## Chart

JavaScript Bullet Chart consists of a main bar of key measure and a range bar of comparative measures. 
  
Let's create a simple Bullet Chart. The main bar represents 2005 revenue and the range bar represents maximum annual income ever been reached in the company. Data set for the chart is below

```
// Create bullet chart
chart = anychart.bullet([
  {value: 637.166}                  //2005 revenue
]);
chart.range().from(0).to(750);      //maximum annual income ever 
```

{sample :width 832 :height 130}BCT\_Bullet\_Chart\_01{sample}

## Ranges

Ranges or range bars in Bullet chart are qualitative categories representations (such as bad, satisfactory and good). They are variables of color intensity rather than of hue. Ranges are controlled by {api:anychart.charts.Bullet#range}range(){api} method and have two mandatory parameters set by {api:anychart.core.axisMarkers.Range#from}.from(){api} and {api:anychart.core.axisMarkers.Range#to}.to(){api} methods.

```
chart.range(<number_of_a_range>).from(<value1>).to(<value2>);
```

Here is a sample with 5 ranges on one bullet chart:

{sample :width 832 :height 130}BCT\_Bullet\_Chart\_02{sample}

The code for the example above is the following:

```
chart.range().from(0).to(100);
chart.range(1).from(100).to(150);
chart.range(2).from(150).to(200);
chart.range(3).from(200).to(250);
chart.range(4).from(250).to(300);
```

**Note:** to avoid complexity that cannot be perceived efficiently and to maintain a clear distinction between the colors it's better to exceed no more than three ranges on one chart.

## Layout

Bullet Chart was designed to represent data in the most effective way using minimum space for it. Layout is controlled by {api:anychart.charts.Bullet#layout}layout(){api} parameter. This parameter's setting code looks this way:

```
chart_1.layout('vertical');
chart_2.layout('horizontal');
```
Here is the sample with both horizontal and vertical layouts.

{sample}BCT\_Bullet\_Chart\_03{sample}

## Axis

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings. You can find more information about axis in [Axes Basics](../Axes_and_Grids/Axis_Basics) tutorial. 

In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values.

**Note:** Usually a chart has at least two axes, but Bullet Chart always represents only one data series and there is no need in two axes.

### Orientation

With AnyChart you can place axis to any side of the chart, all you need to do is to adjust the {api:anychart.core.axes.Linear#orientation}orientation(){api} parameter of {api:anychart.charts.Bullet#axis}axis(){api}.

Orientation depends on the layout of a chart. For horizontal layout axis orientation parameter can be set either *top* or *bottom*. As for vertical layout, axis orientation parameter may be set in *left* or *right*.

```
chart.axis().orientation('top');
```

Here is a sample with the data from dashboard above with an only change of axis orientation:

{sample}BCT\_Bullet\_Chart\_04{sample}

### Inversion

AnyChart allows to invert any axis on a dashboard. Inversion is to be set using the {api:anychart.scales.Linear#inverted}**scale().inverted(){api} method:

```
chart.scale().inverted(true);
```

Below this you can see a demonstration of a horizontal bullet chart with inverted axis. 

{sample :width 832 :height 130}BCT\_Bullet\_Chart\_05{sample}

### Minimum and Maximum

By default AnyChart html5 charting library calculates axis minimum and maximum automatically, as you can see on the scale inversion chart sample above: minimal value on the Y Axis is 0, and maximum is 15. You can change these values by setting them for the {api:anychart.scales.Linear#maximum}maximum(){api} and {api:anychart.scales.Linear#minimum}minimum(){api} parameters:

```
chart.yScale().minimum(-5).maximum(20);
```

Look at the demonstration of maximum and minimum values in the Single-series sample:

{sample :width 832 :height 130}BCT\_Bullet\_Chart\_06{sample}

## Markers

Marker is an object with a specified shape, size and color or an image used to represent any comparative measures. 
Markers are controlled through the data. You will find a plenty of examples with different types of markers below.

### Types

Bullet charts have {api:anychart.enums.BulletMarkerType}4 marker types{api}: `'bar'`, `'X'`, `'line'`, `'ellipse'`. Note that the `'bar'` type is the same as the main bar in the Bullet Chart, so it's only three types you can really use as markers. 

Here is the sample with all 4 marker types:

{sample :width 832 :height 500}BCT\_Bullet\_Chart\_07{sample}

**Note:** This chart contains all markers in one data set. It is done for demonstration purposes. It's highly recommended to **limit the mumber of markers to two**.

### Style

For clearer distinction between markers it is very useful to adjust style settings of markers. There are three things in a marker you can control and adjust: **fill**, **stroke** and **gap**. Fill method is responsible for inner color of a marker, stroke is responsible for the color of a border line and gap method is responsible for the size of a marker.

Here is the sample of an ellipse sharped marker with blue stroke, gold inner color and a size 0.7 size of a chart.

```
chart = anychart.bulletChart([
  {value: 225},
  {value: 290,          // set marker position
    type: 'ellipse',    // set ellipse as marker type
    fill: 'gold',       // set gold inner color 
    stroke: '2 blue',   // set border width 2px and border color
    gap: 0.3            // set marker size 
  }
])
```

**Note:** The **.gap()** value represents the distance from the border of the chart to the marker's border, not the exact size of the marker. So, the more this value is, the less is the diameter of the ellipse (the line's or rectangular's height).

{sample :width 832 :height 130}BCT\_Bullet\_Chart\_08{sample}

## Colors

Bullet Chart ranges use variables of color intensity rather than of hue. Ranges' colors are controlled using {api:anychart.charts.Bullet#rangePalette}rangePalette(){api} method:

```
chart.rangePalette([
  '#ffa058',  // first range color
  '#ffb082',  // second range color
  '#ffc0a8',  // third range color
  '#ffd0c2',  // forth range color
  '#ffe0e6'   // fifth range color
]);
```

{sample :width 832 :height 130}BCT\_Bullet\_Chart\_09{sample}

## Samples

You can see a lot of other samples in [AnyChart Web Bullet Charts Gallery](https://www.anychart.com/products/anychart/gallery/Bullet_Charts/).
