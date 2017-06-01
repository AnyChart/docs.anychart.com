{:index 6}
# Stick Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
  * [Vertical Stick](#vertical_stick)

## Overview

Stick Charts look like Column Charts with no width. Sticks are good at demonstrating some discrete data.

This article explains how to create a basic Stick chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of Stick Chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Stick}anychart.core.cartesian.series.Stick{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Stick](Stacked/Value/Stick_Chart), [Percent Stacked Stick](Stacked/Percent/Stick_Chart)</td></tr>
<tr><td>Vertical</td><td>[Vertical Stick](Vertical/Stick_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Stick Chart with Error Bars](Error_Chart/Stick_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Stick](../Stock_Charts/Series/Stick)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Column](Column_Chart)</td></tr>
<tr><td></td><td>[Line](Line_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/stick-chart/" target="_blank">Chartopedia: Stick Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

Stick Chart is a variation of a [Column](Column_Chart), so when a Stick Chart is created it is necessary to create a Column Chart first and set the series of a Stick type.

To create a Stick chart, use the {api:anychart#column}anychart.column(){api} chart constructor. 

After you created a column chart use the {api:anychart.charts.Cartesian#stick}stick(){api} method.

```
// create a data set
var data = [
  {x: "January", value: 10000},
  {x: "February", value: 12000},
  {x: "March", value: 18000},
  {x: "April", value: 11000},
  {x: "May", value: 9000}
];

// create a chart
chart = anychart.column();

// create a stick series and set the data
var series = chart.stick(data);
```

{sample}BCT\_Stick\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Stick chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Stick series:

* {api:anychart.core.cartesian.series.Stick#color}color(){api} and {api:anychart.core.cartesian.series.Stick#stroke}stroke(){api} set the color and stroke
* {api:anychart.core.cartesian.series.Stick#hoverStroke}hoverStroke(){api} configures the stroke on hover
* {api:anychart.core.cartesian.series.Stick#selectStroke}selectStroke(){api} configures the stroke on select

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the sample below, there are two Stick series with some of the appearance settings configured:

```
// create the first series
var series1 = chart.stick(seriesData_1);

// configure the visual settings of the first series
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.stick(seriesData_2);

// configure the visual settings of the second series
series2.stroke("#0066cc");
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```

{sample}BCT\_Stick\_Chart\_02{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical Stick

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical/Overview).

Here is the information about creating Vertical Stick series:

* [Vertical Stick](Vertical/Stick_Chart)