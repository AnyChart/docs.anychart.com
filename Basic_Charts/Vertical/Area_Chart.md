{:index 1}
# Vertical Area Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Adjusting](#adjusting)

## Overview

A Vertical Area Chart is a simple Area Chart with its categories spread among the vertical axis.

Find how to create an Area Chart in the following article: [Area Chart](../Area_Chart).

## Quick Start

To build a Vertical Area Chart, create a simple [Area Chart](../Area_Chart) using the {api:anychart#verticalArea}verticalArea(){api} method of chart creation instead of the {api:anychart#area}area(){api}:

```
// create a vertical area chart
var chart = chart.verticalArea();

// create area series
var series1 = chart.area(seriesData_1);
var series2 = chart.area(seriesData_2);
```

{sample}BCT\_Vertical\_Area\_Chart{sample}

## Adjusting

The Vertical Area series' settings are mostly the same as Area series' settings. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../General_Settings).