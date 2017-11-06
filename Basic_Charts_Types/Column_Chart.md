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

A column chart, also known as a bar chart, is a chart with rectangular bars of lengths usually proportional to the 
magnitudes or frequencies of what they represent. The bars can be horizontally or vertically oriented. The column chart 
is vertically oriented bars. If you want to build horizontally oriented bar charts, please go to: [Bar Chart](Bar_Chart)
 section.
  
  
Column charts are useful for showing data changes over a period of time or for illustrating comparisons among items. In 
column charts, categories are typically organized along the horizontal axis and values along the vertical axis.

## Chart

Depending on data model and the visualization purpose the column chart may contain single series or multi series.

### Single Series

Let's look at the single-series column chart created using the following data - sales of several managers in one 
quarter:

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

Now we need to convert this data table into JSON, this format will be accepted by AnyChart. In terms of AnyChart data 
model we have one series of data (Sales) with categories that hold managers names. Each point in series represents one 
manager and his/her sales. Converted JSON Data looks like:

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

To compare two or more data rows you have to use multi-series column charts as it is shown in the sample below.
  
  
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

As we do in single series column sample above we need to convert this table into JSON, the only difference between 
these two samples is the fact that now we have two series of data - one series for each quarter, and we give proper 
names to each series:

```
    var data = anychart.data.set([
        ['John' , 10000, 12000],
        ['Jake' , 12000, 15000],
        ['Peter' , 18000, 16000],
        ['James' , 11000, 13000],
        ['Mary' , 9000, 19000]
    ]);
```

As we now have multi-series chart we don't want to set type for each series individually (there can be much more than 
two series in multi-series chart), so we add `anychart.columnChart()` to **chart**. Now all series in chart will be of 
Bar type by default.

{sample}BCT\_ColumnChart\_02{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis 
scale and settings. All axis features are described in [Axes Basics](../Axes_Grid_Scales_Trends_etc/Axis_Basics) 
tutorial, In this section we will quickly demonstrate how axis orientation can be adjusted, 
how axis scale can be inverted and how minimum and maximum values can be controlled.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust **.orientation()** parameter
 of **.yAxis()** or **.xAxis()** methods.
  
  
Orientation depends on plot type and inversion of axes, you will find list of all possible orientation and inversion 
settings in [Axes Orientation](../Axes_Grid_Scales_Trends_etc/Axis_Orientation) tutorial.

```
    chart.xAxis(0).orientation('top');
    chart.yAxis(0).orientation('right');
```

Look at the demonstration of this feature on the Single-series sample:

{sample}BCT\_ColumnChart\_03{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis **.inverted()**:

```
    chart.yScale().inverted(true);
```
Look at the demonstration of Y Axis inversion on the Single-series sample:

{sample}BCT\_ColumnChart\_04{sample}

### Minimum and Maximum

By default AnyChart calculates axis minimum and maximum automatically, you can see it on the scale inversion chart 
sample above: minimal value on the Y Axis is 6.000, and maximum is 21.000. You can control these values by setting 
**.maximum()** and **.minimum()** parameters of the scale:

```
    chart.yScale().minimum('0').maximum('50000');
```

Look at the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_ColumnChart\_05{sample}

## Padding

The special thing about column charts are the paddings between columns and column groups (in multi-series charts), on 
the picture below you can see what are these paddings:

![](https://anychart.com/products/anychart/docs/users-guide/img/column-paddings.gif)

If you want to set these paddings you need to set **.barsPadding()** or **.barGroupsPadding()** parameters in 
**chart**. Paddings are measured as a ratio to column width (columns widths are calculated automatically). For 
example, if you set **.barsPadding()** to 0.5 - the space between two columns will be equal to the half of each column 
width. If you want to have no padding between columns or groups you should set **.barsPadding()** and 
**.barGroupsPadding()** to 0.
  
  
Here is a sample of multi-series column chart with **.barsPadding()** and **.barGroupsPadding()** set to -0.1 and 2, 
accordingly, negative **.barsPadding()** leads to columns overlay and large **.barGroupsPadding()** moves column groups 
away from each other:

{sample}BCT\_ColumnChart\_06{sample}

## Visualization

In this section we will describe main parts of column chart style and demonstrate how style can be applied.
  
  
The main idea of styles is to segregate visualization and data definition. Visual appearance of columns is defined 
using certain styles. Style can be applied to all column charts or single column.
  
  
On the image below you can see what **Chart** can be decorated with: fill (including solid color fill, hatch fill, 
image fill and gradient fill), border and effects applied to whole column.

![](https://anychart.com/products/anychart/docs/users-guide/img/column_styles_diagram.gif)

Styles are also used to make charts interactive, you can define how elements will be displayed by default and when user 
moves cursor over an element.

### Basic Sample

Now, let's find out how to create a simple style and apply it to the chart. As we've already told style consists of 
several elements, here is a structure:

```
    chart.column([
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
    chart.draw();
```

Using such settings we've created a style that defines columns of Gold color, rather thick border, hatch filled with 
DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it will be 
highlighted with a DarkRed thick border and hatch fill colored DarkRed too.
  
  
Now we will take a sample single series chart described above and apply it to all chart elements.

{sample}BCT\_ColumnChart\_07{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.
  
  
If you want to configure data labels and tooltips for all series - you should do that in **.labels()** and 
**.tooltip()** methods of **series**. You can tune their visual appearance, positioning and format. Let's do 
that in the following example: we will make data labels appear in the center of the columns, format labels so they show 
only the value corresponding to the column and tooltip will show detailed description.
  
  
When formatting data labels text we will use adjusted **.textFormatter()** to show Y Axis value. Otherwise label 
displays  X Axis value.

{sample}BCT\_ColumnChart\_08{sample}

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. 
AnyChart allows to add markers to any data element including columns.
  
  
In the sample below we will take single-series data described above and mark the highest column in series with a "Star5"
 of the "Gold" color.
  
  
To make marker visually appealing we will create a style, that will tell AnyChart to set marker size to 12 pixels in 
normal state, and make it bigger (12 pixels) when user moves cursor over an element.

```
    {x: 'Peter', value: 18000, marker:{type:'star5', fill:'gold', size: 12, enabled: true}, hoverMarker: {size: 22}}
```
And here is a result - Peter sold more than others and we are showing this on the chart:

{sample}BCT\_ColumnChart\_09{sample}

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not defined 
special colors.

### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we 
need to set **.fill()** parameters in the **series**. In the sample below we have 5 series with sample data and 
we'll color each series in different color. Here is the sample:

{sample}BCT\_ColumnChart\_10{sample}

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined 
color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximal one. 
As you see it is very easy to do by setting **".fill()"** method for a **point**.

{sample}BCT\_ColumnChart\_11{sample}

 **Important Note:**
AnyChart seriously takes care of visualization and users convenience - that is why we have a number of ways to set 
colors, for example, instead of "Rgb(180,77,77)" you can set "HSB" or "HTMLConstant" or "#HEXCode"- and the color will 
be the same. Depending on your system/site/application design you may need - and use - any of this color setting 
methods. But even this it is not all about colors in AnyChart. Read more about setting colors below and in the 
following Help Sections:
  * [Color management](../General_Appearance_Settings/Color_Management)

## Hatch Fills

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard 
to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart 
has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who 
are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings. To
 see the whole range of available hatch types see [Hatch](../General_Appearance_Settings/Hatch_Fill) tutorial.
  
  
To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have 
chart with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting 
**.hatchType()** parameter for series.

{sample}BCT\_ColumnChart\_12{sample}
