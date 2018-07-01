# Simple Moving Average

## Overview

A Simple Moving Average (SMA) is the unweighted mean of the previous n data points. In technical analysis there are various popular values for n, like 10 days, 40 days, or 200 days. The period selected depends on the kind of movement one is concentrating on, such as short, intermediate, or long term. In any case moving average levels are interpreted as support in a rising market, or resistance in a falling market.

AnyChart Stock allows you to add SMA with desired period to any of your charts.

Mathematical description of the indicator: [Simple moving average (SMA) Mathematical Description](Mathematical_Description).

## Adding indicator

SMA indicator is added using {api:anychart.core.stock.Plot#sma}sma(){api} method, it requires a mapping with the `"value"` field in it:

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

// create SMA indicators with period 20
var sma20 = plot.sma(mapping, 20).series();
sma20.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_SMA\_1{sample}

## Indicator parameters

SMA indicator needs three parameters: mapping with the `"value"` field in it, period and a type of series to be displayed as:

```
var sma10 = plot.sma(mapping, 10, "column");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where SMA with different parameters and settings is added to different plots:

```
// create SMA indicator with period 20 and show as line on the first plot
var sma20 = plot_0.sma(mapping, 20).series();
sma20.stroke('#bf360c');

// create SMA indicator with period 50 and show as column on the second plot
var sma50 = plot_1.sma(mapping, 50, "column").series();
sma50.fill('#ff6d00');
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_SMA\_2{sample}