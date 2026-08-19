{:index 2.05}
# Percent Stacked Lollipop Chart

## Overview

A Percent Stacked Lollipop Chart (otherwise known as a 100% Stacked Lollipop Chart) is a multiple-series Lollipop Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is explained in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Percent Stacked Lollipop Chart, create a multiple-series [Lollipop Chart](../../Lollipop_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to **percent**:

```
// create a column chart, then add lollipop series to it
var chart = anychart.column();

// enable the percent stacking mode
chart.yScale().stackMode("percent");

// create the first lollipop series and set the data
var series1 = chart.lollipop(seriesData_1);
// create the second lollipop series and set the data
var series2 = chart.lollipop(seriesData_2);
```

{sample}BCT\_Percent\_Stacked\_Lollipop\_Chart{sample}

## Adjusting

The Lollipop series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).
