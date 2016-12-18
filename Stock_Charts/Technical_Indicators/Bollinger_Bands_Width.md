# Bollinger Bands Width

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Visualization](#visualization)


## Overview

Bollinger Bands Width is an indicator derived from Bollinger Bands. There are two indicators derived from [Bollinger Bands](Bollinger_Bands), according to the creator John Bollinger, and the second one is the [Bollinger Bands %B](Bollinger_Bands_B).

Non-normalized Bollinger Bands Width measures the distance, or difference, between the upper band and the lower band. Bollinger Bands Width decreases as Bollinger Bands narrow and increases as Bollinger Bands widen, because Bollinger Bands are based on the standard deviation.

Mathematical description of the indicator please see at: [Mathematical Description of Bollinger Bands Width](Mathematical_Description).


## Adding indicator


Bollinger Bands Width indicator is to be added through the {api:anychart.core.stock.Plot#bbandsWidth}bbandsWidth(){api} method, requiring a mapping with value field in it:

```
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({'value': 4});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create Bollinger Bands Width indicator
var bbandsW = plot.bbandsWidth(mapping);
```

{sample}STOCK\_Technical\_Indicators\_BBandsWidth\_01{sample}


## Indicator parameters

Bollinger Bands Width indicator, similar to other Bollinger Bands indicators, requires only the "mapping" parameter. Optional parameters are "period" (20 by default), "deviation" (2 by default) and "series type" ("line" by default).

```
var bbandsWidth = plot.bbandsWidth(mapping, 50, 3, "spline");
```

## Visualization

Visualization of an indicator depends on the type of a series you display it with. Let's look at the next sample where two Bollinger Bands Width with different parameters and settings are added to different plots:

```
// create Bollinger Bands Width indicator with period 10 and show as line on the first plot
var BBandsWidth10 = plot_0.bbandsWidth(mapping, 10).series();
BBandsWidth10.stroke('#bf360c');

// create Bollinger Bands Width indicator with period 50 and show as column on the second plot
var BBandsWidth50 = plot_1.bbandsWidth(mapping, 50, "column").series();
BBandsWidth50.fill('#ff6d00');
```

{sample}STOCK\_Technical\_Indicators\_BBandsWidth\_02{sample}