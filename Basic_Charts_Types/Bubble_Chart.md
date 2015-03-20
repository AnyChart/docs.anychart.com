# Bubble Chart

* [Overview](#overview)
* [Chart](#chart)
 * [Single Series](#single_series)
 * [Multi-series](#multi-series)
* [Size](#size)
* [Axes](#axes)
 * [Orientation](#orientation)
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

A Bubble chart is a variation of a Scatter chart where the data points are replaced with bubbles.
  
  
Bubble charts are often used to present financial data. Use a Bubble chart if you want to put more attention to the specific values in your chart by different bubble sizes.
  
  
Bubble charts are popular tools for identifying and illustrating industry clusters. Essentially, these charts allow four different variables to be plotted within the same graph, making it easy to assess relative economic performance.
Because they allow visual comparisons of well-understood measures, bubble charts are often used for pinpointing priority industries that should receive attention from a state economic development agency.

## Chart

Depending on data model and the visualization purpose the bar chart may contain single or several series. As 
bubble chart need 3 values to show bubbles - you need to pass this data to chart. Here are two samples of data formatting:

  
When using Bubble chart on a scatter plot:

```
    [10, 63, 20]
```

When using Bubble chart on a categorized plot:

```
    ['December', 6, 17]
```

### Single-Series

Let's see single series bubble chart created using the sample data - ACME Corp. sales data for the three different 
products, we will compare a number of units sold and profit using a bubble chart: 
  
<table width="376" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="214"><b>Product</b></th>
<th width="70"><b>Units</b></th>
<th width="70"><b>Profit</b></th>
</tr>
<tr>
<td>Product A </td>
<td>637</td>
<td>$6</td>
</tr>
<tr>
<td>Product B </td>
<td>72</td>
<td>$14</td>
</tr>
<tr>
<td>Product C </td>
<td>48</td>
<td>$10</td>
</tr>
</tbody>
</table>

Now we need to convert this data table into format acceptable by AnyChart. In terms of 
AnyChart data model, we have one series of data (Sales) with categories that hold Product names. Each point in series represents product, units sold and a profit amount. Converted data looks like:

```
    chart.bubble([
        ['Product A', 637, 6],
        ['Product B', 72, 14],
        ['Product C', 48, 10]
    ]).minimumSize(2).maximumSize(40);
```

As you can see, we've categorised chart at {api:anychart.charts.Cartesian#bubble}**bubble()**{api} method, set parameters that defines categories in X-axis into first column, sales amount in Y-axis into second and parameter that defines bubble size (which is the same with the profit amount) into third one.

Here it is - AnyChart can now visualize your data. You can launch it in playground and modify it.

{sample}BCT\_Bubble\_Chart\_01{sample}

### Multi-series

To compare two or more data rows you should use multi-series bar charts as shown in the sample below.

Let's compare year 2003 sales to year 2004 product sales:

<table width="536" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="227"><b>Year</b></th>
<th width="141" colspan="2"><b>Year 2003 Sales</b></th>  
<th width="141" colspan="2"><b>Year 2004 Sales</b></th>
</tr>
<tr>
<th width="227"><b>Product</b></th>
<th width="141"><b>Units</b></th>  
<th width="141"><b>Profit</b></th>    
<th width="141"><b>Units</b></th>  
<th width="141"><b>Profit</b></th>    
</tr>  
<tr>
<td>Product A</td>
<td>637</td>
<td>$6</td>
<td>630</td>
<td>$12</td>
</tr>
<tr>
<td>Product B</td>
<td>72</td>
<td>$14</td>
<td>32</td>
<td>$10</td>
</tr>
<tr>
<td>Product C</td>
<td>48</td>
<td>$10</td>
<td>48</td>
<td>$20</td>
</tr>
</tbody>
</table>

As we did in single-series bubble sample above now we need to convert this table into acceptable format, the only difference between these two samples is the fact that now we have bigger data and we have to clarify which number means what, so we use the {api:anychart.data.Set#mapAs}**mapAs()**{api} method for it.

```
    var dataSet = anychart.data.set([
        ['Product A', 637, 6, 630, 12],
        ['Product B', 72, 14, 32, 10],
        ['Product C', 48, 10, 48, 20]
    ]);
    var seriesData_1 = dataSet.mapAs({x: [0], value: [1], size:[2]});
    var seriesData_2 = dataSet.mapAs({x: [0], value: [3], size:[4]});
```

{sample}BCT\_Bubble\_Chart\_02{sample}

### Size

The min and the max size of bubbles can be controlled using {api:anychart.core.cartesian.series.Bubble#maximumSize}**.maximumSize()**{api} and {api:anychart.core.cartesian.series.Bubble#minimumSize}**.minimumSize()**{api} parameters. Both of them can be set either in pixels or in percents of a lesser chart side:

```
    chart.maximumSize(25).minimumSize(1);
```

When you set **.maximumSize('20%')** - AnyChart will make diameters of bubble(s) with a biggest size equal to 20% of width or the height, depends on which side is shorter.
  
  
Here is the sample when bubbles are sized in percents, as specified above:

{sample}BCT\_Bubble\_Chart\_03{sample}

And in this sample when bubbles are sized in pixels:

```
    chart.maximumSize(100).minimumSize(10);
```
Note: this size setting type (in pixels) may lead to the nasty results when chart is resized.

{sample}BCT\_Bubble\_Chart\_04{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings, etc. You can find more information about axes in
[Axis Basics](../Axes_and_Grids/Axis_Basics) tutorial.
  
In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust orientation with {api:anychart.core.axes.Linear#orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} method.
  
Position depends on plot type and inversion of axes, you will find the list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) templates.

```
    chart.xAxis(0).orientation('top');
    chart.yAxis(0).orientation('right');
```

Here is the demonstration of this feature in the Single-series sample:
{sample}BCT\_Bubble\_Chart\_05{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any extra. Inversion is controlled by axis **scale().inverted()**:

```
    chart.yScale().inverted(true);
```

{sample}BCT\_Bubble\_Chart\_06{sample}

### Minimum and Maximum

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale positioning chart sample above: minimal value on the Y Axis is 0, and maximum is 1000. You can control these values by setting **.maximum()** and **.minimum()** parameters of {api:anychart.charts.Cartesian#yScale}**.yScale()**{api} method. As far as you want to adjusted the scale, it's desirable to set **.ticks().interval()** as well, in case default interval is twisted:

```
    chart.yScale().minimum('-100').maximum('1000').ticks().interval(100);
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_Bubble\_Chart\_07{sample}

## Visualization

In this section we will describe the main parts of bubble chart visualization and ways to adjust them. Visual appearance of bubbles is defined using certain methods. For bubble chart the main thing is  the {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter.

### Basic Sample

Now, let's look how to change the look of an Area. Here is a basic sample:

```
    .fill('gold')
    .hatchFill('diagonalbrick', 'gray')
    .hoverHatchFill('diagonalbrick', 'darkred')
    .stroke("Rgb(86,86,26)", 4)
    .hoverStroke("darkred", 6);
```

Using such settings we've created a style that colors bubbles in Gold, makes the border rather thick, fills hatch with DiagonalBrick and a couple of effects. Also, we've defined that when user moves cursor over an element it becomes highlighted with a dark red thick border and a hatch fill is colored dark red too.

Now let's apply this style to the chart.

{sample}BCT\_Bubble\_Chart\_08{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.  

If you want to configure data labels and tooltips for all series - you should use {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} and {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} methods. Adding attributes with values to these methods, you can change visual appearance, position and format of the same-named elements.

With the following example let's make data labels appear to the right from the bars, format them to show only the value corresponding to the bar and force tooltips to show detailed description.
  
  
When formatting data labels' text we use {api:anychart.core.ui.LabelsFactory#textFormatter}**.textFormatter**{api} to choose the column we need to get information from.
 
{sample}BCT\_Bubble\_Chart\_09{sample}
<!--
**Related Help Topics:**

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide:Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label_settings> 
nodes.
to top
-->

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including bubbles.
  
  
In the sample below we take single-series data described above and mark the biggest bubble in series with a **"Star5"** of the **"Gold"** color.
  
To make the marker more visually appealing we set its size to 12px in normal state and 22px when being hovered.


```
        chart.bubble([
        {x: "Product A", y: 437, size: 6},
		{x: "Product B", y: 172, size: 14, marker: {
            enabled: true, 
            type: 'star5', 
            fill: 'gold', 
            position: 'centerTop', 
            size: 10
        }, hoverMarker: {
            size: 18
        }},        
        {x: "Product C", y: 548, size: 10}
    ]).minimumSize(10).maximumSize(30);

``` 

And here is a result - the best product for ACME Corp. is Product B and we show this on the chart:

{sample}BCT\_Bubble\_Chart\_13{sample}
<!--Related help topics:

You can read more about working with markers in Markers tutorial.
Full reference of marker style can be found in XML Reference, particularly <marker_style> node.
to top
-->

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically if you have not define special colors.

### Colorizing Elements

Now let's study how to apply different colors to different data series. To apply the color to the exact series we need to set the {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter in the {api:anychart.core.cartesian.series}**series**{api}. In the sample below we have 5 series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_Bubble\_Chart\_10{sample}

Look at the individual points we colorized in the sample below. We've got a chart with one series and predefined color for all elements. We set "Rgb(180,77,77)" color for the minimum point and "Rgb(77,180,77)" for the maximum one.
As you see it is very easy to do by setting a value for the {api:anychart.graphics.vector.Fill}**fill()**{api} parameter of a point.

{sample}BCT\_Bubble\_Chart\_11{sample}


**Important Note:**


AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors. For example, instead of "Rgb(180,77,77)" you can set "HSB(0, 57, 71)" or "#b44d4d"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

* Different ways of [setting colors](../Appearance_Settings/Color_Management) of elements



<!-- But even this is not everything about colors in AnyChart: read more about setting colors below 
and in the following Help Sections:

Different ways of setting colors of elements
Advanced coloring techniques in Styles tutorial
-->

## Hatch Fills


AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. 
To see whole range of available hatch types see [Hatch Fill](../Appearance_Settings/Hatch_Fill) tutorial.
  
To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We've got a chart a with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting hatch type for the {api:anychart.charts.Cartesian#hatchFillPalette}**.hatchFill()**{api} parameter.

{sample}BCT\_Bubble\_Chart\_12{sample}
