# Line Chart

* [Overview](#overview)
* [Chart](#chart)
  * [Single Series Line Chart](#single_series_line_chart)
  * [Single Series Spline Chart](#single_series_spline_chart)
  * [Single Series Step Line Chart](#single_series_step_line_chart)
  * [Multi-series Line Chart](#multi-series_line_chart)
* [Axes](#axes)
  * [Orientation](#orientation)
  * [Inversion](#inversion)
  * [Minimum and Maximum](#minimum_and_maximum)
* [Visualization](#visualization)
  * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Colors](#colors)
  * [Colorizing Elements](#colorizing_elements)

## Overview

Data that is arranged in columns or rows on a worksheet can be plotted in a line chart. Line charts can display 
continuous data over time, set against a common scale, and are therefore ideal for showing trends in data at equal 
intervals. In a line chart, category data is distributed evenly along the horizontal axis, and all value data is 
distributed evenly along the vertical axis.
  
  
You should use a line chart if your category labels are text, and are representing evenly spaced values such as months, 
quarters, or fiscal years. You should also use a line chart if you have a few evenly spaced numerical labels, especially
 years.
  
  
[Line](#single_series) and [line with markers](#using_markers) Displayed with or without markers to indicate 
individual data values, line charts are useful to show trends over time or ordered categories, especially when there 
are many data points and the order in which they are presented is important. If there are many categories or the values 
are approximate, you should use a line chart without markers.
  
  
Stacked line and stacked line with markers Displayed with or without markers to indicate individual data values, 
stacked line charts are useful to show the trend of the contribution of each value over time or ordered categories. If 
there are many categories or the values are approximate, you should use a stacked line chart without markers. 
  
  
**Tip:** For a better presentation of this type of data, you may want to consider using a 
[stacked area](Stacked_Area-SplineArea_Charts) chart instead.
  
  
100% stacked line and 100% stacked line with markers Displayed with or without markers to indicate individual data 
values, 100% stacked line charts are useful to show the trend of the percentage each value contributes over time or 
ordered categories. If there are many categories or the values are approximate, you should use a 
[100% stacked line chart](Percent-Stacked_Area-SplineArea_Charts) without markers.

**Tip:** For a better presentation of this type of data, you may want to consider using a 100% stacked area chart 
instead.

## Chart

Depending on data model and the visualization purpose the line chart may contain single series or multi series.

### Single Series Line Chart

Let's see single-series line chart created using the following data - sales of ACME Corp. through several months in one 
year:

<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Month</b></th>
<th width="88"><b>Sales</b></th>
</tr>
<tr>
<td>January</td>
<td>$10000</td>
</tr>
<tr>
<td>February</td>
<td> $12000</td>
</tr>
<tr>
<td>March</td>
<td> $18000</td>
</tr>
<tr>
<td>April</td>
<td> $11000</td>
</tr>
<tr>
<td>May</td>
<td> $9000</td>
</tr>
</tbody></table>

Now we need to convert this data table into acceptable format, this format will be accepted by AnyChart. In terms of 
AnyChart data model we have one series of data (Sales) with categories that hold months names. Each point in series 
represents one month and sales volume. Converted Data looks like:

```
    var data = anychart.data.set([
        ['January', 10000],
        ['February', 12000],
        ['March', 18000],
        ['April', 11000],
        ['May', 9000]
    ]);
    chart = anychart.lineChart();
    chart.line(data);
```

As you can see, we've specified chart's type with **anychart.lineChart()** method, defined data source with 
**chart.line(data)** and set data with **anychart.data.set()**.

{sample}BCT\_LineChart\_01{sample}

### Single Series Spline Chart

For better look and feel of your charts you can use Spline chart type:

```
    var data = anychart.data.set([
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

### Single Series Step Line Chart

Step line chart series display data points connected with Horizontal or Vertical segments. 

```
    var data = anychart.data.set([
        ['January', 10000],
        ['February', 12000],
        ['March', 18000],
        ['April', 11000],
        ['May', 9000]
    ]);
    chart = anychart.lineChart();
    chart.stepLine(data);
```

Here is the same chart as shown above, but in Step Line mode:

{sample}BCT\_LineChart\_03{sample}

### Multi-series Line Chart

To compare two or more data rows you have to use multi-series line charts as it shown in the sample below.

Let's compare 2003 sales to 2004 sales:

<table width="375" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Month</b></th>
<th width="88"><b>2003 Sales</b></th>
<th width="88"><b>2004 Sales</b></th>	
</tr>
<tr>
<td>January</td>
<td>$10000</td>
<td>$12000</td>	
</tr>
<tr>
<td>February</td>
<td> $12000</td>
<td> $15000</td>	
</tr>
<tr>
<td>March</td>
<td> $18000</td>
<td> $16000</td>	
</tr>
<tr>
<td>April</td>
<td> $11000</td>
<td> $15000</td>	
</tr>
<tr>
<td>May</td>
<td> $9000</td>
<td> $14000</td>	
</tr>
</tbody></table>

As we do in single series line sample above we need to convert this table into acceptable format, the only difference 
between these two samples is the fact that now we have two series of data - one series for each year, and we give 
proper names to each series:

```
    var dataSet = anychart.data.set([
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

As we now have multi-series chart we don't want to set type for each series individually (there can be much more than 
two series in multi-series chart), so we add 'anychart.lineChart()' parameter to **chart**. Now all series in chart will
 be 
of Line type by default.

{sample}BCT\_LineChart\_04{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis 
scale and settings and many more. All axis features are described in Working with Axes tutorial, in this section we will
 quickly demonstrate how axis orientation can be adjusted, how axis scale can be inverted and how minimum and maximum 
values can be controlled.

### Positioning

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust orientation with 
**orientation()** parameter of **.yAxis()** or **.xAxis()** methods.
  
  
Positioning depends on plot type and inversion of axes, you will find list of all possible orientation and inversion 
settings in Axes Positioning.

```
    chart.xAxis(0).orientation('top');
    chart.yAxis(0).orientation('right');
```

And here is the demonstration of this feature on the Single-series sample:

{sample}BCT\_LineChart\_05{sample}

### Inversion

AnyChart allows to invert any axis: Y, X or any extra axis. Inversion is controlled by axis **.inverted()**:

```
    chart.yScale().inverted(true);
```

And here is the demonstration of Y Axis inversion on the Single-series sample:

{sample}BCT\_LineChart\_06{sample}

### Minimum and Maximum

By default AnyChart calculates axis minimum and maximum automatically, you can see this on the scale inversion chart 
sample above: minimal value on the Y Axis is 8.000, and maximum is 20.000. You can control these values by setting 
**.maximum()** and **.minimum()** parameters of **.yScale()** method:

```
    chart.yScale().minimum('0').maximum('50000');
```

And here is the demonstration of maximum and minimum values on the Single-series sample:

{sample}BCT\_LineChart\_07{sample}

## Visualization

In this section we will describe main parts of line chart style and demonstrate how style can be applied.<!-- Also you 
will see list of predefined styles.-->

The main idea of styles is to segregate visualization and data definition. Visual appearance of lines is defined using 
certain styles. <!--Style can be applied to data series, data category or single data point.-->

<!--Line chart style can be configured in <line_style> and <line_series> nodes.-->
Also, styles are used to make charts interactive, you can define how elements will be displayed by default, when user 
moves cursor over an element.<!-- More information about these features can be found in Interactivity tutorial.-->

### Basic Sample

Now, let's look how to create a simple style and apply it to the chart. As we've already said style consists of several elements, here is an acceptable structure:

```
    chart.line(data)
        .stroke('Rgb(86,86,26)', 4)
        .markers(null)
        .hoverStroke('darkred', 4);
```

Using such settings we've defined line of Gold color, rather thick line and a couple of effects. Also, we've 
defined that when user will move cursor over an element it will be highlighted with a DarkRed 
thick line.
<!--
Now we will take a sample single series chart described above, define style in JSON and apply it to all chart elements, 
using <line_series style="style1"/>
-->
{sample}BCT\_LineChart\_08{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.<!-- Full explanation of formatting 
and tuning visual appearance for them can be found in Labels and tooltips.-->
  
  
If you want to configure data labels and tooltips for all series - you should do that in **.labels()** and 
**.tooltip()** methods. You can tune their visual appearance, positioning and format.  Let's do that in the following 
example: we will make data labels appear to the top of the data points, also, we will format labels so they show only 
the value corresponding to the point and tooltip will show detailed description.

{sample}BCT\_LineChart\_09{sample}

<!--Related Help Topics:

* Learn more about labels and tooltips in Labels and tooltips
* Full Keywords reference and formatting guide:Labels and tooltips
* Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label> nodes.
-->

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. 
AnyChart allows to add markers to any data element including lines.
  
  
In the sample below we will take single-series data described above and mark the highest point in series with a "Star5" 
of the "Gold" color.
  
  
To make marker visually appealing we will create a style, that will tell AnyChart to set marker size to 12 pixels in 
normal state, and make it bigger (16 pixels) when user moves cursor over an element.

```
    {x: 'March', value: 18000, marker:{type:'star5', fill:'gold', size: 12}, hoverMarker: {size: 22}}
```

And here is a result - March is the most successful month and we are showing this on the chart:

{sample}BCT\_LineChart\_10{sample}
<!--
Related help topics:

You can read more about working with markers in Markers tutorial.
Full reference of marker style can be found in XML Reference, particularly <marker_style> node.
-->

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically even if you have not define special
 colors. But you can set and apply the color to exact data series or data point.

### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we 
need to set "stroke" attribute for a series. In the sample below we have 5 series with sample data and we'll 
color each series to different color. Here is the sample:

{sample}BCT\_LineChart\_11{sample}
<!--Current Page Online URL: Line Chart-->