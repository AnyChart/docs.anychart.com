{:index 2}
# Step Area Chart with Error Bars

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Step Area chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Step Area Chart](../Step_Area_Chart) article to learn about other available settings.

## Quick Start

To build a Step Area chart, use the {api:anychart#area}anychart.area(){api} chart constructor, then create a Step Area series with the {api:anychart.charts.Cartesian#stepArea}stepArea(){api} method. To add error bars, call {api:anychart.core.cartesian.series.StepArea#error}error(){api}.

```
// create a chart
chart = anychart.area();

// create a step area series and set the data
var series = chart.stepLine(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Step\_Area\_Chart{sample}
