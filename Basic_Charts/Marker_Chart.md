{:index 1.61}
# Marker Chart

## Overview

Marker chart (otherwise known as a point chart) is identical to a line chart without the lines. A marker chart shows only endpoints of segments that make each line up.

This article explains how to create a basic Marker chart as well as configure settings that are specific to the type. See the table below to get a brief overview of the Marker chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) / [Base](../Quick_Start/Modules#base)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Marker}anychart.core.cartesian.series.Marker{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Marker](Vertical/Overview)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Marker Chart with Error Bars](Error_Chart/Marker_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>[Polar Marker](Polar_Plot/Marker_Chart)</td></tr>
<tr><td>Radar</td><td>[Radar Marker](Radar_Plot/Marker_Chart)</td></tr>
<tr><td>Scatter</td><td>[Scatter Marker](Scatter_Plot/Marker_Chart)</td></tr>
<tr><td>Stock</td><td>[Stock Marker](../Stock_Charts/Series/Marker)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Bubble](Bubble_Chart)</td></tr>
<tr><td></td><td>[Dot (Point) Maps](../Maps/Dot\_\(Point\)\_Map)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Marker Chart](https://www.anychart.com/chartopedia/chart-types/dot-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Marker chart requires adding the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) modules:

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

To create a Marker chart, use the {api:anychart#marker}anychart.marker(){api} chart constructor. If you pass the data to this chart constructor, it creates a Marker series. Note that this constructor creates a chart of a Scatter type. Find more about Scatter Charts in the [Scatter Plot article](Scatter_Plot/Overview) article.

To create a Marker series explicitly, call the {api:anychart.charts.Cartesian#marker}marker(){api} method.

In the following sample, we DO NOT create a [Scatter Marker Chart](Scatter_Plot/Marker_Chart), we create a basic categorized Marker chart:

```
// create data
var data = [  
    ["2000", 1100],
    ["2001", 880],
    ["2002", 1100],
    ["2003", 1500],
    ["2004", 921],
    ["2005", 1000],
    ["2006", 1400]
];
  
// create a chart
chart = anychart.cartesian();

// create a marker series and set the data
chart.marker(data);
  
// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Marker\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Marker chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Size

The size of markers can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Marker#normal}normal(){api}, {api:anychart.core.cartesian.series.Marker#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Marker#selected}selected(){api} methods and combine them with {api:anychart.core.StateSettings#size}size(){api}:

```
// set the size of markers
series.normal().size(10);
series.hovered().size(15);
series.selected().size(15);  
```

{sample}BCT\_Marker\_Chart\_02{sample}

### Type

The type (shape) of markers can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Marker#normal}normal(){api}, {api:anychart.core.cartesian.series.Marker#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Marker#selected}selected(){api} methods and combine them with {api:anychart.core.StateSettings#size}type(){api}:

Here is the list of available marker types: {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}.

This sample shows how to set the type of markers:

```
// set the type of markers
series1.normal().type("star4");
series1.hovered().type("star5");
series1.selected().type("star6");
series2.normal().type("star4");
series2.hovered().type("star5");
series2.selected().type("star6");
```

{sample}BCT\_Marker\_Chart\_03{sample}

### Appearance

The [appearance settings](../Appearance_Settings) of a Marker chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Marker#normal}normal(){api}, {api:anychart.core.cartesian.series.Marker#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Marker#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

In the sample below, there are two Marker series with appearance settings configured:

```
// create the first series
series1 = chart.marker(data1);

// configure the visual settings of the first series
series1.normal().fill("#00cc99", 0.3);
series1.hovered().fill("#00cc99", 0.1);
series1.selected().fill("#00cc99", 0.5);
series1.normal().stroke("#00cc99", 1, "10 5", "round");
series1.hovered().stroke("#00cc99", 2, "10 5", "round");
series1.selected().stroke("#00cc99", 4, "10 5", "round");

// create the second series
series2 = chart.marker(data2);

// configure the visual settings of the second series
series2.normal().fill("#0066cc", 0.3);
series2.hovered().fill("#0066cc", 0.1);
series2.selected().fill("#0066cc", 0.5);
series2.normal().hatchFill("percent50", "#0066cc");
series2.hovered().hatchFill("percent50", "#0066cc");
series2.selected().hatchFill("percent50", "#0066cc");
series2.normal().stroke("#0066cc");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_Marker\_Chart\_04{sample}

### Individual Points

If you use object notation to set the data, you can configure each marker individually – use extra data fields corresponding with the methods mentioned in the [Size](#size), [Type](#type), and [Appearance](#appearance) sections of this article.

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the following sample, there is a Marker chart with one marker customized:

```
// create data
var data = [
  {x: "2000", value: 1100},
  {x: "2001", value: 880},
  {x: "2002", value: 1100},
  {x: "2003", value: 1500,
   normal:   {
               fill: "#b30059 0.3",
               stroke: "#b30059",
               markerSize: 15,
               type: "star4"
             },
   hovered:  {
               fill: "#b30059 0.1",
               stroke: "2 #b30059",
               markerSize: 20
             },
   selected: {
               fill: "#b30059 0.5",
               stroke: "4 #b30059",
               markerSize: 20
             }
  },
  {x: "2004", value: 921},
  {x: "2005", value: 1000},
  {x: "2006", value: 1400}
];

// create a chart
chart = anychart.cartesian();

// create a marker series and set the data
series = chart.marker(data);
```

{sample}BCT\_Marker\_Chart\_05{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.