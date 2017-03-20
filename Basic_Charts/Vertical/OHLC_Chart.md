{:index 2}
# Vertical OHLC Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical OHLC chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read about the settings available for the [OHLC](../OHLC_Chart) chart.

## Quick Start

To build a Vertical OHLC chart, use one of these three chart constructors:
* {api:anychart#verticalArea}anychart.verticalArea(){api}
* {api:anychart#verticalLine}anychart.verticalLine(){api}
* {api:anychart#bar}anychart.bar(){api}

Then call the {api:anychart.charts.Cartesian#ohlc}ohlc(){api} method to create an OHLC series.

```
// create a chart
chart = anychart.verticalArea();

// create an ohlc series and set the data
var series = chart.ohlc(data);
```

{sample}BCT\_Vertical\_OHLC\_Chart{sample}