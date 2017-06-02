{:index 2}
# HiLo Chart with Error Bars

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a HiLo chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [HiLo Chart](../HiLo_Chart) article to learn about other available settings.

## Quick Start

To build a HiLo chart, use the {api:anychart#hilo}anychart.hilo(){api} chart constructor, then create a HiLo series with the {api:anychart.charts.Cartesian#hilo}hilo(){api} method. To add error bars, call {api:anychart.core.cartesian.series.Line#error}error(){api}.

```
// create a chart
chart = anychart.hilo();

// create a HiLo series and set the data
var series = chart.hilo(data);

// create error bars
series.error("40%");
```

{sample}BCT\_Error\_HiLo\_Chart{sample}
