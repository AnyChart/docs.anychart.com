{:index 2}
# Percent Stacked Column Chart

## Overview

A percent Stacked Column Chart (otherwise known as a 100% Stacked Column Chart) is a multiple-series Column Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is explained in this article: [Stacked Charts (Overview)](../Overview).

## Quick Start

To build a Percent Stacked Column Chart, you should create a multiple-series [Column Chart](../../Column_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to **percent**:

```
// create a chart
chart = chart.column();

// enable the percent stacking mode
chart.yScale().stackMode("percent");

// create column series
var series1 = chart.column(seriesData_1);
var series2 = chart.column(seriesData_2);
```

{sample}BCT\_Percent\_Stacked\_Column\_Chart{sample}

## Adjusting

The Column series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).