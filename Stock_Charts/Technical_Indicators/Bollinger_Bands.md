# Bollinger Bands

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Visualization using lines](#visualization_using_lines)
* [Visualization using ranges](#visualization_using_ranges)


## Overview

Bollinger Bands are a technical analysis tool invented by John Bollinger in the 1980s. Having evolved from the concept of trading bands, Bollinger Bands can be used to measure the highness or lowness of the price relative to previous trades.

AnyChart Stock allows you to add Bollinger Bands with desired period to any of your charts.

Mathematical description of the indicator: [Bollinger Bands](Mathematical_Description).

## Adding indicator

Bollinger Bands indicator is added using {api:anychart.core.stock.Plot#bbands}bbands(){api} method, it requires a mapping with value field in it:

```
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({'value': 4});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create Bollinger Bands indicators
var bbands = plot.bbands(mapping);
```

{sample}STOCK\_Technical\_Indicators\_BBands\_01{sample}


## Indicator parameters

Bollinger Bands indicator needs only the "mapping" parameter. Optional ones are: "period", "deviation", "up" and "down" series types.

```
var bbands = plot.bbands(mapping, 10, 3, "spline", "spline");
```

## Visualization using lines

Visualization of an indicator depends on the type of a series you display it with. Here is a sample where both Up and Down series of the Bollinger Bands indicator are colored:

```
// color the series
var bbandsUpSeries = bbands.upSeries();
bbandsUpSeries.stroke('#bf360c');
var bbandsDownSeries = bbands.downSeries();
bbandsDownSeries.stroke('#bf360c');
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_BBands\_02{sample}


## Visualization using ranges

Visualization of the Bollinger Bands indicator can be done with Range series - Range Area, Range SplineArea, etc. Let's use the Range SplineArea for the Bollinger Bands indicator visualization.

```
// create BBands indicators
var bbands = plot.bbands(mapping);

// Set period.
bbands.period(10);
```

{sample}STOCK\_Technical\_Indicators\_BBands\_03{sample}