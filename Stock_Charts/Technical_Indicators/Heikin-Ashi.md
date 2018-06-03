# Heikin-Ashi

## Overview

A Simple Moving Average (SMA) is the unweighted mean of the previous n data points. In technical analysis there are various popular values for n, like 10 days, 40 days, or 200 days. The period selected depends on the kind of movement one is concentrating on, such as short, intermediate, or long term. In any case moving average levels are interpreted as support in a rising market, or resistance in a falling market.

AnyChart Stock allows you to add SMA with desired period to any of your charts.

Mathematical description of the indicator: [Simple moving average (SMA) Mathematical Description](Mathematical_Description#heikin-ashi).

## Adding indicator

SMA indicator is added using {api:anychart.core.stock.Plot#sma}sma(){api} method, it requires a mapping with the `"value"` field in it:

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

// create a Heikin-Ashi indicator
var ha = plot_1.ha(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_HA\_1{sample}

## Indicator parameters

SMA indicator needs three parameters: mapping with the `"value"` field in it, period and a type of series to be displayed as:

```
var sma10 = plot.sma(mapping, 10, "column");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where SMA with different parameters and settings is added to different plots:

```
// create and adjust a Heikin-Ashi indicator
var ha_1 = plot_1.ha(mapping).series();
ha_1.risingFill("#33ccff");
ha_1.fallingFill("#ff33cc");
ha_1.risingStroke(null);
ha_1.fallingStroke(null);

// create and adjust a Heikin-Ashi indicator
var ha_2 = plot_2.ha(mapping, "ohlc").series();
ha_2.risingStroke("#37474f");
ha_2.fallingStroke("#90a4ae");
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_HA\_2{sample}