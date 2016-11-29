{:index 1}
# JumpLine Chart

* [Overview](#overview)
* [Chart](#chart)
* [Adjusting](#adjusting)
* [Samples](#samples)

## Overview

When your data can be arranged in a table format on a worksheet, there are several chart types suit for demonstrating this data. JumpLine Chart is one of those. These Charts are quite alike Line Charts, or even more alike StepLine charts: JumpLine counts the data points as the center points of "jumps" - horizontal line segments of a category width. The difference between StepLine and JumpLine is in vertical line segments, connecting the "steps" of a StepLine: in JumpLine, nothing connects the points. 

JumpLine Charts are usually used for demonstrating rates.

All features common with the Line Charts are described in detail in the [Line Chart article](Line_Chart).

## Chart

The JumpLine Chart is created by the {api:anychart.charts.Cartesian#jumpLine}jumpLine(){api} method. Look at the single-series JumpLine Chart :

```
var data = anychart.data.set([
  ["January", 10000],
  ["February", 12000],
  ["March", 18000],
  ["April", 11000],
  ["May", 9000]
]);
var chart = anychart.line();
chart.jumpLine(data);
```

{sample}BCT\_JumpLine\_Chart\_01{sample}


## Adjusting

You can find the detailed information about adjusting chart elements and features separately in the [Line Chart tutorial](Line_Chart). This section briefly tells about adjusting such elements and features like [axes](../../Axes_and_Grids/Axis_Basics), [scales](../Axes_and_Grids/Scales), text elements and setting the colors.

For some reasons, you may need to put the X-Axis above the Chart or Y-Axis to the right from the chart, i.e. to change the orientation. The {api:anychart.core.axes.Linear#orientation}orientation(){api} method allows do it. There are four possible values for this method: "top", "bottom", "right" and "left".

As well as axes depend on scales, there are some scaling settings which affect the axes: inversion and setting the extreme values. To invert the axis, use the {api:anychart.scales.Linear#inverted}inverted(){api} method, to set the max and min values use the {api:anychart.scales.Linear#maximum}maximum(){api} and {api:anychart.scales.Linear#minimum}minimum(){api} methods.

Sometimes it is necessary to highlight a point - for example, the best or the worst value. Markers are elements used for emphasizing the points. Use the {api:anychart.core.cartesian.series.JumpLine#markers}markers(){api} method to create and adjust them.

Labels and tooltips are small text elements which are supposed to show some basic or extra information about the point. These elements are created with the {api:anychart.charts.Cartesian#labels}labels(){api} and {api:anychart.charts.Cartesian#tooltip}tooltip(){api} methods.

Coloring the chart is usually the final step in its creating as all elements of the chart can be colored due to the color palette chosen for each particular chart. There are several ways to set the colors to the series, points of other elements. You can use the data set, set the colors through some special methods or add/create a color [palette](Appearance_Settings/Palettes). 

The sample below demonstrates a JumpLine Chart with the adjusted parameters described before. Explore it in the playground to see the code.

{sample}BCT\_JumpLine\_Chart\_02{sample}


## Samples

Find a lot of other samples in [AnyChart Web Line, Spline, Step-Line Charts Gallery](http://anychart.com/products/anychart/gallery/Line,_Spline,_Step-Line_Charts/).
