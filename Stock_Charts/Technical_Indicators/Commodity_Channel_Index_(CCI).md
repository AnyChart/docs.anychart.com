# Commodity Channel Index (CCI)

* [Overview](#overview)
* [Adding indicator](#adding_indicator)
* [Indicator parameters](#indicator_parameters)
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

// create plots on the chart
var plot0 = chart.plot(0);
var plot1 = chart.plot(1);

// create CCI indicator
var cci = plot1.cci(mapping);
```

Note that CCI indicator needs to be built on a separate plot due to rather huge difference between the indicator values and the data values.

Here is a live sample:

{sample :height 700}STOCK\_Technical\_Indicators\_CCI\_01{sample}

It is possible to change the series type any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Indicator parameters

There are three parameters the CCI indicator has. The mapping is necessary, the period and the series type are optional. The following code sample demonstrates a CCI indicator creating with default parameters.

```
// create a CCI indicator with default parameters
cci = plot1.cci(mapping, 20, "line");
```

## Visualization

Visualization of an indicator depends on series type. Here is a sample where two CCI indicators with different parameters are created on different plots:

```
// create a default CCI indicator
var cci1 = plot1.cci(mapping);

// create a CCI indicator with parameters adjusted
var cci2 = plot2.cci(mapping, 45, "column");
cci2Series = cci2.series();
cci2Series.fill("#bf360c");
cci2Series.stroke(null);
```

{sample :height 700}STOCK\_Technical\_Indicators\_CCI\_02{sample}
