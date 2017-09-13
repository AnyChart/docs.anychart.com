# AnyStock Range Step Area Series

## Overview

Range Step Area Series is quite similar to [Range Area](Range_Area) series, both in visualization and purpose. It uses two values for a point, each point looks like a both-sided step, so the whole series form a polygon. Find more information about using Range Areas of different types in Basic Charts in the [Range Step Area Charts tutorial](../../Basic_Charts/Range_Step_Area_Chart).

## AnyStock Step Area Series Adjustment

### Data

The data in stocks should be formatted as a table, there are two ways of setting it: as an array of arrays or as an array of objects. 

Here is how to set data as an array of arrays, array contains values and then you map the data set to tell the component which column contains values.

```
// set the data
table = anychart.data.table();
table.addData([
    ['2004-07-01', 23.65, 23.68],
    ['2004-07-02', 23.14, 23.21],
    ['2004-07-06', 22.68, 22.71],
    ['2004-07-07', 22.41, 22.74],
    ['2004-07-08', 22.29, 22.65],
    ['2004-07-09', 22.27, 22.58]
]);
  
// map the data
mapping = table.mapAs();
mapping.addField('low', 1);
mapping.addField('high', 2);
```

{sample}STOCK\_Range\_Step\_Area\_01{sample}

The next sample demonstrates the data arranged as array of objects. 

```
// set the data
table = anychart.data.table('x');
table.addData([
    {'x': "2004-07-01", 'low': 23.65, 'high': 23.68},
    {'x': "2004-07-02", 'low': 23.14, 'high': 23.21},
    {'x': "2004-07-06", 'low': 22.68, 'high': 22.71},
    {'x': "2004-07-07", 'low': 22.41, 'high': 22.74},
    {'x': "2004-07-08", 'low': 22.29, 'high': 22.65},
    {'x': "2004-07-09", 'low': 22.27, 'high': 22.58}
]);
  
// map the data
mapping = table.mapAs({'x': 'x', 'low': 'low', 'high': 'high'});
```

{sample}STOCK\_Range\_Step\_Area\_02{sample}

You can read more about mananging Data in Stocks in the [Stock Data tutorial](../Data).

### Multi series

Simple multi-series chart:

```
// set the series
var series_ex1 = chart.plot(0).rangeStepArea(mapping_ex1);
series_ex1.name("Experiment 1");
var series_ex2 = chart.plot(0).rangeStepArea(mapping_ex2);
series_ex2.name("Experiment 2");
```

{sample}STOCK\_Range\_Step\_Area\_03{sample}

Multiple series on different plots:

```  
// set the series
var series_ex1 = chart.plot(0).rangeStepArea(mapping_ex1);
series_ex1.name("Experiment 1");
var series_ex2 = chart.plot(1).rangeStepArea(mapping_ex2);
series_ex2.name("Experiment 2");
```

{sample}STOCK\_Range\_Step\_Area\_04{sample}

More about plots can be found in the [Plots tutorial](../Chart_Plots).

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

### Coloring

To change the fill color using the {api:anychart.core.stock.scrollerSeries.RangeStepArea#fill}fill(){api} method.

To set the hatch type as a paramater of the {api:anychart.core.stock.series.StepArea#hatchFill}hatchFill(){api} method.

```
// coloring
series_ex1.fill("#f00 0.6");
series_ex2.fill("#fff");
series_ex2.hatchFill("diagonalCross");
```
{sample}STOCK\_Range\_Step\_Area\_05{sample}