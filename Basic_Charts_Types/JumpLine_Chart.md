{:index 1}
# JumpLine Chart

* [Overview](#overview)
* [Chart](#chart)
  * [Single Series Chart](#single_series_chart)
  * [Multi Series Chart](#multi_series_chart)
* [Axes](#axes)
  * [Orientation](#orientation)
  * [Inversion](#inversion)
  * [Minimum and Maximum](#minimum_and_maximum)
* [Colors](#colors)
* [Markers](#markers)
* [Visualization](#visualization)
  * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Samples](#samples)

## Overview

When your data can be arraged in a table format on a worksheet, there are several chart types suit for demonstrating this data. JumpLine Chart is one of those. These Charts are quite alike Line Charts, or even more alike StepLine charts: JumpLine counts the data points as the center points of "jumps" - horizontal line segments of a category width. The difference between StepLine and JumpLine is in vertical line segments, connecting the "steps" of a StepLine: in JumpLine, nothing connects the points. 

JumpLine Charts are usually used for demonstrating rates.

## Chart

The JumpLine Chart is created by the {api:anychart.charts.Cartesian#jumpLine}jumpline(){api} method. The following sections tell all about creating ang managing them. 

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
<td>$12000</td>
</tr>
<tr>
<td>March</td>
<td>$18000</td>
</tr>
<tr>
<td>April</td>
<td>$11000</td>
</tr>
<tr>
<td>May</td>
<td>$9000</td>
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


### Multi Series Chart

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

As you can see, adding a new series is done by using the {api:anychart.charts.Cartesian#jumpLine}jumpLine(){api} method each time.

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

Below this you can see the demonstration of this feature in the Multi-series sample:

{sample}BCT\_JumpLine\_Chart\_03{sample}


### Inversion

AnyChart allows to invert any scale you want. Inversion is controlled by the {api:anychart.scales.Linear#inverted}inverted(){api} method:

```
var yScale = chart.yScale();
yScale.inverted(true);
```

And here is the demonstration of Y Scale inversion on the Multi-series sample:

{sample}BCT\_JumpLine\_Chart\_04{sample}

### Minimum and Maximum

When you set the data for your chart, the min and max values of this chart axes are set automatically. Though, it is possible to force them and set custom axes extreme values. Use the {api:anychart.scales.Linear#maximum}maximum(){api} and {api:anychart.scales.Linear#minimum}minimum(){api} methods to set max and min values for each axis. 

```
var yScale = chart.yScale();
yScale.minimum(0);
yScale.maximum(30000);
```

And here is the demonstration of setting the max and min values in the Multi-series sample:

{sample}BCT\_JumpLine\_Chart\_05{sample}



## Colors

The first way to set the series color is to create a style for the series using the {api:anychart.core.cartesian.series.JumpLine#stroke}stroke(){api}, {api:anychart.core.cartesian.series.JumpLine#hoverStroke}hoverStroke(){api} and {api:anychart.core.cartesian.series.JumpLine#selectStroke}selectStroke(){api} methods.

```
series1.stroke("#67329c", 3);
series1.hoverStroke("#9966cc", 3);
series1.selectStroke("#663399", 3);
```
{sample}BCT\_JumpLine\_Chart\_06{sample}

The second way to set colors and stroke decoration is to use the data set. This way is the best in cases when it is necessary to set different colors for different points (e.g. to highlight some of them due to some reason).

```
var dataSet = anychart.data.set([
  ["January", 10000, 12000, "red", "green"],
  ["February", 12000, 15000, "red", "gold"],
  ["March", 18000, 16000],
  ["April", 11000, 15000, "black", "navy"],
  ["May", 9000, 14000],
]);
var seriesData_1 = dataSet.mapAs({x: [0], value: [1], stroke: [3]});
var seriesData_2 = dataSet.mapAs({x: [0], value: [2], stroke: [4]});
```
{sample}BCT\_JumpLine\_Chart\_07{sample}

There is one more way to set the colors for all the chart. It is possible to create a palette for the whole chart or to set a predefined one. Find the list of palettes in the [Palettes article](../Appearance_Settings/Palettes).


## Markers

Marker is an object with a specified shape, size, and color or an image used to mark and to identify chart elements. AnyChart allows to add markers to any data element including JumpLines.

There are two ways to set the markers. First is to enable the markers for the series, like setting the color:

```
// create markers
markers = series1.markers();
markers.enabled(true);
```

{sample}BCT\_JumpLine\_Chart\_08{sample}

The second one is to add a marker to the exact point, using the data set:

```
{
  x: "March",
  value: 18000,
  marker:{
    enabled: true,
    type: "star5",
    fill: "#d84b20",
    size: 12},
  hoverMarker: {size: 22}
}
```

And here is a result - March is the most profitable month and we are showing this on the chart:

{sample}BCT\_JumpLine\_Chart\_09{sample}


## Visualization

This section gives an overview of making custom visualization of your chart.

At first, let's create a simple style.

### Basic Sample

Now, let's look how to create a simple style and apply it to the chart. A style consists of several elements, such as stroke colors in all states, marker shape, color and size in all states, etc. - so basically, style is a composition of all features described before.

```
  // stroke settings
  series.stroke("#025669", 4);
  series.hoverStroke("#04a7cc", 4);
      
  var markers = series.markers();
  // enable markers
  markers.enabled(true);
  // set marker type
  markers.type("star5");
  // set marker inner color
  markers.fill("#d69942");
  // set marker border
  markers.stroke("#916321");
  // set marker size
  markers.size(7);
  
  // settings for hovered marker
  var hoverMarkers = series.hoverMarkers();
  // marker size
  hoverMarkers.size(7);
  // marker inner color
  hoverMarkers.fill("#deaf6d");
  // marker border
  hoverMarkers.stroke("#916321");
```

Using such settings we've redefined line color and made it rather thick. Also, we've redefined settings for each point marker along with settings for each marker in hovered state.

{sample}BCT\_JumpLine\_Chart\_10{sample}

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.
  
To configure data labels and tooltips for all series use {api:anychart.charts.Cartesian#labels}labels(){api} and {api:anychart.charts.Cartesian#tooltip}tooltip(){api} methods.
    
With the following example let's make data labels appear to the top from the data points, format them to show only the value corresponding to the point values and force tooltips to show detailed description.

```
// format the labels
labels = series.labels();
labels.enabled(true);
labels.textFormatter("${%Value}");
labels.position("center");
labels.anchor("bottom");

// set the tooltips
tooltips = series.tooltip();
tooltips.textFormatter("${%Value}");
tooltips.background("#e0d6d1");
tooltips.fontColor("#4d3c33");
```

{sample}BCT\_JumpLine\_Chart\_11{sample}


## Samples

Find a lot of other samples in [AnyChart Web Line, Spline, Step-Line Charts Gallery](http://anychart.com/products/anychart/gallery/Line,_Spline,_Step-Line_Charts/).
