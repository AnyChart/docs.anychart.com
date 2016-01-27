# Simple Moving Average

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Visualization](#visualization)

## Overview

An exponential moving average (EMA), sometimes also called an exponentially weighted moving average (EWMA), applies weighting factors which decrease exponentially. The weighting for each older data point decreases exponentially, giving much more importance to recent observations while still not discarding older observations entirely.

AnyChart Stock allows you to add EMA with desired period to any of your charts.

Mathematical description of the indicator please see at: [Mathematical Description of Technical Indicators](Mathematical_Description).

## Adding indicator

SMA indicator is added using {api:anychart.core.stock.Plot#sma}.sma(){api} method, it requires a mapping with value field in it:

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

// create SMA indicators with period 20
var sma20 = plot.sma(mapping, 20).series();
sma20.name('SMA(20)');
sma20.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_SMA\_1{sample}

## Indicator parameters

SMA indicator need three parameters: mapping with value field in it, period and a type of series to be displayed as:

```
var sma10 = plot.sma(mapping, 10, "column");
```

## Visualization

Indicator visualization depends on the series you chose to display it with, here is a sample where SMA with different parameters and settings is added to different plots:

```
// create SMA indicator with period 20 and show as line on the first plot
var sma20 = plot_0.sma(mapping, 20).series();
sma20.name('SMA(20)');
sma20.stroke('#bf360c');

// create SMA indicators with period 50 and shown as column on the second plot
var sma50 = plot_1.sma(mapping, 50, "column").series();
sma50.name('SMA(50)');
sma50.fill('#ff6d00');
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_SMA\_2{sample}