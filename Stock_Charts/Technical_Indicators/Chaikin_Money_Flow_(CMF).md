# Chaikin Money Flow (CMF)	

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Visualization](#visualization)

## Overview

Developed by Marc Chaikin, Chaikin Money Flow measures the amount of Money Flow Volume over a specific period. Money Flow Volume forms the basis for the Accumulation Distribution Line. Instead of a cumulative total of Money Flow Volume, Chaikin Money Flow simply sums Money Flow Volume for a specific look-back period, typically 20 or 21 days. The resulting indicator fluctuates above/below the zero line just like an oscillator. Chartists weigh the balance of buying or selling pressure with the absolute level of Chaikin Money Flow. Chartists can also look for crosses above or below the zero line to identify changes on money flow.

Find the mathematical description of the indicator on the [Chaikin Money Flow (CMF) Mathematical Description](Mathematical_Description#chaikin_money_flow) page.


## Adding indicator

CMF indicator is added through the {api:anychart.core.stock.Plot#cmf}cmf(){api} method. It requires a mapping with four fields: "high", "low", "close" and "volume". The following sample demonstrates the CMF indicator applied to a spline series which data values are equal to "close" values.

The indicator values differ too much from the series values, so it is reasonable to build the indicator on a separate plot.

```
// add data to a table
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"high": 1, "low": 3, "close": 4, "volume": 5, "value": 4});

// create stock chart
chart = anychart.stock();

// create plots on the chart
var plot = chart.plot(0);
var plot1 = chart.plot(1);

// create CMF indicator
var cmf = plot1.cmf(mapping).series();
cmf.stroke("#bf360c");
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_CMF\_01{sample}

It is possible to change the series type any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

Visualization of an indicator depends on series type. Here is a sample where CMF with different parameters and settings is added to different plots:

```
// create and adjust CMF indicator 
cmf_0.seriesType("marker");
cmf_0.fill("#E5BE01");
cmf_0.size(3);
cmf_0.stroke("none");
cmf_0.type("star5");
```

{sample}STOCK\_Technical\_Indicators\_CMF\_02{sample}
