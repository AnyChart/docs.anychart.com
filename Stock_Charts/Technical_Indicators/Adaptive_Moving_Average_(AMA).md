# Adaptive Moving Average

## Overview

An Adaptive Moving Average (AMA) is another indicator like SMA, MMA and EMA, but has more parameters. It changes its sensitivity due to the price fluctuations. The Adaptive Moving Average becomes more sensitive during periods when price is moving in a certain direction and becomes less sensitive to price movements when it become unstable.

AnyChart Stock allows you to add AMA with desired period to any of your charts.

Find the mathematical description of the indicator on the [Adaptive moving average (AMA) Mathematical Description](Mathematical_Description#ama) page.

## Adding indicator

AMA indicator is added through the {api:anychart.core.stock.Plot#ama}ama(){api} method. It requires a mapping with a value (data) field in it:

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs({'value': 4});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create AMA indicator
var ama = plot.ama(mapping).series();
ama.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_AMA\_01{sample}

## Indicator parameters

AMA indicator needs five parameters: mapping with value field in it (required), three periods: period, fast period and slow period; and a type of series to be displayed as.

```
var ama = plot.ama(mapping, 10, 5, 20, "column");
```

It is possible to change the series type any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

Visualization of an indicator depends on series type. Here is a sample where AMA with different parameters and settings is added to different plots:

```
// create first AMA indicator of default series type
var ama_1 = plot_0.ama(mapping, 10, 5, 20).series();
ama_1.stroke('#bf360c');

// create second AMA indicator of column series
var ama_2 = plot_1.ama(mapping, 30, 10, 50, "column").series();
ama_2.fill('#ff6d00');
```

{sample}STOCK\_Technical\_Indicators\_AMA\_02{sample}