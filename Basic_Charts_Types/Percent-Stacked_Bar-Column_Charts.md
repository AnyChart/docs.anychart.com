# Stacked Bar/Column Charts

 * [Overview](#overview)
 * [Chart](#chart)
 * [Stacked Bar](#stacked-bar)
<!-- * [Adding "%" to axis labels](#percent) -->

<a name="overview"/>
## Overview
Data that is arranged in columns or rows on a worksheet can be plotted in a bar chart. Bar charts illustrate comparisons among individual items. 

100% stacked bar charts compares the percentage each value contributes to a total across categories.

<a name="chart"/>
## Chart

As stacked charts should show contribution of different components to the total, we will demonstrate them on an imaginable ACME FastFood, Corp. sales. Let's assume that it sells Ice Cream, Chocolate Bar and Coke all through the year.

So, we have three series of data - one series for each product, and we give proper names to each series:
```
    var dataSet = anychart.data.set([
        ["Winter", 12000, 12000, 10000],  
        ["Spring", 13000, 12000, 17000],  
        ["Summer", 25000, 15000, 19000],  
        ["Autumn", 16000, 16000, 16000]   
    ]);
```
Now we have to tell Y Axis to display these series in as stacked columns:
```
    chart.yScale().stackMode('percent');
```
Everything is ready, here is a sample stacked column chart:

{sample}BCT_Percent-Stacked\_Bar-column\_Charts\_01{sample}

<a name="stacked-bar"/>
## Stacked Bar Chart

Just change "columnChart" to "barChart" and get your data displayed as a bar chart:
```
    chart = anychart.columnChart();
    series = chart.column(seriesData_1);
    series = chart.column(seriesData_2);
    series = chart.column(seriesData_3);
    series = chart.column(seriesData_4);
```
Also, tooltips can be enabled/disabled by adjusting **.tooltip()** method:
```
    series = chart.column(seriesData_1);
    series.tooltip().enabled(false);
```
Here is a sample stacked bar chart:

{sample}BCT_Percent-Stacked\_Bar-column\_Charts\_02{sample}
<!--

3D Stacked Column Chart

One more quick feature demo - enabling 3D mode makes column chart three-dimensional:

XML Syntax
XML Code
Plain code
01
<data_plot_settings enable_3d_mode="True" />
The sample of 3D Column chart at a glance:

Live Sample:  Sample 3D Stacked Column Chart

Current Page Online URL: Stacked Bar/Column Chart-->