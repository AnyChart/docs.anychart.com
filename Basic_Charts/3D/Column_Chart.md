{:index 2}
# 3D Column Chart

## Overview

This article explains how to create a 3D Column chart in AnyChart.

To learn more about 3D charts in general and how to customize them, see [3D Charts (Overview)](Overview). You can also read about the settings available for the [Bar Chart](../Bar_Chart), most of them shared by 3D Column.

## Quick Start

To build a 3D Column chart, use the {api:anychart#column3d}anychart.column3d(){api} chart constructor. You can either pass your data to the chart constructor or create a series, using the {api:anychart.charts.Cartesian#column}column(){api} method:

```
// create a 3d column chart
chart = anychart.column3d();

// create a column series and set the data
var series = chart.column(data);
```

{sample}BCT\_3D\_Column\_Chart{sample}