{:index 1}
# Dependency Wheel

## Overview

A Dependency wheel is a round diagram of flows. The nodes are placed as arcs around the wheel. Each link between two nodes is drawn as a band that joins their two arcs.

The length of a node arc shows the total flow through that node. The thickness of a link shows its weight. This type is also known as a chord diagram.

It works well for flows inside a closed system. Some examples are imports and exports, energy flows, or links between software packages. If your flow moves in stages from sources to end points, a [Sankey diagram](Sankey_Diagram) may be a better choice. If you want to show the same links along a straight line, use an [Arc diagram](Arc_Diagram).

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

To make a Dependency wheel, use the {api:anychart#dependencyWheel}anychart.dependencyWheel(){api} chart constructor. Each data row is a link between two nodes. AnyChart builds the nodes automatically from the `from` and `to` fields:

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

// set the chart title
chart.title("Dependency Wheel: Basic Sample");

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
* `weight` — the weight of the link, which sets its thickness

The same node name can appear in the `from` field of one row and in the `to` field of another. It is still one node, and it works as both a source and a target. Its arc shows the total of its incoming and outgoing flows. In the sample below, `Tokyo` works this way: its arc covers the flights arriving from `Paris` together with those departing to `NYC` and `Dubai`.

You can pass each link as an object. Or you can map the columns of an {api:anychart.data#set}anychart.data.set(){api} with {api:anychart.data.Set#mapAs}mapAs(){api}. Use mapping when the data comes as a table that contains more than the chart needs: name the columns to read, and the other columns are ignored. The table below also contains the airline and the aircraft type, and only three of its five columns are mapped:

```
// the route table as it comes from the airline: five columns, three used
var dataSet = anychart.data.set([
  ["AeroLine", "Paris", "Tokyo", 18, "B787"],
  ["AeroLine", "Paris", "NYC", 14, "A350"],
  ["SkyJet", "Paris", "Dubai", 8, "A320"],
  ["SkyJet", "Tokyo", "NYC", 10, "B777"],
  ["AeroLine", "Tokyo", "Dubai", 5, "A330"],
  ["SkyJet", "NYC", "Cairo", 6, "B737"],
  ["AeroLine", "Dubai", "Cairo", 4, "A320"]
]);
// map the columns the chart needs: from, to and weight
var mapping = dataSet.mapAs({from: 1, to: 2, weight: 3});

var chart = anychart.dependencyWheel(mapping);
```

{sample}BCT\_Dependency\_Wheel\_02{sample}

### Nodes

Set the node arcs with the {api:anychart.charts.DependencyWheel#node}node(){api} method. It works in each of the three [states](../Common_Settings/Interactivity/States): normal, hovered, and selected.

A node is hovered when you point at it. Hovering a node also highlights its links. A node is selected when you click it. A plain click replaces any earlier selection. Ctrl/Cmd/Shift + click adds a node to a multi-node selection or removes it. It does not replace the selection. A plain click on the empty area clears the selection.

These gestures are the default ones, and `chart.interactivity()` changes them: {api:anychart.core.utils.Interactivity#selectionMode}selectionMode(){api} limits the selection to one node or turns it off, and {api:anychart.core.utils.Interactivity#multiSelectOnClick}multiSelectOnClick(){api} makes a plain click behave like a Ctrl + click. With `multiSelectOnClick(true)`, a plain click adds to the selection instead of replacing it, and a click on the empty area no longer clears it. Read more: [General Settings](General_Settings).

#### Node Width

The {api:anychart.charts.DependencyWheel#nodeWidth}nodeWidth(){api} method sets the thickness of the node arcs, in pixels. It takes effect on a chart that is already drawn. Drag the slider in the sample below to change it:

```
// make the node arcs thicker
chart.nodeWidth(30);
```

{sample}BCT\_Dependency\_Wheel\_03{sample}

#### Node Labels

[Labels](../Common_Settings/Labels) of the nodes are enabled by default and show the node name. Set the base settings with the {api:anychart.core.StateSettings#labels}labels(){api} method of the normal state; the hovered and selected states override the settings you give them and inherit the rest. Font settings and [text formatters](../Common_Settings/Text_Formatters) are available:

```
// add the node's share of the total flow to its label
chart.node().normal().labels().format("{%name} {%percent}{decimalsCount:1}%");
```

By default, a label is bent along the ring. To draw it as a straight line of text beside the ring instead, call `labels().position()` with the `"tangential"` parameter:

```
// opt out of the circular default: draw the node labels as straight lines beside the ring
chart.node().normal().labels().position("tangential");
```

A label that overlaps an already drawn label is hidden by default. To control this behavior, use the {api:anychart.charts.DependencyWheel#dropOverlappedLabels}dropOverlappedLabels(){api} method:

```
// show every label, even if some of them collide
chart.dropOverlappedLabels(false);
```

#### Node Colors

A node takes its color from the chart [palette](../Appearance_Settings/Palettes). To set your own palette, use the {api:anychart.charts.DependencyWheel#palette}palette(){api} method. To style the states, use the {api:anychart.core.StateSettings#fill}fill(){api} and {api:anychart.core.StateSettings#stroke}stroke(){api} methods. They accept functions. If you derive the state fills from `sourceColor`, they stay consistent with the palette:

```
// node states: the fill darkens and the stroke thickens as the state gets more active
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
```

#### Node Tooltip

To set the [tooltip](../Common_Settings/Tooltip) of the nodes, use `node().tooltip()`:

```
// the tooltip of a city, built from the node tokens
chart.node().tooltip().titleFormat("{%name}");
chart.node().tooltip().format(
  "Routes: {%connections}\nFlights a week: {%weight}\nShare of all flights: {%percent}{decimalsCount:1}%"
);
```

In the sample below, the labels are straightened out of their default curve, the state fills and strokes are derived from `sourceColor`, and the tooltip shows the node tokens:

{sample}BCT\_Dependency\_Wheel\_04{sample}

### Links

Set the links with the {api:anychart.charts.DependencyWheel#link}link(){api} method. Like [nodes](#nodes), it works in three states. A link is hovered when you point at it. It is selected when you click it. Hovering or selecting a node also highlights its links. Hovering or selecting a link also highlights its two end nodes. The click gestures and the settings that change them are the same as for [nodes](#nodes).

Link [labels](../Common_Settings/Labels) are hidden by default. Turning them on in the normal state shows a label on every link at once, each one placed at the middle of its band. This works well when there are only a few links. When there are many, use the [link tooltip](#link_tooltip) instead.

#### Link Colors

A link is drawn with a fill only, and its base color comes from [Link Color Mode](#link_color_mode). To style the states, use the {api:anychart.core.StateSettings#fill}fill(){api} method. If you derive the state fills from `sourceColor`, a link keeps its own color and only becomes darker:

```
// link states: a link keeps its own color and only deepens
chart.link().hovered().fill(function () {
  return anychart.color.darken(this.sourceColor, 0.2);
});
chart.link().selected().fill(function () {
  return anychart.color.darken(this.sourceColor, 0.4);
});
```

Hover or click a link in the sample below to see how its fill becomes darker:

{sample}BCT\_Dependency\_Wheel\_05{sample}

#### Link Color Mode

The {api:anychart.charts.DependencyWheel#colorMode}colorMode(){api} method sets the base color of the links:

* `"source"` (default) — a link takes the color of its source (`from`) node
* `"target"` — a link takes the color of its target (`to`) node
* `"gradient"` — a link blends from the source color to the target color. The {api:anychart.charts.DependencyWheel#reverseGradient}reverseGradient(){api} method flips the direction of the blend

The mode sets only the base color of the links. The nodes keep their palette colors in every mode (see [Node Colors](#node_colors)).

The mode works on a chart that is already drawn, so a control can switch it without rebuilding the chart. Use the buttons in the sample below to compare all four results:

```
// blend each link from its source color to its target color
chart.colorMode("gradient");

// apply the chosen color mode: the chart redraws itself
function changeColorMode(value) {
  chart.colorMode(value == "reversed" ? "gradient" : value);
  chart.reverseGradient(value == "reversed");
}
```

{sample}BCT\_Dependency\_Wheel\_06{sample}

#### Link Tooltip

Links have a [tooltip](../Common_Settings/Tooltip) of their own, but by default it uses the format of the [node tooltip](#node_tooltip), and node tokens show no value for a link. A tooltip set with {api:anychart.core.Chart#tooltip}chart.tooltip(){api} also applies to both nodes and links. To set the link tooltip separately, use `link().tooltip()`:

```
// the tooltip of a link names the route and its weekly flights
chart.link().tooltip().titleFormat("{%from} - {%to}");
chart.link().tooltip().format("Weekly flights: {%value}");
```

In the sample below, the state fills make a link darker and the tooltip shows the route:

{sample}BCT\_Dependency\_Wheel\_07{sample}

### Wheel Geometry

The options below set the shape of the wheel itself: where it points, how the node arcs share the circle, and how big the ring is. All of them take effect on a chart that is already drawn.

#### Orientation

{api:anychart.charts.DependencyWheel#startAngle}startAngle(){api} rotates the whole wheel, in degrees. The default is 0, which places the first node arc at the top, and positive values turn the wheel clockwise.

{api:anychart.charts.DependencyWheel#clockwise}clockwise(){api} sets the direction of the layout, `true` by default. Setting it to `false` mirrors the wheel across the start angle: the same arcs in the same sizes and with the same gaps, placed the other way round.

```
// rotate the whole wheel a quarter-turn
chart.startAngle(90);

// mirror the layout across the start angle
chart.clockwise(false);
```

In the sample below, drag the slider to rotate the wheel and switch the direction to mirror it:

{sample}BCT\_Dependency\_Wheel\_08{sample}

#### Angles

{api:anychart.charts.DependencyWheel#padAngle}padAngle(){api} sets the angular gap between node arcs that sit next to each other, in degrees. A value out of range is brought back in: a negative value is read as 0, and a value of 360 or more as just under 360. When the wheel is drawn, each gap is also capped at 180 degrees divided by the number of node arcs, so the gaps never take up more than half of the ring.

{api:anychart.charts.DependencyWheel#minAngle}minAngle(){api} sets the smallest angular size of a node arc, in degrees. The default is 0, which sizes every arc in proportion to the flow through the node. A larger value makes the smallest nodes easy to see and to point at, and the rest of the ring is still shared out in proportion. When the minimums do not all fit, they are scaled down together, so the arcs never overlap.

```
// widen the gaps between the node arcs
chart.padAngle(3);

// give the smallest node arcs a floor
chart.minAngle(10);
```

In the sample below, the sliders set the gap between the arcs and the floor under the smallest ones:

{sample}BCT\_Dependency\_Wheel\_09{sample}

#### Radius

The {api:anychart.charts.DependencyWheel#radius}radius(){api} method sets the outer radius of the ring of node arcs. A number is a size in pixels, a percent string is a share of the smaller side of the chart area. The default, `"50%"`, is also the largest ring the chart draws, so larger values change nothing: use this method to make the ring smaller and leave room for long labels or a title.

```
// shrink the ring to leave room around it
chart.radius("35%");
```

In the sample below, the slider shrinks and grows the ring:

{sample}BCT\_Dependency\_Wheel\_10{sample}

### Sorting

The {api:anychart.charts.DependencyWheel#sortOrder}sortOrder(){api} method sets the order of the node arcs around the wheel. The first arc starts at the start angle, which is the top of the wheel by default (see [Wheel Geometry](#wheel_geometry)); in the mirrored layout of `clockwise(false)` it ends there instead. The arcs that follow are placed clockwise, or counter-clockwise when the layout is mirrored:

* `"desc"` (default) — by the node weight, the total flow through the node: the largest node starts at the top, the rest follow clockwise from largest to smallest
* `"asc"` — by the node weight, from smallest to largest
* `"none"` — in the order the nodes appear in the data
* a function — your own compare function that sorts the node arcs, like the callback passed to `Array.sort`

All four forms work on a chart that is already drawn: `"none"` returns the arcs to the order of the data. A compare function gives any other order you need — it receives two nodes and reads the fields they expose, `id` and `weight`, the total flow through the node; there is no `totalFlow` field.

```
// arrange the node arcs from the smallest to the largest
chart.sortOrder("asc");

// apply the chosen order: the chart redraws itself
function changeSortOrder(value) {
  // sortOrder() also takes a comparator of two nodes
  chart.sortOrder(value == "data" ? byDataOrder : value);
}

// a comparator: keep the cities in the order they appear in the data
function byDataOrder(node1, node2) {
  return dataOrder[node1.id] - dataOrder[node2.id];
}
```

{sample}BCT\_Dependency\_Wheel\_11{sample}

