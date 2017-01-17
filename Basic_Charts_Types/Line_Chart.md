{:index 1}
#Line Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [Visual Settings](#visual_settings)
* [Special Settings](#special_settings)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
  * [Vertical Line](#vertical_line)

## Overview

(???) A line chart ... This chart type...

In the [General Settings](General_Settings) article, you can find an overview of general settings that are available for all chart types in AnyChart, including the Line chart. In addition, line charts can be multi-series and [vertical](Vertical_Charts/Overview).

There are two modifications of the Line chart: [Spline](Spline_Chart) and [Step Line](Step_Line_Chart).

The article explains how to create a basic line chart and configure its visual settings as well as the settings that are specific to this type.

## Basic Settings

To create a line chart, use the {api:anychart#line}anychart.line(){api} chart constructor. If you pass the data to this chart constructor, it creates a line series.

To create a line series explicitly, call the {api:anychart.charts.Cartesian#line}line(){api} method.

The following sample demonstrates how a basic line chart is created:

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

{sample}BCT\_LineChart\_01{sample}

## Visual Settings

Here is a full list of methods used to configure visual settings that are available for the Line series:

* {api:anychart.core.cartesian.series.line#color}color(){api} and {api:anychart.core.cartesian.series.line#stroke}stroke(){api} set the color and stroke
* {api:anychart.core.cartesian.series.line#hoverStroke}hoverStroke(){api} configures the stroke on hover
* {api:anychart.core.cartesian.series.line#selectStroke}selectStroke(){api} configures the stroke on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there are two line series with some of the visual settings configured:

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

{sample}BCT\_LineChart\_02{sample}

## Special Settings

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

Here is the information about creating vertical line series:

* [Vertical Line](Vertical_Charts/Vertical_Line_Chart)
* [Vertical Spline](Vertical_Charts/Vertical_Spline_Chart)
* [Vertical Step Line](Vertical_Charts/Vertical_Step_Line_Chart)