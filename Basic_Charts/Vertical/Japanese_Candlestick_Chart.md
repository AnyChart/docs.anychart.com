{:index 2}
# Vertical Japanese Candlestick Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical Japanese Candlestick chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read about the settings available for the [Japanese Candlestick Chart](../Japanese_Candlestick_Chart).

## Quick Start

To build a Vertical Japanese Candlestick chart, use one of these three chart constructors:
* {api:anychart#verticalArea}anychart.verticalArea(){api}
* {api:anychart#verticalLine}anychart.verticalLine(){api}
* {api:anychart#bar}anychart.bar(){api}

Then call the {api:anychart.charts.Cartesian#candlestick}candlestick(){api} method to create a Japanese Candlestick series.

```
// create a chart
chart = anychart.verticalArea();

// create a japanese candlestick series and set the data
var series = chart.candlestick(data);
```

{sample}BCT\_Vertical\_Japanese\_Candlestick\_Chart{sample}