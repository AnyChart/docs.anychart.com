{:index 2}
# Vertical BarMekko Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical BarMekko chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [BarMekko Chart](../Marimekko_Chart/BarMekko_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical BarMekko chart, use the {api:anychart#barmekko}anychart.barmekko(){api} chart constructor. Then you need to make some adjustments to make it vertical:
- set vertical orientation as default for mekko series,
- swap X and Y axes positions.

```
// create a chart
chart = anychart.barmekko();

// swap axes
chart.xAxis().orientation("left");
chart.yAxis().orientation("bottom");    

// add series
var series = chart.mekko(seriesData_1);
series.isVertical(true);
```

{sample}BCT\_Vertical\_BarMekko\_Chart{sample}