{:index 2}
# 3D Doughnut Chart

## Overview

This article explains how to create a 3D Doughnut chart in AnyChart.

To learn more about 3D charts in general and how to customize them, see [3D Charts (Overview)](Overview). You can also read the [Doughnut Chart](../Doughnut_Chart) article.

Please note that, unlike the ordinary Doughnut chart, 3D Doughnut does not support inner labels.

## Quick Start

To build a 3D Doughnut chart, use the {api:anychart#pie3d}anychart.pie3d(){api} chart constructor and the {api:anychart.charts.Pie#innerRadius}innerRadius(){api} method to set the inner radius. The radius is 0 by default and can be set either as a value or a percentage of the chart's bounds.

```
// create a 3d pie chart
chart = anychart.pie3d();

// set the inner radius
// (to turn the pie chart into a doughnut chart)
chart.innerRadius("30%");
```

{sample}BCT\_3D\_Doughnut\_Chart{sample}