{:index 4.1}
# Sankey Diagram

## Overview

A Sankey diagram, or chart, named after Captain Matthew Sankey, is a flow diagram that shows nodes linked by flows, the quantity of each flow being represented as its width. This chart type emphasizes the major transfers or flows within a system and helps to locate dominant contributions to an overall flow.

This article explains how to create a basic Sankey diagram as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Sankey diagram's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Sankey Diagram](../Quick_Start/Modules#sankey_diagram)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Sankey}anychart.charts.Sankey{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[from, to, weight](../Working_with_Data/Overview)</td></tr>
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
<tr><td></td><td>[Network Graph](Network_Graph)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Sankey Diagram](https://www.anychart.com/chartopedia/chart-types/sankey-diagram/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Sankey diagram requires adding the [Core](../Quick_Start/Modules#core) and [Sankey Diagram](../Quick_Start/Modules#sankey_diagram) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-sankey.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Sankey diagram, use the {api:anychart#sankey}anychart.sankey(){api} chart constructor, like in the following sample:

```
// create data
var data = [
  {from: "Canada",  to: "France",  weight:  2230000},
  {from: "Canada",  to: "Germany", weight:  1990000},
  {from: "Canada",  to: "Italy",   weight:  1180000},
  {from: "Canada",  to: "Spain",   weight:   990000},
  {from: "USA",     to: "France",  weight:   950000},
  {from: "USA",     to: "Germany", weight:  2020000},
  {from: "USA",     to: "Spain",   weight:  1110000}
];

// create a chart and set the data
var chart = anychart.sankey(data);

// set the width of nodes
chart.nodeWidth("30%");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Sankey\_Diagram\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Sankey diagram (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data for a Sankey diagram can be passed to the chart constructor {api:anychart#sankey}anychart.sankey(){api} or to the {api:anychart.charts.Sankey#data}data(){api} method.

Use the following data fields:

* `from` to set sources of flows
* `to` to set destinations of flows
* `weight` to set values

A data row specifies a [flow](#flows) linking two [nodes](#nodes): their names are set in the `from` and `to` fields. You can also create a [dropoff](#dropoffs) by adding a row with `null` in the `to` field.

On the chart, the width of each flow represents its `weight` value, and the height of each node is proportional to the total weight of either incoming or outgoing flows (including dropoffs), depending on which weight is greater. Nodes are automatically organized in multiple columns.

**Note 1:** It is possible to add custom fields to your data - see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

**Note 2:** You should avoid creating cycles in the data: if A links to itself, or links to B which links to C which links to A, chart cannot be drawn.

In the sample below, there is a Sankey with nodes organized in three columns. Please note that the `"USA"` and `"China"`, unlike other nodes in the first and third columns, are linked directly.

```
// create data
var data = [
  {from: "Canada",  to: "France",  weight: 2230000},
  {from: "Canada",  to: "Germany", weight: 1990000},
  {from: "Canada",  to: "Italy",   weight: 1180000},
  {from: "Canada",  to: "Spain",   weight:  990000},
  {from: "USA",     to: "China",   weight: 1250000},
  {from: "USA",     to: "France",  weight:  950000},
  {from: "USA",     to: "Germany", weight: 2020000},
  {from: "USA",     to: "Spain",   weight: 1110000},
  {from: "France",  to: "China",   weight: 1100000},
  {from: "France",  to: "Japan",   weight: 1050000},
  {from: "France",  to: "India",   weight: 1030000},
  {from: "Germany", to: "China",   weight: 2150000},
  {from: "Germany", to: "Japan",   weight:  660000},
  {from: "Germany", to: "India",   weight: 1200000},
  {from: "Italy",   to: "China",   weight: 1180000},
  {from: "Spain",   to: "China",   weight: 1120000},
  {from: "Spain",   to: "Japan",   weight:  980000}
];

// create a chart and set the data
var chart = anychart.sankey(data);
```

{sample}BCT\_Sankey\_Diagram\_02{sample}

### Nodes

Nodes are elements linked by [flows](#flows). In your [data](#data), you should specify the names of source and target nodes of each flow - use the `from` and `to` fields.

On the chart, nodes are automatically organized in multiple columns. The height of a node is proportional to the total weight of either incoming or outgoing flows, depending on which weight is greater.

You can configure the following settings of nodes:

* [appearance](#appearance)
* [labels and tooltips](#labels_and_tooltips)
* [width](#width)
* [padding](#padding)

#### Width

You can set the width of nodes (either in pixels or as a percentage) by using the {api:anychart.charts.Sankey#nodeWidth}nodeWidth(){api} method:

```
// set the width of nodes
chart.nodeWidth("50%");
```

{sample}BCT\_Sankey\_Diagram\_03{sample}

#### Padding

To set the vertical padding between nodes, call the {api:anychart.charts.Sankey#nodePadding}nodePadding(){api} method. In the following sample, the padding is set to 0, so nodes stick together:

```
// set the padding between nodes
chart.nodePadding(0);
```

{sample}BCT\_Sankey\_Diagram\_04{sample}

### Flows

Flows are elements that connect [nodes](#nodes). Each flow is specified by the names of its source and target nodes in the `from` and `to` [data](#data) fields. The value in the `weight` field defines the width of the flow.

You can configure the following settings of flows:

* [appearance](#appearance)
* [labels and tooltips](#labels_and_tooltips)
* [curvature](#curvature)

#### Curvature

The curvature, or curve factor, of flows is specified as a decimal value from 0 to 1, passed to the {api:anychart.charts.Sankey#curveFactor}curveFactor(){api} method. Setting it 0 straightens flows, like in this sample:

```
// set the curvature of the flows
chart.curveFactor(0);
```

{sample}BCT\_Sankey\_Diagram\_05{sample}

### Dropoffs

A dropoff is a [flow](#flows) without a target [node](#nodes), which usually indicates losses. To create a dropoff, add a [data](#data) row with `null` in the `to` field. In the `from` and `weight` fields, specify the name of the source node and the value of the dropoff, which defines its width.

You can configure the following settings of dropoffs:

* [appearance](#appearance)
* [labels and tooltips](#labels_and_tooltips)

The sample below shows how to create dropoffs:

```
// create data
var data = [
  {from: "Solar Energy", to: "Shading",  weight: 10},
  {from: "Shading",      to: null,       weight: 6},
  {from: "Shading",      to: "Facade",   weight: 4},
  {from: "Facade",       to: null,       weight: 3},
  {from: "Facade",       to: "Interior", weight: 1}
];

// create a chart and set the data
var chart = anychart.sankey(data);
```

{sample}BCT\_Sankey\_Diagram\_06{sample}

### Appearance

The [appearance settings](../Appearance_Settings) of a Sankey diagram can be configured in two [states](../Common_Settings/Interactivity/States): **normal** and **hover**.

Combine the **normal()** and **hovered()** methods of [nodes](#nodes) / [flows](#flows) / [dropoffs](#dropoffs) with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

Also, you can use some other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

In this sample, there is a Sankey chart with appearance settings configured:

```
// configure the visual settings of nodes
chart.node().normal().fill("#64b5f6 0.5");
chart.node().hovered().fill(anychart.color.darken("#64b5f6"));
chart.node().normal().stroke("#455a64", 2);

// configure the visual settings of flows
chart.flow().normal().fill("#ffa000 0.4");
chart.flow().hovered().fill(anychart.color.darken("#ffa000"));
chart.flow().hovered().stroke("#455a64");

// configure the visual settings of dropoffs
chart.dropoff().normal().fill(
  {keys: ["#dd2c00 0.4", "#455a64 0.7"], angle: 270}
);
chart.dropoff().hovered().stroke("#455a64");
```

{sample}BCT\_Sankey\_Diagram\_07{sample}

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of labels, combine the **labels()** method of [nodes](#nodes) / [flows](#flows) / [dropoffs](#dropoffs) with the {api:anychart.core.ui.LabelsFactory#format}format(){api} method and [tokens](../Common_Settings/Text_Formatters#string_tokens).

To configure tooltips or tooltip titles, do the same with **tooltip()** and the {api:anychart.core.ui.Tooltip#format}format(){api} or {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} method.

Here is the list of tokens that work with the Sankey diagram:

* `{%name}`
* `{%value}`
* `{%type}`

Also, you can always add a custom field to your data and use a custom token corresponding to it.

**Note:** You can combine the **normal()** and **hovered()** methods with {api:anychart.core.ui.LabelsFactory#enabled}enabled(){api} to enable or disable labels in a given [state](../Common_Settings/Interactivity/States). By default, labels of nodes are shown both in the normal and hover states, while labels of flows and dropoffs are shown only in the hover state.

This sample shows how to work with tokens:

```
// create data
var data = [
  {from: "Solar Energy", to: "Shading",  weight: 10, custom_field: "info 1"},
  {from: "Shading",      to: null,       weight: 7,  custom_field: "info 2"},
  {from: "Shading",      to: "Facade",   weight: 3,  custom_field: "info 3"},
  {from: "Facade",       to: null,       weight: 2,  custom_field: "info 4"},
  {from: "Facade",       to: "Interior", weight: 1,  custom_field: "info 5"}
];

// create a chart and set the data
var chart = anychart.sankey(data);

// configure labels
chart.node().labels().useHtml(true);
chart.node().labels().format(
  "<span style='font-weight:bold'>{%name}</span><br>{%value}"
);
chart.flow().hovered().labels().enabled(false);
chart.dropoff().normal().labels().enabled(true);
chart.dropoff().labels().padding(10);

// configure tooltips
chart.node().tooltip().format("value: {%value}");
chart.flow().tooltip().format("value: {%value}\n\n{%custom_field}");
chart.dropoff().tooltip().format("value: {%value}\n\n{%custom_field}");
```

{sample}BCT\_Sankey\_Diagram\_08{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `name`
* `value`
* `type`

In addition the following fields are available for nodes:

* `isConflict` - a boolean indicating whether the total weight of incoming flows equals to the weight of outgoing flows, including dropoffs
* `income` - an array with names and weights of incoming nodes
* `outcome` - an array with names and weights of outgoing nodes
* `dropoff` - the weight of the dropoff node

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

In the sample below, the `name` and `value` fields are used to configure labels and tooltips of flows as well as labels and tooltip titles of nodes. In addition, a custom field is used in tooltips of flows.

```
// create data
var data = [
  {from: "Canada",  to: "France",  weight: 2230000, custom_field: "info 1"},
  {from: "Canada",  to: "Germany", weight: 1990000, custom_field: "info 2"},
  {from: "Canada",  to: "Italy",   weight: 1180000, custom_field: "info 3"},
  {from: "Canada",  to: "Spain",   weight:  990000, custom_field: "info 4"},
  {from: "USA",     to: "China",   weight: 1250000, custom_field: "info 5"},
  {from: "USA",     to: "France",  weight:  950000, custom_field: "info 6"},
  {from: "USA",     to: "Germany", weight: 2020000, custom_field: "info 7"},
  {from: "USA",     to: "Spain",   weight: 1110000, custom_field: "info 8"},
  {from: "France",  to: "China",   weight: 1100000, custom_field: "info 9"},
  {from: "France",  to: "Japan",   weight: 1050000, custom_field: "info 10"},
  {from: "France",  to: "India",   weight: 1030000, custom_field: "info 11"},
  {from: "Germany", to: "China",   weight: 2150000, custom_field: "info 12"},
  {from: "Germany", to: "Japan",   weight:  660000, custom_field: "info 13"},
  {from: "Germany", to: "India",   weight: 1200000, custom_field: "info 14"},
  {from: "Italy",   to: "China",   weight: 1180000, custom_field: "info 15"},
  {from: "Spain",   to: "China",   weight: 1120000, custom_field: "info 16"},
  {from: "Spain",   to: "Japan",   weight:  980000, custom_field: "info 17"}
];

// configure labels of nodes
chart.node().labels().useHtml(true);
chart.node().labels().format(function() {
  return "<span style='font-weight:bold'>" + this.name +
         "</span><br>" + Math.round(this.value/100000)/10 + " mln";
});

// configure labels of flows
chart.flow().labels().format(function() {
  return Math.round(this.value/100000)/10 + " mln";
});

// configure tooltip titles of nodes
chart.node().tooltip().titleFormat(function() {
  return this.name + " (" + Math.round(this.value/100000)/10 +
         " mln)";
});

// configure tooltips of flows
chart.flow().tooltip().format(function() {
  return Math.round(this.value/100000)/10 + " mln" + 
  "\n\n" + this.getData("custom_field");
});
```

Tooltips of nodes are configured with the help of `income` and `outcome`:

```
// configure tooltips of nodes
chart.node().tooltip().format(function() {

  var incomeText = "";
  var outcomeText = "";

  for (i = 0; i < this.income.length; i++) {
    incomeText += Math.round(this.income[i].value/100000)/10 +
                  " mln <- " + this.income[i].name + "\n";
  }

  for (i = 0; i < this.outcome.length; i++) {
    outcomeText += Math.round(this.outcome[i].value/100000)/10 +
                   " mln -> " + this.outcome[i].name + "\n";
  }

  if (this.outcome.length > 0) {
    incomeText = incomeText + "\n";
  }

  return incomeText + outcomeText;
});
```

{sample}BCT\_Sankey\_Diagram\_09{sample}