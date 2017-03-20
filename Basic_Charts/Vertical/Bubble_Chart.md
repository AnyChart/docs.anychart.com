{:index 2}
# Vertical Bubble Chart

* [Overview](#overview)
* [Quick Start](#quick_start)

## Overview

This article explains how to create a Vertical Bubble chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read about the settings available for the [Bubble](../Bubble_Chart) chart.

## Quick Start

To build a Vertical Bubble chart, use one of these three chart constructors:
* {api:anychart#verticalArea}anychart.verticalArea(){api}
* {api:anychart#verticalLine}anychart.verticalLine(){api}
* {api:anychart#bar}anychart.bar(){api}

Then call the {api:anychart.charts.Cartesian#bubble}bubble(){api} method to create a Bubble series.

```
// create a chart
chart = anychart.verticalArea();

// create a bubble series and set the data
var series = chart.bubble(data);
```

{sample}BCT\_Vertical\_Bubble\_Chart{sample}