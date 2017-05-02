{:index 4}
# Vertical Stick Chart

* [Overview](#overview)
* [Quick Start](#quick_start)
* [Adjusting](#adjusting)

## Overview

A Vertical Stick Chart is a simple Stick Chart with its categories spread among the vertical axis. It looks like a Bar Chart with bars of no width.

Find how to create an Area Chart in the following article: [Stick Chart](../Stick_Chart).

## Quick Start

To build a Vertical Stick Chart, create a simple [Stick Chart](../Stick_Chart) using the {api:anychart#bar}bar(){api} method of chart creation instead of the {api:anychart#column}column(){api}:

```
// create a chart
var chart = chart.bar();

// create area series
var series1 = chart.stick(seriesData_1);
var series2 = chart.stick(seriesData_2);
```

{sample}BCT\_Vertical\_Stick\_Chart{sample}

## Adjusting

The Vertical Stick series' settings are mostly the same as Stick series' settings. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../General_Settings).