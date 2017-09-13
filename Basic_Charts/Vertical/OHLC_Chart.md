{:index 2}
# Vertical OHLC Chart

## Overview

This article explains how to create a Vertical OHLC chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [OHLC Chart](../OHLC_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical OHLC chart, use the {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#ohlc}ohlc(){api} method to create an OHLC series.

```
// create a chart
chart = anychart.vertical();

// create an OHLC series and set the data
var series = chart.ohlc(data);
```

{sample}BCT\_Vertical\_OHLC\_Chart{sample}