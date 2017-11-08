# Column Chart

* [Overview](#overview)
* [Chart](#chart)
  * [Single Series](#single_series)
  * [Multi-series](#multi-series)
* [Axes](#axes)
  * [Orientation](#orientation)
  * [Inversion](#inversion)
  * [Minimum and Maximum](#minimum_and_maximum)
* [Padding](#padding)
* [Visualization](#visualization)
  * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)

## Overview

A column chart is a modification of a bar chart, the only difference is its orientation: instead of  horizontal bars and categories usually kept along the Y-axis, a Column Chart has vertical rectangular bars of lengths usually proportional to the magnitudes or frequencies of what they represent. If you want to build a horizontally oriented bar chart, please go to the [Bar Chart](Bar_Chart) section.
  
  
Column charts are useful for showing data changes over a period of time or for illustrating comparisons among items. In column charts, categories are typically organized along the horizontal axis and values along the vertical axis.

## Chart

Depending on the data model and the visualization purpose the column chart may contain single or multiple series.

### Single-Series

Let's look at the following data - sales of several managers in one quarter:

<table >
<tr>
<th width="170px" >
Name
</th>
<th width="90px" >
Sales
</th>
</tr>
<tr>
<td >
John
</td>
<td >
	$10000
</td>
</tr>
<tr>
<td >
Jake
</td>
<td >
	 $12000
</td>
</tr>
<tr>
<td >
Peter
</td>
<td >
	 $18000
</td>
</tr>
<tr>
<td >
James
</td>
<td >
	 $11000
</td>
</tr>
<tr>
<td >
Mary
</td>
<td >
	 $9000
</td>
</tr>
</table>

Now we need to convert this data table into an acceptable format. In terms of the AnyChart data model we have one series of data (Sales) with categories that hold managers names. Each point in series represents one manager and his/her sales. Converted Data looks like:

```
    chart.column([
        ['John' , 10000],
        ['Jake' , 12000],
        ['Peter' , 18000],
        ['James' , 11000],
        ['Mary' , 9000]
    ]);
```

{sample}BCT\_ColumnChart\_01{sample}

### Multi-series

To compare 2 or more data rows you should build a multi-series column chart as it is shown in the sample below.
  
  
Let's compare the First quarter sales with the Second quarter sales:

<table width="300px" >
<td >
John	
</td>
<td >
$10000	
</td>
<td >
$12000
</td>
</tr>
<tr>
<td >
Jake
</td>
<td >
$12000
</td>
<td >
$15000
</td>
</tr>
<tr>
<td >
Peter
</td>
<td >
$18000
</td>
<td >
$16000
</td>
</tr>
<tr>
<td >
James
</td>
<td >
$11000
</td>
<td >
$13000
</td>
</tr>
<tr>
<td >
Mary
</td>
<td >
$9000
</td>
<td >
$19000
</td>
</tr>
</table>

As we did in single-series column sample above, here we need to convert this table into JSON, the only difference between these two samples is the fact that now we have two series of data - one series for each quarter, and we give proper names to each series:

```
    var data = anychart.data.set([
        ['John' , 10000, 12000],
        ['Jake' , 12000, 15000],
        ['Peter' , 18000, 16000],
        ['James' , 11000, 13000],
        ['Mary' , 9000, 19000]
    ]);
```

As we now have multi-series chart we don't want to set type for each series individually (there can be more than two series in multi-series chart), so we add {api:anychart.core.cartesian.series.Column}**anychart.columnChart()**{api} to the **chart**. Now all series in chart will be of Column type by default.

{sample}BCT\_ColumnChart\_02{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and else. All axis features are described in [Axes Basics](../Axes_and_Grids/Axis_Basics) tutorial. In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust {api:anychart.enums.Orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} methods.

Orientation depends on plot type and inversion of axes, you will find list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) tutorial.

```
    chart.xAxis(0).orientation('top');
    chart.yAxis(0).orientation('right');
```

Look at the demonstration of this feature in the Single-series sample:

{sample}BCT\_ColumnChart\_03{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any extra. Inversion is controlled by axis **scale().inverted()**:

```
    chart.yScale().inverted(true);
```
Look at the demonstration of Y-Axis inversion in the Single-series sample:

{sample}BCT\_ColumnChart\_04{sample}

### Minimum and Maximum

By default AnyChart calculates axis the minimum and the maximum automatically. You can see this on the scale inversion chart sample above: the minimal value of the Y-Axis is 6.000, and maximum is 21.000. You can control these values by setting **.maximum()** and **.minimum()** parameters of the scale:

```
   chart.yScale().minimum('6000').maximum('20000');
```

Look at the demonstration of the maximum and the minimum values in the Single-series sample:

{sample}BCT\_ColumnChart\_05{sample}

## Padding

The special thing about column charts are the paddings between columns and column groups (in multi-series charts). The picture below shows what are these paddings:

![](https://anychart.com/products/anychart/docs/users-guide/img/column-paddings.gif)

If you want to set these paddings you need to set {api:anychart.charts.Cartesian#barsPadding}**.barsPadding()**{api} or {api:anychart.charts.Cartesian#barGroupsPadding}**.barGroupsPadding()**{api} parameters in the **chart**. Paddings are measured as a ratio to column width (columns widths are calculated automatically). For example, if you set **.barsPadding()** to 0.5, the space between two columns will be equal to the half of each column width. If you don't want any padding between columns or groups you should set **.barsPadding()** and **.barGroupsPadding()** to 0.
  
  
Here is the sample of multi-series column chart with **.barsPadding()** and **.barGroupsPadding()** set to -0.1 and 2; accordingly, negative **.barsPadding()** leads to columns overlay and large **.barGroupsPadding()** moves column groups away from each other:

{sample}BCT\_ColumnChart\_06{sample}

## Visualization

In this section we will describe the main elements of column chart style and demonstrate how style can be applied.
  
The main idea of styles is to segregate visualization and data definition. Visual appearance of columns is defined using certain styles. The style can be applied to all column charts or a single column.

On the image below you can see which elements of the chart can be decorated with: fill (including solid color fill, hatch fill, image fill and gradient fill), border and effects applied to whole column.

![](https://anychart.com/products/anychart/docs/users-guide/img/column_styles_diagram.gif)

Styles are also used to make charts interactive: you can define how elements will be displayed by default and when hovered.

### Basic Sample

Now, let's find out how to create a simple style and apply it to the chart. As we've already mentioned, style consists of several elements, like in the structure below:

```
  var chart.column([
    ['John' , 10000],
    ['Jake' , 12000],
    ['Peter' , 18000],
    ['James' , 11000],
    ['Mary' , 9000]
  ]).fill('Gold')
    .hoverStroke("darkred", 4)
    .stroke('#56561a', 4)
    .hatchFill('diagonalbrick', 'gray')
    .hoverHatchFill('diagonalbrick', 'darkred');
```

Using such settings we've created a style that defines columns of Gold color, rather thick border, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed thick border and hatch fill colored DarkRed too.

Now we will take a sample single series chart described above and apply it to all chart elements.

{sample}BCT\_ColumnChart\_07{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.

If you want to configure data labels and tooltips for all series - you should use {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} and {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} methods of **series**. Adding attributes with values to these methods will lead to changes in visual appearance, position and format. 

With the following example let's make data labels appear in the center of the columns, format them to show only the value corresponding to the column and tooltip to show detailed description.  

{sample}BCT\_ColumnChart\_08{sample}

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including columns.

In the sample below we take single-series data described above and mark the highest column in series with a "Star5" of the "Gold" color.

To make marker visually appealing we set its size to 12 pixels in normal state, and 22px while hovered.

```
  {
    x: 'Peter',             // set x
    value: 18000,           // set value
    marker:{                // marker settings
      type:'star5',         // marker type
      fill:'gold',          // marker color
      size: 12,             // marker size
      enabled: true         // initiate marker draw
    },
    hoverMarker: {size: 22} // adjust marker size on mouse over
  },
```
And here is a result - it's easy to notice that Peter sold more than others and we are showing this on the chart:

{sample}BCT\_ColumnChart\_09{sample}

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically if you have not defined special colors.

### Colorizing Elements

Now let's study how to apply different colors to different data series. To apply the color to the exact series we need to set the {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter in the {api:anychart.core.cartesian.series}**series**{api}. In the sample below we have 5 series with sample data, which we'll set in different color each. Each series represents the sales amount of a manager, quarters are categories. Here is the sample:

{sample}BCT\_ColumnChart\_10{sample}

Here's a part of the code of the sample above:

```
 // data
    var data = anychart.data.set([
        ['First quarter', 10000, 12000, 18000, 11000, 9000],
        ['Second quarter', 12000, 15000, 16000, 13000, 19000]
    ]);

    // map data for the each series
    var dataMap1 = data.mapAs({x: [0], value: [1]});
    var dataMap2 = data.mapAs({x: [0], value: [2]});
    var dataMap3 = data.mapAs({x: [0], value: [3]});
    var dataMap4 = data.mapAs({x: [0], value: [4]});
    var dataMap5 = data.mapAs({x: [0], value: [5]});

    // chart type
    chart = anychart.columnChart();

    // set title
    chart.title().text('Colorizing');
    
      //set chart legend settings
    chart.legend().enabled(true);

    // set first series data and color
    chart.column(dataMap1)
      .fill('#4A55C7')
      .name('John');

    //other series names, data and color are to be set similarly to the former

```

Also, you might have noticed, that we enabled the *legend* element in this sample, which helped us to name each series differently.

Look at the individual columns we colorized in the sample below. We've got a chart with one series and predefined color for all elements. We set "#B44D4D" color for the minimum point and "Rgb(77,180,77)" for the maximum one.
As you see it is very easy to do by setting a value for the {api:anychart.graphics.vector.Fill}**fill()**{api} parameter of a point.

{sample}BCT\_ColumnChart\_11{sample}

**Important Note:**

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors. For example, instead of "Rgb(180,77,77)" you can set "HSB(0, 57, 71)" or "#b44d4d"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

* Different ways of [setting colors](../Appearance_Settings/Color_Management) of elements

## Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. 
To see whole range of available hatch types see [Hatch Fill](../Appearance_Settings/Color_Management) tutorial.

To demonstrate hatch fill feature we've edited one of the previous samples. As you see now it is completely monochrome. We've got a 5-series chart with 2 data points in each series. For every series we've applied different hatch fills by setting hatch type for the {api:anychart.charts.Cartesian#hatchFillPalette}**.hatchFill()**{api} parameter opposite to {api:anychart.graphics.vector.Fill}**fill()**{api} parameter used to colorize the series and set all series in grey color (#EEEEEE).

{sample}BCT\_ColumnChart\_12{sample}
