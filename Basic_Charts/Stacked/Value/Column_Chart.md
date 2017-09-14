{:index 2}
# Stacked Column Chart

## Overview

A Stacked Column Chart is a multi-series Column Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Stacked Column Chart, create a multi-series [Column Chart](../../Column_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into **value**:

```
// create a chart
var chart = chart.column();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create column series
var series1 = chart.column(seriesData_1);
var series2 = chart.column(seriesData_2);
```

{sample}BCT\_Stacked\_Column\_Chart{sample}

## Adjusting

The Column series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).