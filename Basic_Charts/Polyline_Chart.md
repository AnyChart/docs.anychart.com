{:index 1.61}
# Polyline Chart

## Overview

[A polyline chart is a special name that AnyChart uses for a line series displayed on a polar plot with a categorized X-scale + ссылка на раздел про шкалу в полярах]

This article explains how to create a basic Polyline chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Polyline chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.polar.series.Polyline}anychart.core.polar.series.Polyline{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>[Polyline](Polar_Plot/Polyline_Chart)</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Line](Line_Chart)</td></tr>
<tr><td></td><td>[Polar Line](Polar_Plot/Line_Chart)</td></tr>
<tr><td></td><td>[Radar Line](Radar_Plot/Line_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/polyline-chart/" target="_blank">Chartopedia: Polyline Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Polyline chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor. Then call the {api:anychart.charts.Polar#polyline}polyline{api} method to create a Polyline series.

The following sample demonstrates how a basic Polyline chart is created:

```
// create data
var data = [
  ["Strength", 8],
  ["Dexterity", 14],
  ["Concentration", 14],
  ["Intelligence", 15],
  ["Wisdom", 12],
  ["Charisma", 8]
];

// create a chart
var chart = anychart.polar();

// create a polyline series and set the data
var series = chart.polyline(data);
    
// set the type of the x-scale
chart.xScale("ordinal");

// enable sorting points by x
chart.sortPointsByX(true);

// set the inner radius
chart.innerRadius(50);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Polyline\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Polyline chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

The [appearance settings](../Appearance_Settings) of a Polyline chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.polar.series.Polyline##normal}normal(){api}, {api:anychart.core.cartesian.series.Line#hovered}hovered(){api}, and {api:anychart.core.polar.series.Polyline##selected}selected(){api} methods.

Combine them with the {api:anychart.core.StateSettings#stroke}stroke(){api} method. Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Polyline series with appearance settings configured:

```
// create the first series
var series1 = chart.polyline(seriesData_1);

// configure the visual settings of the first series
series1.normal().stroke("#00cc99", 1, "10 5", "round");
series1.hovered().stroke("#00cc99", 2, "10 5", "round");
series1.selected().stroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.polyline(seriesData_2);

// configure the visual settings of the second series
series2.normal().stroke("#0066cc");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_Polyline\_Chart\_02{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.