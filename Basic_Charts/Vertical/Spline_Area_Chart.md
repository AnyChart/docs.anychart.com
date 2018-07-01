{:index 2}
# Vertical Spline Area Chart

## Overview

This article explains how to create a Vertical Spline Area chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview).  You can also read the [Spline Area Chart](../Spline_Area_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Spline Area chart, use the {api:anychart#verticalArea}anychart.verticalArea(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#splineArea}splineArea(){api} method to create a Spline Area series.

```
// create a chart
chart = anychart.verticalArea();

// create a spline area series and set the data
var series = chart.splineArea(data);
```

{sample}BCT\_Vertical\_Spline\_Area\_Chart{sample}