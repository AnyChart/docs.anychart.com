{:index 3.1}
#Range Bar Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Padding](#padding)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

A range bar chart displays information as a range of data by plotting two Y-values (low and high) per data point. The vertical axis shows the values, and the horizontal axis shows the categories they belong to. So, the range bar chart is a [vertical](Vertical/Overview) version of the [range column chart](Range_Column_Chart). In multi-series range bar charts, values are grouped by categories.

This type is sometimes referred to as the floating bar chart since it looks like a set of bar "floating" above the horizontal axis. It is used to show the difference between high and low values while visualizing time-based data or showing comparison among categories.

This article explains how to create a basic Range Bar chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Range Bar chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.RangeBar}anychart.core.cartesian.series.RangeBar{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Range Bar](Range_Bar_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Column](Column_Chart)</td></tr>
<tr><td></td><td>[Bar](Bar_Chart)</td></tr>
<tr><td></td><td>[Range Column](Range_Column_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/range-bar-chart/" target="_blank">Chartopedia: Range Bar Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Range Bar chart, use the {api:anychart.charts.Cartesian#rangeBar}rangeBar(){api} method (before, of course, you should create a chart by using {api:anychart#bar}anychart.bar(){api} or any other cartesian chart constructor).

Since range bar charts plot two Y-values per data point, you need to specify two values for each category by using the <strong>"low"</strong> and <strong>"high"</strong> parameters. That is how it looks like in object notation:

```
var data = [
  {x: "January", low: 0.7, high: 6.1},
  {x: "February", low: 0.6, high: 6.3},
  {x: "March", low: 1.9, high: 8.5},
  {x: "April", low: 3.1, high: 10.8},
  {x: "May", low: 5.7, high: 14.4}
];
```

The following sample demonstrates how a basic Range Bar chart is created:

```
// create a data set
var data = anychart.data.set([
  ["January", 0.7, 6.1],
  ["February", 0.6, 6.3],
  ["March", 1.9, 8.5],
  ["April", 3.1, 10.8],
  ["May", 5.7, 14.4]
]);

// create a chart
var chart = anychart.bar();

// create a range bar series and set the data
var series = chart.rangeBar(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Range\_Bar\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Range Bar chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Range Bar series:

* {api:anychart.core.cartesian.series.RangeBar#color}color(){api}, {api:anychart.core.cartesian.series.RangeBar#fill}fill(){api}, {api:anychart.core.cartesian.series.RangeBar#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.RangeBar#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.RangeBar#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.RangeBar#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.RangeBar#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.cartesian.series.RangeBar#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.RangeBar#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.RangeBar#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the sample below, there are two Range Bar series with some of the appearance settings configured:

```
// create the first series
var series1 = chart.RangeBar(seriesData_1);

// configure the visual settings of the first series
series1.fill("#00cc99", 0.3);
series1.hoverFill("#00cc99", 0.3);
series1.selectFill("#00cc99", 0.5);
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.RangeBar(seriesData_2);

// configure the visual settings of the second series
series2.fill("#0066cc", 0.3);
series2.hoverFill("#0066cc", 0.3);
series2.selectFill("#0066cc", 0.5);
series2.hatchFill("zigzag", "#808080", 1, 15);
series2.stroke("#0066cc");
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```
{sample}BCT\_Range\_Bar\_Chart\_02{sample}

If you use object notation to set the data, you can change the appearance (and some other settings) of particular bars by adding special fields to the data set:

```
// create a data set
var data = anychart.data.set([
  {x: "January", low: 0.7, high: 6.1},
  {x: "February", low: 0.6, high: 6.3},
  {x: "March", low: 1.9, high: 8.5},
  {x: "April", low: 3.1, high: 10.8},
  {x: "May", low: 5.7, high: 14.4, fill: "#5cd65c", stroke: null, label: {enabled: true}}
]);
```

{sample}BCT\_Range\_Bar\_Chart\_03{sample}

If you use an array to set the data, you can also configure the appearance of each bar separately, but in a slightly different way. You should first add visual parameters to the data set and then map fields for them so that they can be interpreted by the component:

```
// create a data set
var data = anychart.data.set([
  ["January", 0.7, 6.1, 8.1, 12.6],
  ["February", 0.6, 6.3, 8.5, 12.2],
  ["March", 1.9, 8.5, 10.3, 13.1],
  ["April", 3.1, 10.8, 13.4, 15.9],
  ["May", 5.7, 14.4, 14.9, 16.4, "#5cd65c", "#009933", null, {enabled: true}]
]);

// map the data
var seriesData_1 = data.mapAs({x: [0], low: [1], high: [2], fill: [5], stroke: [7], label: [8]});
var seriesData_2 = data.mapAs({x: [0], low: [3], high: [4], fill: [6], stroke: [7], label: [8]});
```

{sample}BCT\_Range\_Bar\_Chart\_04{sample}

### Padding

To set the padding between bars and bar groups, use these methods:

* {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api}
* {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api}

Padding is measured as a ratio to the width of bars (the width is calculated automatically). So, if it is < 1, the space between bars or bar groups is less than the width of bars, and vice versa. If padding is set to 0, there is no space between bars/groups, and a negative parameter makes bars overlap each other.

Please note that in AnyChart single-series range bar charts are, technically speaking, composed of one-element bar groups, so you should use {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api} to configure the padding between bars. In the following sample it is set to 0:

```
// create a range bar series and set the data
var series = chart.rangeBar(data);

// set the padding between bar groups
chart.barGroupsPadding(0);
```

{sample}BCT\_Range\_Bar\_Chart\_05{sample}

The {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api} method works only with multi-series charts: it sets the padding between bars within a group. The space between groups is set via {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api}.

If you set {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api} to -1, you can create an imitation of a [stacked chart](Stacked/Overview), which is not bound to zero. See the sample below (there is a multi-series Range Bar chart with the padding between bars and between bar groups set to -1 and 2):

```
// create the first series
var series1 = chart.rangeBar(seriesData_1);

// create the second series
var series2 = chart.rangeBar(seriesData_2);

// set the padding between bars
chart.barsPadding(-1);

// set the padding between bar groups
chart.barGroupsPadding(2);
```

{sample}BCT\_Range\_Bar\_Chart\_06{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.