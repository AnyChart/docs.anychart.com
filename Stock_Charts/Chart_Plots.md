{:index 5}

# Chart Plots

## Overview

One of the distinctive features of AnyStock is its ability to place several chart plots in one stack in which all series are scrolled and hovered simultaneously.

The main purpose of creating several plots instead of one multi-axes plot is making the management of different Y-scales easier and data from the series more easy to read. Using plots helps you to watch the data points with the same X value simultaneously and be able to compare them.

Now, let's study how to use chart plots and make our work with AnyStock a bit easier.

## Add

First of all, we need to add plots to the chart and enable them. Let's create and enable three plots: two with column series and one with OHLC chart.

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
var thirdSeries = thirdPlot.column(columnMapping);
```

{sample :height 800}STOCK\_Plots\_01{sample}

So, we use {api:anychart.charts.Stock#plot}plot(){api} for creating a plot. Note that we should give each plot an unique index. The number of plots each chart has is unlimited.

Now we can manage the chart plots.

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

{sample :height 800}STOCK\_Plots\_02{sample}

One plot might contain an unlimited number of series, but still we recommend to split them into different plots if there are too many of them.

### Axes 

Working with axes in AnyStock chart plots is similar, but not completely identical to working with them in basic charts. Visit the [Stock Axes Tutorial](Axes) and [Stock Scales](Scales) to know more about this.

In AnyStock you can have axes attached to plots, not chart. While the X-axis is the only one for all plots, we can have different Y-axes. Furthermore, we can have an unlimited number of Y-axes for each plot. 

```
// create an additional axis
var extraYAxis = plot_line_ohlc.yAxis(1);
extraYAxis.orientation("right");
extraYAxis.scale(extraYScale);
```

{sample}STOCK\_Plots\_03{sample}

### Position

We can position plots wherever we want and make them of the size we need. This can be done using {api:anychart.core.stock.Plot#bounds}bounds(){api} or other methods such as {api:anychart.core.stock.Plot#width}width(){api}, {api:anychart.core.stock.Plot#height}height(){api}, {api:anychart.core.stock.Plot#top}top(){api}, etc. The whole list of these methods you can find {api:anychart.core.stock.Plot}here{api}. By default, each new plot will be placed under the existing ones. Let's now create a simple three-plot AnyStock chart and position two of them next to each other.

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

{sample}STOCK\_Plots\_04{sample}