Switching the Series Type
=========================

AnyChart provides a method allowing to change the series type if the current type and the new one have the same or similar fields. See the [list of supported chart types](../Quick_Start/Supported_Charts_Types) to find out what series types can be converted to each other.

To switch the series type, use the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method of a series and set the name of the series type as a string parameter. The name of a series type used as a parameter is identical to the method used for creating series of this type.

(? ВАРИАНТ - ПЕРВОЕ ВЫКИНУТЬ, А ВТОРОЕ ЗАКОНЧИТЬ ТАК: ...set the name of the series type as a string parameter (the name is identical to the method used for creating series of this type).)

(? method of a series - правильно артикль стоит? имеется же в виду не сферическая серия в вакууме, а та серия, с которой работает юзер? или нет? может выкинуть "a series"?)

The sample below demonstrates how the feature works with line, column, and area series, which require only one value:

```
// set the data
var data = anychart.data.set([
    ["Spring", 10], ["Summer", 15], ["Autumn", 8], ["Winter", 23]
]);

// set the series type
var series = chart.line(data);

// create a scroller series with values
var scrollerSeries = chart.scroller().area(table.mapAs({'value': 'value'}));

// change the series type
series.seriesType("line");
```

{sample}BCT\_Series\_Type\_01{sample}

In the following sample, the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method is applied to OHLC and Japanese candlestick series, which require four values, as well as to a range area series:

```
// set the data
var data = [
    {x: Date.UTC(2015, 4, 1), open:18.23, high:19.36, low:18.18, close:19.31},
    {x: Date.UTC(2015, 4, 2), open:19.50, high:19.89, low:19.00, close:19.29},
    {x: Date.UTC(2015, 4, 3), open:19.13, high:19.15, low:18.43, close:18.75},
    {x: Date.UTC(2015, 4, 6), open:18.54, high:18.76, low:18.27, close:18.76},
    {x: Date.UTC(2015, 4, 7), open:18.76, high:19.14, low:18.63, close:18.76}
];

// set the series type
var series = chart.ohlc(data);

// change the series type
series.seriesType("rangeArea");
```

{sample}BCT\_Series\_Type\_02{sample}

Please note that the range area series uses only two values from the data set, but it works because it shares the default names of data fields ("low" and "high") with Japanese candlestick and OHLC series. So, series types do not have to use the same number of fields to be convertible to each other.