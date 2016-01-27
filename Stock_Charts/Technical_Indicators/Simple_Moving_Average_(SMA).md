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

SMA indicator is added using {api:anychart.core.stock.Plot#sma}.sma(){api} method, it requires

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

## Indicator parameters

## Visualization
