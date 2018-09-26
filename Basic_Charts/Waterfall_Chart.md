{:index 7.5}
# Waterfall Chart

## Overview

A waterfall chart is a data visualization that shows how an initial value is affected by a series of intermediate positive or negative values. This type is otherwise known as a cascade chart, bridge chart, flying bricks chart, or Mario chart. 

As a rule, intermediate values are visualized as floating columns, while the initial and the final values look like whole columns. The elements are usually connected with lines.

This article explains how to create a basic Waterfall chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Waterfall chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Waterfall](../Quick_Start/Modules#waterfall)</td></tr>
<tr><th colspan=2>API</th></tr>
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
<tr><td></td><td>[Chartopedia: Waterfall Chart](https://www.anychart.com/chartopedia/chart-types/waterfall-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Waterfall chart requires adding the [Core](../Quick_Start/Modules#core) and [Waterfall](../Quick_Start/Modules#waterfall) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-waterfall.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules)

## Quick Start

To create a Waterfall chart, use the {api:anychart#waterfall}anychart.waterfall(){api}  chart constructor. If you pass the data to this chart constructor, it creates a Waterfall series.

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

* `x` to set categories
* `value` to set values
* `isTotal` to show a total value

**Note:** It is possible to add custom fields to your data - see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

The `isTotal` field is boolean, used optionally for showing/hiding a total value. By default, a total value is shown in a point if its value is not specified, and not shown if the value is specified.

The `value` field can be interpreted in different ways, depending on the data mode, which is set by using the {api:anychart.charts.Waterfall#dataMode}dataMode(){api} method with either `"diff"` or `"absolute"` as a parameter - see {api:anychart.enums.WaterfallDataMode}anychart.enums.WaterfallDataMode{api}.

The default data mode is **difference**. It means that the `value` data field is interpreted as the difference between the current point and the previous one, the absolute value being calculated automatically.

In the **absolute** data mode, the `value` field is interpreted as the absolute value of a point, and the difference is calculated automatically.

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

Combine them with the following methods to adjust columns indicating total values:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

To adjust falling columns, use:

* {api:anychart.core.StateSettings#fallingFill}fallingFill(){api}
* {api:anychart.core.StateSettings#fallingHatchFill}fallingHatchFill(){api}
* {api:anychart.core.StateSettings#fallingStroke}fallingStroke(){api}

To adjust rising columns, use:

* {api:anychart.core.StateSettings#risingFill}risingFill(){api}
* {api:anychart.core.StateSettings#risingHatchFill}risingHatchFill(){api}
* {api:anychart.core.StateSettings#risingStroke}risingStroke(){api} 

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the following sample, there is a Waterfall chart with appearance settings configured:

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

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of labels, combine the {api:anychart.charts.Waterfall#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips, do the same with the {api:anychart.charts.Waterfall#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods. It is also possible to change the titles of tooltips: use {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api}.

Besides tokens that work with all chart types, there are two tokens that are specific to the Waterfall: `{%diff}` and `{%absolute}`. The first one returns the difference between points and the second one returns the absolute value of a point.

Also, you can add a custom field to your data and use a custom token corresponding to it.

By default, labels show the difference, and in the following sample the `{%absolute}` token is used to show absolute values. The text of tooltips, including their titles, is modified too, and a custom token is used:

```
// create data   
var data = [
    {x: "Start", value:  23, custom_field: "info 1"},
    {x: "Jan",   value:  22, custom_field: "info 2"},
    {x: "Feb",   value: -46, custom_field: "info 3"},
    {x: "Mar",   value: -91, custom_field: "info 4"},
    {x: "Apr",   value:  37, custom_field: "info 5"},
    {x: "May",   value: -21, custom_field: "info 6"},
    {x: "Jun",   value:  53, custom_field: "info 7"},
    {x: "Jul",   value:  31, custom_field: "info 8"},
    {x: "Aug",   value: -15, custom_field: "info 9"},
    {x: "Sep",   value:  42, custom_field: "info 10"},
    {x: "Oct",   value:  53, custom_field: "info 11"},
    {x: "Nov",   value: -15, custom_field: "info 12"},
    {x: "Dec",   value:  51, custom_field: "info 13"},
    {x: "End", isTotal: true, custom_field: "info 14"}
];

// create a waterfall chart
var chart = anychart.waterfall();

// create a series and set the data
var series = chart.waterfall(data);

// configure labels
chart.labels().format("{%absolute}");

// configure tooltips
chart.tooltip().titleFormat("Absolute | Difference");
chart.tooltip().format("{%absolute}\n{%diff}\n\n{%custom_field}");
```

{sample}BCT\_Waterfall\_Chart\_06{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields (in addition to the default ones):

* `diff`
* `absolute`
* `isTotal`

The *isTotal* field allows to find out whether a column indicates a total value or not.

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

In the sample below all labels show absolute values, and the labels of columns indicating total values are colored. The tooltips of columns indicating total values are modified too, and a custom field is used:

```
// create data   
var data = [
    {x: "Start", value:  23, custom_field: "info 1"},
    {x: "Jan",   value:  22, custom_field: "info 2"},
    {x: "Feb",   value: -46, custom_field: "info 3"},
    {x: "Mar",   value: -91, custom_field: "info 4"},
    {x: "Apr",   value:  37, custom_field: "info 5"},
    {x: "May",   value: -21, custom_field: "info 6"},
    {x: "Jun",   value:  53, custom_field: "info 7"},
    {x: "Jul",   value:  31, custom_field: "info 8"},
    {x: "Aug",   value: -15, custom_field: "info 9"},
    {x: "Sep",   value:  42, custom_field: "info 10"},
    {x: "Oct",   value:  53, custom_field: "info 11"},
    {x: "Nov",   value: -15, custom_field: "info 12"},
    {x: "Dec",   value:  51, custom_field: "info 13"},
    {x: "End", isTotal: true, custom_field: "info 14"}
];

// create a waterfall chart
var chart = anychart.waterfall();

// create a series and set the data
var series = chart.waterfall(data);

// enable HTML for labels
chart.labels().useHtml(true);

// configure labels
chart.labels().format(function() {
    if (this.isTotal)
        return "<span style='color:#dd2c00;font-weight:bold'>" +
               this.absolute + "</span>";
    return this.absolute;
});

// configure tooltips
chart.tooltip().titleFormat(function() {
    if (this.isTotal)
        return "TOTAL (" + this.getData("custom_field") + ")";
    return this.x + " (" + this.getData("custom_field") + ")";
});
```

{sample}BCT\_Waterfall\_Chart\_07{sample}

### Legend

The default legend of the Waterfall chart shows increasing, decreasing, and total columns. If you work with a multiple-series chart and want to show series instead, change the [source of legend items](../Common_Settings/Legend/Basic_Settings#source) by combining the {api:anychart.charts.Waterfall#legend}legend(){api} method with {api:anychart.core.ui.Legend#itemsSourceMode}itemsSourceMode(){api} and use `"default"` as a parameter:

```
// add hatch fills
series1.hatchFill("percent05", "white", 1, 9);
series1.fallingHatchFill("percent05", "white", 1, 9);
series1.risingHatchFill("percent05", "white", 1, 9);

series2.hatchFill("dashed-backward-diagonal", "white", 1, 9);
series2.fallingHatchFill("dashed-backward-diagonal", "white", 1, 9);
series2.risingHatchFill("dashed-backward-diagonal", "white", 1, 9);

series3.hatchFill("forward-diagonal", "white", 1, 6);
series3.fallingHatchFill("forward-diagonal", "white", 1, 6);
series3.risingHatchFill("forward-diagonal", "white", 1, 6);

// configure the legend
chart.legend().itemsSourceMode("default");
```

{sample}BCT\_Waterfall\_Chart\_08{sample}