# BBands Width

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
 * [Preparing the data](#preparing_the_data)
 * [Indicator Declaration](#indicator_declaration)
* [Indicator parameters](#indicator_parameters)
* [Visualization using lines](#visualization_using_lines)
* [Visualization using ranges](#visualization_using_ranges)


## Overview

Bollinger BandWidth is an indicator derived from Bollinger Bands. There are two indicators derived from [Bollinger Bands](Bollinger_Bands), according to the creator John Bollinger, and the second one is the [BBands %B](BBands_B).

Non-normalized BandWidth measures the distance, or difference, between the upper band and the lower band. BandWidth decreases as Bollinger Bands narrow and increases as Bollinger Bands widen, because Bollinger Bands are based on the standard deviation.

Mathematical description of the indicator please see at: [Mathematical Description of BBands Width](Mathematical_Description)


## Adding indicator

To add any indicator to the chart, you need to create the data set and map it properly.

### Preparing the data 

The data set for the BBands Width indicator needs those fields which are necessary for the series you plan to use - for example, "value" is necessary to set the Line series, but the OHLC and Candlestick Chart need four values ("open", "high", "low" and "close"). 

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

The {api:anychart.core.stock.Plot#bbandsWidth}bbandsWidth(){api} method will create a BBands Width indicator:

```
// create BBands indicators
var bbandsW = plot.bbandsWidth(mapping);
```

{sample}STOCK\_Technical\_Indicators\_BBandsWidth\_01{sample}


## Indicator parameters

BBands Width indicator, similar to other BBands indicators, requires an only parameter: the mapping. Though, there are three parameters extra, which takes default values if are not defined: period (20 by default), deviation (2 by default) and series type ("line" by default).

```
var bbandsWidth = plot.bbandsWidth(mapping, 50, 3, "spline");
```

## Visualization

Visualization of an indicator depends on the type of a series you display it with. Let's look at the next sample where two BBands Width with different parameters and settings are added to different plots:

```
// create BBands Width indicator with period 10 and show as line on the first plot
var BBandsWidth10 = plot_0.bbandsWidth(mapping, 10).series();
BBandsWidth10.stroke('#bf360c');

// create BBands Width indicator with period 50 and show as column on the second plot
var BBandsWidth50 = plot_1.bbandsWidth(mapping, 50, "column").series();
BBandsWidth50.fill('#ff6d00');
```