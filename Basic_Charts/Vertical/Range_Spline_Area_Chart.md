{:index 2}
# Vertical Range Spline Area Chart

## Overview

This article explains how to create a Vertical Range Spline Area chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Range Spline Area Chart](../Range_Spline_Area_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Range Spline Area chart, use the {api:anychart#verticalArea}anychart.verticalArea(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#rangeSplineArea}rangeSplineArea(){api} method to create a Range Spline Area series.

```
// create a chart
chart = anychart.verticalArea();

// create a range spline area series and set the data
var series = chart.rangeSplineArea(data);
```

{sample}BCT\_Vertical\_Range\_Spline\_Area\_Chart{sample}