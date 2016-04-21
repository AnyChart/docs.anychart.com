{:index 1}
# Stacked Bar/Column Charts

* [Overview](#overview)
* [Chart](#chart)
* [Stacked Bar](#stacked_bar)
* [3D Stacked Column Chart](#3d_stacked_column_chart)
* [Clustered Charts](#clustered_charts)
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

## Clustered Charts

As far as there might be quite a few series on a stacked chart you need a way to somehow divide them into groups. In previous sample we were comparing sales of an ACME FastFood, Corp. through a single year. Now, let's prepare sales through several years for further usage:

```
  var dataSet = anychart.data.set([
      ["Winter", 12000, 12000, 10000, 13500, 14000, 11000],
      ["Spring", 13000, 12000, 17000, 12500, 11000, 14000],
      ["Summer", 25000, 15000, 19000, 30000, 23000, 20000],
      ["Autumn", 16000, 16000, 16000, 23000, 17000, 18000]
  ]);
```

Now we need to map our data:

```
  var dataMap2010_1 = dataSet.mapAs({x: [0], value: [1]});
  var dataMap2010_2 = dataSet.mapAs({x: [0], value: [2]});
  var dataMap2010_3 = dataSet.mapAs({x: [0], value: [3]});

  var dataMap2011_1 = dataSet.mapAs({x: [0], value: [1]});
  var dataMap2011_2 = dataSet.mapAs({x: [0], value: [2]});
  var dataMap2011_3 = dataSet.mapAs({x: [0], value: [3]});
```

After data mapping let's proceed to clustering series. First of all, we need to create a scale for each group of series and define {api:anychart.scales.Linear#stackMode}**.stackMode()**{api} for each scale. After it we will apply our scale for each series group.

```
  var scale2010 = chart.yScale();
  scale2010.stackMode("value");
  
  var scale2011 = anychart.scales.linear();
  scale2011.stackMode("percent");
```

To apply scales to the series we will use {api:anychart.core.cartesian.series.Column#yScale}**.yScale()**{api} method with the scale as method's parameter:

```
  var series2010_1 = chart.column(dataMap2010_1);
  series2010_1.name("Burgers");
  var series2010_2 = chart.column(dataMap2010_2);
  series2010_2.name("Salads");
  var series2010_3 = chart.column(dataMap2010_3);
  series2010_3.name("Drinks");

  var series2011_1 = chart.column(dataMap2011_1);
  series2011_1.yScale(scale2011);
  series2011_1.name("Burgers");
  var series2011_2 = chart.column(dataMap2011_2);
  series2011_2.yScale(scale2011);
  series2011_2.name("Salads");
  var series2011_3 = chart.column(dataMap2011_3);
  series2011_3.yScale(scale2011);
  series2011_3.name("Drinks");
```

Here is the result:

{sample}BCT_Percent-Stacked\_Bar-column\_Charts\_04{sample}
