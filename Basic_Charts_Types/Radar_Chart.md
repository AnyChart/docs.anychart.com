# Radar Chart

* [Overview](#overview)
* [Chart](#chart)
* [Configuration](#configuration)
 * [Start angle](#start_angle)
 * [Plot background](#plot_background)
* [Axes](#axes)
 * [Stroke](#stroke)
 * [Inversion](#inversion)
 * [Logarithmic Scale](#logarithmic_scale)
 * [Stacked Mode](#stacked_mode)
 * [Labels Settings](#labels_settings)
* [Visualization](#visualization)
 * [Grid](#grid)
 * [Labels and Tooltips](#labels_and_tooltips)
* [Series Types](#series_types)

## Overview

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative.

The radar chart is also known as web chart, spider chart, star chart, cobweb chart, star plot, irregular polygon, or kiviat diagram.

## Chart

AnyChart allows to display three types of series on Radar chart: Line, Area and Marker. You need to create chart using {api:anychart.charts.Radar}**anychart.radar()**{api} method to display Radar chart:

```
  // chart type
  chart = anychart.radar();

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

As you can see each point is represented with **x** and **value** fields.

Here is a basic Radar sample:

{sample}BCT\_RadarChart\_01{sample}

## Configuration

Radar plot has several distinctive configuration options, which are presented in this section: chart rotation and background settings.

### Start angle

By default radar starts drawing from the top center point (0°), but you can change this using {api:anychart.charts.Radar#startAngle}**.startAngle()**{api} parameter:

```
  chart.startAngle(90);
```

Sample chart with starting angle shifted to 90°:

{sample}BCT\_RadarChart\_03{sample}

### Plot background

You can change radar background using {api:anychart.core.ui.Background}**.background()**{api} method, learn more about this method at [Background settings tutorial](../Appearance_Settings/Background).

```
  chart.background()
    .enabled(true)                                  // enables background
    .fill({
      keys: ['.1 white', '.7 gray', '.9 darkgray'], // set gradient colors
      angle: -130                                   // set angle of colors drawing
    });
```

Sample radar chart with tuned background:

{sample}BCT\_RadarChart\_04{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and many more. All axis features are described in [Axes tutorial](../Axes_and_Grids/Axis_Basics).

### Stroke

Axis stroke appearance is controlled by {api:anychart.core.axes.Radar#stroke}**.stroke()**{api} parameter.

```
  // set chart type
  var chart = anychart.radarChart();

  // adjust y axis visualization
  chart.yAxis().stroke('2 red');  // set stroke thickness equal to 2px and set red color to the stroke
```

More information on possible stroke settings can be found in [Strokes and Lines tutorial](../Appearance_Settings/Strokes_and_Lines).


Here is a sample of tuned X and Y axes. Y axis has dashed red stroke and X axis has stroke colored with gradient.

{sample}BCT\_RadarChart\_05{sample}

### Inversion

AnyChart allows to invert any axis. Inversion is controlled by axis **.inverted()** method:

```
  chart.yScale().inverted(true);
```
Look at the demonstration of Y Axis inversion in the sample below:

{sample}BCT\_RadarChart\_06{sample}

### Logarithmic Scale

Logarithmic scale type is set using {api:anychart.scales.Logarithmic}**.scale()**{api} method. More information on scale types can be found in [Scale tutorial](../Axes_and_Grids/Scales#types)

```
  var logScale = anychart.scales.log();   // create logarithmic scale
  logScale.minimum(0.1).maximum(10000);   // set minimum and maximum value for the scale
  chart.yScale(logScale);                 // set logarithmic scale as y scale for the chart
```

And here is the demonstration of Logarithmic Y Axis on a simple radar with area series:

{sample}BCT\_RadarChart\_07{sample}

### Stacked Mode

Multiple area series can be presented with usage of stacked mode for Y scale. Stacked mode helps to visualize data in a convenient way for comparing different data series which shares one of the values. Use {api:anychart.enums.ScaleStackMode}**.stackMode()**{api} parameter to enable stacked mode.

```
  // set chart type
  var chart = anychart.radarChart();

  // set stacked mod
  chart.yScale().stackMode('value');
```

{sample}BCT\_RadarChart\_08{sample}

Percent stacked mode calculates the proportion of each point to the category sum and uses this percentage as a value. To enable this mode set {api:anychart.enums.ScaleStackMode#PERCENT}**.stackMode('percent')**{api}.

{sample}BCT\_RadarChart\_09{sample}

### Labels Settings

You can easily tune visual appearance of axes labels as well as adjust labels length.

In the sample below all names are limited to the length of 3:

```
  // chart type
  var chart = anychaty.radarChart();

  chart.xAxis().labels()
    .textFormatter(function(){

      // get value of the label
      var fullValue = this.value;

      if (longValue.length > 3){
        myValue = longValue.substr(0, 3) + '...';   // adjust value
      }
      else{
        myValue = fullValue;                        // return full value
      }
      return myValue;                               // return new value
    });
```

{sample}BCT\_RadarChart\_10{sample}

You can change labels background. Learn more about background configuration in [Background settings tutorial](../Appearance_Settings/Background).

```
  //axes settings
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

{sample}BCT\_RadarChart\_11{sample}

You can hide the first and/or the last labels using {api:anychart.core.axes.Linear#drawFirstLabel}**.drawFirstLabel()**{api} and {api:anychart.core.axes.Linear#drawLastLabel}**.drawLastLabel()**{api} parameters:

```
  chart.yAxis()
    .drawFirstLabel(false)  // hides the first label of y Axis
    .drawLastLabel(false);  // hides the last label of y Axis
```

{sample}BCT\_RadarChart\_12{sample}

## Visualization

### Grid

Radar grid is a combination of circular and radial grids. Grid visual appearance is set using several
methods:

```
  // chart type
  var chart = anychart.radarChart();

  chart.grid(0).
    .oddFill('red')       // color odd cells in the grid
    .evenFill('darkred')  // color even cells in the grid
    .layout('radial');    // set layout type
```

**Note:** full information on grid settings can be found in [Grid section of Scale tutorial](../Axes_and_Grids/Scales#grids)


Sample below demonstrates two radar charts with adjusted visualisation of the radial type of grid as well as of the circular one.

{sample}BCT\_RadarChart\_13{sample}

### Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.

If you want to configure data labels and tooltips for all series - you should do that in {api:anychart.core.polar.series.Base#labels}**.labels()**{api} and {api:anychart.core.polar.series.Base#tooltip}**.tooltip()**{api} methods. You can tune their visual appearance, positioning and format.

```
  // chart type
  var chart = anychart.radarChart();

  // setting data
  var series= chart.area(data);

  // setting labels
  series.labels()
    .enabled(true)                              // enables labels
    .textFormatter(function(point){
      return point.x;                           // setting content
    });

  // setting tooltips
  series.tooltip().contentFormatter(function(){
    return this.x;                              // setting content
  });
```

{sample}BCT\_RadarChart\_14{sample}

## Series Types

Radar chart supports Line, Area and Marker series types. You can learn how to change and configure styles of these types at: [Area chart](Area_Chart), [Line chart](Line-Spline-StepLine_Charts) and [Marker chart](Marker_Chart).

{sample}BCT\_RadarChart\_15{sample}
