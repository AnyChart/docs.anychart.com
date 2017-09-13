{:index 2}
# Area Chart with Error Bars

## Overview

This article explains how to create an Area chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Area Chart](../Area_Chart) article to learn about other available settings.

## Quick Start

To build an Area chart, use the {api:anychart#area}anychart.area(){api} chart constructor, then create an Area series with the {api:anychart.charts.Cartesian#area}area(){api} method. To add error bars, call {api:anychart.core.cartesian.series.Area#error}error(){api}.

```
// create a chart
chart = anychart.area();

// create an area series and set the data
var series = chart.area(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Area\_Chart{sample}
