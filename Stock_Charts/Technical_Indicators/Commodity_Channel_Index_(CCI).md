# Commodity Channel Index (CCI)

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Visualization](#visualization)

## Overview

Developed by Donald Lambert and featured in Commodities magazine in 1980, the Commodity Channel Index (CCI) is a versatile indicator that can be used to identify a new trend or warn of extreme conditions. Lambert originally developed CCI to identify cyclical turns in commodities, but the indicator can successfully applied to indices, ETFs, stocks and other securities. In general, CCI measures the current price level relative to an average price level over a given period of time. CCI is relatively high when prices are far above their average. CCI is relatively low when prices are far below their average. In this manner, CCI can be used to identify overbought and oversold levels.

Find the mathematical description of the indicator on the [Commodity Channel Index (CCI) Mathematical Description](Mathematical_Description#commodity_channel_index) page.


## Adding indicator

CCI indicator is added through the {api:anychart.core.stock.Plot#cci}cci(){api} method. It requires a mapping with three fields: "high", "low" and "close". The following sample demonstrates the CCI indicator applied to a spline series which data values are equal to "close" values.

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs({"high": 1, "low": 3, "close": 4, "value": 4});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create ADL indicator
var cci = plot.cci(mapping).series();
cci.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_CCI\_01{sample}

It is possible to change the series type any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

Visualization of an indicator depends on series type. Here is a sample where CCI with different parameters and settings is added to different plots:

```
// create first CCI indicator 
var cci_1 = plot_0.cci(mapping).series();
cci_1.seriesType("spline");
cci_1.stroke("#bf360c", 2, "5 2");

// create second CCI indicator 
var cci_2 = plot_1.cci(mapping).series();
cci_2.seriesType("marker");
cci_2.fill("#E5BE01");
cci_2.size(3);
cci_2.stroke("none");
cci_2.type("star5");
```

{sample}STOCK\_Technical\_Indicators\_CCI\_02{sample}
