{:index 1}
# Column Chart

## Overview

A column chart is a chart that visualizes data as a set of rectangular columns, their lengths being proportional to the values they represent. The vertical axis shows the values, and the horizontal axis shows the categories they belong to. In multi-series column charts, values are grouped by categories.

The column chart is used very widely to show comparison among categories and sometimes to visualize time-based data.

This article explains how to create a basic Column chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Column chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Column}anychart.core.cartesian.series.Column{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Column](Stacked/Value/Column_Chart), [Percent Stacked Column](Stacked/Percent/Column_Chart)</td></tr>
<tr><td>Vertical</td><td>[Bar](Bar_Chart)</td></tr>
<tr><td>3D</td><td>[3D Column](3D/Column_Chart)</td></tr>
<tr><td>Error Bars</td><td>[Column Chart with Error Bars](Error_Chart/Column_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>[Polar Column](Polar_Plot/Column_Chart)</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Column](../Stock_Charts/Series/Column)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Bar](Bar_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/column-chart/" target="_blank">Chartopedia: Column Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Column chart, use the {api:anychart#column}anychart.column(){api} chart constructor. If you pass the data to this chart constructor, it creates a Column series.

To create a Column series explicitly, call the {api:anychart.charts.Cartesian#column}column(){api} method.

The following sample demonstrates how a basic Column chart is created:

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
var chart = anychart.column();

// create a column series and set the data
var series = chart.column(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Column\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Column chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

#### All Columns

The [appearance settings](../Appearance_Settings) of a Column chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Column#normal}normal(){api}, {api:anychart.core.cartesian.series.Column#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Column#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#fill}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Column series with appearance settings configured:

```
// create the first series
var series1 = chart.column(seriesData_1);

// configure the visual settings of the first series
series1.normal().fill("#00cc99", 0.3);
series1.hovered().fill("#00cc99", 0.1);
series1.selected().fill("#00cc99", 0.5);
series1.normal().stroke("#00cc99", 1, "10 5", "round");
series1.hovered().stroke("#00cc99", 2, "10 5", "round");
series1.selected().stroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.column(seriesData_2);

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

{sample}BCT\_Column\_Chart\_02{sample}

#### Individual Columns

If you use object notation to set the data, you can change the appearance (and some other settings) of individual columns by adding special fields to the data set:

```
// create a data set
var data = [
  {x: "John", value: 10000},
  {x: "Jake", value: 12000},
  {x: "Peter", value: 13000,
   normal:   {
               fill: "#5cd65c",
               stroke: null,
               label: {enabled: true}
             },
   hovered:  {
               fill: "#5cd65c",
               stroke: null,
               label: {enabled: true},
             },
   selected: {
               fill: "#5cd65c",
               stroke: null,
               label: {enabled: true},
             }
  },
  {x: "James", value: 10000},
  {x: "Mary", value: 9000}
];

// create a chart
chart = anychart.column();

// create a column series and set the data
var series = chart.column(data);
```

{sample}BCT\_Column\_Chart\_03{sample}

If you use an array to set the data, you can also configure the appearance of each column individually, but in a slightly different way. You should first add visual parameters to the data set and then map fields for them so that they can be interpreted by the component:

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

// create a chart
chart = anychart.column();

// create series and set the data
var series1 = chart.column(seriesData_1);
var series2 = chart.column(seriesData_2);
```

{sample}BCT\_Column\_Chart\_04{sample}

### Padding

To set the padding between columns and column groups, use these methods:

* {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api}
* {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api}

Padding is measured as a ratio to the width of columns (the width is calculated automatically). So, if it is < 1, the space between columns or column groups is less than the width of columns, and vice versa. If padding is set to 0, there is no space between columns/groups, and a negative parameter makes columns overlap each other.

#### Single Series

Please note that in AnyChart single-series column charts are, technically speaking, composed of one-element column groups, so you should use {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api} to configure the padding between columns. In the following sample it is set to 0:

```
// create a column series and set the data
var series = chart.column(data);

// set the padding between column groups
chart.barGroupsPadding(0);
```

{sample}BCT\_Column\_Chart\_05{sample}

#### Multiple Series

The {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api} method works only with multi-series charts: it sets the padding between columns within a group. The space between groups is set via {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api}.

In the sample below, there is a multi-series Column chart with the padding between columns and between column groups set to -0.5 and 2:

```
// create the first series
var series1 = chart.column(seriesData_1);

// create the second series
var series2 = chart.column(seriesData_2);

// set the padding between columns
chart.barsPadding(-0.5);

// set the padding between column groups
chart.barGroupsPadding(2);
```

{sample}BCT\_Column\_Chart\_06{sample}

### Point Size

This chart type allows you to set the size of its points. Read more in the [Point Size](../Common_Settings/Point_Size) article.

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Stacked Column

Stacked and percent stacked charts are multi-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms. 

In AnyChart, you can enable a special mode of the scale to make series stack together: see [Stacked Charts](Stacked/Overview).

To learn about the stacked versions of the Column chart, see:

* [Stacked Column](Stacked/Value/Column_Chart)
* [Percent Stacked Column](Stacked/Percent/Column_Chart)

<a name='vertical_column'></a>
### Vertical Column (Bar)

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts](Vertical/Overview).

The vertical column chart is called the bar chart: it shows categories on the vertical axis instead of the horizontal axis and represents values as bars instead of columns. Read more: [Bar Chart](Bar_Chart).

### 3D Column

Using AnyChart, you can create 3D versions of some chart types, including the Column chart.

To learn about 3D charts in general, see [3D Charts](3D/Overview).

The 3D Column chart is described in the following article: [3D Column Chart](3D/Column_Chart).