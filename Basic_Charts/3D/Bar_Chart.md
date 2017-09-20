{:index 2}
# 3D Bar Chart

## Overview

This article explains how to create a 3D Bar chart in AnyChart.

To learn more about 3D charts in general and how to customize them, see [3D Charts (Overview)](Overview). You can also read about the settings available for the [Bar Chart](../Bar_Chart), most of them shared by 3D Bar.

## Quick Start

To build a 3D Bar chart, use the {api:anychart#bar3d}anychart.bar3d(){api} chart constructor. You can either pass your data to the chart constructor or create a series by using the {api:anychart.charts.Cartesian3d#bar}bar(){api} method:

```
// create a 3d bar chart
chart = anychart.bar3d();

// create a bar series and set the data
var series = chart.bar(data);
```

{sample}BCT\_3D\_Bar\_Chart{sample}