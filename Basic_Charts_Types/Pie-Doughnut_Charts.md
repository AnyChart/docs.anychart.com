# Pie and Donut Chart
                                                               
* [Overview](#overview)
* [Chart](#chart)
  * [Pie Chart](#pie_chart)
  * [Doughnut Chart](#doughnut_chart)
* [Slices Sorting](#slices_sorting)
* [Exploded Slices](#exploded_slices)
* [Visualization](#visualization)
  * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)
* [Hatch Fills](#hatch_fills)

## Overview

Data that is arranged in a one column or an only row can be plotted on a pie chart. The data points in a pie chart are displayed as a percentage of the whole pie.

Use a pie chart when:

You only have one data series that you want to plot.
None of the values that you want to plot are negative.
Almost none of the values that you want to plot are zero values.
You've got no more than seven categories.
The categories represent parts of the whole.

Donut chart are functionally identical to pie charts, the only difference is that the first one has a hole in the middle (which may be used, for example, as a place for the chart name).

## Chart

Pie chart may contain only single-series data and can be either ordinary pie chart or doughnut chart.

### Pie Chart

Let's see pie chart created using the following data - sales of ACME Corp. apparel through different retail channels in one year:

<table width="328" border="1" class="dtTABLE">
<tbody><tr>
<th width="210"><b>Retail Channel</b></th>
<th width="102"><b>Sales</b></th>
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
</tbody></table>

Now we need to convert this data table into js to make it acceptable by AnyChart. In terms of AnyChart data model we’ve got one series of data (Sales) with categories that hold Retail channels names. The data in JavaScript format looks like:

```
  chart = anychart.pieChart([
    ['Department Stores', 637166],
    ['Discount Stores', 721630],
    ['Men\'s/Women\'s Stores', 148662],
    ['Juvenile Specialty Stores', 78662],
    ['All other outlets', 90000]
  ]);
```

As you can see, we've created {api:anychart.charts.Pie}**anychart.pieChart()**{api} parameter. First column defines category and another one defines slice value.

Here it is - AnyChart can now visualize your data. Look at the chart sample below and click on it to see preview and full configured data in the playground.

{sample}BCT\_PieDonutChart\_01{sample}

### Doughnut Chart

Donut chart is almost the same as Pie chart, the only difference is in appearance: Donut charts are with holes inside. All you need to do to switch between these two types is to add/delete  {api:anychart.charts.Pie#innerRadius}**'chart.innerRadius()'**{api}

```
  chart.innerRadius('30%');
```

And here is the same data as above in the form of a Donut chart:

{sample}BCT\_PieDonutChart\_02{sample}

## Slices Sorting

In Pie/Donut charts, it is possible to sort the series by ascending or descending. This feature is controlled using {api:anychart.charts.Pie#sort}**.sort()**{api} parameter. In the sample below three pie charts with identical series are shown, first isn't sorted, the second is sorted ascending and the third - descending.

{sample :width 690 :height 230}BCT\_PieDonutChart\_03{sample}


## Exploded Slices

You can set pie and donut chart slices to be exploded when user clicks on it and you can set certain slices to be exploded by default.
  
  
{api:anychart.charts.Pie#explode}**Explode**{api} parameter defines how far slices are exploded. To disable exploding, set {api:anychart.charts.Pie#explode}**explode**{api} value to 0.

```
    chart.explode(30);
```

To explode only one slice set an “explode” value to a point:

```
    chart.explodeSlice(0, true); 
```
The first parameter is the number of the slice and the second one is boolean responsible for activating the explosion. Note that number of the slice is to be counted from 0.

Sample chart below is exploded by default, you can launch the live sample and click on slices to move them back to the center.

{sample}BCT\_PieDonutChart\_04{sample}

Also it's possible to define explosion with the data itself if you set the data as an object:


```
    chart = anychart.pieChart([
        {'name':'Department Stores', 'value': 637166, 'exploded': true},
        ['Discount Stores', 721630],
        ['Men\'s/Women\'s Stores', 148662],
        ['Juvenile Specialty Stores', 78662],
        ['All other outlets', 90000]
    ]);
```

{sample}BCT\_PieDonutChart\_05{sample}


## Visualization

In this section we will describe the main parts of a pie chart style and demonstrate how to apply a style.

Also, you can use styles to make charts interactive: you can define each element’s appearance and behavior by default, while hovered, etc.


 <!--More information about these features can be found in Interactivity tutorial.-->

### Basic Sample

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is a structure:

```
    chart.fill('Gold')
        .hoverHatchFill('diagonalbrick', 'darkred')
        .stroke('4 Rgb(86,86,26)')
        .hoverStroke('4 darkred')
        .hatchFill('diagonalbrick', 'gray');
```

Using such settings we've created a style that defines slices of gold color with rather thick border, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user moves cursor over an element its border and hatch fill will be highlighted with dark red color.

{sample}BCT\_PieDonutChart\_06{sample}

### Aquastyle

Our new 7.4.0 release of AnyChart suggests this complete style. We used soft colors and made the chart more like 3D using gradients. To set this style just add this stroke to your code:

```
     chart.fill('aquastyle');
```

That's how a chart with Aquastyle set looks like: 

{sample}BCT\_PieDonutChart\_07{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.
<!--Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.-->
To configure data labels and tooltips for all series use {api:anychart.charts.Pie#labels}**.labels()**{api} and {api:anychart.charts.Pie#tooltip}**.tooltip()**{api} methods. These will help you to adjust visual appearance, positioning and format.

Let's do that with the following example: we will make data labels to appear inside of the slices, format labels so they show only the percentage corresponding to the slices and tooltips to show detailed description.


When formatting tooltips, we use  {api:anychart.core.ui.Tooltip#contentFormatter}**.contentFormatter()**{api} to adjust source of content and visual appearance. To control labels’ position we may use  {api:anychart.core.ui.Label#position}**.position()**{api} parameter. Here is a sample of two charts with the same data and different labels positions.

{sample}BCT\_PieDonutChart\_08{sample}
<!--
Related Help Topics:

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide:Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label_settings> nodes.
--><!--
<a name="label_connectors"/>
### Working with labels connectors

If you want pie slices labels to be shown outside of the chart, connected with slices using a smart non overlapping lines - you should change labels mode to "Outside" and configure connector line:

XML Syntax
XML Code
Plain code
01
<pie_series>
02
  <label_settings mode="Outside" text_align="Center" />
03
  <connector enabled="True" color="Black" opacity="1" thickness="1" />
04
</pie_series>
Here is a sample of Pie chart with connectors:

Live Sample:  Sample Pie chart - Working with labels connectors

And here is a sample multi-series chart with connectors:

Live Sample:  Sample Pie chart - Working with multiseries labels connectors
--><!--
<a name="using_markers"/>
## Using markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including slices.

In the sample below we will take single-series data described above and mark the highest slice in series with a "Star5" of the "Gold" color.

To make marker visually appealing we will create a style, that will tell AnyChart to set marker size to 16 pixels in normal state, and make it bigger (22 pixels) when user moves cursor over an element.

Marker style "myMarker":

XML Syntax
XML Code
Plain code
01
<marker_style name="myMarker" color="Gold">
02
  <marker type="Star5" size="16" />
03
  <states>
04
    <hover>
05
      <marker size="22" />
06
    </hover>
07
  </states>
08
</marker_style>
To apply marker to the certain we need to create <marker> sub-node in <point> and add 
<marker enabled="True" style="myMarker"/>

XML Syntax
XML Code
Plain code
01
<point name="Peter" y="18000">
02
  <marker enabled="True" style="myMarker" />
03
</point>
And here is a result - the best retail channel for ACME Corp. is Discount Stores and we show this on the chart:

Live Sample:  Sample Pie chart - Working with markers

Related help topics:

You can read more about working with markers in Markers tutorial.
Full reference of marker style can be found in XMLReference, particularly <marker_style> node.
-->

## Colors

AnyChart uses default colors to colorize data elements of a chart automatically if you have not defined special colors, though it allows you to specify colors for the points.

### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set the {api:anychart.charts.Pie#fill}**.fill()**{api} parameter. In the sample below there are some series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_PieDonutChart\_09{sample}

## Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fills, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. To see whole range of available hatch types see [Hatch](../Appearance_Settings/Color_Management) tutorial tutorial.

To demonstrate hatch fill feature we've prepared the following sample. We have chart with 5-series with 2 data points in each. For every series we've applied different hatch fills by setting a hatch type for{api:anychart.charts.Pie#hatchFill}**.hatchFill()**{api} parameter.

That’s how we did it in our code:

```
chart = anychart.pieChart([
        {x: 'P1', value: 232, hatchFill: 'diagonalcross'},
        {x: 'P2', value: 224, hatchFill: 'zigzag'},
        {x: 'P3', value: 252, hatchFill: 'horizontal'},
        {x: 'P4', value: 219, hatchFill: 'vertical'},
        {x: 'P5', value: 169, hatchFill: 'dashedbackwarddiagonal'},
        {x: 'P6', value: 217, hatchFill: 'grid'},
        {x: 'P7', value: 175, hatchFill: 'dashedforwarddiagonal'},
        {x: 'P8', value: 199, hatchFill: 'dashedhorizontal'},
        {x: 'P9', value: 297, hatchFill: 'plaid'},
        {x: 'P10', value: 317, hatchFill: 'weave'}
    ]);
```

{sample}BCT\_PieDonutChart\_10{sample}
