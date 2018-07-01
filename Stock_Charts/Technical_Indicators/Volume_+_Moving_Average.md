# Volume + Moving Average

## Overview

A Volume + Moving Average indicator is used in charts and technical analysis. It refers to the average volume of a security, commodity, or index constructed in a period as short as a few minutes or as long as several years and showing trends for the latest interval.

Mathematical description of the indicator: [Volume + Moving Average Mathematical Description](Mathematical_Description#volume_+_moving_average).

## Adding indicator

Volume + MA indicator is added using {api:anychart.core.stock.Plot#volumeMa}volumeMa(){api} method. It requires a mapping with two fields: `"volume"` and `"close"` / `"value"`.

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

There are five parameters Volume + MA indicator has, one of them is necessary - the mapping.

The next two parameters, "maPeriod" and "maType", set the period and type of the Moving Average. The last two, "volumeSeriesType" and "maSeriesType", allow you to set the Volume and MA series types.

The following code sample demonstrates a Volume + MA indicator with parameters set as default:

```
var sma10 = plot.sma(mapping, 20, "sma", "stick", "line");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where Volume + MA indicators with different parameters and settings are added to different plots:

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