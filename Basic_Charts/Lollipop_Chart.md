{:index 1.5}
# Lollipop Chart

## Overview

A Lollipop chart is a variation of the [Column](Column_Chart) and [Stick](Stick_Chart) charts. Each data point is drawn as a thin stick. The stick starts at the zero baseline. It ends with a round "head" marker at the value. So this type joins a [Stick](Stick_Chart) with a [Marker](Marker_Chart) head. Lollipop charts show discrete data well. They are lighter and less busy than Column charts. Use them when you have many categories. They also help you stress the value at the end of each stick.

This article shows how to build a basic Lollipop chart. It also shows how to set the options that belong to this type. The table below gives a short overview of the Lollipop chart's features:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) / [Base](../Quick_Start/Modules#base)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.core.cartesian.series.Lollipop}anychart.core.cartesian.series.Lollipop{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[YES](../Working_with_Data/Overview)</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>[Stacked Lollipop](Stacked/Value/Lollipop_Chart), [Percent Stacked Lollipop](Stacked/Percent/Lollipop_Chart)</td></tr>
<tr><td>Vertical</td><td>[Vertical Lollipop](Vertical/Lollipop_Chart)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>[Lollipop Chart with Error Bars](Error_Chart/Lollipop_Chart)</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Stick](Stick_Chart)</td></tr>
<tr><td></td><td>[Column](Column_Chart)</td></tr>
<tr><td></td><td>[Marker](Marker_Chart)</td></tr>
<tr><td></td><td>[Line](Line_Chart)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Lollipop Chart](https://www.anychart.com/chartopedia/chart-types/lollipop-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Lollipop chart needs the [Core](../Quick_Start/Modules#core) and [Basic Cartesian](../Quick_Start/Modules#basic_cartesian) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-cartesian.min.js"></script>
```

You can also use the [Base](../Quick_Start/Modules#base) module. It includes the two modules above and more: 

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

A Lollipop chart is built on a Cartesian plot, like [Column](Column_Chart) and [Stick](Stick_Chart). There are two ways to create it.

To build a Lollipop chart from scratch, use the {api:anychart#lollipop}anychart.lollipop(){api} chart constructor. When you pass data to this constructor, it creates a Lollipop series. Each point has two values. The `x` value is the category. The `value` sets the height of the stick and the position of the head.

You can also start from a [Column](Column_Chart) (or [Bar](Bar_Chart)) chart. Then add a Lollipop series with the {api:anychart.charts.Cartesian#lollipop}lollipop(){api} method.

```
// create data
var data = [
  {x: "January", value: 10000},
  {x: "February", value: 12000},
  {x: "March", value: 18000},
  {x: "April", value: 11000},
  {x: "May", value: 9000}
];

// create a chart
chart = anychart.lollipop();

// create a lollipop series and set the data
var series = chart.lollipop(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

You can also start from a [Column](Column_Chart) (or [Bar](Bar_Chart)) chart. Then add the Lollipop series to it. Only the constructor is different. The rest is the same:

```
// create a column (or bar) chart, then add a lollipop series
var chart = anychart.column();
var series = chart.lollipop(data);
```

{sample}BCT\_Lollipop\_Chart\_01{sample}

## General Settings

AnyChart has many settings that work the same way for all chart types, including the Lollipop chart. Legend and interactivity settings are two examples.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Appearance

#### All Points

You can set the [appearance settings](../Appearance_Settings) of a Lollipop chart in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.cartesian.series.Lollipop#normal}normal(){api}, {api:anychart.core.cartesian.series.Lollipop#hovered}hovered(){api}, and {api:anychart.core.cartesian.series.Lollipop#selected}selected(){api} methods. A point shows the **hover** state when you point at it. It shows the **selected** state when you click it.

Combine them with the following methods:

* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the color and thickness of the stick
* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill of the head

The head is a filled circle with no outline. Only fill() sets its color. stroke() does not affect the head.

You can also use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

If you do not set the colors yourself, they come from the chart [palette](../Appearance_Settings/Palettes). Each series gets one base color, used for both the stick and the head. Explicit fill() and stroke() settings override the palette colors.

The sample below has two Lollipop series with appearance settings:

```
// create data for two series
var seriesData_1 = [
  {x: "January", value: 10000},
  {x: "February", value: 12000},
  {x: "March", value: 18000},
  {x: "April", value: 11000},
  {x: "May", value: 9000}
];
var seriesData_2 = [
  {x: "January", value: 7000},
  {x: "February", value: 9000},
  {x: "March", value: 13000},
  {x: "April", value: 8000},
  {x: "May", value: 6000}
];

// create a column chart, then add lollipop series to it
var chart = anychart.column();

// first series
var series1 = chart.lollipop(seriesData_1);
series1.normal().stroke("#00cc99", 2);
series1.normal().fill("#00cc99");
series1.hovered().stroke("#00cc99", 3);
series1.hovered().fill("#00cc99");
series1.selected().stroke("#00cc99", 4);
series1.selected().fill("#00cc99");

// second series
var series2 = chart.lollipop(seriesData_2);
series2.normal().stroke("#0066cc", 2);
series2.normal().fill("#0066cc");
series2.hovered().stroke("#0066cc", 3);
series2.hovered().fill("#0066cc");
series2.selected().stroke("#0066cc", 4);
series2.selected().fill("#0066cc");
```

{sample}BCT\_Lollipop\_Chart\_02{sample}

#### Individual Points

If you use object notation to set the data, you can change the look of single points. Just add special fields to your data:

```
// create data
var data = [
  {x: "January", value: 10000},
  {x: "February", value: 12000},
  {x: "March", value: 18000,
   normal:   {
               stroke: "3 #5cd65c",
               fill: "#5cd65c"
             },
   hovered:  {
               stroke: "4 #5cd65c",
               fill: "#5cd65c"
             },
   selected: {
               stroke: "4 #5cd65c",
               fill: "#5cd65c"
             }
  },
  {x: "April", value: 11000},
  {x: "May", value: 9000}
];

// create a chart
chart = anychart.column();

// create a lollipop series and set the data
var series = chart.lollipop(data);
```

{sample}BCT\_Lollipop\_Chart\_03{sample}

If you use an array to set the data, you can also set the look of single points. The way is a bit different. First add the extra values to the data set. Then map the columns so the component can read them:

```
// create a data set: x, value, and (for one point) a custom fill color
var dataSet = anychart.data.set([
  ["January", 10000],
  ["February", 12000],
  ["March", 18000, "#5cd65c"],
  ["April", 11000],
  ["May", 9000]
]);

// map the columns
var mapping = dataSet.mapAs({x: 0, value: 1, fill: 2});

// create a chart
var chart = anychart.lollipop();

// create a lollipop series and set the data
var series = chart.lollipop(mapping);
```

{sample}BCT\_Lollipop\_Chart\_04{sample}

### Point Size

A Lollipop point has two parts with a size. The **head** is a round marker. Set its radius with {api:anychart.core.cartesian.series.Lollipop#markers}markers(){api} and {api:anychart.core.ui.MarkersFactory#size}size(){api} (the default radius is 4 px). The **stick** has no width of its own. Its thickness is the series stroke width. So make it thicker or thinner through the stroke (see [Appearance](#appearance)).

```
// enlarge the round head (default radius is 4 px)
series.markers().size(10);

// the stick thickness is the stroke width
series.normal().stroke("#0066cc", 3);
```

{sample}BCT\_Lollipop\_Chart\_05{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements. You can place them anywhere on any chart. You can turn them on for a whole series or for a single point. For text labels, you can use font settings and [text formatters](../Common_Settings/Text_Formatters).

You can turn on the data labels and format them to show each point's value:

```
// enable and format the data labels
series.labels().enabled(true);
series.labels().format("{%value}");
```

To move the labels, use the {api:anychart.core.ui.LabelsFactory#position}position(){api}, {api:anychart.core.ui.LabelsFactory#anchor}anchor(){api}, {api:anychart.core.ui.LabelsFactory#offsetX}offsetX(){api}, and {api:anychart.core.ui.LabelsFactory#offsetY}offsetY(){api} methods.

{sample}BCT\_Lollipop\_Chart\_06{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box. It appears when you hover over a point on a chart. Many visual and other settings are available. For example, you can edit the text with font settings and [text formatters](../Common_Settings/Text_Formatters). You can also change the background style and move the tooltip.

You can set the tooltip text with a format string:

```
// customize the tooltip text
series.tooltip().format("{%x}: {%value}");
```

{sample}BCT\_Lollipop\_Chart\_07{sample}

### Stacked Lollipop

Stacked and percent stacked charts hold many series. Related values sit on top of one another. This lets you compare how much one value adds to a total. You can do this in absolute or percentage terms.

In AnyChart, you can turn on a special scale mode. This makes the series stack together: see [Stacked Charts](Stacked/Overview).

To learn about the stacked versions of the Lollipop chart and its modifications, see:

* [Stacked Lollipop](Stacked/Value/Lollipop_Chart)
* [Percent Stacked Lollipop](Stacked/Percent/Lollipop_Chart)

### Vertical Lollipop

You can draw most series types in AnyChart in two ways: horizontal or vertical. See [Vertical Charts](Vertical/Overview).

Here is information about creating Vertical Lollipop series:

* [Vertical Lollipop](Vertical/Lollipop_Chart)
