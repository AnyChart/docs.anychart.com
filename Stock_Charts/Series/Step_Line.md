# AnyStock Step Line Series

* [Overview](#overview)
* [AnyStock Step Line Series Adjustment](#anystock_step_line_series_adjustment)
 * [Data](#data)
 * [Multi-series](#multi_series)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Step Line Series is usually used to show how a parameter changes its value in time or in dependancy of some other parameter which values are used as categories (e.g. branches of a company). It is rather similar to Line Series. Find all information about using Step Lines in Basic Charts in the [StepLine Charts tutorial](../../Basic_Chart_Types/Line-Spline-StepLine_Charts).

This series type is popular to be used in Stocks, as well as Line series. There are some aspects different between managing StepLines in Basic Charts and in Stocks. This article will consider those aspects.

## AnyStock Step Line Series Adjustment

The first difference between Basic Charts and Stocks is the data defining. 

### Data 

The Data in Stocks should be represented in table format and arranged as array of arrays or objects. Look at the next two samples: they demonstrate the same data differently arranged.

```
// set the data
table = anychart.data.table();
table.addData([
	['2004-01-02', 29955800],
	['2004-01-05', 38892100],
	['2004-01-06', 43684400],
	['2004-01-07', 48757500],
	['2004-01-08', 61683300],
	['2004-01-09', 68856400],
	['2004-01-12', 52871900],
	['2004-01-13', 56334200]
]);

// map the data
mapping = table.mapAs();
mapping.addField('value', 1);
```

{sample}STOCK\_Step\_Line\_01{sample}


```
// set the data
table = anychart.data.table("x");
table.addData([
	{'x':"2004-01-02", 'value': 29955800},
	{'x':"2004-01-05", 'value': 38892100},
	{'x':"2004-01-06", 'value': 43684400},
	{'x':"2004-01-07", 'value': 48757500},
	{'x':"2004-01-08", 'value': 61683300},
	{'x':"2004-01-09", 'value': 68856400},
	{'x':"2004-01-12", 'value': 52871900},
	{'x':"2004-01-13", 'value': 56334200}
]);

// map the data
mapping = table.mapAs({'x': 'x', 'value': 'value'});	
```

{sample}STOCK\_Step\_Line\_02{sample}

It's clear that there is no difference between those samples. So, you are free to choose how you will arrange your data. You can read more about mananging Data in Stocks in the [Stock Data tutorial](../Data).

### Multi-series

Stocks are often used to show several parameters changing, so it's possible to create a multi-series chart. There are two ways as well. First is to create several series in one plot, so the steplines will be able to cross each ohter; the second one is to create several plots and distribute the series among them. Let's consider both ways.

This sample shows a simple multi-series Step Line stock. 

```  
// set the series
var series_total = chart.plot(0).stepLine(mapping_total);
series_total.name("Total Request Number");
var series_region = chart.plot(0).stepLine(mapping_region);
series_region.name("Region Request Number");
```

{sample}STOCK\_Step\_Line\_03{sample}

This sample is a great demonstration of the series managing failure. Now look at the next sample, where the same series are put in the different plots.

```  
// set the series
var series_total = chart.plot(0).stepLine(mapping_total);
series_total.name("Total Request Number");
var series_region = chart.plot(1).stepLine(mapping_region);
series_region.name("Region Request Number");
```

{sample}STOCK\_Step\_Line\_04{sample}

Note that the only thing you need to do to put a series in a new plot is to set the new plot ID as a parameter of the {api:anychart.charts.Stock#plot}plot(){api} method.
More about plots can be found in the [Plots tutorial](../Chart_Plots).

### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

When a series used in Stocks, there are some visualization settings are being managed differently from the same ones in Basic Charts. These settings are considered in this paragraph.

### Coloring

Color scheme makes your chart unique and helps to distinguish the series. For all Line-type series there are no filling colors, but we can change the stroke color using the {api:anychart.core.stock.series.StepLine#stroke}stroke(){api} method.

```
// coloring
series_totals.stroke("#ff0000");
```

{sample}STOCK\_Step\_Line\_05{sample}

### Hovered state

Points hovering in stocks differs from what it looks like in Basic Charts. In Stocks, when a point is hovered, there's a crosshair highlights it. You can adjust the crosshair (or highlighter) using the {api:anychart.core.stock.Plot#dateTimeHighlighter}dateTimeHighlighter(){api} method. A highlighter (or a crosshair) is held by a plot, so it's possible to make all highlighters different of edit only one of them. Its parameters are color, thickness, dashPattern, lineJoin and lineCap, though it's not necessary to define them all.

```
// crosshair adjusting
chart.plot(0).dateTimeHighlighter("green", 0.5, "10 4");
```

{sample}STOCK\_Step\_Line\_06{sample}