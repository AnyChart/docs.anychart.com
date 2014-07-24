# Pie and Donut Chart
                                                               
* [Overview](#overview)
* [Chart building](#how_to_create_pie_chart)
  * [Single-Series Pie chart](#single_series)
  * [Single-Series Donut chart](#single_series_doughnut)
* [Slices Sorting](#sorting)
* [Exploded Slices](#exploded)
* [Using styles](#using_styles)
  * [Simple style sample](#simple_style)
  * [Application of different styles to chart elements](#several_styles)
* [Working with data labels and tooltips](#working_with_labels_and_tooltips)
  * [Working with labels connectors](#label_connectors)
* [Using markers](#using_markers)
* [Working with colors and color palettes](#colors)
  * [Setting colors to the elements](#color_setting)
  * [Color palettes](#color_palettes)
* [Working with hatch fills and hatch palettes](#hatches)
  * [Setting hatch fills to the elements](#hatch_setting)
  * [Hatch palettes](#hatch_palettes)

<a name="overview"/>
## Overview

Data that is arranged in one column or row only can be plotted in a single series pie chart. Single series pie charts show the size of items in one data series, proportional to the sum of the items. The data points in a pie chart are displayed as a percentage of the whole pie.

Consider using a single series pie chart when:

* You only have one data series that you want to plot.
* None of the values that you want to plot are negative.
* Almost none of the values that you want to plot are zero values.
* You don't have more than seven categories.
* The categories represent parts of the whole.

Doughnut chart are functionally identical to pie charts, the only difference is that it has a hole in the middle.

<a name="how_to_create_pie_chart"/>
## Chart building

Depending on data model and the visualization purpose the pie chart may contain single series or multi series. If only one series is supplied - a chart will be single-series, several series supplied - chart will be multi-series.

<a name="single_series"/>
### Single-Series Pie Chart

Let's see single series pie chart created using the following data - sales of ACME Corp. apparel through different retail channels in one year:

<table width="328" border="1" class="dtTABLE">
<tbody><tr>
<th width="210">Retail Channel</th>
<th width="102">Sales  </th>
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
Now we need to convert this data table into JSON, this format will be accepted by AnyChart. In terms of AnyChart data model 
we have one series of data (Sales) with categories that hold Retail channels names. Converted JSON Data looks like:
```
 chart = anychart.pieChart([
    ['Department Stores', 637166],
    ['Discount Stores', 721630],
    ['Men\'s/Women\'s Stores', 148662],
    ['Juvenile Specialty Stores', 78662],
    ['All other outlets', 90000]
  ]);
```

As you can see, we've created **anychart.pieChart()** node. First column defines category and other one defines slice value.

Here it is - AnyChart can now visualize your data. Look at the chart sample below and click on it to see preview and full configured JSON in playground.

{sample}BCT\_PieDoughnutChart\_01{sample}

<a name="single_series_doughnut"/>
### Single Series Doughnut Chart

Donut chart is all the same as Pie chart, and all you need to do to switch to it: add **'chart.innerRadius()'**
```
  chart.innerRadius('30%');
```
And here is the same data as above, displayed as a Single Series Doughnut chart:

{sample}BCT\_PieDoughnutChart\_02{sample}

<a name="sorting"/>
## Slices Sorting

If you want you can sort the series in Pie and Donut Chart - Ascending or Descending, this feature is controlled using **sort** attribute. In the sample below three pie charts with identical series are shown, first isn't sorted, the second is sorted ascending and the third - descending.

{sample}BCT\_PieDoughnutChart\_03{sample}

<a name="exploded"/>
## Exploded Slices

You can set pie and donut chart slices to be exploded when user clicks on it and you can set certain slices to be exploded by default.

To enable/disable and tune slices exploding use **explode** attributes. Explode attribute defines how far slices are exploded, this value is set in px.

```
  chart.explode(30);
```

Te explode only one slice set exploded to a point:

```
  chart.explodeSlice(0, true);
```
Sample chart below is exploded by default, you can launch the live sample and click on slices to move them in place.

{sample}BCT\_PieDoughnutChart\_04{sample}

<a name="using_styles"/>
## Using styles

In this section we will describe main parts of pie chart style and demonstrate how style can be applied. 

Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when user moves cursor over an element, etc. <--More information about these features can be found in Interactivity tutorial.-->

<a name="simple_style"/>
### Simple style

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is an JSON structure:

XML Syntax
XML Code
Plain code
01
<pie_style name="style1">
02
  <fill type="Solid" color="Gold" opacity="1" />
03
  <border thickness="4" color="Rgb(86,86,26)" />
04
  <hatch_fill enabled="True" type="DiagonalBrick" color="Gray" />
05
  <effects>
06
    <bevel enabled="true" highlight_opacity="0.4" shadow_opacity="0.4" distance="2" />
07
    <drop_shadow enabled="true" opacity="0.3" />
08
  </effects>
09
  <states>
10
    <hover>
11
      <border color="DarkRed" thickness="6" />
12
      <hatch_fill color="DarkRed" />
13
    </hover>
14
  </states>
15
</pie_style>
Using such settings we've created a style that defines slices of Gold color, rather thick border, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed thick border and hatch fill colored DarkRed too.

Now we will take a sample single-series chart described above, define style in XML and apply it to all chart elements, using <pie_series style="style1"/>

Live Sample:  Sample Simple Style for Pie chart

<a name="several_styles"/>
### Application of different styles to chart elements

Now we will demonstrate how to apply different styles to different series and slices. To do it we will use multi-series sample that was demonstrated above and create two more styles: "style2" and "style3", both inherited from the "style1".

"style1" will be applied to "Year 2003 " series, "style2" will be applied to "Year 2004" series and "style3" will be applied to the pie with a highest value (Note - we will find highest value and set its style manually in this sample. But with AnyChart it is possible to do that automatically using Thresholds, read more about it in Thresholds tutorial).

So - the definitions of the styles are:

Style 1:

XML Syntax
XML Code
Plain code
01
<pie_style name="style1">
02
  <fill type="Solid" color="Gold" opacity="1" />
03
  <border thickness="4" color="Rgb(86,86,26)" />
04
  <hatch_fill enabled="True" type="DiagonalBrick" color="Gray" />
05
  <effects>
06
    <bevel enabled="true" highlight_opacity="0.4" shadow_opacity="0.4" distance="2" />
07
    <drop_shadow enabled="true" opacity="0.3" />
08
  </effects>
09
  <states>
10
    <hover>
11
      <border color="DarkRed" thickness="6" />
12
      <hatch_fill color="DarkRed" />
13
    </hover>
14
  </states>
15
</pie_style>
Style 2:
This style is inherited from "style1" and the only thing changed is a color of the fill: from "Gold" to "Rgb(180,180,255)". We've used styles inheritance to avoid duplication of the common settings.

XML Syntax
XML Code
Plain code
01
<pie_style name="style2" parent="style1">
02
  <fill color="Rgb(180,180,255)" />
03
</pie_style>
Style 3:
This style is also inherited from "style1" and the new color of the fill is "Rgb(255,170,170)". And again we've used styles inheritance.

XML Syntax
XML Code
Plain code
01
<pie_style name="style3" parent="style1">
02
  <fill color="Rgb(255,170,170)" />
03
</pie_style>
And, as a result here is an example of these styles usage:

Live Sample:  Sample Pie chart - Application of different styles to chart elements

<a name="working_with_labels_and_tooltips"/>
## Working with data labels and tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.

If you want to configure data labels and tooltips for all series - you should do that in <label_settings> and <tooltip_settings> sub-nodes of <pie_series> node. You can tune their visual appearance, positioning and format. Let's do that in the following example: we will make data labels appear inside of the slices, also, we will format labels so they show only the percentage corresponding to the slices and tooltip will show detailed description.
 
When formatting data labels text and tooltip we will use formatting keywords: 
{%Name} - to show sales retail channel,
{%YValue} - to show sales,
{%SeriesName} - to show period (year),
{%YPercentOfSeries} - to show every retail channel sales percentage to total sales per year.

Live Sample:  Sample Pie chart - Working with data labels and tooltips

Related Help Topics:

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide:Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label_settings> nodes.
to top

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
Here is a sample single-series chart with connectors:

Live Sample:  Sample Pie chart - Working with labels connectors

And here is a sample multi-series chart with connectors:

Live Sample:  Sample Pie chart - Working with multiseries labels connectors

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
to top

<a name="colors"/>
## Working with colors and color palettes

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special colors. But you can use your own palettes or palettes shipped with AnyChart. Also you can set and apply the color to exact data series or data point.

<a name="color_setting"/>
### Setting colors to the elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set "color" attribute in the <series> node. In the sample below we have 5 series with sample data and we'll color each series to different color. Here is the sample:

Live Sample:  Sample Pie chart - Setting colors to the elements

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximum one. As you see it is very easy to do by setting "color" attribute for <point> node.

Live Sample:  Sample Pie chart - Setting colors to the series

Important Note:

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors, for example, instead of "Rgb(180,77,77)" you can set "HSV(?,?,?)" or "HTMLConstant" or "#HEXCode"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

Different ways of setting colors of elements
Advanced coloring techniques in Styles tutorial

<a name="hatches"/>
## Working with hatch fills and hatch palettes

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings and palettes. To see whole range of available hatch types see Hatch tutorial.

<a name="hatch_setting"/>
### Setting hatch fills to the elements

To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting "hatch_type" attribute for <series> node. Also we've changed hatch type for last element in 5th series by setting "hatch_type" attribute for <point> node.

Live Sample:  Sample Pie chart - Setting hatch palette to the series

Current Page Online URL: Pie and Donut Chart