# Bollinger Bands %B

## Overview

Bollinger Bands %B is an indicator derived from [Bollinger Bands](Bollinger_Bands).

%B quantifies a security's price relative to the upper and lower Bollinger Band. There are six basic relationship levels:

- %B equals 1 when price is at the upper band
- %B equals 0 when price is at the lower band
- %B is above 1 when price is above the upper band
- %B is below 0 when price is below the lower band
- %B is above .50 when price is above the middle band (SMA)
- %B is below .50 when price is below the middle band (SMA)

Mathematical description of the indicator can be found on the following page: [Mathematical Description of Bollinger Bands %B](Mathematical_Description#bollinger_bands_%b)

## Adding indicator

Bollinger Bands %B indicator is added using the {api:anychart.core.stock.Plot#bbandsB}bbandsB(){api} method. It requires a mapping with the `"value"` field in it:

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

Bollinger Bands %B indicator requires only the "mapping" parameter. Optional parameters are "period", "deviation" and "series type".

```
var bbandsB = plot.bbandsB(mapping, 10, 3, "spline");
```

## Visualization

Visualization of an indicator depends on the type of a series you display it with. Let's look at the next sample where two Bollinger Bands %B with different parameters and settings are added to separate plots:

```
// create BBandsB indicator with period 10 and show as line on the second plot
var BBandsB10 = chart.plot(1).bbandsB(mapping, 10, 0.2, "line").series();
BBandsB10.stroke('#bf360c');

// create BBandsB indicator with period 50 and show as column on the third plot
var BBandsB50 = chart.plot(2).bbandsB(mapping, 50, 0.6, "column").series();
BBandsB50.fill('#ff6d00');
```

{sample}STOCK\_Technical\_Indicators\_BBandsB\_02{sample}