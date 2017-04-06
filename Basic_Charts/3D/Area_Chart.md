{:index 2}
# 3D Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a 3D Area chart in AnyChart.

To learn more about 3D charts in general and how to customize them, see [3D Charts (Overview)](Overview). You can also read about the settings available for the [Area Chart](../Area_Chart), most of them shared by 3D Area.

## Quick Start

To build a 3D Area chart, use the {api:anychart#area3d}anychart.area3d(){api} chart constructor. You can either pass your data to the chart constructor or create a series, using the {api:anychart.charts.Cartesian#area}area(){api} method:

```
// create a 3d area chart
chart = anychart.area3d();

// create an area series and set the data
var series = chart.area(data);
```

{sample}BCT\_3D\_Area\_Chart{sample}