# Range Column/Bar chart
                                                                         
 * [Overview](#overview)
 * [Chart](#chart)
 * [Temperature Range Chart Sample](#temperature)
 * [Waterfall Chart Sample](#waterfall)

<a name="overview"/>
## Overview
The Range Column/Bar charts displays a range of data by plotting two Y values per data point. Each Y value used is drawn as the upper, and lower bounds of a column/bar.

Sometimes range charts are referred as "floating" column/bar charts. Some data may look very nice and are easily understood in this form, in which the column floats in the chart, spanning a region from a minimum value to a maximum value.

Also you can create Waterfall charts, which are a special type of Floating Column Charts. A typical waterfall chart shows how an initial value is increased and decreased by a series of intermediate values, leading to a final value.

<a name="chart"/> 
## Chart

As range bar charts have to define lower and upper bound of bars - you have to specify these two values using **"low"** and **"high"** attributes.

Also "RangeBar" series type should be specified.

```
    chart.rangeBar([
        { high: 0.6, low: 6.3},
        { high: 0.7, low: 6.1},
        { high: 1.9, low: 8.5},
    ]);
```

<a name="temperature"/> 
## Temperature Range Chart Sample

This sample shows how range bars can be used to chart temperature averages, the data is taken from UK weather stations 1971-2000 averages statistics:

{sample}BCT_Range\_Bar-Column\_Charts\_01{sample}

<a name="waterfall"/>
## Waterfall Chart Sample

In the sample below we formatted start and end values, here we will colorize chart as we need. Here it is - waterfall chart is displayed.

{sample}BCT_Range\_Bar-Column\_Charts\_02{sample}