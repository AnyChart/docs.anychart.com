{:index 1}
# Column Chart

* [Overview](#overview)
* [Chart](#chart)
  * [Single Series](#single_series)
  * [Multi-series](#multi-series)
  * [3D Series](#3d_series)
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
* [Samples](#samples)

## Overview

A column chart hhhis a modification of a bar chart, the only difference is its orientation: instead of horizontal bars and categories usually kept along the Y-axis, a Column Chart has vertical rectangular bars of lengths usually proportional to the magnitudes or frequencies of what they represent. If you want to build a horizontally oriented bar chart, please go to the [Bar Chart](Bar_Chart) section.
  
  
Column charts are useful for showing data changes over a period of time or for illustrating comparisons among items. In column charts, categories are typically organized along the horizontal axis and values along the vertical axis.

## Chart

Depending on the data model and the visualization purpose the column chart may contain single or multiple series.

### Single-Series

Let's look at the following data - sales of several managers in one quarter:

<table width="260px" style=" text-align:left; vertical-align:middle; border: 1px solid #cccccc; border-collapse: collapse;">
<tr>
<th width="170px" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Name
</th>
<th width="90px" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Sales
</th>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
John
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
	$10000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
Jake
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
	 $12000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
Peter
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
	 $18000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
James
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
	 $11000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
Mary
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
	 $9000
</td>
</tr>
</table>

Now we need to convert this data table into an acceptable format. In terms of the AnyChart data model we have one series of data (Sales) with categories that hold managers names. Each point in series represents one manager and his/her sales. Converted Data looks like:

```
  chart.column([
    ["John" , 10000],
    ["Jake" , 12000],
    ["Peter" , 18000],
    ["James" , 11000],
    ["Mary" , 9000]
  ]);
```

{sample}BCT\_ColumnChart\_01{sample}

### Multi-series

To compare 2 or more data rows you should build a multi-series column chart as it is shown in the sample below.
  
  
Let's compare the First quarter sales with the Second quarter sales:

<table width="300px" style=" text-align:left; vertical-align:middle; border: 1px solid #cccccc; border-collapse: collapse;">
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
John	
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$10000	
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$12000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
Jake
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$12000
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$15000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
Peter
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$18000
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$16000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
James
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$11000
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$13000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
Mary
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$9000
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$19000
</td>
</tr>
</table>

As we did in single-series column sample above, here we need to convert this table, the only difference between these two samples is the fact that now we have two series of data - one series for each quarter, and we give proper names to each series:

```
  var data = anychart.data.set([
    ["John" , 10000, 12000],
    ["Jake" , 12000, 15000],
    ["Peter", 18000, 16000],
    ["James", 11000, 13000],
    ["Mary" , 9000, 19000]
  ]);
```

Let's set {api:anychart#column}**.column()**{api} chart type as default one and create two {api:anychart.core.cartesian.series.Column}**.column()**{api} series using our data.

{sample}BCT\_ColumnChart\_02{sample}

### 3D Series

Along with common series appearance you can enable 3D mode for column chart. Use {api:anychart#column3d}**.column3d()**{api} method to enable 3D mode. 3D column series are controlled by the {api:anychart.core.cartesian.series.Column3d}**.column()**{api} method.

```
// define data set
var data = anychart.data.set([
  ["Department Stores", 637166],
  ["Discount Stores", 721630],
  ["Men's/Women's Specialty Stores", 148662],
  ["All other outlets", 90000]
]);

// create chart
var chart = anychart.column3d();

// create series
var series = chart.column(data);
series.name("Sales 2009");
```

More information about 3D charts can be found in [3D Charts article](../Basic_Charts_Types/3D_Charts).

{sample}BCT\_ColumnChart\_13{sample}

## Axes

In AnyChart Charting Framework axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and else. All axis features are described in [Axes Basics](../Axes_and_Grids/Axis_Basics) tutorial. In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust {api:anychart.enums.Orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} methods.

Orientation depends on plot type and inversion of axes, you will find list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) tutorial.

```
  var xAxis = chart.xAxis();
  xAxis.orientation("top");
  var yAxis = chart.yAxis();
  yAxis.orientation("right");
```

Look at the demonstration of this feature in the Single-series sample:

{sample}BCT\_ColumnChart\_03{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any extra. Inversion is controlled by axis {api:anychart.scales.Linear#inverted}**scale().inverted()**{api}:

```
  var yScale = chart.yScale();
  yScale.inverted(true);
```
Look at the demonstration of Y-Axis inversion in the Single-series sample:

{sample}BCT\_ColumnChart\_04{sample}

### Minimum and Maximum

By default AnyChart calculates axis the minimum and the maximum automatically. You can see this on the scale inversion chart sample above: the minimal value of the Y-Axis is 6.000, and maximum is 21.000. You can control these values by setting {api:anychart.scales.Linear#maximum}**.maximum()**{api} and {api:anychart.scales.Linear#minimum}**.minimum()**{api} parameters of the scale:

```
  var yScale = chart.yScale();
  yScale.minimum(6000);
  yScale.maximum(20000);
```

Look at the demonstration of the maximum and the minimum values in the Single-series sample:

{sample}BCT\_ColumnChart\_05{sample}

## Padding

The special thing about column charts are the paddings between columns and column groups (in multi-series charts). To set paddings you need to use {api:anychart.charts.Cartesian#barsPadding}**.barsPadding()**{api} or {api:anychart.charts.Cartesian#barGroupsPadding}**.barGroupsPadding()**{api} parameters. Paddings are measured as a ratio to column width (columns widths are calculated automatically). For example, if you set {api:anychart.charts.Cartesian#barsPadding}**.barsPadding()**{api} to 0.5, the space between two columns will be equal to the half of each column width. If you don't want any padding between columns or groups you should set {api:anychart.charts.Cartesian#barsPadding}**.barsPadding()**{api} and {api:anychart.charts.Cartesian#barGroupsPadding}**.barGroupsPadding()**{api} to 0.  
  
  
Here is the sample of multi-series column chart with {api:anychart.charts.Cartesian#barsPadding}**.barsPadding()**{api} and {api:anychart.charts.Cartesian#barGroupsPadding}**.barGroupsPadding()**{api} set to -0.5 and 2; accordingly, negative {api:anychart.charts.Cartesian#barsPadding}**.barsPadding()**{api} leads to columns overlay and large {api:anychart.charts.Cartesian#barGroupsPadding}**.barGroupsPadding()**{api} moves column groups away from each other:

{sample}BCT\_ColumnChart\_06{sample}

## Visualization

In this section we will describe the main elements of column chart style and demonstrate how style can be applied.
  
  
The main idea of styles is to segregate visualization and data definition. Visual appearance of columns is defined using certain styles. The style can be applied to all column charts or a single column.
  
  
Styles are also used to make charts interactive: you can define how elements will be displayed by default and when hovered.

### Basic Sample

Now, let's find out how to create a simple style and apply it to the chart. As we've already mentioned, style consists of several elements, like in the structure below:

```
  var series = chart.column([
    ['John' , 10000],
    ['Jake' , 12000],
    ['Peter' , 18000],
    ['James' , 11000],
    ['Mary' , 9000]
  ]);
  series.fill("Gold");
  series.hoverStroke("darkred", 4);
  series.stroke("#56561a", 4);
  series.hatchFill("diagonalbrick", "gray");
  series.hoverHatchFill("diagonalbrick", "darkred");
```

Using such settings we've created a style that defines columns of Gold color, rather thick border, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed thick border and hatch fill colored DarkRed too.
  
  
Now we will take a sample single series chart described above and apply it to all chart elements.

{sample}BCT\_ColumnChart\_07{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.

<!--  Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips tutorials.  -->   

If you want to configure data labels and tooltips for all series - you should use {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} and {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} methods. Adding attributes with values to these methods will lead to changes in visual appearance, position and format. 

With the following example let's make data labels appear in the center of the columns, format them to show only the value corresponding to the column and tooltip to show detailed description.  

{sample}BCT\_ColumnChart\_08{sample}

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including columns.
  
  
In the sample below we take single-series data described above and mark the highest column in series with a "Star5" of the "Gold" color.
  
  
To make marker visually appealing we set its size to 12 pixels in normal state, and 22px while hovered.

```
  {
  // set x
    x: 'Peter',
    // set value
    value: 18000,
    // marker settings
    marker:{
    // marker type
      type:'star5',
      // marker color
      fill:'gold',
      // marker size
      size: 12,
      // initiate marker draw
      enabled: true
    },
    // adjust marker size on mouse over
    hoverMarker: {size: 22}
  },
```

And here is a result - it's easy to notice that Peter sold more than others and we are showing this on the chart:

{sample}BCT\_ColumnChart\_09{sample}

## Colors

AnyChart javascript charting library uses default color palette to colorize data elements of chart automatically if you have not defined special colors.

### Colorizing Elements

Now let's study how to apply different colors to different data series. To apply the color to the exact series we need to set the {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter in the {api:anychart.core.cartesian.series}**series**{api}. In the sample below we have 5 series with sample data, which we'll set in different color each. Each series represents the sales amount of a manager, quarters are categories. Here is the sample:

{sample}BCT\_ColumnChart\_10{sample}

Here's a part of the code of the sample above:

```
  // data
  var data = anychart.data.set([
    ["First quarter", 10000, 12000, 18000, 11000, 9000],
    ["Second quarter", 12000, 15000, 16000, 13000, 19000]
  ]);

  // map data for the each series
  var dataMap1 = data.mapAs({x: [0], value: [1]});
  var dataMap2 = data.mapAs({x: [0], value: [2]});
  var dataMap3 = data.mapAs({x: [0], value: [3]});
  var dataMap4 = data.mapAs({x: [0], value: [4]});
  var dataMap5 = data.mapAs({x: [0], value: [5]});

  // chart type
  var chart = anychart.column();

  // set title
  chart.title("Colorizing");
  
  // set chart legend settings
  chart.legend(true);

  // set first series data and color
  var series = chart.column(dataMap1);
  series.fill("#4A55C7");
  series.name("John");

  // other series names, data and color are to be set similarly to the former
```

Also, you might have noticed, that we enabled the {api:anychart.charts.Cartesian#legend}**legend**{api} element in this sample, which helped us to name each series differently.
  
  
Look at the individual columns we colorized in the sample below. We've got a chart with one series and predefined color for all elements. We set "#B44D4D" color for the minimum point and "Rgb(77,180,77)" for the maximum one.
  
  
As you see it is very easy to do by setting a value for the {api:anychart.graphics.vector.Fill}**fill()**{api} parameter of a point.

{sample}BCT\_ColumnChart\_11{sample}

**Important Note:**

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors. For example, instead of "Rgb(180,77,77)" you can set "#b44d4d"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

* Different ways of [setting colors](../Appearance_Settings/Color_Management) of elements

## Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. 
To see whole range of available hatch types see [Hatch Fill](../Appearance_Settings/Hatch_Fill) tutorial.
  
  
To demonstrate hatch fill feature we've edited one of the previous samples. As you see now it is completely monochrome. We've got a 5-series chart with 2 data points in each series. For every series we've applied different hatch fills by setting hatch type for the {api:anychart.charts.Cartesian#hatchFillPalette}**.hatchFill()**{api} parameter opposite to {api:anychart.graphics.vector.Fill}**fill()**{api} parameter used to colorize the series and set all series in grey color (#EEEEEE).

{sample}BCT\_ColumnChart\_12{sample}

## Samples

You can see a lot of other samples in [AnyChart Web Column Charts Gallery](http://anychart.com/products/anychart/gallery/Column_Charts/).
