{:index 2}
# Polar Line Chart

## Overview

This article explains how to create a Polar Range Column chart in AnyChart.

To learn more about polar charts in general and how to customize them, see [Polar Charts (Overview)](Overview). In addition, you can read the [Range Column Chart](../Range_Column_Chart) article to learn about other available settings.

## Quick Start

To build a Polar Range Column chart, use the {api:anychart#polar}anychart.polar(){api} chart constructor. Then call the {api:anychart.charts.Cartesian#rangeColumn}rangeColumn(){api} method to create a Range Column series:

```
// create a chart
chart = anychart.polar();

// create a range column series and set the data
var series = chart.rangeColumn(data);
```

{sample}BCT\_Polar\_Range\_Column\_Chart{sample}

## Special Settings

### Point Size

This chart type allows you to set the size of its points. Read more in the [Point Size](../Common_Settings/Point_Size) article.