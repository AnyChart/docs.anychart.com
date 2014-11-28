# Radar Chart

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
 * [Stacked Mode](#stacked_mode)
 * [Labels Settings](#labels_settings)
* [Visualization](#visualisation)
 * [Grid](#grid)
 * [Labels and Tooltips](#labels_and_tooltips)
* [Series Types](#series_types)

## Overview

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative.


The radar chart is also known as web chart, spider chart, star chart, cobweb chart, star plot, irregular polygon, polar chart, or kiviat diagram.

## Chart

AnyChart allows to display three types of series on Radar chart: Line, Area and Marker. You need to set **anychart.polarChart()** to display Radar chart:

```
    //chart type
    chart = anychart.radarChart();

    // series type and data setting
    chart.line([
        {x: "Administration", value: 22},
        {x: "Sales",          value: 34},
        {x: "Marketing",      value: 16},
        {x: "Research",       value: 12},
        {x: "Support",        value: 38},
        {x: "Development",    value: 47}
    ]);
```

As you can see each point is represented by category set using name attribute and value set using y attribute.

Here is a basic Radar sample:

{sample}BCT\_RadarChart\_01{sample}

## Configuration

Radar plot has several distinctive configuration options, which are presented in this section: chart radius settings, chart rotation and background settings.

### Radius size

By default AnyChart calculates radius of radar chart automatically, but this parameter may be set manually. Radar chart radius is controlled by maximum and minimum size of Y scale and may be set through **.yScale().minimum().maximum()** methods.

```
  //set chart type
  var chart = anychart.radarChart();

  //set radar radius
  chart.yScale()
    .maximum(120) //set maximum radius of radar chart
    .minimum(50); //set minimum radius of radar chart
```

Advanced radius settings includes additional settings for ticks interval on the radius. As far as radius is controled
 by y scale, full information on radius controlling may be found in [Scales tutorial](../Axes_Grid_Scales_Trends_etc/Scales)

```
  //set chart type
  var chart = anychart.radarChart();

  //set radar ticks interval equal to 10
  chart.yScale().ticks().interval(10);
```

Here is a sample of the radar chart radius size set manually:

{sample}BCT\_RadarChart\_02{sample}

### Start angle

By default radar starts drawing from the top center point (0°), but you can change this using **.startAngle()**
parameter:

```
  chart.startAngle(90);
```

Sample chart with starting angle shifted to 90°:

{sample}BCT\_RadarChart\_03{sample}

### Plot background

You can change radar background using **.background()** method, learn more about this method at [Background settings tutorial](../General_Appearance_Settings/Background).

```
  chart.background()
    .enabled(true)                                  //enables background
    .fill({
      keys: ['.1 white', '.7 gray', '.9 darkgray'], //set gradient colors
      angle: -130                                   //set angle of colors drawing
    });
```

Sample radar chart with tuned background:

{sample}BCT\_RadarChart\_04{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis
scale and settings and many more. All axis features are described in
[Axes tutorial](../Axes_Grid_Scales_Trends_etc/Axis_Basics).

// Add information on topic content


### Stroke

Axis stroke appearance is controlled by **.stroke()** parameter.

```
  // set chart type
  var chart = anychart.radarChart();

  // adjust y axis visualization
  chart.yAxis().stroke('2 red');  // set stroke thickness equal to 2px and set red color to the stroke
```

More information on possible stroke settings may be found in [Strokes and Lines tutorial](../General_Appearance_Settings/Strokes_and_Lines).


Here is a sample of tuned X and Y axes. Y axis has dashed red stroke and X axis has stroke colorized with gradient
color.

{sample}BCT\_RadarChart\_05{sample}

### Inversion

AnyChart allows to invert any axis. Inversion is controlled by axis **.inverted()** parameter:

```
    chart.yScale().inverted(true);
```
Look at the demonstration of Y Axis inversion on the sample below:

{sample}BCT\_RadarChart\_06{sample}

### Logarithmic Scale

AnyChart allows to make Y axis logarithmic. Scale type is controlled by **.scale()** parameter.

```
    var logScale = anychart.scales.log();   // create logarithmic scale
    logScale.minimum(0.1).maximum(10000);   // set minimum and maximum value for the scale
    chart.yScale(logScale);                 // set logarithmic scale as y scale for the chart
```

And here is the demonstration of Logarithmic Y Axis on a simple radar with area series:

{sample}BCT\_RadarChart\_07{sample}

### Stacked Mode

Multiple area series may be presented with usage of stacked mode for Y scale. Stacked mode helps to visualize data in
 a convenient way for comparing different data series which shares one of the values. Use **.stackMode()** method to
 enable stacked mode.

```
  //set chart type
  var chart = anychart.radarChart();

  //set stacked mod
  chart.yScale().stackMode('value');
```

{sample}BCT\_RadarChart\_08{sample}

Percent stacked mode calculates the proportion of each point to the category sum and uses this percentage as a value.
 To enable this mode use **.stackMode('percent')** parameter

{sample}BCT\_RadarChart\_11{sample}

### Labels Settings

You can easily tune visual appearance of axes labels as well as adjust labels length.

In the sample below all names are limited to the length of 3:

```
  //chart type
  var chart = anychaty.radarChart();

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

{sample}BCT\_RadarChart\_12{sample}

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

{sample}BCT\_RadarChart\_13{sample}

You can hide first and/or last labels using **.drawFirstLabel()** and **.drawLastLabel()** parameters:

```
  chart.yAxis()
    .drawFirstLabel(false)  //hides first label of y Axis
    .drawLastLabel(false);  //hides last label of y Axis
```

{sample}BCT\_RadarChart\_15{sample}

## Visualisation

In this section we will describe main parts of radar chart style and demonstrate how style can be applied.


The main idea of styles is to segregate visualization and data definition. Visual appearance of columns is defined
using certain methods.

### Grid

Radar grid is a combination of circuit and radial grids. Grid visual appearance can be controlled with several
parameters:

```
  //chart type
  var chart = anychart.radarChart();

  chart.grid(0).
    .oddFill('red')       //colorizing odd cells in the grid
    .evenFill('darkred')  //colorizing even cells in the grid
    .layout('radial');    //set layout type
```

**Note:** full information on grid settings can be found in [grid section of Scale tutorial](../Axes_Grid_Scales_Trends_etc/Scales#grids)


Sample below demonstrates two radar charts with adjusted visualisation of the radial type of grid as well as of the
circuit one.

{sample}BCT\_RadarChart\_09{sample}

### Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.<!-- Full explanation of formatting
and tuning visual appearance for them can be found in Labels and Tooltips.-->

If you want to configure data labels and tooltips for all series - you should do that in **.labels()** and **.tooltip()** methods. You can tune their visual appearance, positioning and format.

When formatting data labels text we will use **.textFormatter()** to show month name. Otherwise sales will be displayed
here.

```
    //chart type
    var chart = anychart.radarChart();

    //setting data
    var series= chart.area(data);

    //setting labels
    series.labels()
        .enabled(true)                    //enables labels
        .textFormatter(function(point){
            return point.x;               //setting content
    });

    //setting tooltips
    series.tooltip().contentFormatter(function(){
        return this.x;                    //setting content
    });
```

{sample}BCT\_RadarChart\_10{sample}

## Series Types

Radar chart supports: Line, Area and Marker series types. You can learn how to change and configure styles of these types at: [Area chart](Area_Chart), [Line chart](Line-Spline-StepLine_Charts) and [Marker chart](Marker_Chart).

{sample}BCT\_RadarChart\_14{sample}
