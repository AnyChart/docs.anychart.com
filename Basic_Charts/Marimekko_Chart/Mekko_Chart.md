{:index 1}
# Mekko Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)

## Overview

A Mekko chart with %-axis (often called *marimekko chart* or *100% cost curve*) is a two-dimensional [100% chart](../Stacked/Overview). As in the 100% chart, the value axis is based on percentages and column heights are shown relative to 100%. In the regular 100% chart, since the columns are scaled to relative heights, there is no visual representation of absolute column totals.

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.mekko.series.Mekko}anychart.core.mekko.series.Mekko{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](Mekko_Chart)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[YES](Mekko_Chart)</td></tr>
<tr><td>Vertical</td><td>[YES](Vertical/Mekko_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[BarMekko](BarMekko_Chart)</td></tr>
<tr><td></td><td>[Mosaic Chart](Mosaic_Chart)</td></tr>
<tr><td></td><td>[Column Chart](../Column_Chart)</td></tr>
<tr><td></td><td>[Bar Chart](../Bar_Chart)</td></tr>
<tr><td></td><td>[Stacked Charts](../Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/mekko-chart/" target="_blank">Chartopedia: Marimekko Mekko Chart</a></td></tr>
<tr><td></td><td>[General Settings](../General_Settings)</td></tr>
</table>

## Quick Start

To create a Mekko chart, use the {api:anychart#mekko}anychart.mekko(){api} chart constructor. If you pass the data to this chart constructor, it creates mekko series.

To create mekko series explicitly, call the {api:anychart.charts.Mekko#mekko}mekko(){api} method.

The following sample demonstrates how a basic Mekko chart is created:

```
// create a data set
var data = anychart.data.set([
  ["QTR1", 10000, 12500],
  ["QTR2", 12000, 15000],
  ["QTR3", 13000, 16500],
  ["QTR4", 10000, 13000],
]);

// map the data
var seriesData_1 = data.mapAs({x: 0, value: 1});
var seriesData_2 = data.mapAs({x: 0, value: 2});

// create a chart
chart = anychart.mekko();

// add series and change the orientation
var series1 = chart.mekko(seriesData_1).name("Item 1");
var series2 = chart.mekko(seriesData_2).name("Item 2");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Mekko\_Chart\_01{sample}

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
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

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

{sample}BCT\_Mekko\_Chart\_02{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical Mekko Chart

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical/Overview).

Here is the information about creating Vertical Mekko Chart:

* [Vertical Mekko Line](Vertical/Mekko_Chart)

