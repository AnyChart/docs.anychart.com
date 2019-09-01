{:index 1.61}
# Network Graph

## Overview

A network graph is a mathematical visualization that is used to model pairwise relations between points. Points are represented as nodes (vertices) that are linked by lines (edges).

This article explains how to create a basic Network Graph as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Network Graph's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Network Graph](../Quick_Start/Modules#network_graph)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Graph}anychart.charts.Graph{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>`nodes`, `edges`, `id`, `from`, `to`</td></tr>
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
<tr><td></td><td>[Sankey Diagram](Sankey_Diagram)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Network Graph](https://www.anychart.com/chartopedia/chart-types/network-graph/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Network Graph requires adding the [Core](../Quick_Start/Modules#core) and [Network Graph](../Quick_Start/Modules#network_graph) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-graph.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Network Graph, use the {api:anychart#graph}anychart.graph(){api} chart constructor, like in the following sample:

```
// create data
var data = {
  nodes: [
    {id: "Richard"},
    {id: "Larry"},
    {id: "Marta"},
    {id: "Jane"},
    {id: "Norma"},
    {id: "Frank"},
    {id: "Brett"}
  ],
  edges: [
    {from: "Richard", to: "Larry"},
    {from: "Richard", to: "Marta"},
    {from: "Larry",   to: "Marta"},
    {from: "Marta",   to: "Jane"},
    {from: "Jane",    to: "Norma"},
    {from: "Jane",    to: "Frank"},
    {from: "Jane",    to: "Brett"},
    {from: "Brett",   to: "Frank"}
  ]
};

// create a chart and set the data
var chart = anychart.graph(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample}BCT\_Network\_Graph\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Network Graph (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data for a Network Graph can be passed to the chart constructor {api:anychart#graph}anychart.graph(){api} or to the {api:anychart.charts.Graph#data}data(){api} method.

Use the following data fields:

* `nodes` to set [nodes](#nodes)
* `edges` to set [edges](#edges)

For each node, specify:

* `id` - the unique indentifier
* `x`, `y` (optional) - the coordinates in the fixed [layout](#layout)
* `group` (optional) - the id of the [group](#groups) to which it belongs

For each edge, specify:

* `from` - the source node 
* `to` - the destination node
* `id` (optional) - the unique indentifier

**Note:** It is possible to add custom fields to your data - see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

You can link a node with several nodes, but it is impossible to link a pair of nodes with more than one edge. Also, you can create nodes with no links, like in the sample below:

```
// create data
var data = {
  nodes: [
    {id: "Richard"},
    {id: "Larry"},
    {id: "Marta"},
    {id: "Jane"},
    {id: "Norma"},
    {id: "Frank"},
    {id: "Brett"},
    {id: "Tommy"}
  ],
  edges: [
    {from: "Richard", to: "Larry"},
    {from: "Richard", to: "Marta"},
    {from: "Larry",   to: "Marta"},
    {from: "Marta",   to: "Jane"},
    {from: "Jane",    to: "Norma"},
    {from: "Jane",    to: "Frank"},
    {from: "Jane",    to: "Brett"},
    {from: "Brett",   to: "Frank"}
  ]
};

// create a chart and set the data
var chart = anychart.graph(data);
```

{sample}BCT\_Network\_Graph\_02{sample}

### Layout

#### Type

For the Network Graph, two layouts are available: **forced** (default) and **fixed**.

When the layout is forced, [nodes](#nodes) are arranged automatically. The fixed layout allows you to manually set the coordinates of each node - use the `x` and `y` [data](#data) fields:

```
// create data
var data = {
  nodes: [
    {id: "Richard", x:   0, y: 100},
    {id: "Larry",   x:  50, y: 150},
    {id: "Marta",   x: 100, y: 100},
    {id: "Jane",    x: 200, y: 100},
    {id: "Norma",   x: 250, y:  50},
    {id: "Frank",   x: 250, y: 150},
    {id: "Brett",   x: 300, y: 100},
    {id: "Tommy",   x: 400, y: 100}
  ],
  edges: [
    {from: "Richard", to: "Larry"},
    {from: "Richard", to: "Marta"},
    {from: "Larry",   to: "Marta"},
    {from: "Marta",   to: "Jane"},
    {from: "Jane",    to: "Norma"},
    {from: "Jane",    to: "Frank"},
    {from: "Jane",    to: "Brett"},
    {from: "Brett",   to: "Frank"}
  ]
};

// create a chart and set the data
chart = anychart.graph(data);
```

To set the layout, combine the {api:anychart.charts.Graph#layout}layout(){api} method with {api:anychart.core.graph.elements.Layout#type}type(){api}. Pass either `forced` or `fixed` as a parameter - see {api:anychart.enums.layoutType}anychart.enums.layoutType{api}:

```
// set the layout type
chart.layout().type("fixed");
```

This is how layouts work:

{sample}BCT\_Network\_Graph\_03{sample}

#### Iteration Step

Network Graphs are drawn with the help of a [force-directed algorithm](https://en.wikipedia.org/wiki/Force-directed_graph_drawing) that groups [nodes](#nodes) into clusters.

You can stop the drawing algorithm at any step: combine the {api:anychart.charts.Graph#layout}layout(){api} method with {api:anychart.core.graph.elements.Layout#iterationCount}iterationCount(){api}. The default number of steps is 500.

In the following sample, the iteration step of the first chart is not configured, and for the second chart it is set to 0:

```
// set the iteration step
graph2.layout().iterationCount(0);
```

{sample}BCT\_Network\_Graph\_04{sample}


### Rotation

To set the rotation angle of a Network Graph, use the {api:anychart.charts.Graph#rotation}rotation(){api} method. The angle is 0&deg; by default.

In the sample below, the rotation angle of the first chart is not configured, and for the second chart it is set to 90&deg;:

```
// set the rotation angle
graph2.rotation(90);
```

{sample}BCT\_Network\_Graph\_05{sample}

### Nodes

Nodes, or vertices, are objects that are pairwise connected with [edges](#edges) and represented as points. To set them, use the `node` and `id` fields in your [data](#data).

You can adjust the size, shape, and appearance of all nodes, of an individual node, or of a group of nodes, as explained in the subsections below. Also, you can configure their labels and tooltips - see the [Labels and Tooltips](#labels_and_tooltips) section.

#### All Nodes

You can adjust the size, shape, and [appearance](../Appearance_Settings) of all nodes on a graph - access them by using the {api:anychart.charts.Graph#nodes}nodes(){api} method.

Nodes can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.graph.elements.Node#normal}normal(){api}, {api:anychart.core.graph.elements.Node#hovered}hovered(){api}, and {api:anychart.core.graph.elements.Node#selected}selected(){api} methods.

Combine them with methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}:

* {api:anychart.core.StateSettings#height}height(){api} to set the height
* {api:anychart.core.StateSettings#width}width(){api} to set the width
* {api:anychart.core.StateSettings#shape}shape(){api} to set the shape - {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}
* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

In the following sample, there is a Network Graph with the size, shape, and appearance of nodes configured:

```
// access nodes
var nodes = chart.nodes();

// set the size of nodes
nodes.normal().height(40);
nodes.hovered().height(55);
nodes.selected().height(55);

// set the shape of nodes
nodes.normal().shape("star5");

// set the fill of nodes
nodes.normal().fill("#ffa000");
nodes.hovered().fill("white");
nodes.selected().fill("#ffa000");

// set the stroke of nodes
nodes.normal().stroke(null);
nodes.hovered().stroke("#ffa000", 3);
nodes.selected().stroke("#333333", 3);
```

{sample}BCT\_Network\_Graph\_06{sample}

#### Individual Nodes

It is possible to configure each node individually – use extra data fields corresponding with the methods mentioned above:

```
// create data
var data = {
  nodes: [
    {id: "Richard"},
    {id: "Larry"},
    {id: "Marta",
     normal:   { 
                 height: 40,
                 shape: "star5",
                 fill: "#ffa000",
                 stroke: null
               },
     hovered:  {
                 height: 55,
                 shape: "star5",
                 fill: "white",
                 stroke: "3 #ffa000"
               },
     selected: {
                 height: 55,
                 shape: "star5",
                 fill: "#ffa000",
                 stroke: "3 #333333"
               }
    },
    {id: "Jane"},
    {id: "Norma"},
    {id: "Frank"},
    {id: "Brett"},
    {id: "Tommy",
     normal:   {
                 height: 20,
                 shape: "diagonal-cross",
                 fill: "#ff3300",
                 stroke: null
               },
     hovered:  {
                 height: 27,
                 shape: "diagonal-cross",
                 fill: "white",
                 stroke: "3 #ff3300"
               },
     selected: {
                 height: 27,
                 shape: "diagonal-cross",
                 fill: "#ff3300",
                 stroke: "3 #333333"
               }
    }
  ],
  edges: [
    {from: "Richard", to: "Larry"},
    {from: "Richard", to: "Marta"},
    {from: "Larry",   to: "Marta"},
    {from: "Marta",   to: "Jane"},
    {from: "Jane",    to: "Norma"},
    {from: "Jane",    to: "Frank"},
    {from: "Jane",    to: "Brett"},
    {from: "Brett",   to: "Frank"}
  ]
};

// create a chart and set the data
var chart = anychart.graph(data);
```

{sample}BCT\_Network\_Graph\_07{sample}

#### Custom Images

The fill of a node can be set as a custom image:

```
// create data
var data = {
  nodes: [
    {id: "Richard"},
    {id: "Larry"},
    {id: "Marta"},
    {id: "Jane"},
    {id: "Norma",
     height: 60,
     fill: {
             src: "https://cdn.anychart.com/samples-data/graph/avengers/pepper.jpg"
           }
    },
    {id: "Frank"},
    {id: "Brett"},
    {id: "Tommy"}
  ],
  edges: [
    {from: "Richard", to: "Larry"},
    {from: "Richard", to: "Marta"},
    {from: "Larry",   to: "Marta"},
    {from: "Marta",   to: "Jane"},
    {from: "Jane",    to: "Norma"},
    {from: "Jane",    to: "Frank"},
    {from: "Jane",    to: "Brett"},
    {from: "Brett",   to: "Frank"}
  ]
};

// create a chart and set the data
var chart = anychart.graph(data);
```

{sample}BCT\_Network\_Graph\_08{sample}

#### Groups

You can group nodes - specify ids of groups in the `group` [data](#data) field of nodes:

```
// create data
var data = {
  nodes: [
    {id: "Richard", group: "family"},
    {id: "Larry",   group: "family"},
    {id: "Marta",   group: "family"},
    {id: "Jane",    group: "friends"},
    {id: "Norma",   group: "friends"},
    {id: "Frank",   group: "friends"},
    {id: "Brett",   group: "friends"},
    {id: "Tommy",   group: "lone wolf"}
  ],
  edges: [
    {from: "Richard", to: "Larry"},
    {from: "Richard", to: "Marta"},
    {from: "Larry",   to: "Marta"},
    {from: "Marta",   to: "Jane"},
    {from: "Jane",    to: "Norma"},
    {from: "Jane",    to: "Frank"},
    {from: "Jane",    to: "Brett"},
    {from: "Brett",   to: "Frank"}
  ]
};

// create a chart and set the data
var chart = anychart.graph(data);
```

To configure nodes in a group, first access them by using the {api:anychart.charts.Graph#group}group(){api} method with the id of the group as a parameter:

```
// access groups of nodes
var family = chart.group("family");
var friends = chart.group("friends");
var loneWolf = chart.group("lone wolf");
```

Groups can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.graph.elements.Group#normal}normal(){api}, {api:anychart.core.graph.elements.Group#hovered}hovered(){api}, and {api:anychart.core.graph.elements.Group#selected}selected(){api} methods.

Combine them with methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}:

* {api:anychart.core.StateSettings#height}height(){api} to set the height
* {api:anychart.core.StateSettings#width}width(){api} to set the width
* {api:anychart.core.StateSettings#shape}shape(){api} to set the shape - {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}
* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

In the sample below, there is a Network Graph with three groups of nodes, each with its own settings:

```
// set the size of nodes in groups
family.normal().height(40);
family.hovered().height(55);
family.selected().height(55);
friends.normal().height(20); 
friends.hovered().height(27);
friends.selected().height(27); 
loneWolf.normal().height(20);
loneWolf.hovered().height(27);   
loneWolf.selected().height(27);      

// set the shape of nodes in groups
family.normal().shape("star5");
friends.normal().shape("diamond");
loneWolf.normal().shape("diagonal-cross");

// set the fill of nodes in groups
family.normal().fill("#ffa000");
family.hovered().fill("white");
family.selected().fill("#ffa000");
friends.normal().fill("#00bfa5");
friends.hovered().fill("white");
friends.selected().fill("#00bfa5");
loneWolf.normal().fill("#ff3300");
loneWolf.hovered().fill("white");
loneWolf.selected().fill("#ff3300");

// set the stroke of nodes in groups
family.normal().stroke(null);
family.hovered().stroke("#ffa000", 3);
family.selected().stroke("#333333", 3);
friends.normal().stroke(null);
friends.hovered().stroke("#00bfa5", 3);
friends.selected().stroke("#333333", 3);
loneWolf.normal().stroke(null);
loneWolf.hovered().stroke("#ff3300", 3);
loneWolf.selected().stroke("#333333", 3);
```

{sample}BCT\_Network\_Graph\_09{sample}

### Edges

Edges are links that connect pairs of [nodes](#nodes) and are represented as lines. To set them, use the `edge`, `from`, and `to` fields in your [data](#data).

You can adjust the appearance of all edges or of an individual edge, as explained in the subsections below. Also, you can configure their labels and tooltips - see the [Labels and Tooltips](#labels_and_tooltips) section.

#### All Edges

You can adjust the [appearance](../Appearance_Settings) of all edges on a graph - access them by using the {api:anychart.charts.Graph#edges}edges(){api} method.

Edges can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.graph.elements.Edge#normal}normal(){api}, {api:anychart.core.graph.elements.Edge#hovered}hovered(){api}, and {api:anychart.core.graph.elements.Edge#selected}selected(){api} methods.

Combine them with methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke


```
// configure the visual settings of edges
chart.edges().normal().stroke("#ffa000", 2, "10 5", "round");
chart.edges().hovered().stroke("#ffa000", 4, "10 5", "round");
chart.edges().selected().stroke("#ffa000", 4);
```

{sample}BCT\_Network\_Graph\_10{sample}

#### Individual Edges

It is possible to configure each edge individually – use extra data fields corresponding with the methods mentioned above:

```
// create data
var data = {
  nodes: [
    {id: "Richard"},
    {id: "Larry"},
    {id: "Marta"},
    {id: "Jane"},
    {id: "Norma"},
    {id: "Frank"},
    {id: "Brett"},
    {id: "Tommy"}
  ],
  edges: [
    {from: "Richard", to: "Larry"},
    {from: "Richard", to: "Marta"},
    {from: "Larry",   to: "Marta"},
    {from: "Marta",   to: "Jane",
     normal: {stroke:  {
                         color: "#ffa000",
                         thickness: "2",
                         dash: "10 5",
                         lineJoin: "round"
                       }
     },
     hovered: {stroke: {
                         color: "#ffa000",
                         thickness: "4",
                         dash: "10 5",
                         lineJoin: "round"
                       }
     },
     selected: {stroke: "4 #ffa000"}
    },
    {from: "Jane",    to: "Norma"},
    {from: "Jane",    to: "Frank"},
    {from: "Jane",    to: "Brett"},
    {from: "Brett",   to: "Frank"}
  ]
};

// create a chart and set the data
var chart = anychart.graph(data);
```

{sample}BCT\_Network\_Graph\_11{sample}


### Appearance

You can configure the [appearance](../Appearance_Settings) of nodes and edges on the whole chart or of individual nodes, node groups, and edges. See the [Nodes](#nodes) and [Edges](#edges) sections to learn more.

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of labels on the whole chart, combine the {api:anychart.charts.Graph#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To change the text of tooltips, do the same with the {api:anychart.charts.Graph#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Please note that it is possible to adjust labels and tooltips of [nodes](#nodes), [groups](#groups), and [edges](#edges). Access them by using the following methods: {api:anychart.charts.Graph#nodes}nodes(){api}, {api:anychart.charts.Graph#group}group(){api}, {api:anychart.charts.Graph#edges}edges(){api}.

Here is the list of tokens that work with the Network Graph:

* `{%id}`
* `{%type}`
* `{%group}`
* `{%from}`
* `{%to}`

Also, you can always add a custom field to your data and use a custom token corresponding to it.

The following sample shows how to configure labels and tooltips and work with tokens to format their text. Along with regular tokens, a custom token *{%last_name}* is used.

```
// create data
var data = {
  nodes: [
    {id: "Richard", group: "family",    last_name: "Roe"},
    {id: "Larry",   group: "family",    last_name: "Loe"},
    {id: "Marta",   group: "family",    last_name: "Moe"},
    {id: "Jane",    group: "friends",   last_name: "Poe"},
    {id: "Norma",   group: "friends",   last_name: "Noe"},
    {id: "Frank",   group: "friends",   last_name: "Foe"},
    {id: "Brett",   group: "friends",   last_name: "Boe"},
    {id: "Tommy",   group: "lone wolf", last_name: "Toe"}
  ],
  edges: [
    {from: "Richard", to: "Larry"},
    {from: "Richard", to: "Marta"},
    {from: "Larry",   to: "Marta"},
    {from: "Marta",   to: "Jane"},
    {from: "Jane",    to: "Norma"},
    {from: "Jane",    to: "Frank"},
    {from: "Jane",    to: "Brett"},
    {from: "Brett",   to: "Frank"}
  ]
};

// create a chart and set the data
var chart = anychart.graph(data);

// enable labels of nodes
chart.nodes().labels().enabled(true);

// configure labels of nodes
chart.nodes().labels().fontSize(12);
chart.nodes().labels().fontWeight(600);
chart.nodes().labels().format("{%id}");

// configure labels of nodes in groups
chart.group("family").labels().fontColor("#00bfa5");
chart.group("friends").labels().fontColor("#ffa000");
chart.group("lone wolf").labels().fontColor("#dd2c00");
chart.group("lone wolf").labels().format("{%id}\n({%group})");

// configure tooltips of nodes
chart.nodes().tooltip().useHtml(true);
chart.nodes().tooltip().format(
  "<span style='font-weight:bold'>{%id} {%last_name}</span><br>group: {%group}"
);

// configure tooltips of edges
chart.edges().tooltip().format("{%from} -> {%to}");
```

{sample}BCT\_Network\_Graph\_12{sample}

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the following fields:

* `id`
* `type`
* `siblings`

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

**Note:** The `siblings` field allows getting an array of siblings - nodes that are connected with the given node by one edge.

The sample below demonstrates how to configure labels and tooltips and work with formatting functions to format ther text. Along with regular fields, a custom field *last_name* is used.

```
// create data
var data = {
  nodes: [
    {id: "Richard", group: "family",    last_name: "Roe"},
    {id: "Larry",   group: "family",    last_name: "Loe"},
    {id: "Marta",   group: "family",    last_name: "Moe"},
    {id: "Jane",    group: "friends",   last_name: "Poe"},
    {id: "Norma",   group: "friends",   last_name: "Noe"},
    {id: "Frank",   group: "friends",   last_name: "Foe"},
    {id: "Brett",   group: "friends",   last_name: "Boe"},
    {id: "Tommy",   group: "lone wolf", last_name: "Toe"}
  ],
  edges: [
    {from: "Richard", to: "Larry"},
    {from: "Richard", to: "Marta"},
    {from: "Larry",   to: "Marta"},
    {from: "Marta",   to: "Jane"},
    {from: "Jane",    to: "Norma"},
    {from: "Jane",    to: "Frank"},
    {from: "Jane",    to: "Brett"},
    {from: "Brett",   to: "Frank"}
  ]
};

// create a chart and set the data
var chart = anychart.graph(data);

// enable labels of nodes
chart.nodes().labels().enabled(true);

// configure labels of nodes
chart.nodes().labels().fontSize(12);
chart.nodes().labels().fontWeight(600);
chart.nodes().labels().format(function() {
  if (this.siblings.length > 2) {
    return  this.id.toUpperCase();
  } else {
    if (this.siblings.length == 0) {
      return this.id.toUpperCase() + "\n(" + this.getData("group") + ")";
    } else {
      return "";
    }
  }
});

// configure labels of nodes in groups
chart.group("family").labels().fontColor("#00bfa5");
chart.group("friends").labels().fontColor("#ffa000");
chart.group("lone wolf").labels().fontColor("#dd2c00");

// configure tooltips
chart.tooltip().useHtml(true);
chart.tooltip().format(function() {
  if (this.type == "node") {
    return "<span style='font-weight:bold'>" +
           this.id + " " + this.getData("last_name") +
           "</span><br><br>siblings: " + this.siblings.length +
           "<br>group: " + this.getData("group");
  } else {
    return this.getData("from") + " -> " + this.getData("to");
  }
});
```

{sample}BCT\_Network\_Graph\_13{sample}

### Navigation

By default, you can navigate Network Graphs with the help of the mouse - see the [Behavior](#behavior) section. Also, you can use special methods or a Zoom Control Panel, as shown in the subsections below.

#### Methods

Use the following methods to navigate the chart:

* {api:anychart.charts.Graph#zoomIn}zoomIn(){api} to zoom in
* {api:anychart.charts.Graph#zoomOut}zoomOut(){api} to zoom out
* {api:anychart.charts.Graph#zoom}zoom(){api} to zoom in and out 
* {api:anychart.charts.Graph#move}move(){api} to move the chart by given values
* {api:anychart.charts.Graph#fit}fit(){api} to fit the chart to the container


```
// zoom the chart in
chart.zoomIn();  
```

```
// zoom the chart out
chart.zoomOut();  
```

```
// move the chart by given values
chart.move(50, -50);  
```

```
// fit the chart to the container
chart.fit();  
```

This is how these methods work:

{sample}BCT\_Network\_Graph\_14{sample}

#### Zoom Control Panel

The [Zoom Control Panel](../Common_Settings/UI_Controls/Zoom_Controls) is an HTML object with three buttons that allow zooming in, zooming out, and resetting the chart.

It requires adding the [Common UI](../Quick_Start/Modules#common_ui) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-ui.min.js"></script>
```

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css?hcode=a0c21fc77e1449cc86299c5faa067dc4"/> 
```

Also, you should reference the `anychart-ui.min.css` and `anychart-font.min.css` files:

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/fonts/css/anychart-font.min.css"/>
```

Then combine the {api:anychart.ui#zoom}anychart.ui.zoom(){api} method with {api:anychart.ui.Zoom#target}target(){api} and {api:anychart.ui.Zoom#render}render(){api} to create the panel:

```
// add a zoom control panel
var zoomController = anychart.ui.zoom();
zoomController.target(chart);
zoomController.render();
```

{sample}BCT\_Network\_Graph\_15{sample}

### Behavior

By default, users have an opportunity to drag  and drop the Network Graph and its nodes and zoom it in and out with the mouse wheel.

It is possible to prevent or modify the behavior of the chart and its parts as well as configure some other behavior-related settings. You can enable the alignment of nodes, set the trigger area of edges, and optimize the performance by changing the way how edges are drawn.

#### Chart Behavior

By default, users have an opportunity to drag and drop the chart and zoom it in and out with the mouse wheel.

To modify the behavior of the chart, use the {api:anychart.charts.Graph#interactivity}interactivity(){api} method.

Combine it with the methods below and `true` / `false` as a parameter:

* {api:anychart.core.graph.elements.Interactivity#zoomOnMouseWheel}zoomOnMouseWheel(){api} to allow or prevent zooming the chart with the mouse wheel
* {api:anychart.core.graph.elements.Interactivity#scrollOnMouseWheel}scrollOnMouseWheel(){api} to allow or prevent scrolling the chart with the mouse wheel
* {api:anychart.charts.Graph#enabled}enabled(){api} to allow or prevent moving the chart


```
// allow scrolling the chart with the mouse wheel
chart.interactivity().scrollOnMouseWheel(true);
```

The following sample shows how the mouse wheel can be used:

{sample}BCT\_Network\_Graph\_16{sample}

#### Node Behavior

By default, users have an opportunity to drag and drop [nodes](#nodes) to any position on the chart. The automatic alignment of nodes is disabled.

To configure the behavior of nodes, use the {api:anychart.charts.Graph#interactivity}interactivity(){api} method.

Combine it with the methods below and `true` / `false` as a parameter:

* {api:anychart.core.graph.elements.Interactivity#nodes}nodes(){api} to allow or prevent moving nodes
* {api:anychart.core.graph.elements.Interactivity#magnetize}magnetize(){api} to enable or disable the automatic alignment of nodes

This sample shows how to prevent moving nodes:

```
// prevent moving nodes
chart.interactivity().nodes(false);
```

{sample}BCT\_Network\_Graph\_17{sample}

This is how the alignment of nodes looks like:

```
// enable the alignment of nodes
chart.interactivity().magnetize(true);
```

{sample}BCT\_Network\_Graph\_18{sample}

#### Edge Behavior

To configure the behavior of [edges](#edges), use the {api:anychart.charts.Graph#interactivity}interactivity(){api} method, combined with:

* {api:anychart.core.graph.elements.Interactivity#hoverGap}hoverGap(){api} - to set the trigger area for interacting with edges
* {api:anychart.core.graph.elements.Interactivity#edges}edges(){api} to enable or disable a special mode of drawing edges, which optimizes the performance.

In the following sample, the trigger area of edges on the first chart is not configured, and for the second chart it is set to 30. Try to hover over and select edges to see the difference.

```
// set the hover gap of edges
chart.interactivity().hoverGap(30);    
```

{sample}BCT\_Network\_Graph\_19{sample}