{:index 1}
# Percent Stacked Area / Spline Area / StepLine Area Charts

* [Overview](#overview)
* [Chart](#chart)
* [Spline Stacked Area](#spline_stacked_area)
* [3D Stacked Area](#3d_stacked_area)
<!-- * [Adding "%" to axis labels](#percent)-->

## Overview
Data that is arranged in columns or rows on a worksheet can be plotted in an area chart. Area charts are good at emphasizing the magnitude of changes over time, as well as at drawing attention to the total value across a trend.

100% stacked area charts are multi-series area charts that display the trend of the percentage each value contributes over time or categories.

## Chart

As stacked charts should show percent contribution of different components to the total, we will demonstrate them on sales of an imaginable ACME FastFood, Corp. Let's assume that it sells Ice Creams, Chocolate Bars and Coke all through the year.
  
  
So, we have three series of data - one series for each product. Categories will be seasons:

```
  var dataSet = anychart.data.set([
    ["Winter", 12000, 12000, 10000],
    ["Spring", 13000, 12000, 17000],
    ["Summer", 25000, 15000, 19000],
    ["Autumn", 16000, 16000, 16000]
  ]);
```

Now we have to tell Y-Axis to display these series in a percent stacked mode:

```
  var yScale = chart.yScale();
  yScale.stackMode("percent");
```

And set "Area" as a default series type:

```
  chart = anychart.area();
```

Everything is ready, let’s have a look at our sample of a percent stacked area chart:

{sample}BCT_Percent-Stacked\_Area-SplineArea\_Charts\_01{sample}

## Spline Stacked Area

This type of area chart makes your data look a bit more attractive: points and angles are replaced with a single spline. Just change default series type to {api:anychart.core.cartesian.series.RangeSplineArea}"SplineArea"{api} and get your data displayed in a more appealing way:

```
  chart.splineArea(seriesData_1);
```

Here is a sample of a spline stacked area chart:

{sample}BCT_Percent-Stacked\_Area-SplineArea\_Charts\_02{sample}

## 3D Stacked Area

It requires a simple adjustment to tern common area chart into a 3D one.

```
var chart = anychart.area3d();
var series1 = chart.area3d(dataSet1);
series1.name("Sales 2009");
var series2 = chart.area3d(dataSet2);
series2.name("Sales 2010");
var series3 = chart.area3d(dataSet3);
series3.name("Sales 2011");
```

And here is a sample of percent stacked 3D area chart:

{sample}BCT_Percent-Stacked\_Area-SplineArea\_Charts\_03{sample}
