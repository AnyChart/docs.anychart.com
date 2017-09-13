{:index 7}
# Vertical Percent Stacked Spline Area Chart

## Overview

A Vertical Percent Stacked Spline Area Chart is a multi-series Spline Area Chart that displays the trend of the percentage each value contributes over time or categories. The categories of this chart are spread among the vertical axis. The difference between simple Area Chart and Spline Area is that points and angles are replaced with a single spline.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Vertical Percent Stacked Spline Area Chart, create a multi-series [Vertical Spline Area Chart](../../Vertical/Spline_Area_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into <strong>percent</strong>:

```
// create a vertical area chart
var chart = chart.verticalArea();

// enable the value stacking mode
chart.yScale().stackMode("percent");

// create splineArea series
var series1 = chart.splineArea(seriesData_1);
var series2 = chart.splineArea(seriesData_2);
```

{sample}BCT\_Vertical\_Percent\_Stacked\_Spline\_Area\_Chart{sample}

## Adjusting

The Vertical Percent Stacked Spline Area series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).