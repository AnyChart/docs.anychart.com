{:index 10}
# Polar Percent Stacked Area Chart

## Overview

A Radar Percent Stacked Area Chart is a multi-series Radar Area Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Radar Precent Stacked Area Chart, create a multi-series [Radar Area Chart](../../Radar_Plot/Area_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into **percent**:

```
// create a chart
chart = chart.radar();

// enable the value stacking mode
chart.yScale().stackMode("percent");

// create area series
var series1 = chart.area(seriesData_1);
var series2 = chart.area(seriesData_2);
```

{sample}BCT\_Radar\_Percent\_Stacked\_Area\_Chart{sample}

## Adjusting

The Radar Percent Stacked Area series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).