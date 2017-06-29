{:index 2}
# Column Chart with Error Bars

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Column chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Column Chart](../Column_Chart) article to learn about other available settings.

## Quick Start

To build a Column chart, use the {api:anychart#column}anychart.column(){api} chart constructor, then create a Column series with the {api:anychart.charts.Cartesian#column}column(){api} method. To add error bars, call {api:anychart.core.cartesian.series.Column#error}error(){api}.

```
// create a chart
chart = anychart.column();

// create a column series and set the data
var series = chart.column(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Column\_Chart{sample}
