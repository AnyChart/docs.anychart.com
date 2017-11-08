{:index 1}
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
* [Visualization](#visualization)
 * [Grid](#grid)
 * [Labels and Tooltips](#labels_and_tooltips)
* [Series Types](#series_types)
* [Missing Points](#missing_points)

## Overview

Polar chart plot allows to draw scatter chart using the polar coordinate system, which is a two-dimensional coordinate system where each point is determined by distance from a fixed point and angle from a fixed direction.

## Chart

AnyChart javascript charting library allows to display three types of series on a Polar chart: Line, Area and Marker. You should create a chart using {api:anychart.charts.Polar}**anychart.polar()**{api} method to display Polar chart:

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

As you can see each point is represented with **x** and **value** fields, where x is an angle.

Here is a basic js Polar sample:

{sample}BCT\_PolarChart\_01{sample}

## Configuration

Polar chart has several distinctive configuration options which are presented in section "Chart rotation and background settings".

### Start angle

By default in Polar charts drawing starts from the top center point (0°), but you can change this using {api:anychart.charts.Polar#startAngle}**.startAngle()**{api} parameter:

```
  chart.startAngle(90);
```

Below you can see our sample chart with starting angle shifted to 90°:

{sample}BCT\_PolarChart\_02{sample}

### Plot background

You can change polar background using {api:anychart.core.ui.Background}**.background()**{api} method. Learn more about it in [Background settings tutorial](../Appearance_Settings/Background).

```
  var background = chart.background();
  // enables background
  background.enabled(true);
  background.fill({
    // set gradient colors
    keys: [".1 white", ".7 gray", ".9 darkgray"],
    // set angle of colors drawing
    angle: -130                                   
  });
```

Here is a sample of a polar chart with tuned background:

{sample}BCT\_PolarChart\_03{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and else. All axis features are described in [Axes Basics](../Axes_and_Grids/Axis_Basics) tutorial.

### Stroke

Axis stroke appearance is controlled by {api:anychart.core.grids.Polar#stroke}**.stroke()**{api} parameter.

```
  // set chart type
  var chart = anychart.polar();

  // adjust y axis visualization
  var yAxis = chart.yAxis();
  // set stroke thickness equal to 2px and set custom color to the stroke
  yAxis.stroke("2 #9900FF");
```

More information on possible stroke settings can be found in [Strokes and Lines tutorial](../Appearance_Settings/Lines_Settings).

Here is a sample of tuned X and Y axes. Y axis has a dashed stroke and X axis has a stroke colored with gradient.

{sample}BCT\_PolarChart\_04{sample}

### Inversion

AnyChart allows to invert any axis. Inversion is controlled by axis {api:anychart.scales.Linear#inverted}**.inverted()**{api} parameter:

```
  var yScale = chart.yScale();
  yScale.inverted(true);
```

Take a look at the demonstration of Y Axis inversion on the sample below:

{sample}BCT\_PolarChart\_05{sample}

### Logarithmic Scale

Logarithmic scale can be used in polar charts. You can set the scale type using {api:anychart.scales}**.scale()**{api} method. More information about scale types can be found in [Scale tutorial](../Axes_and_Grids/Scales#types)

```
  // create logarithmic scale
  var logScale = anychart.scales.log();
  // set minimum and maximum value for the scale
  logScale.minimum(10).maximum(10000);
  // set logarithmic scale as y scale for the chart
  chart.yScale(logScale);
```

And here is the demonstration of Logarithmic Y Axis on a simple polar with line series:

{sample}BCT\_PolarChart\_06{sample}

### Labels Settings

AnyChart allows to customise Axes Labels in any required way. Below there is a sample of tuned x and y axes. X-axis labels have **°** after the value and Y axis has its negative values set in brackets.

```
  // chart type
  var chart = anychart.polar();

  // set y axis labels position and format content
  chart.yAxis().labels().offsetX(12).textFormatter(function(){
    var value = this.value.toFixed(1);
    // check if axis value is negative
    if (value<0)
      // set negative values into brackets and minus sign
      value = "(" + (this.value * (-1)).toFixed(1) + ")";
    return value.toString();
  });

  // settings for x axis labels
  var xLabels = chart.xAxis().labels()
  // set labels padding
  xLabels.padding(5);
  // set font weight for labels
  xLabels.fontWeight(900);
  xLabels.textFormatter(function(){
    // add '°' to every label of x axis
    return this.value + "°";
  });
```

{sample}BCT\_PolarChart\_07{sample}

You can change labels' background. Learn more about background configuration in [Background settings tutorial](../Appearance_Settings/Background).

```
  // settings for axis labels
  var labels = chart.xAxis().labels();
  // set padding for labels
  labels.padding(5);
  // set font weight for labels
  labels.fontWeight(900);
  // background settings
  var labelsBackground = chart.xAxis().labels().background();
  // enable background
  labelsBackground.enabled(true);
  // background fill
  labelsBackground.fill("lightblue");
  // stroke color
  labelsBackground.stroke("blue");
  // corner type
  labelsBackground.cornerType("round");
  // corner size
  labelsBackground.corners(5);
```

{sample}BCT\_PolarChart\_08{sample}

You can hide first and/or last labels using {api:anychart.core.axes.Radial#drawFirstLabel}**.drawFirstLabel()**{api} and {api:anychart.core.axes.Radial#drawLastLabel}**.drawLastLabel()**{api} parameters:

```
  var yAxis = chart.yAxis();
  // hides first label of Y-Axis
  yAxis.drawFirstLabel(false);
  // hides last label of Y-Axis
  yAxis.drawLastLabel(false);
```

{sample}BCT\_PolarChart\_09{sample}

## Visualization

In this section we will describe the main parts of a polar chart style and demonstrate how style can be applied.
  
  
The main idea of styles is to segregate visualization and data definition. Visual appearance of columns can be defined using certain methods.

### Grid

Polar grid is a combination of circular and radial grids. Grid visual appearance can be controlled with several parameters:

```
  // chart type
  var chart = anychart.polar();
  
  var grid = chart.grid(0);
  // coloring odd cells of the grid
  grid.evenFill("white 0.9");
  // coloring even cells of the grid
  grid.oddFill("lightgray 0.9");
  // set layout type
  grid.layout("curcuit");
  grid.stroke("white");    
```

This sample below demonstrates two polar charts with adjusted visualisation of the radial type of grid as well as of the circular one.

{sample}BCT\_PolarChart\_10{sample}

### Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.

To configure data labels and tooltips for all series use {api:anychart.charts.Pie#labels}**.labels()**{api} and {api:anychart.charts.Pie#tooltip}**.tooltip()**{api} methods. These will help you to adjust visual appearance, positioning and format.

Let's do that with the following example: we will make data labels bold, format labels so they show only the the value of the point and tooltips to show detailed description.

When formatting tooltips, we use  {api:anychart.core.ui.Tooltip#textFormatter}**.textFormatter()**{api} to adjust source of content and visual appearance. To control labels’ position we may use  {api:anychart.core.ui.Label#position}**.position()**{api} parameter.

Next sample demonstrates bold series labels which display value of a point and tooltip shows detailed description.

```
  // set series data
  var series = chart.area(dataSet);
  
  // stroke color
  series.stroke("darkblue");
  // fill color
  series.fill("lightblue 0.8");
  // labels settings
  var labels = series.labels();
  // enable labels
  labels.enabled(true);
  // labels font weight
  labels.fontWeight(900);

  // format tooltip content
  var tooltip = series.tooltip();
  tooltip.textFormatter(function(){
    
    // summarize all values
    var sum = 0;
    for (var i=0;i<dataSet.mapAs().getRowsCount();i++)
      sum +=dataSet.mapAs().get(i, "value");
    
    // setting tooltip content
    return "Value: " + this.value + "\nPercent: " + (this.value/(sum/100)).toFixed(2) + "%";
  });
```

{sample}BCT\_PolarChart\_11{sample}

## Series Types

Polar chart supports: Line, Area and Marker series types. You can learn how to change and configure styles of these types in following: [Area chart](Area_Chart), [Line chart](Line-Spline-StepLine_Charts) and [Marker chart](Marker_Chart).

{sample}BCT\_PolarChart\_12{sample}

## Missing Points

Polar Chart allows to omit one or several points in a data set. To miss a point set 'missing' into  the **value** field. On the sample below points from 60 to 70 are missing.

{sample}BCT\_PolarChart\_13{sample}
