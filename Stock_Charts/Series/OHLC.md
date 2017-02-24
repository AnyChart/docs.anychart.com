# AnyStock OHLC Series

* [Overview](#overview)
* [AnyStock OHLC Series Adjustment](#anystock_ohlc_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)


## Overview

OHLC Charts, or Open-High-Low-Close, are the most poplular in finances, economics and trades, as this series use four parameters to watch the prices changing: open - the opening price of some goods or shares; high - the highest price that was reached during the day; low - the lowest price that was reached during the day; close - closing price, i.e. the price of the goods or shares at the moment of the period finishes. Read more about Basic OHLC Charts in the [OHLC Chart article](../../Basic_Charts/OHLC_Chart).

See also: [Candlestick](Candlestick).

## AnyStock OHLC Series Adjustment

### Data

The data in stocks must be represented in table format. There are two ways how to arrange the data: as array of array or as array of objects. Let's now create a couple of samples with the same data but different ways of its arranging. This will help to understand the principles data arranging.

```
// set the data
table = anychart.data.table('x');
table.addData([        
	{'x': '2015-04-01', 'o': 18.23, 'h': 19.36, 'l': 18.18, 'c': 19.31},
	{'x': '2015-04-02', 'o': 19.50, 'h': 19.89, 'l': 19.00, 'c': 19.29},
	{'x': '2015-04-03', 'o': 19.13, 'h': 19.15, 'l': 18.43, 'c': 18.75},
	{'x': '2015-04-06', 'o': 18.54, 'h': 18.76, 'l': 18.27, 'c': 18.76},
	{'x': '2015-04-07', 'o': 18.76, 'h': 19.14, 'l': 18.63, 'c': 18.76},
	{'x': '2015-04-08', 'o': 18.97, 'h': 19.62, 'l': 18.96, 'c': 19.19}
]);
  
// map the data
mapping = table.mapAs({'open':"o",'high': "h", 'low':"l", 'close':"c"});
chart = anychart.stock();

// set the series
var series = chart.plot(0).ohlc(mapping);
series.name("ACME Corp. stock prices (apr 2015 - jul 2015)");
```

{sample}STOCK\_OHLC\_02{sample}

This sample had its data arranged as an array of objects. It's necessary to define the fields' names in the data table, despite later this data will be mapped. Also we have to define the name of the X-Axis variable to the {api:anychart.data#table}table(){api} method.

The next sample contains the same data items arranged as array of arrays. 

```
// set the data
table = anychart.data.table();
table.addData([        
	['2016-04-01', 18.23, 19.36, 18.18, 19.31],
	['2016-04-02', 19.50, 19.89, 19.00, 19.29],
	['2016-04-03', 19.13, 19.15, 18.43, 18.75],
	['2016-04-06', 18.54, 18.76, 18.27, 18.76],
	['2016-04-07', 18.76, 19.14, 18.63, 18.76]
]);
  
// map the data
mapping = table.mapAs();
mapping.addField('open', 1);
mapping.addField('high', 2);
mapping.addField('low', 3);
mapping.addField('close', 4);

// chart type
chart = anychart.stock();

// set the series
var series = chart.plot(0).ohlc(mapping);
series.name("ACME Corp. stock prices");
```

{sample}STOCK\_OHLC\_01{sample}

Multiple series in different plots:

```
// set the series
var series_acme = chart.plot(0).ohlc(mapping_acme);
series_acme.name("ACME Corp. stock prices");
// set the series
var series_globex = chart.plot(1).ohlc(mapping_globex);
series_globex.name("Globex Corp. stock prices");
```

You can find all information about the plots in stocks in the [Chart Plot](../Chart_Plots) article.

{sample}STOCK\_OHLC\_03{sample}

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

### Coloring

 To change the default stroke colors setting use {api:anychart.core.stock.series.OHLC#fallingStroke}fallingStroke(){api} and {api:anychart.core.stock.series.OHLC#risingStroke}risingStroke(){api} methods:

```
// coloring
series_acme.fallingStroke("#663399", 1.5, "6 2", "bevel");
series_acme.risingStroke("#339999", 1.5, "6 2", "bevel");
```

{sample}STOCK\_OHLC\_04{sample}

### Hovered state

Use the {api:anychart.core.stock.Plot#dateTimeHighlighter}dateTimeHighlighter(){api} method to adjust crosshair. 

```
// highlighter (crosshair) adjusting
chart.plot(0).dateTimeHighlighter("#0000FF", 0.5);
```

{sample}STOCK\_OHLC\_05{sample} 
