{:index 1}
#Line Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [General Settings](#general_settings)
* [Special Settings](#special_settings)
  * [Appearance](#appearance)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
  * [Vertical Line](#vertical_line)

## Overview

A line chart is a chart that shows information as a series of data points connected by straight line segments.

The line chart is very common in many fields. As a rule, it is used to emphasize trends in data over equal time intervals, such as months, quarters, fiscal years, and so on.

This article explains how to create a basic Line chart as well as configure  settings that are specific to the type.

In AnyChart, the Line chart can be:

* multi-series
* [vertical](Vertical_Charts/Overview)

It has two modifications:

* [Spline](Spline_Chart)
* [Step Line](Step_Line_Chart).

See also:

* [General Settings](General_Settings) (settings that affect all chart types)
* {api:anychart.core.cartesian.series.Line}AnyChart API{api} (a full list of methods available for the Line series).

## Quick Start

To create a Line chart, use the {api:anychart#line}anychart.line(){api} chart constructor. If you pass the data to this chart constructor, it creates a line series.

To create a Line series explicitly, call the {api:anychart.charts.Cartesian#line}line(){api} method.

The following sample demonstrates how a basic Line chart is created:

```
// create a data set
var data = anychart.data.set([
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
]);

// create a chart
var chart = anychart.line();

// create a line series and set the data
var series = chart.line(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Line\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Line chart (for example, legend and interactivity settings).

Here is an overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

Here is a full list of methods used to configure visual settings that are available for the Line series:

* {api:anychart.core.cartesian.series.Line#color}color(){api} and {api:anychart.core.cartesian.series.Line#stroke}stroke(){api} set the color and stroke
* {api:anychart.core.cartesian.series.Line#hoverStroke}hoverStroke(){api} configures the stroke on hover
* {api:anychart.core.cartesian.series.Line#selectStroke}selectStroke(){api} configures the stroke on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there are two Line series with some of the appearance settings configured:

```
// create the first series
var series1 = chart.line(seriesData_1);

// configure the visual settings of the first series
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.line(seriesData_2);

// configure the visual settings of the second series
series2.stroke("#0066cc");
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```

{sample}BCT\_Line\_Chart\_02{sample}

### Labels

Labels are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

(???) отмечаю на будущее, что нужно добавить текст

To configure a label on a Line chart, you need to know the following peculiarities regarding formatting and positioning lables.... 

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

(???) отмечаю на будущее, что нужно добавить текст

In case of Line charts, there are some peculiarities in formatting the text of tooltips...

### Vertical Line

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical_Charts/Overview).

Here is the information about creating Vertical Line series:

* [Vertical Line](Vertical_Charts/Vertical_Line_Chart)
* [Vertical Spline](Vertical_Charts/Vertical_Spline_Chart)
* [Vertical Step Line](Vertical_Charts/Vertical_Step_Line_Chart)