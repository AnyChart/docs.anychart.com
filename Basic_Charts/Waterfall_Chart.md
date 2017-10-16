{:index 7.5}
# Waterfall Chart

## Overview

A waterfall chart is a data visualization that shows how an initial value is affected by a series of intermediate positive or negative values. This type is also known as a cascade chart, bridge chart, flying bricks chart, or Mario chart. 

As a rule, intermediate values are visualized as floating columns, while the initial and the final values look like whole columns. The elements are usually connected with lines.

This article explains how to create a basic Waterfall chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Waterfall chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Waterfall}anychart.charts.Waterfall{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, isTotal](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](#multiple_series)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Multiple Series](#multiple_series)</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Column](Column_Chart)</td></tr>
<tr><td></td><td>[Range Column](Range_Column_Chart)</td></tr>
<tr><td></td><td>[Stacked](Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/waterfall-chart/" target="_blank">Chartopedia: Waterfall Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Waterfall chart, use the {api:anychart#waterfall}anychart.waterfall(){api} chart constructor. If you pass the data to this chart constructor, it creates a Waterfall series.

To create a Waterfall series explicitly, call the {api:anychart.charts.Waterfall#waterfall}waterfall(){api} method.

The following sample demonstrates how a basic Waterfall chart is created:

```
// create data   
var data = [
    {x: "Start", value:  23},
    {x: "Jan",   value:  22},
    {x: "Feb",   value: -46},
    {x: "Mar",   value: -91},
    {x: "Apr",   value:  37},
    {x: "May",   value: -21},
    {x: "Jun",   value:  53},
    {x: "Jul",   value:  31},
    {x: "Aug",   value: -15},
    {x: "Sep",   value:  42},
    {x: "Oct",   value:  53},
    {x: "Nov",   value: -15},
    {x: "Dec",   value:  51},
    {x: "End", isTotal: true}
];

// create a waterfall chart
chart = anychart.waterfall();

// create a series and set the data
var series = chart.waterfall(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Waterfall\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Waterfall chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data for a Waterfall chart can be passed to the chart constructor {api:anychart#waterfall}anychart.waterfall(){api} or to the {api:anychart.charts.Waterfall#data}data(){api} method.

Use the following data fields:

* **x** to set categories
* **value** to set values
* **isTotal** to show a total value

The "isTotal" field is boolean, used optionally for showing/hiding a total value. By default, a total value is shown in a point if its value is not specified, and not shown if the value is specified.

The "value" field can be interpreted in different ways, depending on the data mode, which is set by using the {api:anychart.charts.Waterfall#dataMode}dataMode(){api} method with either *"diff"* or *"absolute"* as a parameter.

The default data mode is **difference**. It means that the "value" data field is interpreted as the difference between the current point and the previous one, the absolute value being calculated automatically.

In the **absolute** data mode, the "value" field is interpreted as the absolute value of a point, and the difference is calculated automatically.

The sample below shows how to set the data mode:

```
// create data   
var data = [
    {x: "Start", value:  23},
    {x: "Jan",   value:  22},
    {x: "Feb",   value: -46},
    {x: "Mar",   value: -91},
    {x: "Apr",   value:  37},
    {x: "May",   value: -21},
    {x: "Jun",   value:  53},
    {x: "Jul",   value:  31},
    {x: "Aug",   value: -15},
    {x: "Sep",   value:  42},
    {x: "Oct",   value:  53},
    {x: "Nov",   value: -15},
    {x: "Dec",   value:  51},
    {x: "End", isTotal: true}
];

// create and configure the first waterfall chart
var chart1 = anychart.waterfall(data);
// set the data mode
chart1.dataMode("diff");

// create and configure the second waterfall chart
var chart2 = anychart.waterfall(data);
// set the data mode
chart2.dataMode("absolute");
```

{sample :height 800}BCT\_Waterfall\_Chart\_02{sample}

### Multiple Series

The Waterfall chart supports multiple series, and this sample shows how they are visualized:

```
// create a data set
var data = anychart.data.set([
    ["Start", 23,  30,  21],
    ["Jan",   22,  22,  54],
    ["Feb",  -46,  45, -32],
    ["Mar",  -91, -30,  -28],
    ["Apr",   37, -27,  36],
    ["May",  -24,  62, -48],
    ["Jun",   55,  40, -29],
    ["Jul",   31,  33,  41],
    ["Aug",  -25, -46,  36],
    ["Sep",   42,  23,  22],
    ["Oct",   67, -44, -40],
    ["Nov",  -24, -31,  37],
    ["Dec",   51,  28,  25],
    ["End", {isTotal: true}, {isTotal: true}, {isTotal: true}],
]);

// map the data
var seriesData_1 = data.mapAs({x: 0, value: 1});
var seriesData_2 = data.mapAs({x: 0, value: 2});
var seriesData_3 = data.mapAs({x: 0, value: 3});

// create a waterfall chart
chart = anychart.waterfall();

// create the first series and set the data
var series1 = chart.waterfall(seriesData_1);

// create the second series and set the data
var series2 = chart.waterfall(seriesData_2);

// create the third series and set the data
var series3 = chart.waterfall(seriesData_3);
```

{sample}BCT\_Waterfall\_Chart\_03{sample}

### Appearance

The [appearance settings](../Appearance_Settings) of a Waterfall chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.waterfall.series.Waterfall#normal}normal(){api}, {api:anychart.core.waterfall.series.Waterfall#hovered}hovered(){api}, and {api:anychart.core.waterfall.series.Waterfall#selected}selected(){api} methods.

Combine them with the following methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api} to adjust columns indicating total values:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#fill}stroke(){api} to set the stroke

To adjust falling columns, use:

* {api:anychart.core.StateSettings#fallingFill}fallingFill(){api}
* {api:anychart.core.StateSettings#fallingHatchFill}fallingHatchFill(){api}
* {api:anychart.core.StateSettings#fallingStroke}fallingStroke(){api}

To adjust rising columns, use:

* {api:anychart.core.StateSettings#risingFill}risingFill(){api}
* {api:anychart.core.StateSettings#risingHatchFill}risingHatchFill(){api}
* {api:anychart.core.StateSettings#risingStroke}risingStroke(){api} 

In the followoing sample, there is a Waterfall chart with some of the appearance settings configured:

```
// configure the visual settings of the series
series.normal().fill("#ff6666", 0.3);
series.normal().hatchFill("forward-diagonal", "#ff6666", 0.5, 10);
series.normal().stroke("#ff6666");
series.hovered().fill("#ff6666", 0.1);
series.hovered().hatchFill("forward-diagonal", "#ff6666", 0.5, 10);
series.hovered().stroke("#ff6666", 2);
series.selected().fill("#ff6666", 0.5);
series.selected().hatchFill("forward-diagonal", "#ff6666", 0.5, 10);
series.selected().stroke("#ff6666", 4);

series.normal().fallingFill("#00cc99", 0.3);
series.normal().fallingStroke("#00cc99", 1, "10 5", "round");
series.hovered().fallingFill("#00cc99", 0.1);
series.hovered().fallingStroke("#00cc99", 2, "10 5", "round");
series.selected().fallingFill("#00cc99", 0.5);
series.selected().fallingStroke("#00cc99", 4, "10 5", "round");

series.normal().risingFill("#0066cc", 0.3);
series.normal().risingStroke("#0066cc");
series.hovered().risingFill("#0066cc", 0.1);
series.hovered().risingStroke("#0066cc", 2);
series.selected().risingFill("#0066cc", 0.5);
series.selected().risingStroke("#0066cc", 4);
```

{sample}BCT\_Waterfall\_Chart\_04{sample}

### Connectors

A connector is a line connecting two columns of a Waterfall chart. To configure the stroke of connectors, use the {api:anychart.charts.Waterfall#connectorStroke}connectorStroke(){api} method:

```
// configure connectors
chart.connectorStroke("#ff6666", 2, "2 2", "round");
```

{sample}BCT\_Waterfall\_Chart\_05{sample}

### Point Size

This chart type allows you to set the size of its points. Read more in the [Point Size](../Common_Settings/Point_Size) article.

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

To change the text of labels, combine the {api:anychart.charts.Waterfall#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

In addition to tokens that work universally, you can use two tokens that work only with the Waterfall chart: *{%Diff}* and *{%Absolute}*. The first one returns the difference between points and the second one returns the absolute value of a point.

By default, labels show the difference, and in this sample the *{%Absolute}* token is used to show absolute values:

```
// configure labels
chart.labels().format("{%Absolute}");
```

{sample}BCT\_Waterfall\_Chart\_06{sample}

You can also configure labels with the help of [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields (in addition to the default ones): *diff*, *absolute*, *isTotal*. The last field allows to find out whether a column indicates a total value or not.

For example, in the sample below labels show absolute values, and the labels of columns indicating total values are colored:

```
// enable HTML for labels
chart.labels().useHtml(true);

// configure labels
chart.labels().format(function(){
    if (this.isTotal)
        return "<span style='color:red;font-weight:bold'>" + this.absolute + "</span>";
    return this.absolute;
});
```

{sample}BCT\_Waterfall\_Chart\_07{sample}

### Tooltips

* {api:anychart.charts.Waterfall#tooltip}tooltip(){api}
* {api:anychart.core.ui.Tooltip#format}format(){api}
* {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api}

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

To change the text of tooltips, combine the {api:anychart.charts.Waterfall#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens). It is also possible to change the titles of tooltips: call {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api}.

In addition to tokens that work universally, you can use two tokens that work only with the Waterfall chart: *{%Diff}* and *{%Absolute}*. The first one returns the difference between points and the second one returns the absolute value of a point.

In the following sample, these tokens are used to change the text of tooltips, including the titles:

```
// configure tooltips
chart.tooltip().titleFormat("Absolute | Difference");
chart.tooltip().format("{%Absolute}\n{%Diff}");
```
{sample}BCT\_Waterfall\_Chart\_08{sample}

You can also configure tooltips with the help of [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields (in addition to the default ones): *diff*, *absolute*, *isTotal*. The last field allows to find out whether a column shows a total value or not.

The function in the sample below modifies the tooltips of columns indicating total values:

```
// configure tooltips
chart.tooltip().titleFormat(function(){
    if (this.isTotal) return "Total";
    return this.x;
});
```
{sample}BCT\_Waterfall\_Chart\_09{sample}

### Legend

The default [legend](../Common_Settings/Legend) of the Waterfall chart shows increasing, decreasing, and total columns. If you work with a multi-series chart and want to show series instead, combine the {api:anychart.charts.Waterfall#legend}legend(){api} method with {api:anychart.core.ui.Legend#itemsSourceMode}itemsSourceMode(){api} and use *"default"* as a parameter:

```
// add hatch fills
series1.hatchFill("percent05", "white", 1, 9);
series1.fallingHatchFill("percent05", "white", 1, 9);
series1.risingHatchFill("percent05", "white", 1, 9);

series2.hatchFill("dashedBackwardDiagonal", "white", 1, 9);
series2.fallingHatchFill("dashedBackwardDiagonal", "white", 1, 9);
series2.risingHatchFill("dashedBackwardDiagonal", "white", 1, 9);

series3.hatchFill("forwardDiagonal", "white", 1, 6);
series3.fallingHatchFill("forwardDiagonal", "white", 1, 6);
series3.risingHatchFill("forwardDiagonal", "white", 1, 6);

// configure the legend
chart.legend().itemsSourceMode("default");
```

{sample}BCT\_Waterfall\_Chart\_10{sample}

