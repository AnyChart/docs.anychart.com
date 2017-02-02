# KDJ

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Visualization](#visualization)

## Overview

Stochastic oscillator is a momentum indicator used in technical analysis. Introduced by George Lane in the 1950s, it serves for comparing the closing price of a commodity to its price range over a given time span.

There are three subtypes of Stochastic Oscillator - Fast Stochastic, Slow Stochastic and Full Stochastic. AnyChart Stock allows adding only the Full Stochastic Indicator; however, you can use it to create the Fast and Slow subtypes as well.

Find the mathematical description of the indicator on the [Stochastic Oscillator Mathematical Description](Mathematical_Description#stochastic_oscillator) page.

## Adding indicator

Stochastic Oscillator indicator is added through the {api:anychart.core.stock.Plot#stochastic}stochastic(){api} method. It requires three data fields: High, Low and Close:

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs();
mapping.addField('high', 2, 'max');
mapping.addField('low', 3, 'min');
mapping.addField('close', 4, 'last');

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create stochastic indicator
var stochastic = plot.stochastic(mapping).series();
stochastic.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_Stochastic\_01{sample}

## Indicator parameters

Stochastic indicator has a lot of optional parameters: a period for the %K value, the moving average type of the indicator for the %K value, a period for the rounded %K value, the moving average type of the indicator for the %D value, a period for the %D value, and series types of the %K and %D values. None of them are necessary, as all have default values, but can be set. The following code sample will lead to the stochastic indicator which %K value is calculated with a period of 10 and through the EMA type and %D value is calculated with the period of 20 and through the SMA type.

```
var stochastic = plot.stochastic(mapping, 10, EMA, 10, SMA, 20);
```

The series type defining is not necessary, as it is possible to change the series type any time using the {api:anychart.core.stock.series.Column#seriesType}seriesType(){api} method.


## Visualization

Stochastic indicator visualization can be adjusted the same way as the others. It depends on the chosen series type. The sample below demonstrates two plots with KDJ indicators with different parameters and visualisation settings.

```
// create first stochastic indicator of default series type
var stochastic_1 = plot_0.stochastic(mapping, 10, EMA, 10, SMA, 20).series();
stochastic_1.stroke('#bf360c');

// create second stochastic indicator of spline series with default settings
var stochastic_2 = plot_1.stochastic(mapping, 14, EMA, 5, EMA, 5, spline, spline).series();
stochastic_2.fill('#ff6d00');
```

{sample}STOCK\_Technical\_Indicators\_Stochastic\_02{sample}
