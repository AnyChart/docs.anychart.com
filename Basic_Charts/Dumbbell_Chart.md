{:index 1}
# Dumbbell Chart

## Overview

A Dumbbell chart shows two values for each category: a low value and a high value. Each pair is drawn as two dots connected by a line. The line looks like a dumbbell, so this chart type is also called a DNA chart, a gap chart, or a connected-dot plot. Dumbbell charts are good at showing the change between two values. This makes them a popular choice for before/after comparisons and for showing gaps between values.

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

To create a Dumbbell chart, use the {api:anychart#dumbbell}anychart.dumbbell(){api} chart constructor. If you pass data to this constructor, it creates a Dumbbell series too. Each point has three values: `x` is the category, `low` is the lower value, and `high` is the upper value. Set them as an object `{x: ..., low: ..., high: ...}` or as an array `[x, low, high]`.

To add a Dumbbell series to a chart, call the {api:anychart.charts.Cartesian#dumbbell}dumbbell(){api} method.

The following sample demonstrates how a basic Dumbbell chart is created:

```
// create data
var data = [
  {x: "Job A", low: 40000, high: 60000},
  {x: "Job B", low: 50000, high: 80000},
  {x: "Job C", low: 35000, high: 55000}
];

// create a chart
var chart = anychart.dumbbell();

// create a Dumbbell series and set the data
var series = chart.dumbbell(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Dumbbell\_Chart\_01{sample}

You can also start from a [Line](Line_Chart) or [Column](Column_Chart) chart and add a Dumbbell series to it. Only the constructor is different:

```
// create a line (or column) chart, then add a Dumbbell series
var chart = anychart.line();
var series = chart.dumbbell(data);
```

A Dumbbell point has two values, low and high. The tooltip shows both by default. You can change how it looks — see [Tooltips](#tooltips).

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Dumbbell chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

#### All Points

A Dumbbell point has a connecting line and two circular dots: one at the low value and one at the high value. Each part can be styled separately. The line does not show which value came "first", so for before/after comparisons, give the low and high dots different colors to show the direction of change.

The [appearance settings](../Appearance_Settings) of a Dumbbell chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Dumbbell#normal}normal(){api}, {api:anychart.core.cartesian.series.Dumbbell#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Dumbbell#selected}selected(){api} methods. A point is shown in the **hover** state when it is pointed at and in the **selected** state when it is clicked.

Combine them with the following methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the connecting line
* {api:anychart.core.StateSettings#highFill}highFill(){api} and {api:anychart.core.StateSettings#highStroke}highStroke(){api} to set the fill and stroke of the high dot
* {api:anychart.core.StateSettings#lowFill}lowFill(){api} and {api:anychart.core.StateSettings#lowStroke}lowStroke(){api} to set the fill and stroke of the low dot

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

If you do not set the colors explicitly, they come from the chart [palette](../Appearance_Settings/Palettes): each series gets one base color, used for its connecting line and both dots. Settings like highFill() or lowFill() override the palette colors.

In the sample below, there are two Dumbbell series with appearance settings configured:

```
// create data for two series
var seriesData_1 = [
  {x: "Job A", low: 40000, high: 60000},
  {x: "Job B", low: 50000, high: 80000},
  {x: "Job C", low: 35000, high: 55000}
];
var seriesData_2 = [
  {x: "Job A", low: 30000, high: 45000},
  {x: "Job B", low: 42000, high: 62000},
  {x: "Job C", low: 28000, high: 40000}
];

// create a chart
var chart = anychart.line();

// first series
var series1 = chart.dumbbell(seriesData_1);
series1.normal().stroke("#00cc99", 1);
series1.normal().lowFill("#99e6d4");
series1.normal().highFill("#00cc99");
series1.hovered().stroke("#00cc99", 2);
series1.selected().stroke("#00cc99", 4);

// second series
var series2 = chart.dumbbell(seriesData_2);
series2.normal().stroke("#0066cc", 1);
series2.normal().lowFill("#99c2eb");
series2.normal().highFill("#0066cc");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_Dumbbell\_Chart\_02{sample}

#### Individual Points

If you use object notation to set the data, you can change the appearance of individual points by adding special fields to your data:

```
// create data
var data = [
  {x: "Job A", low: 40000, high: 60000},
  {x: "Job B", low: 50000, high: 80000,
   normal:   {
               lowFill: "#5cd65c",
               highFill: "#2eb82e",
               stroke: "2 #5cd65c"
             },
   hovered:  {
               lowFill: "#5cd65c",
               highFill: "#2eb82e",
               stroke: "3 #5cd65c"
             },
   selected: {
               lowFill: "#5cd65c",
               highFill: "#2eb82e",
               stroke: "3 #5cd65c"
             }
  },
  {x: "Job C", low: 35000, high: 55000}
];

// create a chart
chart = anychart.line();

// create a Dumbbell series and set the data
var series = chart.dumbbell(data);
```

{sample}BCT\_Dumbbell\_Chart\_03{sample}

If you use an array to set the data, you can also configure the appearance of individual points, but in a slightly different way. First add the extra values to the data set, then map the columns so that they can be interpreted by the component:

```
// create a data set: x, low, high, and (for one point) custom dot colors
var dataSet = anychart.data.set([
  ["Job A", 40000, 60000],
  ["Job B", 50000, 80000, "#5cd65c", "#2eb82e"],
  ["Job C", 35000, 55000]
]);

// map the columns
var mapping = dataSet.mapAs({x: 0, low: 1, high: 2, lowFill: 3, highFill: 4});

// create a chart
var chart = anychart.dumbbell();

// create a Dumbbell series and set the data
var series = chart.dumbbell(mapping);
```

{sample}BCT\_Dumbbell\_Chart\_04{sample}

### Endpoint Size

The circular dots of a Dumbbell series are configured through markers. Use the {api:anychart.core.cartesian.series.Dumbbell#markers}markers(){api} method to access them and the {api:anychart.core.ui.MarkersFactory#size}size(){api} method to set the radius of the dots (the default value is 4 px). The size applies to **both** dots equally. The fill, stroke, and hatch fill (`lowFill`/`highFill`, `lowStroke`/`highStroke`, `lowHatchFill`/`highHatchFill`) can differ between the low and high dots.

```
// create a Dumbbell series and set the data
var series = chart.dumbbell(data);

// set the size of the dots
series.markers().size(8);
```

{sample}BCT\_Dumbbell\_Chart\_05{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A Dumbbell point has two values, so set a format that shows both:

```
// enable the labels and show both endpoint values
series.labels().enabled(true);
series.labels().format("{%low} - {%high}");
```

To adjust the placement of labels, use the {api:anychart.core.ui.LabelsFactory#position}position(){api}, {api:anychart.core.ui.LabelsFactory#anchor}anchor(){api}, {api:anychart.core.ui.LabelsFactory#offsetX}offsetX(){api}, and {api:anychart.core.ui.LabelsFactory#offsetY}offsetY(){api} methods.

{sample}BCT\_Dumbbell\_Chart\_06{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

A Dumbbell point has two values. The tooltip shows both by default. To change the format, set your own:

```
// show both endpoint values in the tooltip
series.tooltip().format("High: {%high}, Low: {%low}");
```

{sample}BCT\_Dumbbell\_Chart\_07{sample}

### Vertical Dumbbell

Most types of series in AnyChart can be drawn both in horizontal and vertical orientation: [Vertical Charts](Vertical/Overview).

Here is information about creating Vertical Dumbbell series:

* [Vertical Dumbbell](Vertical/Dumbbell_Chart)
