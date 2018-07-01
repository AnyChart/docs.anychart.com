{:index 2}
# Vertical Jump Line Chart

## Overview

This article explains how to create a Vertical Jump Line chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Jump Line Chart](../Jump_Line_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Jump Line chart, use the {api:anychart#verticalLine}anychart.verticalLine(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#jumpLine}jumpLine(){api} method to create a Jump Line series.

```
// create a chart
chart = anychart.verticalLine();

// create a jump line series and set the data
var series = chart.jumpLine(data);
```

{sample}BCT\_Vertical\_Jump\_Line\_Chart{sample}