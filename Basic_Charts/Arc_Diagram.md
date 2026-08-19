{:index 1}
# Arc Diagram

## Overview

An Arc diagram shows connections between items. Each item is a node: a small bar on one shared line, the node line. Each link between two nodes is drawn as an arc on one side of the node line.

The height of an arc depends on the distance between its two nodes. The thickness of an arc shows the weight of the link. The length of a node bar shows the total flow through that node.

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

// set the chart title and separate it from the diagram
chart.title("Arc Diagram: Basic Sample");
chart.title().padding(0, 0, 20, 0);

// give the nodes room: wider bars and more spacing between them
chart.nodeWidth(30);
chart.nodeSpacing(90);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

In the sample below, the data rows are drawn as arcs above the row of department nodes:

{sample}BCT\_Arc\_Diagram\_01{sample}

## General Settings

AnyChart has many settings that work the same way for all chart types. This includes the Arc diagram, for example its legend and interactivity settings.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Pass data to the {api:anychart#arcDiagram}anychart.arcDiagram(){api} chart constructor or to the {api:anychart.charts.ArcDiagram#data}data(){api} method. Each row describes one link with three data fields:

* `from` — the name of the source node
* `to` — the name of the target node
* `weight` — the weight of the link (sets the thickness of the arc)
* `group` — optional; a named group for the link's nodes

Pass the links as objects, or map the columns of an {api:anychart.data#set}anychart.data.set(){api} with {api:anychart.data.Set#mapAs}mapAs(){api}:

```
// create data: requests between the departments of a company, with a group column
var dataSet = anychart.data.set([
  ["Sales", "Marketing", 9, "Commercial"],
  ["Sales", "Finance", 16, "Corporate"],
  ["Finance", "HR", 5, "Corporate"]
]);
// map the columns the chart needs: from, to, weight and group
var mapping = dataSet.mapAs({from: 0, to: 1, weight: 2, group: 3});

var chart = anychart.arcDiagram(mapping);
```

In the sample below, the chart is built from a mapped data set instead of an array of objects:

{sample}BCT\_Arc\_Diagram\_02{sample}

### Color Mode

The color of each node comes from the chart [palette](../Appearance_Settings/Palettes). Set your own with the {api:anychart.charts.ArcDiagram#palette}palette(){api} method. The {api:anychart.charts.ArcDiagram#colorMode}colorMode(){api} method colors the arcs:

* `"source"` (default) — an arc takes the color of its source (`from`) node
* `"target"` — an arc takes the color of its target (`to`) node
* `"gradient"` — the arc blends from the source color to the target color. The {api:anychart.charts.ArcDiagram#reverseGradient}reverseGradient(){api} method flips the blend direction

```
// one palette color per node
chart.palette(["#5b8ff9", "#61ddaa", "#65789b", "#f6bd16", "#7262fd"]);

// blend each arc from the color of its source node to the color of its target node
chart.colorMode("gradient");

// apply the chosen color mode: the chart redraws itself
function changeColorMode(value) {
  chart.colorMode(value == "reversed" ? "gradient" : value);
  chart.reverseGradient(value == "reversed");
}
```

The mode works on a chart that is already drawn. Use the buttons in the sample below to compare all four results:

{sample}BCT\_Arc\_Diagram\_03{sample}

### Orientation

By default, the nodes sit in a row at the bottom of the chart. The arcs curve upward. The {api:anychart.charts.ArcDiagram#orientation}orientation(){api} method rotates the layout. With `"vertical"`, the nodes form a column and the arcs curve to the right. The {api:anychart.charts.ArcDiagram#arcDirection}arcDirection(){api} method flips the arcs to the other side of the node line. For the horizontal orientation, pass `"down"`. For the vertical one, pass `"left"`. This curves the arcs the other way. If you do not set it, the arcs curve up in the horizontal orientation and to the right in the vertical one.

```
// place the nodes in a column; the arcs curve to the right
chart.orientation("vertical");

// apply the chosen layout: the chart redraws itself
function setLayout(orientation, direction) {
  chart.orientation(orientation);
  chart.arcDirection(direction);
}
```

Both methods work on a chart that is already drawn. Use the buttons in the sample below to rotate the layout and flip the arcs:

{sample}BCT\_Arc\_Diagram\_04{sample}

### Node and Arc Geometry

The following methods adjust the geometry of the diagram:

* {api:anychart.charts.ArcDiagram#nodeWidth}nodeWidth(){api} — the thickness of the node bars, in pixels (20 by default)
* {api:anychart.charts.ArcDiagram#nodeSpacing}nodeSpacing(){api} — the gap between neighboring nodes, in pixels (30 by default)
* {api:anychart.charts.ArcDiagram#curvature}curvature(){api} — the height of the arcs: values below 1 flatten them, values above 1 make them taller (1 by default)

```
// make the node bars bigger and spread them wider
chart.nodeWidth(30);
chart.nodeSpacing(90);

// make the arcs taller and curve them below the node line
chart.curvature(1.5);
chart.arcDirection("down");

// resize the node bars: the chart redraws itself
function changeNodeWidth(value) {
  chart.nodeWidth(value);
  document.getElementById("nodeWidthValue").value = value;
}
```

All three methods work on a chart that is already drawn. Drag the sliders in the sample below to see what each one changes; the arcs stay below the node line:

{sample}BCT\_Arc\_Diagram\_05{sample}

### Sorting

The order of the nodes has a big effect on how readable an Arc diagram is. The {api:anychart.charts.ArcDiagram#sortOrder}sortOrder(){api} method arranges them:

* `"name"` (default) — alphabetically by node name
* `"weight"` — by the total flow through the node, the largest first
* `"group"` — grouped by the `group` field of the [data](#data)

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

{sample}BCT\_Arc\_Diagram\_06{sample}

### Nodes

Set the node bars and their [labels](../Common_Settings/Labels) with the {api:anychart.charts.ArcDiagram#node}node(){api} method in three [states](../Common_Settings/Interactivity/States): **normal**, **hovered**, and **selected**. The {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} methods work in each state. Label settings come from the normal state only. So set them with the {api:anychart.core.StateSettings#labels}labels(){api} method of the normal state.

A node is hovered when you point at it. Its connections are then highlighted. A node is selected when you click it. A click replaces any previous selection. Instead, Ctrl/Cmd + click or Shift + click toggles a node into or out of a multi-node selection. A plain click on the empty area clears the selection. A click there with one of these keys does nothing.

You can also select nodes in code. Both {api:anychart.charts.ArcDiagram#select}select(){api} and {api:anychart.charts.ArcDiagram#unselect}unselect(){api} accept a node name or an array of node names. select() adds those nodes to the selection. unselect() removes only those nodes. Called with no argument, select() selects every node and unselect() clears the whole selection.

Node labels show the node name and are on by default. In the horizontal orientation they are drawn at an angle. Use {api:anychart.core.ui.LabelsFactory#rotation}rotation(){api} and font settings to adjust them:

```
// states of the node bars
chart.node().normal().fill("#5b8ff9");
chart.node().normal().stroke("#ffffff", 1);
chart.node().hovered().stroke("#1b2740", 2);
chart.node().selected().stroke("#0b1220", 3);

// node labels: horizontal, bigger, dark
chart.node().normal().labels().rotation(0);
chart.node().normal().labels().fontSize(12);
chart.node().normal().labels().fontColor("#212121");

// select two nodes in code
chart.select(["Sales", "Finance"]);
```

In the sample below, the node bars are blue with a white outline, their labels are horizontal, and the Sales and Finance nodes are selected from code:

{sample}BCT\_Arc\_Diagram\_07{sample}

### Links

Set the arcs and their [labels](../Common_Settings/Labels) with the {api:anychart.charts.ArcDiagram#link}link(){api} method. Like [nodes](#nodes), it has three states. Link labels support the `{%from}`, `{%to}`, and `{%value}` [text formatter](../Common_Settings/Text_Formatters) tokens. They are hidden by default. Enable them in the normal state to show a label on every arc. Sometimes a label is moved aside to avoid overlap. It then draws a thin leader line back to its arc:

```
// states of the arcs
chart.link().hovered().fill("#1b2740");
chart.link().selected().fill("#0b1220");

// show a label on every arc
chart.link().normal().labels().enabled(true);
chart.link().normal().labels().format("{%from} -> {%to}: {%value}");
chart.link().normal().labels().fontSize(10);
```

In the sample below, the arcs carry labels with their two node names and their weight, and an arc turns dark when you hover or click it:

{sample}BCT\_Arc\_Diagram\_08{sample}

### Tooltips

Nodes and links have separate [tooltips](../Common_Settings/Tooltip), each with its own set of tokens. The node tooltip supports `{%name}`, `{%weight}`, `{%connections}`, and `{%group}`. `{%weight}` is the total flow through the node. `{%connections}` is the number of links. `{%group}` is the group of the node, or an empty string if it has none. The link tooltip supports `{%from}`, `{%to}`, `{%value}`, and `{%name}` (the source and target names joined by an arrow). By default, the link tooltip uses the same format as the node tooltip. So its `{%weight}` and `{%connections}` tokens show no value for a link. It is best to set the link tooltip yourself, as shown below:

```
// the tooltip of nodes
chart.node().tooltip().titleFormat("Department: {%name}");
chart.node().tooltip().format("Total flow: {%weight}\nConnections: {%connections}");

// the tooltip of links
chart.link().tooltip().titleFormat("{%from} -> {%to}");
chart.link().tooltip().format("Requests: {%value}");
```

You can also use a [formatting function](../Common_Settings/Text_Formatters#formatting_functions) instead of tokens. For example, you can calculate the average flow per connection:

```
// the body of the node tooltip: a formatting function
chart.node().tooltip().format(function () {
  return "Total flow: " + this.weight +
    "\nConnections: " + this.connections +
    "\nAverage per connection: " + Math.round(this.weight / this.connections);
});
```

In the sample below, the node tooltip adds the average flow per connection and the link tooltip shows the two connected departments:

{sample}BCT\_Arc\_Diagram\_09{sample}
