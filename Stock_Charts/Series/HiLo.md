# AnyStock HiLo Series

## Overview

HiLo series is a kind of basic chart series that can be used in stocks. To know how to manage HiLo series, see the [HiLo Chart article](../../Basic_Charts/HiLo_Chart).

## AnyStock HiLo Series Adjustment

### Data

The data in stocks should be formatted as a table, there are two ways of setting it: as an array of arrays or as an array of objects. 

Here is how to set data as an array of arrays, array contains values and then you map the data set to tell the component which column contains values.

```
// set the data
table = anychart.data.table();
table.addData([
    ['2016-04-01', 19.36, 18.18],
    ['2016-04-02', 19.89, 19.00],
    ['2016-04-03', 19.15, 18.43],
    ['2016-04-06', 18.76, 18.27],
    ['2016-04-07', 19.14, 18.63],
    ['2016-04-08', 19.62, 18.96]
]);
    
// map the data
mapping = table.mapAs();
mapping.addField('high', 1);
mapping.addField('low', 2);
```

{sample}STOCK\_HiLo\_01{sample}

The next sample contains the same data arranged as array of objects.

```
// set the data
table = anychart.data.table('x');
table.addData([
    {x: '2016-04-01', h: 19.36, l: 18.18},
    {x: '2016-04-02', h: 19.89, l: 19.00},
    {x: '2016-04-03', h: 19.15, l: 18.43},
    {x: '2016-04-06', h: 18.76, l: 18.27},
    {x: '2016-04-07', h: 19.14, l: 18.63},
    {x: '2016-04-08', h: 19.62, l: 18.96}
]);
    
// map the data
mapping = table.mapAs({high:'h', low:'l'});
```

{sample}STOCK\_HiLo\_02{sample}

To know more about the data setting in stocks, visit [Stock Data tutorial](../Data). 

### Multi series

Basic multiple-series chart:

```
// map the data
mapping_acme = table.mapAs();
mapping_acme.addField('high', 1);
mapping_acme.addField('low', 2);

mapping_globex = table.mapAs();
mapping_globex.addField('high', 3);
mapping_globex.addField('low', 4);

// set the ACME series
var series_acme = chart.plot(0).hilo(mapping_acme);
series_acme.name("ACME Corp. stock prices");

// set the Globex series
var series_globex = chart.plot(0).hilo(mapping_globex);
series_globex.name("Globex Corp. stock prices");
```

{sample}STOCK\_HiLo\_03{sample}

Multiple series on different plots:

```
// set the ACME series
var series_acme = chart.plot(0).hilo(mapping_acme);
series_acme.name("ACME Corp. stock prices");

// set the Globex series
var series_globex = chart.plot(1).hilo(mapping_globex);
series_globex.name("Globex Corp. stock prices");
```

{sample}STOCK\_HiLo\_04{sample}

See the [Chart Plots article](../Chart_Plots) to know how to manage the plots.

As stocks are intended to show large amounts of data, this data needs to be compressed at some point to be displayed correctly. All information about them can be found in the [Data Grouping](../Data_Grouping) article.

### Switching series type

You can change the type of the series to another compatible type. See the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series).

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

##  Appearance

To change the default colors of the HiLo stroke use {api:anychart.core.stock.series.Hilo#stroke}stroke(){api} method.

```
// set the ACME series
var series_acme = chart.plot(0).hilo(mapping_acme);
series_acme.name("ACME Corp. stock prices");

// coloring
series_acme.stroke("#00cc99", 1.5);

// set the Globex series
var series_globex = chart.plot(1).hilo(mapping_globex);
series_globex.name("Globex Corp. stock prices");

// coloring
series_globex.stroke("#0066cc", 1.5);
```

{sample}STOCK\_HiLo\_05{sample}
 
