# AnyStock Spline Series

* [Overview](#overview)
* [AnyStock Spline Series Adjustment](#anystock_spline_series_adjustment)
 * [Data](#data)
 * [Multi-series](#multi_series)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Spline Series is rather similar to Basic Line series in its appearance, behavior and use: it is intended to show how a value of some object changes in time. The only difference is that Spline series uses splines of some curvature instead of straight segments, so the spline looks more smooth.

This series type is used in Stocks quite often, as well as Line series. There are some aspects different between managing Splines in Basic Charts and in Stocks. This article will help to figure it out how to work with Splines in Stocks.

## AnyStock Spline Series Adjustment

The first difference between Basic Charts and Stocks is the data defining. 

### Data 

The Data in Stocks should be represented in table format and arranged as array of arrays or objects. Look at the next two samples: they display the same data, but in the first sample the data is set as array of objects, while the second sample demonstrates this data as array of arrays.

```
	// set the data
	table = anychart.data.table("x");
	table.addData([
        {'x':"2016-01-01T12:00:00", 'value': 1.0860},
        {'x':"2016-01-04T12:00:00", 'value': 1.0832},
        {'x':"2016-01-05T12:00:00", 'value': 1.0780},
        {'x':"2016-01-06T12:00:00", 'value': 1.0781},
        {'x':"2016-01-07T12:00:00", 'value': 1.0936},
        {'x':"2016-01-08T12:00:00", 'value': 1.0932},
	]);
  
	// map the data
	mapping = table.mapAs({'x': 'x', 'value': 'value'});

```

{sample}STOCK\_Spline\_01{sample}


```
	// set the data
	table = anychart.data.table();
	table.addData([
        ['2016-01-01T12:00:00', 1.0860],
        ['2016-01-04T12:00:00', 1.0832],
        ['2016-01-05T12:00:00', 1.0780],
        ['2016-01-06T12:00:00', 1.0781],
        ['2016-01-07T12:00:00', 1.0936],
        ['2016-01-08T12:00:00', 1.0932]
	]);
  
	// map the data
	mapping = table.mapAs();
	mapping.addField('value', 1);
```

{sample}STOCK\_Spline\_02{sample}

It's clear that there is no difference between those samples. So, you are free to choose how you will arrange your data. You can read more about mananging Data in Stocks in the [Stock Data tutorial](../Data).

### Multi-series

Stocks are often used to show several parameters changing, so it's possible to create a multi-series chart. There are two ways as well. First is to create several series in one plot, so the splines will be able to cross each ohter; the second one is to create several plots and distribute the series among them. Let's consider both ways.

This sample shows a simple multi-series Spline stock. 

```  
	// set the series
	var series_euro = chart.plot(0).spline(mapping_euro);
	series_euro.name("Euro to Dollar Rate");
	var series_rub = chart.plot(0).spline(mapping_rub);
    series_rub.name("Euro to Dollar Rate");
```

{sample}STOCK\_Spline\_03{sample}

This sample is a great demonstration of the series managing failure. Now look at the next sample, where the same series are put in the different plots.

```  
	// set the series
	var series_euro = chart.plot(0).spline(mapping_euro);
	series_euro.name("Euro to Dollar Rate");
	var series_rub = chart.plot(1).spline(mapping_rub);
    series_rub.name("Euro to Dollar Rate");
```

{sample}STOCK\_Spline\_04{sample}

Note that the only thing you need to do to put a series in a new plot is to set the new plot ID as a parameter of the {api:anychart.charts.Stock#plot}.plot(){api} method.
More about plots can be found in the [Plots tutorial](../Chart_Plots).


### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use {api:anychart.core.stock.series.Base#seriesType}.seriesType(){api} method.


## Visualization

There are some settings about visualization that should be treated a bit differently from the same settings in Basic Charts. The following samples will demonstrate how to adjust them in Stocks.

### Coloring

Colors help to distinguish the series one from another and makes your chart look unique. There are no filling colors because of specifics of the series, so we can change the stroke color using the {api:anychart.core.stock.series.Spline#stroke}{api} method.

```
	// coloring
	series_euro.stroke("#ff0000");
```
{sample}STOCK\_Spline\_05{sample}

### Hovered state

When you hover a point in a stock chart, there's a crosshair shows up, highlighting the hovered point. This can be adjusted as well using the {api:anychart.core.stock.Plot#dateTimeHighlighter}.dateTimeHighlighter(){api} method. A highlighter (or a crosshair) is held to a plot, so it's possible to make all highlighters different of edit only one of them. Its parameters are color, thickness, dashPattern, lineJoin and lineCap, though it's not necessary to define them all.

```
	// crosshair adjusting
	chart.plot(0).dateTimeHighlighter("green", 0.5, "10 4");
```

{sample}STOCK\_Spline\_06{sample}