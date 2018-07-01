# AnyStock Spline Area Series

## Overview

Spline Area series is very similar to [Area series](Area). To know how to manage Spline Area and Area series in Basic Charts, see the [Area Chart article](../../Basic_Charts/Area_Chart).
 
## AnyStock Spline Area Series Adjustment

### Data

The data in stocks should be formatted as a table, there are two ways of setting it: as an array of arrays or as an array of objects. 

Here is how to set data as an array of arrays, array contains values and then you map the data set to tell the component which column contains values.

```
// set the data
table = anychart.data.table();
table.addData([
    ['1990-01-01', 248709873],
    ['1995-01-01', 272119084],
    ['2000-01-01', 281421906],
    ['2005-01-01', 299456285],
    ['2010-01-01', 308745538],
    ['2015-01-01', 318914629]
]);
  
// map the data
mapping = table.mapAs();
mapping.addField('value', 1);
```

{sample}STOCK\_Spline\_Area\_01{sample}

The next sample demonstrates the data arranged as array of objects. 

```
// set the data
table = anychart.data.table('x');
table.addData([
    {x:'1990-01-01', value: 248709873},
    {x:'1995-01-01', value: 272119084},
    {x:'2000-01-01', value: 281421906},
    {x:'2005-01-01', value: 299456285},
    {x:'2010-01-01', value: 308745538},
    {x:'2015-01-01', value: 318914629}
]);
  
// map the data
mapping = table.mapAs({x:'x', value:'value'});
```

{sample}STOCK\_Spline\_Area\_02{sample}

To know more about the data setting in stocks see [Stock Data tutorial](../Data). 

### Multi series

Simple multi-series chart:

```
// map the data
mapping_usa = table.mapAs();
mapping_usa.addField('value', 1);
mapping_uk = table.mapAs();
mapping_uk.addField('value', 2);

// set the US series
var series_usa = chart.plot(0).splineArea(mapping_usa);
series_usa.name("USA population growth");

// set the UK series
var series_uk = chart.plot(0).splineArea(mapping_uk);
series_uk.name("UK population growth");
```

{sample}STOCK\_Spline\_Area\_03{sample}

Multiple series on different plots:

```
// set the US series
var series_usa = chart.plot(0).splineArea(mapping_usa);
series_usa.name("USA population growth");

// set the UK series
var series_uk = chart.plot(1).splineArea(mapping_uk);
series_uk.name("UK population growth");
```

{sample}STOCK\_Spline\_Area\_04{sample}

See the [Chart Plots article](../Chart_Plots) to know how to manage plots.

As stocks are intended to show large amounts of data, this data needs to be compressed at some point to be displayed correctly. All information about them can be found in the [Data Grouping](../Data_Grouping) article.

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

##  Appearance

To change the default colors of the area fill and stroke use {api:anychart.core.stock.series.SplineArea#fill}fill(){api} and {apianychart.core.stock.series.SplineArea#stroke}stroke(){api}. 

Use the {api:anychart.core.stock.series.SplineArea#hatchFill}hatchFill(){api} method to change hatch fill.

```
// coloring
series_usa.fill("#CC9933");
series_usa.stroke("#FFCC33")

// set the UK series
var series_uk = chart.plot(1).splineArea(mapping_uk);
series_uk.name("UK population growth");

// hatch fill
series_uk.hatchFill("diagonalCross");
```

{sample}STOCK\_Spline\_Area\_05{sample}