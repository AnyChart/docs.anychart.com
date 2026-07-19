{:index 2.05}
# Stacked Lollipop Chart

## Overview

A Stacked Lollipop Chart is a multiple-series Lollipop Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Stacked Lollipop Chart, create a multiple-series [Lollipop Chart](../../Lollipop_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method to **value**:

```
// create a chart
chart = anychart.column();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create lollipop series
var series1 = chart.lollipop(seriesData_1);
var series2 = chart.lollipop(seriesData_2);
```

{sample}BCT\_Stacked\_Lollipop\_Chart{sample}

## Adjusting

The Lollipop series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).
