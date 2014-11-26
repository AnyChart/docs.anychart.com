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
* [Visualization](#visualisation)
 * [Grid](#grid)
 * [Labels and Tooltips](#labels_and_tooltips)

## Overview

A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative.


The radar chart is also known as web chart, spider chart, star chart, cobweb chart, star plot, irregular polygon, polar chart, or kiviat diagram.

## Chart

AnyChart allows to display three types of series on Radar chart: Line, Area and Marker. You need to set **anychart.polarChart()** to display Radar chart:

```
    chart = anychart.radarChart();

    chart.line([
        {name: "Administration", y="22"},
        {name: "Sales", y="34"},
        {name: "Marketing", y="16"},
        {name: "Research", y="12"},
        {name: "Support", y="38"},
        {name: "Development", y="47"}
    ]);
```

As you can see each point is represented by category set using name attribute and value set using y attribute.

Here is a basic Radar sample:

{sample}BCT\_RadarChart\_01{sample}

## Configurations

Radar plot has several distinctive configuration options, which are presented in this section: chart radius settings, chart rotation and background settings.

### Radius size

By default AnyChart calculates radius of radar chart automatically, but this parameter may be set manually. Radar chart radius is controlled by maximum and minimum size of Y scale and may be set throught **.yScale().minimum().maximum()** mathod.

```
  //set chart type
  var chart = anychart.radarChart();

  //set radar radius
  chart.yScale()
    .maximum(120) //set maximum radius of radar chart
    .minimum(50); //set minimum radius of radar chart
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

Border settings

Radar border consists of two different lines: <border> of <background> node described above, and X-axis setting - <line> node:

XML Syntax
XML Code
Plain code
01
<chart_settings>
02
  <axes>
03
    <x_axis>
04
      <line enabled="true" thickness="4" type="Gradient">
05
        <gradient>
06
          <key color="white" />
07
          <key color="black" />
08
        </gradient>
09
      </line>
10
    </x_axis>
11
  </axes>
12
</chart_settings>
Sample below shows Х-axis line width and background border are set to 4 pixels:

Live Sample:  Radar Chart Plot border

to top

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