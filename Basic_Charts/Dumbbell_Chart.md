{:index 1}
# Dumbbell Chart

## Overview

A Dumbbell chart shows two values for each category: a low value and a high value. Each pair is drawn as two dots joined by a line. The whole shape looks like a dumbbell. So this chart type is also called a DNA chart, a gap chart, or a connected-dot plot. Dumbbell charts clearly show the change between two values. This makes them a popular choice for before/after comparisons. They also work well for showing gaps between values.

This article shows how to create a basic Dumbbell chart. It also shows how to set options that are special to this type. The table below gives you a short overview of the Dumbbell chart's features:

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

The Dumbbell chart needs the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

You can also use the [Base](../Quick_Start/Modules#base) module. It includes the two modules above and some others: 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Dumbbell chart, use the {api:anychart#dumbbell}anychart.dumbbell(){api} chart constructor. If you pass data to it, it creates a Dumbbell series too. Each point has three fields. `x` is the category, `low` is the lower value, and `high` is the upper value. Set them as an object `{x: ..., low: ..., high: ...}` or as an array `[x, low, high]`.

To add a Dumbbell series to a chart, call the {api:anychart.charts.Cartesian#dumbbell}dumbbell(){api} method.

The sample below shows how to create a basic Dumbbell chart:

```
// create data
var data = [
  {x: "Job A", low: 40000, high: 60000},
  {x: "Job B", low: 50000, high: 80000},
  {x: "Job C", low: 35000, high: 55000}
];

// create a chart
var chart = anychart.dumbbell();

// create a dumbbell series and set the data
var series = chart.dumbbell(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Dumbbell\_Chart\_01{sample}

You can also start from a [Line](Line_Chart) or [Column](Column_Chart) chart and add a Dumbbell series to it. Only the constructor is different:

```
// create a line chart, then add a dumbbell series
var chart = anychart.line();
var series = chart.dumbbell(data);
```

A Dumbbell point has two values, low and high. The tooltip shows both by default. You can change how it looks (see [Tooltips](#tooltips)).

## General Settings

In AnyChart, many settings work the same way for all chart types, including the Dumbbell chart. Legend and interactivity settings are two examples.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

#### All Points

A Dumbbell point has a connecting line and two round dots. One dot sits at the low value and one at the high value. You can style each part on its own. The line does not show which value comes first. So for before/after comparisons, give the low and high dots different colors. This shows the direction of the change.

You can set the [appearance settings](../Appearance_Settings) of a Dumbbell chart in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Dumbbell#normal}normal(){api}, {api:anychart.core.cartesian.series.Dumbbell#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Dumbbell#selected}selected(){api} methods. A point shows the **hover** state when you point at it. It shows the **selected** state when you click it.

Combine them with these methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the connecting line
* {api:anychart.core.StateSettings#highFill}highFill(){api} and {api:anychart.core.StateSettings#highStroke}highStroke(){api} to set the fill and stroke of the high dot
* {api:anychart.core.StateSettings#lowFill}lowFill(){api} and {api:anychart.core.StateSettings#lowStroke}lowStroke(){api} to set the fill and stroke of the low dot

You can also use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

If you do not set the colors yourself, they come from the chart [palette](../Appearance_Settings/Palettes). Each series gets one base color for its connecting line and both dots. Settings like highFill() or lowFill() override the palette colors.

The sample below has two Dumbbell series with appearance settings:

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

// create the first dumbbell series and set the data
var series1 = chart.dumbbell(seriesData_1);
// configure the appearance of the first series
series1.normal().stroke("#00cc99", 1);
series1.normal().lowFill("#99e6d4");
series1.normal().highFill("#00cc99");
series1.hovered().stroke("#00cc99", 2);
series1.selected().stroke("#00cc99", 4);

// create the second dumbbell series and set the data
var series2 = chart.dumbbell(seriesData_2);
// configure the appearance of the second series
series2.normal().stroke("#0066cc", 1);
series2.normal().lowFill("#99c2eb");
series2.normal().highFill("#0066cc");
series2.hovered().stroke("#0066cc", 2);
series2.selected().stroke("#0066cc", 4);
```

{sample}BCT\_Dumbbell\_Chart\_02{sample}

The sample below shows a real before/after case: salaries before and after an annual review. Here every new salary is higher than the old one. So the old salary goes to `low`, and the new salary goes to `high`. The gray dot marks the old value, and the green dot marks the new value. Every line reads from gray to green, so the direction of the change is visible at once.

```
// create data: old salary as low, new salary as high
var data = [
  {x: "Anna", low: 52000, high: 58000},
  {x: "Ben", low: 48000, high: 50000},
  {x: "Carol", low: 61000, high: 70000},
  {x: "Dan", low: 55000, high: 59000},
  {x: "Eva", low: 44000, high: 51000}
];

// create a chart
var chart = anychart.dumbbell();

// create a dumbbell series and set the data
var series = chart.dumbbell(data);

// gray = old salary, green = new salary
series.normal().lowFill("#b3b3b3");
series.normal().lowStroke("#b3b3b3");
series.normal().highFill("#00cc99");
series.normal().highStroke("#00cc99");
series.normal().stroke("#b3b3b3", 2);

// name both values in the tooltip
series.tooltip().format("Before: {%low}, After: {%high}");
```

{sample}BCT\_Dumbbell\_Chart\_08{sample}

#### Individual Points

If you use objects to set the data, you can change the look of individual points. Just add special fields to your data:

```
// create data with individual point settings
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

// create a line chart
var chart = anychart.line();

// create a dumbbell series and set the data
var series = chart.dumbbell(data);
```

In the sample below, the second point carries its own dot colors and connecting line, set through the `normal`, `hovered`, and `selected` fields of its data object.

{sample}BCT\_Dumbbell\_Chart\_03{sample}

If you use an array to set the data, you can also style individual points. The steps are a little different. First add the extra values to the data set. Then map the columns so the series can read them:

```
// create a data set with custom dot colors for one point
var dataSet = anychart.data.set([
  ["Job A", 40000, 60000],
  ["Job B", 50000, 80000, "#5cd65c", "#2eb82e"],
  ["Job C", 35000, 55000]
]);

// map the columns
var mapping = dataSet.mapAs({x: 0, low: 1, high: 2, lowFill: 3, highFill: 4});

// create a chart
var chart = anychart.dumbbell();

// create a dumbbell series and set the mapped data
var series = chart.dumbbell(mapping);
```

In the sample below, the second row of the data set carries two extra values, and the mapping turns them into the low and high dot colors of that point.

{sample}BCT\_Dumbbell\_Chart\_04{sample}

### Endpoint Size

The round dots of a Dumbbell series are drawn as markers. Use the {api:anychart.core.cartesian.series.Dumbbell#markers}markers(){api} method to work with them. Use the {api:anychart.core.ui.MarkersFactory#size}size(){api} method to set the radius of the dots (the default value is 5 px). The size applies to **both** dots the same way. The fill, stroke, and hatch fill can differ between the low and high dots (`lowFill`/`highFill`, `lowStroke`/`highStroke`, `lowHatchFill`/`highHatchFill`).

```
// create a dumbbell series and set the data
var series = chart.dumbbell(data);

// enlarge the endpoint dots
series.markers().size(8);
```

In the sample below, the dots of every point are drawn at size 8 instead of the default.

{sample}BCT\_Dumbbell\_Chart\_05{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements. You can place them anywhere on any chart. Enable them on a whole series or on a single point. For text labels, you can use font settings and [text formatters](../Common_Settings/Text_Formatters).

A Dumbbell point has two values. So set a format that shows both:

```
// enable and format the series labels
series.labels().enabled(true);
series.labels().format("{%low} - {%high}");
```

To adjust where labels sit, use the {api:anychart.core.ui.LabelsFactory#position}position(){api}, {api:anychart.core.ui.LabelsFactory#anchor}anchor(){api}, {api:anychart.core.ui.LabelsFactory#offsetX}offsetX(){api}, and {api:anychart.core.ui.LabelsFactory#offsetY}offsetY(){api} methods.

In the sample below, every point carries a label with its low and high values.

{sample}BCT\_Dumbbell\_Chart\_06{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box that appears when you hover over a point. It has many visual and other settings. For example, you can edit the text with font settings and [text formatters](../Common_Settings/Text_Formatters). You can also change the background style and move the tooltip.

A Dumbbell point has two values. The tooltip shows both by default. To change the format, set your own:

```
// show both endpoint values in the tooltip
series.tooltip().format("High: {%high}, Low: {%low}");
```

In the sample below, the tooltip of every point names the high value first and the low value second.

{sample}BCT\_Dumbbell\_Chart\_07{sample}

### Vertical Dumbbell

Most series types in AnyChart can be drawn in two ways: horizontal and vertical. See [Vertical Charts](Vertical/Overview).

Learn how to create Vertical Dumbbell series:

* [Vertical Dumbbell](Vertical/Dumbbell_Chart)
