{:index 5}
# Crosshair

## Overview

A crosshair is a pair of perpendicular lines (horizontal and vertical) that moves when the mouse is moved. As a rule, there are also two labels displayed on the X- and Y-axes in the points where the axes are crossed by the crosshair lines. The crosshair allows the user to "hit" a particular data point and see some extra information about it.

[Crosshair listens to these events: mouseMove, mouseOver, mouseOut, when mouse is inside the DataPlot box, Crosshair appears. Note that Crosshairs can have only one label each axis (one label on x-axis and another on y-axis).]

[Crosshairs can be used on all Cartesians ([Area](../Basic_Charts/Area_Chart), [Line](../Basic_Charts/Line_Chart), [Spline](../Basic_Charts/Spline_Chart), [Step Line](../Basic_Charts/Step_Line_Chart), [Bar](../Basic_Charts/Bar_Chart), [Column](../Basic_Charts/Column_Chart), etc.) and [Scatter Charts](../Basic_Charts/Scatter_Plot/Overview).]

## Enabling

To configure the crosshair...

By default the crosshair is disabled. To enable or disable it... with the `true` or `false` parameter:

```
// enable the crosshair
chart.crosshair(true);
```

**Note** You can also hide a line of the crosshair – see the [Appearance](#appearance) section.

In this sample the crosshair is enabled, and there are also buttons to disable and enable it:

{sample}STOCK\_Crosshair\_01{sample}

## Display Mode

[The default display mode of the crosshair is **sticky**: its vertical line always sticks to the data points of the series, jumping from one point to another. You can make it move more smoothly (float) by changing the display mode to **float**.]

To set the display mode, call the {api:anychart.core.ui.Crosshair#displayMode}displayMode(){api} method with either `float` or `sticky` as a parameter:

```
// set the display mode of the crosshair
chart.crosshair().displayMode("sticky");
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

In the following sample there is... the X-stroke is not displayed:

```

```

{sample}AGST\_Crosshair\_04{sample}

## Labels

The crosshair has two labels, which are shown on the X- and Y-axes in the points where the axes are crossed by the crosshair lines. To configure these labels, use the {api:anychart.core.ui.Crosshair#xLabel}xLabel(){api} and {api:anychart.core.ui.Crosshair#yLabel}yLabel(){api} methods.

See the full list of the available settings: {api:anychart.core.ui.CrosshairLabel}anychart.core.ui.CrosshairLabel{api}

You can disable or enable crosshair labels by using the `false` or `true` parameter:

```

```

[**Note:** By default, if a chart has multiple plots, only the last plot has an X-label.]

The text of labels can be changed with the help of the {api:anychart.core.ui.CrosshairLabel#format}format(){api} method and [formatting functions](../Common_Settings/Text_Formatters#formatting_functions):

```
/* configure the text of crosshair labels
on the y-axis */
chart.crosshair().yLabel().format(function(){
  return this.value + " $";
});
```

It is also possible to configure the appearance of labels. For example, you can use {api:anychart.core.ui.CrosshairLabel#fontColor}fontColor(){api} and {api:anychart.core.ui.CrosshairLabel#background}background(){api} to adjust the font color and background:

```

```

In the sample below there is... the default text of Y-labels is changed... labels are colored to match the colors of their plots:

{sample}AGST\_Crosshair\_05{sample}