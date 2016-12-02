# BBands %B

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
 * [Preparing the data](#preparing_the_data)
 * [Indicator Declaration](#indicator_declaration)
* [Indicator parameters](#indicator_parameters)
* [Visualization using lines](#visualization_using_lines)
* [Visualization using ranges](#visualization_using_ranges)


## Overview

BBands %B is one of two indicators derived from [Bollinger Bands](Bollinger_Bands), according to the creator of those indicators, John Bollinger. The other indicator is [Bollinger Band Width](BBands_Width).

%B quantifies a security's price relative to the upper and lower Bollinger Band. There are six basic relationship levels:

- %B equals 1 when price is at the upper band
- %B equals 0 when price is at the lower band
- %B is above 1 when price is above the upper band
- %B is below 0 when price is below the lower band
- %B is above .50 when price is above the middle band (SMA)
- %B is below .50 when price is below the middle band (SMA)

Mathematical description of the indicator please see at: [Mathematical Description of BBands %B](Mathematical_Description)


## Adding indicator

To add any indicator to the chart, you need to create the data set and map it properly.

### Preparing the data 

The data set for the BBands %B indicator needs those fields which are necessary for the series you plan to use - for example, "value" is necessary to set the Line series, but the OHLC and Candlestick Chart need four values ("open", "high", "low" and "close"). 

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

The {api:anychart.core.stock.Plot#bbandsB}bbandsB(){api} method will create a BBands %B indicator:

```
// create BBands indicators
var bbandsB = plot.bbandsB(mapping);
```

{sample}STOCK\_Technical\_Indicators\_BBandsB\_01{sample}


## Indicator parameters

BBands %B indicator requires an only parameter: the mapping. Though, there are three parameters extra, which have default values if are not defined: period, deviation and series type.

```
var bbandsB = plot.bbandsB(mapping, 10, 3, "spline");
```

## Visualization

Visualization of an indicator depends on the type of a series you display it with. Let's look at the next sample where two BBands %B with different parameters and settings are added to different plots:

```
// create BBandsB indicator with period 10 and show as line on the first plot
var BBandsB10 = plot_0.bbandsB(mapping, 10).series();
BBandsB10.fill('#bf360c');
BBandsB10.seriesType("column");

// create SMA indicator with period 50 and show as column on the second plot
var BBandsB50 = plot_1.bbandsB(mapping, 50, 0.2, "column").series();
BBandsB50.fill('#ff6d00');
```

{sample}STOCK\_Technical\_Indicators\_BBandsB\_02{sample}