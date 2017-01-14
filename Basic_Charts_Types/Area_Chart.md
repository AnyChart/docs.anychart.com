{:index 1}
#Area Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [Visual Settings](#visual_settings)
* [Special Settings](#special_settings)

## Overview

An area chart shows data arranged in columns or rows. This chart type emphasizes the magnitude of change over time and can be used to highlight the total value across a trend. For example, an area chart displaying profit over time can emphasize the total profit.

In the [General Settings](General_Settings) article, you can find an overview of general settings that are available for all chart types in AnyChart, including the Area chart. In addition, area charts can be multi-series, [vertical](Vertical_Charts/Overview), [3D](3D_Charts/Overview), and [stacked](Stacked_Charts/Overview).

(!!!) Есть две вариации area: spline area и step area (+ссылки)

The article explains how to create a basic area chart and configure its visual settings as well as the settings... специфичные для этого типа. (!!!) 

## Basic Settings

To create an area chart, use the {api:anychart#area}anychart.area(){api} chart constructor. If you pass the data to this chart constructor, it creates an area series.

To create an area series explicitly, call the {api:anychart.charts.Cartesian#area}area(){api} method.

The following sample demonstrates how a basic area chart is created:

```
// create a data set
var data = anychart.data.set([
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
]);

// create a chart (!!!)
var chart = anychart.area();

// create an area series and set the data
series = chart.area(data); (!!!)

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_AreaChart\_01{sample}

## Visual Settings

Here is a full list of methods used to configure visual settings that are available for the Area series:

* {api:anychart.core.cartesian.series.Area#color}color(){api}, {api:anychart.core.cartesian.series.Area#fill}fill(){api}, {api:anychart.core.cartesian.series.Area#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Area#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Area#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Area#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Area#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.cartesian.series.Area#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Area#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Area#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there are two area series with some of the visual settings configured:

```
// create the first series
var series1 = chart.area(seriesData_1);

// configure the visual settings of the first series
series1.fill("#00cc99", 0.3);
series1.hoverFill("#00cc99", 0.3);
series1.selectFill("#00cc99", 0.5);
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.area(seriesData_2);

// configure the visual settings of the second series
series2.fill("#0066cc", 0.3);
series2.hoverFill("#0066cc", 0.3);
series2.selectFill("#0066cc", 0.5);
series2.stroke("#0066cc");
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```

{sample}BCT\_AreaChart\_02{sample}

## Special Settings

Labels

Что такое label?
Особенности форматирования (foramtting):
Особенности позиционирования (positioning):

Tooltips

Что такое tooltip?
Особенности форматирования: 


Stacked Area
Vertical Area
3D Area

{sample}BCT\_AreaChart\_03{sample} (!!!) удалить пример