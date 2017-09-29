# AnyStock Range Column Series

## Overview

Range Column series is quite similar to Basic [Column Chart](Column). You can find all information about creating a standard column chart in the [Range Column Chart article](../../Basic_Charts/Range_Column_Chart).

## AnyStock Column Adjustment

### Data

The data in stocks should be formatted as a table, there are two ways of setting it: as an array of arrays or as an array of objects. 

Here is how to set data as an array of arrays, array contains values and then you map the data set to tell the component which column contains values.

```
table = anychart.data.table();
table.addData([
	['2010-01-01', 5.8, 7.9],
	['2010-02-01', 4.6, 6.1],
	['2010-03-01', 5.9, 8.1],
	['2010-04-01', 7.8, 10.7],
	['2010-05-01', 10.5, 13.7],
	['2010-06-01', 13.8, 17]
]);

mapping = table.mapAs();
mapping.addField('low', 1);
mapping.addField('high', 2);
```

{sample}STOCK\_Range\_Column\_01{sample}

The next sample contains the same data arranged as array of objects.

```
table = anychart.data.table('x');
table.addData([
	{x: '2010-01-01', low: 5.8,  high: 7.9},
	{x: '2010-02-01', low: 4.6,  high: 6.1},
	{x: '2010-03-01', low: 5.9,  high: 8.1},
	{x: '2010-04-01', low: 7.8,  high: 10.7},
	{x: '2010-05-01', low: 10.5, high: 13.7},
	{x: '2010-06-01', low: 13.8, high: 17}
]);

mapping = table.mapAs({low: 'low', high: 'high'});
```

{sample}STOCK\_Range\_Column\_02{sample}

More about data settings in stocks can be found in the [Stock Data tutorial](../Data). Now, let's look at some stock settings.

### Multi series

Multiple series on different plots:

```
// set the series for London
var series_lon = chart.plot(0).rangeColumn(mapping_lon);
series_lon.name("Water temperature in London in 2010-2012");

// set the series for Edinburgh
var series_edb = chart.plot(1).rangeColumn(mapping_edb);
series_edb.name("Water temperature in Edinburgh in 2010-2012");
```

{sample}STOCK\_Range\_Column\_03{sample}

See the [Chart Plots article](../Chart_Plots) to know how to manage the plots.

As stocks are intended to show large amounts of data, this data needs to be compressed at some point to be displayed correctly. All information about them can be found in the [Data Grouping](../Data_Grouping) article.

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

##  Appearance

To change the fill and stroke use {api:anychart.core.stock.series.RangeColumn#fill}fill(){api} and {api:anychart.core.stock.series.RangeColumn#stroke}stroke(){api}. Also it's possible to highlight a series not with a color but with a hatch fill using {api:anychart.core.stock.series.RangeColumn#hatchFill}hatchFill(){api} method. 

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