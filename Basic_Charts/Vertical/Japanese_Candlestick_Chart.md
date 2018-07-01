{:index 2}
# Vertical Japanese Candlestick Chart

## Overview

This article explains how to create a Vertical Japanese Candlestick chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Japanese Candlestick Chart](../Japanese_Candlestick_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Japanese Candlestick chart, use the {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#candlestick}candlestick(){api} method to create a Japanese Candlestick series.

```
// create a chart
chart = anychart.vertical();

// create a japanese candlestick series and set the data
var series = chart.candlestick(data);
```

{sample}BCT\_Vertical\_Japanese\_Candlestick\_Chart{sample}