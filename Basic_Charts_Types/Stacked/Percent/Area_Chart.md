{:index 1}
# Percent Stacked Area Chart

* [Overview](#overview)
* [Chart](#chart)

## Overview

Percent stacked area chart, also known as 100% stacked area charts are multi-series area charts that display the trend of the percentage each value contributes over time or categories.

Concept of stacking in AnyChart is explain in [Stacked Charts](Overview) article.

## Chart

To build a Percent Stacked Area Chart you should create a simple multi-series [Area Chart](../Area_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to *percent*:

```
// create a chart
chart = chart.area();

// set stack mode
chart.yScale().stackMode("percent");
```

A sample of a percent stacked area chart:

{sample}BCT\_Percent\_Stacked\_Area\_Chart{sample}
