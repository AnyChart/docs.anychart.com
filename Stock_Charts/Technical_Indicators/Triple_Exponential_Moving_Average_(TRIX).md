# Triple Exponential Moving Average (TRIX)

## Overview

TRIX is a momentum oscillator that displays the percent rate of change of a triple exponentially smoothed moving average.

It was developed in the early 1980's by Jack Hutson, an editor for Technical Analysis of Stocks and Commodities magazine. With its triple smoothing, TRIX is designed to filter insignificant price movements. Chartists can use TRIX to generate signals similar to MACD. A signal line can be applied to look for signal line crossovers. A directional bias can be determined with the absolute level. Bullish and bearish divergences can be used to anticipate reversals.

Mathematical description of the indicator: [Triple Exponential Moving Average Mathematical Description](Mathematical_Description#triple_exponential_moving_average).

## Adding indicator

TRIX indicator is added using {api:anychart.core.stock.Plot#trix}trix(){api} method. Tt requires a mapping with one field: `"close"` or `"value"`.

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create stock chart
var chart = anychart.stock();

// create the first plot on the chart
var plot_0 = chart.plot(0);

// create ohlc series
var ohlcSeries = plot_0.ohlc(mapping);

// create the second plot on the chart
var plot_1 = chart.plot(1);

// create a TRIX indicator
var trix = plot_1.trix(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_TRIX\_1{sample}

## Indicator parameters

There are seven parameters a TRIX Channel indicator has, one of them is necessary – the mapping.

The next two parameters, "period" and "signalPeriod", set the TRIX and signal periods. The "maType" and "signalMaType" parameters set the soothing types of the indicator and the signal. Finally, the last two allow you to set the seires type of both the indicator and the signal.

The following code sample demonstrates a TRIX indicator with parameters set as default:


```
var trix = plot.trix(mapping, 15, 9, "ema", "ema", "line", "line");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where TRIX indicators with different parameters and settings are added to different plots:

```
// create and adjust a TRIX indicator
var trix_1 = plot_1.trix(mapping, 20, 5, "ema", "ema", "line", "stick");
trix_1.trixSeries().stroke("1.5 #00838f");
//trix_1.trixSeries().fill("#00838f 0.4");
trix_1.signalSeries().stroke("1.5 #00838f");

// create and adjust a TRIX indicator
var trix_2 = plot_2.trix(mapping, 20, 5, "sma", "sma", "line", "stick");
trix_2.trixSeries().stroke("1.5 #455a64");
//trix_2.trixSeries().fill("#455a64 0.4");
trix_2.signalSeries().stroke("1.5 #455a64");
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_TRIX\_2{sample}