{:index 1}
# Percent Stacked Spline Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

A percent stacked spline area chart (also known as a 100% stacked spline area chart) is a multi-series area chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is explained in this article: [Stacked Charts (Overview)](../Overview).

## Quick Start

To build a Percent Stacked Spline Area Chart, you should create a multi-series [Spline Area Chart](../../Spline_Area_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to <strong>percent</strong>:

```
// create a chart
var chart = chart.area();

// enable the percent stacking mode
chart.yScale().stackMode("percent");

// create spline area series
var series1 = chart.splineArea(seriesData_1);
var series2 = chart.splineArea(seriesData_2);
```

{sample}BCT\_Percent\_Stacked\_Spline\_Area\_Chart{sample}
