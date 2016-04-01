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

## Clustered 

As far as there might be quite a few series on a stacked chart you need a way to somehow divide them into groups. In previous sample we were comparing sales of an ACME FastFood, Corp. through a single year. Now, let's prepare sales through several years for further usage:

```
  var dataSet2010 = anychart.data.set([
      ["Winter", 12000, 12000, 10000],
      ["Spring", 13000, 12000, 17000],
      ["Summer", 25000, 15000, 19000],
      ["Autumn", 16000, 16000, 16000]
  ]);
  
  var dataSet2011 = anychart.data.set([
      ["Winter", 13500, 14000, 11000],
      ["Spring", 12500, 11000, 14000],
      ["Summer", 30000, 23000, 20000],
      ["Autumn", 23000, 17000, 18000]
  ]);
  
  var dataSet2012 = anychart.data.set([
      ["Winter", 10000, 13000, 12000],
      ["Spring", 15000, 19000, 13500],
      ["Summer", 19000, 21000, 25000],
      ["Autumn", 22000, 23500, 11000]
  ]);
```

Now we need to map our data:

```
  var dataMap2010_1 = dataSet2010.mapAs({x: [0], value: [1]});
  var dataMap2010_2 = dataSet2010.mapAs({x: [0], value: [2]});
  var dataMap2010_3 = dataSet2010.mapAs({x: [0], value: [3]});
  
  var dataMap2011_1 = dataSet2011.mapAs({x: [0], value: [1]});
  var dataMap2011_2 = dataSet2011.mapAs({x: [0], value: [2]});
  var dataMap2011_3 = dataSet2011.mapAs({x: [0], value: [3]});
  
  var dataMap2012_1 = dataSet2012.mapAs({x: [0], value: [1]});
  var dataMap2012_2 = dataSet2012.mapAs({x: [0], value: [2]});
  var dataMap2012_3 = dataSet2012.mapAs({x: [0], value: [3]});
```

After data mapping let's proceed to clustering series. First of all, we need to create a scale for each group of series and define **.stakedMode()** for each scale. After it we will apply our scale for each series group.

```
  var scale2011 = anychart.scales.linear();
  scale2011.stackMode("percent");
  
  var scale2012 = anychart.scales.linear();
  scale2012.stackMode("percent");
```

To apply scales to the series we will use **.yScale()** method with the scale as method's parameter:

```
  chart.column(dataMap2010_1);
  chart.column(dataMap2010_2);
  chart.column(dataMap2010_3);
  
  var series2011_1 = chart.column(dataMap2011_1);
  series2011_1.yScale(scale2011);
  var series2011_2 = chart.column(dataMap2011_2);
  series2011_2.yScale(scale2011);
  var series2011_3 = chart.column(dataMap2011_3);
  series2011_3.yScale(scale2011);
  
  var series2012_1 = chart.column(dataMap2012_1);
  series2012_1.yScale(scale2012);
  var series2012_2 = chart.column(dataMap2012_2);
  series2012_2.yScale(scale2012);
  var series2012_3 = chart.column(dataMap2012_3);
  series2012_3.yScale(scale2012);
```

Here is the result:

{sample}BCT_Percent-Stacked\_Bar-column\_Charts\_04{sample}
