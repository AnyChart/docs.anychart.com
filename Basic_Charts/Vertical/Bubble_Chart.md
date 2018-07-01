{:index 2}
# Vertical Bubble Chart

## Overview

This article explains how to create a Vertical Bubble chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Bubble Chart](../Bubble_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Bubble chart, use the {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#bubble}bubble(){api} method to create a Bubble series.

```
// create a chart
chart = anychart.vertical();

// create a bubble series and set the data
var series = chart.bubble(data);
```

{sample}BCT\_Vertical\_Bubble\_Chart{sample}