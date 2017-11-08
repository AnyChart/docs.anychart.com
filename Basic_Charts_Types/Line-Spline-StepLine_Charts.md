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
* [Samples](#samples)

## Overview

Data that is arranged in columns or rows on a worksheet can be plotted in a line chart. Line charts display continuous data over time, set against a common scale, and are therefore ideal for showing trends in data at equal intervals. In a line chart, categories are evenly distributed along the horizontal axis, and all value data is distributed along the vertical axis.  
  
  
It's better to use a line chart if your category labels are textual and if they represent evenly spaced values such as months, quarters, or fiscal years.  
  
  
Displayed with or without markers to indicate individual data values, line charts are good at showing trends over the ordered categories, especially when there are a lot of data points and the categories' order is important. If there are many categories or the values are approximate, it's better to use a line chart without markers.

## Chart

Depending on data model and the visualization purpose the line chart may contain single or multiple series.

### Single Series Line Chart

Let's look at the single-series line chart created using the following data - sales of ACME Corp. through several months of a year:

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

Now we need to convert this data table into an acceptable format. In terms of AnyChart we've got one series of data (Sales) with categories that hold months names. Each point in series represents one month and sales volume. Converted data looks like:

```
  var data = anychart.data.set([
    ["January", 10000],
    ["February", 12000],
    ["March", 18000],
    ["April", 11000],
    ["May", 9000]
  ]);
  var chart = anychart.line();
  chart.line(data);
```

As you can see, we've specified the chart's type using {api:anychart.core.cartesian.series.Line}**anychart.line()**{api} method, defined data source using {api:anychart.charts.Cartesian#line}**chart.line(data)**{api} and set data with {api:anychart.data#set}**anychart.data.set()**{api}.

{sample}BCT\_LineChart\_01{sample}

### Single Series Spline Chart

For better impression of your charts you can use the Spline chart type:

```
  var data = anychart.data.set([
    ["January", 10000],
    ["February", 12000],
    ["March", 18000],
    ["April", 11000],
    ["May", 9000]
  ]);
  var chart = anychart.line();
  chart.spline(data);
```

Here is the same chart as shown above, but in Spline mode:

{sample}BCT\_LineChart\_02{sample}

### Single Series Step Line Chart

Step line chart series display data points connected with Horizontal and Vertical lines. 

```
  var data = anychart.data.set([
    ["January", 10000],
    ["February", 12000],
    ["March", 18000],
    ["April", 11000],
    ["May", 9000]
  ]);
  var chart = anychart.line();
  chart.stepLine(data);
```

Here is the same chart as shown above, but in Step Line mode:

{sample}BCT\_LineChart\_03{sample}

### Multi-series Line Chart

To compare two or more data rows you have to use multi-series line charts as it is shown in the sample below.

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

As we did in single-series line sample above we need to convert this table into acceptable format, the only difference between these two samples is the fact that now we have two series of data - one series for each year, and we give proper names to each series:

```
  var dataSet = anychart.data.set([
    ["January", 10000, 12000],
    ["February", 12000, 15000],
    ["March", 18000, 16000],
    ["April", 11000, 15000],
    ["May", 9000, 14000],
  ]);
  var seriesData_2 = dataSet.mapAs({x: [0], value: [1]});
  var seriesData_1 = dataSet.mapAs({x: [0], value: [2]});
  var chart = anychart.line();
  chart.line(seriesData_1);
  chart.line(seriesData_2);
```

As you can see, to add a new line series you just have to use {api:anychart.core.cartesian.series.Line}**.line()**{api} method as many times as many series you need.

{sample}BCT\_LineChart\_04{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and else. In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values.

### Orientation

With AnyChart web graphs you can place axes to any side of the chart, all you need to do is to adjust orientation with {api:anychart.core.axes.Linear#orientation}**.orientation()**{api} parameter of {api:anychart.charts.Cartesian#yAxis}**.yAxis()**{api} or {api:anychart.charts.Cartesian#xAxis}**.xAxis()**{api} methods.
  
The position depends on the plot type and inversion of axes. See list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) tutorial.

```
  var xAxis = chart.xAxis();
  xAxis.orientation("top");
  var yAxis = chart.yAxis();
  yAxis.orientation("right");
```

Below this you can see the demonstration of this feature in the Single-series sample:

{sample}BCT\_LineChart\_05{sample}

### Inversion

AnyChart allows to invert any scale you want. Inversion is controlled by {api:anychart.scales.Linear#inverted}**.inverted()**{api} method:

```
  var yScale = chart.yScale();
  yScale.inverted(true);
```

And here is the demonstration of Y Scale inversion on the Single-series sample:

{sample}BCT\_LineChart\_06{sample}

### Minimum and Maximum

AnyChart calculates axis minimum and maximum automatically. The minimal value on Y-Axis is 8000, the maximum is 20000, as you can see in the sample above. You can control these values by setting {api:anychart.scales.Linear#maximum}**.maximum()**{api} and {api:anychart.scales.Linear#minimum}**.minimum()**{api} parameters of {api:anychart.charts.Cartesian#yScale}**.yScale()**{api} method; let's look at what will happen if we define 0 and 50000 as the min amd the max values on the Y-Axis:

```
  var yScale = chart.yScale();
  yScale.minimum(0);
  yScale.maximum(50000);
```

And here is the demonstration of setting the max and min values in the Single-series sample:

{sample}BCT\_LineChart\_07{sample}

## Visualization

In this section we will describe the main parts of the line chart style and demonstrate how this style can be applied.
<!-- Also you will see the list of predefined styles.-->

The main idea of styles is to segregate visualization and data definition. Visual appearance of lines is defined in certain styles. 
<!--Style can be applied to data series, data category or single data point.-->

<!--Line chart style can be configured in <line_style> and <line_series> nodes.-->
Also, styles are used to make charts interactive, so you can define how elements should be displayed by default and when hovered.
<!-- More information about these features can be found in Interactivity tutorial.-->

### Basic Sample

Now, let's look how to create a simple style and apply it to the chart. As we've already said a style consists of several elements, and its acceptable structure is given downwards:

```
  // line settings
  series.stroke(
    // set line color
    "Rgb(86,86,26)",
    // set line size
    4
  );
  
  // line settings in hovered state
  series.hoverStroke(
    // set line color
    "Rgb(86,86,26)",
    // set line size
    4
  );
    
  var markers = series.markers();
  // enables markers
  markers.enabled(true);
  // set marker type
  markers.type("star5");
  // set marker inner color
  markers.fill("gold");
  // set marker border
  markers.stroke("darkred");
  // set marker size
  markers.size(7);
  
  // settings for hovered marker
  var hoverMarkers = series.hoverMarkers();
  // marker size
  hoverMarkers.size(7);
  // marker inner color
  hoverMarkers.fill("darkred");
  // marker border
  hoverMarkers.stroke("gold");
```

Using such settings we've redefined line color and made it rather thick. Also, we've redefined settings for each point marker along with settings for each marker in hovered state.
<!--
Now let's take a sample of a single-series chart described above, define style in JSON and apply it to all chart elements, using <line_series style="style1"/>
-->
{sample}BCT\_LineChart\_08{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.
<!-- Full explanation of formatting and tuning visual appearance for them can be found in Labels and tooltips.-->
  
If you want to configure data labels and tooltips for all series - you should use {api:anychart.core.cartesian.series.Base#labels}**.labels()**{api} and {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} methods.
  
  
With the following example let's make data labels appear to the top from the data points, format them to show only the value corresponding to the point values and force tooltips to show detailed description.

{sample}BCT\_LineChart\_09{sample}

<!--Related Help Topics:

* Learn more about labels and tooltips in Labels and tooltips
* Full Keywords reference and formatting guide:Labels and tooltips
* Full reference of data labels settings can be found in XML Reference, particularly <label_style> and <label> nodes.
-->

## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including lines.
  
  
In the sample below we take single-series data described above and mark the highest point in series with a "Star5" of the "Gold" color.
  
  
To make marker visually appealing we set its size to 12 pixels in normal state, and 22px while hovered.

  
```
  {
    x: "March",
    value: 18000,
    marker:{
      enabled: true,
      type: "star5",
      fill: "gold",
      size: 12},
    hoverMarker: {size: 22}
  }
```

And here is a result - March is the most profitable month and we are showing this on the chart:

{sample}BCT\_LineChart\_10{sample}


## Colors

AnyChart uses default color palette to colorize data elements of chart automatically if you have not defined special colors, though it allows you to specify colors for the points.

### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set {api:anychart.graphics.vector.Stroke}**.stroke()**{api} parameter for this series. In the sample below we've got 5 series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_LineChart\_11{sample}

**Note**: you can find more information about lines' visual appearance in [Line Settings tutorial](../Appearance_Settings/Lines_Settings).

## Samples

You can see a lot of other samples in [AnyChart Web Line, Spline, Step-Line Charts Gallery](https://anychart.com/products/anychart/gallery/Line,_Spline,_Step-Line_Charts/).