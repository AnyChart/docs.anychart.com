{:index 2}
# Vertical Lollipop Chart

## Overview

This article explains how to create a Vertical Lollipop chart in AnyChart.

In this chart type, "vertical" names the orientation of the category axis, not the sticks. A default Lollipop chart spreads its categories along a horizontal axis and its sticks rise vertically, while a Vertical Lollipop chart runs the categories down the vertical axis, so each stick extends horizontally to its head.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview). You can also read the [Lollipop Chart](../Lollipop_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Lollipop chart, use the {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#lollipop}lollipop(){api} method to create a Lollipop series.

```
// create a vertical chart
var chart = anychart.vertical();

// create a lollipop series and set the data
var series = chart.lollipop(data);
```

In the sample below, the categories run down the vertical axis and each stick extends horizontally to its head.

{sample}BCT\_Vertical\_Lollipop\_Chart{sample}
