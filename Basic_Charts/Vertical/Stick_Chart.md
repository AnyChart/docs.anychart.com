{:index 2}
# Vertical Stick Chart

## Overview

This article explains how to create a Vertical Stick chart in AnyChart.

To learn more about vertical charts in general and how to customize them, see [Vertical Charts (Overview)](Overview).  You can also read the [Stick Chart](../Stick_Chart) article to learn about other available settings.

## Quick Start

To build a Vertical Stick chart, use the {api:anychart#bar}anychart.bar(){api} or {api:anychart#vertical}anychart.vertical(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#stick}stick(){api} method to create a Stick series.

```
// create a chart
chart = anychart.bar();

// create a stick series and set the data
var series = chart.stick(data);
```

{sample}BCT\_Vertical\_Stick\_Chart{sample}