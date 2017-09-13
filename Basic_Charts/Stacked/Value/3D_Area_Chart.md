{:index 10}
# 3D Stacked Area Chart

## Overview

A 3D Stacked Area Chart is a multi-series 3D Area Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a 3D Stacked Area Chart, create a multi-series [3D Area Chart](../../3D/Overview#area) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into <strong>value</strong>:

```
// create a chart
var chart = chart.area3d();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create 3d area series
var series1 = chart.area(seriesData_1);
var series2 = chart.area(seriesData_2);
```

{sample}BCT\_3D\_Stacked\_Area\_Chart{sample}

## Adjusting

The 3D Stacked Area series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).