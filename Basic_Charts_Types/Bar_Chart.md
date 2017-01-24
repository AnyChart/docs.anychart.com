{:index 1}
#Bar Chart

* [Overview](#overview)
* [Basic Settings](#basic_settings)
* [Visual Settings](#visual_settings)
* [Special Settings](#special_settings)
  * [Padding](#padding)
  * [Labels](#labels)
  * [Tooltips](#tooltips)
  * [Stacked Bar](#stacked_bar)
  * [3D Bar](#3d_bar)

## Overview

A bar chart is a chart that visualizes data as a set of rectangular bars, their lengths being proportional to the values they represent. The horizontal axis shows the values, and the vertical axis shows the categories they belong to. So, the bar chart is a [vertical](Vertical_Charts/Overview) version of the [column chart](Column_Chart). In multi-series bar charts, values are grouped by categories.

This chart type is used very widely to show comparison among categories and sometimes to visualize time-based data. Also, categories with long names may be a reason to prefer the bar chart to the column chart.

In the [General Settings](General_Settings) article, you can find an overview of general settings that are available for all chart types in AnyChart, including the Bar chart. In addition, this type can be multi-series, [stacked](Stacked_Charts/Overview), and [3D](3D_Charts/Overview).

The article explains how to create a basic bar chart and configure its visual settings as well as the settings that are specific to this type.

## Basic Settings

To create a bar chart, use the {api:anychart#bar}anychart.bar(){api} chart constructor. If you pass the data to this chart constructor, it creates a bar series.

To create a bar series explicitly, call the {api:anychart.charts.Cartesian#bar}bar(){api} method.

The following sample demonstrates how a basic bar chart is created:

```
// create a data set
var data = anychart.data.set([
  ["John", 10000],
  ["Jake", 12000],
  ["Peter", 13000],
  ["James", 10000],
  ["Mary", 9000]
]);

// create a chart
var chart = anychart.bar();

// create a bar series and set the data
var series = chart.bar(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Bar\_Chart\_01{sample}

## Visual Settings

Here is a full list of methods used to configure visual settings that are available for the Bar series:

* {api:anychart.core.cartesian.series.Bar#color}color(){api}, {api:anychart.core.cartesian.series.Bar#fill}fill(){api}, {api:anychart.core.cartesian.series.Bar#hatchFill}hatchFill(){api}, {api:anychart.core.cartesian.series.Bar#stroke}stroke(){api} set the color, fill, hatch fill, and stroke
* {api:anychart.core.cartesian.series.Bar#hoverFill}hoverFill(){api}, {api:anychart.core.cartesian.series.Bar#hoverHatchFill}hoverHatchFill(){api}, {api:anychart.core.cartesian.series.Bar#hoverStroke}hoverStroke(){api} configure the visual settings on hover
* {api:anychart.core.cartesian.series.Bar#selectFill}selectFill(){api}, {api:anychart.core.cartesian.series.Bar#selectHatchFill}selectHatchFill(){api}, {api:anychart.core.cartesian.series.Bar#selectStroke}selectStroke(){api} configure the visual settings on select

You can learn more from the [Appearance Settings](../Appearance_Settings) article.

In the sample below, there are two bar series with some of the visual settings configured:

```
// create the first series
var series1 = chart.bar(seriesData_1);

// configure the visual settings of the first series
series1.fill("#00cc99", 0.3);
series1.hoverFill("#00cc99", 0.3);
series1.selectFill("#00cc99", 0.5);
series1.stroke("#00cc99", 1, "10 5", "round");
series1.hoverStroke("#00cc99", 2, "10 5", "round");
series1.selectStroke("#00cc99", 4, "10 5", "round");

// create the second series
var series2 = chart.bar(seriesData_2);

// configure the visual settings of the second series
series2.fill("#0066cc", 0.3);
series2.hoverFill("#0066cc", 0.3);
series2.selectFill("#0066cc", 0.5);
series2.stroke("#0066cc");
series2.hoverStroke("#0066cc", 2);
series2.selectStroke("#0066cc", 4);
```

{sample}BCT\_Bar\_Chart\_02{sample}

## Special Settings

### Padding

To set the padding between bars and bar groups, use these methods:

* {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api}
* {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api}

Padding is measured as a ratio to the width of bars (the width is calculated automatically). So, if it is < 1, the space between bars or bar groups is less than the width of bars, and vice versa. If padding is set to 0, there is no space between bars/groups, and a negative parameter makes bars overlap each other.

Please note that in AnyChart single-series bar charts are, technically speaking, composed of one-element bar groups, so you should use {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api} to configure the padding between bars. In the following sample it is set to 0:

```
// create a bar series and set the data
var series = chart.bar(data);

// set the padding between bar groups
chart.barGroupsPadding(0);
```

{sample}BCT\_Bar\_Chart\_03{sample}

The {api:anychart.charts.Cartesian#barsPadding}barsPadding(){api} method works only with multi-series charts: it sets the padding between bars within a group. The space between groups is set via {api:anychart.charts.Cartesian#barGroupsPadding}barGroupsPadding(){api}.

In the sample below, there is a multi-series bar chart with the padding between bars and between bar groups set to -0.5 and 2 correspondingly:

```
// create the first series
var series1 = chart.bar(seriesData_1);

// create the second series
var series2 = chart.bar(seriesData_2);

// set the padding between bars
chart.barsPadding(-0.5);

// set the padding between bar groups
chart.barGroupsPadding(2);
```

{sample}BCT\_Bar\_Chart\_04{sample}

### Labels

Labels are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

(???) отмечаю на будущее, что нужно добавить текст

To configure a label on a Bar chart, you need to know the following peculiarities regarding formatting and positioning lables.... 

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

(???) отмечаю на будущее, что нужно добавить текст

In case of Bar charts, there are some peculiarities in formatting the text of tooltips...

### Stacked Bar

Stacked and percent stacked charts are multi-series charts where related values are placed atop one another, which allows comparing the the contribution of a value to a total, either in absolute or percentage terms. 

In AnyChart, you can enable a special mode of the scale to make series stack together: see [Stacked Charts (Overview)](Stacked_Charts/Overview).

To learn about the stacked versions of the Bar chart, see:

* [Stacked Bar](Stacked_Charts/Stacked_Bar_Chart)
* [Percent Stacked Bar](Stacked_Charts/Persent_Stacked_Bar_Chart)

### 3D Bar

Using AnyChart, you can create 3D versions of some chart types, including the Bar chart.

To learn about 3D charts in general, see [3D Charts (Overview)](3D_Charts/Overview).

The 3D bar chart is described in the following article: [3D Bar Chart](3D_Charts/3D_Bar_Chart).