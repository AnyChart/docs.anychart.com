{:index 1}
# Percent Stacked Area Chart

* [Overview](#overview)
* [Chart](#chart)

## Overview

A percent stacked area chart (also known as a 100% stacked area chart) is a multi-series area chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is explained in this article: [Stacked Charts (Overview)](../Overview).

## Chart

To build a Percent Stacked Area Chart, you should create a multi-series [Area Chart](../../Area_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to <strong>percent</strong>:

```
// create a chart
var chart = chart.area();

// create area series
var series1 = chart.area(seriesData_1);
var series2 = chart.area(seriesData_2);

// enable the stacking mode
var yScale = chart.yScale();
yScale.stackMode("percent");
```

{sample}BCT\_Percent\_Stacked\_Area\_Chart{sample}
