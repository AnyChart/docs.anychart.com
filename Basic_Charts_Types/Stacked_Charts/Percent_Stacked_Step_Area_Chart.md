{:index 1}
# Percent Stacked Step Area Chart

* [Overview](#overview)
* [Chart](#chart)

## Overview

Percent stacked step area chart, also known as 100% stacked step area charts are multi-series area charts that display the trend of the percentage each value contributes over time or categories.

Concept of stacking in AnyChart is explain in [Stacked Charts](Overview) article.

## Chart

To build a Percent Stacked Step Area Chart you should create a simple multi-series [../Step_Area_Chart] and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to *percent*:

```
// create a chart
chart = chart.area();
// set stack mode
chart.yScale().stackMode("percent");

// add spline series
chart.stepArea(data1);
chart.stepArea(data2);
```

A sample of a percent stacked spline area chart:

{sample}BCT_Percent-Stacked\_Area-SplineArea\_Charts\_02{sample}
