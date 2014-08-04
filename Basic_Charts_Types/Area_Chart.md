#Area Chart

* [Overview](#overview)
* [Chart](#chart)
  * [Single Series Area Chart](#single_series)
  * [Single Series Spline Area Chart](#single_series_spline)
  * [Multi-series Area Chart](#multi_series)
* [Axes](#axes)
  * [Positioning](#position)
  * [Inversion](#inversion)
  * [Minimum and Maximum Values](#min_max)
* [Visualization](#visualization)
  * [Basic Sample](#visualization_basic_sample)
  * [Image Fill](#visualization_image_fill)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Hatch Fill](#hatches)

<a name="overview"/>
## Overview
Data that is arranged in columns or rows on a worksheet can be plotted in an area chart. Area charts emphasize the magnitude of change over time, and can be used to draw attention to the total value across a trend. For example, data that represents profit over time can be plotted in an area chart to emphasize the total profit.

<a name="chart"/>
## Chart
Depending on data model and the visualization purpose the area chart may contain one series or several series.

<a name="single_series"/>
### Single Series Line Area Chart

Let's see single series area chart created using the following data: sales of ACME Corp. through several months in one year:

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

Now we need to convert this data table into the format that can be used by AnyChart. See more about formats in [Supported Data Formats](../Supported_Data_Formats) article.
In terms of AnyChart data model we have one series of data (Sales) with categories that hold months names. Each point in series represents one month and sales volume. We will use the basic and the easiest method of data setting, it looks like this:

```
 anychart.data.set([
      ['January', 10000],
      ['February', 12000],
      ['March', 18000],
      ['April', 11000],
      ['May', 9000]
 ]);
 chart = anychart.areaChart();
 chart.area(data);
```
As you can see, we've created a Data Set. Every object is a point, each has some attributes. The first column is as category and the second column is a value.

Here it is: AnyChart can now visualize your data. Look at the chart sample below and click on "Launch in playground" to see the full source code, alter and play with the sample or download it.

{sample}BCT\_AreaChart\_01{sample}

<a name="single_series_spline"/>
### Single Series Spline Area Chart

For better look and feel of your charts you can use SplineArea chart type:

```
 anychart.data.set([
   ['January', 10000],
   ['February', 12000],
   ['March', 18000],
   ['April', 11000],
   ['May', 9000]
 ]);
 chart = anychart.areaChart();
 chart.splineArea(data);
```

Here is the same chart as shown above, but in Spline mode:

{sample}BCT\_AreaChart\_02{sample}

<a name="multi_series"/>
### Multi-series Area Chart

To compare two or more data sets you have to use multi-series area charts as it is shown in the sample below.

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

As we do in single series area sample above we need to convert this table AnyChart format, the only difference between these two samples is the fact that now we have two series of the data: one series for each year, and we give proper names to each series:

```
  var dataSet = anychart.data.set([
    ['January', '10000', '12000'],
    ['February', '12000', '15000'],
    ['March', '18000', '16000'],
    ['April', '11000', '15000'],
    ['May', '9000', '14000'],
  ]);
  var seriesData_1 = dataSet.mapAs({x: [0], value: [1]});
  var seriesData_2 = dataSet.mapAs({x: [0], value: [2]});
  chart = anychart.areaChart();
  chart.container('container');
  chart.area(seriesData_1).name('2004');
  chart.area(seriesData_2).name('2005');
```

As we now have multi-series chart we don't want to set **type of chart** for each series individually (there can be much more than two series in multi-series chart), so we set **chart** as **anychart.areaChart()**. Now all series in the chart will be of Area type by default.

{sample}BCT\_AreaChart\_03{sample}

<a name="Axes"/>
## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in Axes tutorial, in this section we will quickly demonstrate how axis position can be adjusted, how axis scale can be inverted and how minimum and maximum values can be controlled.

<a name="position"/>
### Positioning

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust position with `orientation()` method of **yAxis** or **xAxis** instances.

Positioning depends on plot type and inversion of axes.

```
  chart.xAxis(0).orientation('top');
  chart.yAxis(0).orientation('right');
```

And here is the demonstration of this feature on the Single-series sample:

{sample}BCT\_AreaChart\_04{sample}

<a name="inversion"/>
### Inversion

AnyChart allows you to invert any axis: Y, X or any extra axis. Inversion is controlled by axis `.inverted()`:

```
  chart.yScale().inverted(true);
```

And here is the demonstration of Y Axis inversion on the Single-series sample:

{sample}BCT\_AreaChart\_05{sample}

<a name="min_max"/>
### Minimum and Maximum

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale inversion chart sample above: minimal value on the Y Axis is 8.000, and maximum is 20.000. You can control these values by setting **.maximum** and **.minimum**:

```
chart.yScale().minimum('0').maximum('50000');
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_AreaChart\_06{sample}

<a name="visualization"/>
## Visualization

In this section we will describe main parts of area chart visualization and ways to adjust it. Visual appearance of areas is defined using certain methods. For Area chart the main thing is the **.fill()** method. 

<a name="visualization_basic_sample"/>
### Basic sample

Now, let's look how to change the look of an Area.  Here is a basic sample:

```
chart.area(data)
  .fill('Gold')
  .hoverFill("darkred")
  .stroke('#56561a', 4, 0.4)
  .hatchFill('diagonalbrick', 'gray')
  .hoverHatchFill('diagonalbrick', 'black');
```
Using such settings we've created a look that defines area of Gold color, rather thick border line, hatch filled with DiagonalBrick. Also, we've defined that when user will move cursor over the chart it's hatch will be highlighted with a black and chart will be filled with darkred.

Now we will apply the style to the chart:

{sample}BCT\_AreaChart\_07{sample}

<a name="visualization_image_fill"/>
### Image fill

Color is not the only way to design a chart. In this sample we will demonstrate how to use picture as a fill:  
```
    chart.area(data).fill({
            src: 'http://static.anychart.com/anychart_site_header.png',
            mode: acgraph.vector.ImageFillMode.TILE
        })
```

{sample}BCT\_AreaChart\_08{sample}

<a name="labels_and_tooltips"/>
## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips. Full explanation of formatting and tuning visual appearance for them can be found in Labels and Tooltips.

If you want to configure data labels and tooltips for all series - you should do that in **.labels** and **.tooltip** methods. You can tune their visual appearance, positioning and format. 

When formatting data labels text we will use **.textFormatter** to show month name. Otherwise sales will be displayed here. 

```
    var series= chart.bar(data);
    series.labels().enabled(true).rotation(90).textFormatter(function(point){
        return point.x;
    });
    series.tooltip().enabled(true).title().enabled(true).text('Your Tooltip Title');
```
{sample}BCT\_AreaChart\_10{sample}

<a name="using_markers"/>
## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including areas.

In the sample below we will take single-series data described above and mark the highest point in series with a **"Star"** of the **"Gold"** color.

To make marker visually appealing we will tell AnyChart to set marker size to 12 pixels.

```
chart.marker('March, 18000').type('star').size(12).fill('Gold');
```

And here is a result - March is the most successful month and we are showing this on the chart:

{sample}BCT\_AreaChart\_09{sample}


<a name="hatches"/>
## Hatch fills

AnyChart technology allows printing of charts. Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and it has own settings. 

To demonstrate hatch fill feature we've prepared the following sample. As you see it is completely monochrome. We have chart with 5 series with 3 data points in each. For every series we've applied different hatch fills by setting hatch_type for **".hatchFill"** method.
```
.hatchFill('soliddiamond')
.hatchFill('forwarddiagonal')
.hatchFill('backwarddiagonal');
```
{sample}BCT\_AreaChart\_11{sample}

