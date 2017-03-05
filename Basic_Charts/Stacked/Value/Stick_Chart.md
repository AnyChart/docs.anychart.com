{:index 1}
# Stacked Stick Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Adjusting](#adjusting)

## Overview

A Stacked Stick Chart is a multi-series Stick Chart that displays the trend of the value each series contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Stacked Stick Chart, create a multi-series [Stick Chart](../../Stick_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into <strong>value</strong>:

```
// create a chart
var chart = chart.column();

// enable the value stacking mode
chart.yScale().stackMode("value");

// create stick series
var series1 = chart.stick(seriesData_1);
var series2 = chart.stick(seriesData_2);
```

{sample}BCT\_Stacked\_Stick\_Chart{sample}

## Adjusting

The Stick series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).