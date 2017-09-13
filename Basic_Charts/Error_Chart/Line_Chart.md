{:index 2}
# Line Chart with Error Bars

## Overview

This article explains how to create a Line chart with error bars.

To learn more about error charts in general and how to customize them, see [Error Chart (Overview)](Overview). In addition, you can read the [Line Chart](../Line_Chart) article to learn about other available settings.

Please note that error bars are also supported by Scatter Line charts – see [Scatter Line Chart with Error Bars](Scatter_Line_Chart) (this article describes the [Cartesian Line chart](../Line_Chart)).

## Quick Start

To build a Line chart, use the {api:anychart#line}anychart.line(){api} chart constructor, then create a Line series with the {api:anychart.charts.Cartesian#line}line(){api} method. To add error bars, call {api:anychart.core.cartesian.series.Line#error}error(){api}.

```
// create a chart
chart = anychart.line();

// create a line series and set the data
var series = chart.line(data);

// create error bars
series.error("10%");
```

{sample}BCT\_Error\_Line\_Chart{sample}
