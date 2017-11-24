# Exponential Moving Average

## Overview

An exponential moving average (EMA), sometimes also called an exponentially weighted moving average (EWMA), applies weighting factors which decrease exponentially. The weighting for each older data point decreases exponentially, giving much more importance to recent observations while still not discarding older observations entirely.

AnyChart Stock allows you to add EMA with desired period to any of your charts.

Mathematical description of the indicator: [Exponential Moving Average (EMA) Mathematical Description](Mathematical_Description).

## Adding indicator

EMA indicator is added using {api:anychart.core.stock.Plot#ema}ema(){api} method, it requires a mapping with the `"value"` field in it:

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs({'value': 4});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create EMA indicators with period 20
var ema20 = plot.sma(mapping, 20).series();
ema20.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_EMA\_1{sample}

## Indicator parameters

EMA indicator need three parameters: mapping with the `"value"` field in it, period and a type of series to be displayed as:

```
var ema10 = plot.ema(mapping, 10, "column");
```

## Visualization

Indicator visualization depends on the series you chose to display it with, here is a sample where EMA with different parameters and settings is added to different plots:

```
// create EMA indicator with period 20 and show as line on the first plot
var ema20 = plot_0.ema(mapping, 20).series();
ema20.stroke('#bf360c');

// create EMA indicator with period 50 and show as column on the second plot
var ema50 = plot_1.ema(mapping, 50, "column").series();
ema50.fill('#ff6d00');
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_EMA\_2{sample}