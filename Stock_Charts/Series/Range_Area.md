# AnyStock Range Area Series

## Overview

Range Area demonstrates how a range of some object's volume changes in time or during some process. There are two values to be set for this series: low and high. Find more about this series type in [Range Area Chart](../../Basic_Charts/Range_Area_Chart).

See also: [Range Spline Area](Range_Spline_Area).

## AnyStock Range Area Series Adjustment

### Data

The data in stocks should be formatted as a table, there are two ways of setting it: as an array of arrays or as an array of objects. 

Here is how to set data as an array of arrays, array contains values and then you map the data set to tell the component which column contains values.

```
// set the data
table = anychart.data.table();
table.addData([
    ['2000-01-01', 2, 6],
    ['2000-02-01', 2, 7],
    ['2000-03-01', 3, 10],
    ['2000-04-01', 5, 13],
    ['2000-05-01', 8, 17],
    ['2000-06-01', 11, 20],
    ['2000-07-01', 13, 22],
    ['2000-08-01', 13, 21],
    ['2000-09-01', 11, 19],
    ['2000-10-01', 8, 14],
    ['2000-11-01', 5, 10],
    ['2000-12-01', 5, 7]
]);
  
// map the data
mapping = table.mapAs();
mapping.addField('low', 1);
mapping.addField('high', 2);

// chart type
chart = anychart.stock();

// set the series
var series = chart.plot(0).rangeArea(mapping);
series.name("Temperature Range");
```

{sample}STOCK\_Range\_Area\_01{sample}

The next sample demonstrates the data arranged as array of objects.

```
// set the data
table = anychart.data.table('x');
table.addData([
    {x: '2000-01-01', low: 2, high: 6},
    {x: '2000-02-01', low: 2, high: 7},
    {x: '2000-03-01', low: 3, high: 10},
    {x: '2000-04-01', low: 5, high: 13},
    {x: '2000-05-01', low: 8, high: 17},
    {x: '2000-06-01', low: 11, high: 20},
    {x: '2000-07-01', low: 13, high: 22},
    {x: '2000-08-01', low: 13, high: 21},
    {x: '2000-09-01', low: 11, high: 19},
    {x: '2000-10-01', low: 8, high: 14},
    {x: '2000-11-01', low: 5, high: 10},
    {x: '2000-12-01', low: 5, high: 7}
]);
  
// map the data
mapping = table.mapAs({x:'x', high:'high', low: 'low'});

// chart type
chart = anychart.stock();

// set the series
var series = chart.plot(0).rangeArea(mapping);
series.name("Temperature Range");
```

{sample}STOCK\_Range\_Area\_02{sample}

### Multi series

Simple multi-series chart:

```
// set the data
table = anychart.data.table();
table.addData([
    ['2000-01-01', 2, 6, -3, 4],
    ['2000-02-01', 2, 7, -2, 5],
    ['2000-03-01', 3, 10, 2, 10],
    ['2000-04-01', 5, 13, 7, 16],
    ['2000-05-01', 8, 17, 12, 22]
]);
  
// map the data
mapping_lon = table.mapAs();
mapping_lon.addField('low', 1);
mapping_lon.addField('high', 2);
mapping_ny = table.mapAs();
mapping_ny.addField('low', 3);
mapping_ny.addField('high', 4);

// chart type
chart = anychart.stock();

// set the series
var series_lon = chart.plot(0).rangeArea(mapping_lon);
series_lon.name("Temperature Range (London 2000-2004)");

// set the series
var series_ny = chart.plot(0).rangeArea(mapping_ny);
series_ny.name("Temperature Range (New York 2000-2004)");
```

{sample}STOCK\_Range\_Area\_03{sample}

Multiple series in different plots:

```
// set the series
var series_lon = chart.plot(0).rangeArea(mapping_lon);
series_lon.name("Temperature Range (London 2000-2004)");

// set the series
var series_ny = chart.plot(1).rangeArea(mapping_ny);
series_ny.name("Temperature Range (New York 2000-2004)");
```

{sample}STOCK\_Range\_Area\_04{sample}

You can find all information about plots in the [Plot tutorial](../Chart_Plots).

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

##  Appearance

Use {api:anychart.core.stock.series.RangeArea#fill}fill(){api} to changing the fill color:

```
// set the colors
series_lon.fill("#FFCC99 0.5");
series_ny.fill("#33CCCC 0.5");
```

{sample}STOCK\_Range\_Area\_05{sample}

Use the {api:anychart.core.stock.series.RangeArea#hatchFill}hatchFill(){api} to set the hatch fill.

```
// set the colors
series_lon.fill("#fff 0.5");
series_ny.fill("#fff 0.5");
// set hatch fill
series_lon.hatchFill("horizontalBrick");
series_ny.hatchFill("confetti");
```

{sample}STOCK\_Range\_Area\_06{sample}