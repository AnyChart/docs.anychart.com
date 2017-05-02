{:index 2}
# Vertical Spline Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Adjusting](#adjusting)

## Overview

A Vertical Spline Area Chart is a simple Spline Area Chart with its categories spread among the vertical axis. The difference between Spline Area Chart and Area Chart is that points and angles are replaced with a single spline.

Find how to create a Spline Area Chart in the following article: [Spline Area Chart](../Spline_Area_Chart).

## Quick Start

To build a Vertical Spline Area Chart, create a simple [Spline Area Chart](../Spline_Area_Chart) using the {api:anychart#verticalArea}verticalArea(){api} method of chart creation instead of the {api:anychart#area}area(){api}:

```
// create a vertical area chart
var chart = chart.verticalArea();

// create splineArea series
var series1 = chart.splineArea(seriesData_1);
var series2 = chart.splineArea(seriesData_2);
```

{sample}BCT\_Vertical\_Spline\_Area\_Chart{sample}

## Adjusting

The Vertical Spline Area series' settings are mostly the same as Area series' settings. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../General_Settings).