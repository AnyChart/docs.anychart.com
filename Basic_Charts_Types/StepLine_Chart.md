{:index 1}
# StepLine Chart

* [Overview](#overview)
* [Chart](#chart)
* [Special StepLine Features](#special_stepline_features)
  * [Step Direction](#step_direction)
* [Axes](#axes)
* [Visualization](#visualization)
* [Labels and Tooltips](#labels_and_tooltips)
* [Markers](#markers)

## Overview

StepLine Chart is a kind of a Line Chart which points form not a polyline but stairs-like steps. This chart type is often used for signal monitoring.

## Chart

The StepLine Chart is a kind of Line Chart of a special view and purpose. It is created as a Chart of Line type with a series of a StepLine type:

```
var data = anychart.data.set([
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
]);
chart = anychart.line();
series = chart.stepline(data);
```

{sample}BCT\_StepLine\_Chart\_01{sample}

StepLine Charts can also be multi-series, as well as the Line Charts. All settings available for Line Charts are the same for the StepLine Charts, but there are some special methods for the last ones. The following section describes those.

## Special StepLine Features

### Step Direction

While the Line Chart is formed by line segments between two points, the StepLine Chart is formed by horizontal line segments of the same width as the category and vertical line segments that connect the horizontal ones, forming something like stairs. To set the exact way those segments should be placed, use the {api:anychart.core.cartesian.series.StepLine#stepDirection}stepDirection(){api} method. This method has three modes: center, forward and backward. Let's consider this method with all its modes.

The "center" mode is set by default. In this case a data point becomes the center of a horizontal line segment. Look at the following sample:

```
// set data
series1 = chart.stepLine(data);
series1.markers(true);

// this line can be dropped as this is set by default
series1.stepDirection("center");
```

{sample}BCT\_StepLine\_Chart\_02{sample}


If you set "forward" into the {api:anychart.core.cartesian.series.StepLine#stepDirection}stepDirection(){api} method, the line segments will start from the points, i.e. the data points will become the starting points for each horizontal line segment:

```
// set data
series1 = chart.stepLine(data);
series1.markers(true);

// this line can be dropped as this is set by default
series1.stepDirection("forward");
```

{sample}BCT\_StepLine\_Chart\_03{sample}

If you set "backward" into the {api:anychart.core.cartesian.series.StepLine#stepDirection}stepDirection(){api} method, the line segments will end by the points, i.e. the data points will be the final points for each horizontal line segment:

```
// set data
series1 = chart.stepLine(data);
series1.markers(true);

// this line can be dropped as this is set by default
series1.stepDirection("backward");
```

{sample}BCT\_StepLine\_Chart\_04{sample}

This method also works for [Area Charts](Area_Chart), [Range Area Charts](Range_Area-SplineArea_Charts).


## Axes

In AnyChart axis is an object that allows you to configure chart grid, axis line along with tick marks and labels, axis scale and settings and else. In this section we will quickly demonstrate how we can adjust axis orientation, invert axis scale and control minimum and maximum values.

With AnyChart web graphs you can place axes to any side of the chart, all you need to do is to adjust orientation with {api:anychart.core.axes.Linear#orientation}orientation(){api} parameter of {api:anychart.charts.Cartesian#yAxis}yAxis(){api} or {api:anychart.charts.Cartesian#xAxis}xAxis(){api} methods.
  
The position depends on the plot type and inversion of axes. See list of all possible orientation and inversion settings in [Axes Orientation](../Axes_and_Grids/Axis_Orientation) tutorial.

```
var xAxis = chart.xAxis();
xAxis.orientation("top");
```

AnyChart allows to invert any scale you want. Inversion is controlled by {api:anychart.scales.Linear#inverted}inverted(){api} method:

```
var yScale = chart.yScale();
yScale.inverted(true);
```

AnyChart calculates axis minimum and maximum values automatically. The minimal value on Y-Axis is 8000, the maximum is 20000, as you can see in the sample above. You can control these values by setting {api:anychart.scales.Linear#maximum}maximum(){api} and {api:anychart.scales.Linear#minimum}minimum(){api} parameters of {api:anychart.charts.Cartesian#yScale}yScale(){api} method. The following code sample demonstrates defining 0 and 50000 as the min and the max values on the Y-Scale:

```
var yScale = chart.yScale();
yScale.minimum(0);
yScale.maximum(50000);
```

And here is the demonstration of setting the max and min values for the inverted Y-Scale with top-oriented X-Scale in the Single-series sample:

{sample}BCT\_StepLine\_Chart\_05{sample}

## Visualization

In this section we will describe the main parts of the line chart style and demonstrate how this style can be applied.

The main idea of styles is to segregate visualization and data definition. Visual appearance of lines is defined in certain styles. 

Also, styles are used to make charts interactive, so you can define how elements should be displayed by default and when hovered.

### Basic Sample

Now, let's look how to create a simple style and apply it to the chart. As we've already said a style consists of several elements, and its acceptable structure is given below:

```
  // line settings
  series.stroke(
    // set line color
    "Rgb(86,86,26)",
    // set line size
    4
  );
  
  // line settings in hovered state
  series.hoverStroke(
    // set line color
    "Rgb(86,86,26)",
    // set line size
    4
  );
    
  var markers = series.markers();
  // enables markers
  markers.enabled(true);
  // set marker type
  markers.type("star5");
  // set marker inner color
  markers.fill("gold");
  // set marker border
  markers.stroke("darkred");
  // set marker size
  markers.size(7);
  
  // settings for hovered marker
  var hoverMarkers = series.hoverMarkers();
  // marker size
  hoverMarkers.size(7);
  // marker inner color
  hoverMarkers.fill("darkred");
  // marker border
  hoverMarkers.stroke("gold");
```

Using such settings we've redefined line color and made it rather thick. Also, we've redefined settings for each point marker along with settings for each marker in hovered state.

{sample}BCT\_StepLine\_Chart\_06{sample}

**Note**: you can find more information about lines' visual appearance in [Line Settings tutorial](../Appearance_Settings/Lines_Settings).

## Labels and Tooltips

In this section we will explain how to add and configure data labels and tooltips.
  
If you want to configure data labels and tooltips for all series - use {api:anychart.charts.Cartesian#labels}labels(){api} and {api:anychart.charts.Cartesian#tooltip}tooltip(){api} methods.     
With the following example, let's make data labels appear to the bottom from the data points and disable tooltips:

```
// enable and adjust labels
labels = series.labels();
labels.enabled(true);
labels.position("bottom");
labels.anchor("top");

// disable tooltips
tooltips = chart.tooltip();
tooltips.enabled(false);
```

{sample}BCT\_StepLine\_Chart\_07{sample}


## Samples

You can see a lot of other samples in [AnyChart Web Line, Spline, Step-Line Charts Gallery](http://anychart.com/products/anychart/gallery/Line,_Spline,_Step-Line_Charts/).
