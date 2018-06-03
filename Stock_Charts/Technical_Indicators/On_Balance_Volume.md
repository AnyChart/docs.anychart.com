# On Balance Volume (OBV)

## Overview

On Balance Volume (OBV) measures buying and selling pressure as a cumulative indicator that adds volume on up days and subtracts volume on down days. OBV was developed by Joe Granville and introduced in his 1963 book, Granville's New Key to Stock Market Profits. It was one of the first indicators to measure positive and negative volume flow. Chartists can look for divergences between OBV and price to predict price movements or use OBV to confirm price trends.

Mathematical description of the indicator: [On Balance Volume Mathematical Description](Mathematical_Description#on_balance_volume).

## Adding indicator

On Balance Volume indicator is added using {api:anychart.core.stock.Plot#obv}obv(){api} method. It requires a mapping with five fields: `"open"`, `"high"`, `"low"`, `"close"`, and `"volume"`.

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

// create an On Balance Volume indicator
var obv = plot_1.obv(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_On\_Balance\_Volume\_1{sample}

## Indicator parameters

There are two parameters an On Balance Volume indicator has, one of them is necessary – the mapping. The second parameter sets the series type. The following code sample demonstrates an OBV indicator with parameters set as default:

```
var obv = plot.obv(mapping, "line");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where On Balance Volume indicators with with different parameters and settings are added to different plots:

```
var obv_1 = plot_1.obv(mapping, "area").series();
obv_1.stroke("0.5 gray");
obv_1.fill("#ffd54f");

// create and adjust an On Balance Volume indicator
var obv_2 = plot_2.obv(mapping, "stick").series();
obv_2.stroke("2 #ff6d00");
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_On\_Balance\_Volume\_2{sample}