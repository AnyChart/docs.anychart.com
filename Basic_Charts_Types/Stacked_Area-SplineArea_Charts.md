# Stacked Line/Spline Charts

 * [Overview](#overview)
 * [Chart](#chart)
 * [Spline Stacked Area](#spline_stacked_area)
 * [Step Stacked Area](#step_stacked_area)

## Overview

Data that is arranged in columns or rows on a worksheet can be plotted in an area chart. Area charts are good at emphasizing the magnitude of changes over time, as well as at drawing attention to the total value across a trend.
  
Stacked area charts are multi-series area charts that display the trend each value contribute over time or categories.

## Chart

As stacked charts should show contribution of different components to the total, we will demonstrate them on sales of an imaginable ACME FastFood, Corp. Let's assume that it sells Ice Creams, Chocolate Bars and Coke all through the year.
  
So, now we've got three series of data - one series for each product. Let's define categories as seasons of a year.

```
  var dataSet = anychart.data.set([
    ["Winter", 12000, 12000, 10000],
    ["Spring", 13000, 12000, 17000],
    ["Summer", 25000, 15000, 19000],
    ["Autumn", 16000, 16000, 16000]
  ]);
```

Now we have to tell Y-Axis to display these series in a stacked area:

```
  chart.yScale().stackMode('value');
```

And set "Area" as a default series type:

```
  chart = anychart.area();
```

{sample}BCT_Stacked\_Area-SplineArea\_Charts\_01{sample}

## Spline Stacked Area

This type of area chart makes your data look a bit more attractive: points and angles are replaced with a single spline. Just change default series type to "SplineArea" and get your data displayed in a more appealing way.
Just change default series type to {api:anychart.core.cartesian.series.SplineArea}"SplineArea"{api} and get your data displayed in more appealing way:

```
    chart.splineArea(seriesData_1);
```
<!--Also, let's add area tooltips and make them more informative, to that we will change their format:

XML Syntax
XML Code
Plain code
01
<area_series>
02
  <tooltip_settings enabled="true">
03
    <format><![CDATA[{%SeriesName} - {%Value}$ - {%YPercentOfCategory}{numDecimals:2}%]]></format>
04
  </tooltip_settings>
05
</area_series>-->
Here is a sample spline stacked area chart:

{sample}BCT_Stacked\_Area-SplineArea\_Charts\_02{sample}

## Step Stacked Area

Just change default series type to "stepArea" and get your data displayed in more comparable way:

```
  chart.stepArea(seriesData_1);
```

Here is a sample html5 step stacked area chart:

{sample}BCT_Stacked\_Area-SplineArea\_Charts\_03{sample}