{:index 2}
# Vertical Range Spline Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical Range Spline Area chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read about the settings available for the [Range Spline Area](../Range_Spline_Area_Chart) chart.

## Quick Start

To build a Vertical Range Spline Area chart, use the {api:anychart#verticalArea}anychart.verticalArea(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#rangeSplineArea}rangeSplineArea(){api} method to create a Range Spline Area series.

```
// create a chart
chart = anychart.verticalArea();

// create a range spline area series and set the data
var series = chart.rangeSplineArea(data);
```

{sample}BCT\_Vertical\_Range\_Spline\_Area\_Chart{sample}