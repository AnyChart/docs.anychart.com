{:index 1}
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
  
  
The radar chart is also known as a web chart, spider chart, star chart, cobweb chart, star plot, irregular polygon or kiviat diagram.

## Chart

AnyChart JavaScript charting library allows to display three types of series on Radar chart: Line, Area and Marker. You need to create chart using {api:anychart.charts.Radar}**anychart.radar()**{api} method to display Radar chart:

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

Radar chart has several distinctive configuration options, which are presented in section "Chart rotation and background settings".

### Start angle

By default radar starts drawing from the top center point (0°), but you can change this using {api:anychart.charts.Radar#startAngle}**.startAngle()**{api} parameter:

```
  chart.startAngle(90);
```

Here is the radar chart sample with starting angle shifted to 90°:

{sample}BCT\_RadarChart\_02{sample}

### Plot background

You can change radar background using {api:anychart.core.ui.Background}**.background()**{api} method, learn more about this method at [Background settings tutorial](../Appearance_Settings/Background).

```
  var background = chart.background();
  // enables background
  background.enabled(true)
  background.fill({
    // set gradient colors
    keys: [".1 white", ".7 gray", ".9 darkgray"],
    // set angle of colors drawing
    angle: -130
  });
```

Here is a Radar chart with tuned background:

{sample}BCT\_RadarChart\_03{sample}

## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and else. All axis features are described in [Axes Basics](../Axes_and_Grids/Axis_Basics) tutorial.

### Stroke

Axis stroke appearance is controlled by {api:anychart.core.axes.Radar#stroke}**.stroke()**{api} parameter.

```
  // set chart type
  var chart = anychart.radarChart();

  // adjust y axis visualization
  var yAxis = chart.yAxis();
  // set stroke thickness equal to 2px and set custom stroke color
  yAxis.stroke("2 #9900FF");
```

More information about possible stroke settings can be found in [Strokes and Lines tutorial](../Appearance_Settings/Lines_Settings).
  
  
Here is a sample of a chart with tuned X and Y axes. Y-axis dashed stroke and X-axis has a stroke colored with gradient.

{sample}BCT\_RadarChart\_04{sample}

### Inversion

AnyChart allows to invert any axis. Inversion is controlled by axis {api:anychart.scales.Linear#inverted}**.inverted()**{api} method:

```
  var yScale = chart.yScale();
  yScale.inverted(true);
```
Look at the demonstration of Y-Axis inversion in the sample below:

{sample}BCT\_RadarChart\_05{sample}

### Logarithmic Scale

You can set a logarithmic scale type using {api:anychart.scales.Logarithmic}**.scale()**{api} method. More information about scale types can be found in [Scale tutorial](../Axes_and_Grids/Scales#types)

```
  // create logarithmic scale
  var logScale = anychart.scales.log();
  // set minimum and maximum value for the scale
  logScale.minimum(10);
  logScale.maximum(10000); 
  // set logarithmic scale as y scale for the chart
  chart.yScale(logScale); 
```

Here is the demonstration of Logarithmic Y-Axis on a simple radar with area series:

{sample}BCT\_RadarChart\_06{sample}

### Stacked Mode

Multiple area series can be presented with usage of stacked mode for Y scale. Stacked mode helps to visualize data in a convenient way for comparing different data series which share one of the values. Use {api:anychart.enums.ScaleStackMode}**.stackMode()**{api} parameter to enable stacked mode.

```
  // set chart type
  var chart = anychart.radarChart();

  // set stacked mod
  var yScale = chart.yScale();
  yScale.stackMode("value");
```

{sample}BCT\_RadarChart\_07{sample}

Percent stacked mode calculates the proportion of each point to the category sum and uses this percentage as a value. To enable this mode set `stackMode("percent")`.

{sample}BCT\_RadarChart\_08{sample}

### Labels Settings

You can easily tune visual appearance of axes' labels as well as adjust labels' length.

In the sample below all names are limited to the length of 3:

```
  // chart type
  var chart = anychaty.radarChart();

  var xLabels = chart.xAxis().labels();
  // set labels content
  xLabels.textFormatter(function(){
    var longValue = this.value;
    var myValue = "";
    // check label width
    if (longValue.length > 3){
      myValue = longValue.substr(0, 3) + "...";
    }
    else{
      myValue = longValue;
    }
    // return adjuster value
    return myValue;
  });
```

{sample}BCT\_RadarChart\_09{sample}

You can change labels' background. Learn more about background configuration in [Background settings tutorial](../Appearance_Settings/Background).

```
  var xLabels = chart.xAxis().labels();
  // set paddings for labels
  xLabels.padding(5);
  // set font weight for labels
  xLabels.fontWeight(900);
  // axes background settings
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

{sample}BCT\_RadarChart\_10{sample}

You can hide the first and/or the last use of labels {api:anychart.core.axes.Linear#drawFirstLabel}**.drawFirstLabel()**{api} and {api:anychart.core.axes.Linear#drawLastLabel}**.drawLastLabel()**{api} parameters:

```
  // adjust y axis settings
  var yAxis = chart.yAxis();
  // disable first label
  yAxis.drawFirstLabel(false);
  // disable last label
  yAxis.drawLastLabel(false);
```

{sample}BCT\_RadarChart\_11{sample}

## Visualization

### Grid

Radar grid is a combination of circular and radial grids. Grid visual appearance can be set using several methods:

```
  // chart type
  var chart = anychart.radarChart();

  var grid = chart.grid(0);
  // color odd cells in the grid
  grid.oddFill("red");
  // color even cells in the grid
  grid.evenFill("darkred");
  // set layout type
  grid.layout("radial");
```
  
Sample below demonstrates two radar charts with adjusted visualisation of the radial type of grid as well as of the circular one.

{sample}BCT\_RadarChart\_12{sample}

### Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.
  
  
If you want to configure data labels and tooltips for all series - you should do that in {api:anychart.core.polar.series.Base#labels}**.labels()**{api} and {api:anychart.core.polar.series.Base#tooltip}**.tooltip()**{api} methods. You can tune visual appearance, positioning and format of labels and tooltips.

```
  // chart type
  var chart = anychart.radarChart();

  // setting data
  var series = chart.area(data);

  // setting labels
  var labels = series.labels();
  // enables labels
  labels.enabled(true);
  // setting content
  labels.textFormatter(function(point){
    return point.x;
  });

  // setting tooltips
  var tooltip = series.tooltip();
  // setting content
  tooltip.textFormatter(function(){
    return this.x;
  });
```

Sample below has more complex tooltip than snippet above. Click 'Launch in playground' to see format settings of a tooltip.

{sample}BCT\_RadarChart\_13{sample}

## Series Types

Radar js graphs supports Line, Area and Marker series types. You can learn how to change and configure styles of these types at: [Area chart](Area_Chart), [Line chart](Line-Spline-StepLine_Charts) and [Marker chart](Marker_Chart).

{sample}BCT\_RadarChart\_14{sample}
