{:index 5}

# Chart Plots

## Overview

One of the distinctive features of AnyStock is its ability to place several chart plots in one stack in which all series are scrolled and hovered simultaneously.

The main purpose of creating several plots instead of one multi-axes plot is making the management of different Y-scales easier and data from the series more easy to read. Using plots helps you to watch the data points with the same X value simultaneously and be able to compare them.

## Adding

Use the {api:anychart.charts.Stock#plot}plot(){api} method of {api:anychart.charts.Stock}anychart.charts.Stock{api} chart to add plots to the chart which creates an instance of the {api:anychart.core.stock.Plot}anychart.core.stock.Plot{api} class. Plots are instantiated by index.

Here is a sample code to create three plots, two with column series and one with the OHLC.

```
// create stock chart
chart = anychart.stock();

// create first plot on the chart with column series
var plot_1 = chart.plot(0);
plot_1.column(mapping);

// create second plot on the chart
var plot_2 = chart.plot(1);

// create ohlc series on the second plot
plot_2.ohlc(ohlcMapping);

// create third plot
var plot_3 = chart.plot(2);
// create column series on the third plot
plot_3.column(columnMapping);
```

{sample :height 800}STOCK\_Plots\_01{sample}

## Configure

We can change a lot in plots appearance: series, their number, axes, colors, etc. Let's start with adjusting the series.

### Adding Series

[Series](Series/Overview) are added to the plot using appropriate methods. See the [supported series list](Series/Supported_Series) to learn what series can be added.

Here is a sample of a chart with several plots and series:

```
// create stock chart
chart = anychart.stock();

// create first plot on the chart with column series
var plot_1 = chart.plot(0);
plot_1.column(columnMapping);
plot_1.line(lineMapping);

// create second plot on the chart
var plot_2 = chart.plot(1);

// create ohlc series on the second plot
var secondSeries = plot_2.ohlc(ohlcMapping);
```

{sample :height 800}STOCK\_Plots\_02{sample}

### Axes 

Working with axes in AnyStock chart plots is similar, but not completely identical to working with them in basic charts. Visit the [Stock Axes Tutorial](Axes) and [Stock Scales](Scales) to know more about this.

In AnyStock axes are attached to plots, not achart. While the X-axis is the only one for all plots, each plot can have different Y axes. 

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
var plot_1 = chart.plot(0);
plot_1.bounds(0,0,"45%","45%");

// set the second plot position through width, height, top
var plot_2 = chart.plot(1);
plot_2.width("100%");
plot_2.height("45%");
plot_2.top("50%");

// set the third plot bounds
var plot_3 = chart.plot(2);
plot_3.bounds("55%", 0, "45%", "45%")
```

{sample}STOCK\_Plots\_04{sample}

### Title

Each plot can have a separate title, which is set and configured using the {api:anychart.core.stock.Plot#title}title(){api} method.

Here is a sample of a chart with three plots. Titles of the first two plots are enabled and configured, and the third one has default settings (no title):

{sample}STOCK\_Plots\_05{sample}

### Legend

Each plot can have a legend, see [Legend](Legend) article to learn more about the legen configuration.

### No Data Message

Each plot can have {api:anychart.core.stock.Plot#noData}noData{api} label configured, see [No Data Label](../Working_with_Data/No_Data_Label) to learn more.

## Disabling and Removing

If you want to disable plot temporarily use the {api:anychart.core.stock.Plot#enabled}enabled(){api} method, the series and settings will stay there once you enable plot again.

To remove plot with all its contents and settings use the `dispose()` method.

{sample}STOCK\_Plots\_06{sample}