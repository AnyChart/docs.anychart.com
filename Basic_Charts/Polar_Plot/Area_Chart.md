{:index 2}
# Polar Area Chart

## Overview

This article explains how to create a Polar Area chart in AnyChart.

To learn more about polar charts in general and how to customize them, see [Polar Charts (Overview)](Overview). In addition, you can read the [Area Chart](../Area_Chart) article to learn about other available settings.

## Quick Start

To build a Polar Area chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#area}area(){api} method to create an Area series:

```
// create a chart
chart = anychart.polar();

// create an area series and set the data
var series = chart.area(data);
```

{sample}BCT\_Polar\_Area\_Chart{sample}