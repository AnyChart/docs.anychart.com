# Additional Axes

## Overview
  
In AnyChart charting library axis is a line at the edge of the chart that displays scale calculations to which series (or chart) values referred for measurement. You can add multiple X and Y axes to your charts with AnyChart.
  
This article describes how to use the multi axis feature of AnyChart js framework. With this feature an arbitrary number of axes can be added to the chart. AnyChart itself doesn't impose any restrictions on the number of additional axes but from a practical concern it is most likely very difficult to interpret a chart with more than 2-3 additional axes.  

Consider using multiple axes when you need:
  
* Compare data point values in different units, for example: Celsius against Fahrenheit degrees, kilopascal (KPa) or hectopascal (HPa) against millimeters or inches of mercury (mmHg or inHg), different currencies (USD against EUR), etc.
  
* Show data from the different ranges on the same plot, for example: absolute stock price changes and sales volume (price will be in dollars and volume in millions of dollars)
  
* Show data measured in different units on the same plot, for example: gross domestic product (GDP) volume and GDP growth rate (GDP will be in billions and rate in percents)

## Declaration

If you want to declare an additional axis all you need to do is to set index to it, and set as many {api:anychart.charts.Cartesian#yAxis}yAxis(){api} or {api:anychart.charts.Cartesian#xAxis}xAxis(){api} methods as you want:

```
// First additional axis
var yAxis1 = chart.yAxis(1);
yAxis1.orientation("right");
yAxis1.title("First additional axis");
  
// Second additional axis
var yAxis2 = chart.yAxis(2);
yAxis2.orientation("right");
yAxis2.title("Second additional axis");
  
// Third additional axis
var yAxis3 = chart.yAxis(3);yAxis3.orientation("right");
yAxis3.title("Third additional axis");
```

Here is the sample of the js chart that shows three additional Y axes and almost no configuration is done, as you can see three additional axes are drawn on the right side of data plot and their maximum and minimum values are calculated automatically (and they are the same as main Y axis):

{sample}AGST\_Additional\_Axes\_01{sample}

Another example of multiple axes use is multiple Y Axes along with multiple X Axes, which may be very useful on scatter plot:

{sample}AGST\_Additional\_Axes\_02{sample}

## Tuning

If you want to change any settings of additional axes you can do that just the same way as basic X and Y axes are configured, see [Axes basics](Axis_Basics) and [Scales](Scales) articles for the details:

```
// Tune default y scale
var yScale = chart.yScale();
yScale.minimum(0);
yScale.maximum(800000);
var yTicks = yScale.ticks();
yTicks.interval(100000);
var yMinorTicks = yScale.minorTicks();
yMinorTicks.interval(20000);

// Create and tune additional y scale
var extraYScale = anychart.scales.linear();
extraYScale.minimum(800000);
extraYScale.maximum(1600000);
var extraTicks = extraYScale.ticks();
extraTicks.interval(100000);
var extraMinorTicks = extraYScale.minorTicks();
extraMinorTicks.interval(20000);

// Create and tune additional y axis
var extraYAxis = chart.yAxis(1);
extraYAxis.orientation("right");
extraYAxis.scale(extraYScale);
extraYAxis.title("Extra Y Axis");

// Tune default y axis
var yAxis = chart.yAxis(0);
yAxis.title("Basic Y Axes");
```

In the a sample below we will add one additional axis and set value ranges and titles for both basic Y axis and additional Y axis:

{sample}AGST\_Additional\_Axes\_03{sample}

## Binding Series

To bind data series to the certain axis you should specify it in {api:anychart.core.cartesian.series.Base#yScale}series.yScale(){api} or {api:anychart.core.cartesian.series.Base#xScale}series.xScale(){api} attribute. By default all series work with {api:anychart.charts.Cartesian#yScale}chart.yScale(){api} or {api:anychart.charts.Cartesian#xScale}chart.xScale(){api}:

```
var firstSeries = [
  ["A", 637166],
  ["B", 721630],
  ["C", 148662],
  ["D", 78662],
  ["E", 90000]
];

var secondSeries = [
  ["A", 95],
  ["B", 97],
  ["C", 96],
  ["D", 70],
  ["E", 35]
];

var columnSeries = chart.column(firstSeries);

var lineSeries = chart.line(secondSeries);
lineSeries.yScale(extraYScale);
```

In the a sample below we add one additional axis with a range from 0 to 100 and bind series of "Line" type to it:

{sample}AGST\_Additional\_Axes\_04{sample}

## Multi Axes Sample for Comparing Units

Lets see how additional axes can be used to compare data in different units, for example we measure temperature and want to show Celsius, Fahrenheit and Kelvin scales. To do that we have to create three Y Axes - the basic one will be Celsius degrees, first additional axis - Fahrenheit and second additional axis - Kelvin:

```
// create scale for temperature in degrees kelvin
var kelvinScale = anychart.scales.linear();
// set scale minimum
kelvinScale.minimum(0);
// set scale maximum
kelvinScale.maximum(2000);
// scale ticks getter
var kelvinTicks = kelvinScale.ticks();
// set ticks interval
kelvinTicks.interval(500);

// create scale for temperature in degrees fahrenheit
var fahrenheitScale = anychart.scales.linear();
// set scale minimum value
fahrenheitScale.minimum(
  // get kelvin scale minimum value and transform it into fahrenheit
  (kelvinScale.minimum() - 273.15)*1.8 + 32
);
// set scale maximum value 
fahrenheitScale.maximum(
  // get kelvin scale maximum value and transform it into fahrenheit
  (kelvinScale.maximum() - 273.15)*1.8 + 32
);
// ticks getter
var fahrenheitTicks = fahrenheitScale.ticks();
// set ticks interval
fahrenheitTicks.interval(500);

// create scale for temperature in degrees celsius
var celsiusScale = anychart.scales.linear();
// set scale minimum value
celsiusScale.minimum(
  // get kelvin scale minimum value and transform it into celsius
  kelvinScale.minimum() - 273.15
);
// set scale maximum value 
celsiusScale.maximum(
  // get kelvin scale maximum value and transform it into celsius
  kelvinScale.maximum() - 273.15
);
// ticks getter
var celsiusTicks = celsiusScale.ticks();
// set ticks interval
celsiusTicks.interval(500);
```

We defined three axes and set absolute zero as a minimum value, and Titanium melting temperature as a maximum value. 
We will create one series of a {api:anychart.core.cartesian.series.Marker}"Marker"{api} type and bind it to Kelvin scale:

```
var data = [
  ["Absolute Zero", 0],
  ["Lowest recorded surface temperature on Earth", 184],
  ["Celsius / Fahrenheit's 'cross-over' temperature", 233.15],
  ["Ice melts", 273.15],
  ["Average human body temperature", 309.95],
  ["Highest recorded surface temperature on Earth", 331],
  ["Water boils", 373.1339],
  ["Titanium melts", 1941]
];

var markerSeries = chart.marker(data);
```

Here it is - a sample that shows different important temperatures:

{sample}AGST\_Additional\_Axes\_05{sample}

## Multi Axes Sample for Showing Different Data on the Same Plot

Lets see how additional axes can be used to show different data on the same plot: we will plot a US Debt amount in 
dollars and in percents of GDP. We need to create one additional Axis adjust both basic and additional Axes:

```
var yScale = chart.yScale();
yScale.minimum(0);
yScale.maximum(12000000000000);
var yScaleTicks = chart.yScale().ticks();
yScaleTicks.interval(2000000000000);

var yAxis = chart.yAxis(0);
yAxis.title("Debt");

var extraYAxis = chart.yAxis(1);
extraYAxis.title("GDP");

var yLabels = chart.yAxis(0).labels();
yLabels.format(function(){
  var value = (this.value/1000000000000);
  if (value > 0)
    value = (this.value/1000000000000) + " 000 bil.";
  return "$" + value;
});
var yLabels1 = chart.yAxis(1).labels();
yLabels1.format(function(){
  return this.value + "%";
});

var extraYScale = anychart.scales.linear();
extraYScale.minimum(0);
extraYScale.maximum(140);
var extraYScaleTicks = extraYScale.ticks();
extraYScaleTicks.interval(20);

var extraYAxis = chart.yAxis(1);
extraYAxis.orientation("right");
extraYAxis.scale(extraYScale);
```

We defined two axes and will create one series of a {api:anychart.core.cartesian.series.Column}Column{api} type to show debt and bind it to {api:anychart.charts.Cartesian#yAxis}yAxis{api}, one series of a {api:anychart.core.cartesian.series.Line}Line{api} type to show percentage changes.

Here it is - a sample chart comparing the US debt, in dark red, to the debts percent of GDP, in blue.

{sample}AGST\_Additional\_Axes\_06{sample}