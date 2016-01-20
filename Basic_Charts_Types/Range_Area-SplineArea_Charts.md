{:index 1}
# Range Line/Spline Area Chart

* [Overview](#overview)
* [Chart](#chart)
* [Temperature Range Area Chart Sample](#temperature_range_area_chart_sample)
* [Configuration](#configuration)
* [3D Mode](#3d_mode)

## Overview

The Range Line/Spline Area charts displays a range of data by plotting two Y values per data point. Each Y value used is drawn as the upper and the lower bounds of an area.
  
  
Some data may look very nice and are easily understood in this form, in which an area spans a region from the minimum value to the maximum value.

## Chart

As range area charts have to define lower and upper bounds of area - you have to specify these two values in each column using **"low"** and **"high"** parameters.
    
Also "RangeLineArea" or "RangeSpineArea" series type should be specified.

```
    chart.rangeArea([
        {low: 6.1, high: 0.7},
        {low: 6.3, high: 0.6},
        {low: 8.5, high: 1.9}
    ]);
```

## Temperature Range Area Chart Sample

This sample shows how ranges can be used to create JavaScript graph of temperature averages, the data is taken from UK average weather statistics from 1971 to 2000:

{sample}BCT_Range\_Area-SplineArea\_Charts\_01{sample}

## Configuration
Range area charts are configured and tuned almost the same way as usual Area charts.<!--, with the only difference: as we have to Y values (high and low point) - we have two tooltips, two labels, two markers and two lines-->.
  
  
So, to configure them we use the {api:anychart.core.cartesian.series.RangeArea}**rangeArea**{api} parameter that holds labels and markers settings.
  
  
Here is the way of changing upper markers:

```
    chart.rangeSplineArea([
        {x: "A", low:0, high: 100},
        {x: "B", low:100, high: 200},
        {x: "C", low:60, high: 200},
        {x: "D", low:0, high: 60}
    ]).markers().enabled(true);
```

Here is the result of applying these settings to the sample data:

{sample}BCT_Range\_Area-SplineArea\_Charts\_02{sample}
<!--
## 3D Mode

Use **.area3d()** method to enable 3d mode of area chart.
```
var chart = anychart.area3d();
var series1 = chart.area3d(dataSet1);
series1.name("Sales 2009");
var series2 = chart.area3d(dataSet2);
series2.name("Sales 2010");
var series3 = chart.area3d(dataSet3);
series3.name("Sales 2011");
```

Here is a sample how 3d area looks like: 

{sample}BCT_Range\_Area-SplineArea\_Charts\_03{sample}
-->
