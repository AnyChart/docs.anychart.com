# Momentum

## Overview

The Momentum indicator is a speed of movement indicator, that is designed to identify the speed (or strength) of a price movement. The momentum indicator compares the most recent closing price to a previous closing price and may be used as a trend-following oscillator (similar to the [Moving Average Convergence Divergence (MACD)](Moving_Average_Convergence_Divergence_\(MACD\))).

The Momentum indicator identifies when the price is moving upwards or downwards, and also by how much the price is moving upwards or downwards. When the momentum indicator is above zero, the price has upwards momentum, and when the momentum indicator is below zero the price has downwards momentum.

Find the mathematical description of the indicator on the [Momentum Mathematical Description](Mathematical_Description#momentum) page.

## Adding indicator

Momentum indicator is added through the {api:anychart.core.stock.Plot#momentum}momentum(){api} method. It requires a mapping with the `"value"` or `"close"` field (please note that if there are both in you data, `"value"` overrides `"close"`).

The following sample demonstrates the Momentum indicator applied to an OHLC series:

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create stock chart
var chart = anychart.stock();

// create plots on the chart
var plot_0 = chart.plot(0);
var plot_1 = chart.plot(1);

// create ohlc series
var ohlcSeries = plot_0.ohlc(mapping);
ohlcSeries.name("CSCO");

// create Momentum indicator
var momentum = plot_1.momentum(mapping, 10).series();
momentum.stroke("2 red");
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_Momentum\_01{sample}

## Indicator parameters

There are three parameters a Momentum indicator has, one of them is necessary - the mapping. Two other ones are the period and the series type. The series type can be easily changed any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method. The following code sample demonstrates a Momentum indicator with parameters set as default.

```
var momentum = plot.momentum(mapping, 14, "line");
```

## Visualization

Visualization of an indicator depends on series type. Here is a sample where Momentum with different parameters and settings is added to different plots:

```
// create and adjust the Momentum indicator with settings adjusted
var momentum_1 = plot_1.momentum(mapping, 10, "area").series();
momentum_1.stroke("0.5 gray");
momentum_1.fill("#ffd54f");

// create and adjust the Momentum indicator with settings adjusted
var momentum_2 = plot_2.momentum(mapping, 40, "column").series();
momentum_2.stroke("0.5 lightGray");
momentum_2.fill("#ff6d00");
```

{sample}STOCK\_Technical\_Indicators\_Momentum\_02{sample}