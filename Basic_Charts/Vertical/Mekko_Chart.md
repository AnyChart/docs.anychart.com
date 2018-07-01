{:index 2}
# Vertical Mekko Chart

## Overview

This article explains how to create a Vertical Mekko chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Mekko Chart](../Marimekko_Chart/Mekko_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Mekko chart, use the {api:anychart#mekko}anychart.mekko(){api} chart constructor. Then you need to make some adjustments to make it vertical:
- set vertical orientation as default for mekko series,
- swap the X- and Y-axes positions.

```
// create a chart
chart = anychart.mekko();

// swap axes
chart.xAxis().orientation("left");
chart.yAxis().orientation("bottom");    

// add series and change the orientation
var series1 = chart.mekko(seriesData_1).name("Item 1");
series1.isVertical(true);

var series2 = chart.mekko(seriesData_2).name("Item 2");
series1.isVertical(true);
```

{sample}BCT\_Vertical\_Mekko\_Chart{sample}