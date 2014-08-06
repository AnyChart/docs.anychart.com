# Pie and Donut Chart
                                                               
* [Overview](#overview)
* [Chart](#chart)
  * [Pie Chart](#pie_chart)
  * [Doughnut Chart](#doughnut_chart)
* [Slices Sorting](#sorting)
* [Exploded Slices](#exploded)
* [Visualization](#visualization)
  * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
<!--  * [Working with labels connectors](#label_connectors)-->
<!--* [Using markers](#using_markers)-->
* [Colors](#colors)
  * [Colorizing Elements](#color_setting)
* [Hatch Fills](#hatches)

<a name="overview"/>
## Overview

Data that is arranged in one column or row only can be plotted in a pie chart. Pie charts show the size of items in one data series, proportional to the sum of the items. The data points in a pie chart are displayed as a percentage of the whole pie.

Consider using a pie chart when:

* You only have one data series that you want to plot.
* None of the values that you want to plot are negative.
* Almost none of the values that you want to plot are zero values.
* You don't have more than seven categories.
* The categories represent parts of the whole.

Doughnut chart are functionally identical to pie charts, the only difference is that it has a hole in the middle.

<a name="chart"/>
## Chart

Pie chart contains only single series.

<a name="pie_chart"/>
### Pie Chart

Let's see pie chart created using the following data - sales of ACME Corp. apparel through different retail channels in one year:

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

<a name="doughnut_chart"/>
### Doughnut Chart

Donut chart is all the same as Pie chart, and all you need to do to switch to it: add **'chart.innerRadius()'**
```
  chart.innerRadius('30%');
```
And here is the same data as above, displayed as a Doughnut chart:

{sample}BCT\_PieDoughnutChart\_02{sample}

<a name="sorting"/>
## Slices Sorting

If you want you can sort the series in Pie and Donut Chart - Ascending or Descending, this feature is controlled using **sort** attribute. In the sample below three pie charts with identical series are shown, first isn't sorted, the second is sorted ascending and the third - descending.

{sample}BCT\_PieDoughnutChart\_03{sample}

<a name="exploded"/>
## Exploded Slices

You can set pie and donut chart slices to be exploded when user clicks on it and you can set certain slices to be exploded by default.

**Explode** attribute defines how far slices are exploded. To disable exploding, set **explode** value to 0.

```
  chart.explode(30);
```

Te explode only one slice set exploded to a point:

```
  chart.explodeSlice(0, true);
```
Sample chart below is exploded by default, you can launch the live sample and click on slices to move them in place.

{sample}BCT\_PieDoughnutChart\_04{sample}

<a name="visualization"/>
## Visualization

In this section we will describe main parts of pie chart style and demonstrate how style can be applied. 

Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when user moves cursor over an element, etc. <!--More information about these features can be found in Interactivity tutorial.-->

<a name="basic_sample"/>
### Basic Sample

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is an JSON structure:
```
chart.fill('Gold')
  .hoverFill("darkred")
  .stroke('#56561a', 10);
  chart.container('container');
  chart.draw();
```

Using such settings we've created a style that defines slices of Gold color<--, rather thick border, hatch filled with DiagonalBrick and a couple of effects-->. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed<!-- thick border and hatch fill colored DarkRed too-->.

{sample}BCT\_PieDoughnutChart\_05{sample}

<a name="working_with_labels_and_tooltips"/>
## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips. 
<!--Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.-->

If you want to configure data labels and tooltips for all series - you should do that in **.labels** and **.tooltip** sub-nodes of <pie_series> node. You can tune their visual appearance, positioning and format.
Let's do that in the following example: we will make data labels appear inside of the slices, also, we will format labels so they show only the percentage corresponding to the slices and tooltip will show detailed description.
 

When formatting data labels text we will use **.textFormatter** to choose the column we need information from. 

{sample}BCT\_PieDoughnutChart\_07{sample}
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
<a name="colors"/>
## Colors

AnyChart uses default colors to colorize data elements of chart automatically even if you have not define special colors. Also you can set and apply the color to exact data series or data point.

<a name="color_setting"/>
### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set **".fill"** attribute. In the sample below we'll color each series to different color. Here is the sample:

{sample}BCT\_PieDoughnutChart\_06{sample}

<a name="hatches"/>
## Hatch Fills

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings.<!-- To see whole range of available hatch types see Hatch tutorial.-->

To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 10 series. For every series we've applied different hatch fills by setting **.hatchFill()** attribute for each of them.

{sample}BCT\_PieDoughnutChart\_08{sample}