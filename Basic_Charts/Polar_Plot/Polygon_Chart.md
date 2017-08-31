{:index 2}
# Polar Line Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Polar Polygon chart in AnyChart.

To learn more about polar charts in general and how to customize them, see [Polar Charts (Overview)](Overview). In addition, you can read the [Polygon Chart](../Polygon_Chart) article to learn about other available settings.

## Quick Start

To build a Polar Polygon chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#polygon}polygon(){api} method to create a Polygon series:

```
// create a chart
chart = anychart.polar();

// create a polygon series and set the data
var series = chart.polygon(data);
```

{sample}BCT\_Polar\_Polygon\_Chart{sample}