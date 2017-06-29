{:index 2}
# Scatter Marker Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Scatter Marker chart in AnyChart.

To learn more about scatter charts in general and how to customize them, see [Scatter Charts (Overview)](Overview). In addition, you can read the [Marker Chart](../Marker_Chart) article to learn about other available settings.

Please note that there are also [Cartesian Marker charts](../Marker_Chart).

## Quick Start

To build a Scatter Marker chart, use the {api:anychart#scatter}anychart.scatter(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#marker}marker(){api} method to create a Marker series:

```
// create a chart
chart = anychart.scatter();

// create a marker series and set the data
var series = chart.marker(data);
```

**Note:** There is also the {api:anychart#marker}anychart.marker(){api} chart constructor. When you pass your data to this constructor or call the {api:anychart.charts.Cartesian#marker}marker(){api} method after using it, a Scatter Marker chart is created. However, you can create basic Marker charts too – see [Marker Chart](../Marker_Chart).

{sample}BCT\_Scatter\_Marker\_Chart{sample}