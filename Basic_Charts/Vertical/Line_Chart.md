{:index 2}
# Vertical Line Chart

## Overview

This article explains how to create a Vertical Line chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Line Chart](../Line_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Line chart, use the {api:anychart#line}anychart.line(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#line}line(){api} method to create a Line series.

```
// create a chart
chart = anychart.verticalLine();

// create a line series and set the data
var series = chart.line(data);
```

{sample}BCT\_Vertical\_Line\_Chart{sample}