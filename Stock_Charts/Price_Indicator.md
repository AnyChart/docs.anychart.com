{:index 6.6}

# Price Indicator

## Overview

Price Indicator is an addition to [Crosshair](Crosshair) that allows to create a label on any axis to show price from a certain date, it may last price, current price or any other value.

## Enable

```
// enable price indicator for the first plot
var chart = anychart.stock();
var indicator = chart.plot(0).priceIndicator({value: "last-visible"});
```

{sample}STOCK\_Price\_Indicator\_01{sample}

## Settings
 
### Binding

There are three main things you need to set to make price indicatot work correctly:
- the [series and the value](#series_and_field) field in this series price indicator binds to,
- the [date it takes value](#source_value) from,
- the [axis it is shown on](#axis).

#### Series and Field

Two methods, the {api:anychart.core.axisMarkers.CurrentPriceIndicator#valueField}valueField(){api} and the {api:anychart.core.axisMarkers.CurrentPriceIndicator#series}series(){api} are used to define a series and a value field.

Here is an example where the price indicator is shown for two series and minimal settings are made:

```
// set the data
table = anychart.data.table();
table.addData([        
  ['2016-04-01', 18.23, 19.36, 18.18, 19.31, 1284],
  ['2016-04-02', 19.50, 19.89, 19.00, 19.29, 1384],
  ['2016-04-03', 19.13, 19.15, 18.43, 18.75, 1484],
  ['2016-04-06', 18.54, 18.76, 18.27, 18.76, 1484],
  ['2016-04-07', 18.76, 19.14, 18.63, 18.76, 1584]
]);
  
// map the data
mapping = table.mapAs({'open': 1, 'high': 2,'low': 3,'close':4, 'value': 5});

// create a chart
chart = anychart.stock();

// add two series
ohlcSeries = chart.plot(0).ohlc(mapping);
lineSeries = chart.plot(1).line(mapping);

// add indicator to OHLC series
var indicator1 = chart.plot(0).priceIndicator();
indicator1.series(ohlcSeries);
indicator1.valueField('high');

// add indicator to line series
var indicator2 = chart.plot(1).priceIndicator({'series': lineSeries});
```

There is a shorter way to set this, using object overload:

```
var indicator1 = chart.plot(0).priceIndicator({'series': ohlcSeries, valueField: 'high')
var indicator2 = chart.plot(1).priceIndicator({'series': lineSeries});
```

Here is a sample showcasing both ways:

{sample}STOCK\_Price\_Indicator\_02{sample}

#### Source Value

The parameter set by {api:anychart.core.axisMarkers.CurrentPriceIndicator#value}value(){api} defines which date price indicator bind to.

There are five options to the value, four of them come from {api:anychart.enums.PriceIndicatorDataSource}anychart.enums.PriceIndicatorDataSource{api}:

- `'series-start'` (default),
- `'series-end'`,
- `'first-visible'`,
- `'last-visible'`,
- any Date you set.

```
// enable price indicator for the first plot
var chart = anychart.stock();
var indicator = chart.plot(0).priceIndicator();
indicator.value('first-visible');
```

Here is a sample of a chart with three price indicators, each tracks the same series but the source of the value is different:

```
indicator1 = chart.plot(0).priceIndicator(0, {value: 'first-visible'});
indicator2 = chart.plot(0).priceIndicator(1, {value: 'series-end'});
indicator3 = chart.plot(0).priceIndicator(2, {value: '2005-11-13'});
```

{sample}STOCK\_Price\_Indicator\_03{sample}

#### Axis

If plot has several axis you can choose an axis where to show indicator, use the {api:anychart.core.axisMarkers.CurrentPriceIndicator#axis}axis(){api} method or define axis in initial object config:

```
// set axis using the method and axis index
indicator1 = chart.plot(0).priceIndicator(0);
indicator1.axis(0);

// set axis using object and link to axis
indicator2 = chart.plot(0).priceIndicator(1, {axis: chart.plot(0).yAxis(1)});
```

{sample}STOCK\_Price\_Indicator\_04{sample}

### Appearance

The following set of methods give provide you with ability to define how price indicator label and line looks like.

- {api:anychart.core.axisMarkers.CurrentPriceIndicator#label}label(){api} and {api:anychart.core.axisMarkers.CurrentPriceIndicator#stroke}stroke(){api} methods are basic settings if you want stroke and label always remain the same,
- {api:anychart.core.axisMarkers.CurrentPriceIndicator#fallingLabel}fallingLabel(){api} and {api:anychart.core.axisMarkers.CurrentPriceIndicator#fallingStroke}fallingStroke(){api} methods are used to define how label and line look like for falling values,
- {api:anychart.core.axisMarkers.CurrentPriceIndicator#risingLabel}risingLabel(){api} and {api:anychart.core.axisMarkers.CurrentPriceIndicator#risingStroke}risingStroke(){api} methods are used to define how label and line looke like for rising values,

```
var indicator = chart.plot(0).priceIndicator();
// set line settings
indicator.stroke("Black", 2, "2 2");
// configure label
indicator.label().background().fill("White");
indicator.label().fontColor("Black");
```

{sample}STOCK\_Price\_Indicator\_05{sample}