{:index 1}
# Arc Diagram

## Overview

An Arc diagram shows connections between items. Each item is a node: a shape on one shared line, the node line. Each link between two nodes is drawn as an arc on one side of the node line.

The height of a link depends on the distance between its two nodes. The thickness of a link shows its weight. The size of a node shows the total flow through it.

An Arc diagram is a compact alternative to the [Network Graph](Network_Graph). Use it when the connections matter more than the overall shape of the network. It is easiest to read when the nodes are in a good order (see [Sorting](#sorting)).

This article shows how to create a basic Arc diagram. It also explains the settings that are special to this type. The table below gives a quick overview of the Arc diagram's features:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Arc Diagram](../Quick_Start/Modules#arc_diagram)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.ArcDiagram}anychart.charts.ArcDiagram{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>[from, to, weight, group](../Working_with_Data/Overview)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>[layout("vertical")](#layout)</td></tr>
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
<tr><td></td><td>[Chartopedia: Arc Diagram](https://www.anychart.com/chartopedia/chart-types/arc-diagram/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Arc diagram needs the [Core](../Quick_Start/Modules#core) and [Arc Diagram](../Quick_Start/Modules#arc_diagram) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-arc-diagram.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create an Arc diagram, use the {api:anychart#arcDiagram}anychart.arcDiagram(){api} chart constructor. Each data row is a link between two nodes. The nodes are created on their own from the `from` and `to` fields:

```
// create data: requests between the departments of a company
var data = [
  {from: "Sales", to: "Marketing", weight: 9},
  {from: "Sales", to: "Finance", weight: 16},
  {from: "Finance", to: "HR", weight: 5},
  {from: "Support", to: "Sales", weight: 14},
  {from: "Support", to: "Marketing", weight: 6},
  {from: "Marketing", to: "HR", weight: 3}
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

In the sample below, the data rows are drawn as links above the row of department nodes:

{sample}BCT\_Arc\_Diagram\_01{sample}

## General Settings

AnyChart has many settings that work the same way for all chart types. This includes the Arc diagram, for example its legend and interactivity settings.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Pass data to the {api:anychart#arcDiagram}anychart.arcDiagram(){api} chart constructor or to the {api:anychart.charts.ArcDiagram#data}data(){api} method. Each row describes one link with these data fields:

* `from` — the name of the source node
* `to` — the name of the target node
* `weight` — the weight of the link (sets its thickness)
* `group` — optional; a named group for the link's nodes

Pass the links as objects, or map the columns of an {api:anychart.data#set}anychart.data.set(){api} with {api:anychart.data.Set#mapAs}mapAs(){api}:

```
// create data: requests between the departments of a company, with a group column
var dataSet = anychart.data.set([
  ["Sales", "Marketing", 9, "Commercial"],
  ["Sales", "Finance", 16, "Corporate"],
  ["Finance", "HR", 5, "Corporate"],
  ["Support", "Sales", 14, "Service"],
  ["Support", "Marketing", 6, "Service"],
  ["Marketing", "HR", 3, "Commercial"]
]);
// map the columns the chart needs: from, to, weight and group
var mapping = dataSet.mapAs({from: 0, to: 1, weight: 2, group: 3});

var chart = anychart.arcDiagram(mapping);
```

In the sample below, the links come from a mapped data set, unlike the [Quick Start](#quick_start) sample, which passes them as objects:

{sample}BCT\_Arc\_Diagram\_02{sample}

### Nodes

A node is a shape on the node line; its shape and size are set in [Node Shape](#node_shape). The chart creates one node for every distinct name in the `from` and `to` fields of the [data](#data), and the weight of a node is the sum of the weights of its links. Set the nodes with the {api:anychart.charts.ArcDiagram#node}node(){api} method.

A node has three [states](../Common_Settings/Interactivity/States): **normal**, **hovered** when you point at it (its links are highlighted too), and **selected** when you click it. Ctrl/Cmd + click or Shift + click selects several nodes, and the same gesture on a node that is already selected takes it back out of the selection; a click on the empty area clears the selection. These gestures come from the {api:anychart.charts.ArcDiagram#interactivity}interactivity(){api} settings of the chart — see [General Settings](General_Settings).

#### Node Shape

A node is drawn as a circle whose size follows its weight, so the heaviest node is the largest one. To draw the nodes as rectangles instead, pass `"rectangle"` to `shape()` of `node()`; a rectangle takes its size along the node line from `width()` and across it from `height()`.

To keep the weighted sizes inside a range, call `minNodeSize()` and `maxNodeSize()`:

```
// keep the weighted sizes between the two bounds
chart.minNodeSize(10);
chart.maxNodeSize(16);
```

In the sample below, the radios switch the shape and the sliders set the two bounds:

{sample}BCT\_Arc\_Diagram\_13{sample}

#### Node Labels

Node [labels](../Common_Settings/Labels) show the node name and are drawn wherever there is room for them. Set the base settings with the {api:anychart.core.StateSettings#labels}labels(){api} method of the normal state; the hovered and selected states override the settings you give them and inherit the rest. Pointing at a link highlights the labels of both nodes it connects, so both of them take the hovered settings.

The labels are drawn straight. To turn them, call {api:anychart.core.ui.LabelsFactory#rotation}rotation(){api} with the angle you want. Font settings are available too, and each state restyles the labels it owns:

```
// node labels: blue
chart.node().normal().labels().fontColor("#1976d2");

// the label of the node under the pointer, and of a selected node
chart.node().hovered().labels().fontColor("#0b1220");
chart.node().selected().labels().fontColor("#d32f2f");
```

When two labels would collide, the chart moves one of them into a free lane further from the node line and draws a connector line back to its node. The connector lines are thin and grey by default; the {api:anychart.core.ui.LabelsFactory#connectorStroke}connectorStroke(){api} method restyles them, and `"none"` removes them.

To decide what becomes of a label that fits in no lane, call `overflow()`: `"hide"`, the default, drops it, and `"stack"` keeps it by opening another lane. To cap how many labels the chart places, call `maxCount()` — the heaviest nodes keep theirs. In the `"hide"` mode, `connectorMaxLength()` bounds the connector line as well: a label that would need a longer one is left out. These settings belong to the layout, so they are set once, on the labels of the normal state:

```
// cap how many node labels the chart places
chart.node().labels().maxCount(24);
// draw the connector lines in the label color
chart.node().normal().labels().connectorStroke("#1976d2", 1);
```

In the sample below, the node labels and their connector lines are blue; one slider caps how many labels the chart places, the other turns them:

{sample}BCT\_Arc\_Diagram\_03{sample}

#### Node Colors

A node takes its color from the chart [palette](../Appearance_Settings/Palettes). To set your own palette, use the {api:anychart.charts.ArcDiagram#palette}palette(){api} method. To style the states, use the {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} methods:

```
// states of the nodes
chart.node().normal().fill("#5b8ff9");
chart.node().normal().stroke("#ffffff", 1);
chart.node().hovered().stroke("#1b2740", 2);
chart.node().selected().stroke("#0b1220", 3);

// select two nodes in code
chart.select(["Sales", "Finance"]);
```

In the sample below, the nodes are blue with a white outline, and the Sales and Finance nodes are selected from code:

{sample}BCT\_Arc\_Diagram\_04{sample}

#### Node Tooltip

To set the [tooltip](../Common_Settings/Tooltip) of the nodes, use `node().tooltip()`:

```
// the tooltip of a node: its requests and connections
chart.node().tooltip().titleFormat("Department: {%name}");
chart.node().tooltip().format("Requests: {%weight}\nConnections: {%connections}");
```

In the sample below, hover over a node to see its requests and connections in the tooltip:

{sample}BCT\_Arc\_Diagram\_05{sample}

### Links

A link connects two nodes. Each row of the [data](#data) makes one link, from the `from` node to the `to` node, and the `weight` of the row sets its thickness unless you set one yourself (see [Link Thickness](#link_thickness)). Set the links with the {api:anychart.charts.ArcDiagram#link}link(){api} method.

Like [nodes](#nodes), a link has three states: **normal**, **hovered** when you point at it, and **selected** when you click it. Selecting a link also highlights the two nodes at its ends and fades the other links, so the selected connection stands out. The gestures are the ones described for [nodes](#nodes) and come from the same {api:anychart.charts.ArcDiagram#interactivity}interactivity(){api} settings.

#### Link Thickness

By default, the thickness of a link is proportional to its weight. To set the thickness, use the `thickness()` method of the normal, hovered, or selected state of `link()`. It accepts a number, which gives every link the same thickness, or `null`, which returns to the weight. The hovered and selected states inherit the thickness of the normal state unless you set their own.

To set the thickness from the data, pass a function: it is called for each link and returns the thickness of that link.

```
// the same thickness for every link, thicker under the pointer and when selected
chart.link().normal().thickness(2);
chart.link().hovered().thickness(6);
chart.link().selected().thickness(4);
```

```
// a thickness of its own for every link, from its weight
function thicknessFromWeight() {
  return this.value / 4;
}
```

In the sample below, the radios switch the thickness between a number, the weight, and a function; hover over a link or click it to see the thickness of the hovered and selected states:

{sample}BCT\_Arc\_Diagram\_14{sample}

#### Link Labels

Link [labels](../Common_Settings/Labels) are hidden by default. Turning them on shows a label on every link at once, which suits a diagram with few links; on a busy diagram the [link tooltip](#link_tooltip) identifies a link better. On a diagram large enough to be simplified (see [Data Volume](#data_volume)), only the links that are actually drawn carry labels. A short format keeps the labels readable:

```
// show the weight of each link
chart.link().normal().labels().enabled(true);
chart.link().normal().labels().format("{%value}");
```

In the sample below, each link carries its weight:

{sample}BCT\_Arc\_Diagram\_06{sample}

#### Link Colors

The {api:anychart.charts.ArcDiagram#colorMode}colorMode(){api} method sets the base color of the links:

* `"source"` (default) — a link takes the color of its source (`from`) node
* `"target"` — a link takes the color of its target (`to`) node
* `"gradient"` — the link blends from the source color to the target color. The {api:anychart.charts.ArcDiagram#reverseGradient}reverseGradient(){api} method flips the blend direction

The mode colors the nodes as well: in the gradient mode every node takes a gradient fill of its own, while the other two modes leave the nodes their [palette](#node_colors) colors. It works on a chart that is already drawn:

```
// blend each link from the color of its source node to the color of its target node
chart.colorMode("gradient");
```

To style the states of the links, use the {api:anychart.core.StateSettings#fill}fill(){api} method. If you derive the state fills from `sourceColor`, a link keeps its own color and only becomes darker:

```
// link states: a link keeps its own color and only becomes darker
chart.link().hovered().fill(function () {
  return anychart.color.darken(this.sourceColor, 0.2);
});
chart.link().selected().fill(function () {
  return anychart.color.darken(this.sourceColor, 0.4);
});
```

Use the buttons in the sample below to compare the color modes, and hover or click a link to see its state color:

{sample}BCT\_Arc\_Diagram\_07{sample}

#### Link Tooltip

Links have a [tooltip](../Common_Settings/Tooltip) of their own. By default, its title is the two node names joined by an arrow, and its body is the weight of the link. To set your own text, use `link().tooltip()`:

```
// the tooltip of a link: a sentence built from its tokens
chart.link().tooltip().titleFormat("{%from} -> {%to}");
chart.link().tooltip().format("{%value} requests from {%from} to {%to}");
```

In the sample below, the link tooltip puts the weight and the two departments into a sentence:

{sample}BCT\_Arc\_Diagram\_08{sample}

#### Data Volume

A diagram with a great many links is drawn in a simplified form. When the data holds more links than {api:anychart.charts.ArcDiagram#maxLinksRendered}maxLinksRendered(){api} allows, the chart draws the heaviest ones and leaves the rest out. Every node keeps at least one of its links, and a link that is already selected is never left out, so the setting is a target rather than a hard ceiling. The data itself and the weights of the nodes are untouched.

Nothing is reported in the console when this happens. Read the result back with {api:anychart.charts.ArcDiagram#isSimplified}isSimplified(){api} and {api:anychart.charts.ArcDiagram#getRenderedLinksCount}getRenderedLinksCount(){api}, and pass `0` to draw every link:

```
// draw only the heaviest links
chart.maxLinksRendered(50);
```

In the sample below, drag the slider to change the limit and watch how many links the chart actually draws:

{sample}BCT\_Arc\_Diagram\_09{sample}

### Layout

By default the nodes sit in a row at the bottom of the chart and the links curve upward. The {api:anychart.charts.ArcDiagram#layout}layout(){api} method rotates that: with `"vertical"` the nodes form a column and the links curve to the right. A value that is neither `"horizontal"` nor `"vertical"` is discarded without an error and the chart falls back to `"horizontal"`, so a misspelled value silently un-rotates a vertical chart.

The {api:anychart.charts.ArcDiagram#reverseArcs}reverseArcs(){api} method flips the links to the other side of the node line. It takes a boolean, `false` by default, and `true` curves the links down in the horizontal layout and to the left in the vertical one.

```
// place the nodes in a column; the links curve to the right
chart.layout("vertical");

// apply the chosen layout: the chart redraws itself
function setLayout(layout, reverse) {
  chart.layout(layout);
  chart.reverseArcs(reverse);
}
```

Both methods work on a chart that is already drawn. Use the buttons in the sample below to rotate the layout and flip the links:

{sample}BCT\_Arc\_Diagram\_10{sample}

### Placement

The following methods place the nodes and the links:

* {api:anychart.charts.ArcDiagram#nodesSpan}nodesSpan(){api} — how much of the node line the row of nodes takes up. A number is a length in pixels, a string such as `"60%"` is a share of the line (`"85%"` by default), and a share above `100%` is clamped to the full line. Whatever is left over becomes the gaps between the nodes, so this is the method that decides how far apart they sit
* {api:anychart.charts.ArcDiagram#curvature}curvature(){api} — the height of the links: values below 1 flatten them, values above 1 make them taller, until the links reach the plot edge and stop growing (1 by default)

```
// give the row of nodes most of the node line
chart.nodesSpan("85%");

// set the height of the links and curve them below the node line
chart.curvature(0.8);
chart.reverseArcs(true);

// spread the nodes over more or less of the node line: the chart redraws itself
function changeNodesSpan(value) {
  chart.nodesSpan(value + "%");
  document.getElementById("nodesSpanValue").value = value + "%";
}
```

All of them work on a chart that is already drawn. Drag the sliders in the sample below to see what each one changes; the links stay below the node line:

{sample}BCT\_Arc\_Diagram\_11{sample}

### Sorting

The order of the nodes has a big effect on how readable an Arc diagram is. The {api:anychart.charts.ArcDiagram#sortOrder}sortOrder(){api} method arranges them. The first node sits at the left end of the node line, or at the top of it in the vertical [layout](#layout); the rest follow along the line:

* `"name"` (default) — alphabetically by node name
* `"weight"` — by the total flow through the node, the largest first
* `"group"` — by the `group` field of the [data](#data), in alphabetical order of the group names

Nodes with the same weight, or in the same group, are placed alphabetically by name.

Instead of a string, you can pass your own compare function. It works like a compare function for `Array.sort()`. It receives two node objects. Each node has fields like `id`, `weight`, and `group`.

```
// order the nodes by their total flow instead of by name
chart.sortOrder("weight");

// keep the nodes in the order they appear in the data: a comparator
function byDataOrder(node1, node2) {
  return dataOrder[node1.id] - dataOrder[node2.id];
}

// apply the chosen order: the chart redraws itself
function changeSortOrder(value) {
  chart.sortOrder(value == "data" ? byDataOrder : value);
}
```

Every order works on a chart that is already drawn. Use the buttons in the sample below to compare them; the node colors follow the `group` field, so the group order shows its clusters:

{sample}BCT\_Arc\_Diagram\_12{sample}

