{:index 4}
# Percent Stacked Step Area Chart

## Overview

A Percent Stacked Step Area Chart (also known as a 100% Stacked Step Area Chart) is a multi-series Area Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is explained in this article: [Stacked Charts (Overview)](../Overview).

## Quick Start

To build a Percent Stacked Step Area Chart, you should create a multi-series [Step Area Chart](../../Step_Area_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to <strong>percent</strong>:

```
// create a chart
var chart = chart.area();

// enable the percent stacking mode
chart.yScale().stackMode("percent");

// create step area series
var series1 = chart.stepArea(seriesData_1);
var series2 = chart.stepArea(seriesData_2);
```

{sample}BCT\_Percent\_Stacked\_Step\_Area\_Chart{sample}

## Adjusting

The Step Area series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).