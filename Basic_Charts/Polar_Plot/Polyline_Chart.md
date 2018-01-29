{:index 2}
# Polyline Chart

## Overview

This article explains how to create a Polyline chart in AnyChart.

To learn more about polar charts in general and how to customize them, see [Polar Charts (Overview)](Overview). In addition, you can read the [Polyline Chart](../Line_Chart) article to learn about other available settings.

## Quick Start

To build a Polyline chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor. Then call the {api:anychart.charts.Polar#polyline}polyline(){api} method to create a Polyline series:

```
// create a chart
chart = anychart.polar();

// create a polyline series and set the data
var series = chart.polyline(data);
```

{sample}BCT\_Polar\_Polyline\_Chart{sample}