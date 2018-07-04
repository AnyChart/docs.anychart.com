# Awesome Oscillator

## Overview

The Awesome Oscillator (AO) was created by Bill Williams. The Awesome Oscillator is an indicator used to measure market momentum. AO calculates the difference between a 34 Period and 5 Period Simple Moving Average. The Simple Moving Averages that are used are not calculated using closing price but rather each bar's midpoints. AO is generally used to affirm trends or to anticipate possible reversals. 

Mathematical description: [Awesome Oscillator (AO) Mathematical Description](Mathematical_Description#awesome_oscillator).

## Adding indicator

Awesome Oscillator indicator is added using {api:anychart.core.stock.Plot#ao}ao(){api} method. It requires a mapping with two fields: `"high"` and `"low"`.

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create stock chart
var chart = anychart.stock();

// create the first plot on the chart
var plot_0 = chart.plot(0);

// create ohlc series
var ohlcSeries = plot_0.ohlc(mapping);

// create the second plot on the chart
var plot_1 = chart.plot(1);

// create an Awesome Oscillator indicator
var ao = plot_1.ao(mapping);
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_Awesome\_Oscillator\_01{sample}

## Indicator parameters

There are four parameters an Awesome Oscillator indicator has, one of them is necessary - the mapping. The second parameter and third parameters set perod, fourth - {api:anychart.enums.MovingAverageType}Moving Average Type{api}. The last parameter sets the series type. The following code sample demonstrates an Awesome Oscillator indicator with parameters set as default:

```
var ao = plot.ao(mapping, 5, 34, "sma", "stick");
```

The series type can be easily changed any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

Vizualization of an indicator depends on the type of a series you display it with. Here is a sample where Awesome Oscillator indicators with different parameters and settings are added to different plots:

```
// create and adjust an Awesome Oscillator indicator
var ao_1 = chart.plot(1).ao(mapping).series();
ao_1.risingStroke("#33ccff");
ao_1.fallingStroke("#ff33cc");

// create and adjust an Awesome Oscillator indicator
var ao_2 = chart.plot(2).ao(mapping, 15, 44, "sma", "area").series();
ao_2.risingStroke(null);
ao_2.fallingStroke(null);
ao_2.risingFill("#37474f");
ao_2.fallingFill("#90a4ae");
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_Awesome\_Oscillator\_02{sample}