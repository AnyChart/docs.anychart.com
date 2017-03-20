{:index 2}
# Vertical Box Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical Box chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Box Chart](../Box_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Box chart, use one of these three chart constructors:
* {api:anychart#verticalArea}anychart.verticalArea(){api}
* {api:anychart#verticalLine}anychart.verticalLine(){api}
* {api:anychart#bar}anychart.bar(){api}

Then call the {api:anychart.charts.Cartesian#box}box(){api} method to create a Box series.

```
// create a chart
chart = anychart.verticalArea();

// create a box series and set the data
var series = chart.box(data);
```

{sample}BCT\_Vertical\_Box\_Chart{sample}