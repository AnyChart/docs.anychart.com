# Modified Moving Average

## Overview

A Modified Moving Average (MMA) (**also known as the Running Moving Average (RMA), or SMoothed Moving Average (SMMA)**) is an indicator that shows the average value of a security's price over a period of time. It works very similar to the Exponential Moving Average, they are equivalent but for different periods (e.g. the MMA value for a 14-day period will be the same as EMA-value for a 27-days period).

MMA is partly calculated like SMA: the first point of the MMA is calculated the same way it is done for SMA. However, other points are calculated differently:the new price is added first and then the last average is subtracted from the resulting sum. 

AnyChart Stock allows you to add MMA with desired period to any of your charts.

Find the mathematical description of the indicator on the [Modified moving average (MMA) Mathematical Description](Mathematical_Description#mma) page.

## Adding indicator

MMA indicator is added using the {api:anychart.core.stock.Plot#mma}mma(){api} method, it requires a mapping with the `"value"` field in it:

```
// create data table on loaded data
var dataTable = anychart.data.table();

// add data to a table
dataTable.addData(get_data());

// map loaded data
var mapping = dataTable.mapAs({'value': 4});

// create stock chart
chart = anychart.stock();

// create plot on the chart
var plot = chart.plot(0);

// create MMA indicators with period of 10
var mma10 = plot.mma(mapping, 10).series();
mma10.stroke('#bf360c');
```

Here is a live sample:

{sample}STOCK\_Technical\_Indicators\_MMA\_01{sample}

## Indicator parameters

MMA indicator needs three parameters, as SMA and EMA: mapping with the `"value"` field in it, period and a type of series to be displayed as:

```
var mma10 = plot.mma(mapping, 10, "column");
```
It is possible to change the series type at any time using the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

Visualization of an indicator depends on the series type. Here is a sample where MMA with different parameters and settings is added to different plots:

```
// create MMA indicator with period 10 and show as line on the first plot
var mma10 = plot_0.mma(mapping, 10).series();
mma10.stroke('#bf360c');

// create MMA indicator with period 30 and show as column on the second plot
var mma30 = plot_1.mma(mapping, 30, "column").series();
mma30.fill('#ff6d00');
```

Live sample:

{sample}STOCK\_Technical\_Indicators\_MMA\_02{sample}