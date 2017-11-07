# Bar Chart

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

A bar chart is a chart with rectangular bars of lengths usually proportional to the magnitudes or frequencies of what they represent. Although the bars can be horizontally or vertically oriented, we call vertically oriented charts as Column charts and study them in a [Column Chart](Column_Chart) section.
  
  
Bar charts are useful for showing data changes over a period of time or for illustrating comparisons among items. In bar charts, categories are typically organized along the vertical axis and values along the horizontal axis.
  
  
Think of using a bar chart when:
* The axis labels are long.
* The values that are shown are durations.

## Chart

Depending on the data model and visualization purpose the bar chart may be single- or multi-series.

### Single-Series

Let's see single series bar chart created using the following data - sales of ACME Corp. made through different retail channels in one year:

<table width="328" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="210"><b>Retail Channel</b></th>
<th width="102"><b>Sales  </b></th>
</tr>
<tr>
<td>Department Stores</td>
<td>$637.166</td>
</tr>
<tr>
<td>Discount Stores</td>
<td> $721.630</td>
</tr>
<tr>
<td>Men's/Women's Specialty Stores</td>
<td> $148.662</td>
</tr>
<tr>
<td>Juvenile Specialty Stores</td>
<td> $78.662</td>
</tr>
<tr>
<td>All other outlets</td>
<td> $90.000</td>
</tr>
</tbody>
</table>

Now we need to convert this data. In terms of AnyChart we have one series of data (Sales) with categories that hold Retail channels' names. Each bar in series represents sales amount made through  the channel this bar belongs with. Converted data looks like this:

```
    var data = anychart.data.set([
        ['Department Stores1', 637166],
        ['Discount Stores', 721630],
        ['Men\'s/Women\'s Specialty Stores', 148662],
        ['All other outlets', 90000]
    ]);
    chart = anychart.barChart(data);
    chart.bar(data);
```

As you can see, we've used {api:anychart.core.cartesian.series.Bar}**.barChart()**{api} method, set channel's names into **first column** to define bar category and values of sales' amount into **second column**.

{sample}BCT\_BarChart\_01{sample}

### Multi-series

To compare two or more data rows it's better to use multi-series bar charts as it is shown in the sample below.

Let's compare year 2003 sales to year 2004 sales:

<table width="536" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="227"><b>Retail Channel</b></th>
<th width="141"><b>Year 2003 Sales</b></th>
<th width="141"><b>Year 2004 Sales</b></th>
</tr>
<tr>
<td>Department Stores</td>
<td>$637.166</td>
<td>$737.166</td>
</tr>
<tr>
<td>Discount Stores</td>
<td> $721.630</td>
<td>$537.166</td>
</tr>
<tr>
<td>Men's/Women's Specialty Stores</td>
<td> $148.662</td>
<td>$188.662</td>
</tr>
<tr>
<td>Juvenile Specialty Stores</td>
<td> $78.662</td>
<td>$178.662</td>
</tr>
<tr>
<td>All other outlets</td>
<td> $90.000</td>
<td>$89.000</td>
</tr>
</tbody>
</table>

As we do in single-series bar sample above we need to convert this data, the only difference between these two samples is the fact that now we have two series of data - one series for each year, so we give proper names to each series:

```
    var data = anychart.data.set([
        ['Department Stores1', 637166, 737166],
        ['Discount Stores', 721630, 537166],
        ['Men\'s/Women\'s Specialty Stores', 148662, 188662],
        ['Juvenile Specialty Stores', 78662, 178662],
        ['All other outlets', 90000, 89000]
    ]);
    var Sales2003 = data.mapAs({x: [0], value: [1]});
    var Sales2004 = data.mapAs({x: [0], value: [2]});
    chart = anychart.barChart();
    var series;
    series = chart.bar(Sales2003);
    series = chart.bar(Sales2004);
```

As we now have multi-series chart we don't want to set **type** for each series individually (there can be much more than two series in multi-series chart), so we add {api:anychart.core.cartesian.series.Bar}**anychart.barChart()**{api} method to **chart**. Now all series in chart will be **Bar** type by default.

