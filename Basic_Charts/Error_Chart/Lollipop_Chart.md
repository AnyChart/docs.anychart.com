{:index 2}
# Lollipop Chart with Error Bars

## Overview

This article explains how to create a Lollipop chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Lollipop Chart](../Lollipop_Chart) article to learn about other available settings.

## Quick Start

To build a Lollipop chart, use the {api:anychart#lollipop}anychart.lollipop(){api} chart constructor, then create a Lollipop series with the {api:anychart.charts.Cartesian#lollipop}lollipop(){api} method. To add error bars, call {api:anychart.core.cartesian.series.Lollipop#error}error(){api}.

```
// create a chart
chart = anychart.lollipop();

// create a lollipop series and set the data
var series = chart.lollipop(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Lollipop\_Chart{sample}
