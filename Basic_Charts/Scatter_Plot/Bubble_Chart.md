{:index 2}
# Scatter Bubble Chart

## Overview

This article explains how to create a Scatter Bubble chart in AnyChart.

To learn more about scatter charts in general and how to customize them, see [Scatter Charts (Overview)](Overview). In addition, you can read the [Bubble Chart](../Bubble_Chart) article to learn about other available settings.

## Quick Start

To build a Scatter Bubble chart, use the {api:anychart#scatter}anychart.scatter(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#bubble}bubble(){api} method to create a Bubble series:

```
// create a chart
chart = anychart.scatter();

// create a bubble series and set the data
var series = chart.bubble(data);
```

**Note:** There is also the {api:anychart#bubble}anychart.bubble(){api} chart constructor. When you pass your data to this constructor or call the {api:anychart.charts.Cartesian#bubble}bubble(){api} method after using it, a Scatter Bubble chart is created. However, you can create basic Bubble charts too - see [Bubble Chart](../Bubble_Chart).

{sample}BCT\_Scatter\_Bubble\_Chart{sample}