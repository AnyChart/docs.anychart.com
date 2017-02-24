# AnyStock Column Series

* [Overview](#overview)
* [AnyStock Column Adjustment](#anystock_column_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Column series is a standard series that uses columns to show the values of a parameter changing through time or to show the difference between values of similar subjects in some area. You can find all information about creating a standard column chart in the [Column Chart article](../../Basic_Charts/Column_Chart).

## AnyStock Column Adjustment

### Data

AnyStock Charts can process table-formatted data. We can arrange the data as array of arrays and as array of objects. The next two code samples contain the same data but formatted differently.

```
table = anychart.data.table();
table.addData([
  ['2015-12-24T12:00:00', 27],
  ['2015-12-25T12:00:00', 25.5],
  ['2015-12-26T12:00:00', 23.1],
  ['2015-12-27T12:00:00', 26.9],
  ['2015-12-28T12:00:00', 29.7],
  ['2015-12-29T12:00:00', 30.3],
  ['2015-12-30T12:00:00', 23.7],
  ['2015-12-31T12:00:00', 20.4],
  ['2016-01-28T12:00:00', 28.7]
]);

mapping = table.mapAs();
mapping.addField('value', 1);
```

{sample}STOCK\_Column\_01{sample}

In the code sample above the data is set as array of arrays and mapped. It's necessary to map the data whichever array type you use.

```
table = anychart.data.table('x');
table.addData([
  {"x":'2015-12-24T12:00:00', value: 27},
  {"x":'2015-12-25T12:00:00', value: 25.5},
  {"x":'2015-12-26T12:00:00', value: 23.1},
  {"x":'2015-12-27T12:00:00', value: 26.9},
  {"x":'2015-12-28T12:00:00', value: 29.7},
  {"x":'2015-12-29T12:00:00', value: 30.3},
  {"x":'2015-12-30T12:00:00', value: 23.7}
]);

mapping = table.mapAs({x:'x', value:'value'});
```

{sample}STOCK\_Column\_02{sample}

More about data settings in stocks can be found in the [Stock Data tutorial](../Data).

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

### Hovered state

Use the {api:anychart.core.stock.Plot#dateTimeHighlighter}dateTimeHighlighter(){api} method to adjust crosshair. 

```
// crosshair settings
chart.plot(0).dateTimeHighlighter("#663300", 1.5, "6 2", "round");
chart.plot(1).dateTimeHighlighter("#999", 1.5);
chart.plot(2).dateTimeHighlighter("#000066", 1.5, "7 4");
```

{sample}STOCK\_Column\_05{sample}

 
