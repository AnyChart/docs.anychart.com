{:index 1}
# Bubble Chart

## Overview

A Bubble chart is a variation of a [Scatter chart](Scatter_Plot/Overview) where the data points are replaced with bubbles.  
  
HTML5 Bubble charts are often used to present financial data. Use a Bubble chart if you want to put more attention to the specific values in your chart by different bubble sizes.  

Bubble charts are popular tools for identifying and illustrating industry clusters. Essentially, these charts allow four different variables to be plotted within the same graph, making it easy to assess relative economic performance.
  
Because they allow visual comparisons of well-understood measures, bubble charts are often used for pinpointing priority industries that should receive attention from a state economic development agency.

This article explains how to create a basic Bubble chart as well as configure settings that are specific to the type. See the table below to get a brief overview of the Bubble chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Module</td><td>[Basic Cartesian](../Quick_Start/Modules#basic_cartesian_charts)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Bubble}anychart.core.cartesian.series.Bubble{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, size](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Bubble](Vertical/Bubble_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Error Bubble](Error_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>[Scatter Bubble](Scatter_Plot/Bubble_Chart)</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Marker](Marker_Chart)</td></tr>
<tr><td></td><td>[Dot (Point) Maps](../Maps/Dot_(Point\)_Map)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Bubble Chart](https://www.anychart.com/chartopedia/chart-types/bubble-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Module

The Bubble chart requires adding the [Basic Cartesian](../Quick_Start/Modules#basic_cartesian_charts) module:

```
<script src="https://cdn.anychart.com/releases/8.2.1/js/anychart-cartesian.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Bubble chart, use the {api:anychart#bubble}anychart.bubble(){api} chart constructor. If you pass the data to this chart constructor, it will create a Bubble series. Note that this constructor creates a chart of a Scatter type. Find more about Scatter Charts in the [Scatter Plot article](Scatter_Plot/Overview).

To create a Bubble series explicitly, call the {api:anychart.charts.Cartesian#bubble}bubble(){api} method.

In the following sample, we DO NOT create a [Scatter Bubble Chart](Scatter_Plot/Bubble_Chart), we create a basic categorized Bubble chart:

```
// create a categorized chart
chart = anychart.cartesian();
  
// data
data = [  
    ["2000", 1100, 1],
    ["2001", 880, 2],
    ["2002", 1100, 5],
    ["2003", 1500, 3],
    ["2004", 921, 3],
    ["2005", 1000, 2],
    ["2006", 1400, 1]
];
  
// add a marker seris
chart.bubble(data);
  
// set chart title
chart.title("Bubble Chart");
  
// set axes titles 
chart.xAxis().title("Years");
chart.yAxis().title("Sales");
  
// draw
chart.container("container");
chart.draw();
```

{sample}BCT\_Bubble\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Bubble Chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

#### All Points

The [appearance settings](../Appearance_Settings) of a Bubble chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Bubble#normal}normal(){api}, {api:anychart.core.cartesian.series.Bubble#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Bubble#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Bubble series with appearance settings configured:

```
// create the first series
var series1 = chart.bubble(data1);

// configure the visual settings of the first series
series1.normal().fill("#00cc99", 0.3);
series1.hovered().fill("#00cc99", 0.3);
series1.selected().fill("#00cc99", 0.5);
series1.normal().stroke("#00cc99", 1, "10 5", "round");
series1.hovered().stroke("#00cc99", 2, "10 5", "round");
series1.selected().stroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.bubble(data2);

// configure the visual settings of the second series
series2.normal().fill("#0066cc", 0.3);
series2.hovered().fill("#0066cc", 0.3);
series2.selected().fill("#0066cc", 0.5);
series2.normal().hatchFill("percent30", "#0066cc", 1, 15);
series2.hovered().hatchFill("percent30", "#0066cc", 1, 15);
series2.selected().hatchFill("percent30", "#0066cc", 1, 15);
series2.normal().stroke("#0066cc");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_Bubble\_Chart\_02{sample}

#### Individual Points

If you use object notation to set the data, you can change the appearance (and some other settings) of individual bubbles by adding special fields to your data:

```
// create data
var data = [
  {x: "2000", value: 1100, size: 3},
  {x: "2001", value: 880, size: 4},
  {x: "2002", value: 1100, size: 4},
  {x: "2003", value: 1300, size: 5,
   normal:   {
               fill: "#b30059 0.3",
               stroke: "#b30059"
             },
   hovered:  {
               fill: "#b30059 0.1",
               stroke: "2 #b30059"
             },
   selected: {
               fill: "#b30059 0.5",
               stroke: "4 #b30059"
             }
  },
  {x: "2004", value: 921, size: 4.5},
  {x: "2005", value: 1000, size: 3},
  {x: "2006", value: 1400, size: 4}
];

// create a chart
chart = anychart.cartesian();

// set the interactivity mode
chart.interactivity().hoverMode("by-x");

// create a bubble series and set the data
series = chart.bubble(data);
```

{sample}BCT\_Bubble\_Chart\_03{sample}

### Size

The min and the max size of bubbles can be controlled using {api:anychart.charts.Scatter#maxBubbleSize}maxBubbleSize(){api} and {api:anychart.charts.Scatter#minBubbleSize}minBubbleSize(){api} parameters. Both of them can be set either in pixels or as a percentage of the short side of the chart:

```
chart.minBubbleSize("3%");
chart.maxBubbleSize("10%");
```

{sample}BCT\_Bubble\_Chart\_04{sample}

And there is a sample when bubbles are sized in pixels:

```
chart.maxBubbleSize(100);
chart.minBubbleSize(10);
```

Note: this size setting type (in pixels) may lead to the nasty results when chart is resized.

{sample}BCT\_Bubble\_Chart\_05{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.