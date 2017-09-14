{:index 1}
# Stacked Bar Chart

## Overview

A Stacked Bar Chart is a multi-series Bar Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Stacked Bar Chart, create a multi-series [Bar Chart](../../Bar_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into **value**:

```
// create a chart
var chart = chart.bar();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create bar series
var series1 = chart.bar(seriesData_1);
var series2 = chart.bar(seriesData_2);
```

{sample}BCT\_Stacked\_Bar\_Chart{sample}

## Adjusting

The Bar series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).