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

## General Settings

In AnyChart, many settings work the same way for all chart types, including the Dumbbell chart. Legend and interactivity settings are two examples.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

#### All Points

A Dumbbell point has a connecting line and two endpoints: one round dot at the low value and one at the high value. You can style each part on its own.

You can set the [appearance settings](../Appearance_Settings) of a Dumbbell chart in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Dumbbell#normal}normal(){api}, {api:anychart.core.cartesian.series.Dumbbell#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Dumbbell#selected}selected(){api} methods. A point shows the **hover** state when you point at it. It shows the **selected** state when you click it.

Combine them with these methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the connecting line
* {api:anychart.core.StateSettings#highFill}highFill(){api} and {api:anychart.core.StateSettings#highStroke}highStroke(){api} to set the fill and stroke of the high endpoint
* {api:anychart.core.StateSettings#lowFill}lowFill(){api} and {api:anychart.core.StateSettings#lowStroke}lowStroke(){api} to set the fill and stroke of the low endpoint

You can also use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

If you do not set the colors yourself, they come from the chart [palette](../Appearance_Settings/Palettes). Each series gets one base color for its connecting line and both endpoints. Settings like {api:anychart.core.StateSettings#highFill}highFill(){api} or {api:anychart.core.StateSettings#lowFill}lowFill(){api} override the palette colors.

The connecting line does not show which value comes first. So when the two values are a before/after pair, give the low and high endpoints different colors — the direction of the change becomes visible at once:

```
// gray = old salary, green = new salary
series.normal().lowFill("#b3b3b3");
series.normal().lowStroke("#b3b3b3");
series.normal().highFill("#00cc99");
series.normal().highStroke("#00cc99");

// set the connecting line in all three states
series.normal().stroke("#b3b3b3", 1);
series.hovered().stroke("#b3b3b3", 2);
series.selected().stroke("#b3b3b3", 4);
```

In the sample below, salaries before an annual review go to `low` and salaries after it go to `high`, so every pair reads from the gray endpoint to the green one. Hover over a point or click it to see the hovered and selected strokes:

{sample}BCT\_Dumbbell\_Chart\_02{sample}

#### Endpoint Size

The endpoints of a Dumbbell point are the two round dots at the ends of its connecting line: one at the low value and one at the high value. They are drawn as markers, and their size is their radius. Set it with {api:anychart.core.cartesian.series.Dumbbell#markers}markers(){api} and {api:anychart.core.ui.MarkersFactory#size}size(){api}; the size applies to both endpoints of a point the same way. In the hovered and selected states, the endpoints have a radius of their own, slightly larger by default: set it through {api:anychart.core.cartesian.series.Dumbbell#hovered}hovered(){api} and {api:anychart.core.cartesian.series.Dumbbell#selected}selected(){api}.

```
// set the size of the endpoints
series.markers().size(8);
// set the size in the hovered and selected states
series.hovered().markers().size(10);
series.selected().markers().size(10);
```

In the sample below, the endpoints are enlarged, and grow a little more when hovered or selected:

{sample}BCT\_Dumbbell\_Chart\_03{sample}

#### Individual Points

To change the look of an individual point, set its configuration right in the data. The same settings you apply to all points, added as fields of the point, affect only that point:

```
// create data with individual point settings
var data = [
  {x: "Job A", low: 40000, high: 60000},
  {x: "Job B", low: 50000, high: 80000,
   normal: {lowFill: "#5cd65c", highFill: "#2eb82e", stroke: "2 #5cd65c"},
   hovered: {lowFill: "#5cd65c", highFill: "#2eb82e", stroke: "3 #5cd65c"},
   selected: {lowFill: "#5cd65c", highFill: "#2eb82e", stroke: "3 #5cd65c"}},
  {x: "Job C", low: 35000, high: 55000}
];
```

With array data, the same settings travel as extra columns: add the values to the rows and map them with {api:anychart.data.Set#mapAs}mapAs(){api} — see [Working with Data](../Working_with_Data/Overview).

In the sample below, the second point carries its own endpoint colors and connecting line:

{sample}BCT\_Dumbbell\_Chart\_04{sample}

### Labels

[Labels](../Common_Settings/Labels) are text elements attached to points. Enable and format them with {api:anychart.core.cartesian.series.Dumbbell#labels}labels(){api}, {api:anychart.core.ui.LabelsFactory#enabled}enabled(){api}, and {api:anychart.core.ui.LabelsFactory#format}format(){api}. The default label sits at the high endpoint and shows the high value of the point.

Pass `"rangeMode"` to {api:anychart.core.ui.LabelsFactory#position}position(){api} to label both endpoints instead - the low endpoint then prints the low value, and a format function tells the two apart through `this["rangeEnd"]`: see [Range Column Chart](Range_Column_Chart).

In {api:anychart.core.ui.LabelsFactory#format}format(){api}, use [text formatters](../Common_Settings/Text_Formatters): tokens such as `{%low}` and `{%high}` read the fields of the point.

```
// enable the series labels
series.labels().enabled(true);
// show both values of the point
series.labels().format("{%low} - {%high}");
```

In the sample below, each label shows the low and high values of its point:

{sample}BCT\_Dumbbell\_Chart\_05{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box. It appears when you hover over a point on a chart. It has many visual and other settings. For example, you can edit the text with font settings and [text formatters](../Common_Settings/Text_Formatters). You can also change the background style and move the tooltip.

The tooltip has a title and a text body. Set them with {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} and {api:anychart.core.ui.Tooltip#format}format(){api}:

```
// set the tooltip title and text
series.tooltip().titleFormat("Position: {%x}");
series.tooltip().format("Low: {%low}, High: {%high}");
```

In the sample below, hover over a point to see its position name and both values in the tooltip:

{sample}BCT\_Dumbbell\_Chart\_06{sample}

### Vertical Dumbbell

Like most series types in AnyChart, the Dumbbell series can be drawn with the categories running down the vertical axis: see [Vertical Charts](Vertical/Overview).

* [Vertical Dumbbell](Vertical/Dumbbell_Chart)
