# Price Channels

## Overview

Price Channels are lines set above and below the price of a security. The upper channel is set at the x-period high and the lower channel is set at the x-period low. For a 20-day Price Channel, the upper channel would equal the 20-day high and the lower channel would equal the 20-day low. The dotted centerline is the midpoint between the two channel lines. Price Channels can be used to identify upward thrusts that signal the start of an uptrend or downward plunges that signal the start of a downtrend. Price Channels can also be used to identify overbought or oversold levels within a bigger downtrend or uptrend.

Mathematical description of the indicator: [Price Channels Mathematical Description](Mathematical_Description#price_channels).

## Adding indicator

Price Channels indicator is added using {api:anychart.core.stock.Plot#priceChannels}priceChannels(){api} method. It requires a mapping with two fields: `"high"` and `"low"`.

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create stock chart
var chart = anychart.stock();

// create a plot on the chart
var plot = chart.plot();

// create ohlc series
var ohlcSeries = plot.ohlc(mapping);

// create a Price Channels indicator
var priceChannels = plot.priceChannels(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_Price\_Channels\_1{sample}

## Indicator parameters

There are five parameters a Price Channel indicator has, one of them is necessary - the mapping.

The second parameter sets the period, and the next three parameters allow you to set the series type of the middle and range series.

The following code sample demonstrates a Price Channels indicator with parameters set as default:

```
var priceChannels = plot.priceChannels(mapping, 20, "range-area", "line");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where Price Channels indicators with different parameters and settings are added to different plots:

```
// create and adjust a Price Channels indicator
var priceChannels_0 = plot_0.priceChannels(mapping, 10);
priceChannels_0.middleSeries().stroke("2 #ef6c00");
priceChannels_0.rangeSeries().fill("#ffd54f 0.2");

// create and adjust a Price Channels indicator
var priceChannels_1 = plot_1.priceChannels(mapping, 10, "step-line", "range-step-area");
priceChannels_1.middleSeries().stroke("2 #64b5f6");
priceChannels_1.rangeSeries().fill(null);
priceChannels_1.rangeSeries().highStroke("2 #00bfa5");
priceChannels_1.rangeSeries().lowStroke("2 #dd2c00");
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_Price\_Channels\_2{sample}