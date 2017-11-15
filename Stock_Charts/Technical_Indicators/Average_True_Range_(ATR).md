# Average True Range

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Visualization](#visualization)

## Overview

Developed by J. Welles Wilder, the Average True Range (ATR) is an indicator that measures volatility. As with most of his indicators, Wilder designed ATR with commodities and daily prices in mind. Commodities are frequently more volatile than stocks. They were are often subject to gaps and limit moves, which occur when a commodity opens up or down its maximum allowed move for the session. A volatility formula based only on the high-low range would fail to capture volatility from gap or limit moves. Wilder created Average True Range to capture this "missing" volatility. It is important to remember that ATR does not provide an indication of price direction, just volatility.

Mathematical description: [Average True Range (ATR) Mathematical Description](Mathematical_Description#average_true_range).

## Adding indicator

ATR indicator is added using the {api:anychart.core.stock.Plot#atr}atr(){api} method. It requires three data fields: High, Low and Close:

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs();
mapping.addField('open', 1, "first");
mapping.addField('high', 2, 'max');
mapping.addField('low', 3, 'min');
mapping.addField('close', 4, 'last');

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create ATR indicator
var atr = plot.atr(mapping).series();
atr.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_ATR\_01{sample}

## Indicator parameters

Average True Range indicator has three parameters: mapping, period, which has to be an integer value more than 1, and series type:

```
var atr = plot.atr(mapping, 10, "line");
```

## Visualization

Visualization of an indicator depends on series type. Here is a sample where ATR with different parameters and settings is added to different plots:

```
// create first AMA indicator of default series type
var atr_1 = plot_0.atr(mapping, 10).series();
atr_1.stroke('#bf360c');

// create second AMA indicator of column series
var atr_2 = plot_1.atr(mapping, 30, "column").series();
atr_2.fill('#ff6d00');
```

{sample}STOCK\_Technical\_Indicators\_ATR\_02{sample}
