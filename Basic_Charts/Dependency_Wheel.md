{:index 1}
# Dependency Wheel

## Overview

A Dependency wheel is a round diagram of flows. The nodes sit as arcs around the wheel. Each link between two nodes is drawn as a ribbon. The ribbon joins the two node arcs.

The length of a node arc shows the total flow through that node. The thickness of a ribbon shows the weight of the link. This type is also called a chord diagram. That is because its ribbons are also called chords.

It works well for flows inside a closed system. Some examples are imports and exports, energy flows, or links between software packages. If your flow moves in stages from sources to end points, a [Sankey diagram](Sankey_Diagram) can be the better choice. If you want to show the same links along a straight line, use an [Arc diagram](Arc_Diagram).

This article shows how to make a basic Dependency wheel. It also shows how to set options that are special to this type. The table below gives a short overview of the Dependency wheel's features:

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

The Dependency wheel needs the [Core](../Quick_Start/Modules#core) and [Dependency Wheel](../Quick_Start/Modules#dependency_wheel) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-dependency-wheel.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To make a Dependency wheel, use the {api:anychart#dependencyWheel}anychart.dependencyWheel(){api} chart constructor. Each data row is a link between two nodes. AnyChart builds the nodes on its own from the `from` and `to` fields:

```
// create data: weekly flights between the cities
var data = [
  {from: "Paris", to: "Tokyo", weight: 18},
  {from: "Paris", to: "NYC", weight: 14},
  {from: "Paris", to: "Dubai", weight: 8},
  {from: "Tokyo", to: "NYC", weight: 10},
  {from: "Tokyo", to: "Dubai", weight: 5},
  {from: "NYC", to: "Cairo", weight: 6},
  {from: "Dubai", to: "Cairo", weight: 4}
];

// create a dependency wheel and set the data
var chart = anychart.dependencyWheel(data);

// set the chart title and separate it from the wheel
chart.title("Dependency Wheel: Basic Sample");
chart.title().padding(0, 0, 20, 0);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Dependency\_Wheel\_01{sample}

## General Settings

AnyChart has many settings that work the same way for all chart types. The Dependency wheel uses them too, for example its interactivity settings.

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Pass the data to the {api:anychart#dependencyWheel}anychart.dependencyWheel(){api} chart constructor or to the {api:anychart.charts.DependencyWheel#data}data(){api} method. Each row describes one link with three data fields:

* `from` — the name of the source node
* `to` — the name of the target node
* `weight` — the weight of the link (sets the thickness of the ribbon)

The same node name can appear in the `from` field of one row and in the `to` field of another. This is normal: it is still one node, and it is both a source and a target. Its arc shows the total of its incoming and outgoing flows. In the sample below, `Tokyo` works this way: its arc covers the flights arriving from `Paris` together with those departing to `NYC` and `Dubai`.

You can pass each link as an object. Or you can map the columns of an {api:anychart.data#set}anychart.data.set(){api} with {api:anychart.data.Set#mapAs}mapAs(){api}. Mapping is what you want when the data arrives as a table that holds more than the chart needs: name the columns to read, and the rest are ignored. The table below carries the airline and the aircraft type as well, and only three of its five columns are mapped:

```
// the route table as it comes from the airline: the chart needs only
// three of its five columns
var dataSet = anychart.data.set([
  ["AeroLine", "Paris", "Tokyo", 18, "B787"],
  ["AeroLine", "Paris", "NYC", 14, "A350"],
  ["SkyJet", "Tokyo", "NYC", 10, "B777"]
]);
// map the columns the chart needs: from, to and weight
var mapping = dataSet.mapAs({from: 1, to: 2, weight: 3});

var chart = anychart.dependencyWheel(mapping);
```

{sample}BCT\_Dependency\_Wheel\_02{sample}

### Color Mode

The color of each node comes from the chart [palette](../Appearance_Settings/Palettes). Set your own palette with the {api:anychart.charts.DependencyWheel#palette}palette(){api} method. The {api:anychart.charts.DependencyWheel#colorMode}colorMode(){api} method sets the color of the ribbons:

* `"source"` (default) — a ribbon takes the color of its source (`from`) node
* `"target"` — a ribbon takes the color of its target (`to`) node
* `"gradient"` — a ribbon blends from the source color to the target color. The {api:anychart.charts.DependencyWheel#reverseGradient}reverseGradient(){api} method flips the direction of the blend

Both methods work on a chart that is already drawn, so a control can switch the mode without rebuilding the chart. Use the buttons in the sample below to compare all four results:

```
// set a custom palette for the nodes
chart.palette([
  "#5b8ff9", "#61ddaa", "#65789b", "#f6bd16",
  "#7262fd", "#78d3f8", "#9661bc", "#f6903d"
]);

// blend each ribbon from its source color to its target color
chart.colorMode("gradient");

// apply the chosen color mode: the chart redraws itself
function changeColorMode(value) {
  chart.colorMode(value == "reversed" ? "gradient" : value);
  chart.reverseGradient(value == "reversed");
}
```

{sample}BCT\_Dependency\_Wheel\_03{sample}

### Wheel Geometry

These methods change the geometry of the wheel:

* {api:anychart.charts.DependencyWheel#startAngle}startAngle(){api} — rotates the whole wheel, in degrees (0 by default)
* {api:anychart.charts.DependencyWheel#padAngle}padAngle(){api} — the angular gap between node arcs that sit next to each other, in radians (0.02 by default)
* {api:anychart.charts.DependencyWheel#nodeWidth}nodeWidth(){api} — the thickness of the node arcs, in pixels (15 by default)

All three take effect on a chart that is already drawn. Drag the sliders in the sample below to see what each one changes:

```
// rotate the whole wheel a quarter-turn
chart.startAngle(90);

// widen the gaps between the node arcs (in radians)
chart.padAngle(0.06);

// make the node arcs thicker
chart.nodeWidth(30);

// rotate the wheel: the chart redraws itself
function changeStartAngle(value) {
  chart.startAngle(value);
  document.getElementById("startAngleValue").value = value;
}
```

{sample}BCT\_Dependency\_Wheel\_04{sample}

### Sorting

The {api:anychart.charts.DependencyWheel#sortOrder}sortOrder(){api} method sets the order of the node arcs around the wheel:

* `"desc"` (default) — by the total flow through the node, the largest first
* `"asc"` — the smallest first
* `"none"` — in the order the nodes appear in the data. Set this value before the first {api:anychart.charts.DependencyWheel#draw}draw(){api}: on a chart that is already drawn it keeps the order of the previous sorting. Note: if the node names are numbers written as text, such as `"10"` or `"2"`, they are placed in number order, from smallest to largest, instead
* a function — your own compare function that sorts the node arcs, like the callback passed to `Array.sort`

The `"asc"` and `"desc"` values and a compare function all work on a chart that is already drawn. So a compare function is the way to bring back the order of the data on a live chart: build it from the positions of the nodes in your data, as the sample below does.

```
// arrange the node arcs from the smallest to the largest
chart.sortOrder("asc");

// apply the chosen order: the chart redraws itself
function changeSortOrder(value) {
  // sortOrder() takes "asc", "desc", "none", or a comparator of two nodes
  chart.sortOrder(value == "data" ? byDataOrder : value);
}

// a comparator: keep the cities in the order they appear in the data
function byDataOrder(node1, node2) {
  return dataOrder[node1.id] - dataOrder[node2.id];
}
```

{sample}BCT\_Dependency\_Wheel\_05{sample}

### Nodes

Set the node arcs and their labels with the {api:anychart.charts.DependencyWheel#node}node(){api} method. The {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} methods work in each of the three [states](../Common_Settings/Interactivity/States). Labels come from the normal state only. So set them with the {api:anychart.core.StateSettings#labels}labels(){api} method of the normal state.

A node is hovered when you point at it. Hovering a node also highlights its ribbons. A node is selected when you click it. A plain click replaces any earlier selection. Ctrl/Cmd/Shift + click adds a node to a multi-node selection or removes it. It does not replace the selection. A plain click on the empty area clears the selection. Ctrl/Cmd/Shift + click on the empty area does nothing.

You can also control the selection from code. {api:anychart.charts.DependencyWheel#select}select(){api} takes a node name or an array of node names. It adds them to the selection. Call it with no arguments to select every node. {api:anychart.charts.DependencyWheel#unselect}unselect(){api} takes the same arguments and removes just those nodes from the selection. Call it with no arguments to clear the whole selection.

Node labels are on by default and show the node name. You can use these [text formatter](../Common_Settings/Text_Formatters) tokens: `{%name}`, `{%weight}`, `{%connections}` (number of links), and `{%percent}` (the node's share of the total flow). A token can also take [formatting parameters](../Common_Settings/Text_Formatters#formatting_parameters). In the sample below, `{decimalsCount:1}` limits the `{%percent}` value to one decimal. A label is one straight line of text touching the ring by default; set `labels().position("circular")` to lay it along the ring instead. By default, a label that overlaps an already drawn label is hidden. Control this with the {api:anychart.charts.DependencyWheel#dropOverlappedLabels}dropOverlappedLabels(){api} method. Turn the protection off only when the dataset is small enough for every label to fit, like the one in the sample below.

The sample also sets the width of the node arcs with the {api:anychart.charts.DependencyWheel#nodeWidth}nodeWidth(){api} method and styles the three states as one scale: the fill grows darker and the stroke heavier as the state gets more active. Deriving the state fills from `sourceColor` keeps them consistent with the palette:

```
// states of the node arcs: the fill grows darker and the stroke heavier
// as the state gets more active (normal -> hovered -> selected)
chart.node().normal().fill(function () {
  return anychart.color.lighten(this.sourceColor, 0.25);
});
chart.node().normal().stroke("#ffffff", 1);
chart.node().hovered().fill(function () {
  return this.sourceColor;
});
chart.node().hovered().stroke("#1b2740", 2);
chart.node().selected().fill(function () {
  return anychart.color.darken(this.sourceColor, 0.2);
});
chart.node().selected().stroke("#0b1220", 3);

// node labels: lay the text along the ring and add the share of the total flow
chart.node().normal().labels().position("circular");
chart.node().normal().labels().format("{%name} {%percent}{decimalsCount:1}%");

// show every label, even if some of them overlap
chart.dropOverlappedLabels(false);

// make the node arcs wider (the default is 15 px)
chart.nodeWidth(25);
```

{sample}BCT\_Dependency\_Wheel\_06{sample}

### Links

Set the ribbons with the {api:anychart.charts.DependencyWheel#link}link(){api} method. Like [nodes](#nodes), it works in three states. A ribbon is hovered when you point at it. It is selected when you click it. Hovering or selecting a node also highlights its ribbons. Hovering or selecting a ribbon also highlights its two end nodes. Link labels support these [text formatter](../Common_Settings/Text_Formatters) tokens: `{%from}`, `{%to}`, `{%value}`, and `{%name}` (the `from → to` string). They are hidden by default, and turning them on in the normal state shows a label on every ribbon at once, each one placed at the middle of its chord. That suits a wheel with few links; on a busy wheel the [tooltip](#tooltips) identifies a ribbon better, which is what the sample below uses.

The three [states](../Common_Settings/Interactivity/States) work as they do for [nodes](#nodes). Deriving the state fills from `sourceColor` keeps a ribbon in its own color while it deepens:

```
// states of the ribbons: a ribbon keeps its own color and only gets
// deeper as the state gets more active
chart.link().hovered().fill(function () {
  return anychart.color.darken(this.sourceColor, 0.1);
});
chart.link().selected().fill(function () {
  return anychart.color.darken(this.sourceColor, 0.25);
});

// the tooltip names the route and its weekly flights
chart.tooltip().titleFormat("{%from} - {%to}");
chart.tooltip().format("Weekly flights: {%value}");
```

{sample}BCT\_Dependency\_Wheel\_07{sample}

### Tooltips

Nodes and links have separate [tooltips](../Common_Settings/Tooltip), each with its own set of tokens. The node tooltip supports these tokens: `{%name}`, `{%weight}` (total flow through the node), `{%connections}` (number of links), and `{%percent}` (the node's share of the total flow). The link tooltip supports `{%from}`, `{%to}`, `{%value}`, and `{%name}` (the `from → to` string). By default, the link tooltip uses the same format as the node tooltip. So its `{%weight}` and `{%connections}` tokens show no value for a link. Set the link tooltip yourself, as shown below:

```
// the tooltip of nodes
chart.node().tooltip().titleFormat("Node: {%name}");
chart.node().tooltip().format("Total flow: {%weight}\nConnections: {%connections}");

// the tooltip of links
chart.link().tooltip().titleFormat("{%from} → {%to}");
chart.link().tooltip().format("Weight: {%value}");
```

{sample}BCT\_Dependency\_Wheel\_08{sample}
