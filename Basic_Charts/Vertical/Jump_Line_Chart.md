{:index 2}
# Vertical Jump Line Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical Jump Line chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read about the settings available for the [Jump Line](../Jump_Line_Chart) chart.

## Quick Start

To build a Vertical Jump Line chart, use the {api:anychart#verticalLine}anychart.verticalLine(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#jumpLine}jumpLine(){api} method to create a Jump Line series.

```
// create a chart
chart = anychart.verticalLine();

// create a jump line series and set the data
var series = chart.jumpLine(data);
```

{sample}BCT\_Vertical\_Jump\_Line\_Chart{sample}