# AnyStock Column Series

* [Overview](#overview)
* [AnyStock Column Adjustment](#anystock_column_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Column series is a standard series that uses columns to show the values of a parameter changing through time or to show the difference between values of similar subjects in some area. For example, column charts are widely used in meteorology, economics, etc. - everything that is or might be connected with statistics is suitable for using column series. You can find all information about creating a standard column chart in the [Column Chart article](../../Basic_Charts_Types/Column_Chart).

In stocks, the difference is in quantity of columns displayed at once in the chart. Stocks are intended to show how a some value changes in time. 

## AnyStock Column Adjustment

Let's create a stock chart with column series used and adjust some parameters. 

### Data

AnyStock Charts can process table-formatted data. We can arrange the data as array of arrays and as array of objects. The next two code samples contain the same data but formatted differently.

```
    table = anychart.data.table();
    table.addData([
        ['2015-12-24T12:00:00', 27],
        ['2015-12-25T12:00:00', 25.5],
        ['2015-12-26T12:00:00', 23.1],
        ['2015-12-27T12:00:00', 26.9],
        ['2015-12-28T12:00:00', 29.7],
        ['2015-12-29T12:00:00', 30.3],
        ['2015-12-30T12:00:00', 23.7],
        ['2015-12-31T12:00:00', 20.4],
       	['2016-01-28T12:00:00', 28.7]
    ]);

    mapping = table.mapAs();
    mapping.addField('value', 1);
```

{sample}STOCK\_Column\_01{sample}

In the code sample above the data is set as array of arrays and mapped. It's necessary to map the data whichever array type you use.

```
    table = anychart.data.table("x");
    table.addData([
      {"x":'2015-12-24T12:00:00', value: 27},
      {"x":'2015-12-25T12:00:00', value: 25.5},
      {"x":'2015-12-26T12:00:00', value: 23.1},
      {"x":'2015-12-27T12:00:00', value: 26.9},
      {"x":'2015-12-28T12:00:00', value: 29.7},
      {"x":'2015-12-29T12:00:00', value: 30.3},
      {"x":'2015-12-30T12:00:00', value: 23.7}
    ]);

    mapping = table.mapAs({'x':"x", 'value':"value"});
```

{sample}STOCK\_Column\_02{sample}

It's clearly seen there's nothing different in these samples appearance.

More about data settings in stocks can be found in the [Stock Data tutorial](../Data). Now, let's look at some stock settings.

Of course, stock column charts can contain several series. You can find how to create a multi-series Column chart in the [Column Chart](../../Basic_Charts_Types/Column_Chart) tutorial.

Stocks usually demonstrate a number of charts, making the stock more informative. Sometimes these series are of different types. The sample below contains two plots with column series, but it's possible to add series of other types.

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
    series_sydney.stroke("#000");
```

{sample}STOCK\_Column\_04{sample}

### Hovered state

When a point is hovered, there is a crosshair being displayed over a hovered point. If there are several points belong to one time point, all of them are being hovered simultaneously. 

Crosshair is identified as a {api:anychart.core.stock.Plot#dateTimeHighlighter}.dateTimeHighlighter(){api}, so we need to set the stroke color, thickness and style settings as parameters of this method to change the defaults. Also it's possible to make a highlighter of different style instead of a simple line. Let's adjust the crosshair in our sample.

Note that a crosshair belongs to a chart plot, so it's possible to make a crosshair of every plot unique if necessary.

```
  	// crosshair settings
    chart.plot(0).dateTimeHighlighter("#663300", 1.5, "6 2", "round");
    chart.plot(1).dateTimeHighlighter("#999", 1.5);
    chart.plot(2).dateTimeHighlighter("#000066", 1.5, "7 4");
```

{sample}STOCK\_Column\_05{sample}

Together with the crosshair, a tooltip of union type is shown, demonstrating values of all hovered points. 
