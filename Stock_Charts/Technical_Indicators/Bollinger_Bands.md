# Bollinger Bands (BBands)

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
 * [Preparing the data](#preparing_the_data)
 * [Indicator Declaration](#indicator_declaration)
* [Indicator parameters](#indicator_parameters)
* [Visualization using lines](#visualization_using_lines)
* [Visualization using ranges](#visualization_using_ranges)


## Overview

Bollinger Bands (BBands) are a technical analysis tool invented by John Bollinger in the 1980s. Having evolved from the concept of trading bands, Bollinger Bands can be used to measure the highness or lowness of the price relative to previous trades.

AnyChart Stock allows you to add BBands with desired period to any of your charts.

Mathematical description of the indicator: [Bollinger Bands (BBands)](Mathematical_Description).

## Adding indicator

To add any indicator to the chart, you need to create the data set and map it properly.

### Preparing the data 

The data set for the BBands indicator needs those fields which are necessary for the series you plan to use - for example, "value" is necessary to set the Line series, but the OHLC and Candlestick Chart need four values ("open", "high", "low" and "close"). 

```
// map loaded data for the ohlc series
var mapping = dataTable.mapAs({
    'open': 1,
    'high': 2,
    'low': 3,
    'close': 4,
    'value': {column: 4, type: 'close'}
});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);
```

### Indicator Declaration

The {api:anychart.core.stock.Plot#bbands}bbands(){api} method will create a BBands indicator:

```
// create BBands indicators
var bbands = plot.bbands(mapping);
```

{sample}STOCK\_Technical\_Indicators\_BBands\_01{sample}


## Indicator parameters

BBands indicator requires an only parameter: the mapping. Though, there are four parameters else: period, deviation, up and down series types, which hold the default values when are not specified.

```
var bbands = plot.bbands(mapping, 10, 3, "spline", "spline");
```

## Visualization

Visualization of an indicator depends on the type of a series you display it with. Here is a sample where both Up and Down series of the BBands indicator are colored:

```
// color the series
var bbandsUpSeries = bbands.upSeries();
bbandsUpSeries.stroke('#bf360c');
var bbandsDownSeries = bbands.downSeries();
bbandsDownSeries.stroke('#bf360c');
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_BBands\_02{sample}