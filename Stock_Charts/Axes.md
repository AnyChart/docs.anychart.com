{:index 4}

# Axes

## Overview

In AnyChart axes are used to control axes labels, lines and tick marks.  
  
* To know how to operate with basic charts axes - please see: [Axis Basics](../Axes_and_Grids/Axis_Basics)
* To know what scale options are available - [Scale tutorial](Scales)
* To learn how to create additional axes - [Additional axes](../Axes_and_Grids/Additional_Axes)
* To learn how to configure axes labels - [Axes Labels](../Axes_and_Grids/Axes_Labels_Formatting)
* To learn more about Date/Time Scale - [Date/Time Axes](../Axes_and_Grids/Date_Time_Axes)

In this section we will demonstrate only the differences of AnyStock axes and scales from basic charts' ones.

## Stock Axes features

Axes in AnyStock are generally quite similar to the Basic ones, but the X-axis is slightly different:
* X-axis is always in date time format and shows the Data values
* X-axis is always scrollable
* X-axis has background instead of stroke (axis line)
* X-axis cannot be moved to another side of a plot (always at the bottom)
* X-axis has a Helper Label feature
* There are no drawFirstLabel, drawLastLabel in Stock X-axis
* X-axis Tickmarks settings are different (ticks can be displayed only inside of the axis)
* X-axis doesnt have a title
* Only one X-axis for a plot (so the max number of X-axes on an AnyStock chart is equal to the number of the plots)

## Orientation 

While a lot of AnyStock Axes settings are the same as Basic charts', there is a difference in their orientation settings. Due to the specifics of AnyStock charts, the X-axis has to be at to the bottom of the plot. The Y-axes act as usual.

##Tickmarks

The ticks in AnyStocks are a little bit different too. As the X-axis is an area, the ticks are being placed inside of it. Let's enable both major (with {api:anychart.core.axes.StockDateTime#ticks}ticks(){api} method) and minor (with {api:anychart.core.axes.StockDateTime#minorTicks}minorTicks(){api} method) ticks: 

{sample}STOCK\_Axes\_01{sample}

Scroll the chart to see them all.

We can adjust the length of ticks on X-axis only by setting another height for the axis with the {api:anychart.core.axes.StockDateTime#height}height(){api} method of the axis. Ticks themselves don't have this method. 

You can find how to work with the X-axis height in the [Axis Line](#axis_line) part of the article.

## Labels

Labels of the X-axis have an additional feature: it is a helper label that "saves" the scrolled major label value. Just scroll the previous example and watch the scrolled labels.

That happens when the helperLabel is on (by default). You can disable it by passing false to the {api:anychart.core.axes.StockDateTime#showHelperLabel}showHelperLabel(){api} method.

```
// disabling the Helper Label
chart.plot(0).xAxis().showHelperLabel(false);
```

{sample}STOCK\_Axes\_02{sample}

Finally, as our X-axis is an area, the labels are placed and might be moved only inside of this area. For example, let's put our labels (both major and minor) to the right of the ticks we have enabled before. We use {api:anychart.core.ui.Label#position}position(){api} and {api:anychart.core.ui.Label#anchor}anchor(){api} to move them correctly.

```
// moving the labels
xAxis = chart.plot(0).xAxis();
xAxis.labels().position('right').anchor('left_center');
xAxis.minorLabels().position('right').anchor('left_center');
```

{sample}STOCK\_Axes\_03{sample}

## Axis Line

In AnyStock, the x-axis is not a line, but an area with the background and height. We can change these parameters using {api:anychart.core.axes.StockDateTime#background}background(){api} and {api:anychart.core.axes.StockDateTime#height}height(){api} methods. Let's apply these methods:

```
// changing the background and the height of the axis
xAxis.background('#CCFFFF');
xAxis.height(40);
```

{sample}STOCK\_Axes\_04{sample}

## Grids

Grids are added to every plot using {api:anychart.core.stock.Plot#yGrid}grid{api} method, the settings are similar to [basic grids](../Axes_and_Grids/Axis_Basics#grids), but it is a method of a plot, not a chart:

```
// defining the chart 
chart = anychart.stock();

// dashed horizontal grid
chart.plot(0).yGrid().enabled(true);
chart.plot(0).yGrid().stroke({dash: "3 5"});
```

{sample}STOCK\_Axes\_05{sample}

## Extra/Additional Axes

You can add as many Y-axes as you need, but there can be only one X-axis on one plot. You can have more than one plot on an AnyStock chart with one x-axis in each. It might be comfortable to use several series when you've got several series on a chart with completely different values. Look at the following sample:

```
// Create and tune additional y axis
var extraYAxis = plot_line_ohlc.yAxis(1);
extraYAxis.orientation("right");
extraYAxis.scale(extraYScale);
```

Note that when you add an extra axis you need to change chart {api:anychart.charts.Stock#padding}padding{api} to fit the labels, AnyStock Chart, unlike AnyChart charts, do not fit axes labels automatically, paddings can be set both in pixels and in percent:

```
// create a chart
chart = anychart.stock();
// set paddings
chart.padding("10%", 10, 10, 50);
```

{sample}STOCK\_Plots\_03{sample}