# AnyStock Spline Series

## Overview

Spline Series is rather similar to Basic [Line series](Line) in its appearance, behavior and use: it is intended to show how a value of some object changes in time. The only difference is that Spline series uses splines of some curvature instead of straight segments, so the spline looks more smooth.

Read more about Basic Spline in the [Spline Chart article](../../Basic_Charts/Spline_Chart).

## AnyStock Spline Series Adjustment

### Data 

The data in stocks should be formatted as a table, there are two ways of setting it: as an array of arrays or as an array of objects. 

Here is how to set data as an array of arrays, array contains values and then you map the data set to tell the component which column contains values.

```
// set the data
table = anychart.data.table('x');
table.addData([
    {x: '2016-01-01', value: 1.0860},
    {x: '2016-01-04', value: 1.0832},
    {x: '2016-01-05', value: 1.0780},
    {x: '2016-01-06', value: 1.0781},
    {x: '2016-01-07', value: 1.0936},
    {x: '2016-01-08', value: 1.0932},
]);
  
// map the data
mapping = table.mapAs({x: 'x', value: 'value'});
```

{sample}STOCK\_Spline\_01{sample}

```
// set the data
table = anychart.data.table();
table.addData([
    ['2016-01-01', 1.0860],
    ['2016-01-04', 1.0832],
    ['2016-01-05', 1.0780],
    ['2016-01-06', 1.0781],
    ['2016-01-07', 1.0936],
    ['2016-01-08', 1.0932]
]);
  
// map the data
mapping = table.mapAs();
mapping.addField('value', 1);
```

{sample}STOCK\_Spline\_02{sample}

You are free to choose how you will arrange your data. You can read more about mananging Data in Stocks in the [Stock Data tutorial](../Data).

### Multi series

This sample shows a simple multiple-series Spline stock. 

```  
// set the series
var series_euro = chart.plot(0).spline(mapping_euro);
series_euro.name("Euro to Dollar Rate");
var series_rub = chart.plot(0).spline(mapping_rub);
series_rub.name("Euro to Dollar Rate");
```

{sample}STOCK\_Spline\_03{sample}

Now look at the next sample, where the same series are put in the different plots.

```  
// set the series
var series_euro = chart.plot(0).spline(mapping_euro);
series_euro.name("Euro to Dollar Rate");
var series_rub = chart.plot(1).spline(mapping_rub);
series_rub.name("Euro to Dollar Rate");
```

{sample}STOCK\_Spline\_04{sample}

Note that the only thing you need to do to put a series in a new plot is to set the new plot ID as a parameter of the {api:anychart.charts.Stock#plot}plot(){api} method.

More about plots can be found in the [Plots tutorial](../Chart_Plots).

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

##  Appearance

To change the stroke color use the {api:anychart.core.stock.series.Spline#stroke}stroke(){api} method.

```
// coloring
series_euro.stroke("#ff0000");
```
{sample}STOCK\_Spline\_05{sample}