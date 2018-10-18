{:index 2.2}
# 3D 2D Line Chart

## Overview

This article explains how to create a 3D 2D Line chart in AnyChart.

To learn more about 3D charts in general and how to customize them, see [3D Charts (Overview)](Overview). In addition, you can read the [Line Chart](../Line_Chart) article.

Please note that there is also the [3D Line](Line_Chart) chart type.

## Quick Start

To build a 3D 2D Line chart, use the {api:anychart#line3d}anychart.line3d(){api} chart constructor. Then call the {api:anychart.charts.Cartesian3d#line2d}line2d(){api} method to create a 2D Line series. 

In the sample below, there is a multiple-series 3D chart with one 3D Column and two 2D Line series:

```
// create a 3d line chart
chart = anychart.line3d();

// create a column series and set the data
var series1 = chart.column(seriesData_1);

// create 2d line series and set the data
var series2 = chart.line2d(seriesData_2);
var series3 = chart.line2d(seriesData_3);

// disable the z-axis distribution
chart.zDistribution(false);
```

{sample}BCT\_3D\_2D\_Line\_Chart{sample}

## Special Settings

**Note 1:** When you use the {api:anychart#line3d}anychart.line3d(){api} chart constructor, the [Z-distribution](Overview#z-distribution) is enabled by default, which means that the series of multiple-series charts are distributed along the Z-axis.

**Note 2:** 2D Line series are always shown in the foreground if they are combined with series of other types.