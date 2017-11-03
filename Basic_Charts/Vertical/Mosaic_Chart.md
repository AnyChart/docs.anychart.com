{:index 2}
# Vertical Mosaic Chart

## Overview

This article explains how to create a Vertical Mosaic chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Mosaic Chart](../Marimekko_Chart/Mosaic_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Mosaic chart, use the {api:anychart#mosaic}anychart.mosaic(){api} chart constructor. Then you need to make some adjustments to make it vertical:
- set vertical orientation as default for mekko series,
- swap the X- and Y-axes positions.

```
// create a chart
chart = anychart.mosaic();

// swap axes
chart.xAxis().orientation("left");
chart.yAxis().orientation("bottom");    

// add series and change the orientation
var series1 = chart.mekko(seriesData_1).name("Item 1");
series1.isVertical(true);

var series2 = chart.mekko(seriesData_2).name("Item 2");
series2.isVertical(true);
```

{sample}BCT\_Vertical\_Mosaic\_Chart{sample}