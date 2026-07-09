{:index 1.5}
# Lollipop Chart

## Overview

A Lollipop chart is a variation of the [Column](Column_Chart) and [Stick](Stick_Chart) charts. Each data point is drawn as a thin stick that starts at the zero baseline and ends with a round "head" marker at the value, so this type visually combines a [Stick](Stick_Chart) with a [Marker](Marker_Chart) head. Lollipop charts are good at demonstrating discrete data and offer a lighter, less cluttered alternative to Column charts when you have many categories or want to emphasize the value at the end of each stick.

This article explains how to create a basic Lollipop chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Lollipop chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) / [Base](../Quick_Start/Modules#base)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Lollipop}anychart.core.cartesian.series.Lollipop{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Lollipop](Stacked/Value/Lollipop_Chart), [Percent Stacked Lollipop](Stacked/Percent/Lollipop_Chart)</td></tr>
<tr><td>Vertical</td><td>[Vertical Lollipop](Vertical/Lollipop_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Lollipop Chart with Error Bars](Error_Chart/Lollipop_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Stick](Stick_Chart)</td></tr>
<tr><td></td><td>[Column](Column_Chart)</td></tr>
<tr><td></td><td>[Marker](Marker_Chart)</td></tr>
<tr><td></td><td>[Line](Line_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Lollipop Chart](https://www.anychart.com/chartopedia/chart-types/lollipop-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Lollipop chart requires adding the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

Alternatively, you can use the [Base](../Quick_Start/Modules#base) module, which includes, among other things, the two modules mentioned above: 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

A Lollipop chart is built on a Cartesian plot (like [Column](Column_Chart) and [Stick](Stick_Chart)), so there are two ways to create it.

To create a Lollipop chart from scratch, use the {api:anychart#lollipop}anychart.lollipop(){api} chart constructor. If you pass the data to this chart constructor, it creates a Lollipop series.

Alternatively, you can start from a [Column](Column_Chart) (or [Bar](Bar_Chart)) chart and add a Lollipop series explicitly with the {api:anychart.charts.Cartesian#lollipop}lollipop(){api} method.

```
// create data
var data = [
  {x: "January", value: 10000},
  {x: "February", value: 12000},
  {x: "March", value: 18000},
  {x: "April", value: 11000},
  {x: "May", value: 9000}
];

// create a chart
var chart = anychart.lollipop();

// create a lollipop series and set the data
var series = chart.lollipop(data);

// set the chart title
chart.title("Lollipop Chart: Basic Sample");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

You can also start from a [Column](Column_Chart) (or [Bar](Bar_Chart)) chart and add the Lollipop series to it — only the constructor differs, the rest is identical:

```
// create a column (or bar) chart, then add a lollipop series
var chart = anychart.column();
var series = chart.lollipop(data);
```

{sample}BCT\_Lollipop\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Lollipop chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data can be passed either to the {api:anychart#lollipop}anychart.lollipop(){api} chart constructor or to the {api:anychart.charts.Cartesian#lollipop}lollipop(){api} series method. A Lollipop series uses two data fields:

* `x` — the category
* `value` — the value that sets the height of the stick and the position of the head

You can set points as objects or as positional arrays, or map the columns of an {api:anychart.data#set}anychart.data.set(){api} with {api:anychart.data.Set#mapAs}mapAs(){api} — convenient when several series share one data set:

```
// object notation
var data = [
  {x: "January", value: 10000},
  {x: "February", value: 12000}
];

// or map the columns of a data set
var dataSet = anychart.data.set([
  ["January", 10000],
  ["February", 12000]
]);
var mapping = dataSet.mapAs({x: 0, value: 1});

var chart = anychart.lollipop();
var series = chart.lollipop(mapping);
```

{sample}BCT\_Lollipop\_Chart\_07{sample}

### Appearance

The [appearance settings](../Appearance_Settings) of a Lollipop chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Lollipop#normal}normal(){api}, {api:anychart.core.cartesian.series.Lollipop#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Lollipop#selected}selected(){api} methods.

Combine them with the {api:anychart.core.StateSettings#stroke}stroke(){api} and {api:anychart.core.StateSettings#fill}fill(){api} methods: the stroke styles the stick and the outline of the head, while the fill styles the head itself. Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Lollipop series with appearance settings configured:

```
// create data for two series
var seriesData_1 = [
  {x: "January", value: 10000},
  {x: "February", value: 12000},
  {x: "March", value: 18000},
  {x: "April", value: 11000},
  {x: "May", value: 9000}
];
var seriesData_2 = [
  {x: "January", value: 7000},
  {x: "February", value: 9000},
  {x: "March", value: 13000},
  {x: "April", value: 8000},
  {x: "May", value: 6000}
];

// create a chart
var chart = anychart.column();

// first series
var series1 = chart.lollipop(seriesData_1);
series1.name("2023");
series1.normal().stroke("#00cc99", 2);
series1.normal().fill("#00cc99");
series1.hovered().stroke("#00cc99", 3);
series1.hovered().fill("#00cc99");
series1.selected().stroke("#00cc99", 4);
series1.selected().fill("#00cc99");

// second series
var series2 = chart.lollipop(seriesData_2);
series2.name("2024");
series2.normal().stroke("#0066cc", 2);
series2.normal().fill("#0066cc");
series2.hovered().stroke("#0066cc", 3);
series2.hovered().fill("#0066cc");
series2.selected().stroke("#0066cc", 4);
series2.selected().fill("#0066cc");

// a legend helps tell the two series apart
chart.legend().enabled(true);
```

{sample}BCT\_Lollipop\_Chart\_02{sample}

#### Individual Points

If you use object notation to set the data, you can change the appearance (and some other settings) of individual points by adding special fields to your data:

```
// create data
var data = [
  {x: "January", value: 10000},
  {x: "February", value: 12000},
  {x: "March", value: 18000,
   normal:   {stroke: "3 #5cd65c", fill: "#5cd65c"},
   hovered:  {stroke: "4 #5cd65c", fill: "#5cd65c"},
   selected: {stroke: "4 #5cd65c", fill: "#5cd65c"}
  },
  {x: "April", value: 11000},
  {x: "May", value: 9000}
];

// create a chart
chart = anychart.column();

// create a lollipop series and set the data
var series = chart.lollipop(data);
```

{sample}BCT\_Lollipop\_Chart\_03{sample}

### Point Size

A Lollipop point has two size-related parts. The **head** is a circular marker whose radius is set with {api:anychart.core.cartesian.series.Lollipop#markers}markers(){api} and {api:anychart.core.ui.MarkersFactory#size}size(){api} (the default radius is 5 px). The **stick** has no width of its own — its thickness is the series stroke width, so make it thicker or thinner through the stroke (see [Appearance](#appearance)).

```
// enlarge the round head (default radius is 5 px)
series.markers().size(10);

// the stick thickness is the stroke width
series.normal().stroke("#0066cc", 3);
```

{sample}BCT\_Lollipop\_Chart\_04{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

```
// enable and format the data labels
series.labels().enabled(true);
series.labels().format("{%value}");
```

{sample}BCT\_Lollipop\_Chart\_05{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

```
// customize the tooltip text
series.tooltip().format("{%x}: {%value}");
```

{sample}BCT\_Lollipop\_Chart\_06{sample}

### Legend

A [Legend](../Common_Settings/Legend) helps identify the series on a chart. Enable it with the {api:anychart.charts.Cartesian#legend}legend(){api} method — each series adds one legend item, labeled with its {api:anychart.core.cartesian.series.Lollipop#name}name(){api}:

```
var series1 = chart.lollipop(seriesData_1);
series1.name("2023");
var series2 = chart.lollipop(seriesData_2);
series2.name("2024");

// enable the legend
chart.legend().enabled(true);
```

{sample}BCT\_Lollipop\_Chart\_08{sample}

### Stacked Lollipop

Stacked and percent stacked charts are multiple-series charts where related values are placed atop one another, which allows comparing the contribution of a value to a total, either in absolute or percentage terms.

In AnyChart, you can enable a special mode of the scale to make series stack together: see [Stacked Charts](Stacked/Overview).

To learn about the stacked versions of the Lollipop chart and its modifications, see:

* [Stacked Lollipop](Stacked/Value/Lollipop_Chart)
* [Percent Stacked Lollipop](Stacked/Percent/Lollipop_Chart)

### Vertical Lollipop

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical/Overview).

Here is information about creating Vertical Lollipop series:

* [Vertical Lollipop](Vertical/Lollipop_Chart)