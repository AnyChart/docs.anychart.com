# Stochastic

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Fast](#fast)
* [Slow](#slow)
* [Full](#full)
* [Visualization](#visualization)

## Overview

A technical indicator is a calculation based on historic price, volume, or open interest information that aims to forecast financial market direction. Technical indicators are fundamental part of technical analysis and are typically plotted as a chart pattern to try to predict the market trend. Indicators generally overlay on price chart data to indicate where the price is going, or whether the price is in an "overbought" condition or an "oversold" condition. Stochastic oscillator is a momentum indicator, introduced by George Lane in the 1950s. It serves for comparing the closing price of a commodity to its price range over a given time span. The %K and %D lines 

There are three subtypes of Stochastic Oscillator - Fast Stochastic, Slow Stochastic and Full Stochastic. AnyChart Stock allows adding all of these types using the same method with different parameters.

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
mapping.addField("open", 1, "first");
mapping.addField('high', 2, 'max');
mapping.addField('low', 3, 'min');
mapping.addField('close', 4, 'last');

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create stochastic indicator
var stochastic = plot.stochastic(mapping, 10, "EMA", 10, "SMA", 20);
stochastic_k = stochastic.kSeries();
stochastic_k.stroke("#bf360c");
stochastic_d = stochastic.dSeries();
stochastic_d.stroke("#ff6d00");
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_Stochastic\_01{sample}

## Indicator parameters

Stochastic indicator has a lot of optional parameters:  

<ul>
	<li>a period for the %K value<br>
	<li>the moving average type of the indicator for the %K value  <br>
	<li>a period for the smoothed %K value<br>
	<li>the moving average type of the indicator for the %D value<br>
	<li>a period for the %D value<br>
	<li>series type of the %K value<br>
	<li>series type of the %D value<br>
</ul>


None of them are necessary, as all have default values, but can be set. The following code sample will lead to the stochastic indicator which %K value is calculated with a period of 10 through the EMA type and %D value is calculated with the period of 20 and through the SMA type.

```
var stochastic = plot.stochastic(mapping, 10, EMA, 10, SMA, 20);
stochastic_k = stochastic.kSeries();
stochastic_d = stochastic.dSeries();
```

Note that this indicator has several series and uses {api:anychart.core.stock.indicators.Stochastic#kSeries}kSeries(){api} and {api:anychart.core.stock.indicators.Stochastic#dSeries}dSeries(){api} for creating the appropriate series.

The series type defining is not necessary, as it is possible to change the series type any time using the {api:anychart.core.stock.series.Column#seriesType}seriesType(){api} method.

Stochastic Oscillator of Fast subtype is created by default, so the same result will be reached with setting only a mapping:

```
// set stochastic indicator of fast type
var stochastic = plot.stochastic(mapping);
```

### Fast

The following values need to be set for the methods for creating the Stochastic Oscillator indicator of Fast subtype.

```
// set stochastic indicator of fast type
var stochastic = plot.stochastic(mapping, 14, "SMA", 1, "SMA", 3);
```

### Slow

These values are necessary to be set for the methods for creating the Stochastic Oscillator indicator of Slow subtype.

```
// set stochastic indicator of slow type
var stochastic = plot.stochastic(mapping, 14, SMA, 3, SMA, 3);
```

### Full

There are some default values need to be set for the methods for creating the Stochastic Oscillator indicator of Full subtype.

```
// set stochastic indicator of full type
var stochastic = plot.stochastic(mapping, [any integer value from 1], ["SMA" or "EMA"], [any integer value from 1], ["SMA" or "EMA"], [any integer value from 1]);
```


## Visualization

Stochastic indicator visualization can be adjusted the same way as the others. It depends on the chosen series type. The sample below demonstrates two plots with stochastic indicators with different parameters and visualisation settings.

```
// create first stochastic indicator of default series type
var stochastic_1 = plot_0.stochastic(mapping, 10, EMA, 10, SMA, 20).series();
stochastic_1.stroke('#bf360c');

// create second stochastic indicator of spline series with default settings
var stochastic_2 = plot_1.stochastic(mapping, 14, EMA, 5, EMA, 5, spline, spline).series();
stochastic_2.fill('#ff6d00');
```

{sample}STOCK\_Technical\_Indicators\_Stochastic\_02{sample}
