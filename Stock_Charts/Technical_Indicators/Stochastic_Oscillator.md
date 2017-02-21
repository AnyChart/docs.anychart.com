# Stochastic

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Fast](#fast)
* [Slow](#slow)
* [Full](#full)
* [Visualization](#visualization)

## Overview

Stochastic oscillator is a momentum indicator, introduced by George Lane in the 1950s. It serves for comparing the closing price of a commodity to its price range over a given time span. The %K and %D lines are supposed to show whether it's better to buy or sell: the moments when whose two lines cross each other are counted as the best for money operations.

There are three modifications of Stochastic Oscillator - Fast Stochastic, Slow Stochastic and Full Stochastic. AnyChart Stock allows adding all of these types using the same method with different parameters.

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
mapping.addField("high", 2, "max");
mapping.addField("low", 3, "min");
mapping.addField("close", 4, "last");
mapping.addField("value", 5, "value");

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


The following code sample demonstrates a stochastic indicator with %K value with period of 10 and EMA smoothing and %D value with period of 20 and SMA smoothing.

```
var stochastic = plot.stochastic(mapping, 10, "EMA", 10, "SMA", 20);
stochastic_k = stochastic.kSeries();
stochastic_d = stochastic.dSeries();
```

Note that this indicator has several series and uses {api:anychart.core.stock.indicators.Stochastic#kSeries}kSeries(){api} and {api:anychart.core.stock.indicators.Stochastic#dSeries}dSeries(){api} for creating the appropriate series.

The series type defining is not necessary, as it is possible to change the series type any time using the {api:anychart.core.stock.series.Column#seriesType}seriesType(){api} method.

Stochastic Oscillator of Fast modification is created by default, so the same result is reached with setting only a mapping:

```
// set stochastic indicator of fast type
var stochastic = plot.stochastic(mapping);
```

### Fast

The following values need to be set to create the Fast Stochastic Oscillator indicator:о

```
// set stochastic indicator of fast type
var stochastic = plot.stochastic(mapping, 14, "SMA", 1, "SMA", 3);
```

{sample}STOCK\_Technical\_Indicators\_Stochastic\_02{sample}

### Slow

The following values need to be set to create the Slow Stochastic Oscillator indicator:

```
// set stochastic indicator of slow type
var stochastic = plot.stochastic(mapping, 14, "SMA", 3, "SMA", 3);
```

{sample}STOCK\_Technical\_Indicators\_Stochastic\_03{sample}

### Full

There are no default values for creating the Full Stochastic Oscillator. All periods used for calculation of the %K and the %D lines have to be integer values and the modifications should be EMA and SMA.

```
// set stochastic indicator of full type
var stochastic = plot.stochastic(mapping, 30, "EMA", 10, "SMA", 1);
```

{sample}STOCK\_Technical\_Indicators\_Stochastic\_04{sample}


## Visualization

Stochastic indicator visualization can be adjusted the same way as the others. It depends on the chosen series type. The sample below demonstrates two plots with stochastic indicators with different parameters and visualisation settings. Settings of the %K series are to be adjusted through the {api:anychart.core.stock.indicators.Stochastic#kSeries}kSeries(){api} method and the {api:anychart.core.stock.indicators.Stochastic#dSeries}dSeries(){api} is used for the %D series settings.

```
// create first stochastic indicator of default series type
var stochastic_1 = plot_0.stochastic(mapping, 10, "EMA", 10, "SMA", 20);
stochastic_1.kSeries().stroke("#bf360c");
stochastic_1.dSeries().stroke("#bf309c");

// create second stochastic indicator of column series
var stochastic_2 = plot_1.stochastic(mapping, 14, "EMA", 5, "EMA", 5, "spline", "spline");
stochastic_2.kSeries().stroke("#ff6d00");
stochastic_2.dSeries().stroke("#ff6d99");
```

{sample}STOCK\_Technical\_Indicators\_Stochastic\_05{sample}
