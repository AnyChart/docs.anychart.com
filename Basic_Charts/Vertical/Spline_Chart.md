{:index 2}
# Vertical Spline Chart

## Overview

This article explains how to create a Vertical Spline chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview).  You can also read the [Spline Chart](../Spline_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Spline chart, use the {api:anychart#verticalLine}anychart.verticalLine(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#spline}spline(){api} method to create a Spline series.

```
// create a chart
chart = anychart.verticalLine();

// create a spline series and set the data
var series = chart.spline(data);
```

{sample}BCT\_Vertical\_Spline\_Chart{sample}