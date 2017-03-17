{:index 2}
# Vertical Step Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical Step chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read about the settings available for the [Step Chart](../Step_Chart).

## Quick Start

To build a Vertical Step chart, use the {api:anychart#verticalLine}anychart.verticalLine(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#stepLine}stepLine(){api} method to create a Step Line series.

```
// create a chart
chart = anychart.verticalLine();

// create a step line series and set the data
var series = chart.stepLine(data);
```

{sample}BCT\_Vertical\_Step\_Line\_Chart{sample}