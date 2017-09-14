{:index 0}
# Percent Stacked Area Chart

## Overview

A Percent Stacked Area Chart (also known as a 100% Stacked Area Chart) is a multi-series Area Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is explained in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Percent Stacked Area Chart, you should create a multi-series [Area Chart](../../Area_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to **percent**:

```
// create a chart
var chart = chart.area();

// enable the percent stacking mode
chart.yScale().stackMode("percent");

// create area series
var series1 = chart.area(seriesData_1);
var series2 = chart.area(seriesData_2);
```

{sample}BCT\_Percent\_Stacked\_Area\_Chart{sample}

## Adjusting

The Area series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).