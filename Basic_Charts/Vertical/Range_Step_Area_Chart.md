{:index 2}
# Vertical Range Step Area Chart

## Overview

This article explains how to create a Vertical Range Step Area chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Range Step Area Chart](../Range_Step_Area_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Range Step Area chart, use the {api:anychart#verticalArea}anychart.verticalArea(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#rangeStepArea}rangeStepArea(){api} method to create a Range Step Area series.

```
// create a chart
chart = anychart.verticalArea();

// create a range step area series and set the data
var series = chart.rangeStepArea(data);
```

{sample}BCT\_Vertical\_Range\_Step\_Area\_Chart{sample}