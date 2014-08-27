# Additional Axes
              
* [Overview](#overview)                                                                          
* [Definition](#definition)
* [Tuning Additional Axes](#tuning)
* [Binding Data Series to Additional Axis](#binding-series)
* [Multi Axes Sample for Comparing Units](#sample-comparing-units)
* [Multi Axes Sample for Showing Different Data on the Same Plot](#sample-different-data)
 
<a name="overview"/>
## Overview
   
In AnyChart axes are used to control values or arguments scales, grids, axes labels, lines and tickmarks. You can add multiple X and Y axes to your charts with AnyChart.
<br/><br/>
This note will describe how to use the multi axis feature of AnyChart. With this feature an arbitrary number of axes can be added to the chart. AnyChart itself doesn't impose any restrictions on the number of additional axes but from a practical concern it is most likely very difficult to interpret a chart with more than 2-3 additional axes.
<br/><br/>
Consider using multiple axes when you need:

* Compare data point values in different units, for example: Celsius against Fahrenheit degrees, kilopascal (KPa) or hectopascal (HPa) against millimeters or inches of mercury (mmHg or inHg), different currencies (USD against EUR), etc.

* Show data from the different ranges on the same plot, for example: absolute stock price changes and sales volume (price will be in dollars and volume in millions of dollars)

* Show data measured in different units on the same plot, for example: gross domestic product (GDP) volume and GDP growth rate (GDP will be in billions and rate in percents)

<a name="definition"/>
## Define an Additional Axis

If you want to define an additional axis all you need to do is to set index to it, and place as many **.yAxis()** or **.xAxis()** methods into it:

```
    chart.yAxis(1).orientation('right').title().text('Axis title');
    chart.yAxis(2).orientation('right').title().text('Axis title');
    chart.yAxis(3).orientation('right').title().text('Axis title');
```

Here is the sample of the chart that will be show when three additional y axes are added and almost no configuration is done, as you can see three additional axes are drawn on the right side of data plot and their maximum and minimum values are calculated automatically (and they are the same as main Y axis have):

{sample}AGST\_Additional\_Axes\_01{sample}

Another example of multiple axes use is multiple Y Axes along with multiple X Axes, which may be very useful in certain areas:

{sample}AGST\_Additional\_Axes\_02{sample}

<a name="tuning"/>
## Tuning Additional Axes

If you want to change any settings of additional axes you can do that just the same way as basic X and Y axes are configured, see [Axes basics](Axis_Basics) and [Axes Scale](Axis_Scale) for the details:

```
    chart.yScale().minimum(0).maximum(800000);
    chart.yScale().ticks().interval(100000);
    chart.yScale().minorTicks().interval(20000);
    var extraYScale = anychart.scales.linear();
    extraYScale.minimum(800000).maximum(1600000);
    extraYScale.ticks().interval(100000);
    extraYScale.minorTicks().interval(20000);
    var extraYAxis = chart.yAxis(1);
    extraYAxis.orientation('right').scale(extraYScale).title().text('Extra Y Axis');
    chart.yAxis().title().text('Basic Y Axes');
```
In the a sample below we will add one additional axis and set value ranges and titles for both basic Y axis and additional Y axis:

{sample}AGST\_Additional\_Axes\_03{sample}

to top
<a name="binding-series"/>
## Binding Data Series to Additional Axis

To bind data series to the certain axis you should specify it in **.yScale()** or **xScale()** attribute of the Series, by default all series work with basic **.yScale()** or **.xScale()**:

```
    var firstSeries = anychart.data.set([
        ["A", 637166],
        ["B", 721630],
        ["C", 148662],
        ["D", 78662],
        ["E", 90000]
    ]);
    var secondSeries = anychart.data.set([
        ["A", 95],
        ["B", 97],
        ["C", 96],
        ["D", 70],
        ["E", 35]
    ]);
    var columnSeries = chart.column(firstSeries);
    var lineSeries = chart.line(secondSeries);
    lineSeries.yScale(extraYScale);
```
In the a sample below we will add one additional axis with a range from 0 to 100 and and bind series of "Line" type to it:

{sample}AGST\_Additional\_Axes\_04{sample}

to top
<a name="sample-comparing-units"/>
## Multi Axes Sample for Comparing Units

Lets see how additional axes can be used to compare data in different units, for example we measure temperature an want to show Celsius, Fahrenheit and Kelvin scales. To do that we have to create three Y Axes - the basic one will be Celsius degrees, first additional axis - Fahrenheit and second additional axis - Kelvin:

```
    var FahrenheitScale = anychart.scales.linear();
    FahrenheitScale.minimum(-260).maximum(3000);
    FahrenheitScale.ticks().interval(500);
    var CelsiumScale = anychart.scales.linear();
    CelsiumScale.minimum(-274)
        .maximum(1500)
        .ticks()
            .interval(500);
    CelsiumScale.minorTicks().interval(100);
    var KelvinScale = anychart.scales.linear();
    KelvinScale.minimum(0)
        .maximum(2000)
        .ticks()
            .interval(500);
    KelvinScale.minorTicks().interval(100);
```
We defined three axes and set absolute zero as a minimum value, and Titanium melting temperature as a maximum value. We will create one series of a "Marker" type and bind it to Kelvin scale:

```
    ["Absolute Zero", 0],
    ["Lowest recorded surface temperature on Earth", 184],
    ["Celsius / Fahrenheit's 'cross-over' temperature", 233.15],
    ["Ice melts", 273.15],
    ["Average human body temperature", 309.95],
    ["Highest recorded surface temperature on Earth", 331],
    ["Water boils", 373.1339],
    ["Titanium melts", 1941]
    var markerSeries = chart.marker(data);
```
Here it is - a sample that shows different important temperatures:

{sample}AGST\_Additional\_Axes\_05{sample}

to top
<a name="sample-different-data"/>
## Multi Axes Sample for Showing Different Data on the Same Plot

Lets see how additional axes can be used to show different data on the same plot: we will plot a US Debt amount in dollars and in percents of GDP. We need to create one additional Axis adjust both basic and additional Axes:
```
    chart.yScale().minimum(0).maximum(12000000000000).ticks().interval(2000000000000);
    chart.yAxis().title().text('Debt');
    chart.yAxis(1).title().text('GDP');
    chart.yAxis().labels().textFormatter(function(){
        var value = (this.value/1000000000000);
                if (value > 0)
                    value = (this.value/1000000000000) + ' 000 bil.';
                return '$' + value;
    });
    chart.yAxis(1).labels().textFormatter(function(){
        return this.value + '%';
    });
    var extraYScale = anychart.scales.linear();
    extraYScale.minimum(0).maximum(140).ticks().interval(20);
    var extraYAxis = chart.yAxis(1);
    extraYAxis.orientation('right').scale(extraYScale);
```
We defined two axes and will create one series of a **Column** type to show debt and bind it to **yAxis**, one series of a **Line** type to show percentage changes.

Here it is - a sample chart comparing the US debt, in dark red, to the debts percent of GDP, in blue.

{sample}AGST\_Additional\_Axes\_06{sample}