{:index 1.61}
# Network Graph

## Overview

A Network Graph ...

```
Network graph is a mathematical structure (graph) to show relations between points. The graph visualizes how entities are interconnected with each other. Entities are displayed as nodes (points) and the relationship between them (edges) are displayed with lines.
```

This article explains how to create a basic Network Graph chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Graph chart's characteristics:

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

The Graph chart requires adding the [Core](../Quick_Start/Modules#core) and [Network Graph](../Quick_Start/Modules#network_graph) modules:

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

* `nodes`
* `edges`

... nodes:

* `id`
* optional: `x`, `y`
* optional: `group`

... edges:

* `from`
* `to`
* optional: `id`

misc:

* между парой нод поддерживается только одно ребро


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

```
// set the layout type
chart.layout().type("fixed");
```

{sample}BCT\_Network\_Graph\_03{sample}

#### Iteration Step

Когда рисуется чарт, работает алгоритм, который группирует ноды по кластерам. Однако этот алгоритм можно остановить на любом шаге. Вот как выглядит iterationCount = 0:

```
// set the iteration step
graph2.layout().iterationCount(0);
```

{sample}BCT\_Network\_Graph\_04{sample}


### Rotation

```
// set the rotation angle
graph2.rotation(90);
```

{sample}BCT\_Network\_Graph\_05{sample}

### Nodes

#### Size & Shape

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

* написать про то, что можно одно ребро сделать толще другого

### Appearance

#### All Points


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

#### Tokens

* `{%id}` (ребра и ноды)
* `{%group}`
* `{%from}`
* `{%to}`
* `{%type}`


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

* `id` (ребра и ноды)
* `type`
* `siblings`

siblings: все ноды, которые связаны с данной через одно ребро

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

* zooming
* moving
* fitting
* метод zoom() - написать, что эквивалентен zoomIn() + zoomOut()
* сослаться на раздел Zooming & Scrolling

#### Methods

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

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css?hcode=a0c21fc77e1449cc86299c5faa067dc4"/> 
```

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/DVF-2987-graph/fonts/css/anychart-font.min.css"/>
```

```
// add a zoom control panel
var zoomController = anychart.ui.zoom();
zoomController.target(chart);
zoomController.render();
```

{sample}BCT\_Network\_Graph\_15{sample}

### Behavior

* написать про метод enabled() - единств способ запретить сдвигание чарта мышкой

#### Chart Behavior

* пример: scrollOnMouseWheel() + zoomOnMouseWheel()


```
// enable the ability to zoom with the mouse wheel
chart.interactivity().zoomOnMouseWheel(true);
```

```
// enable the ability to scroll with the mouse wheel
chart.interactivity().scrollOnMouseWheel(true);
```

{sample}BCT\_Network\_Graph\_16{sample}

#### Node Behavior

* пример: nodes() - перемещение нод относительно друг друга
* пример: magnetize() - aligning nodes


```
// disable the ability to move nodes
chart.interactivity().nodes(false);
```

{sample}BCT\_Network\_Graph\_17{sample}

```
// enable the alignment of nodes
chart.interactivity().magnetize(true);
```

{sample}BCT\_Network\_Graph\_18{sample}

#### Edge Behavior

* пример: hoverGap()
* упомянуть: edges() - это касается рисования ребер


```
// set the hover gap of edges
graph2.interactivity().hoverGap(30);    
```

{sample}BCT\_Network\_Graph\_19{sample}