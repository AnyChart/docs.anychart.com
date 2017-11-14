# AnyStock Range Column Series

* [Overview](#overview)
* [AnyStock Range Column Series Adjustment](#anystock_range_column_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Range Column series is quite similar to Basic Column Chart, which is a standard series that uses columns to show the value ranges of a parameter changing through time or to show the difference between value ranges of similar subjects in some area. For example, range column charts are widely used in meteorology, economics, etc. - everything that is or might be connected with statistics is suitable for using column series. You can find all information about creating a standard column chart in the [Range Column Chart article](../../Basic_Charts_Types/Range_Bar-Column_Charts).

In stocks, the difference is in quantity of range columns displayed at once in the chart. Stocks are intended to show how a some value changes in a longer period of time. 

## AnyStock Column Adjustment

Let's create a stock chart with Range Column series used and adjust some parameters. 

### Data

AnyStock Charts can process table-formatted data. We can arrange the data as array of arrays or as array of objects. The next two code samples contain the same data which is formatted differently.

```
	table = anychart.data.table();
	table.addData([
		['2010-01-01T12:00:00', 5.8, 7.9],
	 	['2010-02-01T12:00:00', 4.6, 6.1],
		['2010-03-01T12:00:00', 5.9, 8.1],
		['2010-04-01T12:00:00', 7.8, 10.7],
		['2010-05-01T12:00:00', 10.5, 13.7],
		['2010-06-01T12:00:00', 13.8, 17]
	]);

	mapping = table.mapAs();
	mapping.addField('low', 1);
	mapping.addField('high', 2);
```

{sample}STOCK\_Range\_Column\_01{sample}

In the code sample above the data is set as array of arrays and mapped. It's necessary to map the data, no matter how you arrange yor data.

```
	table = anychart.data.table("x");
	table.addData([
	    {"month": '2010-01-01T12:00:00', "low": 5.8, "high": 7.9},
	    {"month": '2010-02-01T12:00:00', "low": 4.6, "high": 6.1},
	    {"month": '2010-03-01T12:00:00', "low": 5.9, "high": 8.1},
	    {"month": '2010-04-01T12:00:00', "low": 7.8, "high": 10.7},
	    {"month": '2010-05-01T12:00:00', "low": 10.5, "high": 13.7},
	    {"month": '2010-06-01T12:00:00', "low": 13.8, "high": 17}
	]);

	mapping = table.mapAs({'low':"low", 'high':"high", 'value':"month"});
```

{sample}STOCK\_Range\_Column\_02{sample}

It's clearly seen there's nothing different in these samples' appearance.

More about data settings in stocks can be found in the [Stock Data tutorial](../Data). Now, let's look at some stock settings.

Of course, stock Range Column charts can contain several series. You can find how to create a multi-series Range Column chart in the [Column Chart](../../Basic_Charts_Types/Column_Chart) tutorial.

Stocks usually demonstrate a number of charts, making the stock more informative. Sometimes these series are of different types. The sample below contains two plots with column series, but it's possible to add series of other types.

For creating a new plot the {api:anychart.charts.Stock#plot}.plot(){api} method is being used. It's necessary to set the plot index as an argument to create a new or access existing plot.

```
	// set the series for London
	var series_lon = chart.plot(0).rangeColumn(mapping_lon);
	series_lon.name("Water temperature in London in 2010-2012");

	// set the series for Edinburgh
	var series_edb = chart.plot(1).rangeColumn(mapping_edb);
	series_edb.name("Water temperature in Edinburgh in 2010-2012");
```

{sample}STOCK\_Range\_Column\_03{sample}

By default, the plots are placed full-width one under another, but this can be set in other way. Look up the [Chart Plots article](../Chart_Plots) to know how to manage the plots.

As stocks are intended to show big arrays of data, this data needs to be compressed at some point to be displayed correctly. By default, when a number of points displayed at once overcomes 500, these points are being grouped to form no more than 500 points. There are two grouping types: functional and objective. All information about them can be found in the [Data Grouping](../Data_Grouping) article.

### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use {api:anychart.core.stock.series.Base#seriesType}.seriesType(){api} method.

## Visualization

There are some parameters that influences the columns' appearance - their color, behavior while being hovered or selected, tooltips, etc. Let's consider those below.

### Coloring

As in case with all basic series, Range Column series in Stocks can be colored. To change the default colors of the columns filling and stroke use {api:anychart.core.stock.series.RangeColumn#fill}.fill(){api} and {api:anychart.core.stock.series.RangeColumn#stroke}.stroke(){api}. Also it's possible to highlight a series not with a color but with a hatch filling (which can be very useful in case a person with sight problems will be exploring your charts) using {api:anychart.core.stock.series.RangeColumn#hatchFill}.hatchFill(){api} method. Let's change the color of one of our series and add hatch settings to another. The third series is left untouched to make the difference between the adjusted series and default one more notable.

```
	// australia series coloring
    series_as.fill("#CC9933");
    series_as.stroke("#663300");

    // sydney series coloring
    series_sydney.fill("#fff");
    series_sydney.hatchFill("cross");
    series_sydney.stroke("#000");
```

{sample}STOCK\_Range\_Column\_04{sample}

### Hovered state

When a point is hovered, there is a crosshair being displayed over a hovered point. If there are several points belong to one time point, all of them are being hovered simultaneously. 

Crosshair is identified as a {api:anychart.core.stock.Plot#dateTimeHighlighter}.dateTimeHighlighter(){api}, so we need to set the stroke color, thickness and style settings as parameters of this method to change the defaults. Also it's possible to make a highlighter of different style instead of a simple line. Let's adjust the crosshair in our sample.

Note that a crosshair belongs to a chart plot, so it's possible to make a crosshair of every plot unique if necessary.

```
	// crosshair settings
	chart.plot(0).dateTimeHighlighter("#663300", 1.5, "6 2", "round");
	chart.plot(1).dateTimeHighlighter("#999", 1.5);
```

{sample}STOCK\_Range\_Column\_05{sample}

Together with the crosshair, a tooltip of union type is shown, demonstrating values of all hovered points. 
