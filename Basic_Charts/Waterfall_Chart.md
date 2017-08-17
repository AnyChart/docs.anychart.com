{:index 7.5}
#Waterfall Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Data](#data)
  * [Multiple Series](#multiple_series)
  * [Appearance](#appearance)
  * [Connectors](#connectors)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
  * [Legend](#legend)

## Overview

[A waterfall chart is a form of data visualization that helps in understanding the cumulative effect of sequentially introduced positive or negative values. The waterfall chart is also known as a flying bricks chart or Mario chart due to the apparent suspension of columns (bricks) in mid-air.]

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Waterfall}anychart.charts.Waterfall{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, isTotal](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>???</td></tr>
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
<tr><td></td><td>[Column](Column_Chart), [Range Column](Range_Column_Chart), [Stacked](Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/waterfall-chart/" target="_blank">Chartopedia: Waterfall Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Waterfall chart, use the {api:anychart#waterfall}anychart.waterfall(){api} chart constructor. If you pass the data to this chart constructor, it creates a Waterfall series.

To create a Waterfall series explicitly, call the {api:anychart.charts.Waterfall#waterfall}waterfall(){api} method.

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

* **x **to set words
* **value** to set frequencies
* **isTotal** to set...

isTotal: optional, boolean

[Если есть value, то по дефолту isTotal считается false
Если isTotal = true - рисуется Column
Если isTotal = false - рисуется RangeColumn
Если value нет, то по дефолту isTotal считается true
Если isTotal = true - рисуется Column
Если isTotal = false - рисуется Missing]

[value - в зависимости от chart.dataMode ожидается либо абсолютное значение, либо значение относительно предыдущего.]

data mode: {api:anychart.charts.Waterfall#dataMode}dataMode(){api}

diff data mode (default):

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

// set the data mode
chart.dataMode("diff");
```

{sample}BCT\_Waterfall\_Chart\_02{sample}

absolute data mode:

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

// set the data mode
chart.dataMode("absolute");
```

{sample}BCT\_Waterfall\_Chart\_03{sample}


### Multiple Series

```
// create a data set
var data = anychart.data.set([
    ["Start", 23,  30,  21],
    ["Jan",   22,  19,  54],
    ["Feb",  -46,  45, -32],
    ["Mar",  -91, -30,  -28],
    ["Apr",   37, -27,  36],
    ["May",  -21,  62, -48],
    ["Jun",   55,  40, -29],
    ["Jul",   31,  33,  41],
    ["Aug",  -25, -46,  36],
    ["Sep",   42,  21,  22],
    ["Oct",   67, -44, -40],
    ["Nov",  -15, -31,  17],
    ["Dec",   51,  28,  25],
    ["End", {isTotal: true}, {isTotal: true}, {isTotal: true}],
]);

// map the data
var seriesData_1 = data.mapAs({x: [0], value: [1]});
var seriesData_2 = data.mapAs({x: [0], value: [2]});
var seriesData_3 = data.mapAs({x: [0], value: [3]});

// create a waterfall chart
chart = anychart.waterfall();

// create the first series and set the data
var series1 = chart.waterfall(seriesData_1);

// create the second series and set the data
var series2 = chart.waterfall(seriesData_2);

// create the third series and set the data
var series3 = chart.waterfall(seriesData_3);
```

{sample}BCT\_Waterfall\_Chart\_04{sample}

### Appearance

You can set the stroke, fill, and hatch fill of falling and rising elements. Use the following methods:

* {api:anychart.core.waterfall.series.Waterfall#fallingFill}fallingFill(){api}, {api:anychart.core.waterfall.series.Waterfall#fallingHatchFill}fallingHatchFill(){api}, {api:anychart.core.waterfall.series.Waterfall#fallingStroke}fallingStroke(){api}
* {api:anychart.core.waterfall.series.Waterfall#risingFill}risingFill(){api}, {api:anychart.core.waterfall.series.Waterfall#risingHatchFill}risingHatchFill(){api}, {api:anychart.core.waterfall.series.Waterfall#risingStroke}risingStroke(){api}

To configure these settings on hover, use:

* {api:anychart.core.waterfall.series.Waterfall#hoverFallingFill}hoverFallingFill(){api}, {api:anychart.core.waterfall.series.Waterfall#hoverFallingHatchFill}hoverFallingHatchFill(){api}, {api:anychart.core.waterfall.series.Waterfall#hoverFallingStroke}hoverFallingStroke(){api}
* {api:anychart.core.waterfall.series.Waterfall#hoverRisingFill}hoverRisingFill(){api}, {api:anychart.core.waterfall.series.Waterfall#risingHatchFill}hoverRisingHatchFill(){api}, {api:anychart.core.waterfall.series.Waterfall#hoverRisingStroke}hoverRisingStroke(){api}

To configure these settings on select, use:

* {api:anychart.core.waterfall.series.Waterfall#selectFallingFill}selectFallingFill(){api}, {api:anychart.core.waterfall.series.Waterfall#selectFallingHatchFill}selectFallingHatchFill(){api}, {api:anychart.core.waterfall.series.Waterfall#selectFallingStroke}selectFallingStroke(){api}
* {api:anychart.core.waterfall.series.Waterfall#selectRisingFill}selectRisingFill(){api}, {api:anychart.core.waterfall.series.Waterfall#selectRisingHatchFill}selectRisingHatchFill(){api}, {api:anychart.core.waterfall.series.Waterfall#selectRisingStroke}selectRisingStroke(){api}

You can also set fill, hatch fill, and stroke of...

* {api:anychart.core.waterfall.series.Waterfall#fill}fill(){api}, {api:anychart.core.waterfall.series.Waterfall#hatchFill}hatchFill(){api}, {api:anychart.core.waterfall.series.Waterfall#stroke}stroke(){api} set the fill, hatch fill, and stroke
* {api:anychart.core.waterfall.series.Waterfall#hoverFill}hoverFill(){api}, {api:anychart.core.waterfall.series.Waterfall#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.waterfall.series.Waterfall#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.waterfall.series.Waterfall#selectFill}selectFill(){api}, {api:anychart.core.waterfall.series.Waterfall#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.waterfall.series.Waterfall#selectStroke}selectStroke(){api} configure the visual settings on select

Learn more: [Appearance Settings](../Appearance_Settings) section.

```
// configure the visual settings
series.fill("#ff6666", 0.3);
series.hatchFill("forwardDiagonal", "#ff6666", 0.5, 10);
series.stroke("#ff6666");
series.hoverFill("#ff6666", 0.1);
series.hoverStroke("#ff6666", 2);
series.selectFill("#ff6666", 0.5);
series.selectStroke("#ff6666", 4);

series.risingFill("#0066cc", 0.3);
series.risingStroke("#0066cc");
series.hoverRisingFill("#0066cc", 0.1);
series.hoverRisingStroke("#0066cc", 2);
series.selectRisingFill("#0066cc", 0.5);
series.selectRisingStroke("#0066cc", 4);

series.fallingFill("#00cc99", 0.3);
series.fallingStroke("#00cc99", 1, "10 5", "round");
series.hoverFallingFill("#00cc99", 0.1);
series.hoverFallingStroke("#00cc99", 2, "10 5", "round");
series.selectFallingFill("#00cc99", 0.5);
series.selectFallingStroke("#00cc99", 4, "10 5", "round");
```

{sample}BCT\_Waterfall\_Chart\_05{sample}

### Connectors

{api:anychart.charts.Waterfall#connectorStroke}connectorStroke(){api} 

```
// configure connectors
chart.connectorStroke("#ff6666", 2, "2 2", "round");
```

{sample}BCT\_Waterfall\_Chart\_06{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

[В контексты форматтеров, помимо обычных данных для stacked column серии приходят поля 'diff', 'absolute' и 'isTotal'. Они приходят как поля и как токены (кроме isTotal - он не токен), их так же можно спросить через this.getMeta() (но не через this.getData())]

* [tokens](../Common_Settings/Text_Formatters#string_tokens)

* {api:anychart.charts.Waterfall#labels}labels(){api} (???)
* {api:anychart.core.ui.LabelsFactory#format}format(){api}

```
// configure labels
chart.labels().format("{%Absolute}");
```

{sample}BCT\_Waterfall\_Chart\_07{sample}

```

```

{sample}BCT\_Waterfall\_Chart\_08{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

* [tokens](../Common_Settings/Text_Formatters#string_tokens)

* {api:anychart.charts.Waterfall#tooltip}tooltip(){api}
* {api:anychart.core.ui.LabelsFactory#format}format(){api}
* {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api}

```
// configure tooltips
chart.tooltip().titleFormat("{%Absolute} | {%Diff}");
```
{sample}BCT\_Waterfall\_Chart\_09{sample}

```

```
{sample}BCT\_Waterfall\_Chart\_10{sample}

### Legend

* [Legend](../Common_Settings/Legend)

```

```

{sample}BCT\_Waterfall\_Chart\_11{sample}

