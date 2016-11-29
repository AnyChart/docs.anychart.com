{:index 1}
# StepLine Chart

* [Overview](#overview)
* [Chart](#chart)
* [Special StepLine Features](#special_stepline_features)
  * [Step Direction](#step_direction)
* [Adjusting](#adjusting)
* [Samples](#samples)

## Overview

StepLine Chart is a kind of a [Line Chart](Line_Chart) which points form not a polyline but stairs-like steps. This chart type is often used for signal monitoring.

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


## Adjusting

All elements and features of a StepLine Chart can be adjusted due to the exact purposes of a chart.

Axes are responsible for the grids, markers, axes labels. Sometimes it might be necessary to change axes orientation, for example, to put the Y-Axis from the left side of the chart to its right side. Use the {api:anychart.core.axes.Linear#orientation}orientation(){api} method.

Axes are based on scales - elements that allow you to control such features as minimum and maximum scale values, scale inversion, intervals, scale type and so on. The {api:anychart.scales.Linear#inverted}inverted(){api} method allows to invert the scale, and the {api:anychart.scales.Linear#maximum}maximum(){api} and {api:anychart.scales.Linear#minimum}minimum(){api} methods are used to set the min and max values of the scale. You can find a lot of information about scales in the [Scales article](../Axes_and_Grids/Scales).

Markers are special elements which are supposed to emphasize the point for some reasons. They are to be added by the {api:anychart.core.cartesian.series.Stick#markers}markers(){api} method. It is possible to change their shape, size and color.

There are also some text elements supposed to tell the customer some information about the point. Labels are elements that are permanently shown (though, this can be changed and adjusted) somewhere next to the point and tooltips are pop-up elements that are shown on a point hovered. Add the labels and tooltips with the {api:anychart.charts.Cartesian#labels}labels(){api} and {api:anychart.charts.Cartesian#tooltip}tooltip(){api} methods. Both elements' text can be adjusted through the {api:anychart.core.ui.Tooltip#textFormatter}textFormatter(){api} method.

After all elements have been adjusted to demonstrate the necessary information about the point, it is a good time for changing the colors. There are several ways to set the colors to the series, points of other elements. You can use the data set, set the colors through some special methods or add/create a color [palette](Appearance_Settings/Palettes). 

The sample below demonstrates a JumpLine Chart with the adjusted parameters described before. Explore it in the playground to see the code.

{sample}BCT\_Stick\_Chart\_05{sample}


## Samples

You can see a lot of other samples in [AnyChart Web Line, Spline, Step-Line Charts Gallery](http://anychart.com/products/anychart/gallery/Line,_Spline,_Step-Line_Charts/).
