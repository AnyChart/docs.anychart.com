{:index 1}
# Line Chart

* [Overview](#overview)
* [Chart](#chart)
  * [Single Series Chart](#single_series_chart)
  * [Multi-series Chart](#multi-series_chart)
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

When your data can be arraged in a table format on a worksheet, there are several chart types suit for demonstrating this data. JumpLine Chart is one of those. These Charts are quite alike Line Charts, or even more alike StepLine charts: JumpLine counts the data points as the center points of "jumps" - horizontal line segments of a category width. The difference between StepLine and JumpLine is in vertical line segments, connecting the "steps" of a StepLine: in JumpLine, nothing connects the points. 

JumpLine Charts are usually used for demonstrating rates.

## Chart

The JumpLine Chart is created by the {api:}jumpline(){api} method. The following sections tell all about creating ang managing them. 

### Single Series Chart

Let's look at the single-series JumpLine Chart created using the following data - sales of ACME Corp. through several months of a year:

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
chart.jumpLine(data);
```

{sample}BCT\_JumpLine\_Chart\_01{sample}


### Multi-series Chart

To compare two or more data arrays use multi-series JumpLine Charts as it is shown in the sample below.

Let's compare 2013 sales to 2014 sales:

<table width="375" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Month</b></th>
<th width="88"><b>2013 Sales</b></th>
<th width="88"><b>2014 Sales</b></th>	
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

Now it is necessary to create two series, each responsible for one set of data.

```
var dataSet = anychart.data.set([
  ["January", 10000, 12000],
  ["February", 12000, 15000],
  ["March", 18000, 16000],
  ["April", 11000, 15000],
  ["May", 9000, 14000],
]);
var seriesData_1 = dataSet.mapAs({x: [0], value: [1]});
var seriesData_2 = dataSet.mapAs({x: [0], value: [2]});
var chart = anychart.line();
series1 = chart.jumpLine(seriesData_1);
series2 = chart.jumpLine(seriesData_2);
```

As you can see, adding a new series is done by using the {api}jumpLine(){api} method each time.

{sample}BCT\_JumpLine\_Chart\_02{sample}

## Axes

Axes are used to control grids, axes labels, markers. They depend on [scales](../Axes_and_Grids/Scales) themselves. This paragraph describes working with axes for JumpLine series managing. You can find more detailed tutorial in the [Axes and Grids](../Axes_and_Grids/Axis_Basics) section.


### Orientation

The {api:anychart.core.axes.Linear#orientation}orientation(){api} method allows to place your axes any side you need, it is not necessary to use only series in the bottom and to the left from the chart.

There is a list of possible values for this method: [Axes Orientation tutorial](../Axes_and_Grids/Axis_Orientation).

```
var xAxis = chart.xAxis();
xAxis.orientation("top");
var yAxis = chart.yAxis();
yAxis.orientation("right");
```

Below this you can see the demonstration of this feature in the Single-series sample:

{sample}BCT\_LineChart\_05{sample}

Try to swap the axes and watch the consequences:

```
var xAxis = chart.xAxis();
xAxis.orientation("left");
var yAxis = chart.yAxis();
yAxis.orientation("bottom");
```

Below this you can see the demonstration of this feature in the Single-series sample:

{sample}BCT\_LineChart\_05{sample}

The result looks a bit like a [Stick Chart](Stick_Chart), but the length (which is actually width) is the same for 

### Inversion

AnyChart allows to invert any scale you want. Inversion is controlled by the {api:anychart.scales.Linear#inverted}inverted(){api} method:

```
var yScale = chart.yScale();
yScale.inverted(true);
```

And here is the demonstration of Y Scale inversion on the Single-series sample:

{sample}BCT\_LineChart\_06{sample}

### Minimum and Maximum

When you set the data for your chart, the min amd max values of this chart axes are set automatically. Though, it is possible to force them and set custom axes extreme values. Use the {api:anychart.scales.Linear#maximum}maximum(){api} and {api:anychart.scales.Linear#minimum}minimum(){api} methods to set max and min values for each axis. 

```
var yScale = chart.yScale();
yScale.minimum(0);
yScale.maximum(30000);
```

And here is the demonstration of setting the max and min values in the Single-series sample:

{sample}BCT\_LineChart\_07{sample}

## Visualization

This section gives an overview of applying some methods and creating styles for making a custom visualization of your chart.

The first way to set the series color is to create a style using the {api:}stroke(){api}, {api:}hoverStroke(){api} and {api:}selectStroke(){api} methods.

```
series1.stroke("#663399", 3);
series1.hoverStroke("#663399");
series1.selectStroke("#663399");
```
{sample}BCT\_LineChart\_07{sample}

The second way to set colors and stroke decoration is to use the data set. This way is the best in cases when it is necessary to set different colors for different points (e.g. to highlight some of them due to some reason).

```
var dataSet = anychart.data.set([
  ["January", 10000, 12000, "red", "green"],
  ["February", 12000, 15000, "red", "gold"],
  ["March", 18000, 16000],
  ["April", 11000, 15000, "black", "navy"],
  ["May", 9000, 14000],
]);
```
{sample}BCT\_LineChart\_07{sample}

There is one more way to set the colors for all the chart. It is possible to create a style


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
  
If you want to configure data labels and tooltips for all series - you should use {api:anychart.charts.Cartesian#labels}labels(){api} and {api:anychart.charts.Cartesian#tooltip}tooltip(){api} methods.
  
  
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

<!--
Related help topics:
You can read more about working with markers in Markers tutorial.
Full reference of marker style can be found in XML Reference, particularly <marker_style> node.
-->

## Colors

AnyChart uses default color palette to colorize data elements of chart automatically if you have not defined special colors, though it allows you to specify colors for the points.

### Colorizing Elements

Let's demonstrate how to apply different colors to different data series. To apply the color to the exact series we need to set {api:anychart.graphics.vector.Stroke}stroke(){api} parameter for this series. In the sample below we've got 5 series with sample data and we'll color each series to different color. Here is the sample:

{sample}BCT\_LineChart\_11{sample}

**Note**: you can find more information about lines' visual appearance in [Line Settings tutorial](../Appearance_Settings/Lines_Settings).

## Samples

You can see a lot of other samples in [AnyChart Web Line, Spline, Step-Line Charts Gallery](http://anychart.com/products/anychart/gallery/Line,_Spline,_Step-Line_Charts/).
