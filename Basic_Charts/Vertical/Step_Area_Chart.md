{:index 3}
# Vertical Step Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Adjusting](#adjusting)

## Overview

A Vertical Step Area Chart is a simple Step Area Chart with its categories spread among the vertical axis. The difference between Step Area Chart and Area Chart is that points and angles are replaced with a polyline.

Find how to create a Step Area Chart in the following article: [Step Area Chart](../Step_Area_Chart).

## Quick Start

To build a Vertical Step Area Chart, create a simple [Step Area Chart](../Step_Area_Chart) using the {api:anychart#verticalArea}verticalArea(){api} method of chart creation instead of the {api:anychart#area}area(){api}:

```
// create a vartical area chart
var chart = chart.verticalArea();

// create stepArea series
var series1 = chart.stepArea(seriesData_1);
var series2 = chart.stepArea(seriesData_2);
```

{sample}BCT\_Vertical\_Step\_Area\_Chart{sample}

## Adjusting

The Vertical Step Area series' settings are mostly the same as Area series' settings. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).