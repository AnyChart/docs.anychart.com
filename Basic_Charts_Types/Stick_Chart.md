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

The Stick Charts can be multi-series, similar to the Line, Area, Step-Line Charts, etc. All you need to do is to add values into the array.

{sample}BCT\_Stick\_Chart\_03{sample}

Explore the code of the sample in the playground.


## Adjusting

All elements and features of a Stick Chart can be adjusted 

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

There is another feature can be applied to this series type. As well as [Columns](Column_Chart), Stick Charts can make their series stacked. Apply the {api:anychart.scales.Linear#stackMode}stackMode(){api} method to the scale to make all series stacked.

Let's reduce the previous axes and scales changes and apply the stacking mode:

```
yScale.stackMode("value");
```
{sample}BCT\_Stick\_Chart\_07{sample}


## Visualization

This paragraph considers the chart's view, coloring, creating some elements.


### Colors

If you want to make your chart bright, colorful and extraordinary, use several coloring methods: {api:anychart.core.cartesian.series.Stick#stroke}stroke(){api}, {api:anychart.core.cartesian.series.Stick#hoverStroke}hoverStroke(){api} and {api:anychart.core.cartesian.series.Stick#selectStroke}selectStroke(){api} to set the stroking colors. These methods can be also used for setting the stroking width.

```
// set the colors
seriesJan.stroke("#c77036", 3)
seriesJan.hoverStroke("#deaa88", 3);
seriesJan.selectStroke("#000", 3);

seriesFeb.stroke("#4d3c33", 3)
seriesFeb.hoverStroke("#8a6c5c", 3);
seriesFeb.selectStroke("#000", 3);

seriesMar.stroke("#4f7942", 3)
seriesMar.hoverStroke("#7eb06f", 3);
seriesMar.selectStroke("#000", 3);
```
{sample}BCT\_Stick\_Chart\_08{sample}

### Palette

Another way to set the colors for all elements is to create and apply the palette or apply one of the existing palettes AnyChart provides. Find the list of AnyChart palettes on the [Palettes page](../Appearance_Settings/Palettes).

Let's add a Provence Palette to this chart:

```
// set palette to a chart:
chart.palette(anychart.palettes.provence);
```

{sample}BCT\_Stick\_Chart\_09{sample}


### Markers

If it is necessary to highlight some points for some reasons, it is possible to use markers. Markers are created through the {api:anychart.core.cartesian.series.Stick#markers}markers(){api} method. Each series has its own markers.

```
// set markers
markersJan = seriesJan.markers();
markersJan.enabled(true);
```

It is also possible to change the shape, size and color of the markers.

```
markersJan.fill("red");
markersJan.type("star7");
markersJan.size(7);
```
{sample}BCT\_Stick\_Chart\_10{sample}


### Labels and Tooltips

Labels are small text elements which are supposed to be permanently shown somewhere next to the point and to demonstrate some information about this point. Labels are to be created with the {api:}labels(){api} method.

```
// create and enable labels
labelsFeb = seriesFeb.labels();
labelsFeb.enabled(true);
```

Tooltips are pop elements with some information about the points which are popping only when a point is hovered. Tooltips are created through the {api:}tooltip(){api} method of the series or chart. Find more about tooltips in the [Tooltip article](../Common_Settings/Tooltip).

```
// create and enable tooltips
tooltipsMar = seriesMar.tooltip();
tooltipsMar.enabled(true);
```

Both labels and tooltips can be adjusted. If it is necessary to change the text of the decoration of these elements, use special methods, like {api:}background(){api} for the setting the background, {api:}textFormatter{api} for changing the text demonstrated by these elements, etc. 

```
// create and enable labels
labelsFeb = seriesFeb.labels();
labelsFeb.enabled(true);
labelsFeb.fontSize(10);
labelsFeb.textFormatter("{%x} earned ${%Value} in {%SeriesName}");

// adjust chart tooltips
tooltips = chart.tooltip();
tooltips.displayMode("single");

// adjust series tooltips
titleTooltipMar = seriesMar.tooltip().title();
tooltipsMar = seriesMar.tooltip();
tooltipsMar.enabled(true);
tooltipsMar.background("#ccffe6");
tooltipsMar.fontColor("#000000");
tooltipsMar.fontSize(10);
titleTooltipMar.fontColor("#000000");
titleTooltipMar.fontWeight("bold");
titleTooltipMar.fontSize(10);
```
{sample}BCT\_Stick\_Chart\_11{sample}


### Using the DataSet 

It is also possible to use the data sets for adjusting the chart's view. This method is quite useful in case you need to emphasize one of the points for some reasons (e.g. the higest or the lowest value). Let's set special marker for the highest value and a special stroking color for the lowest value, and unique labels for them.

```
var dataSet = anychart.data.set([
  {x: "Alex", value: 10000, stroke: "red", label: {enabled: true, textFormatter: "The worst coworker. SHAME!!!"}},
  {x: "Josh", value: 12000},
  {x: "Jane", value: 13500},
  {x: "April", value: 19000, stroke: "green", marker:{enabled: true, fill: "green", size: 5}, label: {enabled: true, textFormatter: "The best coworker"}},
  {x: "Mary", value: 15000}
]);
```
{sample}BCT\_Stick\_Chart\_12{sample}


## Samples

Find a lot of other samples in [AnyChart Web Line, Spline, Step-Line Charts Gallery](http://anychart.com/products/anychart/gallery/Line,_Spline,_Step-Line_Charts/).