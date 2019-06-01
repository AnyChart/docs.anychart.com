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

```

{sample}BCT\_Network\_Graph\_02{sample}

### Layout

#### Type

```

```

{sample}BCT\_Network\_Graph\_03{sample}

#### Iteration Step

Когда рисуется чарт, работает алгоритм, который группирует ноды по кластерам. Однако этот алгоритм можно остановить на любом шаге. Вот как выглядит iterationCount = 0:

```

```

{sample}BCT\_Network\_Graph\_04{sample}


### Rotation

```

```

{sample}BCT\_Network\_Graph\_05{sample}

### Nodes

#### Size & Shape

```

```

{sample}BCT\_Network\_Graph\_06{sample}

#### Individual Nodes

```

```

{sample}BCT\_Network\_Graph\_07{sample}

#### Groups

```

```

{sample}BCT\_Network\_Graph\_08{sample}

### Edges

* написать про то, что можно одно ребро сделать толще другого

### Appearance

#### All Points

(?) пример с группами:

```

```

{sample}BCT\_Network\_Graph\_09{sample}

#### Individual Points

```

```

{sample}BCT\_Network\_Graph\_10{sample}

#### Custom Images


```

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

```

{sample}BCT\_Network\_Graph\_12{sample}

#### Formatting Functions

* `id` (ребра и ноды)
* `type`
* `siblings`

siblings: все ноды, которые связаны с данной через одно ребро

```

```

{sample}BCT\_Network\_Graph\_13{sample}

### Navigation

* zooming
* moving
* fitting
* сослаться на раздел Zooming & Scrolling

просто кнопки:

```

```

{sample}BCT\_Network\_Graph\_14{sample}

кнопки как в картах:

```

```

{sample}BCT\_Network\_Graph\_15{sample}

### Behavior

* не писать про enabled()

#### Zooming & Scrolling

* scrollOnMouseWheel() + zoomOnMouseWheel()

#### Moving Nodes

* пример: nodes() (перемещение нод относительно друг друга)
* пример: hoverGap() + magnetize()

#### Drawing Edges

* упомянуть: edges()