{:index 1.5}
# Graph Chart

## Overview

A graph chart ...

This article explains how to create a basic Graph chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Graph chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Graph Chart](../Quick_Start/Modules#graph_chart)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Graph}anychart.charts.Graph{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>?</td></tr>
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
<tr><td></td><td>[Chartopedia: Graph Chart](https://www.anychart.com/chartopedia/chart-types/graph-chart/) (?)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Graph chart requires adding the [Core](../Quick_Start/Modules#core) and [Graph Chart](../Quick_Start/Modules#graph_chart) modules:

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

```


{sample}BCT\_Graph\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Graph chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

Data for a Graph chart can be passed to the chart constructor {api:anychart#graph}anychart.graph(){api} or to the {api:}data(){api} method.

Use the following data fields:

* `.`
* `.`
* `.`


```

```

{sample}BCT\_Graph\_Chart\_012{sample}

### ?