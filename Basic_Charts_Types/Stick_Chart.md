{:index 1}
# Stick Chart

* [Overview](#overview)
* [Chart](#chart)
  * [Single Series Chart](#single_series_chart)
  * [Multi Series Chart](#multi_series_chart)
* [Axes](#axes)
  * [Orientation](#orientation)
  * [Inversion](#inversion)
  * [Minimum and Maximum](#minimum_and_maximum)
* [Stacking](#stacking)
* [Colors](#colors)
* [Markers](#markers)
* [Visualization](#visualization)
  * [Basic Sample](#basic_sample)
* [Labels and Tooltips](#labels_and_tooltips)
* [Samples](#samples)

## Overview

Stick Charts look like Column Charts with no width. This series can be quite useful in case when your dataset is quite big and it is not comfortable to use Stocks. Sticks are good at demonstrating some discrete data.

## Chart

Stick Chart is a variation of a Line Chart (though looks more like column), so when a Stick Chart is created it is necessary to create a Line Chart first and set the series of Stick type.

### Single Series Chart

A simple stick chart can be created with the {api:anychart.charts.Cartesian#stick}stick(){api} method. Create a data set for one series and set this series of a Stick type. The following table represents the 

<table width="287" border="1" class="dtTABLE">
<tbody><tr>
<th width="88"><b>Manager</b></th>
<th width="88"><b>Sales</b></th>
</tr>
<tr>
<td>Alex</td>
<td>$10000</td>
</tr>
<tr>
<td>Josh</td>
<td>$12000</td>
</tr>
<tr>
<td>Jane</td>
<td>$13500</td>
</tr>
<tr>
<td>April</td>
<td>$19000</td>
</tr>
<tr>
<td>Mary</td>
<td>$15000</td>
</tr>
</tbody></table>

After converting this data into acceptable format, it became looking like the following:

```
var dataSet = anychart.data.set([
  {x: "Alex", value: 10000},
  {x: "Josh", value: 12000},
  {x: "Jane", value: 13500},
  {x: "April", value: 19000},
  {x: "Mary", value: 15000}
]);
var chart = anychart.line();
series = chart.stick(dataSet);
```

{sample}BCT\_Stick\_Chart\_01{sample}

There is another way how the data can be arranged. Let's convert the array of objects demonstrated above into the array of array and map it then:

```
// data
var dataSet = anychart.data.set([
  ["Alex", 10000],
  ["Josh", 12000],
  ["Jane", 13500],
  ["April", 19000],
  ["Mary", 15000]
]);
var chart = anychart.line();
dataSetMapping = dataSet.mapAs({x: [0], value: [1]});
series = chart.stick(dataSetMapping);
```

{sample}BCT\_Stick\_Chart\_02{sample}

You can notice that the result is absolutely the same. Choose the most comfortable way of arranging the data for you.


### Multi Series Chart

The Stick Charts can be multi-series, similar to the Line, Area, Step-Line Charts, etc. All you need to do is to add values into the array.

```
// data
var dataSet = anychart.data.set([
  ["Alex", 10000, 9000, 13000],
  ["Josh", 12000, 12200, 10000],
  ["Jane", 13500, 8000, 9500],
  ["April", 19000, 14000, 17000],
  ["Mary", 15000, 15000, 13700]
]);
var chart = anychart.line();

// map the data
dataSetMappingJan = dataSet.mapAs({x: [0], value: [1]});
dataSetMappingFeb = dataSet.mapAs({x: [0], value: [2]});
dataSetMappingMar = dataSet.mapAs({x: [0], value: [3]});

// create series
seriesJan = chart.stick(dataSetMappingJan);
seriesFeb = chart.stick(dataSetMappingFeb);
seriesMar = chart.stick(dataSetMappingMar);
```

{sample}BCT\_Stick\_Chart\_03{sample}


## Axes

Axes are elements responsible for the grids, markers, axes labels. They are used to manage all these elements. Find more information about axes in the [Axes and Grids](../Axes_and_Grids/Axis_Basics) section.

### Orientation

It is possible to change the familiar axes orientation to any other you need. There are four possible orientations for both axes: top, bottom, right and left. Let's set the Y-Axis to the right from the chart and the X-Axis to the top.

```
// set axes titles and orientation
var xAxis = chart.xAxis();
xAxis.orientation("top");
xAxis.title("Sales");
var yAxis = chart.yAxis();
yAxis.orientation("right");
yAxis.title("Manager");
```

Watch the Multi Series sample with the axes with orientation changed:

{sample}BCT\_Stick\_Chart\_04{sample}


### Inversion

Axes also can be inverted. All is necessary to do is to set the {api:anychart.scales.Linear#inverted}inverted(){api} method to  the scale. This method accepts a boolean value:

```
var yScale = chart.yScale();
yScale.inverted(true);
```

{sample}BCT\_Stick\_Chart\_05{sample}


### Minimum and maximum

Note that the minimum and maximum values demonstrated on the axes are set automatically due to the values this chart represents. It is possible to set custom extreme values of the axes if necessary. The {api:anychart.scales.Linear#minimum}minimum(){api} and {api:anychart.scales.Linear#maximum}maximum(){api} methods are used for this. Let's change this range:

```
// set min and max values
yScale.minimum(0);
yScale.maximum(20000);
```

{sample}BCT\_Stick\_Chart\_06{sample}


## Stacking

There is another feature can be applied to this series type. As well as [Columns](Column_Chart), Stick Charts can make their series stacked. Apply the {api:anychart.scales.Linear#stackMode}stackMode(){api} method to the chart to make all series stacked.

Let's reduce the previous axes and scales changes and apply the stacking mode:

```
chart.stackMode("value");
```

{sample}BCT\_Stick\_Chart\_07{sample}


## Colors

If you want to make your chart bright, colorful and extraordinary, use several coloring methods: {api:}stroke(){api}, {api:}hoverStroke(){api} and {api:}selectStroke(){api} to set the stroking colors.


## Markers

## Visualization

### Basic Sample 

## Labels and Tooltips


## Samples

Find a lot of other samples in [AnyChart Web Line, Spline, Step-Line Charts Gallery](http://anychart.com/products/anychart/gallery/Line,_Spline,_Step-Line_Charts/).