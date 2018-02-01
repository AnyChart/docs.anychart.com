# Parabolic SAR (PSAR)	

## Overview

Parabolic SAR (SAR - stop and reverse) is a method devised by J. Welles Wilder, Jr, to find trends in market prices or securities. It may be used as a trailing stop loss based on prices tending to stay within a parabolic curve during a strong trend.

Find the mathematical description of the indicator on the [Parabolic SAR (PSAR) Mathematical Description](Mathematical_Description#parabolic_sar) page.

## Adding indicator

PSAR indicator is added through the {api:anychart.core.stock.Plot#psar}psar(){api} method. It requires a mapping with two fields: `"high"` and `"low"`. The following sample demonstrates the PSAR indicator applied to an OHLC series:

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create stock chart
var chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create ohlc series
var ohlcSeries = plot.ohlc(mapping);
ohlcSeries.name("CSCO");

// create PSAR indicator
var psar = plot.psar(mapping, 0.08, 0.60).series();
psar.stroke("0.5 lightGray");
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_PSAR\_01{sample}

## Indicator parameters

There are four parameters a PSAR indicator has, one of them is necessary - the mapping. Three other ones are the acceleration factor, maximum acceleration factor and the series type. The series type can be easily changed any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method. The following code sample demonstrates a CMF indicator with parameters set as default.

```
var psar = plot.psar(mapping, 0.02, 0.3, "marker");
```

## Visualization

Visualization of an indicator depends on series type. Here is a sample where PSAR with different parameters and settings is added to different plots:

```
// create the PSAR indicator with settings adjusted
var psar_0 = plot_0.psar(mapping, 0.08, 0.60).series();
psar_0.stroke("0.5 lightGray");
psar_0.fill("green");
psar_0.type("circle");
psar_0.size(2);

// create and adjust the PSAR indicator with settings adjusted
var psar_1 = plot_1.psar(mapping, 0.03, 0.20, "line").series();
psar_1.stroke("2 red");
```

{sample}STOCK\_Technical\_Indicators\_PSAR\_02{sample}