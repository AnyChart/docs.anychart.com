{:index 5}
# Percent Stacked Stick Chart

## Overview

A Percent Stacked Stick Chart (otherwise known as a 100% Stacked Stick Chart) is a multi-series Stick Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is explained in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Percent Stacked Stick Chart, create a multi-series [Stick Chart](../../Stick_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to **percent**:

```
// create a chart
chart = chart.column();

// enable the percent stacking mode
chart.yScale().stackMode("percent");

// create stick series
var series1 = chart.stick(seriesData_1);
var series2 = chart.stick(seriesData_2);
```

{sample}BCT\_Percent\_Stacked\_Stick\_Chart{sample}

## Adjusting

The Stick series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).

Note that as soon as Stick Series points have no width, there are no filling settings.