# Marker Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
 * [Multi-series](#multi-series)
 * [Marker Cartesian Plot](#marker_cartesian_plot)
* [Axes](#axes)
 * [Orientation](#orientation)
 * [Inversion](#inversion)
 * [Minimum and Maximum](#minimum_and_maximum)
* [Visualization](#visualization)
 * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Colors](#colors)
 * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)
* [Samples](#samples)

## Overview

Marker chart (also known as a point chart) is identical to a line chart without the lines. A marker chart shows only endpoints of segments that make each line up.

## Chart

Depending on data model and the visualization purpose the marker chart may contain single or multiple series.

### Single-Series

Let's look at the single-series marker chart created using the following data - ACME Movie studio total box office through several years:

<table width="305" border="1" class="dtTABLE">
<tbody><tr>
<th width="135"><b>Year</b></th>
<th width="154"><b>Box office  (billions)</b></th>
</tr>
<tr>
<td>2000</td>
<td>$1100</td>
</tr>
<tr>
<td>2001</td>
<td> $880</td>
</tr>
<tr>
<td>2002</td>
<td> $1100</td>
</tr>
<tr>
<td>2003</td>
<td> $1500</td>
</tr>
<tr>
<td>2004</td>
<td> $921</td>
</tr>
<tr>
<td>2005</td>
<td>$1000</td>
</tr>
<tr>
<td>2006</td>
<td>$1400</td>
</tr>
</tbody></table>

Now we need to convert this data table into js format as it is acceptable by AnyChart. In terms of AnyChart charting library first column represents year and second one contains total income of Box office. Converted Data looks like:

```
  chart.marker([
    [2000, 1100],
    [2001, 880],
    [2002, 1100],
    [2003, 1500],
    [2004, 921],
    [2005, 1000],
    [2006, 1400]
  ]);
```

This example shows what you can get from the code above. You may launch and explore this example further in our playground (to open it, click on the link at the top right corner of the chart). 

{sample}BCT\_Marker\_Chart\_01{sample}

### Multi-series

To compare two or more data rows you should use multi-series line charts as the one that is shown below.  
  
Let's compare ACME Movies box office to other studios:

<table border="1" class="dtTABLE">
<tbody><tr>
<th width="34"><b>Year</b></th>
<th width="80"><b>ACME</b></th>
<th width="80"><b>Galaxy</b></th>
<th width="80"><b>CSS</b></th>
<th width="80"><b>HARE</b></th>
<th width="80"><b>Soundy</b></th>
<th width="80"><b>Space</b></th>
</tr>
<tr>
<td>2000</td>
<td>$1100</td>
<td>$1000</td>
<td>$1500</td>
<td>$700</td>
<td>$600</td>
<td>$900</td>
</tr>
<tr>
<td>2001</td>
<td> $880</td>
<td>$950</td>
<td>$1300</td>
<td>$800</td>
<td>$700</td>
<td>$1200</td>
</tr>
<tr>
<td>2002</td>
<td> $1100</td>
<td>$800</td>
<td>$1000</td>
<td>$900</td>
<td>$1500</td>
<td>$1000</td>
</tr>
<tr>
<td>2003</td>
<td> $1500</td>
<td>$1000</td>
<td>$1050</td>
<td>$770</td>
<td>$1200</td>
<td>$1100</td>
</tr>
<tr>
<td>2004</td>
<td> $921</td>
<td>$890</td>
<td>$1500</td>
<td>$930</td>
<td>$1300</td>
<td>$1200</td>
</tr>
<tr>
<td>2005</td>
<td>$1000</td>
<td>$1000</td>
<td>$1330</td>
<td>$1350</td>
<td>$900</td>
<td>$1370</td>
</tr>
<tr>
<td>2006</td>
<td>$1400</td>
<td>$800</td>
<td>$950</td>
<td>$1200</td>
<td>$1700</td>
<td>$1050</td>
</tr>
</tbody></table>

As we did in single-series line sample above, now we need to convert this table into js format, the only difference between these two samples is several series of data (one series for each studio) opposite to the only series in the previous sample:

```
  chart.marker([
    [2000, 1100],
    [2001, 880],
    [2002, 1100],
    [2003, 1500],
    [2004, 921],
    [2005, 1000],
    [2006, 1400]
  ]);
  chart.marker([
    [2000, 1000], 
    [2001, 950],  
    [2002, 800],  
    [2003, 1000], 
    [2004, 890],  
    [2005, 1000], 
    [2006, 800],  
  ]);
```

{sample}BCT\_Marker\_Chart\_02{sample}

### Marker Cartesian Plot

All previous samples demonstrate marker series on scatter plot. Next sample shows customized cartesian plot with marker series on it.

{sample}BCT\_Marker\_Chart\_03{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and else. In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values.
  
  
All axis features are described in [Axes Basic](../Axes_and_Grids/Axis_Basics) tutorial, in this section we will quickly demonstrate how axis orientation can be adjusted, how we can adjust axis orientation, invert axis scale and control minimum and maximum values.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust orientation with {api:anychart.core.axes.Linear#orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} methods.
  
  
The position depends on the plot type and inversion of axes. See list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) tutorial.

```
  var xAxis = chart.xAxis();
  xAxis.orientation("top");
  var yAxis = chart.yAxis();
  yAxis.orientation("right");
```

And here is the demonstration of this feature in the Single-series sample:

{sample}BCT\_Marker\_Chart\_04{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any other scale. Inversion is controlled by axis {api:anychart.scales.Linear#inverted}**.inverted()**{api}:

```
  var yScale = chart.yScale();
  yScale.inverted(true);
```

And here is the demonstration of Y-Axis inversion in the Single-series sample:

{sample}BCT\_Marker\_Chart\_05{sample}

### Minimum and Maximum

AnyChart calculates axis minimum and maximum automatically. The minimal value on Y-Axis is 800, the maximum is 1.600, as you can see in the sample above. You can control these values by setting {api:anychart.scales.Linear#maximum}**.maximum()**{api} and {api:anychart.scales.Linear#minimum}**.minimum()**{api} parameters of {api:anychart.charts.Cartesian#yScale}**.yScale()**{api} method; let's look at what will happen if we define 0 and 1800 as the min amd the max values on the Y-Axis:

```
  var yScale = chart.yScale();
  // minimum value
  yScale.minimum(0);
  // maximum value
  yScale.maximum(1800);
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_Marker\_Chart\_06{sample}

## Visualization

In this section we will describe main parts of marker chart visualization and ways to adjust it. Visual appearance of areas is defined using certain methods. For Marker chart the main thing is the {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter.

### Basic Sample

Now, let's make a simple style and apply it to the chart. As we've already said, a style consists of several elements, like in this js structure below:

```
  var series = chart.marker([
    [2000, 1100],
    [2001, 880],
    [2002, 1100],
    [2003, 1500],
    [2004, 921],
    [2005, 1000],
    [2006, 1400]
  ]);
  
  series.fill("gold");
  series.hoverFill("darkred");
  series.hoverStroke(0);
  series.hoverSize(20);
```

Using such settings we've set Gold color for the markers and added a couple of effects. Also, we've defined that a marker will be highlighted with a dark red color and made bigger when hovered.

{sample}BCT\_Marker\_Chart\_07{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.
<!-- Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips-->.
  
  
If you want to configure data labels and tooltips for all series - you should use {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} and {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} methods. Adding attributes with values to these methods, you can change visual appearance, position and format of the same-named elements.
  
  
With the following example let's make data labels appear to the top from the data points, format them to show only the value corresponding to the point and force tooltips to show detailed description.
  
  
Here's a part of a code used in the sample below. For more detailed code visit the playground.

```
  // data
  var data = anychart.data.set([
    [2000, 1100],
    [2001, 880],
    [2002, 1100],
    [2003, 1500],
    [2004, 921],
    [2005, 1000],
    [2006, 1400]
  ]);

  // set data
  var series = chart.marker(data);

  // enable and adjust labels
  var labels = series.labels();
  labels.enabled(true);
  labels.anchor("bottomcenter");
  labels.fontWeight(900);
  labels.offsetY(10);
  
  // adjust tooltips
  var tooltip = series.tooltip();
  tooltip.textFormatter(function(){
    return "Month: " + this.x + "\nSales: " + this.value ;
  });
```

{sample}BCT\_Marker\_Chart\_08{sample}

<!--
Related Help Topics:

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide:Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label> nodes.
-->

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically if you have not defined special colors, though it allows you to specify colors for the points.

### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set {api:anychart.graphics.vector.Fill}**.fill()**{api} parameters in the {api:anychart.core.ui.MarkersFactory}**.marker()**{api} method. In the sample below we've got 5 series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_Marker\_Chart\_09{sample}

That's how a part of a code of the sample above looks like:

```
  // data
  var data = anychart.data.set([
    [2000, 178, 165, 154, 143, 132],
    [2001, 108, 160, 142, 121, 190],
    [2002, 180, 160, 170, 121, 119],
    [2003, 120, 195, 177, 126, 184],
    [2004, 110, 120, 130, 140, 150],
    [2005, 108, 160, 142, 121, 190],
    [2006, 180, 160, 170, 121, 119],
    [2007, 120, 195, 177, 126, 184],
    [2008, 110, 120, 130, 140, 150],
    [2009, 140, 150, 180, 190, 200]
  ]);

  // map data for each series
  var data1 = data.mapAs({x: [0], value: [1]});
  var data2 = data.mapAs({x: [0], value: [2]});
  var data3 = data.mapAs({x: [0], value: [3]});
  var data4 = data.mapAs({x: [0], value: [4]});
  var data5 = data.mapAs({x: [0], value: [5]});

  // set data and color for each series
  var series1 = chart.marker(data1);
  series1.fill("#4A55C7");
  var series2 = chart.marker(data2);
  series2.fill("#999999");
  var series3 = chart.marker(data3);
  series3.fill("#B04A8A");
  var series4 = chart.marker(data4);
  series4.fill("#C7894A");
  var series5 = chart.marker(data5);
  series5.fill("#BCBD46");
```

In the sample below we colorized individual points. We've got a chart with one series and predefined colors for all elements. Let's color the minimum and the maximum points in "Rgb(180,77,77)" and "Rgb(77,180,77)" accordingly. As you can see it is very easy to do by setting {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter for the point.

{sample}BCT\_Marker\_Chart\_10{sample}

That's how it was done:

```
  var data = anychart.data.set([
    [2000, 132],
    [2001, 124],
    [2002, 102],
    [2003, 119],
    [2004, 169],
    {x: 2005, value: 237, fill: "Rgb(77,180,77)"},
    [2006, 120],
    [2007, 99],
    {x: 2008, value: 44, fill: "Rgb(180,77,77)"},
    [2009, 59]
  ]);
```

Important Note:

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors. For example, instead of "Rgb(180,77,77)" you can set "#b44d4d"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

[Different ways of setting colors of elements](../Appearance_Settings/Color_Management)
<!--Advanced coloring techniques in [link in need]Styles tutorial[link in need]-->

## Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. 
To see whole range of available hatch types see [Hatch Fill](../Appearance_Settings/Color_Management) tutorial.
  
To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5-series with 2 data points in each. For every series we've applied different hatch fills by setting a hatch type for {api:anychart.core.scatter.series.Marker#hatchFill}**.hatchFill()**{api} parameter and set all series in grey color (#EEEEEE).

Here's a part of the code of the sample below:

```
  // data
  var data = anychart.data.set([
    [2000, 16, 26, 36, 48, 60],
    [2001, 14, 24, 34, 42, 50],
    [2002, 19, 26, 39, 45, 61],
    [2003, 27, 48, 35, 41, 58],
    [2004, 13, 24, 35, 55, 41],
    [2005, 37, 48, 65, 21, 28],
    [2006, 30, 48, 38, 12, 61]
  ]);

  // map data for each series
  var data1 = data.mapAs({x: [0], value: [5]});
  var data2 = data.mapAs({x: [0], value: [4]});
  var data3 = data.mapAs({x: [0], value: [3]});
  var data4 = data.mapAs({x: [0], value: [2]});
  var data5 = data.mapAs({x: [0], value: [1]});

  // set data for each series and adjust hatches and marker types
  var series = chart.marker(data1);
  series.hatchFill("diagonalcross");
  series.hoverSize(30);
  series.size(20);
  series.fill("#EEEEEE");
  series.type("star5");
```

That's how it looks like when we set all parameters for all series as for the first one:

{sample}BCT\_Marker\_Chart\_11{sample}

## Samples

You can see a lot of other samples in [AnyChart Web Line, Spline, Step-Line Charts Gallery](https://anychart.com/products/anychart/gallery/Line,_Spline,_Step-Line_Charts/).
