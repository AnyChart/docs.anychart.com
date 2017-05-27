{:index 2}
# Stick Chart with Error Bars

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Stick chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Stick Chart](../Stick_Chart) article to learn about other available settings.

## Quick Start

To build a Stick chart, use the {api:anychart#column}anychart.column(){api} chart constructor, then create a Stick series with the {api:anychart.charts.Cartesian#stick}stick(){api} method. To add error bars, call {api:anychart.core.cartesian.series.Stick#error}error(){api}.

```
// create a chart
chart = anychart.column();

// create a stick series and set the data
var series = chart.stick(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Stick\_Chart{sample}
