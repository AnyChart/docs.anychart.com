{:index 6}
# Vertical Percent Stacked Area Chart

## Overview

A Vertical Percent Stacked Area Chart is a multi-series Area Chart that displays the trend of the percentage each value contributes over time or categories. The categories of this chart are spread among the vertical axis.

The concept of stacking in AnyChart is explained in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Vertical Percent Stacked Area Chart, you should create a multi-series [Vertical Area Chart](../../Vertical/Area_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to **percent**:

```
// create a chart
var chart = chart.verticalArea();

// enable the percent stacking mode
chart.yScale().stackMode("percent");

// create area series
var series1 = chart.area(seriesData_1);
var series2 = chart.area(seriesData_2);
```

{sample}BCT\_Vertical\_Percent\_Stacked\_Area\_Chart{sample}

## Adjusting

The Vertical Percent Stacked Area series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).