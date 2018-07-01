{:index 1}
# Percent Stacked Bar Chart

## Overview

A Percent Stacked Bar Chart (otherwise known as a 100% Stacked Bar Chart) is a multi-series Bar Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is explained in this article: [Stacked Charts (Overview)](../Overview).

## Quick Start

To build a Percent Stacked Bar Chart, you should create a multi-series [Bar Chart](../../Bar_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to **percent**:

```
// create a chart
chart = chart.bar();

// enable the percent stacking mode
chart.yScale().stackMode("percent");

// create step area series
var series1 = chart.bar(seriesData_1);
var series2 = chart.bar(seriesData_2);
```

{sample}BCT\_Percent\_Stacked\_Bar\_Chart{sample}

## Adjusting

The Bar series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).