# Price Channels

## Overview

Keltner Channels are volatility-based envelopes set above and below an exponential moving average (EMA).

This indicator is similar to [Bollinger Bands](Bollinger_Bands), which uses the standard deviation to set the bands. Instead of using the standard deviation, Keltner Channels use the [Average True Range (ATR)](Average_True_Range) to set the channel distance. The channels are typically set two Average True Range values above and below the 20-day [EMA(Exponential_Moving_Average). The exponential moving average dictates  the direction, and the Average True Range sets the channel width. Keltner Channels are a trend following indicator used to identify reversals with channel breakouts and channel direction. Channels can also be used to identify overbought and oversold levels when the trend is flat.

Mathematical description of the indicator: [Keltner Channels Mathematical Description](Mathematical_Description#keltner_channels).

## Adding indicator

Keltner Channels indicator is added using {api:anychart.core.stock.Plot#keltnerChannels}keltnerChannels(){api} method. It requires a mapping with five fields: `"open"`, `"high"`, `"low"`, `"close"`, and `"value"`.

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

There are eight parameters a Keltner Channel indicator has, one of them is necessary – the mapping.

The "maPeriod" and "atrPeriod" parameters set the Moving Average period and Average True Range period. The "maType" parameter sets the soothing type, the next parameter is the multiplier, and the three last parameters allow you to set the series type of Moving Average, the upper series, and the lower series.

The following code sample demonstrates a Keltner Channels indicator with parameters set as default:

```
var priceChannels = plot.priceChannels(mapping, 20, "line", "line", "line");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where Keltner Channels indicators with with different parameters and settings are added to different plots:

```
// create and adjust a Price Channels indicator
var priceChannels_0 = plot_0.priceChannels(mapping, 10, "line", "line", "line");
priceChannels_0.lowerSeries().stroke("2 #00bfa5");
priceChannels_0.upperSeries().stroke("2 #dd2c00");
priceChannels_0.middleSeries().stroke("2 #ef6c00");
priceChannels_0.rangeSeries().fill("#ffd54f 0.2");

// create and adjust a Price Channels indicator
var priceChannels_1 = plot_1.priceChannels(mapping, 10, "stepLine", "stepLine", "stepLine");
priceChannels_1.lowerSeries().stroke("2 #00bfa5");
priceChannels_1.upperSeries().stroke("2 #dd2c00");
priceChannels_1.middleSeries().stroke("2 #64b5f6");
priceChannels_1.rangeSeries().fill(null);
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_Price\_Channels\_2{sample}