{sample}BCT\_BarChart\_02{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and else. In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust orientation with {api:anychart.core.axes.Linear#orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} methods.


Position depends on plot type and inversion of axes, you will find the list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) templates.

```
    chart.xAxis(0).orientation('right');
    chart.yAxis(0).orientation('top');
```

And here is the demonstration of this feature in the Single-series sample:

{sample}BCT\_BarChart\_03{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any extra. Inversion is controlled by axis **scale().inverted()**:

```
    chart.yScale().inverted(true);
```

{sample}BCT\_BarChart\_04{sample}

### Minimum and Maximum

AnyChart calculates axis minimum and maximum automatically. You can see this on the scale inversion chart sample above: the minimal value of the Y-Axis is 0.0, and the maximum is 800.000. You can control these values by setting **.maximum()** and **.minimum()**.:

```
    chart.yScale().minimum('-200000').maximum('800000')
```

And here is the demonstration of maximum and minimum values in the Single-series sample:

{sample}BCT\_BarChart\_05{sample}

## Padding

The special thing about bar charts is the padding between a bar and a group of bars (in multi-series charts). You can see what are these paddings in the picture below :

![](https://anychart.com/products/anychart/docs/users-guide/img/horz_bar_padding.jpg)

If you want to set these paddings you need to set {api:anychart.core.cartesian.series.Base#xPointPosition}**xPointPosition()**{api} in **bar_series**. Paddings are measured as a ratio to bar width (bars widths are calculated automatically). For example, if you set **xPointPosition to 0.5** - the space between two bars will be equal to the half of each bar width. If you want to have no padding between bars set **xPointPosition** to 0.

Here is a sample of multi-series bar chart with **xPointPosition** set to 0.5.

{sample}BCT\_BarChart\_12{sample}

## Visualization

In this section we will describe the main elements of a bar chart style and demonstrate how a style can be applied.

The main idea of styles is to segregate visualization and data definition. Visual appearance of bars is defined using certain styles and then you just apply the style to the certain data elements. The style can be applied to a data series or a single bar.

On the image below you can see what a bar_style consists of: a variety of fill types, border and effects applied to whole bar.

![](https://anychart.com/products/anychart/docs/users-guide/img/horz_bar_style_diagram.jpg)

Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when hovered, etc.

### Basic Sample

Now, let's look how to apply a simple style to the chart. As we've already said, a style consists of several elements, here is the javascript structure:

```
    chart.bar(data)
        .fill('Gold')
        .hoverStroke("darkred", 4)
        .stroke('#56561a', 4)
        .hatchFill('diagonalbrick', 'gray')
        .hoverHatchFill('diagonalbrick', 'darkred');
```

Using such settings we've created a style that colors bars in Gold, makes the border rather thick, fills hatch with DiagonalBrick and a couple of effects. Also, we've defined that when the element is hovered it will be highlighted with the dark red thick border and hatch fill colored dark red too.

Now let's apply these setting to the sample shown above.

{sample}BCT\_BarChart\_06{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.  

If you want to configure data labels and tooltips for all series - you should use {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} and {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} methods. Adding attributes with values to these methods, you can change visual appearance, position and format of the same-named elements.

With the following example let's make data labels appear to the right from the bars, format them to show only the value corresponding to the bar and force tooltips to show detailed description.
    
When formatting data labels' text we use {api:anychart.core.ui.LabelsFactory#textFormatter}**.textFormatter**{api} to choose the column we need to get information from.

{sample}BCT\_BarChart\_07{sample}
<!--
* **Related Help Topics:**

Learn more about labels and tooltips in Labels and tooltips 
Full Keywords reference and formatting guide: Labels and tooltips
-->

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including bars.
    
In the sample below we take single-series data described above and mark the biggest bar in series with a **"Star5"** of the **"Gold"** color.
  
To make the marker more visually appealing we set its size to 12px.

```
    {x: 'Men\'s/Women\'s Specialty Stores', value: 148662, marker:{type:'star5', fill:'gold', size: 12, enabled: true}, hoverMarker: {size: 22}}
```

And here is a result - the best retail channel for ACME Corp. is Discount Stores and can be easily seen on this chart.

{sample}BCT\_BarChart\_08{sample}

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically if you have not defined special colors.

### Colorizing Elements

Now let's study how to apply different colors to different data series. To apply the color to the exact series we need to set the {api:anychart.graphics.vector.Fill}**.fill()**{api} parameter in the {api:anychart.core.cartesian.series}**series**{api}. In the sample below we have 5 series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_BarChart\_09{sample}

Look at the individual points we colorized in the sample below. We've got a chart with one series and predefined color for all elements. We set "Rgb(180,77,77)" color for the minimum point and "Rgb(77,180,77)" for the maximum one.
As you see it is very easy to do by setting a value for the {api:anychart.graphics.vector.Fill}**fill()**{api} parameter of a point.

{sample}BCT\_BarChart\_10{sample}

**Important Note:**

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors. For example, instead of "RGB(240,248,255)" you can set "HSB(208,100,97)", or "AliceBlue", or "#F0F8FF"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

* Different ways of [setting colors](../Appearance_Settings/Color_Management) of elements

## Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. 
To see whole range of available hatch types see [Hatch Fill](../Appearance_Settings/Hatch_Fill) tutorial.
  
To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart a with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting hatch type for the {api:anychart.charts.Cartesian#hatchFillPalette}**.hatchFill()**{api} parameter.

{sample}BCT\_BarChart\_11{sample}