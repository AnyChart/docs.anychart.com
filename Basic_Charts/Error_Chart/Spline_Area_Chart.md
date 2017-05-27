{:index 2}
# Spline Area Chart with Error Bars

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Spline Area chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Spline Area Chart](../Spline_Area_Chart) article to learn about other available settings.

## Quick Start

To build a Spline Area chart, use the {api:anychart#area}anychart.area(){api} chart constructor, then create a Spline Area series with the {api:anychart.charts.Cartesian#splineArea}splineArea(){api} method. To add error bars, call {api:anychart.core.cartesian.series.SplineArea#error}error(){api}.

```
// create a chart
chart = anychart.area();

// create a spline area series and set the data
var series = chart.splineArea(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Spline\_Area\_Chart{sample}
