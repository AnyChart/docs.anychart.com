{:index 2.1}
# 3D Line Chart

## Overview

This article explains how to create a 3D Line chart in AnyChart.

To learn more about 3D charts in general and how to customize them, see [3D Charts (Overview)](Overview). In addition, you can read the [Line Chart](../Line_Chart) article.

Please note that there is also the [3D 2D Line](2D_Line_Chart) chart type.

## Quick Start

To build a 3D Line chart, use the {api:anychart#line3d}anychart.line3d(){api} chart constructor. You can either pass your data to the chart constructor or create a series by using the {api:anychart.charts.Cartesian3d#line}line(){api} method.

The following sample shows how to create a basic multiple-series 3D Line chart:

```
// create a 3d line chart
chart = anychart.line3d();

// create line series and set the data
var series1 = chart.line(seriesData_1);
var series2 = chart.line(seriesData_2);
var series3 = chart.line(seriesData_3);
```

{sample}BCT\_3D\_Line\_Chart{sample}

## Special Settings

**Note 1**: Unlike the ordinary Line series, the 3D Line series is colored with the {api:anychart.core.StateSettings#fill}fill(){api} method. The stroke cannot be configured.

**Note 2:** When you use the {api:anychart#line3d}anychart.line3d(){api} chart constructor, the [Z-distribution](Overview#z-distribution) is enabled by default, which means that the series of multiple-series charts are distributed along the Z-axis.