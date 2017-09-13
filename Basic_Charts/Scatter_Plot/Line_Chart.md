{:index 2}
# Scatter Line Chart

## Overview

This article explains how to create a Scatter Line chart in AnyChart.

To learn more about scatter charts in general and how to customize them, see [Scatter Charts (Overview)](Overview). In addition, you can read the [Line Chart](../Line_Chart) article to learn about other available settings.

Please note that there are also [Cartesian Line charts](../Line_Chart).

## Quick Start

To build a Scatter Line chart, use the {api:anychart#scatter}anychart.scatter(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#line}line(){api} method to create a Line series:

```
// create a chart
chart = anychart.scatter();

// create a line series and set the data
var series = chart.line(data);
```

**Note:** Unlike basic Line charts, Scatter Lines can be vertical and can cross themselves.

{sample}BCT\_Scatter\_Line\_Chart{sample}