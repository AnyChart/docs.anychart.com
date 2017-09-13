{:index 6}
# Vertical Stacked Area Chart

## Overview

A Vertical Stacked Area Chart is a multi-series Area Chart that displays the trend of the value each series contributes over time or categories, which categories are placed among the vertical axis.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Vertical Stacked Area Chart, create a multi-series [Vertical Area Chart](../../Vertical/Area_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into <strong>value</strong>:

```
// create a chart
var chart = chart.verticalArea();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create area series
var series1 = chart.area(seriesData_1);
var series2 = chart.area(seriesData_2);
```

{sample}BCT\_Vertical\_Stacked\_Area\_Chart{sample}

## Adjusting

The Vertical Stacked Area series' settings are mostly the same as simple Area series' settings. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).