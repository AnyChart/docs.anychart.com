{:index 5}
# Crosshair

## Overview

A crosshair is a pair of perpendicular lines (horizontal and vertical) that moves when the mouse is moved. As a rule, there are also two labels displayed on the X- and Y-axes in the points where the axes are crossed by the crosshair lines. The crosshair allows the user to "hit" a particular data point and see some extra information about it.

[Crosshair listens to these events: mouseMove, mouseOver, mouseOut, when mouse is inside the DataPlot box, Crosshair appears. Note that Crosshairs can have only one label each axis (one label on x-axis and another on y-axis).]

[Crosshairs can be used on all Cartesians ([Area](../Basic_Charts/Area_Chart), [Line](../Basic_Charts/Line_Chart), [Spline](../Basic_Charts/Spline_Chart), [Step Line](../Basic_Charts/Step_Line_Chart), [Bar](../Basic_Charts/Bar_Chart), [Column](../Basic_Charts/Column_Chart), etc.) and [Scatter Charts](../Basic_Charts/Scatter_Plot/Overview).]

## Enabling

To configure the crosshair...

By default the crosshair is disabled. To enable / disable it... with the `true` or `false` parameter:

```
// enable the crosshair
chart.crosshair(true);
```

**Note** You can also hide a line of the crosshair – see the [Appearance](#appearance) section.

This sample shows how to enable / disable the crosshair:

{sample}STOCK\_Crosshair\_01{sample}

## Display Mode

The default display mode of the crosshair is **sticky**: its vertical line always sticks to the data points of the series, jumping from one point to another. You can make it move more smoothly (float) by changing the display mode to **float**.

To set the display mode, call the {api:anychart.core.ui.Crosshair#displayMode}displayMode(){api} method with either `sticky` or `float` as a parameter:

```
// set the display mode of the crosshair
chart.crosshair().displayMode("float");
```

{sample}AGST\_Crosshair\_02{sample}

## Binding to Axes

[In case you've got several axes on the same scale, you should tie the crosshair to one of them. Unless you do it, the default axis will be chosen (with the "0" index). Use {api:anychart.core.ui.CrosshairLabel#axisIndex}axisIndex(){api} method for this.

```
// set the indexes of the axes used
var yLabel = chart.crosshair().yLabel();
yLabel.axisIndex(1);
var xLabel = chart.crosshair().xLabel();
xLabel.axisIndex(0);
```
Look at the sample below, there are three axes and the crosshair is on.]

{sample}AGST\_Crosshair\_03{sample}

## Appearance

You can configure the appearance of the crosshair by adjusting its X- and Y-strokes: use the {api:anychart.core.ui.Crosshair#xStroke}xStroke(){api} and {api:anychart.core.ui.Crosshair#yStroke}yStroke(){api} methods.

**Note:** The `null` parameter allows you to hide a line of the crosshair. To learn how to disable the crosshair completely, see the [Enabling](#enabling) section of this article.

In the following sample there is a Stock chart with two plots. The X- and Y-strokes of the crosshair have different visual settings, and on the second plot the X-stroke is not displayed:

```
// create two plots
var plot_1 = chart.plot(0);
var plot_2 = chart.plot(1);

// configure crosshair strokes on the first plot
plot_1.crosshair().yStroke("#00bfa5", 1.5);
plot_1.crosshair().xStroke("#00bfa5", 1.5, "10 5", "round");

// configure crosshair strokes on the second plot
plot_2.crosshair().yStroke("#00bfa5", 1.5);
plot_2.crosshair().xStroke(null);
```

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