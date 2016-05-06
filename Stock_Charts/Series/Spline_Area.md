# AnyStock Spline Area Series

* [Overview](#overview)
* [AnyStock Spline Area Series Adjustment](#anystock_spline_area_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Spline Area series is very similar to Area series, which is a kind of basic chart series that can be used in stocks. This series creates an area between the x-axis and the line that is formed of the data points. It is very useful in demonstrating the magnitude of change over time. For example, data that represents profit over time can be plotted in an area chart to emphasize the total profit. To know how to manage Spline Area and Area series in Basic Charts, look up the [Area Chart article](../../Basic_Chart_Types/Area_Chart).

In stock, it works the same way. It's quite a popular instrument in representing the changes in finances, sales and everything that has volume and suits for being represented as a changing volume. 

## AnyStock Spline Area Series Adjustment

First of all, let's create a stock chart that represents how the Spline Area series can behave in stocks. 

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

{sample}STOCK\_Spline\_Area\_01{sample}

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

{sample}STOCK\_Spline\_Area\_02{sample}

Despite the data in these samples is arranged differently, they both look the same. Choose the data type you prefer - it won't affect the chart performing. Though, there is a slight difference in mapping the data.

To know more about the data setting in stocks, visit [Stock Data tutorial](../Data). 

A stock can obviously have more than one series. There are two ways of creating a multi-series stock: to create several series on one chart plot or to create several plots, each holding a series (or a number of them if necessary). Using plots is quite comfortable: it looks like creating different charts, while you still have an only chart with several plots on them.

Let's create two multi-series samples demonstrating both situations.

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

In case of creating several series in one chart, we use an only dataset, but we should map the fields properly. All series belong to one plot.


For creating plots use the {api:anychart.charts.Stock#plot}.plot(){api} method. It's necessary to set the plot index as an argument to create a new or access existing plot.

```
  // set the US series
  var series_usa = chart.plot(0).splineArea(mapping_usa);
    series_usa.name("USA population growth");

  // set the UK series
  var series_uk = chart.plot(1).splineArea(mapping_uk);
    series_uk.name("UK population growth");

```

{sample}STOCK\_Spline\_Area\_04{sample}

By default, the plots are placed full-width one under another as in the sample above, but this can be adjusted. Look up the [Chart Plots article](../Chart_Plots) to know how to manage the plots.

As stocks are intended to show big arrays of data, this data needs to be compressed at some point to be displayed correctly. By default, when a number of points displayed at once overcomes 500, these points form no more than 500 points. There are two grouping types: functional and objective. All information about them can be found in the [Data Grouping](../Data_Grouping) article.


### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use *seriesType()* method.

## Visualization

There are some parameters that influences the appearance of the areas - their colors, behavior while being hovered, tooltips, etc. Let's consider those below.

### Coloring

Spline Area series in Stocks can be colored as well as any other seres . To change the default colors of the area filling and stroke use {api:anychart.core.stock.series.SplineArea#fill}.fill(){api} and {apianychart.core.stock.series.SplineArea#stroke}.stroke(){api}. Another way of highlighting the series is using hatch filling (which can be very useful in case a person with sight problems will be exploring your charts) with {api:anychart.core.stock.series.SplineArea#hatchFill}.hatchFill(){api} method. Let's change the color of one of our series and add hatch settings to another. 

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

### Hovered state

When a point is hovered, there is a crosshair being displayed over a hovered point. If several points belong to one time point, all of them are being hovered simultaneously. 

Crosshair is identified as a {api:anychart.core.stock.Plot#dateTimeHighlighter}.dateTimeHighlighter(){api}, so set its color and thickness as parameters of this method to change the defaults. Also it's possible to change the default style of a highlighter. Let's adjust the crosshair in our sample.

Note that a crosshair belongs to a chart plot, so it's possible to make a unique crosshair in every plot.

```
  // crosshair settings
  chart.plot(0).dateTimeHighlighter("#663300", 1.5, "6 2", "round");
  chart.plot(1).dateTimeHighlighter("#999", 1.5);
```

{sample}STOCK\_Spline\_Area\_06{sample}

Together with the crosshair, a tooltip of union type is shown, demonstrating values of all hovered points. 
