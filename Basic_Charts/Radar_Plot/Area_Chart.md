{:index 2}
# Radar Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Radar Area chart in AnyChart.

To learn more about radar charts in general and how to customize them, see [Radar Charts (Overview)](Overview). In addition, you can read the [Area Chart](../Area_Chart) article to learn about other available settings.

## Quick Start

To build a Radar Area chart, use the {api:anychart#radar}anychart.radar(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#area}area(){api} method to create an Area series:

```
// create a chart
chart = anychart.radar();

// create an area series and set the data
var series = chart.area(data);
```

{sample}BCT\_Radar\_Area\_Chart{sample}