# Line Chart

* [Overview](#overview)
* [Chart Building](#how_to_create_chart)
  * [Single-Series Line chart](#single_series)
  * [Single-Series Spline chart](#single_series_spline)
  * [Step Line chart](#step_line)
<!--  * [Shift Step Line](#step_line_shift)     -->
  * [Multi-Series Line chart](#multi_categorized)
<!--  * [Multi-Series Line chart grouped by series](#multi_by_series)       -->>
* [Axes management](#axes)
  * [Positioning](#position)
  * [Inversion](#inversion)
  * [Minimum and Maximum values control](#min_max)
* [Using styles](#using_styles)
  * [Simple style sample](#simple_style)
<!--  * [Application of different styles to chart elements](#several_styles)        -->
* [Working with data labels and tooltips](#working_with_labels_and_tooltips)
* [Using markers](#using_markers)
* [Working with colors <!--and color palettes-->](#colors)
  * [Setting colors to the elements](#color_setting)
  * [Color palettes](#color_palettes)   
 <!--<li class="main"><a href="#3d_line">3D Line chart</a></li> -->                                                                                                           
  <!--  <li class="main"><a href="#predefined_styles">Predefined Styles </a></li> -->                                                                                

<a name="overview"/>
## Overview

Data that is arranged in columns or rows on a worksheet can be plotted in a line chart. Line charts can display continuous data over time, set against a common scale, and are therefore ideal for showing trends in data at equal intervals. In a line chart, category data is distributed evenly along the horizontal axis, and all value data is distributed evenly along the vertical axis.

You should use a line chart if your category labels are text, and are representing evenly spaced values such as months, quarters, or fiscal years. You should also use a line chart if you have a few evenly spaced numerical labels, especially years. If you have more than ten numerical labels, use a Scatter Line Chart instead

Line and line with markers Displayed with or without markers to indicate individual data values, line charts are useful to show trends over time or ordered categories, especially when there are many data points and the order in which they are presented is important. If there are many categories or the values are approximate, you should use a line chart without markers.

Stacked line and stacked line with markers Displayed with or without markers to indicate individual data values, stacked line charts are useful to show the trend of the contribution of each value over time or ordered categories. If there are many categories or the values are approximate, you should use a stacked line chart without markers. 
Tip: For a better presentation of this type of data, you may want to consider using a stacked area chart instead.

100% stacked line and 100% stacked line with markers Displayed with or without markers to indicate individual data values, 100% stacked line charts are useful to show the trend of the percentage each value contributes over time or ordered categories. If there are many categories or the values are approximate, you should use a 100% stacked line chart without markers.
Tip: For a better presentation of this type of data, you may want to consider using a 100% stacked area chart instead.

 

to top
<a name="how_to_create_chart"/>
## Chart Building

Depending on data model and the visualization purpose the line chart may contain single series or multi series.
to top

<a name="single_series"/>
### Single-Series Line Chart

Let's see single-series line chart created using the following data - sales of ACME Corp. through several months in one year:

<table width="200px" style=" text-align:left; vertical-align:middle; border: 1px solid #cccccc; border-collapse: collapse;">
<tr>
<th width="100px" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Month
</th>
<th width="100px" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Sales
</th>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
January
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$10000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
February
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$12000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
March
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$18000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
April
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$11000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
May
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$9000
</td>
</tr>
</table>
Now we need to convert this data table into JSON, this format will be accepted by AnyChart. In terms of AnyChart data model we have one series of data (Sales) with categories that hold months names. Each point in series represents one month and sales volume. Converted JSON Data looks like:

```
  var data = new anychart.data.Set([
    ['January', 10000],
    ['February', 12000],
    ['March', 18000],
    ['April', 11000],
    ['May', 9000]
  ]);
  chart = anychart.lineChart();
  chart.line(data);
```
As you can see, we've specified chart's type with **anychart.lineChart()** method, defined data source with **chart.line(data)** and set data with **anychart.data.Set()**.

<!--        All we need to do to finalize line chart JSON creation is to define plot_type="CategorizedHorizontal" in <chart> node and add axes titles. Here it is - AnyChart can now visualize your data. Look at the chart sample below and click on on it to see Live Chart preview and full configured JSON.        -->

{sample}BCT\_LineChart\_01{sample}

to top

<a name="single_series_spline"/>
### Single-Series Spline Line Chart

For better look and feel of your charts you can use Spline chart type:

```
  var data = new anychart.data.Set([
    ['January', 10000],
    ['February', 12000],
    ['March', 18000],
    ['April', 11000],
    ['May', 9000]
  ]);
  chart = anychart.lineChart();
  chart.spline(data);
```
Here is the same chart as shown above, but in Spline mode:

{sample}BCT\_LineChart\_02{sample}

to top

<a name="step_line"/>
### Step Line Chart

Step line chart series display data points connected with Horizontal or Vertical segments. 

```
  var data = new anychart.data.Set([
    ['January', 10000],
    ['February', 12000],
    ['March', 18000],
    ['April', 11000],
    ['May', 9000]
  ]);
  chart = anychart.lineChart();
  chart.stepLine(data);
```
Here is the same chart as shown above, but in both StepLineForward and StepLineBackward modes:

{sample}BCT\_LineChart\_03{sample}

to top
<!--
<a name="step_line_shift"/>
### Shift Step Line Chart

When stepline is used along with bar charts you may find useful to "shift" it using shift_step_line attribute:

XML Syntax
XML Code
Plain code
01
<line_series shift_step_line="true" />
This allows you to create chart like this:

Live Sample:  Sample Shift Step Line Chart

to top
-->

<a name="multi_categorized"/>
### Multi-Series line chart

To compare two or more data rows you have to use multi-series line charts as it shown in the sample below.

Let's compare 2003 sales to 2004 sales:

<table width="300px" style=" text-align:left; vertical-align:middle; border: 1px solid #cccccc; border-collapse: collapse;">
<tr>
<th width="100px" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
Month
</th>
<th width="100px" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
2003 Sales
</th>
<th width="100px" style="background: url('http://anychart.com/products/anychart/docs/img/header_back.gif') repeat-x scroll 0 top #ebecee;border-left: 1px solid #D0D0D0;border-right: 1px solid #D0D0D0;border-top: 1px solid #D0D0D0;padding: 3px;padding-left: 10px;padding-right: 10px;text-align: left;vertical-align: middle;color: #222222;font-size: 11px;">
2004 Sales
</th>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
January
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
February
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
March
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
April
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$11000
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$15000
</td>
</tr>
<tr>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
May
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$9000
</td>
<td style="border: 1px solid;border-color: #D0D0D0;text-align: left;vertical-align: top;padding-left: 10px;padding-top: 8px;padding-right: 10px;padding-bottom: 8px;line-height: 18px;color: #333333;">
$14000
</td>
</tr>
</table>

As we do in single series line sample above we need to convert this table into JSON, the only difference between these two samples is the fact that now we have two series of data - one series for each year, and we give proper names to each series:

```
 var dataSet = new anychart.data.Set([
     ['January', '10000', '12000'],
     ['February', '12000', '15000'],
     ['March', '18000', '16000'],
     ['April', '11000', '15000'],
     ['May', '9000', '14000'],
   ]);
   var seriesData_2 = dataSet.mapAs({x: [0], value: [1]});
   var seriesData_1 = dataSet.mapAs({x: [0], value: [2]});
   chart = anychart.lineChart();
   chart.line(seriesData_1);
   chart.line(seriesData_2);
```
As we now have multi-series chart we don't want to set type for each series individually (there can be much more than two series in multi-series chart), so we add <data_plot_settings default_series_type="Line"/> node to <chart>. Now all series in chart will be of Line type by default.

{sample}BCT\_LineChart\_04{sample}

to top
<!--
<a name="multi_by_series"/>
### Multi-Series Line Chart grouped by series

Sometimes it is useful to visualize comparison in a different way - group values be series. In our sample it means that we want to compare sales in each year, not each sales in different months. You don't have to reformat your data to do this - all you need to do is to switch plot_type attribute to "CategorizedBySeriesVertical". Look at the resulting chart below:

Live Sample:  Sample Multi-Series Categorized By Series Line Chart

to top
-->
<a name="axes"/>
## Axes management

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in Working with Axes tutorial, in this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

to top

<a name="position"/>
### Positioning

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust position with `orientation()` method of **yAxis** or **xAxis** instances.

Positioning depends on plot type and inversion of axes, you will find list of all possible positining and inversion settings in Axes Positioning.

```
  chart.xAxis(0).orientation('top');
  chart.yAxis(0).orientation('right');
```

And here is the demonstration of this feature on the Single-series sample:

{sample}BCT\_LineChart\_05{sample}

<a name="inversion"/>
### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis `.inverted()`:

```
  chart.yScale().inverted(true);
```

And here is the demonstration of Y Axis inversion on the Single-series sample:

{sample}BCT\_LineChart\_06{sample}

to top

<a name="min_max"/>
### Minimum and Maximum values control

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale inversion chart sample above: minimal value on the Y Axis is 8.000, and maximum is 20.000. You can control these values by setting **.maximum** and **.minimum** attributes of the method:

```
chart.yScale().minimum('0').maximum('50000');
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_LineChart\_07{sample}

to top

<a name="using_styles"/>
## Using styles

In this section we will describe main parts of line chart style and demonstrate how style can be created and applied.<!-- Also you will see list of predefined styles.-->

The main idea of styles is to segregate visualization and data definition. Visual appearance of lines is defined using certain styles and then you just apply the style to the certain data elements. <--Style can be applied to data series, data category or single data point.-->

<!--Line chart style can be configured in <line_style> and <line_series> nodes.-->
Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when selected, when user moves cursor over an element, etc. More information about these features can be found in Interactivity tutorial.

to top

<a name="using_styles"/>
### Simple style

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is an JSON structure:

```
chart.line(data)
  .stroke('Rgb(86,86,26)', 4)
  .markers(null)
  .hoverStroke('darkred', 4);
```
Using such settings we've created a style that defines line of Gold color, rather thick line and a couple of effects. Also, we've defined that when user will move cursor over an element it will be highlighted with a DarkRed thick line.

Now we will take a sample single series chart described above, define style in JSON and apply it to all chart elements, using <line_series style="style1"/>

{sample}BCT\_LineChart\_08{sample}

to top
<!--
<a name="several_styles"/>
### Application of different styles to chart elements

Now we will demonstrate how to apply different styles to different series and data elements. To do it we will use multi-series sample that was demonstrated above and create two more styles: "style2" and "style3", both inherited from the "style1".

"style1" will be applied to "2003 Sales " series, "style2" will be applied to "2004 Sales " series and "style3" will be applied to the data element with a highest value (Note - we will find highest value and set its style manually in this sample. But with AnyChart it is possible to do that automatically using Thresholds, read more about it in Thresholds tutorial).

So - the definitions of the styles are:

Style 1:

XML Syntax
XML Code
Plain code
01
<line_style name="style1">
02
  <line thickness="4" color="Rgb(86,86,26)" />
03
  <effects>
04
    <bevel enabled="true" highlight_opacity="0.4" shadow_opacity="0.4" distance="2" />
05
    <drop_shadow enabled="true" opacity="0.3" />
06
  </effects>
07
  <states>
08
    <hover>
09
      <line color="DarkRed" thickness="6" />
10
    </hover>
11
  </states>
12
</line_style>
Style 2:
This style is inherited from "style1" and the only thing changed is a color of the line: from "Gold" to "Rgb(180,180,255)". We've used styles inheritance to avoid duplication of the common settings.

XML Syntax
XML Code
Plain code
01
<line_style name="style2" parent="style1">
02
  <line color="Rgb(180,180,255)" />
03
</line_style>
Style 3:
This style is also inherited from "style1" and the new color of the line is "Rgb(255,170,170)" and we made it dashed. And again we've used styles inheritance.

XML Syntax
XML Code
Plain code
01
<line_style name="style3" parent="style1">
02
  <line color="Rgb(255,170,170)" dashed="True" dash_length="5" space_length="5" />
03
</line_style>
And, as a result here is an example of these styles usage:

Live Sample:  Sample Line chart - Application of different styles to chart elements

to top
-->
<a name="working_with_labels_and_tooltips"/>
## Working with data labels and tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.

If you want to configure data labels and tooltips for all series - you should do that in **.labels** and **.tooltip** methods. You can tune their visual appearance, positioning and format.  Let's do that in the following example: we will make data labels appear to the top of the data points, also, we will format labels so they show only the value corresponding to the point and tooltip will show detailed description.

{sample}BCT\_LineChart\_09{sample}

<!--Related Help Topics:

* Learn more about labels and tooltips in Labels and tooltips
* Full Keywords reference and formatting guide:Labels and tooltips
* Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label> nodes.
-->to top

<a name="using_markers"/>
## Using markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including lines.

In the sample below we will take single-series data described above and mark the highest point in series with a "Star5" of the "Gold" color.

To make marker visually appealing we will create a style, that will tell AnyChart to set marker size to 16 pixels in normal state, and make it bigger (22 pixels) when user moves cursor over an element.

```
 {x: 'March', value: 18000, marker:{type:'star5', fill:'gold', size: 12}}
    
```
And here is a result - March is the most successful month and we are showing this on the chart:

{sample}BCT\_LineChart\_10{sample}
<!--
Related help topics:

You can read more about working with markers in Markers tutorial.
Full reference of marker style can be found in XML Reference, particularly <marker_style> node.
to top
-->
<a name="colors"/>
## Working with colors <!--and color palettes-->

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special colors. But you can use your own palettes or palettes shipped with AnyChart. Also you can set and apply the color to exact data series or data point.

to top

<a name="color_setting"/>
Setting colors to the elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set "color" attribute in the <series> node. In the sample below we have 5 series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_LineChart\_11{sample}
<!--
In the sample below we will see how we can colorize individual points. We have chart with one series and predefined color for all elements. We will set "Rgb(180,77,77)" color for minimum point and "Rgb(77,180,77)" for the maximal one. As you see it is very easy to do by setting "color" attribute for <point> node.

Live Sample:  Sample Line chart - Setting colors to the series

Important Note:

AnyChart takes care of visualization and users convenience seriously - that is why we have a number of ways to set colors, for example, instead of "Rgb(180,77,77)" you can set "HSV(?,?,?)" or "HTMLConstant" or "#HEXCode"- and the color will be the same. Depending on your system/site/application design you may need - and use - any of this color setting methods. But even this is not everything about colors in AnyChart: read more about setting colors below and in the following Help Sections:

Different ways of setting colors of elements
Advanced coloring techniques in Styles tutorial
to top-->
<!--
<a name="color_palettes"/>
Color palettes

AnyChart allows to apply color palettes to all series or to the exact series. In the first case each next series will take each next color from palette. If the number of the colors in palette is less than the number of series - palette will be looped. If you have only one series it will be colored by the first color in the palette. To apply palette to all series we have to set "palette" attribute in <data> node. Here it is:

Live Sample:  Sample Line chart - Setting Palette to all series

When you have one series only, sometimes it is useful to color each point in series. You can do it by setting color of each point individually or you can apply a palette. For sure the second method is easier and more useful. To apply palette to the exact series you should set "palette" attribute for exact <series> node.

Live Sample:  Sample Line chart - Working with palettes - Setting Palettes to the certain series

In the samples above we have shown usage of predefined palettes only, but AnyChart allows to create your own custom palettes. To learn more about it read Palettes tutorial.

to top

to top

Current Page Online URL: Line Chart-->