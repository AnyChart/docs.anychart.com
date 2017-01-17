{:index 1}
#Area Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [Visual Settings](#visual_settings)
* [Special Settings](#special_settings)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
  * [Stacked Area](#stacked_area)
  * [Vertical Area](#vertical_area)
  * [3D Area](#3d_area)

## Overview

An area chart is a chart type based on the line chart: it also shows information as a series of data points connected by straight line segments, but the area between the X-axis and the line segments is filled with a color or a pattern.

This chart type emphasizes the magnitude of change over time and can be used to highlight the total value across a trend. For example, an area chart displaying profit over time can emphasize the total profit.

In the [General Settings](General_Settings) article, you can find an overview of general settings that are available for all chart types in AnyChart, including the Area chart. In addition, area charts can be multi-series, [vertical](Vertical_Charts/Overview), [3D](3D_Charts/Overview), and [stacked](Stacked_Charts/Overview).

There are two modifications of the Area chart: [Spline Area](Spline_Area_Chart) and [Step Area](Step_Area_Chart).

The article explains how to create a basic area chart and configure its visual settings as well as the settings that are specific to this type.

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

// create a chart
var chart = anychart.area();

// create an area series and set the data
var series = chart.area(data);

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

### Labels

Labels are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

(???) отмечаю на будущее, что нужно добавить текст

To configure a label on an Area chart, you need to know the following peculiarities regarding formatting and positioning lables.... 

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

(???) отмечаю на будущее, что нужно добавить текст

In case of Area charts, there are some peculiarities in formatting the text of tooltips...

### Stacked Area

Stacked and percent stacked charts are multi-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms. 

In AnyChart, you can enable a special mode of the scale to make series stack together: see [Stacked Charts (Overview)](Stacked_Charts/Overview).

To learn about the stacked versions of the Area chart and its modifications, see:

* [Stacked Area](Stacked_Charts/Stacked_Area_Chart)
* [Percent Stacked Area](Stacked_Charts/Persent_Stacked_Area_Chart)
* [Stacked Spline Area](Stacked_Charts/Stacked_Spline_Area_Chart)
* [Percent Stacked Spline Area](Stacked_Charts/Persent_Stacked_Spline_Area_Chart)
* [Stacked Step Area](Stacked_Charts/Stacked_Step_Area_Chart)
* [Percent Stacked Step Area](Stacked_Charts/Persent_Stacked_Area_Chart)

### Vertical Area

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical_Charts/Overview).

Here is the information about creating vertical area series:

* [Vertical Area](Vertical_Charts/Vertical_Area_Chart)
* [Vertical Spline Area](Vertical_Charts/Vertical_Spline_Area_Chart)
* [Vertical Step Area](Vertical_Charts/Vertical_Step_Area_Chart)

### 3D Area

Using AnyChart, you can create 3D versions of some chart types, including the Area chart.

To learn about 3D charts in general, see [3D Charts (Overview)](3D_Charts/Overview).

3D area charts are described in the following articles:

* [3D Area](3D_Charts/3D_Area_Chart)
* [3D Spline Area](3D_Charts/3D_Spline_Area_Chart)
* [3D Step Area](3D_Charts/3D_Step_Area_Chart)