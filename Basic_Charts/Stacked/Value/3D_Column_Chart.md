{:index 0}
# 3D Stacked Column Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Adjusting](#adjusting)

## Overview

A Stacked 3D Column Chart is a multi-series 3D Column Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Stacked 3D Column Chart, create a multi-series [3D Column Chart](../../3D/Overview#column) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into <strong>value</strong>:

```
// create a chart
var chart = chart.column3d();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create 3d column series
var series1 = chart.column3d(seriesData_1);
var series2 = chart.column3d(seriesData_2);
```

{sample}BCT\_Stacked\_3D\_Column\_Chart{sample}

## Adjusting

The Stacked 3D Column series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).