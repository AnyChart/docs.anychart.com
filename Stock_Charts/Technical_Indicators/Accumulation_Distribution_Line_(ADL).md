# Accumulation Distribution Line (ADL)

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Visualization](#visualization)

## Overview

Developed by Marc Chaikin, the Accumulation Distribution Line is a volume-based indicator designed to measure the cumulative flow of money into and out of a security. Chaikin originally referred to the indicator as the Cumulative Money Flow Line. As with cumulative indicators, the Accumulation Distribution Line is a running total of each period's Money Flow Volume. First, a multiplier is calculated based on the relationship of the close to the high-low range. Second, the Money Flow Multiplier is multiplied by the period's volume to come up with a Money Flow Volume. A running total of the Money Flow Volume forms the Accumulation Distribution Line. Chartists can use this indicator to affirm a security's underlying trend or anticipate reversals when the indicator diverges from the security price.

Find the mathematical description of the indicator on the [Adaptive moving average (AMA) Mathematical Description](Mathematical_Description#adl) page.


## Adding indicator

ADL indicator is added through the {api:anychart.core.stock.Plot#adl}adl(){api} method. It requires a mapping with five fields in it: "open", "high", "low", "close" and "volume"..

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs({"high": 1, "open": 2, "low": 3, "close": 4, "volume": 3});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create ADL indicator
var adl = plot.adl(mapping).series();
adl.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_ADL\_01{sample}

It is possible to change the series type any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

Visualization of an indicator depends on series type. Here is a sample where ADL with different parameters and settings is added to different plots:

```
// create first ADL indicator of default series type
var adl_1 = plot_0.adl(mapping, "spline").series();
adl_1.stroke("#bf360c");

// create second ADL indicator of column series
var adl_2 = plot_1.adl(mapping).series();
adl_2.seriesType("marker");
adl_2.fill("#E5BE01");
adl_2.size(3);
adl_2.stroke("none");
adl_2.type("star5");
```

{sample}STOCK\_Technical\_Indicators\_ADL\_02{sample}
