{:index 1}
# Bar Chart

## Overview

A bar chart is a chart that visualizes data as a set of rectangular bars, their lengths being proportional to the values they represent. The horizontal axis shows the values, and the vertical axis shows the categories they belong to. So, the bar chart is a [vertical](Vertical/Overview) version of the [column chart](Column_Chart). In multi-series bar charts, values are grouped by categories.

The bar chart is used very widely to show comparison among categories and sometimes to visualize time-based data. Also, categories with long names may be a reason to prefer the bar chart to the column chart.

This article explains how to create a basic Bar chart as well as configure  settings that are specific to the type. In addition, you see the table below to get a brief overview of the Bar chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Bar}anychart.core.cartesian.series.Bar{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Bar](Stacked/Value/Bar_Chart), [Percent Stacked Bar](Stacked/Percent/Bar_Chart)</td></tr>
<tr><td>Vertical</td><td>[Bar](Bar_Chart)</td></tr>
<tr><td>3D</td><td>[3D Bar](3D/Bar_Chart)</td></tr>
<tr><td>Error Bars</td><td>[Bar Chart with Error Bars](Error_Chart/Bar_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Column](Column_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/bar-chart/" target="_blank">Chartopedia: Bar Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Bar chart, use the {api:anychart#bar}anychart.bar(){api} chart constructor. If you pass the data to this chart constructor, it creates a Bar series.

To create a Bar series explicitly, call the {api:anychart.charts.Cartesian#bar}bar(){api} method.

The following sample demonstrates how a basic Bar chart is created:

```
// create a data set
var data = [
  ["John", 10000],
  ["Jake", 12000],
  ["Peter", 13000],
  ["James", 10000],
  ["Mary", 9000]
];

// create a chart
var chart = anychart.bar();

// create a bar series and set the data
var series = chart.bar(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Bar\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Bar chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

The [appearance settings](../Appearance_Settings) of a Bar chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Bar#normal}normal(){api}, {api:anychart.core.cartesian.series.Bar#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Bar#selected}selected(){api} methods.

Combine them with the following methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#fill}stroke(){api} to set the stroke

In the sample below, there are two Bar series with some of the appearance settings configured:

```
  // create the first series
  var series1 = chart.bar(seriesData_1);

  // configure the visual settings of the first series
  series1.normal().fill("#00cc99", 0.3);
  series1.hovered().fill("#00cc99", 0.1);
  series1.selected().fill("#00cc99", 0.5);
  series1.normal().stroke("#00cc99", 1, "10 5", "round");
  series1.hovered().stroke("#00cc99", 2, "10 5", "round");
  series1.selected().stroke("#00cc99", 4, "10 5", "round");

  // create the second series
  var series2 = chart.bar(seriesData_2);

  // configure the visual settings of the second series
  series2.normal().fill("#0066cc", 0.3);
  series2.hovered().fill("#0066cc", 0.1);
  series2.selected().fill("#0066cc", 0.5);
  series2.normal().hatchFill("forward-diagonal", "#808080", 1, 15);
  series2.hovered().hatchFill("forward-diagonal", "#808080", 1, 15);
  series2.selected().hatchFill("forward-diagonal", "#808080", 1, 15);
  series2.normal().stroke("#0066cc");
  series2.hovered().stroke("#0066cc", 2);
  series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_Bar\_Chart\_02{sample}

If you use object notation to set the data, you can change the appearance (and some other settings) of particular bars by adding special fields to the data set:

```
// create a data set
var data = [
  {x: "John", value: 10000},
  {x: "Jake", value: 12000},
  {x: "Peter", value: 13000, fill: "#5cd65c", stroke: null, label: {enabled: true}},
  {x: "James", value: 10000},
  {x: "Mary", value: 9000}
];
```

{sample}BCT\_Bar\_Chart\_03{sample}

If you use an array to set the data, you can also configure the appearance of each bar separately, but in a slightly different way. You should first add visual parameters to the data set and then map fields for them so that they can be interpreted by the component:

```
// create a data set
var data = anychart.data.set([
  ["John", 10000, 12500],
  ["Jake", 12000, 15000],
  ["Peter", 13000, 16500, "#5cd65c", "#009933", null, {enabled: true}],
  ["James", 10000, 13000],
  ["Mary", 9000, 11000]
]);

// map the data
var seriesData_1 = data.mapAs({x: 0, value: 1, fill: 3, stroke: 5, label: 6});
var seriesData_2 = data.mapAs({x: 0, value: 2, fill: 4, stroke: 5, label: 6});
```

{sample}BCT\_Bar\_Chart\_04{sample}

### Padding

To set the padding between bars and bar groups, use these methods:

* {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api}
* {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api}

Padding is measured as a ratio to the width of bars (the width is calculated automatically). So, if it is < 1, the space between bars or bar groups is less than the width of bars, and vice versa. If padding is set to 0, there is no space between bars/groups, and a negative parameter makes bars overlap each other.

Please note that in AnyChart single-series bar charts are, technically speaking, composed of one-element bar groups, so you should use {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api} to configure the padding between bars. In the following sample it is set to 0:

```
// create a bar series and set the data
var series = chart.bar(data);

// set the padding between bar groups
chart.barGroupsPadding(0);
```

{sample}BCT\_Bar\_Chart\_05{sample}

The {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api} method works only with multi-series charts: it sets the padding between bars within a group. The space between groups is set via {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api}.

In the sample below, there is a multi-series Bar chart with the padding between bars and between bar groups set to -0.5 and 2:

```
// create the first series
var series1 = chart.bar(seriesData_1);

// create the second series
var series2 = chart.bar(seriesData_2);

// set the padding between bars
chart.barsPadding(-0.5);

// set the padding between bar groups
chart.barGroupsPadding(2);
```

{sample}BCT\_Bar\_Chart\_06{sample}

### Point Size

This chart type allows you to set the size of its points. Read more in the [Point Size](../Common_Settings/Point_Size) article.

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Stacked Bar

Stacked and percent stacked charts are multi-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms. 

In AnyChart, you can enable a special mode of the scale to make series stack together: see [Stacked Charts](Stacked/Overview).

To learn about the stacked versions of the Bar chart, see:

* [Stacked Bar](Stacked/Value/Bar_Chart)
* [Percent Stacked Bar](Stacked/Percent/Bar_Chart)

### 3D Bar

Using AnyChart, you can create 3D versions of some chart types, including the Bar chart.

To learn about 3D charts in general, see [3D Charts (Overview)](3D/Overview).

The 3D Bar chart is described in the following article: [3D Bar Chart](3D/Bar_Chart).