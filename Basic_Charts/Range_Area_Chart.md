{:index 3.1}
# Range Area Chart

## Overview

A range area chart displays information as a range of data by plotting two Y-values (low and high) per data point. It looks like two lines, the area between them usually being filled with color or a pattern.

Such charts are used to emphasize the magnitude of difference between high and low values and at the same time to show trends in data over time.

This article explains how to create a basic Range Area chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Range Area chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.RangeArea}anychart.core.cartesian.series.RangeArea{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Range Area](Vertical/Range_Area_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>[Stock Range Area](../Stock_Charts/Series/Range_Area)</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Area](Area_Chart)</td></tr>
<tr><td></td><td>[Spline Area](Spline_Area_Chart)</td></tr>
<tr><td></td><td>[Step Area](Step_Area_Chart)</td></tr>
<tr><td></td><td>[Range Spline Area](Range_Spline_Area_Chart)</td></tr>
<tr><td></td><td>[Range Step Area](Range_Step_Area_Chart)</td></tr>
<tr><td></td><td>[HiLo](HiLo_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/range-area-chart/" target="_blank">Chartopedia: Range Area Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Range Area series, use the {api:anychart.charts.Cartesian#rangeArea}rangeArea(){api} method (before, of course, you should create a chart by using {api:anychart#area}anychart.area(){api} or any other cartesian chart constructor).

Since range area charts plot two Y-values per data point, you need to specify two values for each category by using the **"low"** and **"high"** parameters. That is how it looks like in object notation:

```
var data = [
  {x: "January", low: 0.7, high: 6.1},
  {x: "February", low: 0.6, high: 6.3},
  {x: "March", low: 1.9, high: 8.5},
  {x: "April", low: 3.1, high: 10.8},
  {x: "May", low: 5.7, high: 14.4}
];
```

The following sample demonstrates how a basic Range Area chart is created:

```
// create data
var data = [
  ["January", 0.7, 6.1],
  ["February", 0.6, 6.3],
  ["March", 1.9, 8.5],
  ["April", 3.1, 10.8],
  ["May", 5.7, 14.4]
];

// create a chart
chart = anychart.area();

// create a range area series and set the data
var series = chart.rangeArea(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Range\_Area\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Range Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

The [appearance settings](../Appearance_Settings) of a Range Area chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.RangeArea#normal}normal(){api}, {api:anychart.core.cartesian.series.RangeArea#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.RangeArea#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#fill}lowStroke(){api} to set the low stroke
* {api:anychart.core.StateSettings#fill}highStroke(){api} to set the high stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Range Area series with appearance settings configured:

```
// create the first series
var series1 = chart.rangeArea(seriesData_1);

// configure the visual settings of the first series
series1.normal().fill("#00cc99", 0.3);
series1.hovered().fill("#00cc99", 0.1);
series1.selected().fill("#00cc99", 0.5);
series1.normal().lowStroke("#00cc99", 1, "10 5", "round");
series1.hovered().lowStroke("#00cc99", 2, "10 5", "round");
series1.selected().lowStroke("#00cc99", 4, "10 5", "round");
series1.normal().highStroke("#ff6666", 1, "10 5", "round");
series1.hovered().highStroke("#ff6666", 2, "10 5", "round");
series1.selected().highStroke("#ff6666", 4, "10 5", "round");

// create the second series
var series2 = chart.rangeAarea(seriesData_2);
// configure the visual settings of the second series
series2.normal().fill("#0066cc", 0.3);
series2.hovered().fill("#0066cc", 0.1);
series2.selected().fill("#0066cc", 0.5);
series2.normal().hatchFill("forward-diagonal", "#0066cc", 1, 15);
series2.hovered().hatchFill("forward-diagonal", "#0066cc", 1, 15);
series2.selected().hatchFill("forward-diagonal", "#0066cc", 1, 15);
series2.normal().lowStroke("#0066cc", 1);
series2.hovered().lowStroke("#0066cc", 2);
series2.selected().lowStroke("#0066cc", 4);
series2.normal().highStroke("#ff6666");
series2.hovered().highStroke("#ff6666", 2);
series2.selected().highStroke("#ff6666", 4);
```

{sample}BCT\_Range\_Area\_Chart\_02{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical Range Area

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts](Vertical/Overview).

Here is the information about creating Vertical Range Area series:

* [Vertical Range Area](Vertical/Range_Area_Chart)
* [Vertical Range Spline Area](Vertical/Range_Spline_Area_Chart)
* [Vertical Range Step Area](Vertical/Range_Step_Area_Chart)