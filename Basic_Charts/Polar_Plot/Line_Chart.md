{:index 2}
# Polar Line Chart

## Overview

This article explains how to create a Polar Line chart in AnyChart.

To learn more about polar charts in general and how to customize them, see [Polar Charts (Overview)](Overview). In addition, you can read the [Line Chart](../Line_Chart) article to learn about other available settings.

## Quick Start

To build a Polar Line chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#line}line(){api} method to create a Line series:

```
// create a chart
chart = anychart.polar();

// create a line series and set the data
var series = chart.polar(data);
```

{sample}BCT\_Polar\_Line\_Chart{sample}