{:index 1.5}
# Heat Map Chart

## Overview

A heat map is a visualization of a data matrix where values are represented as colors.

This article explains how to create a basic Heat Map chart in AnyChart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Heat Map chart's characteristics:

<table border="1" class="seriesTABLE">
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
<tr><td></td><td>[Treemap](TreeMap_Chart)</td></tr>
<tr><td></td><td>[Choropleth Map](../Maps/Choropleth_Map)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td><a href="https://www.anychart.com/chartopedia/chart-types/heatmap/" target="_blank">Chartopedia: Heat Map Chart</a></td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

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

* **x** to set the names of columns
* **y** to set the names of rows
* **heat** to set values

By default, items are colored automatically according to their values (heats). However, you can set the color of each item manually by adding extra fields to your data, and in this case the "heat" field can be omitted. See the [Appearance](#appearance) section to learn more.

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

The [appearance settings](../Appearance_Settings) of a Heat Map chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.HeatMap#normal}normal(){api}, {api:anychart.charts.HeatMap#hovered}hovered(){api}, and {api:anychart.charts.HeatMap#selected}selected(){api} methods.

Combine them with the following methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#fill}stroke(){api} to set the stroke

In the sample below, there is a Heat Map chart with some of the appearance settings configured:

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

It is also possible to configure the appearance of each cell individually — use extra data fields corresponding with the methods mentioned above. In this case the "heat" field can be omitted:

```
// create data
var data = [
  {x: "1", y: "A", fill: "#ffcc00"},
  {x: "1", y: "B", fill: "#ffcc00"},
  {x: "1", y: "C", fill: "#ff9933"},
  {x: "1", y: "D", fill: "#ff9933"},
  {x: "2", y: "A", fill: "#ffcc00"},
  {x: "2", y: "B", fill: "#ff9933"},
  {x: "2", y: "C", fill: "#ff9933"},
  {x: "2", y: "D", fill: "#ff9933"},
  {x: "3", y: "A", fill: "#ff9933"},
  {x: "3", y: "B", fill: "#ff9933"},
  {x: "3", y: "C", fill: "#ff6600"},
  {x: "3", y: "D", fill: "#ff6600"},
  {x: "4", y: "A", fill: "#ff9933"},
  {x: "4", y: "B", fill: "#ff9933"},
  {x: "4", y: "C", fill: "#ff6600"},
  {x: "4",
   y: "D",
   fill: "#ff0000",
   hoverFill: "#ff0000",
   selectFill: "#b30059",
   stroke: "4 #b30059",
   hoverStroke: "5 white",
   selectStroke: "5 white"
  }
];

// create a chart and set the data
chart = anychart.heatMap(data);
```

{sample}BCT\_Heat\_Map\_Chart\_04{sample}

### Color Scale

By default, the color scale of a Heat Map chart is ordinal, and cells are colored in the colors of the default [palette](../Appearance_Settings/Palettes). Color ranges are set automatically.

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

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

To change the text of labels, combine the {api:anychart.charts.HeatMap#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

In addition to tokens that work universally, you can use the *{%Heat}* token that works only with the Heat Map chart. This token returns the value (heat) of an element:

```
// configure labels
chart.labels().format("{%Heat}%");
```

{sample}BCT\_Heat\_Map\_Chart\_07{sample}

Labels are also configured with the help of [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the *heat* field (as well as the default fields):

```
// enable HTML for labels
chart.labels().useHtml(true);

// configure labels
chart.labels().format(function(){
  var heat = (this.heat);
  if (heat < 20)
    return "Low<br/>" + heat + "%";
  if (heat < 40)
    return "Medium<br/>" + heat + "%";
  if (heat >= 40)
    return "<span style='font-weight:bold'>High</span><br/>" + heat + "%";
});
```
{sample}BCT\_Heat\_Map\_Chart\_08{sample}

You can also configure the display mode of labels – call the {api:anychart.charts.HeatMap#labelsDisplayMode}labelsDisplayMode(){api} method with one of the three parameters:

* **"alwaysShow"** – labels are always shown
* **"clip"** – labels are cropped to fit cells
* **"drop"** – too long labels are hidden

The default display mode is "drop": a label is not shown if it does not fit the width of a cell.

The following sample shows how these modes work:

```
// set the display mode of labels
chart.labelsDisplayMode("alwaysShow");
```
  
{sample}BCT\_Heat\_Map\_Chart\_09{sample}

### Tooltips

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered. There is a number of visual and other settings available: for example, you can edit the text by using font settings and [text formatters](../Common_Settings/Text_Formatters), change the style of background, adjust the position of a tooltip, and so on.

To change the text of tooltips, combine the {api:anychart.charts.HeatMap#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

In addition to tokens that work universally, you can use the *{%Heat}* token that works only with the Heat Map chart. This token returns the value (heat) of an element:

```
// configure tooltips
chart.tooltip().format("{%Y}: {%Heat}%");
```

{sample}BCT\_Heat\_Map\_Chart\_10{sample}

Tooltips are also configured with the help of [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the *heat* field (as well as the default fields):

```
// configure tooltips
chart.tooltip().format(function(){
  var heat = (this.heat);
  if (heat < 20)
    return this.y + ": Low (" + heat + "%)";
  if (heat < 40)
    return this.y + ": Medium (" + heat + "%)";
  if (heat >= 40)
    return this.y + ": High (" + heat + "%)";
});
```

{sample}BCT\_Heat\_Map\_Chart\_11{sample}

### Scrollers

Sometimes, when working with large data sets, you might need your chart to be scrollable. The Heat Map chart supports both X- and Y-scrollers – to enable them, call the {api:anychart.charts.HeatMap#xScroller}xScroller(){api} and {api:anychart.charts.HeatMap#yScroller}yScroller(){api} methods.

You can as well set the area of a chart that is initially shown: use the {api:anychart.charts.HeatMap#xZoom}xZoom(){api} and {api:anychart.charts.HeatMap#yZoom}yZoom(){api} methods. For example, when they are combined with {api:anychart.core.utils.OrdinalZoom#setToPointsCount}setToPointsCount(){api}, a certain number of points is displayed. See the [Scroller](../Common_Settings/Scroller) article to learn about other options.

The sample below shows how to configure scrollers on a Heat Map chart. Initially, 4 rows and 8 columns are shown:

```
// enable and configure scrollers
chart.xScroller().enabled(true);
chart.xZoom().setToPointsCount(8);
chart.yScroller().enabled(true);
chart.yZoom().setToPointsCount(4);
```

{sample}BCT\_Heat\_Map\_Chart\_12{sample}