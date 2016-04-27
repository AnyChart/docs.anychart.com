# AnyStock Area Series

* [Overview](#overview)
* [AnyStock Area Series Adjustment](#anystock_area_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Area series is a kind of basic chart series that can be used in stocks. This series creates an area between the x-axis and the line that is formed of the data points. It is very useful in demonstrating the magnitude of change over time. For example, data that represents profit over time can be plotted in an area chart to emphasize the total profit. To know how to manage Area series in Basic Charts, look up the [Area Chart article](../../Basic_Chart_Types/Area_Chart).

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

The sample above demonstrates how a stock looks with its data arranged as an array of arrays. The next sample contains the same data arranged as array of objects.

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

Despite the data in these samples is arranged differently, they both look the same. Choose the data type you prefer - it won't affect the chart performing. Though, there is a slight difference in mapping the data.

To know more about the data setting in stocks, visit [Stock Data tutorial](../Data). 

A stock can obviously have more than one series. There are two ways of creating a multi-series stock: to create several series on one chart plot or to create several plots, each holding a series (or a number of them if necessary). Using plots is quite comfortable: it looks like creating different charts, while you still have an only chart with several plots on them.


For creating a new plot the {api:anychart.charts.Stock#plot}.plot(){api} method is being used. It's necessary to set the plot index as an argument to create a new or access existing plot.

```
// series of the first plot
var series_as = chart.plot(0).column(mapping_as);
series_as.name("Temperature in Alice's Springs");

// series of the second plot
var series_sydney = chart.plot(1).column(mapping_sydney);
series_sydney.name("Temperature in Sydney");
```

{sample}STOCK\_Column\_03{sample}

By default, the plots are placed full-width one under another, but this can be set in other way. Look up the [Chart Plots article](../Chart_Plots) to know how to manage the plots.

As stocks are intended to show big arrays of data, this data needs to be compressed at some point to be displayed correctly. By default, when a number of points displayed at once overcomes 500, these points are being grouped to form no more than 500 points. There are two grouping types: functional and objective. All information about them can be found in the [Data Grouping](../Data_Grouping) article.


### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use *seriesType()* method.

## Visualization

There are some parameters that influences the columns' appearance - their color, behavior while being hovered or selected, tooltips, etc. Let's consider those below.

### Coloring

As in case with all basic series, Column series in Stocks can be colored. To change the default colors of the columns filling and stroke use {api:anychart.core.stock.series.Column#fill}.fill(){api} and {api:anychart.core.stock.series.Column#stroke}.stroke(){api}. Also it's possible to highlight a series not with a color but with a hatch filling (which can be very useful in case a person with sight problems will be exploring your charts) using {api:anychart.core.stock.series.Column#hatchFill}.hatchFill(){api} method. Let's change the color of one of our series and add hatch settings to another. The third series is left untouched to make the difference between the adjusted series and default one more notable.

```
  // australia series coloring
    series_as.fill("#CC9933");
    series_as.stroke("#663300");

    // sydney series coloring
    series_sydney.fill("#fff");
    series_sydney.hatchFill("cross");
```

{sample}STOCK\_Column\_04{sample}

### Hovered state

When a point is hovered, there is a crosshair being displayed over a hovered point. If there are several points belong to one time point, all of them are being hovered simultaneously. 

Crosshair is identified as a {api:anychart.core.stock.Plot#dateTimeHighlighter}.dateTimeHighlighter(){api}, so to change its color and thickness use {api}.stroke(){api} and {api}.thickness(){api}. Also it's possible to make a highlighter of different style instead of a simple line. Let's adjust the crosshair in our sample.

Note that a crosshair belongs to a chart plot, so it's possible to make a crosshair of every plot unique if necessary.

```
  // crosshair settings
  chart.plot(0).dateTimeHighlighter("#663300", 1.5, "6 2", "round");
  chart.plot(1).dateTimeHighlighter("#999", 1.5);
  chart.plot(2).dateTimeHighlighter("#000066", 1.5, "7 4");
```

{sample}STOCK\_Column\_05{sample}

Together with the crosshair, a tooltip of union type is shown, demonstrating values of all hovered points. 
