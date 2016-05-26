{:index 3}
Switching series type
========

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [list of supported series](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use {api:anychart.core.stock.series.Base#seriesType}.seriesType(){api} method of a series. Let's create a couple of samples to make it clear how to use the feature.

```
	table.addData([
        {x:'1790', value:3929214},
        {x:'1795', value:4390561},
        {x:'1800', value:5236631},
        {x:'1805', value:5989289},
        {x:'1810', value:7239881},
        {x:'1815', value:8722382},
        {x:'1820', value:9638453}
    ]);

	// create label for changing the series type
    columnLabel = createLabel("Switch to Column", 10, function() {
        // change the series type
        series.seriesType("column");
        chart.title("Column");
    });    
```
{sample}STOCK\_Series\_Type\_01{sample}

This sample shows how this feature works with simple series of one value. Let's now create a more complicated sample with series that need four values: Japanese Candlestick and OHLC.

```
	table = anychart.data.table("x");
    table.addData([
        {'x': '2015-04-01', 'o': 18.23, 'h': 19.36, 'l': 18.18, 'c': 19.31},
        {'x': '2015-04-02', 'o': 19.50, 'h': 19.89, 'l': 19.00, 'c': 19.29},
        {'x': '2015-04-03', 'o': 19.13, 'h': 19.15, 'l': 18.43, 'c': 18.75},
        {'x': '2015-04-06', 'o': 18.54, 'h': 18.76, 'l': 18.27, 'c': 18.76}
    ]);

    // create label for changing the series type
    ohlcLabel = createLabel("Switch to OHLC", 10, function() {
        // change the series type
        series.seriesType("ohlc");
        chart.title("OHLC");
    });    
```
{sample}STOCK\_Series\_Type\_02{sample}

Note that Range Area uses only two values from the dataSet, but it still works, because the names of the data fields used ("low" and "high") are the same that Range Area Charts have by default. So, it's not only possible to change the series that require completely the same fields but those which use different number of those fields.