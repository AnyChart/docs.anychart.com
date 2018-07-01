# Stochastic

## Overview

Stochastic oscillator is a momentum indicator introduced by George Lane in the 1950s. Stochastic oscillator helps with comparing the closing price of a commodity to its price range over a given time span. The %K and %D lines  show whether it's better to buy or sell: the moments when those two lines cross each other are regarded as the best for money operations.

There are three most famous modifications of Stochastic Oscillator: Fast Stochastic, Slow Stochastic and Full Stochastic. AnyChart Stock allows adding all of these types using the same method with different parameters.

Mathematical description: [Stochastic Oscillator Mathematical Description](Mathematical_Description#stochastic_oscillator).

## Adding indicator

Stochastic Oscillator indicator is added using the {api:anychart.core.stock.Plot#stochastic}stochastic(){api} method. It requires three data fields: `"high"`, `"low"`, and `"close"`:

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

Here is a basic sample of stochastic oscillator indicator:

{sample}STOCK\_Technical\_Indicators\_Stochastic\_Oscillator\_01{sample}

## Indicator parameters

Stochastic oscillator indicator has a lot of optional parameters:  

- a period for the %K value
- the moving average type of the indicator for the %K value
- a period for the smoothed %K value
- the moving average type of the indicator for the %D value
- a period for the %D value
- series type of the %K value
- series type of the %D value

The following code sample creates a stochastic oscillator indicator with %K value with period of 10 EMA smoothing and %D value with period of 20 and SMA smoothing:

```
var stochastic = plot.stochastic(mapping, 10, "EMA", 10, "SMA", 20);
stochastic_k = stochastic.kSeries();
stochastic_d = stochastic.dSeries();
```

Stochastic oscillator has two series, use {api:anychart.core.stock.indicators.Stochastic#kSeries}kSeries(){api} and {api:anychart.core.stock.indicators.Stochastic#dSeries}dSeries(){api} methods to configure them.

The series are lines by default, it is possible to change the series type any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

### Fast

The following values need to be set to create the Fast Stochastic Oscillator indicator:

```
// create fast stochastic oscillator indicator 
var stochastic = plot.stochastic(mapping, 14, "SMA", 1, "SMA", 3);
```

Fast Stochastic Oscillator is created by default, so the same happens when you set only a mapping:

```
// create fast stochastic oscillator indicator of fast type
var stochastic = plot.stochastic(mapping);
```

{sample}STOCK\_Technical\_Indicators\_Stochastic\_Oscillator\_02{sample}

### Slow

The following values need to be set to create the Slow Stochastic Oscillator indicator:

```
// create stochastic indicator of slow type
var stochastic = plot.stochastic(mapping, 14, "SMA", 3, "SMA", 3);
```

{sample}STOCK\_Technical\_Indicators\_Stochastic\_Oscillator\_03{sample}

### Full

There are no default values for creating the Full Stochastic Oscillator. All periods used for calculation of the %K and the %D lines have to be integer values and the modifications should be EMA and SMA.

```
// create stochastic oscillator indicator of full type
var stochastic = plot.stochastic(mapping, 30, "EMA", 10, "SMA", 1);
```

{sample}STOCK\_Technical\_Indicators\_Stochastic\_Oscillator\_04{sample}

## Visualization

Stochastic Oscillator indicator visualization adjustment depends on the chosen series type. The sample below demonstrates two plots with stochastic indicators with different parameters and visualisation settings. Settings of the %K series are adjusted using the {api:anychart.core.stock.indicators.Stochastic#kSeries}kSeries(){api} method and the {api:anychart.core.stock.indicators.Stochastic#dSeries}dSeries(){api} is used for the %D series settings.

```
// create first stochastic oscillator indicator of default series type
var stochastic_1 = plot_0.stochastic(mapping, 10, "EMA", 10, "SMA", 20);
stochastic_1.kSeries().stroke("#bf360c");
stochastic_1.dSeries().stroke("#bf309c");

// create second stochastic oscillator indicator of column series
var stochastic_2 = plot_1.stochastic(mapping, 14, "EMA", 5, "EMA", 5, "spline", "spline");
stochastic_2.kSeries().stroke("#ff6d00");
stochastic_2.dSeries().stroke("#ff6d99");
```

{sample}STOCK\_Technical\_Indicators\_Stochastic\_Oscillator\_05{sample}