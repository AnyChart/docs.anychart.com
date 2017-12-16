{:index 0.5}
# Switching the Series Type

## Overview

AnyChart provides a method allowing to change the series type if the current type and the new one have the same or similar fields. See the [list of supported chart types](../Quick_Start/Supported_Charts_Types) to find out what series types can be converted to each other.

## seriesType()

To switch the series type, use the {api:anychart.core.cartesian.series.Base#seriesType}seriesType(){api} method of a series and set the name of the series type as a string parameter. The name of the series type used as a parameter is identical to the method creating series of this type, e.g. the **bar()** method turns into `"bar"`, **line()** turns into `"line"`, and so on:

```
// create data
var data = [
    ["Spring", 10], 
    ["Summer", 15],
    ["Autumn", 8],
    ["Winter", 23]
];

// set the chart type
var chart = anychart.area();

// set the series type
var series = chart.area(data);

// switch the series type
series.seriesType("column");
```

The sample below demonstrates how this feature works with Area, Line, Column, and other series types requiring only one value:

{sample}{sample}BCT\_Series\_Type\_01{sample}

In the following sample, the {api:anychart.core.cartesian.series.Base#seriesType}seriesType(){api} method is applied to OHLC, Japanese Candlestick, and similar types:

```
// create data
var data = [
    {x: Date.UTC(2015, 4, 1), open: 18.23, high: 19.36, low: 18.18, close: 19.31},
    {x: Date.UTC(2015, 4, 2), open: 19.50, high: 19.89, low: 19.00, close: 19.29},
    {x: Date.UTC(2015, 4, 3), open: 19.13, high: 19.15, low: 18.43, close: 18.75},
    {x: Date.UTC(2015, 4, 6), open: 18.54, high: 18.76, low: 18.27, close: 18.76},
    {x: Date.UTC(2015, 4, 7), open: 18.76, high: 19.14, low: 18.63, close: 18.76}
];

// set the chart type
var chart = anychart.financial();

// set the series type 
var series = chart.ohlc(data);

// switch the series type
series.seriesType("range-area");
```

{sample}BCT\_Series\_Type\_02{sample}

Please note that the Range Area series uses only two values from the data set, but it works because it shares the default names of data fields (`low` and `high`) with Japanese Candlestick and OHLC series. So, series types do not have to use the same number of fields to be convertible to each other.

## defaultSeriesType()

The {api:anychart.charts.Cartesian#defaultSeriesType}defaultSeriesType(){api} method combined with {api:anychart.charts.Cartesian#addSeries}addSeries(){api} allows you to vary the type of series:

```
var data1 = [16, 30, 45, 12, 5];
var data2 = [1, 51, 23, 64, 12];
var data3 = [18, 25, 10, 20, 35];

var chart = anychart.cartesian();

// set the default series type
chart.defaultSeriesType("column");

// add a series of the default type
chart.addSeries(dataSet1);
chart.addSeries(dataSet2);
chart.addSeries(dataSet3);
```

