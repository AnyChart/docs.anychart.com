# AnyStock OHLC Series

* [Overview](#overview)
* [AnyStock OHLC Series Adjustment](#anystock_ohlc_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)


## Overview

OHLC Charts, or Open-High-Low-Close, are the most poplular in finances, economics and trades, as this series use four parameters to watch the prices changing: open - the opening price of some goods or shares; high - the highest price that was reached during the day; low - the lowest price that was reached during the day; close - closing price, i.e. the price of the goods or shares at the moment of the period finishes. Read more about Basic OHLC Charts in the [OHLC Chart article](../../Basic_Charts_Types/OHLC_Chart).

This series type is often used in stocks. This article will help you to adjust some settings of OHLC Charts in Stocks.


## AnyStock OHLC Series Adjustment

Before looking at some parameters that are specifically adjusted in stocks, let's consider the data setting.


### Data

The data in stocks shall be represented in table format. There are two ways how to arrange the data: as array of array or as array of objects. Let's now create a couple of samples with the same data but different ways of its arranging. This will help to understand the principles data arranging.

```
	// set the data
	table = anychart.data.table("x");
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

This sample had its data arranged as an array of objects. It's necessary to define the fields' names in the data table, despite later this data will be mapped. Also we have to define the name of the X-Axis variable to the {api:anychart.data#table}.table(){api} method.

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
	series.name("ACME Corp. stock prices (apr 2015 - jul 2015)");
```

{sample}STOCK\_OHLC\_01{sample}

As in case with the most of the basic charts, OHLC Stocks can contain several series. In creating multi-series stock, there are two options as well: we can create several series in one plot or create several plots and distribute the series between them. A tutorial about creating a multi-series OHLC Chart can be found [here](../../Basic_Charts_Types/OHLC_Chart).

Plots are something like frames in the chart, that let us to display several series in one chart without them crossing each other. You can find all information about the plots in stocks in the [Chart Plot](../Chart_Plots) article. Now, let's create a sample with two plots each holding a series.

```
	// set the series
	var series_acme = chart.plot(0).ohlc(mapping_acme);
	series_acme.name("ACME Corp. stock prices (apr 2015 - jul 2015)");
	// set the series
	var series_globex = chart.plot(1).ohlc(mapping_globex);
	series_globex.name("Globex Corp. stock prices (apr 2015 - jul 2015)");
```

{sample}STOCK\_OHLC\_03{sample}


### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use *seriesType()* method.


## Visualization

There are some parameters responsible for the stock appearance, managing its colors and behavior. Let's now talk about them.


### Coloring

Colors are a good help in emphasizing some important moments in the data. OHLC charts have no filling colors as they use only lines for representing the data, but there is a stroke parameter. To change the default stroke colors setting use {api:anychart.core.stock.series.OHLC#fallingStroke}.fallingStroke(){api} and {api:anychart.core.stock.series.OHLC#risingStroke}.risingStroke(){api} methods for changing the colors of the falling and the rising. It's possible to change the line style as well using the same method.

More about visualization and colors find in the [OHLC Charts](../../Basic_Charts_Types/OHLC_Chart#visualization) article.

Let's change the defaults for one of the series in the previous sample.

```
	// coloring
    series_acme.fallingStroke("#663399", 1.5, "6 2", "bevel");
    series_acme.risingStroke("#339999", 1.5, "6 2", "bevel");
```

{sample}STOCK\_OHLC\_04{sample}

### Hovered state

When a point is hovered, stock behaves differently from basic charts. A point is highlighted with a crosshair instead of different color. A crosshair, which is identified as {api:anychart.core.stock.Plot#dateTimeHighlighter}.dateTimeHighlighter(){api}, can be adjusted: it's possible to change its color, thickness, dash pattern, line joining type and line cap - the same params that both stroke types have. Look through the API to know more. Let's edit the highlighter of the upper plot.

```
	// highlighter (crosshair) adjusting
    chart.plot(0).dateTimeHighlighter("#0000FF", 0.5);
```

{sample}STOCK\_OHLC\_05{sample}

Together with the crosshair, a tooltip of union type is shown, demonstrating values of all hovered points. 
