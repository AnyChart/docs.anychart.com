{:index 1.5}

# Funnel Chart

## Overview

Funnel Charts are so-called Accumulation Charts and they show percentage ratio. Funnel Charts are often used to represent stages in a sales process and show the amount of potential revenue for each stage. This type of chart can also be useful in identifying potential problem areas in an organization’s sales processes. 

This article explains how to create a basic Funnel Chart as well as configure settings that are specific to the type. The table below gives a brief overview of the Funnel Chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Funnel}anychart.charts.Funnel{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[name, value](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>[NO](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td>[Pie](Pie_Chart)</td></tr>
<tr><td></td><td>[Pyramid](Pyramid_Chart)</td></tr>
<tr><td></td><td>[Stacked](Stacked/Overview)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Funnel Chart](https://www.anychart.com/chartopedia/chart-types/funnel-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Quick Start

To create a Funnel Chart, use the {api:anychart#funnel}anychart.funnel(){api} chart constructor. If you pass the data to this chart constructor, it will create a Funnel series. Another way to create the Funnel Chart is to call the {api:anychart.charts.Funnel}funnel(){api} method. Funnel Charts are single-series, like Pie or Pyramid Charts.


The following sample demonstrates how a basic Funnel Chart is created:

```
var data = [
  ["Total Market", 232000],
  ["Prospects", 94480],
  ["Leads", 47390],
  ["Sales", 22181]
];

chart = anychart.funnel(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Funnel\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Area chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Head

A head, or base, is the upper part of a Funnel, where the difference between areas is significant (in percentage value) and is demonstrated by areas' size. To set the width of the head (in pixels or in percent), use the {api:anychart.charts.Funnel#baseWidth}baseWidth(){api} method:

```
// set the base width
chart.baseWidth("50%");
```

{sample}BCT\_Funnel\_Chart\_02{sample}


### Neck

The neck is a lower part of a Funnel. All values under the neck look like a Stacked Column, which means that the difference between them is not really important. The default value of the Neck height is 25%. The {api:anychart.charts.Funnel#neckWidth}neckWidth(){api} and {api:anychart.charts.Funnel#width}width(){api} will help to adjust the neck width, and the {api:anychart.charts.Funnel#neckHeight}neckHeight(){api} method is used for setting the Funnel Chart neck's height.

```
// adjust the funnels neck
chart.neckWidth("20%");
chart.neckHeight("35%");
```

{sample}BCT\_Funnel\_Chart\_03{sample}

### Appearance

#### All Points

The [appearance settings](../Appearance_Settings) of a Funnel chart can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.charts.Funnel#normal}normal(){api}, {api:anychart.charts.Funnel#hovered}hovered(){api}, and {api:anychart.charts.Funnel#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In the sample below, there is a Funnel chart with appearance settings configured:

```
// configure the visual settings of the chart
chart.normal().fill("#004d39", 0.3);
chart.hovered().fill("#004d39", 0.1);
chart.selected().fill("#004d39", 0.5);
chart.hovered().hatchFill("forward-diagonal", "#004d39", 1, 15);
chart.selected().hatchFill("forward-diagonal", "#004d39", 1, 15);
chart.normal().stroke("white");
chart.hovered().stroke("white", 2);
chart.selected().stroke("white", 2);
```

{sample}BCT\_Funnel\_Chart\_04{sample}

#### Individual Points

If you use object notation to set the data, you can change the appearance (and some other settings) of individual points by adding special fields to your data:

```
// create data
var data = [
  {name: "Total Market", value: 232000},
  {name: "Prospects", value: 94480,
   normal:   {
             hatchFill: "backward-diagonal",
             stroke: "black"
             },
   hovered:  {
               fill: "lightGray",
               hatchFill: "backward-diagonal",
               stroke: "black"
             },
   selected: {
               fill: "white",
               hatchFill: "backward-diagonal",
               stroke: "black"
             }
  },
  {name: "Leads", value: 47390},
  {name: "Sales", value: 22181}
];

// create a chart and set the data
chart = anychart.funnel(data);
```

{sample}BCT\_Funnel\_Chart\_05{sample}

### Labels

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart. This section explains how to adjust the connectors and position of labels and to allow or forbid overlapping. To learn how to modify the text of labels, see the [Labels and Tooltips (Text)](#labels_and_tooltips_\(text\)) section of this article.

#### Connectors

The line that joins a label with a particular funnel point is called a connector. Tune connectors' visual appearance with the {api:anychart.charts.Funnel#connectorStroke}connectorStroke(){api} method. 

```
chart.connectorStroke({
  // set thickness of the connectors
  thickness: 2,
  // set color of the connectors
  color: "#444",
  // set dashed connectors. Dashes are 4px and gaps are 2px
  dash: "4 2"
});
```

Find more information about lines in [Line Settings tutorial](../Appearance_Settings/Lines_Settings). Here is the funnel with tuned connectors.

{sample}BCT\_Funnel\_Chart\_06{sample}

**Note:** to hide connectors, set **null** value for {api:anychart.charts.Funnel#connectorStroke}connectorStroke(){api} method.

#### Position

Position of the labels is controlled by the {api:anychart.core.ui.LabelsFactory#position}position(){api} method. There are five acceptable values for funnel labels:

* `inside` - place labels inside each funnel point.
* `outsideLeftInColumn` - place labels to the left of the funnel and align them in a column.
* `outsideRightInColumn` - place labels to the right of the funnel and align them in a column.
* `outsideLeft` - place labels to the left of the funnel.
* `outsideRight` - place labels to the right of the funnel.

If you use `"outsideLeft"` or `"outsideRight"`, it becomes possible to adjust length of labels connectors. Use the {api:anychart.charts.Funnel#connectorLength}connectorLength(){api} method to set custom length for all labels connectors:

```
// place labels to the right
var labels = chart.labels();
labels.position("outsideRight");

// set 45px connectors length
chart.connectorLength(45);
```

{sample}BCT\_Funnel\_Chart\_07{sample}

#### Overlapping

Sometimes labels overlap each other. To allow or forbid overlapping, use the {api:anychart.charts.Funnel#overlapMode}overlapMode(){api} method. The code sample below demonstrates setting labels with overlapping allowed:

```
// allow labels overlapping
chart.overlapMode("allowOverlap");
```

### Labels and Tooltips (Text)

For text [labels](../Common_Settings/Labels), font settings and [text formatters](../Common_Settings/Text_Formatters) are available. The same settings can be applied to [tooltips](../Common_Settings/Tooltip) – text boxes displayed when chart points are hovered.

#### Tokens

To change the text of labels, combine the {api:anychart.charts.Funnel#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips, do the same with the {api:anychart.charts.Funnel#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Besides tokens that work with all chart types, there is a token that is specific to the Funnel – `{%yPercentOfTotal}`. It returns an element's percentage of the total.

Also, you can add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens:

```
// create data
var data = [
  {name: "Total Market", value: 232000, custom_field: "info 1"},
  {name: "Prospects", value: 94480, custom_field: "info 2"},
  {name: "Leads", value: 47390, custom_field: "info 3"},
  {name: "Sales", value: 22181, custom_field: "info 4"}
];

// create a chart and set the data
var chart = anychart.funnel(data);

// configure labels
chart.labels().format("{%x}: {%yPercentOfTotal}%");

// configure tooltips
chart.tooltip().format("{%yPercentOfTotal}% ({%value})\n{%custom_field}");
```

{sample}BCT\_Funnel\_Chart\_08{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) instead of tokens.

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

In the sample below, functions modify the format of labels and tooltips depending on elements' percentages of the total, and a custom data field is used:

```
// create data
var data = [
  {name: "Total Market", value: 232000, custom_field: "info 1"},
  {name: "Prospects", value: 94480, custom_field: "info 2"},
  {name: "Leads", value: 47390, custom_field: "info 3"},
  {name: "Sales", value: 22181, custom_field: "info 4"}
];

// create a chart and set the data
var chart = anychart.funnel(data);

// enable HTML for labels and tooltips
chart.labels().useHtml(true);
chart.tooltip().useHtml(true);

// configure labels
chart.labels().format(function (){
  var percentOfTotal = (this.getData("value")*100)/this.getStat("sum");
  if (percentOfTotal > 50)
    return "<span style='color:#dd2c00;font-weight:bold'>" +
           this.x + ": " + percentOfTotal.toFixed(1) + "%</span>";
  return this.x + ": " + percentOfTotal.toFixed(1) + "%";
});

// configure tooltips
chart.tooltip().format(function (){
var percentOfTotal = (this.getData("value")*100)/this.getStat("sum");
  if (percentOfTotal > 50)
    return "<span style='font-size:18'>" +
           percentOfTotal.toFixed(1) + "% (" +
           this.value + ")</span><br></br><br>" +
           this.getData("custom_field");
  return percentOfTotal.toFixed(1) + "% (" + this.value +
         ")<br></br><br></br>" + this.getData("custom_field");
});
```

{sample}BCT\_Funnel\_Chart\_09{sample}