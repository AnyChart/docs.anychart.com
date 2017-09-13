# Bollinger Bands Width

## Overview

Bollinger Bands Width is an indicator derived from [Bollinger Bands](Bollinger_Bands). 

Non-normalized Bollinger Bands Width measures the distance, or difference, between the upper band and the lower band. Bollinger Bands Width decreases as Bollinger Bands narrow and increases as Bollinger Bands widen because Bollinger Bands are based on the standard deviation.

Mathematical description of the indicator: [Mathematical Description of Bollinger Bands Width](Mathematical_Description#bollinger_bands_width).

## Adding indicator

Bollinger Bands Width indicator is added using the {api:anychart.core.stock.Plot#bbandsWidth}bbandsWidth(){api} method. It requires a mapping with the value field in it:

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

Bollinger Bands Width indicator requires only the "mapping" parameter. Optional parameters are "period", "deviation" and "series type".

```
var bbandsWidth = plot.bbandsWidth(mapping, 50, 3, "spline");
```

## Visualization

Visualization of an indicator depends on the type of a series you display it with. Let's look at the next sample where two Bollinger Bands Width with different parameters and settings are added to different plots:

```
// create Bollinger Bands Width indicator with period 10 and show as line on the first plot
var BBandsWidth10 = chart.plot(0).bbandsWidth(mapping, 10).series();
BBandsWidth10.stroke('#bf360c');

// create Bollinger Bands Width indicator with period 50 and show as column on the second plot
var BBandsWidth50 = chart.plot(1).bbandsWidth(mapping, 50, "column").series();
BBandsWidth50.fill('#ff6d00');
```

{sample}STOCK\_Technical\_Indicators\_BBandsWidth\_02{sample}