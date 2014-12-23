# Polar Chart

* [Overview](#overview)
* [Chart](#chart)
* [Configuration](#configuration)
 * [Start angle](#start_angle)
 * [Plot background](#plot_background)
* [Axes](#axes)
 * [Stroke](#stroke)
 * [Inversion](#inversion)
 * [Logarithmic Scale](#logarithmic_scale)
 * [Labels Settings](#labels_settings)
* [Visualization](#visualisation)
 * [Grid](#grid)
 * [Labels and Tooltips](#labels_and_tooltips)
* [Series Types](#series_types)
* [Missing Points](#missing_points)

## Overview

Polar chart plot allows to draw scatter chart using the polar coordinate system, which is a two-dimensional coordinate system in which each point on a plane is determined by a distance from a fixed point and an angle from a fixed direction.

## Chart

AnyChart allows to display three types of series on a Polar chart: Line, Area and Marker. You need to create a chart using {api:anychart.charts.Polar}**anychart.polar()**{api} method to display Polar chart:

```
  // chart type
  chart = anychart.polar();

  // series type and data setting
  chart.line([
    {x: 0, value: 0},
    {x: 10, value: 1},
    {x: 20, value: 2},
    {x: 30, value: 3},
    {x: 40, value: 4},
    {x: 50, value: 5},
    {x: 60, value: 6},
    {x: 70, value: 7},
    {x: 80, value: 8},
    {x: 90, value: 9},
    {x: 100, value: 10}
  ]);
```

As you can see each point is represented with **x** and **value** fields.

Here is a basic Polar sample:

{sample}BCT\_PolarChart\_01{sample}

## Configuration

Polar plot has several distinctive configuration options which are presented in this section: chart rotation and background settings.

### Start angle

By default polar starts drawing from the top center point (0°), but you can change this using {api:anychart.charts.Polar#startAngle}**.startAngle()**{api} parameter:

```
  chart.startAngle(90);
```

Sample chart with starting angle shifted to 90°:

{sample}BCT\_PolarChart\_03{sample}

### Plot background

You can change polar background using {api:anychart.core.ui.Background}**.background()**{api} method, learn more about this method at [Background settings tutorial](../Appearance_Settings/Background).

```
  chart.background()
    .enabled(true)                                  // enables background
    .fill({
      keys: ['.1 white', '.7 gray', '.9 darkgray'], // set gradient colors
      angle: -130                                   // set angle of colors drawing
    });
```

Sample polar chart with tuned background:

{sample}BCT\_PolarChart\_04{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in [Axes tutorial](../Axes_and_Grids/Axis_Basics).

### Stroke

Axis stroke appearance is controlled by {api:anychart.core.grids.Polar#stroke}**.stroke()**{api} parameter.

```
  // set chart type
  var chart = anychart.polar();

  // adjust y axis visualization
  chart.yAxis().stroke('2 red');  // set stroke thickness equal to 2px and set red color to the stroke
```

More information on possible stroke settings can be found in [Strokes and Lines tutorial](../Appearance_Settings/Strokes_and_Lines).

Here is a sample of tuned X and Y axes. Y axis has a dashed red stroke and X axis has a stroke colored with gradient.

{sample}BCT\_PolarChart\_05{sample}

### Inversion

AnyChart allows to invert any axis. Inversion is controlled by axis **.inverted()** parameter:

```
    chart.yScale().inverted(true);
```
Take a look at the demonstration of Y Axis inversion on the sample below:

{sample}BCT\_PolarChart\_06{sample}

### Logarithmic Scale

Logarithmic scale can be used in polar charts, scale type is set using **.scale()** method. More information on scale types can be found in [Scale tutorial](../Axes_and_Grids/Scales#types)

```
  var logScale = anychart.scales.log();   // create logarithmic scale
  logScale.minimum(0.1).maximum(10000);   // set minimum and maximum value for the scale
  chart.yScale(logScale);                 // set logarithmic scale as y scale for the chart
```

And here is the demonstration of Logarithmic Y Axis on a simple polar with area series:

{sample}BCT\_PolarChart\_07{sample}

### Labels Settings

AnyChart allows to customise Axes Labels in any required way. Below is a sample of tuned x and y axes. X axis labels have **°** after the value and Y axis has its negative values set in brackets.

```
  // chart type
  var chart = anychaty.polar();

  // set y axis labels position and format content
  chart.yAxis().labels().offsetX(12).textFormatter(function(){
    var value = this.value.toFixed(1);
    if (value<0)                                            // check if axis value is negative
      value = '(' + (this.value * (-1)).toFixed(1) + ')';   // set negative values into brackets and minus sign
     return value.toString();
  });

  // settings for x axis labels
  chart.xAxis().labels()
    .padding(5)                   // set labels padding
    .fontWeight(900)              // set font weight for labels
    .textFormatter(function(){
      return this.value + '°';    // add '°' to every label of x axis
    });
```

{sample}BCT\_PolarChart\_08{sample}

You can change labels background. Learn more about background configuration in [Background settings tutorial](#../Appearance_Settings/Background).

```
  // axes settings
  chart.xAxis()
    .labels()                   // settings for labels
      .padding(5)               // set padding for labels
      .fontWeight(900)          // set font weight for labels
      .background()             // background settings
        .enabled(true)          // enable background
        .fill('lightblue')      // background fill
        .stroke('blue')         // stroke color
        .cornerType('round')    // corner type
        .corners(5);            // corner size
```

{sample}BCT\_PolarChart\_09{sample}

You can hide first and/or last labels using {api:anychart.core.axes.Radial#drawFirstLabel}**.drawFirstLabel()**{api} and {api:anychart.core.axes.Radial#drawLastLabel}**.drawLastLabel()**{api} parameters:

```
  chart.yAxis()
    .drawFirstLabel(false)  // hides first label of y Axis
    .drawLastLabel(false);  // hides last label of y Axis
```

{sample}BCT\_PolarChart\_10{sample}

## Visualisation

In this section we will describe main parts of polar chart style and demonstrate how style can be applied.


The main idea of styles is to segregate visualization and data definition. Visual appearance of columns is defined using certain methods.

### Grid

Polar grid is a combination of circular and radial grids. Grid visual appearance can be controlled with several parameters:

```
  // chart type
  var chart = anychart.polar();

  chart.grid(0).
    .oddFill('red')       // coloring odd cells in the grid
    .evenFill('darkred')  // coloring even cells in the grid
    .layout('radial');    // set layout type
```

**Note:** full information on grid settings can be found in [grid section of Scale tutorial](../Axes_and_Grids/Scales#grids)


Sample below demonstrates two polar charts with adjusted visualisation of the radial type of grid as well as of the circular one.

{sample}BCT\_PolarChart\_11{sample}

### Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.

If you want to configure data labels and tooltips for all series - you should do that in {api:anychart.core.polar.series.Base#labels}**.labels()**{api} and {api:anychart.core.polar.series.Base#tooltip}**.tooltip()**{api} methods. You can tune their visual appearance, positioning and format.

Next sample demonstrates bold series labels which display value of a point and tooltip shows detailed description.

```
  // chart type
  var chart = anychart.polar();


  // set series visualisation
  series
    .stroke('darkblue')                             // stroke color
    .fill('lightblue 0.8')                          // fill color
    .labels()                                       // labels settings
      .enabled(true)                                // enable labels
      .fontWeight(900);                             // labels font weight

  // visual setting for tooltips
  series.tooltip().content().fontWeight(400);                                   // settings for tooltip content font
  series.tooltip().contentFormatter(function(){                                 // adjust tooltip content
     var percent = this.value / (this.sum / 100);                               // get value and find percent
     return 'Value: ' + this.value + '\nPercent: ' + percent.toFixed(2) + '%';  // display value of the point and found percent
  });
```

{sample}BCT\_PolarChart\_12{sample}

## Series Types

Polar chart supports: Line, Area and Marker series types. You can learn how to change and configure styles of these types at: [Area chart](Area_Chart), [Line chart](Line-Spline-StepLine_Charts) and [Marker chart](Marker_Chart).

{sample}BCT\_PolarChart\_13{sample}

## Missing Points

Polar Chart allows to omit one or several points in a data set. To miss a point set 'missing' into **value** field. On the sample below points from 60 to 70 are missing.

{sample}BCT\_PolarChart\_14{sample}