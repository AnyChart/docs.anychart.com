---
sidebar_position: 2
---
# Scatter Line Chart with Error Bars

## Overview

This article explains how to create a [Scatter Line chart](../scatter-plot/line-chart) with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](overview). In addition, you can read the [Line Chart](../line-chart) article to learn about other available settings.

Please note that error bars are also supported by Cartesian Line charts - see [Line Chart with Error Bars](line-chart).

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