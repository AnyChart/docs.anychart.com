{:index 2.05}
# Percent Stacked Lollipop Chart

## Overview

A Percent Stacked Lollipop Chart (otherwise known as a 100% Stacked Lollipop Chart) is a multiple-series Lollipop Chart that displays the trend of the percentage each value contributes over time or categories.

The concept of stacking in AnyChart is explained in this article: [Stacked (Overview)](../Overview).

## Quick Start

To build a Percent Stacked Lollipop Chart, create a multiple-series [Lollipop Chart](../../Lollipop_Chart) and set {api:anychart.scales.Linear#stackMode}stackMode(){api} to **percent**. The heads of the top series land on the 100% line, where the plot bounds cut them in half; pass **false** to {api:anychart.core.cartesian.series.Lollipop#clip}clip(){api} on that series to draw them in full:

```
// create a lollipop chart
var chart = anychart.lollipop();

// enable the percent stacking mode
chart.yScale().stackMode("percent");

// show percentages on the vertical axis
chart.yAxis().labels().format("{%value}%");

// create the first lollipop series and set the data
var series1 = chart.lollipop(seriesData_1);

// turn off clipping so the plot bounds do not cut the heads at the 100% line
series1.clip(false);

// create the second lollipop series and set the data
var series2 = chart.lollipop(seriesData_2);
```

{sample}BCT\_Percent\_Stacked\_Lollipop\_Chart{sample}

## Adjusting

The Lollipop series' settings are mostly the same as other series'. The majority of information about adjusting series in AnyChart is given in the [General Settings article](../../General_Settings).
