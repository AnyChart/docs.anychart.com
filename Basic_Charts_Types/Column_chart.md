# Column Chart

* [Overview](#overview)
* [Chart building](#how_to_create_column_chart)
  * [Single-Series column chart](#single_series)
  * [Multi-Series column chart](#multi_categorized)
  * [Multi-Series column chart grouped by series](#multi_by_series)
  * [3D column chart](#3d_column)
  * [3D column chart clustered by Z Axis](#3d_column_clustered)
* [Axes manageme](#axes)
  * [Position](#position)
  * [Inversio](#inversion)
  * [Minimum and Maximum values control](#min_max)
* [Padding between columns and column groups](#setup_padding)
* [Using styles](#using_styles)
  * [Simple style sample](#simple_style)
  * [Application of different styles to chart elements](#several_styles)
  * [Predefined Styles](#predefined_styles)
* [Working with data labels and tooltips](#working_with_labels_and_tooltips)
* [Using markers](#using_markers)
* [Working with colors and color palettes](#colors)
  * [Setting colors to the elements](#color_setting)
  * [Color palettes](#color_palettes)
* [Working with hatch fills and hatch palettes](#hatches)
  * [Setting hatch fills to the elements](#hatch_setting)
  * [Hatch palettes](#hatch_palettes)

<a name="overview"/>
## Overview                                                                                                                             

A column chart, also known as a bar chart, is a chart with rectangular bars of lengths usually proportional to the magnitudes or frequencies of what they represent. The bars can be horizontally or vertically oriented. The column chart is vertically oriented bars. If you want to build horizontally oriented bar charts, please go to: Bar Chart Help section.

Column charts are useful for showing data changes over a period of time or for illustrating comparisons among items. In column charts, categories are typically organized along the horizontal axis and values along the vertical axis.

to top

<a name="how_to_create_column_chart"/>
## Chart building

Depending on data model and the visualization purpose the column chart may contain single series or multi series. AnyChart solution allows to build both 2D (two-dimensional) and 3D (three-dimensional) column charts.

to top

<a name="single_series"/>
### Single-Series Column Chart

Let's look at the single-series column chart created using the following data - sales of several managers in one quarter:

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


Now we need to convert this data table into JSON, this format will be accepted by AnyChart. In terms of AnyChart data model we have one series of data (Sales) with categories that hold managers names. Each point in series represents one manager and his/her sales. Converted JSON Data looks like:

```
  chart.column([
    ['John' , 10000],
    ['Jake' , 12000],
    ['Peter' , 18000],
    ['James' , 11000],
    ['Mary' , 9000]
  ]);
```

As you can see, we've created one <series> node, specified its type="Bar", added several <point> nodes and set x attribute that defines column category and y attribute that defines column value.

All we need to do to finalize column chart XML creation is to define plot_type="CategorizedVertical" in <chart> node and add axes titles. Here it is - AnyChart can now visualize your data. Look at the chart sample below and click on XML button if you want to see full configured XML.

{sample}BCT\_ColumnChart\_01{sample}

to top

<a name="multi_categorized"/>
### Multi-Series column chart

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

As we do in single series column sample above we need to convert this table into JSON, the only difference between these two samples is the fact that now we have two series of data - one series for each quarter, and we give proper names to each series:
```
 var data = new anychart.data.Set([
    ['John' , 10000, 12000],
    ['Jake' , 12000, 15000],
    ['Peter' , 18000, 16000],
    ['James' , 11000, 13000],
    ['Mary' , 9000, 19000]
  ]);
```
As we now have multi-series chart we don't want to set type for each series individually (there can be much more than two series in multi-series chart), so we add <data_plot_settings default_series_type="Bar"/> node to <chart>. Now all series in chart will be of Bar type by default.

{sample}BCT\_ColumnChart\_02{sample}

to top

<a name="axes"/>
## Axes management

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings. All axis features are described in Working with Axes tutorial, in this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

to top

<a name="position"/>
### Positioning

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust `orientation()` method of **yAxis** or **xAxis** instances.

Positioning depends on plot type and inversion of axes, you will find list of all possible positining and inversion settings in Axes Positioning and Inverting Templates.

```
  chart.xAxis(0).orientation('top');
  chart.yAxis(0).orientation('right');
```
Look at the demonstration of this feature on the Single-series sample:

{sample}BCT\_ColumnChart\_03{sample}

to top

<a name="inversion"/>
### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis **<scale>**:

```
  chart.yScale().inverted(true);
```
Look at the demonstration of Y Axis inversion on the Single-series sample:

{sample}BCT\_ColumnChart\_04{sample}

to top

<a name="min_max"/>
### Minimum and Maximum values control

By default AnyChart calculates axis minimum and maximum automatically, you can see it on the scale inversion chart sample above: minimal value on the Y Axis is 8.000, and maximum is 20.000. You can control these values by setting maximum and minimum attributes of <scale> node:

```
chart.yScale().minimum('0').maximum('50000');
```
Look at the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_ColumnChart\_05{sample}

to top

<a name="setup_padding"/>
## Padding between columns and column groups

The special thing about column charts are the paddings between columns and column groups (in multi-series charts), on the picture below you can see what are these paddings:

![](http://www.anychart.com/products/anychart/docs/users-guide/img/column-paddings.gif)

If you want to set these paddings you need to set **barsPadding()** or **barGroupsPadding()** attributes in **chart**. Paddings are measured as a ratio to column width (columns widths are calculated automatically). For example, if you set **barsPadding()** to 0.5 - the space between two columns will be equal to the half of each column width. If you want to have no padding between columns or groups you should set **barsPadding()** and **barGroupsPadding()** to 0.

Here is a sample of multi-series column chart with **barsPadding()** and **barGroupsPadding()** set to -0.1 and 2, accordingly, negative **barsPadding()** leads to columns overlay and large **barGroupsPadding()** moves column groups away from each other:

{sample}BCT\_ColumnChart\_06{sample}

to top

<a name="using_styles"/>
## Using styles

In this section we will describe main parts of column chart style and demonstrate how style can be created and applied. You will also see list of the predefined styles.

The main idea of styles is to segregate visualization and data definition. Visual appearance of columns is defined using certain styles and then you just apply the style to the certain data elements. Style can be applied to all column charts, data series or single column.

On the image below you can see what **Chart** can be decorated with: fill (including solid color fill, hatch fill, image fill and gradient fill), border and effects applied to whole column.

![](http://www.anychart.com/products/anychart/docs/users-guide/img/column_styles_diagram.gif)

Styles are also used to make charts interactive, you can define how elements will be displayed by default, when selected, when user moves cursor over an element, etc.
to top

<a name="simple_style"/>
### Simple style

Now, let's fins out how to create a simple style and apply it to the chart. As we've already told style consists of several elements, here is an JSON structure:

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
Using such settings we've created a style that defines columns of Gold color, rather thick border, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed thick border and hatch fill colored DarkRed too.

Now we will take a sample single series chart described above, define style in XML and apply it to all chart elements.

{sample}BCT\_ColumnChart\_07{sample}

to top

<a name="working_with_labels_and_tooltips"/>
## Working with data labels and tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips tutorials.

If you want to configure data labels and tooltips for all series - you should do that in **labels()** and **tooltip()** attributes of **series** method. You can tune their visual appearance, positioning and format. Let's do that in the following example: we will make data labels appear in the center of the columns, format labels so they show only the value corresponding to the column and tooltip will show detailed description.

When formatting data labels text we will use adjusted **.textFormatter** to show Y Axis value. Otherwise label displays  X Axis value.

{sample}BCT\_ColumnChart\_08{sample}

to top

<a name="using_markers"/>
## Using markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including columns.

In the sample below we will take single-series data described above and mark the highest column in series with a "Star5" of the "Gold" color.

To make marker visually appealing we will create a style, that will tell AnyChart to set marker size to 16 pixels in normal state, and make it bigger (12 pixels) when user moves cursor over an element.

```
chart.marker('Peter, 18000').type('star').size(12).fill('Gold');
```
And here is a result - Peter sold more than others and we are showing this on the chart:

{sample}BCT\_ColumnChart\_09{sample}

to top

<a name="colors"/>
## Working with colors and color palettes

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not defined special colors. But you can use your own palettes or palettes shipped with AnyChart. You can also set and apply the color to exact data series or data point.

to top

<a name="color_setting"/>
### Setting colors to the elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set **".fill"** attribute in the **series** method. In the sample below we have 5 series with sample data and we'll color each series in different color. Here is the sample:

{sample}BCT\_ColumnChart\_10{sample}

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximal one. As you see it is very easy to do by setting **".fill()"** attribute for **point** node.

{sample}BCT\_ColumnChart\_11{sample}

Important Note:

AnyChart seriously takes care of visualization and users convenience - that is why we have a number of ways to set colors, for example, instead of "Rgb(180,77,77)" you can set "HSB" or "HTMLConstant" or "#HEXCode"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this it is not all about colors in AnyChart: read more about setting colors below and in the following Help Sections:

  * Color management
to top

<a name="hatches"/>
## Working with hatch fills and hatch palettes

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings and palettes. To see the whole range of available hatch types see Hatch tutorial.

to top

<a name="hatch_setting"/>
### Setting hatch fills to the elements

To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting "hatch_type" attribute for **series**.

{sample}BCT\_ColumnChart\_12{sample}

to top


