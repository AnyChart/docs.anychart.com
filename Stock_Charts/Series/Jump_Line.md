# AnyStock JumpLine Series

## Overview

JumpLine Series are quite alike [Column](Column) or [Step Line](Step_Line) Series but the JumpLine Series uses line segments like stepline with no vertical lines. Read more about Jump Line Series in the [Jump Line Series tutorial](../../Basic_Charts/Jump_Line_Chart).

## AnyStock Jump Line Series Adjustment
 
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
    ['2004-01-07', 48757500]
]);

// map the data
mapping = table.mapAs();
mapping.addField('value', 1);
```

{sample}STOCK\_Jump\_Line\_01{sample}

The next sample contains the same data arranged as array of objects.

```
// set the data
table = anychart.data.table("x");
table.addData([
    {'x':"2004-01-02", 'value': 29955800},
    {'x':"2004-01-05", 'value': 38892100},
    {'x':"2004-01-06", 'value': 43684400},
    {'x':"2004-01-07", 'value': 48757500},
]);

// map the data
mapping = table.mapAs({'x': 'x', 'value': 'value'});
```

{sample}STOCK\_Jump\_Line\_02{sample}

Find more about setting and arranging data in Stocks in the [Stocks Data tutorial](../Data).

### Multi series

Simple multi-series chart: 

```
// set the series
var series_total = chart.plot(0).jumpLine(mapping_total);
series_total.name("Total Request number");
var series_region = chart.plot(0).jumpLine(mapping_region);
series_region.name("Region Request Number");
```

{sample}STOCK\_Jump\_Line\_03{sample}

Multiple series on different plots:

```
// set the series
var series_total = chart.plot(0).jumpLine(mapping_total);
series_total.name("Total Request number");
var series_region = chart.plot(1).jumpLine(mapping_region);
series_region.name("Region Request Number");
```

{sample}STOCK\_Jump\_Line\_04{sample}

Note that the only difference here with the previous sample is in setting another plot ID.

Read more about plots in the [Plots tutorial](../Chart_Plots).

### Switching series type

You can change the type of series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure series are compatible.

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

##  Appearance

To set the stroke color for the series use {api:anychart.core.stock.series.Line#stroke}stroke(){api} with a color set as a parameter.

```
// coloring
series_total.stroke("#ff0000");
```

{sample}STOCK\_Jump\_Line\_05{sample}