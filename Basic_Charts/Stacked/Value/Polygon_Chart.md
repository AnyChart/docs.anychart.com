{:index 2.2}
# Stacked Polygon Chart

## Overview

A Stacked Polygon Chart is a multiple-series Polygon Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Stacked Polygon Chart, create a multiple-series [Polygon Chart](../../Polygon_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into **value**:

```
// create a chart
chart = chart.polar();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create polygon series
var series1 = chart.polygon(seriesData_1);
var series2 = chart.polygon(seriesData_2);
```

{sample}BCT\_Stacked\_Polygon\_Chart{sample}

## Adjusting

The Polygon series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).