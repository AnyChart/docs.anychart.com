{:index 2}
# Vertical Marker Chart

## Overview

This article explains how to create a Vertical Marker chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Marker Chart](../Marker_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Marker chart, use the {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#marker}marker(){api} method to create a Marker series.

```
// create a chart
chart = anychart.vertical();

// create a marker series and set the data
var series = chart.marker(data);
```

{sample}BCT\_Vertical\_Marker\_Chart{sample}