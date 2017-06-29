{:index 2}
# Scatter Marker Chart with Error Bars

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a [Scatter Marker chart](../Scatter_Plot/Marker_Chart) with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Marker Chart](../Marker_Chart) article to learn about other available settings.

Please note that error bars are also supported by Cartesian Marker charts – see [Marker Chart with Error Bars](Marker_Chart).

## Quick Start

To build a Scatter Marker chart, use the {api:anychart#scatter}anychart.scatter(){api} chart constructor, then create a Marker series with the {api:anychart.charts.Scatter#marker}marker(){api} method. To add error bars, call {api:anychart.core.scatter.series.Marker#error}error(){api}.

```
// create a chart
chart = anychart.scatter();

// create a marker series and set the data
var series = chart.marker(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Scatter\_Marker\_Chart{sample}
