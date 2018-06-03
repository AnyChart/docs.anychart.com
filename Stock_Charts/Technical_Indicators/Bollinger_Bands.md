# Bollinger Bands

## Overview

Bollinger Bands are a technical analysis tool invented by John Bollinger in the 1980s. Having evolved from the concept of trading bands, Bollinger Bands can be used to measure the "highness" or "lowness" of the price relative to previous trades.

AnyChart Stock allows you to add Bollinger Bands with desired period to any of your charts.

Mathematical description of the indicator: [Bollinger Bands](Mathematical_Description#bollinger_bands).

## Adding indicator

Bollinger Bands indicator is added using {api:anychart.core.stock.Plot#bbands}bbands(){api} method. It requires a mapping with the `"value"` field in it:

```
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({'value': 4});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create Bollinger Bands indicator
var bbands = plot.bbands(mapping);
```

{sample}STOCK\_Technical\_Indicators\_BBands\_01{sample}

## Indicator parameters

Bollinger Bands indicator only required parameter is "mapping". Optional parameters are: "period", "deviation", "middle", "upper" and "lower" series types.

```
var bbands = plot.bbands(mapping, 10, 3, "spline", "spline", "spline");
```

## Visualization using lines

Visualization of an indicator depends on the type of a series you display it with. Here is a sample where all series of the Bollinger Bands indicator are colored:

```
var bbands = plot.bbands(mapping);
// color the series
bbands.upperSeries().stroke('#bf360c');
bbands.middleSeries().stroke('#ff6600');
bbands.lowerSeries().stroke('#bf360c');
bbands.rangeSeries().fill('#ffd54f 0.2');
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_BBands\_02{sample}

## Visualization using ranges

Visualization of the Bollinger Bands indicator can be done with Range series - [Range Area](../Series/Range_Area), [Range Spline Area](../Series/Range_Spline_Area), etc. 

The sample below uses Range Spline Area for the Bollinger Bands indicator visualization.

{sample}STOCK\_Technical\_Indicators\_BBands\_03{sample}