{:index 6}

#Chart Plots

* [Overview](#overview)
* [Add](#add)
* [Edit](#edit)
 * [Series](#series)
 * [Axes](#axes)
 * [Position](#position)
 * [Crosshair](#crosshair)

## Overview

Sometimes you might need a group of charts showing how different parameters change in the same time, but for some reasons it's not comfortable to put those series all together on one chart (for example, if you need different Y-scales). In this case you can create a couple of plots on a chart and put the series into the plots one for each. 

The main purpose of creating plots is making the managing of different Y-scales easier. Using plots helps you to watch the data with the same X value simultaneously.

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

{sample}STOCK\_Plots\_01{sample}

So, we use {api}**.plot()**{api} for creating the plot. Note that we should give each plot an unique index. The number of plots each chart has is unlimited.

Now we can manage the stock chart plots.

## Edit

We can change a lot in plots appearance: series, its number, axes, colors, etc. Let's start with adjusting the series.

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

{sample}STOCK\_Plots\_02{sample}

One plot might contain an unlimited number of series, but still we recommend to split them into different plots if there are too many of them.


### Axes 

As we have noticed before, we can have different axes in one chart using different plots. While the X-axis is the only one for all plots, we can have different Y-axes. Furthermore, we can have an unlimited number of Y-axes for each plot.

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

{sample}STOCK\_Plots\_03{sample}

Working with axes in plots is the same as working with them in basic charts. Visit the [Axes tutorial](../Axes_and_Grids/Axis_Basics) to know more about the axes.


### Position


### Crosshair

you will be able to see all values at the same time point you hover on one of the plots

Смысл в том, чтобы просматривать данные, соответствующие одному иксу сразу на всех графиках (кроссхейр или как его там ползет по графикам)

Шкала Y есть у каждого, шкала X одна на чарт
Позиционировать их можно как угодно
На одном плоте можно сделать энное количество серий и иметь несколько Y осей