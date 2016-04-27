# AnyStock Area Series

* [Overview](#overview)
* [AnyStock Area Series Adjustment](#anystock_area_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)
  * [Tooltips](#tooltips)

## Overview

Area series is a kind of basic chart series that can be used in stocks. This series creates an area between the x-axis and the line that is formed of the data points. It is very useful in demonstrating the magnitude of change over time. For example, data that represents profit over time can be plotted in an area chart to emphasize the total profit.

In stock, it works the same way. It's quite a popular instrument in representing the changes in finances, sales and everything that has volume and suits for being represented as a changing volume. 

## AnyStock Area Series Adjustment

First of all, let's create a stock chart that represents how an area series can behave in stocks. 

### Data

Data in stocks should be set in the table format. It can be arranged in two ways: as array of arrays and as array of objects. Let's create two samples demonstrating the same data that will be arranged differently.

```
// set the data
  table = anychart.data.table();
  table.addData([
        ['1990', 248709873],
        ['1995', 272119084],
        ['2000', 281421906],
        ['2005', 299456285],
        ['2010', 308745538],
        ['2015', 318914629]
  ]);
  
  // map the data
  mapping = table.mapAs();
  mapping.addField('value', 1);
```

{sample}STOCK\_Area\_01{sample}

```
// set the data
  table = anychart.data.table("x");
  table.addData([
        {x:'1990', value:248709873},
        {x:'1995', value:272119084},
        {x:'2000', value:281421906},
        {x:'2005', value:299456285},
        {x:'2010', value:308745538},
        {x:'2015', value:318914629}
  ]);
  
  // map the data
  mapping = table.mapAs({'x':"x", 'value':"value"});

```

{sample}STOCK\_Area\_02{sample}

Despite the data in these samples is arranged differently, they both look the same. Choose the data type you prefer - it won't affect the chart performing.

To know more about the data types, visit [Stock Data tutorial](../Data). 

--PLOTS--


### Switching series type

In AnyStock, it's possible to switch the series type in a moment by using the {api}.seriesType(){api} method. Though, you need to be aware if those series you'd like to switch can be switched to each other; look up the [series types table](Supported_Series#list_of_supported_series) to be sure that both series have the same fields so there would be no pro

