{:index 2}
# Vertical Range Area Chart

## Overview

This article explains how to create a Vertical Range Area chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Range Area Chart](../Range_Area_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Range Area chart, use the {api:anychart#verticalArea}anychart.verticalArea(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#rangeArea}rangeArea(){api} method to create a Range Area series.

```
// create a chart
chart = anychart.verticalArea();

// create a range area series and set the data
var series = chart.rangeArea(data);
```

{sample}BCT\_Vertical\_Range\_Area\_Chart{sample}