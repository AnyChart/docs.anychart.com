# Range Line/Spline Area Chart
                                                                 
 * [Overview](#overview)
 * [Chart building](#how_to_create_range_chart)
 * [Temperature range chart sample](#temperature-range)
 * [Configuration](#configuration)

<a name="overview"/>
## Overview
The Range Line/Spline Area charts displays a range of data by plotting two Y values per data point. Each Y value used is drawn as the upper, and lower bounds of an area.

Some data may look very nice and are easily understood in this form, in which an area spans a region from a minimum value to a maximum value.

<a name="how_to_create_range_chart"/>
## Chart Building

As range area charts have to define lower and upper bound of area - you have to specify these two values in each column using **"low"** and **"high"** attributes.

Also "RangeLineArea" or "RangeSpineArea" series type should be specified.

```
  chart.rangeArea([
    {low: 6.1, high: 0.7},
    {low: 6.3, high: 0.6},
    {low: 8.5, high: 1.9},
]);
```

<a name="temperature-range"/>
## Temperature Range Area chart sample

This sample shows how range s can be used to chart temperature averages, the data is taken from UK weather stations 1971-2000 averages statistics:

{sample}BCT_range\_Area-SplineArea\_Charts\_01{sample}

<a name="configuration"/>
## Configuration
Range area charts are configured and tuned almost the same way as usual Area charts<!--, with the only difference: as we have to Y values (high and low point) - we have two tooltips, two labels, two markers and two lines-->.

So, to configure them we use **rangeArea** node that hold tooltip, label and marker settings.

Here is the way of changing upper and lower markers:

```
  chart.rangeSplineArea([
{x: "A", low:0, high: 100},
{x: "B", low:100, high: 200},
{x: "C", low:60, high: 200},
{x: "D", low:0, high: 60}
  ]).markers().enabled(true);
```
Here is the result of application of these settings to the sample data:
{sample}BCT_range\_Area-SplineArea\_Charts\_02{sample}
