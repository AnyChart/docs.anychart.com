# Linear Gauge

## Overview

A linear gauge is visual representation of a measuring device with a horizontal or vertical scale and a pointer or multiple pointers indicating particular values. The scale is usually color zoned, which helps to see what range the value of interest falls in. Linear gauges can represent thermometers, radio scales, battery indicators, rulers, and any other devices with straight line-shaped scales.

## Basics

To create all types of linear gauges, you can use a basic constructor: {api:anychart.gauges#linear}linear(){api}. Also, AnyChart supports three special constructors with presets of tank, led, and thermometer gauges: {api:anychart.gauges#tank}tank(){api}, {api:anychart.gauges#led}led(){api}, {api:anychart.gauges#thermometer}thermometer(){api}. These presets define the visual style of a gauge and the type of its pointer (see the [Pointers](#pointers) section below).

In the following sample, the four available constructors are used to create gauges of four types, each with its own type of pointer:

{sample}GAUGE\_Linear\_01{sample}

```
// create data
var data = [170, 210, 130, 310];

// set the gauge type
linear = anychart.gauges.linear();

// set data for the gauge
linear.data(data);

// add the default pointer
linear.addPointer(0);

// set the gauge type
tank = anychart.gauges.tank();

// set data for the gauge
tank.data(data);

// add the default pointer
tank.addPointer(1);
```

## Layout

By default, all linear gauges are vertically oriented. To change the layout, the {api:anychart.charts.LinearGauge#layout}layout(){api} method is used:
```
gauge = anychart.gauges.linear();

// set the layout
gauge.layout("horizontal");
```

Here are the four gauges from the previous sample, now oriented horizontally:

{sample :height 200}GAUGE\_Linear\_02{sample}

## Scales and Axes

Like all other charts, gauges can have multiple scales and axes, though by default, only a primary scale is created and calculated, and a primary axis is bound to it. Configuring scales and axes is very similar to configuring the same elements of basic chart types: see [Scales](../Axes_and_Grids/Scales) and [Axis Basics](../Axes_and_Grids/Axis_Basics).

In this sample, there is a thermometer gauge with two scales and two axes that show temperature in Celsius and Fahrenheit:

{sample}GAUGE\_Linear\_03{sample}

```
// use the primary scale a Fahrenheit scale
var fScale = gauge.scale();

// configure the primary scale
fScale.minimum(-40);
fScale.maximum(122);
fScale.ticks().interval(10);
fScale.minorTicks().interval(2);    

// configure an axis on the left side of the gauge
var axisLeft = gauge.axis(0);
axisLeft.minorTicks(true)
axisLeft.minorTicks().stroke('#cecece');
axisLeft.width('0');
axisLeft.offset('-0.18%');

// bind the left axis to the Fahrenheit scale
axisLeft.scale(fScale);

//configure a Celsius scale
var cScale = anychart.scales.linear();
cScale.minimum(-40);
cScale.maximum(50);
cScale.ticks().interval(10);
cScale.minorTicks().interval(1);

// configure an axis on the rigth side of the gauge
var axisRight = gauge.axis(1);
axisRight.minorTicks(true);
axisRight.minorTicks().stroke('#cecece');
axisRight.width('0');
axisRight.offset('3.15%');
axisRight.orientation('right');

// bind the right axis to the Celsius scale
axisRight.scale(cScale);
```

## Scale Bar

{api:anychart.charts.LinearGauge#scaleBar}Scale Bar{api} is a special visual element used for color zoning the axes of linear gauges.

The sample below shows a basic horizontally oriented linear gauge with three color zones:

```
// create a color scale
var scaleBarColorScale = anychart.scales.ordinalColor().ranges(
    [
            {
                from: 0,
                to: 25,
                color: ['#D81E05', '#EB7A02']
            },
            {
                from: 25,
                to: 50,
                color: ['#EB7A02', '#FFD700']
            },
            {
                from: 50,
                to: 75,
                color: ['#FFD700', '#CAD70b']
            },
            {
                from: 75,
                to: 100,
                color: ['#CAD70b', '#2AD62A']
            }
    ]
);

// create a Scale Bar
var scaleBar = gauge.scaleBar(0);

// use the color scale (defined earlier) as the color scale of the Scale Bar
scaleBar.colorScale(scaleBarColorScale);
```

{sample :height 200}GAUGE\_Linear\_04{sample}

Also, you can customize the height of the scale bar in different points by using the {api:anychart.core.linearGauge.ScaleBar#points}points(){api} method and specifying the relative height of three control points – see {api:anychart.core.linearGauge.ScaleBar.ControlPoint}anychart.core.linearGauge.ScaleBar.ControlPoint{api}:

```
// set the relative height of the control points of the scale bar
scaleBar.points([
    {height: 1, left: 1, right: 0}
]);
```

{sample}GAUGE\_Linear\_05{sample}

## Pointers

To add a pointer to a linear gauge, the {api:anychart.charts.LinearGauge#addPointer}addPointer(){api} method is called. The type of pointer added by this method is implicitly defined by the constructor used to create the gauge. However, you can use any pointer with any gauge by calling the {api:anychart.charts.LinearGauge#bar}bar(){api}, {api:anychart.charts.LinearGauge#led}led(){api}, {api:anychart.charts.LinearGauge#marker}marker(){api}, {api:anychart.charts.LinearGauge#rangeBar}rangeBar(){api}, {api:anychart.charts.LinearGauge#tank}tank(){api}, and {api:anychart.charts.LinearGauge#thermometer}thermometer(){api} methods.

In the following sample, there is a tank gauge with tank, marker, and two bar pointers: 

{sample}GAUGE\_Linear\_06{sample}

Please note that you can bind pointers to particular values in the data set:

```
// create data
var data = [150, 250, 300, 170];

// set the gauge type
gauge = anychart.gauges.tank();

// set the data for the gauge
gauge.data(data);

// create the first pointer (tank)
var tank = gauge.tank(0);

// create the second pointer (marker)
var marker = gauge.marker(1);

// configure the third pointer (bar)
var bar_1 = gauge.bar(2);

// configure the fourth pointer (bar)
var bar_2 = gauge.bar(3);
```

To learn more, read the [Pointers and Data](Pointers_and_Data) article.
