{:index 1.5}
# Heat Map Chart

## Overview

A heat map is a visualization of a data matrix where values are represented as colors.

This article explains how to create a basic Heat Map chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Heat Map chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Heat Map](../Quick_Start/Modules#heat_map)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.HeatMap}anychart.charts.HeatMap{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[x, value, heat](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Treemap](Treemap_Chart)</td></tr>
<tr><td></td><td>[Choropleth Map](../Maps/Choropleth_Map)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Heat Map Chart](https://www.anychart.com/chartopedia/chart-types/heatmap/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Heat Map chart requires adding the [Core](../Quick_Start/Modules#core) and [Heat Map](../Quick_Start/Modules#heat_map) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-heatmap.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).


## Quick Start

To create a Heat Map chart, use the {api:anychart#heatMap}anychart.heatMap(){api} chart constructor, like in the following sample:

```
// create data
var data = [
  {x: "2010", y: "A", heat: 15},
  {x: "2011", y: "A", heat: 17},
  {x: "2012", y: "A", heat: 21},
  {x: "2010", y: "B", heat: 34},
  {x: "2011", y: "B", heat: 33},
  {x: "2012", y: "B", heat: 32},
  {x: "2010", y: "C", heat: 51},
  {x: "2011", y: "C", heat: 50},
  {x: "2012", y: "C", heat: 47}
];

// create a chart and set the data
chart = anychart.heatMap(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Heat\_Map\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Heat Map chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data for a Heat Map chart can be passed to the chart constructor {api:anychart#heatMap}anychart.heatMap(){api} or to the {api:anychart.charts.HeatMap#data}data(){api} method.

Use the following data fields:

* `x` to set the names of columns
* `y` to set the names of rows
* `heat` to set values

By default, items are colored automatically according to their values (heats). However, you can set the color of each item manually by adding extra fields to your data, and in this case the `heat` field can be omitted. See the [Appearance](#individual_points) section to learn more.

**Note:** It is possible to add custom fields to your data - see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

This is how working with data fields of the Heat Map chart looks like:

```
// create data
var data = [
  {x: "2010", y: "A", heat: 15},
  {x: "2011", y: "A", heat: 17},
  {x: "2012", y: "A", heat: 21},
  {x: "2013", y: "A", heat: 23},
  {x: "2010", y: "B", heat: 34},
  {x: "2011", y: "B", heat: 33},
  {x: "2012", y: "B", heat: 32},
  {x: "2013", y: "B", heat: 30},
  {x: "2010", y: "C", heat: 43},
  {x: "2011", y: "C", heat: 42},
  {x: "2012", y: "C", heat: 40},
  {x: "2013", y: "C", heat: 38},
  {x: "2010", y: "D", heat: 8},
  {x: "2011", y: "D", heat: 8},
  {x: "2012", y: "D", heat: 7},
  {x: "2013", y: "D", heat: 8}
];

// create a chart and set the data
chart = anychart.heatMap(data);
```

{sample}BCT\_Heat\_Map\_Chart\_02{sample}

### Appearance

#### All Points

The [appearance settings](../Appearance_Settings) of a Heat Map chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.HeatMap#normal}normal(){api}, {api:anychart.charts.HeatMap#hovered}hovered(){api}, and {api:anychart.charts.HeatMap#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there is a Heat Map chart with appearance settings configured:

```
// configure the visual settings of the chart
chart.hovered().fill("gray", 0.4);
chart.selected().fill("gray", 0.6);
chart.selected().hatchFill("forward-diagonal", "gray", 2, 20);
chart.normal().stroke("gray");
chart.hovered().stroke("gray");
chart.selected().stroke("gray", 2);
```

{sample}BCT\_Heat\_Map\_Chart\_03{sample}

#### Individual Points

It is possible to configure the appearance of each cell individually - use extra data fields corresponding with the methods mentioned above. In this case the `heat` field can be omitted:

```
// create data
var data = [
  {x: "2000", value: 1100},
  {x: "2001", value: 880},
  {x: "2002", value: 1100},
  {x: "2003", value: 1500,
   normal:   {
               fill: "#b30059 0.3",
               stroke: "#b30059",
               markerSize: 15,
               type: "star4"
             },
   hovered:  {
               fill: "#b30059 0.1",
               stroke: "2 #b30059",
               markerSize: 20,
               type: "star5"
             },
   selected: {
               fill: "#b30059 0.5",
               stroke: "4 #b30059",
               markerSize: 20,
               type: "star6"
             }
  },
  {x: "2004", value: 921},
  {x: "2005", value: 1000},
  {x: "2006", value: 1400}
];

// create a chart and set the data
chart = anychart.heatMap(data);
```

{sample}BCT\_Heat\_Map\_Chart\_04{sample}

### Color Scale

By default, the color scale of a Heat Map chart is ordinal, and cells are colored in the colors of the default [palette](../Appearance_Settings/Palettes). Color ranges are set automatically.

#### Ordinal

To customize the **ordinal color scale**, you should create it explicitly by using the {api:anychart.scales#ordinalColor}ordinalColor(){api} constructor.

Combine it with {api:anychart.scales.OrdinalColor#ranges}ranges(){api} to set heat ranges (two or more) you want to be marked by different colors. Then you can set a color for each of these ranges by using the {api:anychart.scales.OrdinalColor#colors}colors(){api} method. Please note that if you do not specify colors and ranges, the default settings of the ordinal color scale are used.

To set your scale as the color scale of the chart, use the {api:anychart.charts.HeatMap#colorScale}colorScale(){api} method.

This sample shows a Heat Map with an ordinal color scale:

```
// create and configure a color scale.
var customColorScale = anychart.scales.ordinalColor();
customColorScale.ranges([
  {less: 20},
  {from: 20, to: 40},
  {greater: 40}
]);
customColorScale.colors(["lightgray", "#00ccff", "#ffcc00"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);
```

{sample}BCT\_Heat\_Map\_Chart\_05{sample}

#### Linear

To create a **linear color scale**, use the {api:anychart.scales#linearColor}linearColor(){api} constructor.

Then call {api:anychart.scales.LinearColor#colors}colors(){api} to set two colors, the first one indicating 0, and the second one indicating the maximum heat. Cells are colored automatically in different mixtures of these two colors, and if you do not specify them, the default colors of the linear color scale are used.

Finally, call {api:anychart.charts.HeatMap#colorScale}colorScale(){api} to set your scale as the color scale of the chart.

In the following sample, there is a Heat Map with a linear color scale:

```
// create and configure a color scale.
var customColorScale = anychart.scales.linearColor();
customColorScale.colors(["#00ccff", "#ffcc00"]);

// set the color scale as the color scale of the chart
chart.colorScale(customColorScale);
```

{sample}BCT\_Heat\_Map\_Chart\_06{sample}

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of labels, combine the {api:anychart.charts.HeatMap#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To change the text of tooltips, do the same with the {api:anychart.charts.HeatMap#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Besides tokens that work with all chart types, there is a token that is specific to the Heat Map - `{%heat}`. It returns the value (heat) of an element.

Also, you can always add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens:

```
// create data
var data = [
  {x: "2010", y: "A", heat: 15, custom_field: "info 1"},
  {x: "2011", y: "A", heat: 17, custom_field: "info 2"},
  {x: "2012", y: "A", heat: 21, custom_field: "info 3"},
  {x: "2013", y: "A", heat: 23, custom_field: "info 4"},
  {x: "2010", y: "B", heat: 34, custom_field: "info 5"},
  {x: "2011", y: "B", heat: 33, custom_field: "info 6"},
  {x: "2012", y: "B", heat: 32, custom_field: "info 7"},
  {x: "2013", y: "B", heat: 30, custom_field: "info 8"},
  {x: "2010", y: "C", heat: 43, custom_field: "info 9"},
  {x: "2011", y: "C", heat: 42, custom_field: "info 10"},
  {x: "2012", y: "C", heat: 40, custom_field: "info 11"},
  {x: "2013", y: "C", heat: 38, custom_field: "info 12"},
  {x: "2010", y: "D", heat: 8, custom_field: "info 13"},
  {x: "2011", y: "D", heat: 8, custom_field: "info 14"},
  {x: "2012", y: "D", heat: 7, custom_field: "info 15"},
  {x: "2013", y: "D", heat: 8, custom_field: "info 16"}
];

// create a chart and set the data
var chart = anychart.heatMap(data);

// configure labels
chart.labels().format("{%heat}%");

// configure tooltips
chart.tooltip().format("{%y}: {%heat}%\n\n{%custom_field}");
```

{sample}BCT\_Heat\_Map\_Chart\_07{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the `heat` field (as well as the default ones).

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

The sample below demonstrates how to work with formatting functions:

```
// create data
var data = [
  {x: "2010", y: "A", heat: 15, custom_field: "info 1"},
  {x: "2011", y: "A", heat: 17, custom_field: "info 2"},
  {x: "2012", y: "A", heat: 21, custom_field: "info 3"},
  {x: "2013", y: "A", heat: 23, custom_field: "info 4"},
  {x: "2010", y: "B", heat: 34, custom_field: "info 5"},
  {x: "2011", y: "B", heat: 33, custom_field: "info 6"},
  {x: "2012", y: "B", heat: 32, custom_field: "info 7"},
  {x: "2013", y: "B", heat: 30, custom_field: "info 8"},
  {x: "2010", y: "C", heat: 43, custom_field: "info 9"},
  {x: "2011", y: "C", heat: 42, custom_field: "info 10"},
  {x: "2012", y: "C", heat: 40, custom_field: "info 11"},
  {x: "2013", y: "C", heat: 38, custom_field: "info 12"},
  {x: "2010", y: "D", heat: 8, custom_field: "info 13"},
  {x: "2011", y: "D", heat: 8, custom_field: "info 14"},
  {x: "2012", y: "D", heat: 7, custom_field: "info 15"},
  {x: "2013", y: "D", heat: 8, custom_field: "info 16"}
];

// create a chart and set the data
var chart = anychart.heatMap(data);

// enable HTML for labels
chart.labels().useHtml(true);

// configure labels
chart.labels().format(function() {
  var heat = (this.heat);
  if (heat < 20)
    return "Low<br/>" + heat + "%";
  if (heat < 40)
    return "Medium<br/>" + heat + "%";
  if (heat >= 40)
    return "<span style='font-weight:bold'>High</span><br/>" +
           heat + "%";
});

// configure tooltips
chart.tooltip().format(function() {
  var heat = (this.heat);
  if (heat < 20)
    return this.y + ": Low (" + heat + "%)\n\n" +
                    this.getData("custom_field");
  if (heat < 40)
    return this.y + ": Medium (" + heat + "%)\n\n" +
                    this.getData("custom_field");
  if (heat >= 40)
    return this.y + ": High (" + heat + "%)\n\n" +
                    this.getData("custom_field");
});
```

{sample}BCT\_Heat\_Map\_Chart\_08{sample}

#### Display Mode

By default, a label is not shown if it does not fit the width of a cell. However, you can hide such labels or always show all labels. To set the display mode of labels, call the {api:anychart.charts.HeatMap#labelsDisplayMode}labelsDisplayMode(){api} method with one of the parameters listed in {api:anychart.enums.LabelsDisplayMode}anychart.enums.LabelsDisplayMode{api}:

* `"drop"` (default)
* `"alwaysShow"`
* `"clip"`

The following sample shows how these modes work:

```
// set the display mode of labels
chart.labelsDisplayMode("alwaysShow");
```
  
{sample}BCT\_Heat\_Map\_Chart\_09{sample}

### Scrollers

Sometimes, when working with large data sets, you might need your chart to be scrollable. The Heat Map chart supports both X- and Y-scrollers - to enable them, call the {api:anychart.charts.HeatMap#xScroller}xScroller(){api} and {api:anychart.charts.HeatMap#yScroller}yScroller(){api} methods.

You can as well set the area of a chart that is initially shown: use the {api:anychart.charts.HeatMap#xZoom}xZoom(){api} and {api:anychart.charts.HeatMap#yZoom}yZoom(){api} methods. For example, when they are combined with {api:anychart.core.utils.OrdinalZoom#setToPointsCount}setToPointsCount(){api}, a certain number of points is displayed. See the [Scroller](../Common_Settings/Scroller) article to learn about other options.

The sample below shows how to configure scrollers on a Heat Map chart. Initially, 4 rows and 8 columns are shown:

```
// enable and configure scrollers
chart.xScroller().enabled(true);
chart.xZoom().setToPointsCount(8);
chart.yScroller().enabled(true);
chart.yZoom().setToPointsCount(4);
```

{sample}BCT\_Heat\_Map\_Chart\_10{sample}