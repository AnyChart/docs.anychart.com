{:index 3}
Switching the Series Type
========

Our stock charts provide a method allowing to change the series type if the current type and the new one have the same or similar fields. See the [list of supported series](Supported_Series#list_of_supported_series) to find out what series types can be converted to each other.

To switch the series type, use the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method of a series and set the series type name as a string parameter. A series type name used as a parameter is identical to the method used for creating series of this type.

The sample below demonstrates how the feature works with column, line, and area series, which require only one value:

```
table.addData([
    {x:'1790-01-01', value:3929214},
    {x:'1795-01-01', value:4390561},
    {x:'1800-01-01', value:5236631},
    {x:'1805-01-01', value:5989289},
    {x:'1810-01-01', value:7239881},
    {x:'1815-01-01', value:8722382},
    {x:'1820-01-01', value:9638453}
]);

// map the data
mapping = table.mapAs({'x':"x", 'value':"value"});  

// set the series type
var series = chart.plot(0).line(mapping);

// create a scroller series with values
var scrollerSeries = chart.scroller().area(table.mapAs({'value': 'value'}));

// change the series type
series.seriesType("column");
scrollerSeries.seriesType("column");
```
{sample}STOCK\_Series\_Type\_01{sample}

In the following sample, the {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method is applied to Japanese candlestick and OHLC series, which require four values, as well as to a range area series:

```
table = anychart.data.table("x");
table.addData([
    {'x': '2015-04-01', 'o': 18.23, 'h': 19.36, 'l': 18.18, 'c': 19.31},
    {'x': '2015-04-02', 'o': 19.50, 'h': 19.89, 'l': 19.00, 'c': 19.29},
    {'x': '2015-04-03', 'o': 19.13, 'h': 19.15, 'l': 18.43, 'c': 18.75},
    {'x': '2015-04-06', 'o': 18.54, 'h': 18.76, 'l': 18.27, 'c': 18.76}
]);

// map the data
mapping = table.mapAs({'open':"o",'high': "h", 'low':"l", 'close':"c"});

// set the series
var series = chart.plot(0).ohlc(mapping);

// create a scroller series with o/h/l/c values
var scrollerSeries = chart.scroller().ohlc(table.mapAs({'open':"o",'high': "h", 'low':"l", 'close':"c"}));

// change the series type
series.seriesType("rangeArea");
scrollerSeries.seriesType("rangeArea");
```
{sample}STOCK\_Series\_Type\_02{sample}

Please note that the range area series uses only two values from the data set, but it works because the names of the data fields used ("low" and "high") are the same that range area series have by default. So, series types do not have to use the same number of fields to be convertible to each other.

(ВАРИНАТ ЗАМЕНЫ ВТОРОГО ПРЕДЛОЖЕНИЯ: ...because it shares the default names of data fields ("low" and "high") with Japanese candlestick and OHLC series.)