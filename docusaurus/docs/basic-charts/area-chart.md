---
sidebar_position: 1
---
# Area Chart

## Overview

An area chart is a chart type based on the line chart: it also shows information as a series of data points connected by straight line segments, but the area between the X-axis and the line segments is filled with color or a pattern.

The area chart emphasizes the magnitude of change over time and can be used to highlight the total value across a trend. For example, an area chart displaying profit over time can emphasize the total profit.

This article explains how to create a basic Area chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Area chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Modules</td><td>[Core](../quick-start/modules#core) + [Basic Cartesian](../quick-start/modules#basic-cartesian) / [Base](../quick-start/modules#base)</td></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Area}anychart.core.cartesian.series.Area{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../working-with-data/overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../working-with-data/overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Area](stacked/value/area-chart), [Percent Stacked Area](stacked/percent/area-chart)</td></tr>
<tr><td>Vertical</td><td>[Vertical Area](vertical/area-chart)</td></tr>
<tr><td>3D</td><td>[3D Area](3d/area-chart)</td></tr>
<tr><td>Error Bars</td><td>[Area Chart with Error Bars](error-chart/area-chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>[Polar Area](polar-plot/area-chart), [Polygon](polar-plot/polygon-chart)</td></tr>
<tr><td>Radar</td><td>[Radar Area](radar-plot/area-chart)</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Area](../stock-charts/series/area)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Spline Area](spline-area-chart)</td></tr>
<tr><td></td><td>[Step Area](step-area-chart)</td></tr>
<tr><td></td><td>[Range Area](range-area-chart)</td></tr>
<tr><td></td><td>[Range Spline Area](range-spline-area-chart)</td></tr>
<tr><td></td><td>[Range Step Area](range-step-area-chart)</td></tr>
<tr><td></td><td>[Area Sparkline](sparkline-chart#area-sparkline-chart)</td></tr>
<tr><td></td><td>[Polygon](polygon-chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Area Chart](https://www.anychart.com/chartopedia/chart-types/area-chart/)</td></tr>
<tr><td></td><td>[General Settings](general-settings)</td></tr>
</table>

## Modules

The Area chart requires adding the [Core](../quick-start/modules#core) and [Basic Cartesian](../quick-start/modules#basic-cartesian) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

Alternatively, you can use the [Base](../quick-start/modules#base) module, which includes, among other things, the two modules mentioned above: 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../quick-start/modules).

## Quick Start

To create an Area chart, use the {api:anychart#area}anychart.area(){api} chart constructor. If you pass the data to this chart constructor, it creates an Area series.

To create an Area series explicitly, call the {api:anychart.charts.Cartesian#area}area(){api} method.

The following sample demonstrates how a basic Area chart is created:

```
// create data
var data = [
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
];

// create a chart
chart = anychart.area();

// create an area series and set the data
var series = chart.area(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Area\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](general-settings).

## Special Settings

### Appearance

The [appearance settings](../appearance-settings) of an Area chart can be configured in three [states](../common-settings/interactivity/states): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Area#normal}normal(){api}, {api:anychart.core.cartesian.series.Area#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Area#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Area series with appearance settings configured:

```
// create the first series
var series1 = chart.area(seriesData_1);

// configure the visual settings of the first series
series1.normal().fill("#00cc99", 0.3);
series1.hovered().fill("#00cc99", 0.1);
series1.selected().fill("#00cc99", 0.5);
series1.normal().stroke("#00cc99", 1, "10 5", "round");
series1.hovered().stroke("#00cc99", 2, "10 5", "round");
series1.selected().stroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.area(seriesData_2);

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

{sample}BCT\_Area\_Chart\_02{sample}

### Labels

[Labels](../common-settings/labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../common-settings/text-formatters) are available.

### Tooltips

A [Tooltip](../common-settings/tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../common-settings/text-formatters), change the style of background, adjust the position of a tooltip, and so on.

### Scales

When Area chart is used with the ordinal scale and you wish to remove the gaps to the right and left of the area you need to change the [ordinal scale mode](../axes-and-grids/scales#ordinal) to `'continuous'`:

```
chart.xScale().mode('continuous');
```

{sample}BCT\_Area\_Chart\_03{sample}

### Stacked Area

Stacked and percent stacked charts are multiple-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms. 

In AnyChart, you can enable a special mode of the scale to make series stack together: see [Stacked Charts](stacked/overview).

To learn about the stacked versions of the Area chart and its modifications, see:

* [Stacked Area](stacked/value/area-chart)
* [Percent Stacked Area](stacked/percent/area-chart)
* [Stacked Spline Area](stacked/value/spline-area-chart)
* [Percent Stacked Spline Area](stacked/percent/spline-area-chart)
* [Stacked Step Area](stacked/value/step-area-chart)
* [Percent Stacked Step Area](stacked/percent/area-chart)

### Vertical Area

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts](vertical/overview).

Here is information about creating Vertical Area series:

* [Vertical Area](vertical/area-chart)
* [Vertical Spline Area](vertical/spline-area-chart)
* [Vertical Step Area](vertical/step-area-chart)

### 3D Area

Using AnyChart, you can create 3D versions of some chart types, including the Area chart.

To learn about 3D charts in general, see [3D Charts](3d/overview).

The 3D Area chart is described in the following article: [3D Area Chart](3d/area-chart)