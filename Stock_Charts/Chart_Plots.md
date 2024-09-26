{:index 5}

# Chart Plots

## Overview

One of the distinctive features of AnyStock is its ability to place several chart plots in one stack in which all series are scrolled and hovered simultaneously.

The main purpose of creating several plots instead of one multi-axes plot is making the management of different Y-scales easier and data from the series more easy to read. Using plots helps you to watch the data points with the same X value simultaneously and be able to compare them.

When there are several plots on the chart end user can move them up and down, make one plot occupy the whole chart, and change the height of the plot by using [plot controls](#plot_controls).

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

We can change a lot in plots appearance: series, their number, axes, colors, etc. 

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

See the [Stock Axes Tutorial](Axes) and [Stock Scales](Scales) to know more about configuring axes and scales.

In AnyStock axes are attached to plots. While the X scale is the only one for all plots, each plot can have different Y axes and Y scales. 

```
// create an additional axis
var extraYAxis = plot_line_ohlc.yAxis(1);
extraYAxis.orientation("right");
extraYAxis.scale(extraYScale);
```

{sample}STOCK\_Plots\_03{sample}

### Position

We can position plots wherever we want and make them of the size we need. This can be done using {api:anychart.core.stock.Plot#height}height(){api}, {api:anychart.core.stock.Plot#minHeight}height(){api}, and {api:anychart.core.stock.Plot#maxHeight}maxHeight(){api}. When created, each new plot will be placed under existing ones. End user can change the position and size using [plot controls](#plot_controls)

### Title

Each plot can have a separate title, which is set and configured using the {api:anychart.core.stock.Plot#title}title(){api} method.

```
// create a stock chart
var chart = anychart.stock();

// create the first plot
var plot_1 = chart.plot(0);

// set the title of the first plot
plot_1.title("Rates");
```

Here is a sample of a chart with three plots. Titles of the first two plots are enabled and configured, and the third one has default settings (no title):

{sample :height 600}STOCK\_Plots\_05{sample}

### Legend

Each plot can have a legend, see [Legend](Legend) article to learn more about the legend configuration.

### No Data Message

Each plot can have {api:anychart.core.stock.Plot#noData}noData{api} label configured, see [No Data Label](../Working_with_Data/No_Data_Label) to learn more.

## Disabling and Removing

If you want to disable plot temporarily use the {api:anychart.core.stock.Plot#enabled}enabled(){api} method, the series and settings will stay there once you enable plot again.

To remove plot with all its contents and settings use the `dispose()` method.

{sample}STOCK\_Plots\_06{sample}

### Plot Controls

When there are several plots on the chart end user can move them up and down, make one plot occupy the whole chart, and change the height of the plot by using plot controls.

The following controls are available: 

- move a plot up,
- move a plot down,
- maximize - make a plot occupy the whole chart,
- minimize - reverse maximized plot to its original state,
- change the height of a plot

*NOTE:* all these controls work properly ONLY if AnyChart CSS and AnyChart Font are linked to the page:

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/fonts/css/anychart-font.min.css" />
```

You can change the look of the splitter control using the {api:anychart.charts.Stock#splitters}splitters(){api}:

```
chart.splitters().normal().stroke({
  color: 'red',
  dash: '3 4',
  thickness: 2,
  opacity: 0.9
});
chart.splitters().hovered().stroke({
  color: 'blue',
  dash: '3 4',
  thickness: 2,
  opacity: 0.9
});
chart.splitters().preview().fill({
  color: 'green',
  opacity: 0.5
});
```

However, changing Up/Down/Maximize buttons is available only via CSS overrides. For example to get rid of buttons you can do the following:

```
<style>
.anychart-plot-controls{visibility: hidden};
</style>
```

Here is a sample of a chart with three plots, hover the plots to see the control buttons in the right top corner of the plot, use highlighted splitter to change heights of plots.

{sample :height 800}STOCK\_Plots\_07{sample}
