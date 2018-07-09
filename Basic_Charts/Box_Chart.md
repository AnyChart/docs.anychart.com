{:index 1}
# Box Chart

## Overview

A box chart is a convenient way of graphically depicting groups of numerical data through their quartiles. Box charts are useful when it is necessary to describe the values as they spread across the entire range. For example, to analyze salaries in a company, it is necessary to have more information than the sum of salaries for each salary grade. Even a measure of average salary would not be enough. 
  
Box charts allow showing the minimum and maximum with a median (a numerical value separating the higher half of a data sample, a population, or a probability distribution, from the lower half) and quartiles, which helps to make the story more complete. But still, giving only the highest, the lowest, and the medium values does not tell the full story. So it is often useful to display the data in a way that reveals more about the distribution of values.

This article explains how to create a basic Box chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Box chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Module</td><td>[Basic Cartesian](../Quick_Start/Modules#basic_cartesian_charts)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Box}anychart.core.cartesian.series.Box{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, low, q1, median, q3, high, value, outliers](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Box](Vertical/Box_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Box Chart with Error Bars](Error_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Error](Error_Chart)</td></tr>
<tr><td></td><td>[Pareto](Pareto_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Box Chart](https://www.anychart.com/chartopedia/chart-types/box-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Module

The Box chart requires adding the [Basic Cartesian](../Quick_Start/Modules#basic_cartesian_charts) module:

```
<script src="https://cdn.anychart.com/releases/8.2.1/js/anychart-cartesian.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Box chart, use the {api:anychart#box}anychart.box(){api} chart constructor. If you pass the data to this chart constructor, it creates a Box series.

To create a Box series explicitly, call the {api:anychart.charts.Cartesian#box}box(){api} method.

The following sample demonstrates how a basic Box chart is created:

```
// create data
var data = [
  {x: "1", low: 1000, q1: 1050, median: 1200, q3: 1800, high: 2000, outliers: [800, 2500, 3200]},
  {x: "2", low: 2500, q1: 3000, median: 3800, q3: 3900, high: 4000},
  {x: "3", low: 2000, q1: 2300, median: 2500, q3: 2900, high: 3000},
  {x: "4", low: 4000, q1: 5000, median: 6500, q3: 6500, high: 7000, outliers: [8930]},
  {x: "5", low: 8000, q1: 8400, median: 8500, q3: 8800, high: 9000, outliers: [6950, 3000]}
];

// create a chart
chart = anychart.box();

// create a box series and set the data
series = chart.box(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Box\_Chart\_01{sample}


## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).


## Special Settings

### Appearance

All [appearance settings](../Appearance_Settings) of a Box chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Box#normal}normal(){api}, {api:anychart.core.cartesian.series.Box#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Box#selected}selected(){api} methods.

These methods should be combined with the methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api} that are listed in the sections below. They allow you to adjust boxes, medians, outliers, stems, and whiskers.

#### Boxes

To configure boxes, use the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

In the sample below, there are two Box series with the appearance settings of their boxes configured:

```
// create the first series
series1 = chart.box(data1);

// configure the visual settings of the first series
series1.normal().fill("#00cc99", 0.3);
series1.hovered().fill("#00cc99", 0.1);
series1.selected().fill("#00cc99", 0.5);
series1.normal().stroke("#00cc99", 1, "10 5", "round");
series1.hovered().stroke("#00cc99", 2, "10 5", "round");
series1.selected().stroke("#00cc99", 4, "10 5", "round");

// create the second series
series2 = chart.box(data2);

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

{sample}BCT\_Box\_Chart\_02{sample}

#### Medians

A median is a special line across a box.

To configure the stroke of medians, use the {api:anychart.core.StateSettings#medianStroke}medianStroke(){api} method:

```
// configure medians
series.normal().medianStroke("#dd2c00", 0.5, "10 5", "round");
series.hovered().medianStroke("#dd2c00", 1, "10 5", "round");
series.selected().medianStroke("#dd2c00", 2, "10 5", "round");
```

{sample}BCT\_Box\_Chart\_03{sample}

#### Outliers

Not every box has outliers: they are optional values that belong to a category, but do not fit the range between the low and the high values.

You can adjust the appearance, type, and size of outliers by using the {api:anychart.core.StateSettings#outlierMarkers}outlierMarkers(){api} method:

```
// configure outliers
series.normal().outlierMarkers(
  {fill: "#dd2c00 0.3",
  stroke: {color: "#dd2c00", thickness: 0.5},
  size: 10,
  type: "star5"});
series.hovered().outlierMarkers(
  {fill: "#dd2c00 0.1",
  stroke: {color: "#dd2c00", thickness: 1},
  size: 10,
  type: "star5"});
series.selected().outlierMarkers(
  {fill: "#dd2c00 0.5",
  stroke: {color: "#dd2c00", thickness: 2},
  size: 10,
  type: "star5"});
```

**Note:** These settings are configured in JSON format. Learn more about using JSON with AnyChart: [Getting Data from JSON](../Working_with_Data/Data_From_JSON).

{sample}BCT\_Box\_Chart\_04{sample}

#### Stems

Stems are vertical sticks that go beyond boxes and show the difference between the low value and the first quartile and between the third quartile and the high value.

Use the {api:anychart.core.StateSettings#stemStroke}stemStroke(){api} method to configure the stroke of stems:

```
// configure stems
series.normal().stemStroke("#dd2c00", 0.5);
series.hovered().stemStroke("#dd2c00", 1);
series.selected().stemStroke("#dd2c00", 2);
```

{sample}BCT\_Box\_Chart\_05{sample}

#### Whiskers

Whiskers are horizontal line segments on the tops of stems. Call these methods to configure their width and stroke:

* {api:anychart.core.StateSettings#whiskerWidth}whiskerWidth(){api}
* {api:anychart.core.StateSettings#whiskerStroke}whiskerStroke(){api}

**Note:** By default the width is 0.

This is how it looks like:

```
// configure whiskers
series.whiskerWidth(30);
series.normal().whiskerStroke("#dd2c00", 0.5);
series.hovered().whiskerStroke("#dd2c00", 1);
series.selected().whiskerStroke("#dd2c00", 2);
```

{sample}BCT\_Box\_Chart\_06{sample}

#### Individual Points

If you use object notation to set the data, you can configure the appearance settings of each point individually - use extra data fields corresponding with the methods mentioned in the previous sections of the article:

```
// create data
var data = [
  {x: "Jan", low: 1000, q1: 1050, median: 1200, q3: 1800, high: 2000, outliers: [800, 2500, 3200]},
  {x: "Feb", low: 2500, q1: 3000, median: 3800, q3: 3900, high: 4000},
  {x: "Mar", low: 2000, q1: 2300, median: 2500, q3: 2900, high: 3000},
  {x: "Apr", low: 4000, q1: 5000, median: 6500, q3: 6900, high: 7200, outliers: [8930],
   normal:   {
               fill: "#00bfa5 0.3",
               stroke: "#00bfa5",
               medianStroke: "0.5 #00bfa5",
               stemStroke: "0.5 #00bfa5"
             },
   hovered:  {
               fill: "#00bfa5 0.1",
               stroke: "2 #00bfa5",
               medianStroke: "1 #00bfa5",
               stemStroke: "1 #00bfa5"
             },
   selected: {
               fill: "#00bfa5 0.5",
               stroke: "4 #00bfa5",
               medianStroke: "2 #00bfa5",
               stemStroke: "2 #00bfa5"
             } 
  },
  {x: "May", low: 8000, q1: 8400, median: 8500, q3: 8800, high: 9000, outliers: [6950, 3000]}
];

// create a chart
chart = anychart.box();

// create a series and set the data
series = chart.box(data);
```

{sample}BCT\_Box\_Chart\_07{sample}

### Point Size

This chart type allows you to set the size of its points. Read more in the [Point Size](../Common_Settings/Point_Size) article.

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical Box

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts](Vertical/Overview).

Here is the information about creating Vertical Box series: [Vertical Box](Vertical/Box_Chart).