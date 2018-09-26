{:index 2.1}
# Polar Percent Stacked Column Chart

## Overview

A Polar Percent Stacked Column Chart is a multiple-series Polar Column Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Polar Percent Stacked Column Chart, create a multiple-series [Polar Column Chart](../../Polar_Plot/Column_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into **percent**:

```
// create a chart
chart = chart.polar();

// enable the value stacking mode
chart.yScale().stackMode("percent");

// create column series
var series1 = chart.column(seriesData_1);
var series2 = chart.column(seriesData_2);
```

{sample}BCT\_Polar\_Percent\_Stacked\_Column\_Chart{sample}

## Adjusting

The Polar Percent Stacked Column series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).