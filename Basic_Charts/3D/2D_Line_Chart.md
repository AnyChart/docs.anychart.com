{:index 2}
# 3D 2D Line Chart

## Overview

This article explains how to create a 3D 2D Line chart in AnyChart.

To learn more about 3D charts in general and how to customize them, see [3D Charts (Overview)](Overview). You can also read about the settings available for the [Line Chart](../Line_Chart), most of them shared by 3D 2D Line.

## Quick Start

To build a 3D 2D Line chart, use the {api:anychart#line3d}anychart.line3d(){api} chart constructor. Then call the {api:anychart.charts.Cartesian3d#line2d}line2d(){api} method to create a 2D Line series. 

If 2D Line is combined with series of other types, it is always shown in the foreground, like in the sample below. There is a multi-series 3D chart with one 3D Column and two 2D Line series:

```
// create a 3d line chart
chart = anychart.line3d();

// create a column series and set the data
var series1 = chart.column(seriesData_1);

// create 2d line series and set the data
var series2 = chart.line2d(seriesData_2);
var series3 = chart.line2d(seriesData_3);

// disable the z-axis distribution mode
chart.zDistribution(false);
```

{sample}BCT\_3D\_2D\_Line\_Chart{sample}