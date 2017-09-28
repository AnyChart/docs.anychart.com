{:index 6.5}

# Crosshair

## Overview

...

You can configure the crosshair either on the whole chart or on a particular plot: use the {api:anychart.charts.Stock#crosshair}chart.crosshair(){api} or {api:anychart.core.stock.Plot#crosshair}stock.crosshair(){api} method. Both of them return and instance {api:anychart.core.ui.Crosshair}anychart.core.ui.Crosshair{api} class.

For example, in the [Display Mode](#display_mode) section of this article, the display mode is set on the whole sample chart, and in the [Disabling](#disabling) section, the crosshair is disabled only on the first plot of the sample chart.

## Display Mode

The default display mode of the crosshair is **sticky**: its vertical line always sticks to the data points of the series. You can make it move more smoothly ("float") by changing the display mode to **float**.

To set the display mode, call the {api:anychart.core.ui.Crosshair#displayMode}displayMode(){api} method with either `sticky` or `float` as a parameter:

```
// set the display mode of the crosshair
chart.crosshair().displayMode("float");
```

{sample}STOCK\_Crosshair\_01{sample}

## Appearance

You can configure the appearance of the crosshair by adjusting its X- and Y-strokes: use the {api:anychart.core.ui.Crosshair#xStroke}xStroke(){api} and {api:anychart.core.ui.Crosshair#yStroke}yStroke(){api} methods.

**Note:** The `null` parameter allows you to hide a line of the crosshair. To learn how to disable the crosshair completely, see the [Disabling](#disabling) section of this article.

In the following sample there is a Stock chart with two plots. The X- and Y-strokes of the crosshair have different visual settings, and on the second plot the X-stroke is not displayed:

```
// create two plots
var plot_1 = chart.plot(0);
var plot_2 = chart.plot(1);

// configure the crosshair strokes on the first plot
plot_1.crosshair().yStroke("#00bfa5", 1.5);
plot_1.crosshair().xStroke("#00bfa5", 1.5, "10 5", "round");

// configure the crosshair strokes on the second plot
plot_2.crosshair().yStroke("#00bfa5", 1.5);
plot_2.crosshair().xStroke(null);
```

{sample}STOCK\_Crosshair\_02{sample}

## Labels

* {api:anychart.core.ui.Crosshair#xLabel}xLabel(){api}
* {api:anychart.core.ui.Crosshair#yLabel}yLabel(){api}
* {api:}{api}
* {api:}{api}
* {api:}{api}
* {api:}{api}
* {api:}{api}
* {api:}{api}

```
/* enable the crosshair labels
on the x-axis of the first plot */
plot_1.crosshair().xLabel(true);
```

* {api:anychart.core.ui.CrosshairLabel}anychart.core.ui.CrosshairLabel{api}
* [formatting functions](../Common_Settings/Text_Formatters#formatting_functions)
* {api:anychart.core.ui.CrosshairLabel#format}format(){api}

```
/* configure the text of the crosshair labels
on the y-axis */
chart.crosshair().yLabel().format(function(){
  return this.value + " $";
});
```

* {api:anychart.core.ui.CrosshairLabel#fontColor}fontColor(){api}
* {api:anychart.core.ui.CrosshairLabel#background}background(){api}

```
/* configure the appearance of the crosshair labels
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

/* configure the appearance of the crosshair labels
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

{sample}STOCK\_Crosshair\_03{sample}

## Disabling

* {api:anychart.charts.Stock#crosshair}chart.crosshair(){api}
* {api:anychart.core.stock.Plot#crosshair}stock.crosshair(){api}
* `false`

```
// disable the crosshair on the first plot
plot_1.crosshair(false);
```

{sample}STOCK\_Crosshair\_04{sample}