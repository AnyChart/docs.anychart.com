{:index 0}
# Stacked Polygon Chart

## Overview

A Stacked Area Chart is a multi-series Area Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Stacked Area Chart, create a multi-series [Area Chart](../../Area_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into **value**:

```
// create a chart
chart = chart.area();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create area series
var series1 = chart.area(seriesData_1);
var series2 = chart.area(seriesData_2);
```

{sample}BCT\_Stacked\_Polygon\_Chart{sample}

## Adjusting

The Area series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).