{:index 1}
# Stacked Bar/Column Charts

* [Overview](#overview)
* [Chart](#chart)
* [Stacked Bar](#stacked_bar)
* [3D Stacked Column Chart](#3d_stacked_column_chart)
* [Clustered Charts](#clustered_charts)

## Overview

Data that is arranged in columns or rows on a worksheet can be plotted in a bar chart. Bar charts illustrate comparisons among individual items.

## Chart

As stacked charts should show contribution of different components to the total, we will demonstrate them on sales of an imaginable ACME FastFood, Corp. Let's assume that it sells Ice Creams, Chocolate Bars and Coke all through the year.
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
  chart.yScale().stackMode('value');
```

Everything is ready! Here is a sample of a js stacked column chart:

{sample}BCT_Stacked\_Bar-Column\_Charts\_02{sample}

## Stacked Bar

Just change "column" to "bar" and get your data displayed as a bar chart:

```
  chart = anychart.column();
  series = chart.column(seriesData_1);
  series = chart.column(seriesData_2);
  series = chart.column(seriesData_3);
  series = chart.column(seriesData_4);
```

Also, tooltips can be enabled/disabled by adjusting {api:anychart.core.cartesian.series.Base#tooltip}**.tooltip()**{api} method:

```
    series = chart.column(seriesData_1);
    series.tooltip().enabled(false);
```

Here is a sample of a stacked bar chart:

{sample}BCT_Stacked\_Bar-Column\_Charts\_01{sample}

## 3D Stacked Column Chart

One more quick feature demo - enabling 3D mode makes column chart three-dimensional:

```
var chart = anychart.column3d();
```

The sample of 3D Column chart at a glance:

{sample}BCT_Stacked\_Bar-Column\_Charts\_03{sample}

## Clustered Charts

To produce so called Clustered Stacked Charts you need do use some trickery with data and settings, let's go through this process with sales data for ACME FastFood, Corp. for a couple of years.  
  
Suppose we have data for 2 years, broken down to 4 seasons, for 3 products:

```
  var dataSet = anychart.data.set([
      ["Winter", 12000, 12000, 10000, 13500, 14000, 11000],
      ["Spring", 13000, 12000, 17000, 12500, 11000, 14000],
      ["Summer", 25000, 15000, 19000, 30000, 23000, 20000],
      ["Autumn", 16000, 16000, 16000, 23000, 17000, 18000]
  ]);
```

Mapping for series must be done like this:

```
  var dataMap2010_1 = dataSet.mapAs({x: [0], value: [1]});
  var dataMap2010_2 = dataSet.mapAs({x: [0], value: [2]});
  var dataMap2010_3 = dataSet.mapAs({x: [0], value: [3]});

  var dataMap2011_1 = dataSet.mapAs({x: [0], value: [1]});
  var dataMap2011_2 = dataSet.mapAs({x: [0], value: [2]});
  var dataMap2011_3 = dataSet.mapAs({x: [0], value: [3]});
```

After data mapping let's proceed to clustering series. First of all, we need to create a scale for each group of series and define {api:anychart.scales.Linear#stackMode}**.stackMode()**{api} for each scale. After that we will apply our scale for each series group.

```
  var scale2010 = chart.yScale();
  scale2010.stackMode("value");
  
  var scale2011 = anychart.scales.linear();
  scale2011.stackMode("value");
```

To apply scales to the series we use {api:anychart.core.cartesian.series.Column#yScale}**.yScale()**{api} method with the scale as method's parameter:

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

{sample}BCT_Stacked\_Bar-Column\_Charts\_04{sample}

**Note:** Custom scales do not sync themselves in terms of minimum and maximum, this may lead to the confusion when you use them. In the previous sample we've synced scales simply by setting the same minimum and maximum to all three of them. In real world you may not know what kind of data comes to the chart and may want to rely on automatic scales calculations. In this case you may need to sync scales automatically, this can be done, for example, like this:


```
  var scales = [chart.yScale(), scale2011];
  for(var i=0;i<scales.length;i++){
    scales[i].maximum(Math.max(chart.yScale().maximum(), scale2011.maximum()));
    scales[i].minimum(Math.min(chart.yScale().minimum(), scale2011.minimum()));
  }
```

And here is the same sample as above, we've used scale range autocalculations and synced them, so the minimum and maximum are calculated by the engine for better fit:

{sample}BCT_Stacked\_Bar-Column\_Charts\_05{sample}
