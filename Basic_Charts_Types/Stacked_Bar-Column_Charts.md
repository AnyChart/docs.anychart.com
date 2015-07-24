# Stacked Bar/Column Charts

 * [Overview](#overview)
 * [Chart](#chart)
 * [Stacked Bar](#stacked_bar)

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

Everything is ready! Here is a sample of a stacked column chart:

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
<!--

3D Stacked Column Chart

One more quick feature demo - enabling 3D mode makes column chart three-dimensional:

XML Syntax
XML Code
Plain code
01
<data_plot_settings enable_3d_mode="True" />
The sample of 3D Column chart at a glance:
-->