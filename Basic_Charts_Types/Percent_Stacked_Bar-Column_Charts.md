{:index 1}
# Stacked Bar/Column Charts

 * [Overview](#overview)
 * [Chart](#chart)
 * [Stacked Bar](#stacked_bar)
 * [3D Stacked Column Chart](#3d_stacked_column_chart)
<!-- * [Adding "%" to axis labels](#percent) -->

## Overview
Data that is arranged in columns or rows on a worksheet can be plotted in a bar chart. Bar charts illustrate comparisons among individual items.
  
  
100% stacked bar charts compare the percentage each value contributes to a total value across categories.

## Chart

As JavaScript Stacked charts should show percent contribution of different components to the total, we will demonstrate them on sales of an imaginable ACME FastFood, Corp. Let's assume that it sells Ice Creams, Chocolate Bars and Coke all through the year.
  
  
So, we have three series of data - one series for each product, and seasons of a year will be shown as categories:

```
  var dataSet = anychart.data.set([
    ["Winter", 12000, 12000, 10000],
    ["Spring", 13000, 12000, 17000],
    ["Summer", 25000, 15000, 19000],
    ["Autumn", 16000, 16000, 16000]
  ]);
```

Now we have to tell Y-Axis to display these series as stacked columns:

```
  var yScale = chart.yScale();
  yScale.stackMode("percent");
```

Everything is ready! Here is a sample of a stacked column chart:

{sample}BCT_Percent-Stacked\_Bar-column\_Charts\_01{sample}

## Stacked Bar

Just change "column" to "bar" and get your data displayed as a bar chart:

```
  var chart = anychart.bar();
  chart.bar(seriesData_1);
  chart.bar(seriesData_2);
  chart.bar(seriesData_3);
  chart.bar(seriesData_4);
```

Also, tooltips can be enabled/disabled by adjusting {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} method:

```
  var series = chart.bar(seriesData_1);
  series.tooltip(false);
```

Here is a sample of a stacked bar chart:

{sample}BCT_Percent-Stacked\_Bar-column\_Charts\_02{sample}

## 3D Stacked Column Chart

One more quick feature demo - enabling 3D mode makes column chart three-dimensional: 

```
var chart = anychart.column3d();
```

The sample of 3D Column chart at a glance:

{sample}BCT_Percent-Stacked\_Bar-column\_Charts\_03{sample}
