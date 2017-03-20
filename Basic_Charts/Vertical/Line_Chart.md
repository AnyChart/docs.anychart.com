{:index 2}
# Vertical Line Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical Line chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Line Chart](../Line_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Line chart, use the {api:anychart#line}anychart.line(){api} chart constructor. You can either pass your data to the chart constructor or create a series, using the {api:anychart.charts.Cartesian#line}line(){api} method:

```
// create a chart
chart = anychart.verticalLine();

// create a line series and set the data
var series = chart.line(data);
```

{sample}BCT\_Vertical\_Line\_Chart{sample}