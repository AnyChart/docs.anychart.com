#Bar Chart

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

A bar chart, is a chart with rectangular bars of lengths usually proportional to the magnitudes or frequencies of what 
they represent. Although the bars can be horizontally or vertically oriented, we call vertically oriented charts - 
column charts and study them in a [Column Chart](Column_Chart) section.
  
  
Bar charts are useful for showing data changes over a period of time or for illustrating comparisons among items. In 
bar charts, categories are typically organized along the vertical axis and values along the horizontal axis.
  
  
Consider using a bar chart when:
* The axis labels are long.
* The values that are shown are durations.

## Chart

Depending on data model and the visualization purpose the bar chart may contain single series or multi series.

### Single Series

Let's see single series bar chart created using the following data - sales of ACME Corp. apparel through different 
retail channels in one year:

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

Now we need to convert this data. In terms of AnyChart data model we have one series of data (Sales) with categories
 that hold Retail channels names. Each point in series represents one channels and sales amount through this channel
 . Converted data looks like:

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

As you can see, we've used method **.barChart()**, set name's attribute into **first column** to define bar category 
and **second column** defines bar value.

{sample}BCT\_BarChart\_01{sample}

### Multi-series

To compare two or more data rows you have to use multi-series bar charts as it shown in the sample below.

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

As we do in single-series bar sample above we need to convert this table into JSON, the only difference between these 
two samples is the fact that now we have two series of data - one series for each year, and we give proper names to 
each series:

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

As we now have multi-series chart we don't want to set **type** for each series individually (there can be much more 
than two series in multi-series chart), so we add **anychart.barChart()** method to **chart**. Now all series in 
chart will be **Bar** type by default.

{sample}BCT\_BarChart\_02{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis 
scale and settings and many more. All axis features are described in Axes Basics , Axes Scales and Extra Axes tutorial, 
in this section we will quickly demonstrate how axis orientation can be adjusted, how axis scale can be inverted and how 
minimum and maximum values can be controlled.

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust **.orientation()** 
parameter of **.yAxis()** or **.xAxis()** methods.

Positioning depends on plot type and inversion of axes, you will find list of all possible orientation and 
inversion settings in [Axes Orientation](../Axes_Grid_Scales_Trends_etc/Axis_Orientation) Templates.

```
    chart.xAxis(0).orientation('right');
    chart.yAxis(0).orientation('top');
```

And here is the demonstration of this feature on the Single-series sample:

{sample}BCT\_BarChart\_03{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis **scale().inverted()**:

```
    chart.yScale().inverted(true);
```

{sample}BCT\_BarChart\_04{sample}

### Minimum and Maximum

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale inversion chart 
sample above: minimal value on the Y Axis is 0.0, and maximum is 800.000. You can control these values by setting 
**.maximum()** and **.minimum()** parameters of scale method:

```
    chart.yScale().minimum('-200000').maximum('800000')
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_BarChart\_05{sample}

## Padding

The special thing about bar charts are the paddings between bars and bar groups (in multi-series charts), on the 
picture below you can see what are these paddings:

![](https://anychart.com/products/anychart/docs/users-guide/img/horz_bar_padding.jpg)

If you want to set these paddings you need to set **PointPosition** in **bar_series**. Paddings are measured as a 
ratio to bar width (bars widths are calculated automatically). For example, if you set **xPointPosition to 0.5** - the 
space between two bars will be equal to the half of each bar width. If you want to have no padding between bars 
**xPointPosition** to 0.

Here is a sample of multi-series bar chart with **xPointPosition** set to 0.5.

{sample}BCT\_BarChart\_12{sample}

## Visualization

In this section we will describe main parts of bar chart style and demonstrate how style can be applied.

The main idea of styles is to segregate visualization and data definition. Visual appearance of bars is defined using 
certain styles and then you just apply the style to the certain data elements. Style can be applied to data series or 
single bar.

On the image below you can see what bar_style consists of: fill (including solid color fill, hatch fill, image fill and
 gradient fill), border and effects applied to whole bar.

![](https://anychart.com/products/anychart/docs/users-guide/img/horz_bar_style_diagram.jpg)

Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when user 
moves cursor over an element, etc.

### Basic Sample

Now, let's look how to apply a simple style to the chart. As we've already said style consists of several elements, 
here is an java structure:

```
    chart.bar(data)
        .fill('Gold')
        .hoverStroke("darkred", 4)
        .stroke('#56561a', 4)
        .hatchFill('diagonalbrick', 'gray')
        .hoverHatchFill('diagonalbrick', 'darkred');
```

Using such settings we've created a style that defines bars of Gold color, rather thick border, hatch filled with 
DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it will be 
highlighted with a DarkRed thick border and hatch fill colored DarkRed too.

Now we will take a sample single-series chart described above, define style in JSON.

{sample}BCT\_BarChart\_06{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and 
tuning visual appearance for them can be found in Labels and tooltips tutorials.
  
  
If you want to configure data labels and tooltips for all series - you should do that in **.labels()** and **.tooltip
()** methods. You can tune their visual appearance, positioning and format. Let's do that in the following example: 
we will make data labels appear to the right of the bars, also, we will format labels so they show only the value 
corresponding to the bar and tooltip will show detailed description.
  
  
When formatting data labels text we will use **.textFormatter** to choose the column we need information from. 

{sample}BCT\_BarChart\_07{sample}
<!--
* **Related Help Topics:**

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide: Labels and tooltips
-->

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. 
AnyChart allows to add markers to any data element including bars.
  
  
In the sample below we will take single-series data described above and mark the biggest bar in series with a "Star5" 
of the "Gold" color.
  
To make marker visually appealing we will create a style, that will tell AnyChart to set marker size to 12 pixels in 
normal state, and make it bigger (12 pixels) when user moves cursor over an element.

```
    {x: 'Men\'s/Women\'s Specialty Stores', value: 148662, marker:{type:'star5', fill:'gold', size: 12, enabled: true}, hoverMarker: {size: 22}}
```

And here is a result - the best retail channel for ACME Corp. is Discount Stores and we show this on the chart

{sample}BCT\_BarChart\_08{sample}

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define 
special colors.

### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we 
need to set **".fill"** parameter in the **series**. In the sample below we have 5 series with sample data and 
we'll color each series to different color. Here is the sample:

{sample}BCT\_BarChart\_09{sample}

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined 
color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximum one. 
As you see it is very easy to do by setting **fill()** parameter of a point.

{sample}BCT\_BarChart\_10{sample}

**Important Note:**

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set 
colors, for example, instead of "RGB(240,248,255)" you can set "HSB(208,100,97)" or "AliceBlue" or "#F0F8FF"- and the 
color will be the same. Depending on your system/site/application design you may need - and use - any of this color 
setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below 
and in the following Help Sections:

* Different ways of [setting colors](../General_Appearance_Settings/Color_Management) of elements

## Hatch Fills

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard 
to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart 
has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who 
are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings. 
To see whole range of available hatch types see [Hatch Fill](../General_Appearance_Settings/Hatch_Fill) tutorial.
  
To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have 
chart with 5 series with 3 data points in each. For every series we've applied different hatch fill types.

{sample}BCT\_BarChart\_11{sample}