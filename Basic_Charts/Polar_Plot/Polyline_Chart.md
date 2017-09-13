{:index 2}
# Polar Line Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Polar Polyline chart in AnyChart.

To learn more about polar charts in general and how to customize them, see [Polar Charts (Overview)](Overview).In addition, you can read the [Polyline Chart](Polyline_Chart) article to learn about other available settings.

## Quick Start

To build a Polar Polyline chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#polyline}polyline(){api} method to create a Polyline series:

```
// create a chart
chart = anychart.polar();

// create a polyline series and set the data
var series = chart.polyline(data);
```

{sample}BCT\_Polar\_Polyline\_Chart{sample}