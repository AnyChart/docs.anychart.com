{:index 1}
# Bubble Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Size](#size)
  * [Single Bubble Adjusting](#single_bubble_adjusting)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

A Bubble chart is a variation of a [Scatter chart](Scatter_Plot/Overview) where the data points are replaced with bubbles.  
  
HTML5 Bubble charts are often used to present financial data. Use a Bubble chart if you want to put more attention to the specific values in your chart by different bubble sizes.  

Bubble charts are popular tools for identifying and illustrating industry clusters. Essentially, these charts allow four different variables to be plotted within the same graph, making it easy to assess relative economic performance.
  
Because they allow visual comparisons of well-understood measures, bubble charts are often used for pinpointing priority industries that should receive attention from a state economic development agency.

This article explains how to create a basic Bubble chart as well as configure settings that are specific to the type. See the table below to get a brief overview of the Bubble chart's characteristics:

<table border="1" class="seriesTABLE">
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
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/bubble-chart/" target="_blank">Chartopedia: Bubble Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

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

Here is a full list of methods used to configure visual settings that are available for the Bubble series:

* {api:anychart.core.cartesian.series.Bubble#color}color(){api}, {api:anychart.core.cartesian.series.Bubble#fill}fill(){api}, {api:anychart.core.cartesian.series.Bubble#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Bubble#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Bubble#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Bubble#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Bubble#hoverStroke}hoverStroke(){api} methods configure the visual settings on hover
* {api:anychart.core.cartesian.series.Bubble#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Bubble#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Bubble#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there are two Bubble series with some of the appearance settings configured:

```
// set colors
series1.color(["#90caf9", "#6aabcc"], 0.69, 0.59, anychart.math.rect(200, 200, 400, 400), 0.8, 0.7, 0.84);
series1.stroke("#00897b", 1, "10 5", "round");
series1.hoverFill("#6aabcc", 0.3);
series1.hoverStroke("#00897b", 2, "10 5", "round");
series1.selectFill("#1976d2", 0.8);
series1.selectStroke("#00897b", 4, "10 5", "round");

series2.fill(["#80cbc4", "#519790"], 0.69, 0.59, anychart.math.rect(200, 200, 400, 400), 0.8, 0.7, 0.84);
series2.hoverFill("#80cbc4", 0.5);
series2.selectFill("#16685d");
series2.hatchFill("percent10");
series2.hoverHatchFill("percent30");
series2.selectHatchFill("percent50");
```

{sample}BCT\_Bubble\_Chart\_02{sample}

**Note:** settings adjusted in the dataset override those which are adjusted through the methods. Read more about setting the data and data formats in the [Working with Data article](../Working_with_Data/Overview).


### Size

The min and the max size of bubbles can be controlled using {api:anychart.charts.Scatter#maxBubbleSize}maxBubbleSize(){api} and {api:anychart.charts.Scatter#minBubbleSize}minBubbleSize(){api} parameters. Both of them can be set either in pixels or in percents of a less chart side:

```
chart.maxBubbleSize("15%");
chart.minBubbleSize("5%");
```

When you set {api:anychart.charts.Scatter#maxBubbleSize}maxBubbleSize("15%"){api} - AnyChart will make diameters of bubble(s) with a biggest size equal to 15% of width or the height, depends on which side is shorter.
  
  
Here is the sample where bubbles are sized in percents, as specified above:

{sample}BCT\_Bubble\_Chart\_03{sample}

And there is a sample when bubbles are sized in pixels:

```
chart.maxBubbleSize(100);
chart.minBubbleSize(10);
```
Note: this size setting type (in pixels) may lead to the nasty results when chart is resized.

{sample}BCT\_Bubble\_Chart\_04{sample}


### Single Bubble Adjusting

Sometimes it is necessary to emphasize an only item for some reasons. In this case, use your dataset to fix the parameters for detached bubbles instead of the whole series.

The following sample demonstrates adjusting some settings for a single item:

```
var data = anychart.data.set([
    {x: "2000", value: 1100, size: 3},
    {x: "2001", value: 880, size: 4},
    {x: "2002", value: 1100, size: 4},
    {x: "2003", value: 1300, size: 5, fill: "gold", stroke: "#663399", type: "star5"},
    {x: "2004", value: 921, size: 4.5},
    {x: "2005", value: 1000, size: 3},
    {x: "2006", value: 1400, size: 4}
  ]);
```

{sample}BCT\_Bubble\_Chart\_05{sample}


### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.
