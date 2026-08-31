{:index 2}
# Vertical Dumbbell Chart

## Overview

This article explains how to create a Vertical Dumbbell chart in AnyChart.

In this chart type, "vertical" names the orientation of the category axis, not the connecting lines. A default Dumbbell chart spreads its categories along a horizontal axis and connects the endpoints of each pair vertically, while a Vertical Dumbbell chart runs the categories down the vertical axis, so each connecting line extends horizontally between its endpoints.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Dumbbell Chart](../Dumbbell_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Dumbbell chart, use the {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#dumbbell}dumbbell(){api} method to create a Dumbbell series.

```
// create a vertical chart
var chart = anychart.vertical();

// create a dumbbell series and set the data
var series = chart.dumbbell(data);
```

In the sample below, the categories run down the vertical axis and each connecting line extends horizontally between its endpoints.

{sample}BCT\_Vertical\_Dumbbell\_Chart{sample}
