{:index 2.2}
# Percent Stacked Polygon Chart

## Overview

A Percent Stacked Polygon Chart (also known as a 100% Stacked Polygon Chart) is a multi-series Polygon Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is explained in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Percent Stacked Polygon Chart, you should create a multi-series [Polygon Chart](../../Polygon_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to **percent**:

```
// create a chart
chart = anychart.polar();

// enable the percent stacking mode
chart.yScale().stackMode("percent");

// create polygon series
var series1 = chart.polygon(seriesData_1);
var series2 = chart.polygon(seriesData_2);
```

{sample}BCT\_Percent\_Stacked\_Polygon\_Chart{sample}

## Adjusting

The Polygon series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).