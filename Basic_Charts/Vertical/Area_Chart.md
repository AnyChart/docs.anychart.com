{:index 2}
# Vertical Area Chart

## Overview

This article explains how to create a Vertical Area chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Area Chart](../Area_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Area chart, use the {api:anychart#verticalArea}anychart.verticalArea(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#area}area(){api} method to create an Area series.

```
// create a chart
chart = anychart.verticalArea();

// create an area series and set the data
var series = chart.area(data);
```

{sample}BCT\_Vertical\_Area\_Chart{sample}