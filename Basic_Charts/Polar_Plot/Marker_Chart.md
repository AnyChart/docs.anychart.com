{:index 2}
# Polar Marker Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Polar Marker chart in AnyChart.

To learn more about polar charts in general and how to customize them, see [Polar Charts (Overview)](Overview). In addition, you can read the [Marker Chart](../Marker_Chart) article to learn about other available settings.

## Quick Start

To build a Polar Marker chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#marker}marker(){api} method to create a Marker series:

```
// create a chart
chart = anychart.polar();

// create a marker series and set the data
var series = chart.marker(data);
```

{sample}BCT\_Polar\_Marker\_Chart{sample}