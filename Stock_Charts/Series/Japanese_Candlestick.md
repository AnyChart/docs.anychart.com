# AnyStock Candlestick Series

* [Overview](#overview)
* [AnyStock Candlestick Series Adjustment](#anystock_candlestick_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Candlestick Charts are often used for representing changes of prices. This series uses four parameters, as OHLC charts: Open, High, Low and Close. Those params describe the price at the moment of the period starts ("open"), the highest value the prices reached during the period ("high"), the lowest value the price came to during the period ("low") and the price at the moment of the period ends ("close").

Candlestick are very popular series to be used in stocks as well. The amount of data used in stocks influences some of the settings and behavior of the series, which are going to be explored and explained in this article.

## AnyStock Candlestick Series Adjustment

In stocks, there are several parameters that are different from the basic charts. In this article we will consider them in general.

### Data

Data in stocks should be defined as table. There are two ways of data arranging: as array of objects and as array of arrays. Below you can find two samples with the same data but different types of this data arranged. The first sample demonstrates the view of the stock with the data arranged as array of objects. The second one shows a stock which data is an array of arrays.

```
	    // set the data
    table = anychart.data.table("x");
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
    series.name("ACME Corp. stock prices (apr 2015 - jul 2015)");
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
    series.name("ACME Corp. stock prices (apr 2015 - jul 2015)");
```

{sample}STOCK\_Candlestick\_02{sample}

You can easily notice that there is no difference in both stocks performing. So, choose the data type you prefer to work with, as it has nothing to do with the stocks view.

It's possible to create a multi-series stock. It can be reached through two ways as well: we can create a chart with several series in one chart (plot) or create several plots and distribute the series among them. Let's use our previous sample: add the data for the second series and look how stock will look like.

```
// set the series for ACME
    var series_acme = chart.plot(0).candlestick(mapping_acme);
    series_acme.name("ACME Corp. stock prices (jan 2004 - mar 2004)");

    // set the series for Globex
    var series_globex = chart.plot(0).candlestick(mapping_globex);
    series_globex.name("Globex Corp. stock prices (jan 2004 - mar 2004)");
```

{sample}STOCK\_Candlestick\_03{sample}

It's obvious that this information in a stock is rather hard to understand. Let's look how adding a plot can help in this situation.

```
// set the series for ACME
    var series_acme = chart.plot(0).candlestick(mapping_acme);
    series_acme.name("ACME Corp. stock prices (jan 2004 - mar 2004)");

    // set the series for Globex
    var series_globex = chart.plot(1).candlestick(mapping_globex);
    series_globex.name("Globex Corp. stock prices (jan 2004 - mar 2004)");
```

{sample}STOCK\_Candlestick\_04{sample}

So, plots are a kind of chart frames that allow to show several series with completely different range of values, making the information clear for the auditorium.  

Find more information about using plots in stocks in the [Chat Plots](../Chart_Plots)(article).


### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use *seriesType()* method.


## Visualization

There are some settings that form the stock appearance, managing its colors and behavior. Let's now talk about them.

### Coloring

Coloring series can help you to stress some changes in the watched values. As there are "falling" and "rising" candlesticks, there are also two methods for filling and stroking the data points: {api:anychart.core.stock.series.Candlestick#fallingStroke}.fallingStroke(){api} and {api:anychart.core.stock.series.Candlestick#risingStroke}.risingStroke(){api} are used to change the default stroking colors and {api:anychart.core.stock.series.Candlestick#fallingFill}.fallingFill(){api} and {api:anychart.core.stock.series.Candlestick#risingFill}.risingFill(){api}.

AnyStocks also have a Hatch feature that would be quite useful for people with some sight problems. Use hatch fillings for a Candlestick stock with the {api:anychart.core.stock.series.Candlestick#fallingHatchFill}.fallingHatchFill(){api} and {api:anychart.core.stock.series.Candlestick#risingHatchFill}.risingHatchFill(){api} methods.

More about visualization and colors can be found in the [OHLC Charts](../../Basic_Charts_Types/OHLC_Chart#visualization) article.

Let's change the defaults for one of the series in the previous sample.

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

When a point is hovered, stock behaves differently from basic charts. A point is highlighted with a crosshair instead of different color. A crosshair, which is identified as {api:anychart.core.stock.Plot#dateTimeHighlighter}.dateTimeHighlighter(){api}, can be adjusted: it's possible to change its color, thickness, dash pattern, line joining type and line cap - the same params that both stroke types have. Look through the API to know more. Let's edit the highlighter of the lower plot.

```
	// highlighter (crosshair) adjusting
    chart.plot(1).dateTimeHighlighter("#0000FF", 0.5);
```

{sample}STOCK\_Candlestick\_06{sample}

Together with the crosshair, a tooltip of union type is shown, demonstrating values of all hovered points. 
