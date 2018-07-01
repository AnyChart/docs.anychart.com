{:index 11}
# 3D Percent Stacked Bar Chart

## Overview

A 3D Percent Stacked Bar Chart is a multi-series 3D Bar Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a 3D Percent Stacked Bar Chart, create a multi-series [3D Bar Chart](../../3D/Bar_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into **percent**:

```
// create a chart
chart = chart.bar3d();

// enable the value stacking mode
chart.yScale().stackMode("percent");

// create 3d bar series
var series1 = chart.bar3d(seriesData_1);
var series2 = chart.bar3d(seriesData_2);
```

{sample}BCT\_3D\_Percent\_Stacked\_Bar\_Chart{sample}

## Adjusting

The 3D Percent Stacked Bar series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).