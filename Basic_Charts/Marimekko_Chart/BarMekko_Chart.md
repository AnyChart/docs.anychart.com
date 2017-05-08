{:index 2}
# BarMekko Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

A Mekko chart with units (sometimes also called *submarine chart* or *olympic chart*) is a two-dimensional stacked chart. It is often used with one series only. As in the [regular stacked chart](../Stacked/Overview), the value axis and the datasheet of this chart are based on absolute values. 

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.mekko.series.Mekko}anychart.core.mekko.series.Mekko{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](BarMekko_Chart)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[YES](BarMekko_Chart)</td></tr>
<tr><td>Vertical</td><td>[YES](Vertical/BarMekko_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Mekko](Mekko_Chart)</td></tr>
<tr><td></td><td>[Mosaic Chart](Mosaic_Chart)</td></tr>
<tr><td></td><td>[Column Chart](../Column_Chart)</td></tr>
<tr><td></td><td>[Bar Chart](../Bar_Chart)</td></tr>
<tr><td></td><td>[Stacked Charts](../Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/barmekko-chart/" target="_blank">Chartopedia: Marimekko BarMekko Chart</a></td></tr>
<tr><td></td><td>[General Settings](../General_Settings)</td></tr>
</table>

## Quick Start

To create a chart, use the {api:anychart#barmekko}anychart.barmekko(){api} chart constructor. 

To add a series call the {api:anychart.charts.Mekko#mekko}mekko(){api} method.

The following sample demonstrates how a basic BarMekko  chart is created:

```
// create a data set
var data = [
	{x: "Spring", value: 20},
	{x: "Summer", value: 30},
	{x: "Autumn", value: 100},
	{x: "Winter", value: 40}
];

// create a chart
var chart = anychart.barmekko();

// create a mekko series and set the data
var series = chart.mekko(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_BarMekko\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](../General_Settings).

## Special Settings

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Mekko series:

* {api:anychart.core.mekko.series.Mekko#color}color(){api}, {api:anychart.core.mekko.series.Mekko#fill}fill(){api}, {api:anychart.core.mekko.series.Mekko#hatchFill}hatchFill(){api}, {api:anychart.core.mekko.series.Mekko#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.mekko.series.Mekko#hoverFill}hoverFill(){api}, {api:anychart.core.mekko.series.Mekko#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.mekko.series.Mekko#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.mekko.series.Mekko#selectFill}selectFill(){api}, {api:anychart.core.mekko.series.Mekko#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.mekko.series.Mekko#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) section.

In the sample below, there are two mekko series with some of the appearance settings configured:

```
// create the first series
var series1 = chart.mekko(seriesData_1);

// configure the visual settings of the first series
series1.fill("#00cc99", 0.3);
series1.hoverFill("#00cc99", 0.3);
series1.selectFill("#00cc99", 0.5);

// create the second series
var series2 = chart.mekko(seriesData_2);

// configure the visual settings of the second series
series2.fill("#0066cc", 0.3);
series2.hoverFill("#0066cc", 0.3);
series2.selectFill("#0066cc", 0.5);
series2.hatchFill("zigzag", "#808080", 1, 15);
series2.stroke("#0066cc");
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```

{sample}BCT\_BarMekko\_Chart\_02{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical BarMekko Chart

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical/Overview).

Here is the information about creating Vertical BarMekko Chart:

* [Vertical BarMekko](../Vertical/BarMekko_Chart)

