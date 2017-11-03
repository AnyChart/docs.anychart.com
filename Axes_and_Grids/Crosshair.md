{:index 5}
# Crosshair

## Overview

A crosshair is a pair of perpendicular lines (horizontal and vertical) that moves when the mouse is moved. As a rule, there are also two labels displayed on the X- and Y-axes in the points where the axes are crossed by the crosshair lines. The crosshair allows the user to "hit" a particular data point and see some extra information about it.

## Enabling

The crosshair can be configured with the help of the {api:anychart.charts.Cartesian#crosshair}crosshair(){api} method.

By default the crosshair is disabled. To enable or disable it, use {api:anychart.charts.Cartesian#crosshair}crosshair(){api} with the `true` or `false` parameter:

```
// enable the crosshair
chart.crosshair(true);
```

**Note:** You can also hide a line or a label of the crosshair – see the [Appearance](#appearance) and [Labels](#labels) sections.

In this sample the crosshair is enabled, and there are also buttons to disable and enable it:

{sample}AGST\_Crosshair\_01{sample}

## Appearance

You can configure the appearance of the crosshair by adjusting its X- and Y-strokes: use the {api:anychart.core.ui.Crosshair#xStroke}xStroke(){api} and {api:anychart.core.ui.Crosshair#yStroke}yStroke(){api} methods.

**Note:** The `null` parameter allows you to hide a line or both lines of the crosshair (labels are still shown).

In the following sample the X-stroke is not displayed; the appearance of the Y-stroke is configured:

```
// configure the strokes of the crosshair
chart.crosshair().xStroke(null);
chart.crosshair().yStroke("#dd2c00", 1.5, "10 5", "round");
```

{sample}AGST\_Crosshair\_02{sample}

## Labels

The crosshair has two labels, which are shown on the X- and Y-axes in the points where the axes are crossed by the crosshair lines. To configure these labels, use the {api:anychart.core.ui.Crosshair#xLabel}xLabel(){api} and {api:anychart.core.ui.Crosshair#yLabel}yLabel(){api} methods.

See the full list of the available settings: {api:anychart.core.ui.CrosshairLabel}anychart.core.ui.CrosshairLabel{api}

You can disable or enable a label or both labels by using the `false` or `true` parameter:

```
// disable the x-label
chart.crosshair().xLabel(false);
```

The text of the labels can be changed with the help of the {api:anychart.core.ui.CrosshairLabel#format}format(){api} method and [formatting functions](../Common_Settings/Text_Formatters#formatting_functions):

```
// set the text of the y-label
chart.crosshair().yLabel().format(function (){
  return this.value + " $";
});
```

It is also possible to configure the appearance of the labels. For example, you can use {api:anychart.core.ui.CrosshairLabel#fontColor}fontColor(){api} and {api:anychart.core.ui.CrosshairLabel#background}background(){api} to adjust the font color and background:

```
// configure the appearance of the y-label
chart.crosshair().yLabel().fontColor("#64b5f6");
chart.crosshair().yLabel().background({
  fill: "white",
  stroke: "#64b5f6"
});
```

In the sample below the Y-label is colored, its text changed, and the X-label is not displayed:

{sample}AGST\_Crosshair\_03{sample}

## Binding to Axes

The crosshair can have only one Y- and one X-label. If your chart has two or more Y-axes, by default the Y-label of the crosshair is shown on the first one (with the 0 index), and the same rule works with the X-label and multiple X-axes.

To bind the crosshair to an axis of your choice, specify the index of the axis by using the {api:anychart.core.ui.CrosshairLabel#axisIndex}axisIndex(){api} method. Combine it with {api:anychart.core.ui.Crosshair#xLabel}xLabel(){api} or {api:anychart.core.ui.Crosshair#yLabel}yLabel(){api}.

In this sample there are two Y-axes, and the Y-label of the crosshair is bound to the second one, which is on the left:

```
/* bind the y-label of the crosshair
to the second y-axis */
chart.crosshair().yLabel().axisIndex(1);
```

{sample}AGST\_Crosshair\_04{sample}