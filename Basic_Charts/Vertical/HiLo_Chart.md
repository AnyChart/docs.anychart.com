{:index 2}
# Vertical HiLo Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical HiLo chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [HiLo Chart](../HiLo_Chart) article to learn about other available settings.

## Quick Start

To build a HiLo chart, use the {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#hilo}hilo(){api} method to create a HiLo series.

```
// create a chart
chart = anychart.vertical();

// create a HiLo series and set the data
var series = chart.hilo(data);
```

{sample}BCT\_Vertical\_HiLo\_Chart{sample}