# Volume + Moving Average

## Overview

A Simple Moving Average (SMA) is the unweighted mean of the previous n data points. In technical analysis there are various popular values for n, like 10 days, 40 days, or 200 days. The period selected depends on the kind of movement one is concentrating on, such as short, intermediate, or long term. In any case moving average levels are interpreted as support in a rising market, or resistance in a falling market.

AnyChart Stock allows you to add SMA with desired period to any of your charts.

Mathematical description of the indicator: [Simple moving average (SMA) Mathematical Description](Mathematical_Description).

## Adding indicator

SMA indicator is added using {api:anychart.core.stock.Plot#sma}sma(){api} method, it requires a mapping with the `"value"` field in it:

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4, "volume": 5});

// create stock chart
var chart = anychart.stock();

// create the first plot on the chart
var plot_0 = chart.plot(0);

// create ohlc series
var ohlcSeries = plot_0.ohlc(mapping);

// create the second plot on the chart
var plot_1 = chart.plot(1);

// create a Volume + MA indicator
var volumeMa = plot_1.volumeMa(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_Volume\_MA\_1{sample}

## Indicator parameters

SMA indicator needs three parameters: mapping with the `"value"` field in it, period and a type of series to be displayed as:

```
var sma10 = plot.sma(mapping, 10, "column");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where SMA with different parameters and settings is added to different plots:

```
// create and adjust a Volume + MA indicator
var volumeMa_1 = plot_1.volumeMa(mapping, 10, "sma", "area", "stepLine");
volumeMa_1.volumeSeries().stroke(null);
volumeMa_1.volumeSeries().fill("#00838f 0.4");
volumeMa_1.maSeries().stroke("1.5 #00838f");

// create and adjust a Volume + MA indicator
var volumeMa_2 = plot_2.volumeMa(mapping, 10, "ema", "area", "stepLine");
volumeMa_2.volumeSeries().stroke(null);
volumeMa_2.volumeSeries().fill("#455a64 0.4");
volumeMa_2.maSeries().stroke("1.5 #455a64");
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_Volume\_MA\_2{sample}