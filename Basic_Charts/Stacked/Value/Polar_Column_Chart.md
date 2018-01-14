{:index 2.1}
# Polar Stacked Column Chart

## Overview

A Polar Stacked Column Chart is a multi-series Polar Column Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Polar Stacked Column Chart, create a multi-series [Polar Column Chart](../../Polar_Plot/Column_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into **value**:

```
// create a chart
chart = chart.polar();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create column series
var series1 = chart.column(seriesData_1);
var series2 = chart.column(seriesData_2);
```

{sample}BCT\_Polar\_Stacked\_Column\_Chart{sample}

## Adjusting

The Polar Column series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).