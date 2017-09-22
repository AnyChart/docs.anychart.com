{:index 2}
# 3D Column Chart

## Overview

This article explains how to create a 3D Column chart in AnyChart.

To learn more about 3D charts in general and how to customize them, see [3D Charts (Overview)](Overview). You can also read the [Bar Chart](../Bar_Chart) article.

## Quick Start

To build a 3D Column chart, use the {api:anychart#column3d}anychart.column3d(){api} chart constructor. You can either pass your data to the chart constructor or create a series by using the {api:anychart.charts.Cartesian3d#column}column(){api} method.

**Note:** When you use the {api:anychart#area3d}anychart.column3d(){api} chart constructor, the [Z-distribution](Overview#z-distribution) is disabled by default, which means that series of multi-series charts are distributed along the X-axis.

The following sample shows how to create a basic 3D Column chart:

```
// create a 3d column chart
chart = anychart.column3d();

// create a column series and set the data
var series = chart.column(data);
```

{sample}BCT\_3D\_Column\_Chart{sample}