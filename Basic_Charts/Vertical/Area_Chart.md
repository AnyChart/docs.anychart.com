{:index 2}
# Vertical Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical Area chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read about the settings available for the [Area Chart](../Area_Chart).

## Quick Start

To build a Vertical Area chart, use the {api:anychart#verticalArea}anychart.verticalArea(){api} chart constructor. You can either pass your data to the chart constructor or create a series, using the {api:anychart.charts.Cartesian#area}area(){api} method:

```
// create a chart
chart = anychart.verticalArea();

// create an area series and set the data
var series = chart.area(data);
```

{sample}BCT\_Vertical\_Area\_Chart{sample}