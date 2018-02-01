# Williams %R

## Overview

Williams %R, or just %R, is a momentum indicator showing the current closing price in relation to the high and low of the past N days (for a given N). It was developed by trader and author Larry Williams and is used in the stock and commodities markets.

Find the mathematical description of the indicator on the [Williams %R Mathematical Description](Mathematical_Description#williams_%25r) page.

## Adding indicator

Williams %R indicator is added through the {api:anychart.core.stock.Plot#williamsR}williamsR(){api} method. It requires a mapping with three fields: `"high"`, `"low"`, and `"close"`.

Williams %R is measured on a -100 — 0 scale, so to show it properly, you need to configure the Y-scale of its plot (see [Scales](../Scales) to learn more):

```
plot_1.yScale().minimum(-100);
plot_1.yScale().maximum(0);
```

The following sample demonstrates the Williams %R indicator applied to an OHLC series:

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4});

// create stock chart
var chart = anychart.stock();

// create plots on the chart
var plot_0 = chart.plot(0);
var plot_1 = chart.plot(1);

// create ohlc series
var ohlcSeries = plot_0.ohlc(mapping);
ohlcSeries.name("CSCO");

// create Williams %R indicator
var williamsR = plot_1.williamsR(mapping, 4).series();
williamsR.stroke("2 red");
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_Williams\_R\_01{sample}

## Indicator parameters

There are three parameters a Williams %R indicator has, one of them is necessary - the mapping. Two other ones are the period and the series type. The series type can be easily changed any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method. The following code sample demonstrates a Williams %R indicator with parameters set as default.

```
var psar = plot.psar(mapping, 10, "line");
```

## Visualization

Visualization of an indicator depends on series type. Here is a sample where Williams %R with different parameters and settings is added to different plots:

```
// create and adjust the Williams %R indicator with settings adjusted
var williamsR_1 = plot_1.williamsR(mapping, 5, "area").series();
williamsR_1.stroke("0.5 gray");
williamsR_1.fill("#ffd54f");

// create and adjust the Williams %R indicator with settings adjusted
var williamsR_2 = plot_2.williamsR(mapping, 60, "column").series();
williamsR_2.stroke("0.5 lightGray");
williamsR_2.fill("#ff6d00");
```

{sample}STOCK\_Technical\_Indicators\_Williams\_R\_02{sample}