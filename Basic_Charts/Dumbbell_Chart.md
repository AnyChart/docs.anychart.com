{:index 1}
# Dumbbell Chart

## Overview

A Dumbbell chart displays two values for each category - a low value and a high value - drawn as two circular dots connected by a line. Because the connecting line resembles a dumbbell, this chart type is also known as a DNA chart, a gap chart, or a connected-dot plot. Dumbbell charts are especially good at emphasizing the change or the gap between two related values, which makes them a popular choice for before/after comparisons and gap analysis.

This article explains how to create a basic Dumbbell chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Dumbbell chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) / [Base](../Quick_Start/Modules#base)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Dumbbell}anychart.core.cartesian.series.Dumbbell{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, low, high](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[Vertical Dumbbell](Vertical/Dumbbell_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[HiLo](HiLo_Chart)</td></tr>
<tr><td></td><td>[Range Bar](Range_Bar_Chart)</td></tr>
<tr><td></td><td>[Range Column](Range_Column_Chart)</td></tr>
<tr><td></td><td>[Range Area](Range_Area_Chart)</td></tr>
<tr><td></td><td>[Line](Line_Chart)</td></tr>
<tr><td></td><td>[Marker](Marker_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Dumbbell Chart](https://www.anychart.com/chartopedia/chart-types/dumbbell-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Dumbbell chart requires adding the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

Alternatively, you can use the [Base](../Quick_Start/Modules#base) module, which includes, among other things, the two modules mentioned above: 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Dumbbell chart, use the {api:anychart#dumbbell}anychart.dumbbell(){api} chart constructor. If you pass the data to this chart constructor, it creates a Dumbbell series. Each data row contains three values: `x`, `low`, and `high`.

To create a Dumbbell series explicitly, call the {api:anychart.charts.Cartesian#dumbbell}dumbbell(){api} method.

The following sample demonstrates how a basic Dumbbell chart is created:

```
// create data
var data = [
  ["Job A", 40000, 60000],
  ["Job B", 50000, 80000],
  ["Job C", 35000, 55000]
];

// create a chart
chart = anychart.dumbbell();

// create a Dumbbell series and set the data
var series = chart.dumbbell(data);

// set the chart title
chart.title("Dumbbell Chart: Basic Sample");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

The Dumbbell series is a variation of a [Line](Line_Chart) series, so you can also create a Line (or a [Bar](Bar_Chart)) chart first and then add a Dumbbell series to it:

```
// create data
var data = [
  ["Job A", 40000, 60000],
  ["Job B", 50000, 80000],
  ["Job C", 35000, 55000]
];

// create a chart
chart = anychart.line();

// create a Dumbbell series and set the data
var series = chart.dumbbell(data);
```

{sample}BCT\_Dumbbell\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Dumbbell chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

A Dumbbell point consists of a connecting line and two circular endpoint dots - one at the low value and one at the high value. These elements are styled separately.

The [appearance settings](../Appearance_Settings) of a Dumbbell chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Dumbbell#normal}normal(){api}, {api:anychart.core.cartesian.series.Dumbbell#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Dumbbell#selected}selected(){api} methods.

The connecting line is styled with the {api:anychart.core.StateSettings#stroke}stroke(){api} method. The endpoint dots are styled with the {api:anychart.core.StateSettings#highFill}highFill(){api} and {api:anychart.core.StateSettings#highStroke}highStroke(){api} methods (for the high dot) and the {api:anychart.core.StateSettings#lowFill}lowFill(){api} and {api:anychart.core.StateSettings#lowStroke}lowStroke(){api} methods (for the low dot). Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there are two Dumbbell series with appearance settings configured:

```
// create the first series
var series1 = chart.dumbbell(seriesData_1);

// configure the visual settings of the first series
series1.normal().stroke("#00cc99", 1);
series1.normal().lowFill("#00cc99");
series1.normal().highFill("#004d38");
series1.hovered().stroke("#00cc99", 2);
series1.selected().stroke("#00cc99", 4);

// create the second series
var series2 = chart.dumbbell(seriesData_2);

// configure the visual settings of the second series
series2.normal().stroke("#0066cc", 1);
series2.normal().lowFill("#0066cc");
series2.normal().highFill("#003366");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_Dumbbell\_Chart\_02{sample}

#### Individual Points

If you use object notation to set the data, you can change the appearance (and some other settings) of individual points by adding special fields to your data:

```
// create data
var data = [
  {x: "Job A", low: 40000, high: 60000},
  {x: "Job B", low: 50000, high: 80000,
   normal:   {lowFill: "#5cd65c", highFill: "#2eb82e", stroke: "2 #5cd65c"},
   hovered:  {lowFill: "#5cd65c", highFill: "#2eb82e", stroke: "3 #5cd65c"},
   selected: {lowFill: "#5cd65c", highFill: "#2eb82e", stroke: "3 #5cd65c"}
  },
  {x: "Job C", low: 35000, high: 55000}
];

// create a chart
chart = anychart.line();

// create a Dumbbell series and set the data
var series = chart.dumbbell(data);
```

{sample}BCT\_Dumbbell\_Chart\_03{sample}

### Endpoint Size

The circular endpoint dots of a Dumbbell series are configured through markers. Use the {api:anychart.core.cartesian.series.Dumbbell#markers}markers(){api} method to access them and the {api:anychart.core.ui.MarkersFactory#size}size(){api} method to set the radius of the dots (the default value is 5 px):

```
// create a Dumbbell series and set the data
var series = chart.dumbbell(data);

// set the size of the endpoint dots
series.markers().size(8);
```

{sample}BCT\_Dumbbell\_Chart\_04{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

```
// enable and format the data labels (shows the high value)
series.labels().enabled(true);
series.labels().format("{%high}");
```

{sample}BCT\_Dumbbell\_Chart\_05{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

### Vertical Dumbbell

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts (Overview)](Vertical/Overview).

Here is information about creating Vertical Dumbbell series:

* [Vertical Dumbbell](Vertical/Dumbbell_Chart)
