# AnyStock Candlestick Series

* [Overview](#overview)
* [AnyStock Candlestick Series Adjustment](#anystock_candlestick_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Candlestick Charts are to representing changes of stock prices. This series has four data fields (as [OHLC]() charts): Open, High, Low and Close. Those params describe the price at the moment of the period starts ("open"), the highest value the prices reached during the period ("high"), the lowest value the price came to during the period ("low") and the price at the moment of the period ends ("close").

## AnyStock Candlestick Series Adjustment

### Data

Data in stocks should be defined as table. There are two ways of data arranging: as array of objects and as array of arrays. Below you can find two samples with the same data but different types of this data arranged. The first sample demonstrates the view of the stock with the data arranged as array of objects. The second one shows a stock which data is an array of arrays.

```
// set the data
table = anychart.data.table('x');
table.addData([
    {'x': '2004-01-02', 'o': 92.86, 'h': 93.05, 'l': 91.20, 'c': 91.55},
    {'x': '2004-01-05', 'o': 92.00, 'h': 93.09, 'l': 92.00, 'c': 93.05},
    {'x': '2004-01-06', 'o': 92.20, 'h': 93.19, 'l': 92.14, 'c': 93.06},
    {'x': '2004-01-07', 'o': 93.14, 'h': 93.38, 'l': 92.47, 'c': 92.78},
    {'x': '2004-01-08', 'o': 93.21, 'h': 93.21, 'l': 92.03, 'c': 93.04}
]);
  
// map the data
mapping = table.mapAs({'open':"o",'high': "h", 'low':"l", 'close':"c"});
chart = anychart.stock();

// set the series
var series = chart.plot(0).candlestick(mapping);
series.name("ACME Corp.");
```

{sample}STOCK\_Candlestick\_01{sample}

```
// set the data
table = anychart.data.table();
table.addData([
    ['2004-01-02', 92.86, 93.05, 91.20, 91.55, 5327800],
    ['2004-01-05', 92.00, 93.09, 92.00, 93.05, 5276300],
    ['2004-01-06', 92.20, 93.19, 92.14, 93.06, 4380000],
    ['2004-01-07', 93.14, 93.38, 92.47, 92.78, 4927600],
    ['2004-01-08', 93.21, 93.21, 92.03, 93.04, 6179800]
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
var series = chart.plot(0).candlestick(mapping);
series.name("ACME Corp.");
```

{sample}STOCK\_Candlestick\_02{sample}

Simple multi-series chart:

```
// set the series for ACME
var series_acme = chart.plot(0).candlestick(mapping_acme);
series_acme.name("ACME Corp.");

// set the series for Globex
var series_globex = chart.plot(0).candlestick(mapping_globex);
series_globex.name("Globex Corp.");
```

{sample}STOCK\_Candlestick\_03{sample}

Multiple series on different plots:

```
// set the series for ACME
var series_acme = chart.plot(0).candlestick(mapping_acme);
series_acme.name("ACME Corp.");

// set the series for Globex
var series_globex = chart.plot(1).candlestick(mapping_globex);
series_globex.name("Globex Corp.");
```

{sample}STOCK\_Candlestick\_04{sample}

Find more information about using plots in stocks in the [Chart Plots](../Chart_Plots) article.

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

### Coloring

There are "falling" and "rising" candlesticks, fill and stroke for them is set using these methods:
- {api:anychart.core.stock.series.Candlestick#fallingStroke}fallingStroke(){api},
- {api:anychart.core.stock.series.Candlestick#risingStroke}risingStroke(){api},
- {api:anychart.core.stock.series.Candlestick#fallingFill}fallingFill(){api},
- {api:anychart.core.stock.series.Candlestick#risingFill}risingFill(){api}.

To set hatch fill for a Candlestick use:
- {api:anychart.core.stock.series.Candlestick#fallingHatchFill}fallingHatchFill(){api},
- {api:anychart.core.stock.series.Candlestick#risingHatchFill}risingHatchFill(){api} methods.

```
// set the custom colors for Globex series
series_globex.risingStroke("#336666");
series_globex.risingFill("#339999");
series_globex.fallingStroke("#660000");
series_globex.fallingFill("#990033");

// set the custom hatch fillings for ACME series
series_acme.risingHatchFill("backwardDiagonal", "#000", 2);
series_acme.fallingHatchFill("forwardDiagonal", "#000", 2);
series_acme.risingFill("#fff");
series_acme.fallingFill("#fff");
series_acme.risingStroke("#000");
series_acme.fallingStroke("#000");
```

{sample}STOCK\_Candlestick\_05{sample}

### Hovered state

Use the {api:anychart.core.stock.Plot#dateTimeHighlighter}dateTimeHighlighter(){api} method to adjust crosshair. 

```
// highlighter (crosshair) adjusting
chart.plot(1).dateTimeHighlighter("#0000FF", 0.5);
```

{sample}STOCK\_Candlestick\_06{sample}

 
