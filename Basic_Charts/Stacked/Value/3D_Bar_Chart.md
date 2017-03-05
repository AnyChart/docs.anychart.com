{:index 0}
# 3D Stacked Bar Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Adjusting](#adjusting)

## Overview

A Stacked 3D Bar Chart is a multi-series 3D Bar Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Stacked 3D Bar Chart, create a multi-series [3D Bar Chart](../../3D/Overview#bar) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into <strong>value</strong>:

```
// create a chart
var chart = chart.bar3d();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create 3d bar series
var series1 = chart.bar3d(seriesData_1);
var series2 = chart.bar3d(seriesData_2);
```

{sample}BCT\_Stacked\_3D\_Bar\_Chart{sample}

## Adjusting

The Stacked 3D Bar series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).