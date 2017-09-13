{:index 8}
# Vertical Stacked Step Area Chart

## Overview

A Vertical Stacked Step Area Chart is a multi-series Step Area Chart that displays the trend of the value each series contributes over time or categories, which categories are spread among the vertical axis. The difference between simple Area Chart and Step Area is that points and angles are replaced with a polyline so the whole chart reminds of stairs.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Vertical Stacked Step Area Chart, create a multi-series [Vertical Step Area Chart](../../Vertical/Step_Area_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into <strong>value</strong>:

```
// create a vertical area chart
var chart = chart.verticalArea();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create stepArea series
var series1 = chart.stepArea(seriesData_1);
var series2 = chart.stepArea(seriesData_2);
```

{sample}BCT\_Vertical\_Stacked\_Step\_Area\_Chart{sample}

## Adjusting

The Vertical Stacked Step Area series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).