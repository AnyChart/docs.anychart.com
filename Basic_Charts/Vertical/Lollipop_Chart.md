{:index 2}
# Vertical Lollipop Chart

## Overview

This article explains how to create a Vertical Lollipop chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Lollipop Chart](../Lollipop_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Lollipop chart, use the {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#lollipop}lollipop(){api} method to create a Lollipop series.

```
// create a vertical chart
var chart = anychart.vertical();

// create a lollipop series and set the data
var series = chart.lollipop(data);
```

{sample}BCT\_Vertical\_Lollipop\_Chart{sample}

You can also build a vertical lollipop chart with the {api:anychart#bar}anychart.bar(){api} constructor - call `chart.lollipop(data)` on it, just like on `anychart.vertical()`.

Unlike `anychart.lollipop()`, the vertical and bar presets do not include a soft minimum of 0, so the value scale fits the data and the sticks can start in mid-air instead of at zero. To anchor them at zero, call `chart.yScale().softMinimum(0)` - use `softMinimum()`, not `minimum()`, so the scale can still extend when your data goes negative.

Note that {api:anychart.core.cartesian.series.Lollipop#pointWidth}pointWidth(){api} and {api:anychart.core.cartesian.series.Lollipop#maxPointWidth}maxPointWidth(){api} do not change the head radius or the stick thickness: the head is sized by `markers().size()` and the stick is styled by `stroke()`.
