#Area Chart

* [Overview](#overview)
* [Chart Building](#how_to_create_chart)
  * [Single-Series Area chart](#single_series)
  * [Single-Series Spline Area chart](#single_series_spline)
  * [Multi-Series Area chart](#multi_categorized)
* [Axes management](#Axes)
  * [Positioning](#position)
  * [Inversion](#inversion)
  * [Minimum and Maximum values control](#min_max)
* [Using styles](#using_style)
  * [Simple style sample](#simple_style)
  * [Application of an image as a chart color](#image_styles)
* [Working with data labels and tooltips](#working_with_labels_and_tooltips)
* [Using markers](#using_markers)
* [Working with colors and color palettes](#colors)
* [Working with hatch fills and hatch palettes](#hatches)
  * [Setting hatch fills to the elements](#hatch_setting)
  * [Hatch palettes](#hatch_palettes)

<a name="overview"/>
## Overview
Data that is arranged in columns or rows on a worksheet can be plotted in an area chart. Area charts emphasize the magnitude of change over time, and can be used to draw attention to the total value across a trend. For example, data that represents profit over time can be plotted in an area chart to emphasize the total profit.

<a name="how_to_create_chart"/>
## Chart Building
Depending on data model and the visualization purpose the area chart may contain single series or multi series.

<a name="single_series"/>
### Single-Series Line Area Chart

Let's see single-series area chart created using the following data - sales of ACME Corp. through several monthes in one year:

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

Now we need to convert this data table into JSON, this format will be accepted by AnyChart.
In terms of AnyChart data model we have one series of data (Sales) with categories that hold months names. Each point in series represents one month and sales volume. Converted JSON Data looks like:

```
 new anychart.data.Set([
      ['January', 10000],
      ['February', 12000],
      ['March', 18000],
      ['April', 11000],
      ['May', 9000]
 ]);
  chart = anychart.areaChart(data);
 chart.area(data);
```
As you can see, we've created Data Sets. Every object is a point, which has some attributes.
This instance sets first column attribute as category and second column attribute as value.

Here it is - AnyChart can now visualize your data. Look at the chart sample below and click on it to see Live Chart preview and full configured JSON.

{sample}BCT\_AreaChart\_1{sample}

<a name="single_special_spline"/>
### Single-Series Spline Area Chart

For better look and feel of your charts you can use SplineArea chart type:

```
 new anychart.data.Set([
   ['January', 10000],
   ['February', 12000],
   ['March', 18000],
   ['April', 11000],
   ['May', 9000]
 ]);
 chart = anychart.areaChart(data);
 chart.splineArea(data);
```

Here is the same chart as shown above, but in Spline mode:

{sample}BCT\_AreaChart\_2{sample}

<a name="multi_categorized"/>
### Multi-Series area chart

To compare two or more data sets you have to use multi-series area charts as it shown in the sample below.

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

As we do in single series area sample above we need to convert this table into JSON, the only difference between these two samples is the fact that now we have two series of data - one series for each year, and we give proper names to each series:

```
  var dataSet = new anychart.data.Set([
    ['January', '10000', '12000'],
    ['February', '12000', '15000'],
    ['March', '18000', '16000'],
    ['April', '11000', '15000'],
    ['May', '9000', '14000'],
  ]);
  var Sales2003data = dataSet.mapAs({x: [0], value: [2]});
  var Sales2004data = dataSet.mapAs({x: [0], value: [1]});
  chart = anychart.areaChart();
```

As we now have multi-series chart we don't want to set **charttype** for each series individually (there can be much more than two series in multi-series chart), so we set **chart** as **anychart.areaChart()**. Now all series in chart will be of Area type by default.

{sample}BCT\_AreaChart\_3{sample}

<a name="Axes"/>
## Axes management

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in Working with Axes tutorial, in this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

<a name="position"/>
### Positioning

With AnyChart you can place axes to any side if the chart, all you need to do is to adjust position with `orientation()` method of **yAxis** or **xAxis** instances.

Positioning depends on plot type and inversion of axes, you will find list of all possible positining and inversion settings in Axes Positioning.

```
  chart.xAxis(0).orientation('top');
  chart.yAxis(0).orientation('right');
```

And here is the demonstration of this feature on the Single-series sample:

{sample}BCT\_AreaChart\_5{sample}

<a name="inversion"/>
### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis **`.inverted()`**:

```
  chart.yScale().inverted(true);
```

And here is the demonstration of Y Axis inversion on the Single-series sample:

{sample}BCT\_AreaChart\_6{sample}

<a name="min_max"/>
### Minimum and Maximum values control

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale inversion chart sample above: minimal value on the Y Axis is 8.000, and maximum is 20.000. You can control these values by setting **.maximum** and **.minimum** attributes of the method:

```
chart.yScale().minimum('0').maximum('50000');
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_AreaChart\_7{sample}

<a name="using_style"/>
## Using styles

In this section we will describe main parts of area chart style and demonstrate how style can be created and applied. Also you will see list of predefined styles.

The main idea of styles is to segregate visualization and data definition. Visual appearance of areas is defined using certain styles and then you just apply the style to the certain data elements. Style can be applied to data series, data category or single data point.

Area chart style can be configured in **.fill()** method. On the image below you can see what area_style consists of: fill (including solid color fill, hatch fill, image fill and gradient fill), area line and effects applied to whole area.

![](http://www.anychart.com/products/anychart/docs/users-guide/img/area_styles_diagram.jpg)

Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when selected, when user moves cursor over an element, etc. More information about these features can be found in Interactivity tutorial.

<a name="simple_style"/>
### Simple style

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is an JSON structure:

```
chart.area(data)
  .fill('Gold')
  .hoverFill("darkred")
  .stroke('#56561a', 4, 0.4)
  .hatchFill('diagonalbrick', 'gray')
  .hoverHatchFill('diagonalbrick', 'black');
```
Using such settings we've created a style that defines area of Gold color, rather thick area line, hatch filled with DiagonalBrick and a couple of effects. Also, we've defined that when user will move cursor over an element it's hatch will be highlighted with a black and chart will be filled with darkred.

Now we will take a sample single series chart described above, define style in JSON and apply it to all chart elements

{sample}BCT\_AreaChart\_8{sample}

<a name="image_styles"/>
### Application of an image as a chart color

Color is not the only way to disign a chart. In this instance we will demonstrate how to use picture as a common color alternative.  
```
    chart.area(data).fill({
            src: 'http://static.anychart.com/kitty.png',
            mode: acgraph.vector.ImageFillMode.TILE
        })
```

{sample}BCT\_AreaChart\_9{sample}

<a name="working_with_labels_and_tooltips"/>
## Working with data labels and tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.

If you want to configure data labels and tooltips for all series - you should do that in **.labels** and **.tooltip** methods. You can tune their visual appearance, positioning and format. 

When formatting data labels text we will use **.textFormatter** to show month name. Otherwise sales will be displayed here. 

```
    var series= chart.bar(data);
    series.labels().enabled(true).rotation(90).textFormatter(function(point){
        return point.x;
    });
    series.tooltip().enabled(true).title().enabled(true).text('Your Tooltip Title');
```
{sample}BCT\_AreaChart\_11{sample}

<a name="using_markers"/>
## Using markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including areas.

In the sample below we will take single-series data described above and mark the highest point in series with a **"Star"** of the **"Gold"** color.

To make marker visually appealing we will create a style, that will tell AnyChart to set marker size to 12 pixels.

```
chart.marker('March, 18000').type('star').size(12).fill('Gold');
```

And here is a result - March is the most successful month and we are showing this on the chart:

{sample}BCT\_AreaChart\_10{sample}

Related help topics:

Full reference of marker style can be found in XML Reference, particularly <area_series><marker_settings> and <marker_style> method.

<a name="colors"/>
## Working with colors and color palettes

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special colors. But you can use your own palettes or palettes shipped with AnyChart. Also you can set and apply the color to exact data series or data point.

<a name="hatches"/>
## Working with hatch fills and hatch palettes

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings and palettes. To see whole range of available hatch types see Hatch tutorial.

<a name="hatch_setting"/>
### Setting hatch fills to the elements

To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting **hatch_type** for **".hatchFill"** method.
```
  chart.splineArea(seriesData_1).hatchFill('horizontalbrick');
  chart.splineArea(seriesData_2).hatchFill('zigzag');
```

{sample}BCT\_AreaChart\_12{sample}



Current Page Online URL: Area Chart
