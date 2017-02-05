{:index 1}
# Percent Stacked Spline Area Chart

* [Overview](#overview)
* [Chart](#chart)

## Overview

Percent stacked spline area chart, also known as 100% stacked spline area charts are multi-series area charts that display the trend of the percentage each value contributes over time or categories.

Concept of stacking in AnyChart is explain in [Stacked Charts](Overview) article.

## Chart

To build a Percent Stacked Spline Area Chart you should create a simple multi-series (Spline Area Chart)[../Spline_Area_Chart] and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to *percent*:

```
// create a chart
chart = chart.area();
// set stack mode
chart.yScale().stackMode("percent");

// add spline series
chart.splineArea(data1);
chart.splineArea(data2);
```

A sample of a percent stacked spline area chart:

{sample}BCT\_Percent\_Stacked\_Spline\_Area\_Chart{sample}
