{:index 1.61}
# Marker Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Size](#size)
  * [Appearance](#appearance)
  * [Type](#type)
  * [Labels](#labels)
  * [Single Marker Adjusting](#single_marker_adjusting)
  * [Tooltips](#tooltips)

## Overview

Marker chart (also known as a point chart) is identical to a line chart without the lines. A marker chart shows only endpoints of segments that make each line up.

This article explains how to create a basic Marker chart as well as configure settings that are specific to the type. See the table below to get a brief overview of the Marker chart's characteristics:

<table border="1" class="seriesTABLE">
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
<tr><td>Polar</td><td>[Polar Marker](Polar_Plot/Overview)</td></tr>
<tr><td>Radar</td><td>[Radar Marker](Radar_Plot/Overview)</td></tr>
<tr><td>Scatter</td><td>[Scatter Marker](Scatter_Plot/Marker_Chart)</td></tr>
<tr><td>Stock</td><td>[Stock Marker](../Stock_Charts/Series/Marker)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Bubble](Bubble_Chart)</td></tr>
<tr><td></td><td>[Dot (Point) Maps](../Maps/Dot\_\(Point\)\_Map)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/dot-chart/" target="_blank">Chartopedia: Marker Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Marker chart, use the {api:anychart#marker}anychart.marker(){api} chart constructor. If you pass the data to this chart constructor, it will create a Marker series. Note that this constructor creates a chart of a Scatter type. Find more about Scatter Charts in the [Scatter Plot article](Scatter_Plot/Overview).

To create a Marker series explicitly, call the {api:anychart.charts.Cartesian#marker}marker(){api} method.

In the following sample, we DO NOT create a [Scatter Marker Chart](Scatter_Plot/Marker_Chart), we create a basic categorized Marker chart:

```
// create a categorized chart
chart = anychart.cartesian();
  
// data
data = [  
    ["2000", 1100],
    ["2001", 880],
    ["2002", 1100],
    ["2003", 1500],
    ["2004", 921],
    ["2005", 1000],
    ["2006", 1400]
];
  
// add a marker seris
chart.marker(data);
  
// set chart title
chart.title("Marker Chart");
  
// set axes titles 
chart.xAxis().title("Years");
chart.yAxis().title("Sales");
  
// draw
chart.container("container");
chart.draw();
```

{sample}BCT\_Marker\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Marker chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Size

It is possible to adjust the size of the markers to make them more noticeable or for any other reasons. Use {api:anychart.core.scatter.series.Marker#size}size(){api} method:

```
// set marker size
series.size(10);
```

The {api:anychart.core.scatter.series.Marker#hoverSize}hoverSize(){api} and {api:anychart.core.scatter.series.Marker#selectSize}selectSize(){api} are used for adjusting the markers' size for the series in hovered and selected states. 

```
// set marker size
series.hoverSize(15);
series.selectSize(15);
```

{sample}BCT\_Marker\_Chart\_02{sample}

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Marker series:

* {api:anychart.core.cartesian.series.Marker#color}color(){api}, {api:anychart.core.cartesian.series.Marker#fill}fill(){api}, {api:anychart.core.cartesian.series.Marker#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Marker#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Marker#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Marker#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Marker#hoverStroke}hoverStroke(){api} methods configure the visual settings on hover
* {api:anychart.core.cartesian.series.Marker#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Marker#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Marker#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there are two Marker series with some of the appearance settings configured:

```
// set colors
series1.fill("#00cc99", 0.5);
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverFill("#00cc99", 0.2);
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectFill("#00cc99", 0.8);
series1.selectStroke("#00cc99", 4, "10 5", "round");

series2.fill("none");
series2.hoverFill("none");
series2.selectFill("none");
series2.hatchFill("percent10");
series2.hoverHatchFill("percent30");
series2.selectHatchFill("percent50");
```

{sample}BCT\_Marker\_Chart\_03{sample}

**Note:** settings adjusted in the dataset override those which are adjusted through the methods. Read more about setting the data and data formats in the [Working with Data article](../Working_with_Data/Overview).

### Type

Markers can be of different shape. There are several marker types, which can be set through the {api:anychart.core.scatter.series.Marker#type}type(){api} method. The list of available marker types can be found on the {api:anychart.enums.MarkerType}Marker Types page{api}.

```
// set marker types
series1.type("arrowDown");
series2.type("arrowUp");
```

{sample}BCT\_Marker\_Chart\_04{sample}


### Single Marker Adjusting

Sometimes it is necessary to emphasize an only item for some reasons. In this case, use your dataset to fix the parameters for detached markers instead of the whole series.

The following sample demonstrates adjusting some settings for a single item:

```
var data = anychart.data.set([
    {x: "2000", value: 1100},
    {x: "2001", value: 880},
    {x: "2002", value: 1100},
    {x: "2003", value: 1500, fill: "gold", stroke: "#663399", markerSize: 15, hoverMarkerSize: 15, selectMarkerSize: 20, type: "star5"},
    {x: "2004", value: 921},
    {x: "2005", value: 1000},
    {x: "2006", value: 1400}
  ]);
```

{sample}BCT\_Marker\_Chart\_05{sample}


### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

