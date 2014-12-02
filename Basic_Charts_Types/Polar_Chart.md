# Polar Chart

* [Overview](#overview)
* [Chart](#chart)
* [Configuration](#configuration)
 * [Radius size](#radius_size)
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

## Overview

Polar chart plot allows to draw scatter chart using polar coordinate system, which is is a two-dimensional coordinate system in which each point on a plane is determined by a distance from a fixed point and an angle from a fixed direction.

## Chart

AnyChart allows to display three types of series on Polar chart: Line, Area and Marker. You need to set **anychart.polar
()** to display Polar chart:

```
  //chart type
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

As you can see each point is represented by category set using name attribute and value set using y attribute.

Here is a basic Polar sample:

{sample}BCT\_PolarChart\_01{sample}

## Configuration

Polar plot has several distinctive configuration options, which are presented in this section: chart radius settings,
chart rotation and background settings.

### Radius size

By default AnyChart calculates radius of polar chart automatically, but this parameter may be set manually. Polar chart radius is controlled by maximum and minimum size of Y scale and may be set through **.yScale().minimum().maximum()** methods.

```
  //set chart type
  var chart = anychart.polar();

  //set polar radius
  chart.yScale()
    .maximum(120) //set maximum radius of polar chart
    .minimum(0); //set minimum radius of polar chart
```

Advanced radius settings includes additional settings for ticks interval on the radius. As far as radius is controled
 by y scale, full information on radius controlling may be found in [Scales tutorial](../Axes_Grid_Scales_Trends_etc/Scales)

```
  //set chart type
  var chart = anychart.polar();

  //set polar ticks interval equal to 10
  chart.yScale().ticks().interval(20);
```

Here is a sample of the polar chart radius size set manually:

{sample}BCT\_PolarChart\_02{sample}

### Start angle

By default polar starts drawing from the top center point (0°), but you can change this using **.startAngle()**
parameter:

```
  chart.startAngle(90);
```

Sample chart with starting angle shifted to 90°:

{sample}BCT\_PolarChart\_03{sample}

### Plot background

You can change polar background using **.background()** method, learn more about this method at [Background settings tutorial](../General_Appearance_Settings/Background).

```
  chart.background()
    .enabled(true)                                  //enables background
    .fill({
      keys: ['.1 white', '.7 gray', '.9 darkgray'], //set gradient colors
      angle: -130                                   //set angle of colors drawing
    });
```

Sample polar chart with tuned background:

{sample}BCT\_PolarChart\_04{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis
scale and settings and many more. All axis features are described in
[Axes tutorial](../Axes_Grid_Scales_Trends_etc/Axis_Basics).

// Add information on topic content


### Stroke

Axis stroke appearance is controlled by **.stroke()** parameter.

```
  // set chart type
  var chart = anychart.polar();

  // adjust y axis visualization
  chart.yAxis().stroke('2 red');  // set stroke thickness equal to 2px and set red color to the stroke
```

More information on possible stroke settings may be found in [Strokes and Lines tutorial](../General_Appearance_Settings/Strokes_and_Lines).


Here is a sample of tuned X and Y axes. Y axis has dashed red stroke and X axis has stroke colorized with gradient
color.

{sample}BCT\_PolarChart\_05{sample}

### Inversion

AnyChart allows to invert any axis. Inversion is controlled by axis **.inverted()** parameter:

```
    chart.yScale().inverted(true);
```
Take a look at the demonstration of Y Axis inversion on the sample below:

{sample}BCT\_PolarChart\_06{sample}

### Logarithmic Scale

Data for charts may have great range of numeric values. In sake of visual appearance of data on the plot it is
recommended to use logarithmic scale. Scale type may be set with **.scale()** method. More information on scale types
 can be found in [Scale tutorial](../Axes_Grid_Scales_Trends_etc/Scales#types)

```
  var logScale = anychart.scales.log();   // create logarithmic scale
  logScale.minimum(0.1).maximum(10000);   // set minimum and maximum value for the scale
  chart.yScale(logScale);                 // set logarithmic scale as y scale for the chart
```

And here is the demonstration of Logarithmic Y Axis on a simple polar with area series:

{sample}BCT\_PolarChart\_07{sample}

### Labels Settings

You can easily tune visual appearance of axes labels as well as adjust labels length.

In the sample below all names are limited to the length of 3:

```
  //chart type
  var chart = anychaty.polar();

  chart.xAxis().labels()
    .textFormatter(function(){

      //get value of the label
      var fullValue = this.value;

      if (longValue.length > 3){
        myValue = longValue.substr(0, 3) + '...';   //adjust value
      }
      else{
        myValue = fullValue;                        //return untouched value
      }
      return myValue;                               //return new value
    });
```

{sample}BCT\_PolarChart\_08{sample}

You can change labels background. Learn more about background configuration in [Background settings tutorial](#../General_Appearance_Settings/Background).

```
  //axes settings
  chart.xAxis()
    .labels()                   //settings for labels
      .padding(5)               //set padding for labels
      .fontWeight(900)          //set font weight for labels
      .background()             //background settings
        .enabled(true)          //enable background
        .fill('lightblue')      //background fill
        .stroke('blue')         //stroke color
        .cornerType('round')    //corner type
        .corners(5);            //corner size
```

{sample}BCT\_PolarChart\_09{sample}

You can hide first and/or last labels using **.drawFirstLabel()** and **.drawLastLabel()** parameters:

```
  chart.yAxis()
    .drawFirstLabel(false)  //hides first label of y Axis
    .drawLastLabel(false);  //hides last label of y Axis
```

{sample}BCT\_PolarChart\_10{sample}

## Visualisation

In this section we will describe main parts of polar chart style and demonstrate how style can be applied.


The main idea of styles is to segregate visualization and data definition. Visual appearance of columns is defined
using certain methods.

### Grid

Polar grid is a combination of circuit and radial grids. Grid visual appearance can be controlled with several
parameters:

```
  //chart type
  var chart = anychart.polar();

  chart.grid(0).
    .oddFill('red')       //colorizing odd cells in the grid
    .evenFill('darkred')  //colorizing even cells in the grid
    .layout('radial');    //set layout type
```

**Note:** full information on grid settings can be found in [grid section of Scale tutorial](../Axes_Grid_Scales_Trends_etc/Scales#grids)


Sample below demonstrates two polar charts with adjusted visualisation of the radial type of grid as well as of the
circuit one.

{sample}BCT\_PolarChart\_11{sample}

### Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.<!-- Full explanation of formatting
and tuning visual appearance for them can be found in Labels and Tooltips.-->

If you want to configure data labels and tooltips for all series - you should do that in **.labels()** and **.tooltip()** methods. You can tune their visual appearance, positioning and format.

When formatting data labels text we will use **.textFormatter()** to show month name. Otherwise sales will be displayed
here.

```
  //chart type
  var chart = anychart.polar();

  //setting data
  var series= chart.area(data);

  //setting labels
  series.labels()
    .enabled(true)                    //enables labels
    .textFormatter(function(point){
      return point.x;                 //setting content
  });

  //setting tooltips
  series.tooltip().contentFormatter(function(){
    return this.x;                    //setting content
  });
```

{sample}BCT\_PolarChart\_12{sample}

## Series Types

Polar chart supports: Line, Area and Marker series types. You can learn how to change and configure styles of these types at: [Area chart](Area_Chart), [Line chart](Line-Spline-StepLine_Charts) and [Marker chart](Marker_Chart).

{sample}BCT\_PolarChart\_13{sample}
