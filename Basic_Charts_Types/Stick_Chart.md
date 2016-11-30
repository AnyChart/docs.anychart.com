{:index 1}
# Stick Chart

* [Overview](#overview)
* [Chart](#chart)
* [Adjusting](#adjusting)
* [Stacking](#stacking)
* [Samples](#samples)

## Overview

Stick Charts look like Column Charts with no width. This series can be quite useful in case when your dataset is quite big and it is not comfortable to use Stocks. Sticks are good at demonstrating some discrete data.

## Chart

Stick Chart is a variation of a [Line Chart](Line_Chart) (though looks more like column), so when a Stick Chart is created it is necessary to create a Line Chart first and set the series of a Stick type.

A simple stick chart can be created with the {api:anychart.charts.Cartesian#stick}stick(){api} method. Let's create a data set for one series and set this series of a Stick type. 

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


## Adjusting

All elements and features of a Stick Chart can be adjusted due to the exact purposes of a chart.

Axes are elements responsible for the grids, markers, axes labels. They are used to manage all these elements. Find more information about axes in the [Axes and Grids](../Axes_and_Grids/Axis_Basics) article. Axes can be easily reoriented on a chart with the {api:anychart.core.axes.Linear#orientation}orientation(){api} method.

Axes are based on scales - elements that allow you to control such features as minimum and maximum scale values, scale inversion, intervals, scale type and so on. The {api:anychart.scales.Linear#inverted}inverted(){api} method allows to invert the scale, and the {api:anychart.scales.Linear#maximum}maximum(){api} and {api:anychart.scales.Linear#minimum}minimum(){api} methods are used to set the min and max values of the scale. You can find a lot of information about scales in the [Scales article](../Axes_and_Grids/Scales).

Markers are special elements which are supposed to emphasize the point for some reasons. They are to be added by the {api:anychart.core.cartesian.series.Stick#markers}markers(){api} method. It is possible to change their shape, size and color.

There are also some text elements supposed to tell the customer some information about the point. Labels are elements that are permanently shown (though, this can be changed and adjusted) somewhere next to the point and tooltips are pop-up elements that are shown on a point hovered. Add the labels and tooltips with the {api:anychart.charts.Cartesian#labels}labels(){api} and {api:anychart.charts.Cartesian#tooltip}tooltip(){api} methods. Both elements' text can be adjusted through the {api:anychart.core.ui.Tooltip#textFormatter}textFormatter(){api} method.

After all elements have been adjusted to demonstrate the necessary information about the point, it is a good time for changing the colors. There are several ways to set the colors to the series, points of other elements. You can use the data set, set the colors through some special methods or add/create a color [palette](Appearance_Settings/Palettes). 

The sample below demonstrates a Stick Chart with the adjusted parameters described before. Explore it in the playground to see the code.

{sample}BCT\_Stick\_Chart\_03{sample}


## Stacking

There is another feature can be applied to this series type. As well as [Columns](Column_Chart), Stick Charts can make their series stacked. Apply the {api:anychart.scales.Linear#stackMode}stackMode(){api} method to the scale to make all series stacked.

Let's reduce the previous axes and scales changes and apply the stacking mode:

```
yScale.stackMode("value");
```
{sample}BCT\_Stick\_Chart\_04{sample}


## Samples

Find a lot of other samples in [AnyChart Web Line, Spline, Step-Line Charts Gallery](http://anychart.com/products/anychart/gallery/Line,_Spline,_Step-Line_Charts/).