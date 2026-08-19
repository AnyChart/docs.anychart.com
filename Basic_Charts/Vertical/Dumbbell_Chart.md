{:index 2}
# Vertical Dumbbell Chart

## Overview

This article explains how to create a Vertical Dumbbell chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Dumbbell Chart](../Dumbbell_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Dumbbell chart, use the {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#dumbbell}dumbbell(){api} method to create a Dumbbell series.

```
// create a chart
var chart = anychart.vertical();

// create a dumbbell series and set the data
var series = chart.dumbbell(data);
```

In the sample below, the categories run down the vertical axis and each dumbbell extends horizontally.

{sample}BCT\_Vertical\_Dumbbell\_Chart{sample}
