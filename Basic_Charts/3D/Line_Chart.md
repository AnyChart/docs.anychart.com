{:index 2}
# 3D Line Chart

## Overview

This article explains how to create a 3D Line chart in AnyChart.

To learn more about 3D charts in general and how to customize them, see [3D Charts (Overview)](Overview). You can also read about the settings available for the [Line Chart](../Line_Chart), most of them shared by 3D Line.

## Quick Start

To build a 3D Line chart, use the {api:anychart#line3d}anychart.line3d(){api} chart constructor. You can either pass your data to the chart constructor or create a series by using the {api:anychart.charts.Cartesian3d#line}line(){api} method:

```
// create a 3d line chart
chart = anychart.line3d();

// create line series and set the data
var series1 = chart.line(seriesData_1);
var series2 = chart.line(seriesData_2);
var series3 = chart.line(seriesData_3);

// disable the z-axis distribution mode
chart.zDistribution(false);
```

{sample}BCT\_3D\_Line\_Chart{sample}

## Special Settings

Unlike the ordinary [Line](../Line_Chart), the 3D Line chart is colored with the {api:anychart.core.cartesian.series.Line3d#fill}fill(){api} method. The stroke cannot be configured.