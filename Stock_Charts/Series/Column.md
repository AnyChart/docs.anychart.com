# AnyStock Column Series

## Overview

Column series is a standard series that uses columns to show the values of a parameter changing through time or to show the difference between values of similar subjects in some area. You can find all information about creating a standard column chart in the [Column Chart article](../../Basic_Charts/Column_Chart).

## AnyStock Column Adjustment

### Data

The data in stocks should be formatted as a table, there are two ways of setting it: as an array of arrays or as an array of objects. 

Here is how to set data as an array of arrays, array contains values and then you map the data set to tell the component which column contains values.

```
table = anychart.data.table();
table.addData([
  ['2015-12-24', 27],
  ['2015-12-25', 25.5],
  ['2015-12-26', 23.1],
  ['2015-12-27', 26.9],
  ['2015-12-28', 29.7],
  ['2015-12-29', 30.3],
  ['2015-12-30', 23.7],
  ['2015-12-31', 20.4],
  ['2016-01-28', 28.7]
]);

mapping = table.mapAs();
mapping.addField('value', 1);
```

{sample}STOCK\_Column\_01{sample}

The next sample contains the same data arranged as array of objects.

```
table = anychart.data.table('x');
table.addData([
  {"x":'2015-12-24', value: 27},
  {"x":'2015-12-25', value: 25.5},
  {"x":'2015-12-26', value: 23.1},
  {"x":'2015-12-27', value: 26.9},
  {"x":'2015-12-28', value: 29.7},
  {"x":'2015-12-29', value: 30.3},
  {"x":'2015-12-30', value: 23.7}
]);

mapping = table.mapAs({x:'x', value:'value'});
```

{sample}STOCK\_Column\_02{sample}

More about data settings in stocks can be found in the [Stock Data tutorial](../Data).

### Multi series

Multiple series on different plots:

```
// series of the first plot
var series_as = chart.plot(0).column(mapping_as);
series_as.name("Alice's Springs");

// series of the second plot
var series_sydney = chart.plot(1).column(mapping_sydney);
series_sydney.name("Sydney");
```

{sample}STOCK\_Column\_03{sample}

See the [Chart Plots article](../Chart_Plots) to know how to manage the plots.

As stocks are intended to show large amounts of data, this data needs to be compressed at some point to be displayed correctly. All information about them can be found in the [Data Grouping](../Data_Grouping) article.

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

### Coloring

To change the default colors of the columns fill and stroke use {api:anychart.core.stock.series.Column#fill}fill(){api} and {api:anychart.core.stock.series.Column#stroke}stroke(){api}. 

Use the {api:anychart.core.stock.series.Column#hatchFill}hatchFill(){api} method to change the hatch fill.

```
// australia series coloring
series_as.fill("#CC9933");
series_as.stroke("#663300");

// sydney series coloring
series_sydney.fill("#fff");
series_sydney.hatchFill("cross");
series_sydney.stroke("#000");
```

{sample}STOCK\_Column\_04{sample}