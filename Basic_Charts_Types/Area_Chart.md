#Area Chart

* [Overview](#overview)
* [Chart](#chart)
  * [Single Series Area Chart](#single_series_area_chart)
  * [Single Series Spline Area Chart](#single_series_spline_area_chart)
  * [Multi-series](#multi-series)
* [Axes](#axes)
  * [Orientation](#orientation)
  * [Inversion](#inversion)
  * [Minimum and Maximum](#minimum_and_maximum)
* [Visualization](#visualization)
  * [Basic Sample](#basic_sample)
  * [Image Fill](#image_fill)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)
* [Hatch Fills](#hatch_fills)

## Overview

Data that is arranged in columns or rows on a worksheet can be plotted in an area chart. Area charts emphasize the 
magnitude of change over time, and can be used to draw attention to the total value across a trend. For example, data 
that represents profit over time can be plotted in an area chart to emphasize the total profit.

## Chart

Depending on the data model and the visualization purpose the area chart may contain one or several series.

### Single Series Area Chart

Let's have a look at the single series area chart created using the following data: sales of ACME Corp. through several months in a year:

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
Now we need to convert this data table into the format that can be used by AnyChart. See more about formats in 
[Supported Data Formats](../Working_with_Data/Supported_Data_Formats) article.
  
In terms of AnyChart data model we have one series of data (Sales) with categories that hold months names. Each point 
in series represents monthly sales volume. We will use the easiest method of data setting, which looks 
like this:

```
    anychart.data.set([
        ['January', 10000],
        ['February', 12000],
        ['March', 18000],
        ['April', 11000],
        ['May', 9000]
    ]);
    chart = anychart.area();
    chart.area(data);
```

As you can see, we've created a Data Set. Every object is a point with parameters. The first column is a 
category and the second one is a value.
  
  
Here it is: now AnyChart can visualize your data. Look at the chart sample below and click on "Launch in playground" 
to see the full source code, alter and play with the sample or download it.

{sample}BCT\_AreaChart\_01{sample}

### Single Series Spline Area Chart

For better look of your charts you can use SplineArea chart type:

```
    // data
    var data = anychart.data.set([
        ['January', 10000],
        ['February', 12000],
        ['March', 18000],
        ['April', 11000],
        ['May', 9000]
    ]);

    // setting chart type
    chart = anychart.area();
	
	// set data and define chart type
    chart.splineArea(data);
```

Here is the same chart as shown above, but in Spline mode:

{sample}BCT\_AreaChart\_02{sample}

### Multi-series

To compare two or more data sets you should use multi-series area charts as it is shown in the sample below.
  
Let's compare 2003 sales to 2004 sales:

<table width="375" border="1" class="dtTABLE">
<tbody>
<tr>
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
</tbody>
</table>

As we have done in single series area sample above we need to convert this table in AnyChart format, the only difference between 
these two samples is the fact that now we have two series of the data: one series for each year, and we give proper 
names to each series:

```
    var dataSet = anychart.data.set([
        ['January', 10000, 12000],
        ['February', 12000, 15000],
        ['March', 18000, 16000],
        ['April', 11000, 15000],
        ['May', 9000, 14000],
    ]);
    var seriesData_1 = dataSet.mapAs({x: [0], value: [1]});
    var seriesData_2 = dataSet.mapAs({x: [0], value: [2]});
    chart.area(seriesData_1).name('2004');
    chart.area(seriesData_2).name('2005');
```

As now we have multi-series chart we don't want to set the **chart type** for each series individually (there can be 
more than two series in a multi-series chart), so we set the **chart** as {api:anychart#area}**anychart.area()**{api}. Now all series in
the chart will be of Area type by default.

{sample}BCT\_AreaChart\_03{sample}

## Axes

In AnyChart, axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis 
scale, settings, etc. In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values, you can find all axis features in
[Axes tutorial](../Axes_and_Grids/Axis_Basics).

### Orientation

With AnyChart you can place axes to any side of the chart, all you need to do is to adjust orientation with 
{api:anychart.core.axes.Linear#orientation}**.orientation()**{api} parameter of {api:anychart.core.axes.Linear}**.yAxis()**{api} or {api:anychart.core.axes.Linear}**.xAxis()**{api} method.
  
Axes position depends on plot type, orientation and inversion of axes.

```
    chart.xAxis(0).orientation('top');
    chart.yAxis(0).orientation('right');
```

Here is the demonstration of this feature in the Single-series sample:

{sample}BCT\_AreaChart\_04{sample}

### Inversion

AnyChart allows you to invert any axis (Y, X or any extra). Inversion is controlled by axis **.inverted()**:

```
  chart.yScale().inverted(true);
```

And here is the demonstration of Y Axis inversion on the Single-series sample:

{sample}BCT\_AreaChart\_05{sample}

### Minimum and Maximum

AnyChart calculates axis minimum and maximum automatically. You can see this on the scale inversion chart sample above: the minimal value on the Y Axis is 8.000, and the maximum is 20.000. You can control these values by setting **.maximum()** and **.minimum()**. :

```
    chart.yScale().minimum(0).maximum(50000);
```

Here is the demonstration of maximum and minimum values in the Single-series sample:

{sample}BCT\_AreaChart\_06{sample}

## Visualization

In this section we will describe main parts of area chart visualization and ways to adjust it. Visual appearances of areas are defined using certain methods. For Area chart the main thing is the {api:anychart.graphics.vector.Fill}**.fill()**{api} method.

### Basic Sample

Now, let's look how to change the look of an Area.  Here is a basic sample:

```
    chart.area(data)
        .fill('Gold')
        .hoverFill("darkred")
        .stroke('#56561a', 4, 0.4)
        .hatchFill('diagonalbrick', 'gray')
        .hoverHatchFill('diagonalbrick', 'black');
```

Using such settings we've created a look with area colored in Gold, rather thick border line, hatch filled with DiagonalBrick. Also, we've defined that when the area is hovered it's hatch will be highlighted with black and the chart will be filled with dark red.

Now let's apply this style to the chart:

{sample}BCT\_AreaChart\_07{sample}

### Image Fill

Color is not the only way to design a chart. In this sample we will demonstrate how to use a picture as a fill:

```
    chart.area(data).fill({
        src: 'https://static.anychart.com/anychart_site_header.png',
        mode: acgraph.vector.ImageFillMode.STRETCH
    })
```

{sample}BCT\_AreaChart\_08{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.

If you want to configure data labels and tooltips for all series - you should use {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} and {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} methods. Adding attributes with values to these methods, you can change visual appearance, position and format of the same-named elements.

When formatting data labels' text we use {api:anychart.core.ui.LabelsFactory#textFormatter}**.textFormatter()**{api} method to show month's name. 

```
    var series= chart.bar(data);
    series.labels().enabled(true).rotation(90).textFormatter(function(point){
            return point.x;
    });
    series.tooltip().enabled(true).title().enabled(true).text('Your Tooltip Title');
```

{sample}BCT\_AreaChart\_10{sample}

## Markers

Marker is an object with a specified shape, size and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including areas.
  
  
In the sample below we take single-series data described above and mark the highest point in series with a **"Star"** of the **"Gold"** color.

To make the marker more visually appealing we set its size to 12px.

```
    {x: 'March', value: 18000, marker:{type:'star5', fill:'gold', size: 12, enabled: true}, hoverMarker: {size: 22}},
```

It can be clearly seen on the chart that March was the most successful month in sales:

{sample}BCT\_AreaChart\_09{sample}

## Hatch Fills

AnyChart technology allows printing charts out. Some printers may render colors differently from the image we see on monitors, so it may be hard to distinguish charts colored differently on monitors and similarly on prints. Also it is impossible to identify colors on prints of monochrome printers. AnyChart has a very useful feature - hatch fillings, ideal for differentiating elements on black and white display or for those who are color blind. Hatch fill is fully-independent structure, it doesn't rely on color fill and has its own settings. 

To demonstrate hatch fill feature we've prepared the following sample. As you can see, it is completely monochrome. We have a chart with 3 series, each with 5 data points. For every series we've applied different hatch fills by setting hatch type for the {api:anychart.charts.Cartesian#hatchFillPalette}**.hatchFill()**{api} parameter.

```
    .hatchFill('soliddiamond')
    .hatchFill('forwarddiagonal')
    .hatchFill('backwarddiagonal');
```

{sample}BCT\_AreaChart\_11{sample}