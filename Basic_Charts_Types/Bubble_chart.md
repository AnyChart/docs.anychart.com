# Bubble Chart                                                                                     
                                                                                    
* [Overview](#overview)                        
* [Chart](#chart)             
  * [Single-Series bubble chart categorized vertically](#single_series_vertical)         
  * [Single-Series bubble chart categorized horizontally](#single_series_horizontal)
  * [Single-Series bubble chart scatter plot](#single_series_scatterplot)
  * [Multi-Series bubble chart](#multi_categorized)                  
  * [Multi-Series bubble chart grouped by series](#multi_by_series)                                
  * [Multi-Series bubble chart scatter plot](#multi_series_scatterplot)       
* [Controlling Bubbles size](#size)                                                                                                   
  * [Bubbles minimum and maximum size](#size)                    
  * [Size multiplier](#size)                                                                                             
* [Axes management](#axes)                                                                                                               
  * [Preventing bubbles overlapping](#overlap)                     
  * [Positioning](#position)                    
  * [Inversion](#inversion)                 
  * [Minimum and Maximum values control](#min_max)                                                                                               
* [Using styles](#using_styles)                                                                                                     
  * [Simple style sample](#simple_style)                    
  * [Application of different styles to chart elements](#several_styles)                  
  * [Predefined styles](#predefined_styles)                                                                                               
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

A Bubble chart is a variation of a Scatter chart in which the data points are replaced with bubbles. A Bubble chart can be used instead of a <!--[link in need]-->Scatter chart<!--[link]--> if your data has three data series, each of which contains a set of values. In AnyChart Bubble chart can be plotted not only on the scatter plot, but on categorized plot as well.

Bubble charts are often used to present financial data. Use a Bubble chart when you want specific values to be more visually represented in your chart by different bubble sizes.

Bubble charts are popular tools for identifying and illustrating industry clusters. Essentially, these charts allow four different variables to be plotted within the same graph, making it easy to assess relative economic performance. Because they allow visual comparisons of well-understood measures, bubble charts are often used for pinpointing priority industries that should receive attention from a state economic development agency.

to top

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

<a name="single_series_vertical"/>
### Single-Series Bubble Chart - Categorized Vertically

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

XML Syntax
XML Code
Plain code
01
<data>
02
  <series name="ACME" type="Bubble">
03
    <point name="Product A" y="637" size="6" />
04
    <point name="Product B" y="72" size="14" />
05
    <point name="Product C" y="48" size="10" />
06
  </series>
07
</data>
As you can see, we've created one <series> node, specified its type="Bubble", added several <point> nodes and set name attribute that defines bar category and y attribute that defines bar value.

Here it is - AnyChart can now visualize your data. Look at the chart sample below and click on on it to see Live Flash Chart preview and full configured XML.

Live Sample:  Sample Single-Series Bubble Chart Vertical

to top

<a name="single_series_horizontal"/>
### Single-Series Bubble Chart - Categorized Horizontally

If you want to use long names of the products - you may consider building a horizontally oriented bubble chart. To do this you need to set plot_type attribute of chart node to "CategorizedHorizontal":

XML Syntax
XML Code
Plain code
01
<chart plot_type="CategorizedHorizontal" />
Here it is, we've added a couple of products with long names to the data set and switched an orientation:

Live Sample:  Sample Single-Series Bubble Chart Horizontal

to top

<a name="single_series_scatterplot"/>
### Single-Series bubble chart scatter plot

The sample of bubble chart in scatter plot can be found in Scatter Charts Tutorial.

to top

<a name="multi_categorized"/>
### Multi-series bubble chart

To compare two or more data rows you have to use multi-series bar charts as it shown in the sample below.

Let's compare year 2003 sales to year 2004 product sales:

<table width="536" border="1" class="dtTABLE">
<tbody>
<tr>
<th width="227" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Year
</th>
<th width="141" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;" colspan="2">
Year 2003 Sales
</th>  
<th width="141" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;" colspan="2">
Year 2004 Sales
</th>
</tr>
<tr>
<th width="227" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Product
</th>
<th width="141" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Units
</th>  
<th width="141" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Profit
</th>    
<th width="141" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Units
</th>  
<th width="141" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Profit
</th>    
</tr>  
<tr>
<td>
Product A
</td>
<td>
637
</td>
<td>
$6
</td>	
<td>
630
</td>
<td>
$12
</td>	
</tr>
<tr>
<td>
Product B
</td>
<td>
72
</td>
<td>
$14
</td>
<td>
32
</td>
<td>
$10
</td>
</tr>
<tr>
<td>
Product C
</td>
<td>
48
</td>
<td>
$10
</td>
<td>
48
</td>
<td>
$20
</td>
</tr>
</tbody>
</table>

As we do in single-series bubble sample above we need to convert this table into XML, the only difference between these two samples is the fact that now we have two series of data - one series for each year, and we give proper names to each series:

XML Syntax
XML Code
Plain code
01
<data>
02
  <series name="Year 2004" type="Bubble">
03
    <point name="Product A" y="630" size="12" />
04
    <point name="Product B" y="32" size="10" />
05
    <point name="Product C" y="48" size="20" />
06
  </series>
07
  <series name="Year 2003" type="Bubble">
08
    <point name="Product A" y="637" size="6" />
09
    <point name="Product B" y="72" size="14" />
10
    <point name="Product C" y="48" size="10" />
11
  </series>
12
</data>
As we now have multi-series chart we don't want to set type for each series individually (there can be much more than two series in multi-series chart), so we add <data_plot_settings default_series_type="Bubble"/> node to <chart>. Now all series in chart will be of Bubble type by default.

Live Sample:  Sample Multi-series Bubble chart

to top

<a name="multi_by_series"/>
### Multi-Series Bubble Chart grouped by series

Sometimes it is useful to visualize comparison in a different way - group bars be series. In our sample it means that we want to compare sales in each year. You don't have to reformat your data to do this - all you need to do is to switch plot_type attribute to "CategorizedBySeriesVertical". Look at the resulting chart below:

Live Sample:  Sample Multi-Series Bubble Chart grouped by series

to top

<a name="multi_series_scatterplot"/>
### Multi-Series bubble chart scatter plot

The sample of bubble chart in scatter plot can be found in Scatter Charts Tutorial.

to top

<a name="size"/>
## Controlling Bubbles size

<a name="size-minimum-maximum"/>
### Bubbles minimum and maximum size

Bubbles minimum and maximum size can be controlled using maximum_bubble_size and minimum_bubble_size attributes of <bubble_series> node. Both of them can be set in percents of a lesser dataplot side (this can be width or height) and in pixels:

XML Syntax
XML Code
Plain code
01
<bubble_series maximum_bubble_size="20%" minimum_bubble_size="10%" />
When you set maximum_bubble_size="20%" - AnyChart will make diameters of bubble(s) with a biggest size equal to 20% the lesser of two: width or the height of data plot.

Here is the sample when bubbles are size in percents, as specified above:

Live Sample:  Sample Single-Series Bubble Chart Size in Percents

And in this sample when bubbles are sized in pixels:

XML Syntax
XML Code
Plain code
01
<bubble_series maximum_bubble_size="100" minimum_bubble_size="10" />
Note again, that setting size in pixels may lead to the nasty results when chart is resized.

Live Sample:  Sample Single-Series Bubble Chart Size in Pixels

to top

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

<a name="axes"/>
## Axes management

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in Working with Axes tutorial, in this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

to top

<a name="overlap"/>
### Preventing bubbles overlapping

One special axes function that may be useful wen creating bubble chart is scale mode. If you set scaled mode to "SortedOverlay" - the bigger bubbles will always be displayed under the smaller bubbles and chart may become more readable.

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale mode="SortedOverlay" />
03
</y_axis>
On the sample below we will display two multiseries bubble charts - one will use normal scale mode and another - "SortedOverlay", and both will be using the same data.

Live Sample:  Axes Scale Overlay Sample Single-Series Bubble Chart Dashboard

<a name="position"/>
### Positioning

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust position attribute of <y_axis> or <x_axis> nodes.

Positioning depends on plot type and inversion of axes, you will find list of all possible positioning and inversion settings in Axes Positioning and Inverting Templates.

XML Syntax
XML Code
Plain code
01
<axes>
02
  <y_axis position="Normal" />
03
  <x_axis position="Opposite" />
04
</axes>
And here is the demonstration of this feature on the Single-series sample:

Live Sample:  Axes Position Sample Single-Series Bubble Chart

to top

<a name="inversion"/>
### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis <scale>:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale inverted="True" />
03
</y_axis>
And here is the demonstration of Y Axis inversion on the Single-series sample:

Live Sample:  Axis Inversion Sample Single-Series Bubble Chart

to top

<a name="min_max"/>
### Minimum and Maximum values control

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale inversion chart sample above: minimal value on the Y Axis is 0, and maximum is 700. You can control these values by setting maximum and minimum attributes of <scale> node:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale minimum="-10" maximum="1000" />
03
</y_axis>
And here is the demonstration of maximum and minimum values on the Single-series sample:

Live Sample:  Scale Maximum and Minimum Values Sample Single-Series Bubble Chart

to top

<a name="using_styles"/>
## Using styles

In this section we will describe main parts of bubble chart style and demonstrate how style can be created and applied. Also you will see list of predefined styles.

The main idea of styles is to segregate visualization and data definition. Visual appearance of bubbles is defined using certain styles and then you just apply the style to the certain data elements. Style can be applied to data series, data category or single bubble.

Bubble chart style is configured in <bubble_style> and <bubble_series> nodes.
Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when selected, when user moves cursor over an element, etc. More information about these features can be found in Interactivity tutorial.

to top

<a name="simple_style"/>
### Simple style

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is an XML structure:

XML Syntax
XML Code
Plain code
01
<bubble_style name="style1">
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
</bubble_style>
Using such settings we've created a style that defines bubbles of Gold color, rather thick border, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed thick border and hatch fill colored DarkRed too.

Now we will take a sample single-series chart described above, define style in XML and apply it to all chart elements, using <bubble_series style="style1"/>

Live Sample:  Sample Simple Style for Bubble chart

to top

<a name="several_styles"/>
### Application of different styles to chart elements

Now we will demonstrate how to apply different styles to different series and bubbles. To do it we will use multi-series sample that was demonstrated above and create two more styles: "style2" and "style3", both inherited from the "style1".

"style1" will be applied to "Year 2003 " series, "style2" will be applied to "Year 2004" series and "style3" will be applied to the bubble with a biggest size (Note - we will find highest value and set its style manually in this sample. But with AnyChart it is possible to do that automatically using Thresholds, read more about it in Thresholds tutorial).

So - the definitions of the styles are:

Style 1:

XML Syntax
XML Code
Plain code
01
<bubble_style name="style1">
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
</bubble_style>
Style 2:
This style is inherited from "style1" and the only thing changed is a color of the fill: from "Gold" to "Rgb(180,180,255)". We've used styles inheritance to avoid duplication of the common settings.

XML Syntax
XML Code
Plain code
01
<bubble_style name="style2" parent="style1">
02
  <fill color="Rgb(180,180,255)" />
03
</bubble_style>
Style 3:
This style is also inherited from "style1" and the new color of the fill is "Rgb(255,170,170)". And again we've used styles inheritance.

XML Syntax
XML Code
Plain code
01
<bubble_style name="style3" parent="style1">
02
  <fill color="Rgb(255,170,170)" />
03
</bubble_style>
And, as a result here is an example of these styles usage:

Live Sample:  Sample Bubble chart - Application of different styles to chart elements

to top

<a name="predefined_styles"/>
## Predefined styles

There are several predefined styles that you can use and modify with help of styles inheritance (setting them as a parent styles for your styles). On the picture below you can see how these styles will change an appearance of the bubbles and their names: "Default", "Flat", "Transparent" and "Aqua".



Note:
When you are inheriting from"Aqua" style you can change only the color, opacity, hatch-fill and effects of the bubble.

You can read more about styles and their usage in Styles tutorial.
Full reference of bubble chart style can be found in XML Reference, particularly <bubble_style> and <bubble_series> nodes.
General things about tuning visual appearance, working with borders, colors, fills, etc. - can be found in Visual Appearance Section
to top

<a name="working_with_labels_and_tooltips"/>
## Working with data labels and tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.

If you want to configure data labels and tooltips for all series - you should do that in <label_settings> and <tooltip_settings> sub-nodes of <bar_series> node. You can tune their visual appearance, positioning and format. Let's do that in the following example: we will make data labels appear to the right of the bars, also, we will format labels so they show only the value corresponding to the bar and tooltip will show detailed description.

When formatting data labels text and tooltip we will use formatting keywords: 
{%CategoryName} - to show product name,
{%YValue} - to show units,
{%SeriesName} - to show period (year),
{%BubbleSize} - to show Profit.

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