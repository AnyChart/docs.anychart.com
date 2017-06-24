{:index 2}
# Radar Line Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Radar Line chart in AnyChart.

To learn more about radar charts in general and how to customize them, see [Radar Charts (Overview)](Overview). In addition, you can read the [Line Chart](../Line_Chart) article to learn about other available settings.

## Quick Start

To build a Radar Line chart, use the {api:anychart#radar}anychart.radar(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#line}line(){api} method to create a Line series:

```
// create a chart
chart = anychart.radar();

// create a line series and set the data
var series = chart.line(data);
```

{sample}BCT\_Radar\_Line\_Chart{sample}