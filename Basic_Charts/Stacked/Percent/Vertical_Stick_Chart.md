{:index 9}
# Vertical Percent Stacked Stick Chart

## Overview

A Vertical Percent Stacked Stick Chart is a multi-series Stick Chart that displays the trend of the percentage each value contributes over time or categories. The categories of this chart are spread among the vertical axis.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Vertical Percent Stacked Stick Chart, create a multi-series [Vertical Stick Chart](../../Vertical/Stick_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into <strong>percent</strong>:

```
// create a chart
var chart = chart.bar();

// enable the value stacking mode
chart.yScale().stackMode("percent");

// create stick series
var series1 = chart.stick(seriesData_1);
var series2 = chart.stick(seriesData_2);
```

{sample}BCT\_Vertical\_Percent\_Stacked\_Stick\_Chart{sample}

## Adjusting

The Vertical Percent Stacked Stick series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).