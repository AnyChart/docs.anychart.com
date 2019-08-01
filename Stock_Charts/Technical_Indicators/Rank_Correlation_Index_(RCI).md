# Rank Correlation Index (RCI)
## Overview

The Rank Correlation Index (RCI) uses a combination of price change data and time change data to identify potential changes in market sentiment, thereby exposing turning points. 

Mathematical description of the indicator: [RCI Mathematical Description](Mathematical_Description#rank_correlation_index).

## Adding Indicator

The RCI indicator is added using the {api:anychart.core.stock.Plot#rci}rci(){api} method. It requires a mapping with one field: `"value"` (or `"close"`):

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create a stock chart
var chart = anychart.stock();

// create the first plot on the chart
var plot_0 = chart.plot(0);

// create an ohlc series
var ohlcSeries = plot_0.ohlc(mapping);
ohlcSeries.name('CSCO');

// create the second plot on the chart
var plot_1 = chart.plot(1);

// create an RCI indicator
var rci = plot_1.rci(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_RCI\_1{sample}

## Indicator parameters

There are 4 parameters the RCI indicator has, one of them is necessary - the mapping.

Then you can set the the perio and the series types.

The following code sample demonstrates a RCI indicator with parameters set as default:

```
var rci = plot.rci(mapping, 12, "line");
```

## Visualization

Vizualization of an indicator depends on the type of series you display it with. Here is a sample where Rank Correlation Index indicators with different parameters and settings are added to different plots:

```
// create and adjust an RCI indicator
var rci_1 = plot_1.rci(mapping);

// create and adjust an RCI indicator
var rci_2 = plot_2.rci(mapping);
rci_2.series().stroke("1 red");
```

Live sample:

{sample :height 800}STOCK\_Technical\_Indicators\_RCI\_2{sample}