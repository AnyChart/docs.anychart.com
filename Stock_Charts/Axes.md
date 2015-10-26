{:index 5}

#Axes

* [Overview](#overview)
* [Stock Axes features](#stock_axes_features)
* [Orientation](#orientation)
* [Tickmarks](#tickmarks)
* [Labels](#labels)
* [Axis Line](#axis_line)
* [Number of axes](#number_of_axes)


## Overview

In AnyChart axes are used to control grids, axes labels, lines and tick marks.  
  
* To know how to operate with basic charts axes - please see: [Axis Basics](../Axes_and_Grids/Axis_Basics)
* To know what scale options are available - [Scale tutorial](../Axes_and_Grids/Scales)
* To learn how to create additional axes - [Additional axes](../Axes_and_Grids/Additional_Axes)
* To learn how to configure axes labels - [Axes Labels](../Axes_and_Grids/Axes_Labels_Formatting)
* To learn more about Date/Time Scale - [Date/Time Axes](../Axes_and_Grids/Date_Time_Axes)

In this section we will demonstrate only the differences of AnyStock axes and scales from basic charts' ones.

## Stock Axes features

Axes in AnyStocks are generally quite similar to the Basic ones, but the X-axis is slightly different:
 - X-axis is always in datetime format and shows the Data values
 - X-axis is always scrollable
 - It has background instead of stroke (axis line)
 - It cannot be moved to another place on a chart (always at the bottom)
 - It has a Helper Label feature
 - No drawFirstLabel, drawLastLabel
 - Tickmarks settings (ticks might be only inside of the axis)
 - No title
 - Only one X-axis for a plot (so the max number of X-axes on an AnyStock chart is equal to the number of the plots)

## Orientation 

While a lot of AnyStock Axes settings are the same as Basic charts', there is a difference in their orientation settings. Due to the specifics of AnyStock charts, the X-axis has to be at to the bottom of the chart. The Y-axes act as usual.

##Tickmarks

The ticks in AnyStocks are a little bit different too. As the X-axis is an area, the ticks are being placed inside of it. Let's enable both major (with {api:anychart.core.axes.StockDateTime#ticks}**.ticks()**{api} method) and minor (with {api:anychart.core.axes.StockDateTime#minorTicks}**.ticks()**{api} method) ticks: 

{sample}STOCK\_Axes\_01{sample}

Scroll the chart to see them all.

We can adjust the length of ticks on X-axis only by setting another height for the axis with the {api:anychart.core.axes.StockDateTime#height}**.height()**{api} method of the axis. Ticks themselves don't have this method. 

You can find how to work with the X-axis height in the (Axis Line)[#axis_line] part of the article.

## Labels

Labels of the X-axis has an additional feature: it is a helper label that "saves" the scrolled major label value. Just scroll the previous example and watch the scrolled labels.

That happens when the helperLabel is on (by default). You can disable it by passing false to the {api:anychart.core.axes.StockDateTime#showHelperLabel}**.showHelperLabel()**{api} method.

```
	// disabling the Helper Label
	chart.plot(0).xAxis().showHelperLabel(false);
```

{sample}STOCK\_Axes\_02{sample}

Finally, as our X-axis is an area, the labels are placed and might be moved only inside of this area. For example, let's put our labels (both major and minor) to the right of the ticks we have enabled before. We use {api:anychart.core.ui.Label#position}**.position(){api} and {api:anychart.core.ui.Label#anchor}**.anchor**(){api} to move them correctly.

```
	// moving the labels
    xAxis = chart.plot(0).xAxis();
	xAxis.labels().position('right').anchor('left_center');
	xAxis.minorLabels().position('right').anchor('left_center');
```

{sample}STOCK\_Axes\_03{sample}

## Axis Line

In AnyStock, the x-axis is not a line, but an area with the background and height. We can change these parameters using {api:anychart.core.axes.StockDateTime#background}**.background()**{api} and {api:anychart.core.axes.StockDateTime#height}**.height()**{api} methods. Let's apply use this methods:

```
// changing the background and the height of the axis
  xAxis.background('#CCFFFF');
  xAxis.height(40);
```

{sample}STOCK\_Axes\_04{sample}

## Number of axes

You can add as many Y-axes as you need, but there can be only one X-axis on one plot. You can have more than one plot on a stock chart with one x-axis in each.
