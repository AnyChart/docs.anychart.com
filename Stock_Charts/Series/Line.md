# AnyStock Line Series

* [Overview](#overview)
* [AnyStock Line Series Adjustment](#anystock_line_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Line Series is usually used to show a some parameter changing in time or in dependency of some other changing parameter or categories, which values are used as values on X-axis. Read more about Line Series in the [Line Series tutorial](../../Basic_Charts/Line_Chart).

## AnyStock Line Series Adjustment
 
### Data

The data in stocks should be table-formatted, though there are two ways of setting it: as array of arrays or as array of objects. Using the first way, you define the values only and then map the dataSet. In the second case you need to name each value and then map the dataSet as well. Let's create two samples with the same data differently arranged.

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

{sample}STOCK\_Line\_01{sample}

In the sample above we arranged data as an array of arrays. The next sample contains the same data, but this time it's arranged as an array of objects.

```
// set the data
table = anychart.data.table('x');
table.addData([
    {'x':"2016-01-01T12:00:00", 'value': 1.0860},
    {'x':"2016-01-04T12:00:00", 'value': 1.0832},
    {'x':"2016-01-05T12:00:00", 'value': 1.0780},
    {'x':"2016-01-06T12:00:00", 'value': 1.0781},
    {'x':"2016-01-07T12:00:00", 'value': 1.0936},
    {'x':"2016-01-08T12:00:00", 'value': 1.0932},
]);

// map the data
mapping = table.mapAs({x: 'x', value: 'value'});

```

{sample}STOCK\_Line\_02{sample}

Find more about setting and arranging data in Stocks in the [Stocks Data tutorial](../Data).

Simple multi-series chart:

```
// set the series
var series_euro = chart.plot(0).line(mapping_euro);
series_euro.name("Euro to Dollar Rate");
var series_rub = chart.plot(0).line(mapping_rub);
series_rub.name("Rub to Dollar Rate");
```

{sample}STOCK\_Line\_03{sample}

Multiple series on different plots:

```
// set the series
var series_euro = chart.plot(0).line(mapping_euro);
series_euro.name("Euro to Dollar Rate");

var series_rub = chart.plot(1).line(mapping_rub);
series_rub.name("Rub to Dollar Rate");
```

{sample}STOCK\_Line\_04{sample}

Read more about plots in the [Plots tutorial](../Chart_Plots).

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

### Coloring

To set the stroke color for the line series use {api:anychart.core.stock.series.Line#stroke}stroke(){api}.

```
// coloring
series_euro.stroke("#ff0000");
```

{sample}STOCK\_Line\_05{sample}

### Hovered state

Use the {api:anychart.core.stock.Plot#dateTimeHighlighter}dateTimeHighlighter(){api} method to adjust crosshair. 

```
// crosshair settings
chart.plot(0).dateTimeHighlighter("green", 0.5, "10 4");
```

{sample}STOCK\_Line\_06{sample}