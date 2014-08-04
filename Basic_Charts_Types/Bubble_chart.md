# Bubble Chart                                                                                     
                                                                                    
* [Overview](#overview)
* [Chart](#chart)
  * [Single-Series bubble chart](#single_series)* [Multi-Series bubble chart](#multi_categorized)
* [Controlling Bubbles size](#size)
  * [Bubbles minimum and maximum size](#size)
  <!--* [Size multiplier](#size)
* [Axes management](#axes)* [Positioning](#position)
  * [Inversion](#inversion)
  * [Minimum and Maximum values control](#min_max)
* [Visualization](#visualization)
  * [Basic sample](#visualization_simple_style)
* [Labels and Tooltips](#labels_and_tooltips)
* [Using markers](#using_markers)
* [Working with colors and color palettes](#colors)
  * [Setting colors to the elements](#color_setting)
  * [Color palettes](#color_palettes)
* [Working with hatch fills and hatch palettes](#hatches)
  * [Setting hatch fills to the elements](#hatch_setting)
  * [Hatch palettes](#hatch_palettes)
 
<a name="overview"/>
## Overview

A Bubble chart is a variation of a Scatter chart in which the data points are replaced with bubbles. A Bubble chart can be used instead of a <!--[link in need]-->Scatter chart<!--[link]--> if your data has three data series, each of which contains a set of values. In AnyChart Bubble chart can be plotted not only on the scatter plot, but on categorized plot as well.

Bubble charts are often used to present financial data. Use a Bubble chart when you want specific values to be more visually represented in your chart by different bubble sizes.

Bubble charts are popular tools for identifying and illustrating industry clusters. Essentially, these charts allow four different variables to be plotted within the same graph, making it easy to assess relative economic performance. Because they allow visual comparisons of well-understood measures, bubble charts are often used for pinpointing priority industries that should receive attention from a state economic development agency.


<a name="chart"/>
## Chart building

Depending on data model and the visualization purpose the bar chart may contain single series or multi series. As bubble chart need 3 values to show bubbles - you need to pass this data to chart:

When using Bubble chart on a scatter plot:

```
 [10, 63, 20]
```

When using Bubble chart on a categorized plot:

```
['December', 6, 17]
```

<a name="single_series"/>
### Single-Series Bubble Chart

Let's see single series bubble chart created using the sample data - ACME Corp. sales data for the three different products, we will compare a number of units sold and profit using a bubble chart:

<table width="376" border="1" class="dtTABLE">
<tbody><tr>
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
</tbody></table>
Now we need to convert this data table into acceptable format, this format will be accepted by AnyChart. In terms of AnyChart data model we have one series of data (Sales) with categories that hold Product names. Each point in series represents product, units sold and a profit amount. Converted XML Data looks like:

```
chart.bubble([
    ['Product A', 637, 6],
    ['Product B', 472, 14],
    ['Product C', 48, 10]
  ]).minimumSize(2).maximumSize(40);
```
As you can see, we've categoriesed chart ad **bubble**, set attribute that defines bar category into first and second columns and attribute that defines bubble size into third one.

Here it is - AnyChart can now visualize your data. You can launch it in playground and modify it.

{sample}BCT\_Bubble\_Chart\_01{sample}

<a name="multi_categorized"/>
### Multi-series bubble chart

To compare two or more data rows you have to use multi-series bar charts as it shown in the sample below.

Let's compare year 2003 sales to year 2004 product sales:

<table width="536" border="1" class="dtTABLE">
<tbody><tr>
<th width="227">Year</th>
<th width="141" colspan="2">Year 2003 Sales</th>  
<th width="141" colspan="2">Year 2004 Sales</th>
</tr>
<tr>
<th width="227">Product</th>
<th width="141">Units</th>  
<th width="141">Profit</th>    
<th width="141">Units</th>  
<th width="141">Profit</th>    
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
</tbody></table>
As we do in single-series bubble sample above we need to convert this table into acceptable format, the only difference between these two samples is the fact that now we have bigger data and we have to **MapAs()** it.

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

<a name="size"/>
## Controlling Bubbles size

<a name="size-minimum-maximum"/>
### Bubbles minimum and maximum size

Bubbles minimum and maximum size can be controlled using **maximumSize()** and **minimumSize()** attributes. Both of them can be set in percents of a lesser dataplot side (this can be width or height) and in pixels:
```
chart.maximumSize(25).minimumSize(1);
```
When you set **maximumSize('20%')** - AnyChart will make diameters of bubble(s) with a biggest size equal to 20% the lesser of two: width or the height of data plot.

Here is the sample when bubbles are size in percents, as specified above:

{sample}BCT\_Bubble\_Chart\_03{sample}

And in this sample when bubbles are sized in pixels:

```
chart.maximumSize(100).minimumSize(10);
```
Note again, that setting size in pixels may lead to the nasty results when chart is resized.

{sample}BCT\_Bubble\_Chart\_04{sample}
<!--
<a name="size-multiplier"/>
### Size multiplier

Size multiplier parameter allows you to control the size of the bubbles in other way: define the coefficient of bubble sizing. Each bubble will be drawn on the plot with and its actual diameter will be bubble_size_multiplier multiplied by size.

bubble_size_multiplier can be set in pixels or in percents. Here is a sample setting to 10 pixels:

XML Syntax
XML Code
Plain code
01
<bubble_series bubble_size_multiplier="10" />
Sample dashboard with bubble_size_multiplier set to 4:

Live Sample:  Sample Bubble Chart Size use multiplier

In the sample above bubbles can be compared in different plots because the multiplier is set to the same pixel value in both charts.

Here is a sample setting to 1%:

XML Syntax
XML Code
Plain code
01
<bubble_series bubble_size_multiplier="1%" />
Sample dashboard with the same data and layout as above, but bubble_size_multiplier set to 1%, as you see - you can't compare bubbles in the charts with different width/height:

Live Sample:  Sample Bubble Chart Size Multiplier Percents

Note: if bubble_size_multiplier is used - maximum_bubble_size and minimum_bubble_size are ignored.
to top
-->
<a name="axes"/>
## Axes management

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. <!--All axis features are described in Working with Axes tutorial,-->In this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

<a name="position"/>
### Positioning

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust **orientation()** method of **yAxis()** or **xAxis()** attributes.
<!--Positioning depends on plot type and inversion of axes, you will find list of all possible positioning and inversion settings in Axes Positioning and Inverting Templates.-->
```
  chart.xAxis(0).orientation('top');
  chart.yAxis(0).orientation('right');
```
And here is the demonstration of this feature on the Single-series sample:
{sample}BCT\_Bubble\_Chart\_05{sample}

<a name="inversion"/>
### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis <scale>:
```
chart.yScale().inverted(true);
```
And here is the demonstration of Y Axis inversion on the Single-series sample:
{sample}BCT\_Bubble\_Chart\_06{sample}

<a name="min_max"/>
### Minimum and Maximum values control


By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale positioning chart sample above: minimal value on the Y Axis is 0, and maximum is 800. You can control these values by setting maximum and minimum attributes of yScale method. As far as you want to adjusted the scale, it's desirable to set **.ticks().interval()** as well, in case default interval is twisted:
```
  chart.yScale().minimum('-100').maximum('1000').ticks().interval(100);
```
And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_Bubble\_Chart\_07{sample}

<a name="visualization"/>
## Visualization

In this section we will describe main parts of bubble chart visualization and ways to adjust it. Visual appearance of bubbles is defined using certain methods. For bubble chart the main thing is **.fill()** method.

<a name="visualization_simple_style"/>
### Basic sample

Now, let's look how to change the look of an Area. Here is a basic sample:
```
    .fill('gold')
    .hatchFill('diagonalbrick', 'gray')
    .hoverHatchFill('diagonalbrick', 'darkred')
    .stroke("Rgb(86,86,26)", 4)
    .hoverStroke("darkred", 6);
```
Using such settings we've created a style that defines bubbles of Gold color, rather thick border, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it will be highlighted with a darkred thick border and hatch fill colored darkred too.

Now we will apply this style to the chart
{sample}BCT\_Bubble\_Chart\_08{sample}

<a name="labels_and_tooltips"/>
## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and Tooltips.
If you want to configure data labels and tooltips for all series - you should do that in .labels and .tooltip methods. You can tune their visual appearance, positioning and format.
When formatting data labels text we will use .textFormatter to show Y axes value. Otherwise X axes will be displayed here.

Live Sample:  Sample Bubble chart - Working with data labels and tooltips

Related Help Topics:

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide:Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label_settings> nodes.
to top

<a name="using_markers"/>
## Using markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including bubbles.

In the sample below we will take single-series data described above and mark the biggest bubble in series with a "Star5" of the "Gold" color.

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
<point name="Product B" y="172" size="14">
02
  <marker enabled="True" style="myMarker" />
03
</point>
And here is a result - the best product for ACME Corp. is Product B and we show this on the chart:

Live Sample:  Sample Bubble chart - Working with markers

Related help topics:

You can read more about working with markers in Markers tutorial.
Full reference of marker style can be found in XML Reference, particularly <marker_style> node.
to top

<a name="colors"/>
## Working with colors and color palettes

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special colors. But you can use your own palettes or palettes shipped with AnyChart. Also you can set and apply the color to exact data series or data point.

to top

<a name="color_setting"/>
### Setting colors to the elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set "color" attribute in the <series> node. In the sample below we have 5 series with sample data and we'll color each series to different color. Here is the sample:

Live Sample:  Sample Bubble chart - Setting colors to the elements

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximum one. As you see it is very easy to do by setting "color" attribute for <point> node.

Live Sample:  Sample Bubble chart - Setting colors to the series

Important Note:

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors, for example, instead of "Rgb(180,77,77)" you can set "HSV(?,?,?)" or "HTMLConstant" or "#HEXCode"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

Different ways of setting colors of elements
Advanced coloring techniques in Styles tutorial
to top

<a name="color_palettes"/>
### Color palettes

AnyChart allows to apply color palettes to all series or to the exact series. In the first case each next series will take each next color from palette. If the number of the colors in palette is less than the number of series - palette will be looped. If you have only one series it will be colored by the first color in the palette. To apply palette to all series we have to set "palette" attribute in <data> node. Here it is:

Live Sample:  Sample Bubble chart - Setting Palette to all series

When you have one series only, sometimes it is useful to color each point in series. You can do it by setting color of each point individually or you can apply a palette. For sure the second method is easier and more useful. To apply palette to the exact series you should set "palette" attribute for exact <series> node.

Live Sample:  Sample Bubble chart - Working with palettes - Setting Palettes to the certain series

In the samples above we have shown usage of predefined palettes only, but AnyChart allows to create your own custom palettes. To learn more about it read Palettes tutorial.

to top

<a name="hatches"/>
## Working with hatch fills and hatch palettes

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings and palettes. To see whole range of available hatch types see Hatch tutorial.

to top

<a name="hatch_setting"/>
### Setting hatch fills to the elements

To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting "hatch_type" attribute for <series> node. Also we've changed hatch type for last element in 5th series by setting "hatch_type" attribute for <point> node.

Live Sample:  Sample Bubble chart - Setting hatch palette to the series

to top

<a name="hatch_palettes"/>
### Hatch palettes

When you have a lot of points or series it is very useful to use hatch palettes. Methods of working with hatch palette is very similar to color palette. You can apply hatch palette to all series or to exact series. In the first case each next series will take each next hatch type from palette. If the number of hatch types in palette is less than number of series - palette will be looped. If you have only one series each point will take the first hatch type from the palette. To apply palette to all series we have to set "hatch_palette" attribute in <data> node. Here it is:

Live Sample:  Sample Bubble chart - Setting hatch fills to the series

When you have one series only you can can apply hatch palette to this series. To do it you should set "hatch_palette" attribute for <series> node. See the sample below:

Live Sample:  Sample Bubble chart - Setting hatch fills to the certain series

In the samples above we have shown usage of predefined hatch palettes only, but AnyChart allows to create your own custom hatch palettes. To learn more about it read Hatch and hatch palettes .

to top

Current Page Online URL: Bubble Chart