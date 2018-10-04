# AnyStock Step Line Series

## Overview

Step Line Series is rather similar to [Line Series](Line). Find all information about using Step Lines in the [Step Line Chart tutorial](../../Basic_Charts/Step_Line_Chart).

## AnyStock Step Line Series Adjustment

### Data 

The data in stocks should be formatted as a table, there are two ways of setting it: as an array of arrays or as an array of objects. 

Here is how to set data as an array of arrays, array contains values and then you map the data set to tell the component which column contains values.

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
table = anychart.data.table('x');
table.addData([
	{'x':'2004-01-02', 'value': 29955800},
	{'x':'2004-01-05', 'value': 38892100},
	{'x':'2004-01-06', 'value': 43684400},
	{'x':'2004-01-07', 'value': 48757500},
	{'x':'2004-01-08', 'value': 61683300},
	{'x':'2004-01-09', 'value': 68856400},
	{'x':'2004-01-12', 'value': 52871900},
	{'x':'2004-01-13', 'value': 56334200}
]);

// map the data
mapping = table.mapAs({x: 'x', value: 'value'});	
```

{sample}STOCK\_Step\_Line\_02{sample}

You can read more about managing Data in Stocks in the [Stock Data tutorial](../Data).

### Multi series

This sample shows a simple multiple-series Step Line stock. 

```  
// set the series
var series_total = chart.plot(0).stepLine(mapping_total);
series_total.name("Total Request Number");
var series_region = chart.plot(0).stepLine(mapping_region);
series_region.name("Region Request Number");
```

{sample}STOCK\_Step\_Line\_03{sample}

Now look at the next sample, where the series are put in the different plots.

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

You can change the type of series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

##  Appearance

To change the stroke color use the {api:anychart.core.stock.series.StepLine#stroke}stroke(){api} method.

```
// coloring
series_total.stroke("#ff0000");
```

{sample}STOCK\_Step\_Line\_05{sample}