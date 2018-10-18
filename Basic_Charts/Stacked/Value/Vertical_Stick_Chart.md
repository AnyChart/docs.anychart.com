{:index 9}
# Vertical Stacked Stick Chart

## Overview

A Vertical Stacked Stick Chart is a multiple-series Stick Chart that displays the trend of the value each series contributes over time or categories, which categories are spread among the vertical axis.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Vertical Stacked Stick Chart, create a multiple-series [Vertical Stick Chart](../../Vertical/Stick_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into **value**:

```
// create a chart
chart = chart.bar();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create stick series
var series1 = chart.stick(seriesData_1);
var series2 = chart.stick(seriesData_2);
```

{sample}BCT\_Vertical\_Stacked\_Stick\_Chart{sample}

## Adjusting

The Vertical Stacked Stick series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).