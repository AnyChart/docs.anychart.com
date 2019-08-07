# Ichimoku Cloud (IKH)
## Overview

The Ichimoku Cloud (IKH) is composed of five lines or calculations, two of which compose a cloud where the difference between the two lines is shaded in. It is a collection of technical indicators that show support and resistance levels, as well as momentum and trend direction. IKH does this by taking multiple averages and plotting them on the chart. It also uses these figures to compute a "cloud" which attempts to forecast where the price may find support or resistance in the future.

The Ichimoku cloud was developed by Goichi Hosoda, a Japanese journalist, and published in the late 1960s. It provides more data points than the standard candlestick chart. While it seems complicated at first glance, those familiar with how to read the charts often find it easy to understand with well-defined trading signals.

Mathematical description of the indicator: [Ichimoku Cloud Mathematical Description](Mathematical_Description#ichimoku_cloud).

## Adding Indicator

The IKH indicator is added using the {api:anychart.core.stock.Plot#ikh}ikh(){api} method. It requires a mapping with 3 fields: `"high"`, `"low"`, and `"close"`:

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create a stock chart
var chart = anychart.stock();

// create the first plot on the chart
var plot = chart.plot(0);

// create an ohlc series
var ohlcSeries = plot.ohlc(mapping);
ohlcSeries.name('CSCO');

// create an IKH indicator
var ikh = plot.ikh(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_IKH\_1{sample}

## Indicator Parameters

There are eight parameters the IKH indicator has, one of them is necessary - the mapping.

Then you can set the base period, the conversion period, the leading period, and series types.

The following code sample demonstrates a IKH indicator with parameters set as default:

```
var ikh = plot.ikh(mapping, 9, 26, 52, "line", "line", "range-area", "line");
```

## Visualization

Vizualization of an indicator depends on the type of series you display it with. Here is a sample where Ichimoky Cloud indicator settings are configured:

```
// create and adjust an IKH indicator
var ikh = plot.ikh(mapping);
ikh.conversionSeries().stroke("2 Red");
ikh.leadingSeries().fill("Red 0.5");
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_IKH\_2{sample}