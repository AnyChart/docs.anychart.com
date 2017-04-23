{:index 2}
# Scatter Line Chart with Error Bars

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Scatter Line  chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). You can also read the [Line Chart](../Line_Chart) article to learn about other available settings.

## Quick Start

To build a Scatter Line chart, use the {api:anychart#scatter}anychart.scatter(){api} chart constructor, then create a Line series with the {api:anychart.charts.Scatter#line}line(){api} method. To add error bars, call {api:anychart.core.scatter.series.Line#error}error(){api}.

```
// create a chart
chart = anychart.scatter();

// create a line series and set the data
var series = chart.line(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Scatter\_Line\_Chart{sample}
