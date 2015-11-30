{:index 6}

#Chart Plots

* [Overview](#overview)
* [Add](#add)
* [Edit](#edit)
 * [Series](#series)
 * [Axes](#axes)
 * [Position](#position)
 * [DateTime Highlighter](#datetime_highlighter)

## Overview

One of the distinctive features of AnyStock is its ability to place several chart plots in one stack in which all series are scrolled and hovered simultaneously.


The main purpose of creating several plots instead of one multi-axes plot is making the management of different Y-scales easier and data from the series more easy to read. Using plots helps you to watch the data points with the same X value simultaneously and be able to compare them.


Now, let's study how to use chart plots and make our work with stocks a bit easier.

## Add

First of all, we need to add plots to the chart and enable them. Let's create and enable three plots: one with column series, second one with OHLC chart and third with line series.

```
// create stock chart
chart = anychart.stock();

// create first plot on the chart with column series
var firstPlot = chart.plot(0);
firstPlot.column(mapping);

// create second plot on the chart
var secondPlot = chart.plot(1);

// create ohlc series on the second plot
var secondSeries = secondPlot.ohlc(ohlcMapping);

// create third plot
var thirdPlot = chart.plot(2);
// create column series on the third plot
var thirdSeries = thirdPlot.line(lineMapping);
```

{sample :width 690 :height 500 }STOCK\_Plots\_01{sample}

So, we use {api:anychart.charts.Stock#plot}**.plot()**{api} for creating the plot. Note that we should give each plot an unique index. The number of plots each chart has is unlimited.

Now we can manage the stock chart plots.

## Edit

We can change a lot in plots appearance: series, their number, axes, colors, etc. Let's start with adjusting the series.

### Series

Let's add one more series to one of the plots. This would look like the following:

```
// create stock chart
chart = anychart.stock();

// create first plot on the chart with column series
var firstPlot = chart.plot(0);
firstPlot.column(columnMapping);
firstPlot.line(lineMapping);

// create second plot on the chart
var secondPlot = chart.plot(1);

// create ohlc series on the second plot
var secondSeries = secondPlot.ohlc(ohlcMapping);
```

{sample :width 690 :height 500 }STOCK\_Plots\_02{sample}

One plot might contain an unlimited number of series, but still we recommend to split them into different plots if there are too many of them.


### Axes 

As we have noticed before, we can have different axes in one chart using different plots. While the X-axis is the only one for all plots, we can have different Y-axes. Furthermore, we can have an unlimited number of Y-axes for each plot.

```
	// create an additional axis
	var yAxis1 = plot_line_ohlc.yAxis(1);
	yAxis1.orientation("left");
```
{sample :width 690 :height 500 }STOCK\_Plots\_03{sample}

Working with axes in stock plots is the same as working with them in basic charts. Visit the [Axes tutorial](../Axes_and_Grids/Axis_Basics) to know more about the axes.


### Position

We can position plots wherever we want and make them of the size we need. This can be done using {api:anychart.core.stock.Plot#bounds}**.bounds()**{api} or other methods such as {api:anychart.core.stock.Plot#width}**.width**{api}, {api:anychart.core.stock.Plot#height}**.height**{api}, {api:anychart.core.stock.Plot#top}**.top**{api}, etc. The whole list of these methods you can find {api:anychart.core.stock.Plot}here{api}. By default, each new plot will be placed under the existing ones. Let's now create a simple three-plot stock and position two of them next to each other.

```
	// set the first plot position through bounds
	var firstPlot = chart.plot(0);
	firstPlot.bounds(0,0,"45%","45%");

	// set the second plot position through width, height, top
	var secondPlot = chart.plot(1);
	secondPlot.width("100%");
	secondPlot.height("45%");
	secondPlot.top("50%");

	// set the third plot bounds
	var thirdPlot = chart.plot(2);
	thirdPlot.bounds("55%", 0, "45%", "45%")
```

{sample :width 690 :height 500 }STOCK\_Plots\_04{sample}


### DateTime Highlighter

DateTime Highlighter is a feature that is rather similar to [Crosshair feature](../Axes_and_Grids/Crosshair) and helps you not to get lost in great amount of data. In case of having several plots on a stock chart, it shows you all values of the same time point you hover on one of the plots, which is quite comfortable especially if you've got loads of data points. Crosshair is enabled by default; to somehow change it put an object as a parameter to the {api:anychart.core.stock.Plot#dateTimeHighlighter}**.dateTimeHighlighter()**{api} method or "false" value to disable it. Note that this method belongs not to a chart but to a plot. Now let's create a sample with an adjusted highlighter.

```
	// disable the highlighter on the first plot
	firstPlot.dateTimeHighlighter(false);

	// make the second plot highlighter of green color
	secondPlot.dateTimeHighlighter({color:"green"});

	// adjust the highlighter of the third plot  
	thirdPlot.dateTimeHighlighter("#F44336", 1.5, "6 2", "round");
```

{sample :width 690 :height 500 }STOCK\_Plots\_05{sample}