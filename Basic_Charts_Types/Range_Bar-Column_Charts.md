# Range Column/Bar chart

## Overview

The Range Column/Bar charts displays a range of data by plotting two Y values per data point. Each Y value used is drawn as the upper, and lower bounds of a column/bar.

Sometimes range charts are referred as "floating" column/bar charts. Some data may look very nice and are easily understood in this form, in which the column floats in the chart, spanning a region from the minimum value to the maximum value.

Also you can create Waterfall charts - this type is a special type of Floating Column Charts. A typical waterfall chart shows how an initial value is increasing and decreasing by a series of intermediate values, leading to a final value.

## Chart

As range bar charts have to define lower and upper bound of bars, you have to specify these two values using **"low"** and **"high"** parameters.
 
Also "RangeBar" series type should be specified.

```
    chart.rangeBar([
        { high: 0.6, low: 6.3},
        { high: 0.7, low: 6.1},
        { high: 1.9, low: 8.5}
    ]);
```

## Temperature Range Chart Sample

This sample shows how JavaScript range bars can be used to chart temperature averages, the data is taken from UK average weather statistics from 1971 to 2000:

{sample}BCT_Range\_Bar-Column\_Charts\_01{sample}

## Waterfall Chart Sample

In the sample below we formatted start and end values, here we will colorize chart as we need. Here it is - a Waterfall chart is displayed.

{sample}BCT_Range\_Bar-Column\_Charts\_02{sample}
