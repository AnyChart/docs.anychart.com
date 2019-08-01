# Envelope (ENV)
## Overview

Envelopes are technical indicators that are typically plotted over a price chart with upper and lower bounds.Envelopes are commonly used to help traders and investors identify extreme overbought and oversold conditions as well as trading ranges.

With AnyStock Envelope indicator you can create both SMA and EMA envelopes and choose the colors for lower and upper level.

Mathematical description of the indicator: [ENV Mathematical Description](Mathematical_Description#envelope).

## Adding Indicator

The ENV indicator is added using the {api:anychart.core.stock.Plot#env}env(){api} method. It requires a mapping with one field: `"value"` (or `"close"`):

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create a stock chart
var chart = anychart.stock();

// create the first plot on the chart
var plot_0 = chart.plot(0);

// create an ohlc series
var ohlcSeries = plot_0.ohlc(mapping);
ohlcSeries.name('CSCO');

// create the second plot on the chart
var plot_1 = chart.plot(1);

// create an ENV indicator
var env = plot_1.env(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_ENV\_1{sample}

## Indicator parameters

There are 6 parameters the ENV indicator has, one of them is necessary - the mapping.

Then you can set the deviation, the period, the smoothing type and series types.

The following code sample demonstrates a ENV indicator with parameters set as default:

```
var env = plot.env(mapping, 20, 10, "ema", "line", "line");
```

## Visualization

Vizualization of an indicator depends on the type of series you display it with. Here is a sample where Envelope indicators with different parameters and settings are added to different plots:

```
// create and adjust an ENV indicator
var env_1 = plot_1.env(mapping);

// create and adjust an ENV indicator
var env_2 = plot_2.env(mapping);
env_2.upperSeries().stroke("0.5 gray");
env_2.lowerSeries().stroke("0.5 lightGray");
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_ENV\_2{sample}