{:index 2}
# Spline Chart with Error Bars

## Overview

This article explains how to create a Spline chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Spline Chart](../Spline_Chart) article to learn about other available settings.

## Quick Start

To build a Spline chart, use the {api:anychart#line}anychart.line(){api} chart constructor, then create a Spline series with the {api:anychart.charts.Cartesian#spline}spline(){api} method. To add error bars, call {api:anychart.core.cartesian.series.Spline#error}error(){api}.

```
// create a chart
chart = anychart.line();

// create a spline series and set the data
var series = chart.spline(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Spline\_Chart{sample}