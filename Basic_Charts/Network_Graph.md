{:index 1.61}

# Network Graph

## Overview

Network graph is a mathematical structure (graph) to show relations between points. The graph visualizes how entities are interconnected with each other. Entities are displayed as nodes (points) and the relationship between them (edges) are displayed with lines.

## Modules

The Network Graph diagram requires adding the [Core](../Quick_Start/Modules#core) and [Network Graph](../Quick_Start/Modules#network_graph) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-graph.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Graph chart, use the {api:anychart#graph}anychart.graph(){api} chart constructor, like in the following sample:

```
// create data
var data = {
  nodes: [
    {id: 'n'}, {id: 'n1'}, {id: 'n2'}, {id: 'n3'}, {id: 'n4'}, {id: 'n5'}, {id: 'n6'},
  ],
  edges: [
    {from: 'n', to: 'n1'},
    {from: 'n', to: 'n2'},
    {from: 'n', to: 'n3'},
    {from: 'n', to: 'n4'},
    {from: 'n', to: 'n5'},
    {from: 'n', to: 'n6'},
  ]
};
// create a chart and set the data
var chart = anychart.graph(data);

// set the container id
chart.container('container')

// initiate drawing the chart  
chart.draw();
```

Here is a live sample:

{sample}BCT\_Network\_Graph\_01{sample}