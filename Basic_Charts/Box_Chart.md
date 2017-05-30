{:index 1}
#Box Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
   * [Median](#median)
   * [Outliers](#outliers)
   * [Stems](#stems)
   * [Whiskers](#whiskers)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
  * [Vertical Box](#vertical_box)


## Overview

A box chart is a convenient way of graphically depicting groups of numerical data through their quartiles. Box charts are useful when it is necessary to describe the values as they spread across the entire range. For example, to analyze salaries in a company, it is necessary to have more information than the sum of salaries for each salary grade. Even a measure of average salary would not be enough. 
  
Box charts allow showing the minimum and maximum with a median (a numerical value separating the higher half of a data sample, a population, or a probability distribution, from the lower half) and quartiles, which helps to make the story more complete. But still, giving only the highest, the lowest, and the medium values does not tell the full story. So it is often useful to display the data in a way that reveals more about the distribution of values.

This article explains how to create a basic Box chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Box chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Box}anychart.core.cartesian.series.Box{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, low, q1, median, q3, high, value, outliers](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Box](Vertical/Box_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Box Chart with Error Bars](Error_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Error](Error_Chart)</td></tr>
<tr><td></td><td>[Pareto](Pareto_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/box-chart/" target="_blank">Chartopedia: Box Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>


## Quick Start

To create a Box chart, use the {api:anychart#box}anychart.box(){api} chart constructor. If you pass the data to this chart constructor, it creates a Box series.

To create a Box series explicitly, call the {api:anychart.charts.Cartesian#box}box(){api} method.

The following sample demonstrates how a basic Box chart is created:

```
// create data
var data = [
  {x: "1", low: 1000, q1: 1050, median: 1200, q3: 1800, high: 2000, outliers: [800, 2500, 3200]},
  {x: "2", low: 2500, q1: 3000, median: 3800, q3: 3900, high: 4000},
  {x: "3", low: 2000, q1: 2300, median: 2500, q3: 2900, high: 3000},
  {x: "4", low: 4000, q1: 5000, median: 6500, q3: 6500, high: 7000, outliers: [8930]},
  {x: "5", low: 8000, q1: 8400, median: 8500, q3: 8800, high: 9000, outliers: [6950, 3000]}
];

// create a chart
chart = anychart.box();

// create a box series and set the data
series = chart.box(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Box\_Chart\_01{sample}


## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).


## Special Settings

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Box series:

* {api:anychart.core.cartesian.series.Box#color}color(){api}, {api:anychart.core.cartesian.series.Box#fill}fill(){api}, {api:anychart.core.cartesian.series.Box#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Box#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Box#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Box#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Box#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.cartesian.series.Box#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Box#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Box#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the sample below, there are two Box series with some of the appearance settings configured:

```
// configure the visual settings of the first series
series1.fill("#00cc99", 0.4);
series1.hoverFill("#00cc99", 0.2);
series1.selectFill("#00cc99", 0.6);
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// configure the visual settings of the second series
series2.color("none");
series2.hatchFill("forwardDiagonal");
series2.hoverHatchFill("backwardDiagonal");
series2.selectHatchFill("diagonalCross");
series2.stroke("#000");
series2.hoverStroke("#000", 2);
series2.selectStroke("#000", 4);
```

{sample}BCT\_Box\_Chart\_02{sample}

#### Median

A median is a special line across a box.

Here are methods that allow you to configure the stroke of medians in the normal state, on hover, and on select:

* {api:anychart.core.cartesian.series.Box#medianStroke}medianStroke(){api}
* {api:anychart.core.cartesian.series.Box#hoverMedianStroke}hoverMedianStroke(){api}
* {api:anychart.core.cartesian.series.Box#selectMedianStroke}selectMedianStroke(){api}

```
// configure medians
series.medianStroke("#000");
series.hoverMedianStroke("#000", 2);
series.selectMedianStroke("#000", 4);
```

{sample}BCT\_Box\_Chart\_03{sample}

#### Outliers

Not every box has outliers: they are optional values that belong to a category, but do not fit the range between the low and the high values.

You can adjust the appearance, type, and size of outliers (in the normal state, on hover, and on select) by using the following methods:

* {api:anychart.core.cartesian.series.Box#outlierMarkers}outlierMarkers(){api}
* {api:anychart.core.cartesian.series.Box#hoverOutlierMarkers}hoverOutlierMarkers(){api}
* {api:anychart.core.cartesian.series.Box#selectOutlierMarkers}selectOutlierMarkers(){api}

```
// configure outliers
series.outlierMarkers(
  {fill: "#DC143C 0.7",
  stroke: {color: "#dc143c", thickness: 0.5, dash: "5 1", lineJoin: "round"},
  size: 10,
  type: "star5"});
series.hoverOutlierMarkers(
  {fill: "#dc143c 0.5",
  stroke: {color: "#dc143c", thickness: 1, dash: "5 1", lineJoin: "round"},
  size: 10,
  type: "star5"});
series.selectOutlierMarkers(
  {fill: "#dc143c",
  stroke: {color: "#dc143c", thickness: 2, dash: "5 1", lineJoin: "round"},
  size: 10,
  type: "star5"});
```

**Note:** These settings are configured in JSON format. Learn more about using JSON with AnyChart: [Getting Data from JSON](../Working_with_Data/Data_From_JSON).

{sample}BCT\_Box\_Chart\_04{sample}


#### Stems

Stems are vertical sticks that go beyond boxes and show the difference between the low value and the first quartile and between the third quartile and the high value.

Use these methods to configure the stroke of stems in the normal state, on hover, and on select:

* {api:anychart.core.cartesian.series.Box#stemStroke}stemStroke(){api}
* {api:anychart.core.cartesian.series.Box#hoverStemStroke}hoverStemStroke(){api}
* {api:anychart.core.cartesian.series.Box#selectStemStroke}selectStemStroke(){api}

```
// configure stems
series.stemStroke("#f44336", 1, "5 2");
series.hoverStemStroke("#f44336", 2, "5 2", "round", "round");
series.selectStemStroke("#f44336", 3, "5 2");
```
{sample}BCT\_Box\_Chart\_05{sample}


#### Whiskers

Whiskers are horizontal line segments on the tops of stems. Here are methods that allow you to configure their appearance:

* {api:anychart.core.cartesian.series.Box#whiskerWidth}whiskerWidth(){api} and {api:anychart.core.cartesian.series.Box#whiskerStroke){api} set the width and stroke
* {api:anychart.core.cartesian.series.Box#hoverWhiskerWidth}hoverWhiskerWidth(){api} and {api:anychart.core.cartesian.series.Box#hoverWhiskerStroke}hoverWhiskerStroke(){api} set the width and stroke on hover
* {api:anychart.core.cartesian.series.Box#selectWhiskerWidth}selectWhiskerWidth(){api} and {api:anychart.core.cartesian.series.Box#selectWhiskerStroke}selectWhiskerStroke(){api} set the width and stroke on select

**Note:** By default the width is 0.

```
// configure whiskers
series.whiskerWidth(30);
series.hoverWhiskerWidth(30);
series.selectWhiskerWidth(30);
series.whiskerStroke("#c2b65d", 0.7);
series.hoverWhiskerStroke("#c2b65d", 0.5);
series.selectWhiskerStroke("#c2b65d", 1);
```
{sample}BCT\_Box\_Chart\_06{sample}


### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical Box

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts](Vertical/Overview).

Here is the information about creating Vertical Box series: [Vertical Box](Vertical/Box_Chart).
