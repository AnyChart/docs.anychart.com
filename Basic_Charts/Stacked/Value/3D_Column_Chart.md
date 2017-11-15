{:index 12}
# 3D Stacked Column Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Adjusting](#adjusting)

## Overview

A 3D Stacked Column Chart is a multi-series 3D Column Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a 3D Stacked Column Chart, create a multi-series [3D Column Chart](../../3D/Column_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into <strong>value</strong>:

```
// create a chart
var chart = chart.column3d();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create 3d column series
var series1 = chart.column(seriesData_1);
var series2 = chart.column(seriesData_2);
```

{sample}BCT\_3D\_Stacked\_Column\_Chart{sample}

## Adjusting

The 3D Stacked Column series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).