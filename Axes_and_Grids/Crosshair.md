{:index 5}
# Crosshair

## Overview

Crosshair is a pair of perpendicular lines (horizontal and vertical), moving with the mouse. It might be useful, when you need to get the particular data of an action, while the axes contain any other information, such as years/months or any kind of percentage. Also, it looks similar to an aim in shooting; it's easier to "hit" the necessary point and get some extra information about it with the crosshair on a web chart.

Crosshair listens to these events: mouseMove, mouseOver, mouseOut, when mouse is inside the DataPlot box, Crosshair appears. Note that Crosshairs can have only one label each axis (one label on x-axis and another on y-axis).

Crosshairs can be used on all Cartesians ([Area](../Basic_Charts/Area_Chart), [Line](../Basic_Charts/Line_Chart), [Spline](../Basic_Charts/Spline_Chart), [Step Line](../Basic_Charts/Step_Line_Chart), [Bar](../Basic_Charts/Bar_Chart), [Column](../Basic_Charts/Column_Chart), etc.) and [Scatter Charts](../Basic_Charts/Scatter_Plot/Overview).
 
## Enable           
 
If you want to switch the Crosshair on, set the {api:anychart.core.ui.Crosshair}crosshair(){api} as true:

```
// turn the crosshair on
chart.crosshair(true);
```
{sample}AGST\_Crosshair\_01{sample}

## Binding to axes

In case you've got several axes on the same scale, you should tie the crosshair to one of them. Unless you do it, the default axis will be chosen (with the "0" index). Use {api:anychart.core.ui.CrosshairLabel#axisIndex}axisIndex(){api} method for this.

```
// set the indexes of the axes used
var yLabel = chart.crosshair().yLabel();
yLabel.axisIndex(1);
var xLabel = chart.crosshair().xLabel();
xLabel.axisIndex(0);
```
Look at the sample below, there are three axes and the crosshair is on.

{sample}AGST\_Crosshair\_02{sample}

## Appearance

### Lines

In some situations you may not need one or both lines but highlighted labels are still necessary. Write {api:anychart.core.ui.Crosshair#xStroke}xStroke(null){api} to remove the x-axis line (or {api:anychart.core.ui.Crosshair#yStroke}yStroke(null){api} to remove the y-axis):

```
// remove the x-axis line
var crosshair = chart.crosshair();
crosshair.xStroke(null); 
```
{sample}AGST\_Crosshair\_03{sample}

## Labels

### Disable

Use the standard function to disable the axes labels.

```
// disable the crosshair yLabels
var crosshair = chart.crosshair();
crosshair.yLabel(false);
```
{sample}AGST\_Crosshair\_04{sample}

### Change text

The crosshair label's format is the same as axis label's format by default. You may use the {api:anychart.core.ui.CrosshairLabel#format}format(){api} to change the crosshair's label. 

```
// set the label
var yLabel = chart.crosshair().yLabel();
yLabel.format(function() {
  return "$" + this.value;
});
```

Here is the sample with customized both x and y crosshair labels.

{sample}AGST\_Crosshair\_05{sample}

As far as you can use any function as {api:anychart.core.ui.CrosshairLabel#format}format(){api} of crosshair labels you use these labels to display additional information. Here is a sample with more complex labels formatter.

{sample}AGST\_Crosshair\_06{sample}