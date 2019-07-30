# Aroon

## Overview

The Psychological Line (PSY) is based on the presumption that people will resist paying more for a share than others, unless of course the share continues to move up. Conversely, people resist selling a share for less than the price others have been getting for it, except if the price continues to decline. Finally, people who purchase the stock at the top of a trading range will tend to wait until the price comes back before they get out.

Mathematical description of the indicator: [PSY Mathematical Description](Mathematical_Description#psychological_line).

## Adding Indicator

The PSY indicator is added using {api:anychart.core.stock.Plot#psy}psy(){api} method. It requires a mapping with four fields: "`open`", `"high"`, `"low"`, and `"close"`:

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4, "value": 3});

// create a stock chart
var chart = anychart.stock();

// create the first plot on the chart
var plot_0 = chart.plot(0);

// create an ohlc series
var ohlcSeries = plot_0.ohlc(mapping);
ohlcSeries.name('CSCO');

// create the second plot on the chart
var plot_1 = chart.plot(1);

// create a PSY indicator
var psy = plot_1.psy(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_PSY\_1{sample}

## Indicator parameters

There are three parameters the PSY indicator has, one of them is necessary - the mapping.

The second parameter sets the period, and the third one allows you to set the series types.

The following code sample demonstrates a PSY indicator with parameters set as default:

```
var psy = plot.psy(mapping, 20, "line");
```

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where Price Channels indicators with different parameters and settings are added to different plots:

```
// create and adjust a PSY indicator
var psy_1 = chart.plot(1).psy(mapping, 15, "area").series();
psy_1.stroke("0.5 gray");
psy_1.fill("#ffd54f");

// create and adjust a PSY indicator
var psy_2 = chart.plot(2).psy(mapping, 25, "column").series();
psy_2.stroke("0.5 lightGray");
psy_2.fill("#ff6d00");   
```

Live sample:

{sample :height 800}STOCK\_Technical\_Indicators\_PSY\_2{sample}