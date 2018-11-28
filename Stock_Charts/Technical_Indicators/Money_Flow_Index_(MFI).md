# Money Flow Index (MFI)

## Overview

Money flow index (MFI) is an oscillator calculated over an N-day period, ranging from 0 to 100, showing money flow on up days as a percentage of the total of up and down days.

Find the mathematical description of the indicator on the [Money Flow Index (MFI)](Mathematical_Description#money_flow_index) page.

## Adding indicator

MFI indicator is added through the {api:anychart.core.stock.Plot#mfi}mfi(){api} method. It requires a mapping with four fields: `"high"`, `"low"`, `"close"`, and `"volume"`. The following sample demonstrates the MFI indicator applied to an OHLC series:

```
// create data table on loaded data
var dataTable = anychart.data.table();
dataTable.addData(get_csco_daily_data());

// map loaded data
var mapping = dataTable.mapAs({"open": 1, "high": 2, "low": 3, "close": 4, "volume": 5});

// create stock chart
var chart = anychart.stock();

// create plots on the chart
var plot_0 = chart.plot(0);
var plot_1 = chart.plot(1);

// create ohlc series
var ohlcSeries = plot_0.ohlc(mapping);
ohlcSeries.name("CSCO");

// create MFI indicator
var mfi = plot_1.mfi(mapping, 5).series();
mfi.stroke("2 red");
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_MFI\_01{sample}

## Indicator parameters

There are three parameters an MFI indicator has, one of them is necessary - the mapping. Two other ones are the period and the series type. The series type can be easily changed any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method. The following code sample demonstrates an MFI indicator with parameters set as default.

```
var mfi = plot.mfi(mapping, 10, "line");
```

## Visualization

Visualization of an indicator depends on series type. Here is a sample where MFI with different parameters and settings is added to different plots:

```
// create and adjust the MFI indicator with settings adjusted
var mfi_1 = plot_1.mfi(mapping, 5, "area").series();
mfi_1.stroke("0.5 gray");
mfi_1.fill("#ffd54f");

// create and adjust the MFI indicator with settings adjusted
var mfi_2 = plot_2.mfi(mapping, 60, "column").series();
mfi_2.stroke("0.5 lightGray");
mfi_2.fill("#ff6d00");
```

{sample}STOCK\_Technical\_Indicators\_MFI\_02{sample}