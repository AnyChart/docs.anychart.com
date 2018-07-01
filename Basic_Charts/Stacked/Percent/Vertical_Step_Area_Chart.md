{:index 8}
# Vertical Percent Stacked Step Area Chart

## Overview

A Vertical Percent Stacked Step Area Chart is a multi-series Step Area Chart that displays the trend of the percentage each value contributes over time or categories. The categories of this chart are spread among the vertical axis. The difference between simple Area Chart and Step Area is that points and angles are replaced with a polyline so the whole chart reminds of stairs.

The concept of stacking in AnyChart is described in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Vertical Percent Stacked Step Area Chart, create a multi-series [Vertical Step Area Chart](../../Vertical/Step_Area_Chart) and set the {api:anychart.scales.Linear#stackMode}stackMode(){api} method into **percent**:

```
// create a vertical area chart
chart = chart.verticalArea();

// enable the value stacking mode
chart.yScale().stackMode("percent");

// create stepArea series
var series1 = chart.stepArea(seriesData_1);
var series2 = chart.stepArea(seriesData_2);
```

{sample}BCT\_Vertical\_Percent\_Stacked\_Step\_Area\_Chart{sample}

## Adjusting

The Vertical Percent Stacked Step Area series' settings are mostly the same as other series' ones. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).