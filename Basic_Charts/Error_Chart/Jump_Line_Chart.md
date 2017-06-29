{:index 2}
# Jump Line Chart with Error Bars

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Jump Line chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Jump Line Chart](../Jump_Line_Chart) article to learn about other available settings.

## Quick Start

To build a Jump Line chart, use the {api:anychart#line}anychart.line(){api} chart constructor, then create a Jump Line series with the {api:anychart.charts.Cartesian#jumpLine}jumpLine(){api} method. To add error bars, call {api:anychart.core.cartesian.series.JumpLine#error}error(){api}.

```
// create a chart
chart = anychart.line();

// create a jump line series and set the data
var series = chart.jumpLine(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Jump\_Line\_Chart{sample}
