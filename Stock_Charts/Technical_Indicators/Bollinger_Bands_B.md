# Bollinger Bands %B

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
* [Visualization](#visualization)


## Overview

Bollinger Bands %B is one of two indicators derived from [Bollinger Bands](Bollinger_Bands), according to the creator of those indicators, John Bollinger. The other indicator is [Bollinger Band Width](Bollinger_Bands_Width).

%B quantifies a security's price relative to the upper and lower Bollinger Band. There are six basic relationship levels:

- %B equals 1 when price is at the upper band
- %B equals 0 when price is at the lower band
- %B is above 1 when price is above the upper band
- %B is below 0 when price is below the lower band
- %B is above .50 when price is above the middle band (SMA)
- %B is below .50 when price is below the middle band (SMA)

Mathematical description of the indicator please see at: [Mathematical Description of Bollinger Bands %B](Mathematical_Description)


## Adding indicator

Bollinger Bands %B indicator is being added with the {api:anychart.core.stock.Plot#bbandsB}bbandsB(){api} method. It requires a mapping with value field in it:

```
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({'value': 4});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create Bollinger Bands indicators
var bbandsB = plot.bbandsB(mapping);
```

{sample}STOCK\_Technical\_Indicators\_BBandsB\_01{sample}


## Indicator parameters

Bollinger Bands %B indicator requires only one parameter - "mapping". Other parameters are "period", "deviation" and "series type".

```
var bbandsB = plot.bbandsB(mapping, 10, 3, "spline");
```

## Visualization

Visualization of an indicator depends on the type of a series you display it with. Let's look at the next sample where two Bollinger Bands %B with different parameters and settings are added to different plots:

```
// create Bollinger Bands %B indicator with period 10 and show as line on the first plot
var BBandsB10 = plot_0.bbandsB(mapping, 10).series();
BBandsB10.fill('#bf360c');
BBandsB10.seriesType("column");

// create Bollinger Bands %B indicator with period 50 and show as column on the second plot
var BBandsB50 = plot_1.bbandsB(mapping, 50, 0.2, "column").series();
BBandsB50.fill('#ff6d00');
```

{sample}STOCK\_Technical\_Indicators\_BBandsB\_02{sample}