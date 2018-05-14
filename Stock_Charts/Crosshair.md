{:index 6.5}

# Crosshair

## Overview

A crosshair is a pair of perpendicular lines (horizontal and vertical) that moves when the mouse is moved. As a rule, there are also two labels displayed on the X- and Y-axes in the points where the axes are crossed by the crosshair lines. The crosshair allows the user to "hit" a particular data point and see some extra information about it.

The crosshair in AnyStock is similar to the [crosshair in basic charts](../Axes_and_Grids/Crosshair#labels).

## Enabling

In Anystock you can configure the crosshair either on the whole chart or on a particular plot: use the {api:anychart.charts.Stock#crosshair}chart.crosshair(){api} or {api:anychart.core.stock.Plot#crosshair}plot.crosshair(){api} method. Both of them return instances of the {api:anychart.core.ui.Crosshair}anychart.core.ui.Crosshair{api} class.

By default the crosshair is enabled. To disable or enable it on a chart or a plot, use the {api:anychart.charts.Stock#crosshair}chart.crosshair(){api} or {api:anychart.core.stock.Plot#crosshair}plot.crosshair(){api} method with the `false` or `true` parameter:

```
// disable the crosshair
chart.crosshair(false);
```

**Note:** You can also hide a line or a label of the crosshair - see the [Appearance](#appearance) and [Labels](#labels) sections.

This sample shows how to disable and enable the crosshair:

{sample}STOCK\_Crosshair\_01{sample}

## Display Mode

The default display mode of the crosshair is **sticky**: its vertical line always sticks to the data points of the series, jumping from one point to another. You can make it move more smoothly (float) by changing the display mode to **float**.

To set the display mode, call the {api:anychart.core.ui.Crosshair#displayMode}displayMode(){api} method with either `"sticky"` or `"float"` as a parameter - see {api:anychart.enums.CrosshairDisplayMode}anychart.enums.CrosshairDisplayMode{api}:

```
// set the display mode of the crosshair
chart.crosshair().displayMode("float");
```

{sample}STOCK\_Crosshair\_02{sample}

## Appearance

You can configure the appearance of the crosshair by adjusting its X- and Y-strokes: use the {api:anychart.core.ui.Crosshair#xStroke}xStroke(){api} and {api:anychart.core.ui.Crosshair#yStroke}yStroke(){api} methods.

**Note:** The `null` parameter allows you to hide a line or both lines of the crosshair (labels are still shown).

In the following sample there is a Stock chart with two plots. The X- and Y-strokes of the crosshair have different visual settings, and on the second plot the X-stroke is not displayed:

```
// create two plots
var plot_1 = chart.plot(0);
var plot_2 = chart.plot(1);

// configure the strokes of the crosshair on the first plot
plot_1.crosshair().xStroke("#00bfa5", 1.5, "10 5", "round");
plot_1.crosshair().yStroke("#00bfa5", 1.5);

// configure the strokes of the crosshair on the second plot
plot_2.crosshair().xStroke(null);
plot_2.crosshair().yStroke("#00bfa5", 1.5);
```

{sample}STOCK\_Crosshair\_03{sample}

## Labels

The crosshair has two labels, which are shown on the X- and Y-axes in the points where the axes are crossed by the crosshair lines. To configure these labels, use the {api:anychart.core.ui.Crosshair#xLabel}xLabel(){api} and {api:anychart.core.ui.Crosshair#yLabel}yLabel(){api} methods.

See the full list of the available settings: {api:anychart.core.ui.CrosshairLabel}anychart.core.ui.CrosshairLabel{api}

You can disable or enable a label or both labels by using the `false` or `true` parameter:

```
// enable the x-label on the first plot
plot_1.crosshair().xLabel(true);
```

**Note:** By default, if a chart has multiple plots, only the last plot has the X-label.

The text of the labels can be changed with the help of the {api:anychart.core.ui.CrosshairLabel#format}format(){api} method and [formatting functions](../Common_Settings/Text_Formatters#formatting_functions):

```
// set the text of the y-label
chart.crosshair().yLabel().format(function (){
  return this.value + " $";
});
```

It is also possible to configure the appearance of the labels. For example, you can use {api:anychart.core.ui.CrosshairLabel#fontColor}fontColor(){api} and {api:anychart.core.ui.CrosshairLabel#background}background(){api} to adjust the font color and background:

```
/* configure the appearance of the labels
on the first plot */
var crosshair_1 = plot_1.crosshair();
crosshair_1.xLabel().fontColor("#64b5f6");
crosshair_1.xLabel().background({
  fill: "white",
  stroke: "#64b5f6"
});
crosshair_1.yLabel().fontColor("#64b5f6");
crosshair_1.yLabel().background({
  fill: "white",
  stroke: "#64b5f6"
});

/* configure the appearance of the labels
on the second plot */
var crosshair_2 = plot_2.crosshair();
crosshair_2.xLabel().fontColor("#ffa000");
crosshair_2.xLabel().background({
  fill: "white",
  stroke: "#ffa000"
});
crosshair_2.yLabel().fontColor("#ffa000");
crosshair_2.yLabel().background({
  fill: "white",
  stroke: "#ffa000"
});
```

In the sample below there is a Stock chart with two plots. On both plots there are the X-labels, the text of the Y-labels is changed, and all labels are colored to match the colors of their plots:

{sample}STOCK\_Crosshair\_04{sample}