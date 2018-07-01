{:index 2}
# Step Line Chart with Error Bars

## Overview

This article explains how to create a Step Line chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Step Line Chart](../Step_Line_Chart) article to learn about other available settings.

## Quick Start

To build a Step Line chart, use the {api:anychart#line}anychart.line(){api} chart constructor, then create a Step Line series with the {api:anychart.charts.Cartesian#stepLine}stepLine(){api} method. To add error bars, call {api:anychart.core.cartesian.series.StepLine#error}error(){api}.

```
// create a chart
chart = anychart.line();

// create a step line series and set the data
var series = chart.stepLine(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Step\_Line\_Chart{sample}