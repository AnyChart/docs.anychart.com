{:index 2}
# Vertical Step Line Chart

## Overview

This article explains how to create a Vertical Step Line chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview).  You can also read the [Step Line Chart](../Step_Line_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Step Line chart, use the {api:anychart#verticalLine}anychart.verticalLine(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#stepLine}stepLine(){api} method to create a Step Line series.

```
// create a chart
chart = anychart.verticalLine();

// create a step line series and set the data
var series = chart.stepLine(data);
```

{sample}BCT\_Vertical\_Step\_Line\_Chart{sample}