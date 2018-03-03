{:index 1.61}
# Polygon Chart

## Overview

In AnyChart, Polygon is a special name for an Area series displayed on a polar plot with a [categorized X-scale](Polar_Plot/Overview#scales).

This article explains how to create a basic Polygon chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Polygon chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.polar.series.Polygon}anychart.core.polar.series.Polygon{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Polygon](Stacked/Value/Polygon_Chart), [Percent Stacked Polygon](Stacked/Percent/Polygon_Chart)</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>[Polygon](Polar_Plot/Polygon_Chart)</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Area](Area_Chart)</td></tr>
<tr><td></td><td>[Polar Area](Polar_Plot/Area_Chart)</td></tr>
<tr><td></td><td>[Radar Area](Radar_Plot/Area_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Radar Chart](https://www.anychart.com/chartopedia/chart-types/radar-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Polylygon chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor. Then call the {api:anychart.charts.Polar#polyline}polygon{api} method to create a Polygon series.

The following sample demonstrates how a basic Polygon chart is created:

```
// create a chart
var chart = anychart.polar();

// create a polygon series and set the data
var series = chart.polygon(data);

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

{sample}BCT\_Polygon\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

The [appearance settings](../Appearance_Settings) of a Polygon chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Area#normal}normal(){api}, {api:anychart.core.cartesian.series.Area#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Area#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.polar.series.Polygon#fill}fill(){api} to set the fill
* {api:anychart.core.polar.series.Polygon#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.polar.series.Polygon#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Polygon series with appearance settings configured:

```
// create the first series
var series1 = chart.polygon(series1.name("Wizard");

// configure the visual settings of the first series
series1.normal().fill("#00cc99", 0.3);
series1.hovered().fill("#00cc99", 0.1);
series1.selected().fill("#00cc99", 0.5);
series1.normal().stroke("#00cc99", 1, "10 5", "round");
series1.hovered().stroke("#00cc99", 2, "10 5", "round");
series1.selected().stroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.polygon(seriesData_2);

// configure the visual settings of the second series
series2.normal().fill("#0066cc", 0.3);
series2.hovered().fill("#0066cc", 0.1);
series2.selected().fill("#0066cc", 0.5);
series2.normal().hatchFill("forward-diagonal", "#0066cc", 1, 15);
series2.hovered().hatchFill("forward-diagonal", "#0066cc", 1, 15);
series2.selected().hatchFill("forward-diagonal", "#0066cc", 1, 15);
series2.normal().stroke("#0066cc");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_Polygon\_Chart\_02{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Stacked Polygon

Stacked and percent stacked charts are multi-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms. 

In AnyChart, you can enable a special mode of the scale to make series stack together: see [Stacked Charts](Stacked/Overview).

To learn about the stacked versions of the Polygon chart, see:

* [Stacked Polygon](Stacked/Value/Polygon_Chart)
* [Percent Stacked Polygon](Stacked/Percent/Polygon_Chart)