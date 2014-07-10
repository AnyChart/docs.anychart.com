#Bar Chart

* [Overview](#overview)                                         
* [Chart building](#how_to_create_bar_chart)
  * [Single-Series bar chart](#single_series)
  * [Multi-Series bar chart](#multi_categorized)
  * [Multi-Series bar chart grouped by series](#multi_by_series)
  * [3D bar chart](#3d_bar)
  * [3D bar chart clustered by Z Axis](#3d_bar_clustered)
* [Axes management](#axes)
  * [Positioning](#position)
  * [Inversion](#inversion)
  * [Minimum and Maximum values control](#min_max)
* [Paddings between bars and bar groups](#setup_padding)
* [Using styles](#using_styles)
  * [Simple style](#simple_style)
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

## [Overview](id:overview)                                        

A bar chart, is a chart with rectangular bars of lengths usually proportional to the magnitudes or frequencies of what they represent. Although the bars can be horizontally or vertically oriented, we call vertically oriented charts - column charts and study them in a Column Chart Help section.

Bar charts are useful for showing data changes over a period of time or for illustrating comparisons among items. In bar charts, categories are typically organized along the vertical axis and values along the horizontal axis.

Consider using a bar chart when:

* The axis labels are long.
* The values that are shown are durations.

## [Chart building](id:how_to_create_bar_chart)

Depending on data model and the visualization purpose the bar chart may contain single series or multi series. AnyChart solution allows to build both 2D (two-dimensional) and 3D (three-dimensional) bar charts.

### [Single-Series Bar Chart](id:single_series)

Let's see single series bar chart created using the following data - sales of ACME Corp. apparel through different retail channels in one year:

|Retail Channel |	Sales |
|---------------|:======|
|Department Stores |	$637.166|
|Discount Stores	| $721.630|
|Men's/Women's Specialty Stores	| $148.662|
|Juvenile Specialty Stores	| $78.662
|All other outlets	| $90.000|
Now we need to convert this data table into JSON, this format will be accepted by AnyChart. In terms of AnyChart data model we have one series of data (Sales) with categories that hold Retail channels names. Each point in series represents one channels and sales amount through this channel. Converted XML Data looks like:

```
 var data = new anychart.data.Set([
    ['Department Stores1', 637166],
    ['Discount Stores', 721630],
    ['Men\'s/Women\'s Specialty Stores', 148662],
    ['All other outlets', 90000]
  ]);
  chart = anychart.barChart(data);
  chart.bar(data);
```
As you can see, we've used attribute "barChart", set name's attribute into first column to define bar category and second column defines bar value.

{sample}BCT_AreaChart_1{sample}

### [Multi-series bar chart](id:multi_categorized)

To compare two or more data rows you have to use multi-series bar charts as it shown in the sample below.

Let's compare year 2003 sales to year 2004 sales:

Retail Channel |	Year 2003 Sales |	Year 2004 Sales
---------------|:=================:|:--------------
Department Stores	$637.166	$737.166
Discount Stores	 $721.630	$537.166
Men's/Women's Specialty Stores	 $148.662	$188.662
Juvenile Specialty Stores	 $78.662	$178.662
All other outlets	 $90.000	$89.000
As we do in single-series bar sample above we need to convert this table into XML, the only difference between these two samples is the fact that now we have two series of data - one series for each year, and we give proper names to each series:

XML Syntax
XML Code
Plain code
01
<data>
02
  <series name="Year 2003">
03
    <point name="Department Stores" y="637166" />
04
    <point name="Discount Stores" y="721630" />
05
    <point name="Men's/Women's Specialty Stores" y="148662" />
06
    <point name="Juvenile Specialty Stores" y="78662" />
07
    <point name="All other outlets" y="90000" />
08
  </series>
09
  <series name="Year 2004">
10
    <point name="Department Stores" y="737166" />
11
    <point name="Discount Stores" y="537166" />
12
    <point name="Men's/Women's Specialty Stores" y="188662" />
13
    <point name="Juvenile Specialty Stores" y="178662" />
14
    <point name="All other outlets" y="89000" />
15
  </series>
16
</data>
As we now have multi-series chart we don't want to set type for each series individually (there can be much more than two series in multi-series chart), so we add <data_plot_settings default_series_type="Bar"/> node to <chart>. Now all series in chart will be of Bar type by default.

Live Sample:  Sample Multi-series bar chart

to top

### [Multi-Series Bar Chart grouped by series](id:multi_by_series)

Sometimes it is useful to visualize comparison in a different way - group bars be series. In our sample it means that we want to compare sales of all managers in each quarter, not each manager sales in different quarters. You don't have to reformat your data to do this - all you need to do is to switch plot_type attribute to "CategorizedBySeriesHorizontal". Look at the resulting chart below:

Live Sample:  Sample Multi-Series Bar Chart grouped by series

to top

### [3D Bar chart](id:3d_bar)

It is very easy to display the data from the sample above in 3D mode - just set enable_3d_mode attribute and bars will become 3D: <data_plot_settings enable_3d_mode="True">

Live Sample:  Sample 3D Bar chart

to top

### [3D Bar chart clustered by Z Axis](id:3d_bar_clustered)

In 3D mode you may want to show bars one over another - in other words cluster them along Z Axis. To do this you need to change scale mode of Y Axis to "Overlay":

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale mode="Overlay" />
03
</y_axis>
Also, we will tune up 3D visualization by setting z_aspect="0.7" and z_padding="0.3". z_aspect attribute controls the depth of 3D plot (0 stands for 2D - flat plot), z_padding controls the space between the clustered elements along Z Axis. 
Live Sample:  Sample 3D Bar chart clustered by Z Axis

to top

## [Axes managemen](id:axes)

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in Axes Basics , Axes Scales and Extra Axes tutorial, in this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

to top

### [Positioning](id:position)

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust position attribute of <y_axis> or <x_axis> nodes.

Positioning depends on plot type and inversion of axes, you will find list of all possible positining and inversion settings in Axes Positioning and Inverting Templates.

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

Live Sample:  Axes Position Sample Single-Series Bar Chart

to top

### [Inversion](id:inversion)

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

Live Sample:  Axis Inversion Sample Single-Series Bar Chart

to top

### [Minimum and Maximum values control](id:min_max)

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale inversion chart sample above: minimal value on the Y Axis is 0.0, and maximum is 800.000. You can control these values by setting maximum and minimum attributes of <scale> node:

XML Syntax
XML Code
Plain code
01
<y_axis>
02
  <scale minimum="-200000" maximum="800000" />
03
</y_axis>
And here is the demonstration of maximum and minimum values on the Single-series sample:

Live Sample:  Scale Maximum and Minimum Values Sample Single-Series Bar Chart

to top

## [Paddings between bars and bar groups](id:setup_padding)

The special thing about bar charts are the paddings between bars and bar groups (in multi-series charts), on the picture below you can see what are these paddings:



If you want to set these paddings you need to set point_padding or group_padding attributes in <bar_series> node. Paddings are measured as a ratio to bar width (bars widths are calculated automatically). For example, if you set point_padding to 0.5 - the space between two bars will be equal to the half of each bar width. If you want to have no padding between bars or groups you should set point_padding or group_padding to 0.

Here is a sample of multi-series bar chart with point_padding and group_padding set to -0.1 and 2, accordingly, negative point_padding leads to bars overlay and large group_padding moves bar groups away from each other:

Live Sample:  Sample Bar chart setting Paddings between columns and column groups

to top

## [Using styles](id:using_styles)

In this section we will describe main parts of bar chart style and demonstrate how style can be created and applied. Also you will see list of predefined styles.

The main idea of styles is to segregate visualization and data definition. Visual appearance of bars is defined using certain styles and then you just apply the style to the certain data elements. Style can be applied to data series, data category or single bar.

Bar chart style is configured in <bar_style> and <bar_series> nodes. On the image below you can see what bar_style consists of: fill (including solid color fill, hatch fill, image fill and gradient fill), border and effects applied to whole bar.



Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when selected, when user moves cursor over an element, etc.
to top

### [Simple style](id:simple_style)

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is an XML structure:

XML Syntax
XML Code
Plain code
01
<bar_style name="style1">
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
</bar_style>
Using such settings we've created a style that defines bars of Gold color, rather thick border, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed thick border and hatch fill colored DarkRed too.

Now we will take a sample single-series chart described above, define style in XML and apply it to all chart elements, using <bar_series style="style1"/>

Live Sample:  Sample Simple Style for Bar chart

to top

### [Application of different styles to chart elements](id:several_styles)

Now we will demonstrate how to apply different styles to different series and bars. To do it we will use multi-series sample that was demonstrated above and create two more styles: "style2" and "style3", both inherited from the "style1".

"style1" will be applied to "Year 2003 " series, "style2" will be applied to "Year 2004" series and "style3" will be applied to the bar with a highest value (Note - we will find highest value and set its style manually in this sample. But with AnyChart it is possible to do that automatically using Thresholds, read more about it in Thresholds tutorial).

So - the definitions of the styles are:

Style 1:

XML Syntax
XML Code
Plain code
01
<bar_style name="style1">
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
</bar_style>
Style 2:
This style is inherited from "style1" and the only thing changed is a color of the fill: from "Gold" to "Rgb(180,180,255)". We've used styles inheritance to avoid duplication of the common settings.

XML Syntax
XML Code
Plain code
01
<bar_style name="style2" parent="style1">
02
  <fill color="Rgb(180,180,255)" />
03
</bar_style>
Style 3:
This style is also inherited from "style1" and the new color of the fill is "Rgb(255,170,170)". And again we've used styles inheritance.

XML Syntax
XML Code
Plain code
01
<bar_style name="style3" parent="style1">
02
  <fill color="Rgb(255,170,170)" />
03
</bar_style>
And, as a result here is an example of these styles usage:

Live Sample:  Sample Bar chart - Application of different styles to chart elements

to top

### [Predefined styles]

There are several predefined styles that you can use and modify with help of styles inheritance (setting them as a parent styles for your styles). On the picture below you can see how these styles will change an appearance of the bars and their names: "Default", "Silver", "AquaLight" and "AquaDark".



Note 1:
When you are inheriting from "AquaLight" and "AquaDark" styles you can change only the color, opacity, hatch-fill and effects of the bar.

Note 2:
When creating and applying styles to bars in 3D mode you can change only the color, opacity, hatch-fill and effects of the bar.

You can read more about styles and their usage in Styles tutorial.
Full reference of bar chart style can be found in XML Reference, particularly <bar_style> and <bar_series> nodes.
General things about tuning visual appearance, working with borders, colors, fills, etc. - can be found in Visual Appearance Section
to top

## [Working with data labels and tooltips](id:working_with_labels_and_tooltips)

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips tutorials.

If you want to configure data labels and tooltips for all series - you should do that in <label_settings> and <tooltip_settings> sub-nodes of <bar_series> node. You can tune their visual appearance, positioning and format. Let's do that in the following example: we will make data labels appear to the right of the bars, also, we will format labels so they show only the value corresponding to the bar and tooltip will show detailed description.

When formatting data labels text and tooltip we will use formatting keywords: 
{%CategoryName} - to show sales retail channel,
{%YValue} - to show sales,
{%SeriesName} - to show period (year),
{%YPercentOfSeries} - to show every retail channel sales percentage to total sales per year.

Live Sample:  Sample Bar chart - Working with data labels and tooltips

Related Help Topics:

Learn more about labels and tooltips in Labels and tooltips
Full Keywords reference and formatting guide: Labels and tooltips
Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label_settings> nodes.
to top

## [Using markers](id:ising_markers)

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including bars.

In the sample below we will take single-series data described above and mark the highest bar in series with a "Star5" of the "Gold" color.

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

Live Sample:  Sample Bar chart - Working with markers

to top

## [Working with colors and color palettes](id:colors)

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special colors. But you can use your own palettes or palettes shipped with AnyChart. Also you can set and apply the color to exact data series or data point.

to top

### [Setting colors to the elements](id:color_setting)

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set "color" attribute in the <series> node. In the sample below we have 5 series with sample data and we'll color each series to different color. Here is the sample:

Live Sample:  Sample Bar chart - Setting colors to the elements

In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximum one. As you see it is very easy to do by setting "color" attribute for <point> node.

Live Sample:  Sample Bar chart - Setting colors to the series

Important Note:

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors, for example, instead of "RGB(240,248,255)" you can set "HSB(208,100,97)" or "AliceBlue" or "#F0F8FF"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

Different ways of setting colors of elements
to top

### [Color palettes](id:color_palettes)

AnyChart allows to apply color palettes to all series or to the exact series. In the first case each next series will take each next color from palette. If the number of the colors in palette is less than the number of series - palette will be looped. If you have only one series it will be colored by the first color in the palette. To apply palette to all series we have to set "palette" attribute in <data> node. Here it is:

Live Sample:  Sample Bar chart - Setting Palette to all series

When you have one series only, sometimes it is useful to color each point in series. You can do it by setting color of each point individually or you can apply a palette. For sure the second method is easier and more useful. To apply palette to the exact series you should set "palette" attribute for exact <series> node.

Live Sample:  Sample Bar chart - Working with palettes - Setting Palettes to the certain series

In the samples above we have shown usage of predefined palettes only, but AnyChart allows to create your own custom palettes. To learn more about it read Palettes tutorial.

to top

## [Working with hatch fills and hatch palettes](id:hatches)

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings and palettes. To see whole range of available hatch types see Hatch tutorial.

to top

### [Setting hatch fills to the elements](id:hatch_setting)

To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting "hatch_type" attribute for <series> node. Also we've changed hatch type for last element in 5th series by setting "hatch_type" attribute for <point> node.

Live Sample:  Sample Bar chart - Setting hatch palette to the series

to top

### [Hatch palettes](id:hatch_palettes)

When you have a lot of points or series it is very useful to use hatch palettes. Methods of working with hatch palette is very similar to color palette. You can apply hatch palette to all series or to exact series. In the first case each next series will take each next hatch type from palette. If the number of hatch types in palette is less than number of series - palette will be looped. If you have only one series each point will take the first hatch type from the palette. To apply palette to all series we have to set "hatch_palette" attribute in <data> node. Here it is:

Live Sample:  Sample Bar chart - Setting hatch fills to the series

When you have one series only you can can apply hatch palette to this series. To do it you should set "hatch_palette" attribute for <series> node. See the sample below:

Live Sample:  Sample Bar chart - Setting hatch fills to the certain series

In the samples above we have shown usage of predefined hatch palettes only, but AnyChart allows to create your own custom hatch palettes. To learn more about it read Hatch and hatch palettes .

to top

Current Page Online URL: Bar chart
