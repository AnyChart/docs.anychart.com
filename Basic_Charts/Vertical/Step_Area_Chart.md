{:index 2}
# Vertical Step Area Chart

## Overview

This article explains how to create a Vertical Step Area chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview).  You can also read the [Step Area Chart](../Step_Area_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Step Area chart, use the {api:anychart#verticalArea}anychart.verticalArea(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#stepArea}stepArea(){api} method to create a Step Area series.

```
// create a chart
chart = anychart.verticalArea();

// create a step area series and set the data
var series = chart.stepArea(data);
```

{sample}BCT\_Vertical\_Step\_Area\_Chart{sample}