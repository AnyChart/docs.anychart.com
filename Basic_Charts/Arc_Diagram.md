{:index 1}
# Arc Diagram

## Overview

An Arc diagram is a flow chart that shows connections between entities: the nodes are placed along a single line, and each link between two nodes is drawn as an arc above (or below) that line. The height of an arc depends on the distance between the connected nodes, its thickness represents the weight of the link, and the size of a node bar represents the total flow through the node. Arc diagrams are a compact alternative to the [Network Graph](Network_Graph) when the relationships, not the topology, are the point — and they read best when the nodes are ordered well (see [Sorting](#sorting)).

This article explains how to create a basic Arc diagram as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Arc diagram's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Arc Diagram](../Quick_Start/Modules#arc_diagram)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.ArcDiagram}anychart.charts.ArcDiagram{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[from, to, weight](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[orientation("vertical")](#orientation)</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>[Dependency Wheel](Dependency_Wheel)</td></tr>
<tr><td></td><td>[Sankey Diagram](Sankey_Diagram)</td></tr>
<tr><td></td><td>[Network Graph](Network_Graph)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Arc diagram requires adding the [Core](../Quick_Start/Modules#core) and [Arc Diagram](../Quick_Start/Modules#arc_diagram) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-arc-diagram.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create an Arc diagram, use the {api:anychart#arcDiagram}anychart.arcDiagram(){api} chart constructor. Each data row is a link between two nodes — the nodes themselves are created automatically from the `from` and `to` fields:

```
// create data: migration flows between regions
var data = [
  {from: "Asia", to: "Europe", weight: 42},
  {from: "Asia", to: "N. America", weight: 51},
  {from: "Asia", to: "Oceania", weight: 18},
  {from: "Africa", to: "Europe", weight: 38},
  {from: "Africa", to: "N. America", weight: 9},
  {from: "S. America", to: "N. America", weight: 44},
  {from: "S. America", to: "Europe", weight: 16},
  {from: "Europe", to: "N. America", weight: 33},
  {from: "N. America", to: "Oceania", weight: 7},
  {from: "Oceania", to: "Asia", weight: 6}
];

// create an arc diagram and set the data
var chart = anychart.arcDiagram(data);

// set the chart title
chart.title("Arc Diagram: Basic Sample");

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Arc\_Diagram\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Arc diagram (for example, interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data is passed to the {api:anychart#arcDiagram}anychart.arcDiagram(){api} chart constructor or to the {api:anychart.charts.ArcDiagram#data}data(){api} method. Each row describes one link with three data fields:

* `from` — the name of the source node
* `to` — the name of the target node
* `weight` — the weight of the link (sets the thickness of the arc)

An optional `group` field assigns the link's nodes to a named group — groups can be used to [sort](#sorting) the nodes. You can set links as objects or map the columns of an {api:anychart.data#set}anychart.data.set(){api} with {api:anychart.data.Set#mapAs}mapAs(){api}:

```
// map the columns of a data set (three fields: from, to, weight)
var dataSet = anychart.data.set([
  ["Asia", "Europe", 42],
  ["Asia", "N. America", 51],
  ["Africa", "Europe", 38]
]);
var mapping = dataSet.mapAs({from: 0, to: 1, weight: 2});

var chart = anychart.arcDiagram(mapping);
```

{sample}BCT\_Arc\_Diagram\_07{sample}

### Color Mode

The color of each node comes from the chart [palette](../Appearance_Settings/Palettes) — set your own with the {api:anychart.charts.ArcDiagram#palette}palette(){api} method. The arcs are colored according to the {api:anychart.charts.ArcDiagram#colorMode}colorMode(){api} method:

* `"source"` (default) — an arc takes the color of its source (`from`) node
* `"target"` — an arc takes the color of its target (`to`) node
* `"gradient"` — an arc is blended from the source color to the target color; the {api:anychart.charts.ArcDiagram#reverseGradient}reverseGradient(){api} method flips the direction of the blend

```
// one palette color per node
chart.palette(["#5b8ff9", "#61ddaa", "#65789b", "#f6bd16", "#7262fd", "#f6903d"]);

// blend each arc from the color of its source node to the color of its target node
chart.colorMode("gradient");
```

{sample}BCT\_Arc\_Diagram\_02{sample}

### Orientation

By default, the nodes are placed in a row at the bottom of the chart, and the arcs bow upward. The {api:anychart.charts.ArcDiagram#orientation}orientation(){api} method rotates the layout: with `"vertical"`, the nodes form a column and the arcs bow to the right. The {api:anychart.charts.ArcDiagram#arcDirection}arcDirection(){api} method flips the arcs to the other side of the node line — `"up"` (default) or `"down"`:

```
// place the nodes in a column; the arcs bow to the right
chart.orientation("vertical");
```

{sample}BCT\_Arc\_Diagram\_03{sample}

### Nodes and Arcs Geometry

The following methods adjust the geometry of the diagram:

* {api:anychart.charts.ArcDiagram#nodeWidth}nodeWidth(){api} — the size of the node bars, in pixels (20 by default)
* {api:anychart.charts.ArcDiagram#nodeSpacing}nodeSpacing(){api} — the gap between adjacent nodes, in pixels (30 by default)
* {api:anychart.charts.ArcDiagram#curvature}curvature(){api} — the height of the arcs: values below 1 flatten them, values above 1 make them taller (1 by default)

```
// make the node bars bigger and spread them wider
chart.nodeWidth(28);
chart.nodeSpacing(45);

// make the arcs taller and bow them below the baseline
chart.curvature(1.5);
chart.arcDirection("down");
```

{sample}BCT\_Arc\_Diagram\_04{sample}

### Sorting

How readable an Arc diagram is depends a lot on the order of the nodes. The {api:anychart.charts.ArcDiagram#sortOrder}sortOrder(){api} method arranges them:

* `"name"` (default) — alphabetically by node name
* `"weight"` — by the total flow through the node, the largest first
* `"group"` — clustered by the `group` field of the [data](#data)

```
// order the nodes by their total flow instead of by name
chart.sortOrder("weight");
```

{sample}BCT\_Arc\_Diagram\_05{sample}

### Nodes

The node bars and their labels are configured via the {api:anychart.charts.ArcDiagram#node}node(){api} method in three [states](../Common_Settings/Interactivity/States) — {api:anychart.core.StateSettings#fill}fill(){api}, {api:anychart.core.StateSettings#stroke}stroke(){api}, and {api:anychart.core.StateSettings#labels}labels(){api} are available in each. A node is hovered when it is pointed at (its connections are highlighted) and selected when it is clicked (Ctrl/Cmd + click adds more nodes, a click on the empty area clears the selection). You can also select nodes programmatically: {api:anychart.charts.ArcDiagram#select}select(){api} accepts an array of node names, and {api:anychart.charts.ArcDiagram#unselect}unselect(){api} clears the selection.

Node labels show the node name and are enabled by default. In the horizontal orientation they are drawn at an angle; use {api:anychart.core.ui.LabelsFactory#rotation}rotation(){api} and font settings to adjust them:

```
// states of the node bars
chart.node().normal().stroke("#ffffff", 1);
chart.node().hovered().stroke("#1b2740", 2);
chart.node().selected().stroke("#0b1220", 3);

// node labels: horizontal, bigger, dark
chart.node().normal().labels().rotation(0);
chart.node().normal().labels().fontSize(12);
chart.node().normal().labels().fontColor("#212121");
```

{sample}BCT\_Arc\_Diagram\_06{sample}

### Links

The arcs are configured via the {api:anychart.charts.ArcDiagram#link}link(){api} method — like [nodes](#nodes), in three states. Link labels support the `{%from}`, `{%to}`, and `{%value}` [text formatter](../Common_Settings/Text_Formatters) tokens. They are hidden by default and appear on the hovered arc; enable them in the normal state to show a label on every arc — a label that is moved aside to avoid overlapping draws a thin leader line back to its arc:

```
// states of the arcs
chart.link().hovered().fill("#1b2740");
chart.link().selected().fill("#0b1220");

// show a label on every arc
chart.link().normal().labels().enabled(true);
chart.link().normal().labels().format("{%from} → {%to}: {%value}");
chart.link().normal().labels().fontSize(10);
```

{sample}BCT\_Arc\_Diagram\_08{sample}

### Tooltips

Nodes and links have separate [tooltips](../Common_Settings/Tooltip) with separate text contexts. The node tooltip supports the `{%name}`, `{%weight}` (total flow through the node), and `{%connections}` (number of links) tokens; the link tooltip supports `{%from}`, `{%to}`, and `{%value}`. It is recommended to configure the link tooltip explicitly:

```
// the tooltip of nodes
chart.node().tooltip().titleFormat("Region: {%name}");
chart.node().tooltip().format("Total flow: {%weight}\nConnections: {%connections}");

// the tooltip of links
chart.link().tooltip().titleFormat("{%from} → {%to}");
chart.link().tooltip().format("People (k): {%value}");
```

{sample}BCT\_Arc\_Diagram\_09{sample}
