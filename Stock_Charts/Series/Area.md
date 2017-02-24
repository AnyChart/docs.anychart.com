# AnyStock Area Series

* [Overview](#overview)
* [AnyStock Area Series Adjustment](#anystock_area_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Area series is a kind of basic chart series that can be used in stocks. To know how to manage Area series in see the [Area Chart article](../../Basic_Charts/Area_Chart).

## AnyStock Area Series Adjustment

### Data

Data in stocks should be set in the table format. It can be arranged in two ways: as array of arrays and as array of objects. Let's create two samples demonstrating the same data that will be arranged differently.

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

{sample}STOCK\_Area\_01{sample}

The sample above demonstrates how a stock looks with its data arranged as an array of arrays. The next sample contains the same data arranged as array of objects.

```
// set the data
table = anychart.data.table('x');
table.addData([
    {x: '1990-01-01', value: 248709873},
    {x: '1995-01-01', value: 272119084},
    {x: '2000-01-01', value: 281421906},
    {x: '2005-01-01', value: 299456285},
    {x: '2010-01-01', value: 308745538},
    {x: '2015-01-01', value: 318914629}
]);
    
// map the data
mapping = table.mapAs({x:'x', value:'value'});
```

{sample}STOCK\_Area\_02{sample}

To know more about the data setting in stocks, visit [Stock Data tutorial](../Data). 

Basic multi-series chart:

```
// map the data
mapping_usa = table.mapAs();
mapping_usa.addField('value', 1);
mapping_uk = table.mapAs();
mapping_uk.addField('value', 2);

// set the US series
var series_usa = chart.plot(0).area(mapping_usa);
series_usa.name("USA");

// set the UK series
var series_uk = chart.plot(0).area(mapping_uk);
series_uk.name("UK");
```

{sample}STOCK\_Area\_03{sample}

Multiple series on different plots:

```
// set the US series
var series_usa = chart.plot(0).area(mapping_usa);
series_usa.name("USA");

// set the UK series
var series_uk = chart.plot(1).area(mapping_uk);
series_uk.name("UK");
```

{sample}STOCK\_Area\_04{sample}

See the [Chart Plots article](../Chart_Plots) to know how to manage the plots.

As stocks are intended to show large amounts of data, this data needs to be compressed at some point to be displayed correctly. All information about them can be found in the [Data Grouping](../Data_Grouping) article.

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization


### Coloring

To change the default colors of the area fill and stroke use {api:anychart.core.stock.series.Area#fill}fill(){api} and {api:anychart.core.stock.series.Area#stroke}stroke(){api} methods.

To set hatch fill use the {api:anychart.core.stock.series.Area#hatchFill}hatchFill(){api} method.

```
// coloring
series_usa.fill("#CC9933");
series_usa.stroke("#FFCC33")

// set the UK series
var series_uk = chart.plot(1).area(mapping_uk);
series_uk.name("UK");

// hatch fill
series_uk.hatchFill("diagonalCross");
```

{sample}STOCK\_Area\_05{sample}

### Hovered state

WUse the {api:anychart.core.stock.Plot#dateTimeHighlighter}dateTimeHighlighter(){api} method to adjust crosshair. 

```
// crosshair settings
chart.plot(0).dateTimeHighlighter("#663300", 1.5, "6 2", "round");
chart.plot(1).dateTimeHighlighter("#999", 1.5);
```

{sample}STOCK\_Area\_06{sample}

 
