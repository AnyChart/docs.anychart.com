{:index 1}
# Dependency Wheel

## Overview

A Dependency wheel is a circular flow chart: the nodes are drawn as arcs around a wheel, and each link between two nodes is drawn as a ribbon connecting their arcs. The length of a node arc represents the total flow through that node, and the thickness of a ribbon represents the weight of the link. This type (also known as a chord diagram) works well for showing mutual dependencies or flows within a closed system — imports and exports, energy flows, dependencies between software packages, and so on.

This article explains how to create a basic Dependency wheel as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Dependency wheel's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Dependency Wheel](../Quick_Start/Modules#dependency_wheel)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.DependencyWheel}anychart.charts.DependencyWheel{api}</td></tr>
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
<tr><td></td><td>[Arc Diagram](Arc_Diagram)</td></tr>
<tr><td></td><td>[Sankey Diagram](Sankey_Diagram)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Dependency wheel requires adding the [Core](../Quick_Start/Modules#core) and [Dependency Wheel](../Quick_Start/Modules#dependency_wheel) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-dependency-wheel.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Dependency wheel, use the {api:anychart#dependencyWheel}anychart.dependencyWheel(){api} chart constructor. Each data row is a link between two nodes — the nodes themselves are created automatically from the `from` and `to` fields:

```
// create data: energy flows from sources to consumers
var data = [
  {from: "Coal", to: "Grid", weight: 38},
  {from: "Gas", to: "Grid", weight: 46},
  {from: "Nuclear", to: "Grid", weight: 22},
  {from: "Hydro", to: "Grid", weight: 17},
  {from: "Solar", to: "Grid", weight: 11},
  {from: "Coal", to: "Heat", weight: 9},
  {from: "Gas", to: "Heat", weight: 24},
  {from: "Grid", to: "Industry", weight: 41},
  {from: "Grid", to: "Buildings", weight: 52},
  {from: "Grid", to: "Transport", weight: 19},
  {from: "Heat", to: "Industry", weight: 18},
  {from: "Heat", to: "Buildings", weight: 21}
];

// create a dependency wheel and set the data
var chart = anychart.dependencyWheel(data);

// set the chart title
chart.title("Dependency Wheel: Basic Sample");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Dependency\_Wheel\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Dependency wheel (for example, interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data is passed to the {api:anychart#dependencyWheel}anychart.dependencyWheel(){api} chart constructor or to the {api:anychart.charts.DependencyWheel#data}data(){api} method. Each row describes one link with three data fields:

* `from` — the name of the source node
* `to` — the name of the target node
* `weight` — the weight of the link (sets the thickness of the ribbon)

You can set links as objects or map the columns of an {api:anychart.data#set}anychart.data.set(){api} with {api:anychart.data.Set#mapAs}mapAs(){api}:

```
// map the columns of a data set (three fields: from, to, weight)
var dataSet = anychart.data.set([
  ["Coal", "Grid", 38],
  ["Gas", "Grid", 46],
  ["Grid", "Industry", 41]
]);
var mapping = dataSet.mapAs({from: 0, to: 1, weight: 2});

var chart = anychart.dependencyWheel(mapping);
```

{sample}BCT\_Dependency\_Wheel\_07{sample}

### Color Mode

The color of each node comes from the chart [palette](../Appearance_Settings/Palettes) — set your own with the {api:anychart.charts.DependencyWheel#palette}palette(){api} method. The ribbons are colored according to the {api:anychart.charts.DependencyWheel#colorMode}colorMode(){api} method:

* `"source"` (default) — a ribbon takes the color of its source (`from`) node
* `"target"` — a ribbon takes the color of its target (`to`) node
* `"gradient"` — a ribbon is blended from the source color to the target color; the {api:anychart.charts.DependencyWheel#reverseGradient}reverseGradient(){api} method flips the direction of the blend

```
// one palette color per node
chart.palette([
  "#5b8ff9", "#61ddaa", "#65789b", "#f6bd16",
  "#7262fd", "#78d3f8", "#9661bc", "#f6903d"
]);

// blend each ribbon from its source color to its target color
chart.colorMode("gradient");
```

{sample}BCT\_Dependency\_Wheel\_02{sample}

### Wheel Geometry

The following methods adjust the geometry of the wheel:

* {api:anychart.charts.DependencyWheel#startAngle}startAngle(){api} — rotates the whole wheel, in degrees (0 by default)
* {api:anychart.charts.DependencyWheel#padAngle}padAngle(){api} — the angular gap between adjacent node arcs, in radians (0.02 by default)
* {api:anychart.charts.DependencyWheel#nodeWidth}nodeWidth(){api} — the thickness of the node arcs, in pixels (15 by default)

```
// rotate the whole wheel a quarter-turn
chart.startAngle(90);

// widen the gaps between the node arcs (in radians)
chart.padAngle(0.06);

// make the node arcs thicker
chart.nodeWidth(30);
```

{sample}BCT\_Dependency\_Wheel\_03{sample}

### Sorting

The {api:anychart.charts.DependencyWheel#sortOrder}sortOrder(){api} method arranges the node arcs around the wheel:

* `"desc"` (default) — by the total flow through the node, the largest first
* `"asc"` — the smallest first
* `"none"` — in the order the nodes appear in the data

```
// arrange the node arcs from the smallest to the largest
chart.sortOrder("asc");
```

{sample}BCT\_Dependency\_Wheel\_04{sample}

### Nodes

The node arcs and their labels are configured via the {api:anychart.charts.DependencyWheel#node}node(){api} method in three [states](../Common_Settings/Interactivity/States) — {api:anychart.core.StateSettings#fill}fill(){api}, {api:anychart.core.StateSettings#stroke}stroke(){api}, and {api:anychart.core.StateSettings#labels}labels(){api} are available in each. A node is hovered when it is pointed at (its ribbons are highlighted) and selected when it is clicked (Ctrl/Cmd + click adds more nodes, a click on the empty area clears the selection). You can also select nodes programmatically: {api:anychart.charts.DependencyWheel#select}select(){api} accepts an array of node names, and {api:anychart.charts.DependencyWheel#unselect}unselect(){api} clears the selection.

Node labels are enabled by default and show the node name; the `{%name}`, `{%weight}`, and `{%percent}` (the node's share of the total flow) [text formatter](../Common_Settings/Text_Formatters) tokens are available. By default, labels that collide with already drawn ones are hidden — control this with the {api:anychart.charts.DependencyWheel#dropOverlappedLabels}dropOverlappedLabels(){api} method:

```
// states of the node arcs
chart.node().normal().stroke("#ffffff", 1);
chart.node().hovered().stroke("#1b2740", 2);
chart.node().selected().stroke("#0b1220", 3);

// node labels: add the share of the total flow to the name
chart.node().normal().labels().format("{%name}\n{%percent}{decimalsCount:1}%");

// show every label, even if some of them collide
chart.dropOverlappedLabels(false);
```

{sample}BCT\_Dependency\_Wheel\_05{sample}

### Links

The ribbons are configured via the {api:anychart.charts.DependencyWheel#link}link(){api} method — like [nodes](#nodes), in three states. Link labels support the `{%from}`, `{%to}`, and `{%value}` [text formatter](../Common_Settings/Text_Formatters) tokens. They are hidden by default and appear on the hovered ribbon; enable them in the normal state to show a label on every ribbon:

```
// states of the ribbons
chart.link().hovered().fill("#1b2740");
chart.link().selected().fill("#0b1220");

// show a label on every ribbon
chart.link().normal().labels().enabled(true);
chart.link().normal().labels().format("{%value}");
chart.link().normal().labels().fontSize(10);
```

{sample}BCT\_Dependency\_Wheel\_06{sample}

### Tooltips

Nodes and links have separate [tooltips](../Common_Settings/Tooltip) with separate text contexts. The node tooltip supports the `{%name}`, `{%weight}` (total flow through the node), and `{%connections}` (number of links) tokens; the link tooltip supports `{%from}`, `{%to}`, and `{%value}`. It is recommended to configure the link tooltip explicitly:

```
// the tooltip of nodes
chart.node().tooltip().titleFormat("Node: {%name}");
chart.node().tooltip().format("Total flow: {%weight}\nConnections: {%connections}");

// the tooltip of links
chart.link().tooltip().titleFormat("{%from} → {%to}");
chart.link().tooltip().format("Weight: {%value}");
```

{sample}BCT\_Dependency\_Wheel\_08{sample}
