# Moving Average Convergence/Divergence

## Overview

MACD, which stands for Moving Average Convergence / Divergence, is a technical analysis indicator created by Gerald Appel in the 1960s. It shows the difference between a fast and slow exponential moving average (EMA) of closing prices.

AnyChart Stock allows you to add MACD with desired fast, slow and signal periods settings to any of your charts.

Mathematical description of the indicator: [Moving Average Convergence/Divergence (MACD) Mathematical Description](Mathematical_Description).

## Adding indicator

MACD indicator is added using {api:anychart.core.stock.Plot#macd}macd(){api} method, it requires a mapping with the `"value"` field in it:

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

// MACD is usually displayed on a separate plot
var plot_1 = chart.plot(1);

// create MACD indicator with fast period 12, slow period 26 and signal period 9
var macd = plot_1.macd(mapping, 12, 26, 9);
// MACD consists of three series, MACD and signal are lines by default, histogram is a column
macd.macdSeries().stroke('#bf360c');
macd.signalSeries().stroke('#ff6d00');
macd.histogramSeries().fill('#ffe082');

```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_MACD\_1{sample}

## Indicator parameters

MACD indicator needs three parameters: mapping with the `"value"` field in it, fast period 12, slow period 26 and signal period 9, and a types of series to be displayed as:

```
var macd_default = plot_1.macd(mapping, 12, 26, 9);
var macd_all_lines = plot_2.macd(mapping, 14, 28, 10, "line", "line", "line");
```

## Visualization

Vizualization of an indicator depends on the type of series you display it with. Here is a sample where MACD with different parameters and settings is added to different plots:

```
// create MACD indicator fast period of 12, slow of 26 an signal of 9
// series types are default 
macd_default = plot_1.macd(mapping, 12, 26, 9);

// create MACD indicator fast period of 12, slow of 26 an signal of 9
// series types are all lines, even histogram
var macd_all_lines = plot_2.macd(mapping, 14, 28, 10, "line", "line", "line");
macd_all_lines.macdSeries().stroke('#bf360c');
macd_all_lines.signalSeries().stroke('#ff6d00');
macd_all_lines.histogramSeries().stroke('#ffe082');  
```

Live sample:

{sample :height 800}STOCK\_Technical\_Indicators\_MACD\_2{sample}