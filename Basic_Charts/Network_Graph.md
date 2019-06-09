{:index 1.61}
# Network Graph

## Overview

A Network Graph ...

```
A network graph is a mathematical structure (graph) to show relations between points. The graph visualizes how entities are interconnected with each other. Entities are displayed as nodes (points) and the relationship between them (edges) are displayed with lines.
```

This article explains how to create a basic Network Graph as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Graph chart's characteristics:

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

// set the chart title
chart.title("Network Graph: Basic Sample");

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
* `group` (optional) - the [group](#groups) to which it belongs

For each edge, specify:

* `from` - the source node
* `to` - the destination node
* `id` (optional) - the unique indentifier

**Note 1:** It is possible to add custom fields to your data - see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

**Note 2:** You can link a pair of nodes with only one edge.

This is how working with data fields of the Network Graph looks like:

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

For the Network Graph, two layouts are available: **forced** and **fixed**. To set the layout, combine the {api:anychart.charts.Graph#layout}layout(){api} method with {api:anychart.core.graph.elements.Layout#type}type(){api}. Pass either `forced` or `fixed` as a parameter - see {api:anychart.enums.layoutType}anychart.enums.layoutType{api}:

```
chart.layout().type("fixed");
```

When the layout is forced, nodes are arranged automatically. The fixed layout allows organizing them manually: use the `x` and `y` [data](#data) fields:

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

// set the layout type
chart.layout().type("fixed");
```

{sample}BCT\_Network\_Graph\_03{sample}

#### Iteration Step

* {api:anychart.charts.Graph#layout}layout(){api}
* {api:anychart.core.graph.elements.Layout#iterationCount}iterationCount(){api}
* default: 500


Когда рисуется чарт, работает алгоритм, который группирует ноды по кластерам. Однако этот алгоритм можно остановить на любом шаге. Вот как выглядит iterationCount = 0:

```
// set the iteration step
graph2.layout().iterationCount(0);
```

{sample}BCT\_Network\_Graph\_04{sample}


### Rotation

* {api:anychart.charts.Graph#rotation}rotation(){api}
* default: 0

```
// set the rotation angle
graph2.rotation(90);
```

{sample}BCT\_Network\_Graph\_05{sample}

### Nodes

* [data](#data) fields: `node` + `id`

#### Size & Shape

* {api:anychart.charts.Graph#nodes}nodes(){api}
* {api:anychart.core.graph.elements.Node#normal}normal(){api}
* {api:anychart.core.graph.elements.Node#hovered}hovered(){api}
* {api:anychart.core.graph.elements.Node#selected}selected(){api}
* {api:anychart.core.StateSettings#height}height(){api}
* {api:anychart.core.StateSettings#width}width(){api}
* {api:anychart.core.StateSettings#shape}shape(){api}
* {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}
* [states](../Common_Settings/Interactivity/States)
* **normal**, **hover**, and **selected**


```
// set the size of nodes
chart.nodes().normal().height(40);
chart.nodes().hovered().height(55);
chart.nodes().selected().height(55);

// set the shape of nodes
chart.nodes().normal().shape("star5");
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
     normal: {height: 40, shape: "star5"},
     hovered: {height: 55, shape: "star5"},
     selected: {height: 55, shape: "star5"},
    },
    {id: "Jane"},
    {id: "Norma"},
    {id: "Frank"},
    {id: "Brett"},
    {id: "Tommy",
     normal: {height: 15, shape: "diagonal-cross"},
     hovered: {height: 20, shape: "diagonal-cross"},
     selected: {height: 20, shape: "diagonal-cross"}
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

#### Groups

* {api:anychart.charts.Graph#group}group(){api}
* {api:anychart.core.graph.elements.Group#normal}normal(){api}
* {api:anychart.core.graph.elements.Group#hovered}hovered(){api}
* {api:anychart.core.graph.elements.Group#selected}selected(){api}
* {api:anychart.core.StateSettings#height}height(){api}
* {api:anychart.core.StateSettings#width}width(){api}
* {api:anychart.core.StateSettings#shape}shape(){api}
* [states](../Common_Settings/Interactivity/States)
* **normal**, **hover**, and **selected**
* [data](#data) fields: `group`



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

```
// configure the size of nodes in groups
chart.group("family").normal().height(40);
chart.group("family").hovered().height(55);
chart.group("family").selected().height(55);
chart.group("friends").normal().height(20); 
chart.group("friends").hovered().height(27);
chart.group("friends").selected().height(27); 
chart.group("lone wolf").normal().height(15);
chart.group("lone wolf").hovered().height(20);   
chart.group("lone wolf").selected().height(20);      

// configure the shape of nodes in groups
chart.group("family").normal().shape("star5");
chart.group("friends").normal().shape("diamond");
chart.group("lone wolf").normal().shape("diagonal-cross");
```

{sample}BCT\_Network\_Graph\_08{sample}

### Edges

* [data](#data) fields: `edge` + `from`, `to`
* [Appearance](#apperance)


### Appearance

#### All Points

* [nodes](#nodes), [groups](#groups), [edges](#edges)
* {api:anychart.charts.Graph#nodes}nodes(){api}
* {api:anychart.charts.Graph#group}group(){api}
* {api:anychart.charts.Graph#edges}edges(){api}
* {api:anychart.core.StateSettings#fill}fill(){api}
* {api:anychart.core.StateSettings#stroke}stroke(){api}
* [appearance settings](../Appearance_Settings) 
* [states](../Common_Settings/Interactivity/States)
* **normal()**, **hover()**, and **selected()**


```
// configure the visual settings of nodes
chart.nodes().normal().stroke("#96a6a6", 1);
chart.nodes().hovered().stroke("#455a64", 2);
chart.nodes().selected().stroke("#455a64", 2);

// configure the visual settings of nodes in groups
chart.group("family").normal().fill("#00bfa5");
chart.group("family").hovered().fill("#00bfa5");
chart.group("family").selected().fill("#455a64");
chart.group("friends").normal().fill("#ffa000");
chart.group("friends").hovered().fill("#ffa000");
chart.group("friends").selected().fill("#455a64");
chart.group("lone wolf").normal().fill("#ff3300");
chart.group("lone wolf").hovered().fill("#ff3300");
chart.group("lone wolf").selected().fill("#455a64");

// configure the visual settings of edges
chart.edges().normal().stroke("#96a6a6", 1, "10 5", "round");
chart.edges().hovered().stroke("#455a64", 2, "10 5", "round");
chart.edges().selected().stroke("#455a64", 2);
```

{sample}BCT\_Network\_Graph\_09{sample}

#### Individual Points

It is possible to configure the appearance of each node or edge individually – use extra data fields corresponding with the methods mentioned above.

```
// create data
var data = {
  nodes: [
    {id: "Richard"},
    {id: "Larry"},
    {id: "Marta"},
    {id: "Jane",
     normal: {fill: "#ffa000", stroke: "4 #ffa000"},
     hovered: {fill: "#ffda99", stroke: "4 #ffda99"},
     selected: {fill: "#ffa000", stroke: "4 #ffa000"}
    },
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
     normal: {stroke: {
                        color: "#ffa000",
                        thickness: "4",
                        dash: "10 5",
                        lineJoin: "round"
                      }
     },
     hovered: {stroke: {
                         color: "#ffda99",
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

{sample}BCT\_Network\_Graph\_10{sample}

#### Custom Images

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

{sample}BCT\_Network\_Graph\_11{sample}

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of labels on the whole chart, combine the {api:anychart.charts.Graph#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To change the text of tooltips, do the same with the {api:anychart.charts.Graph##tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

Please note that you can adjust the labels and tooltips of [nodes](#nodes), [groups](#groups), and [edges](#edges). Access them by using the following methods: {api:anychart.charts.Graph#nodes}nodes(){api}, {api:anychart.charts.Graph#group}group(){api}, {api:anychart.charts.Graph#edges}edges(){api}.

Here is the list of tokens that work with the Network Graph:

* `{%id}`
* `{%group}`
* `{%from}`
* `{%to}`
* `{%type}`

Also, you can always add a custom field to your data and use a custom token corresponding to it.

This sample shows how to work with tokens. Along with regular tokens, a custom token *{%last_name}* is used.

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
* `siblings`
* `type`

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

**Note:** siblings: все ноды, которые связаны с данной через одно ребро

The sample below demonstrates how to work with formatting functions. Along with regular fields, a custom field *last_name* is used:

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
```

```
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

#### Methods

* {api:anychart.charts.Graph#zoomIn}zoomIn(){api}
* {api:anychart.charts.Graph#zoomOut}zoomOut(){api}
* {api:anychart.charts.Graph#zoom}zoom(){api} = {api:anychart.charts.Graph#zoomIn}zoomIn(){api} + {api:anychart.charts.Graph#zoomOut}zoomOut(){api}
* {api:anychart.charts.Graph#move}move(){api}
* {api:anychart.charts.Graph#fit}fit(){api}
* [Chart Behavior](#chart_behavior)


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
// fit the chart to the page
chart.fit();  
```

{sample}BCT\_Network\_Graph\_14{sample}

#### Zoom Control Panel

* [Zoom Controls](../Common_Settings/UI_Controls/Zoom_Controls)

The Zoom Control Panel requires adding the [Common UI](../Quick_Start/Modules#common_ui) module:

```
<script src="https://cdn.anychart.com/releases/DVF-2987-graph/js/anychart-ui.min.js"></script>
```

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css?hcode=a0c21fc77e1449cc86299c5faa067dc4"/> 
```

Also, you should reference the `anychart-ui.min.css` and `anychart-font.min.css` files:

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/DVF-2987-graph/fonts/css/anychart-font.min.css"/>
```

Then combine the {api:anychart.ui#zoom}zoom(){api} method with {api:anychart.ui.Zoom#target}target(){api} and {api:anychart.ui.Zoom#render}render(){api} to create the panel:

```
// add a zoom control panel
var zoomController = anychart.ui.zoom();
zoomController.target(chart);
zoomController.render();
```

{sample}BCT\_Network\_Graph\_15{sample}

### Behavior

{api:anychart.charts.Graph#enabled}enabled(){api} - единств способ запретить сдвигание чарта мышкой

#### Chart Behavior

* {api:anychart.charts.Graph#interactivity}interactivity(){api}
* {api:anychart.core.graph.elements.Interactivity#scrollOnMouseWheel}scrollOnMouseWheel(){api}
* {api:anychart.core.graph.elements.Interactivity#zoomOnMouseWheel}zoomOnMouseWheel(){api}


```
// allow zooming with the mouse wheel
chart.interactivity().zoomOnMouseWheel(true);
```

```
// allow scrolling with the mouse wheel
chart.interactivity().scrollOnMouseWheel(true);
```

{sample}BCT\_Network\_Graph\_16{sample}

#### Node Behavior

* [nodes](#nodes)
* {api:anychart.charts.Graph#interactivity}interactivity(){api}
* {api:anychart.core.graph.elements.Interactivity#nodes}nodes(){api} - перемещение нод относительно друг друга
* {api:anychart.core.graph.elements.Interactivity#magnetize}magnetize(){api} - aligning nodes


```
// allow moving nodes
chart.interactivity().nodes(false);
```

{sample}BCT\_Network\_Graph\_17{sample}

```
// enable the node alignment
chart.interactivity().magnetize(true);
```

{sample}BCT\_Network\_Graph\_18{sample}

#### Edge Behavior

* [edges](#edges)
* {api:anychart.charts.Graph#interactivity}interactivity(){api}
* {api:anychart.core.graph.elements.Interactivity#hoverGap}hoverGap(){api} - перемещение нод относительно друг друга
* {api:anychart.core.graph.elements.Interactivity#edges}edges(){api} - это касается рисования ребер


```
// set the hover gap of edges
graph2.interactivity().hoverGap(30);    
```

{sample}BCT\_Network\_Graph\_19{sample}