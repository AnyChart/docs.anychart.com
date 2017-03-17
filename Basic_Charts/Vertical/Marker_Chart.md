{:index 2}
# Vertical Marker Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical Marker chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read about the settings available for the [Marker Chart](../Marker_Chart).

## Quick Start

To build a Vertical Marker chart, use one of these three chart constructors:
* {api:anychart#verticalArea}anychart.verticalArea(){api}
* {api:anychart#verticalLine}anychart.verticalLine(){api}
* {api:anychart#bar}anychart.bar(){api}

Then call the {api:anychart.charts.Cartesian#marker}marker(){api} method to create a Marker series.

```
// create a chart
chart = anychart.verticalArea();

// create a marker series and set the data
var series = chart.marker(data);
```

{sample}BCT\_Vertical\_Marker\_Chart{sample}