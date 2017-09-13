# Relative Strength Index

## Overview

The Relative Strength Index (RSI) is a financial technical analysis momentum oscillator measuring the velocity and magnitude of directional price movement by comparing upward and downward close-to-close movements.

AnyChart Stock allows you to add RSI with desired period to any of your charts.

Mathematical description of the indicator: [The Relative Strength Index (RSI) Mathematical Description](Mathematical_Description).

## Adding indicator

RSI indicator is added using {api:anychart.core.stock.Plot#rsi}rsi(){api} method, it requires a mapping with value field in it:

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
var plot_0 = chart.plot(0);

// RSI is usually displayed on a separate plot
var plot_1 = chart.plot(1);

// create RSI indicator with period 14
var rsi14 = plot_1.rsi(mapping, 14).series();
rsi14.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_RSI\_1{sample}

## Indicator parameters

RSI indicator needs three parameters: mapping with value field in it, period and a type of series to be displayed as:

```
var rsi30 = plot.rsi(mapping, 30, "column");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where RSI with different parameters and settings is added to different plots:

```
// create RSI indicator with period 14 and shown as column on the second plot
rsi14 = plot_1.rsi(mapping, 14).series();
rsi14.stroke('#bf360c');

// create RSI indicator with period 30 and shown as column on the third plot
var rsi30 = plot_2.rsi(mapping, 30, "column").series();
rsi30.fill('#ff6d00');
```

Live sample:

{sample 825 :height 800}STOCK\_Technical\_Indicators\_RSI\_2{sample}