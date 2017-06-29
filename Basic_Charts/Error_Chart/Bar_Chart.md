{:index 2}
# Bar Chart with Error Bars

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Bar chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Bar Chart](../Bar_Chart) article to learn about other available settings.

## Quick Start

To build a Bar chart, use the {api:anychart#bar}anychart.bar(){api} chart constructor, then create a Bar series with the {api:anychart.charts.Cartesian#bar}bar(){api} method. To add error bars, call {api:anychart.core.cartesian.series.Bar#error}error(){api}.

```
// create a chart
chart = anychart.bar();

// create a bar series and set the data
var series = chart.bar(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Bar\_Chart{sample}
