# AnyStock Line Series

* [Overview](#overview)
* [AnyStock Line Series Adjustment](#anystock_line_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Line Series is usually used to show a some parameter changing in time or in dependency of some other changing parameter or categories, which values are used as values on X-axis. Lines are popular in describing statistical information, such as birth rates, currency rates changing, temperature and so on. Read more about Line Series in the [Line Series tutorial](../../Basic_Charts_Types/Line-Spline-StepLine_Charts).

The main difference between usual Line Series and Line Series in Stocks is in amount of information displayed. Stocks are intended to show far much more information than basic charts, so some features are different due to this reason. Let's now consider using Lines in Stocks.

## AnyStock Line Series Adjustment

Before looking at some methods in stocks, it's necessary to add some data. 
 
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
    table = anychart.data.table("x");
    table.addData([
        {'x':"2016-01-01T12:00:00", 'value': 1.0860},
        {'x':"2016-01-04T12:00:00", 'value': 1.0832},
        {'x':"2016-01-05T12:00:00", 'value': 1.0780},
        {'x':"2016-01-06T12:00:00", 'value': 1.0781},
        {'x':"2016-01-07T12:00:00", 'value': 1.0936},
        {'x':"2016-01-08T12:00:00", 'value': 1.0932},
    ]);
    
    // map the data
    mapping = table.mapAs({'x': 'x', 'value': 'value'});

```

{sample}STOCK\_Line\_02{sample}

It's rather clear that there's no difference in both samples, so there's no matter for your stock appearance which data type you choose - it depends only on your preferences. Find more about setting and arranging data in Stocks in the [Stocks Data tutorial](../Data).

A stock can contain several series. There are also two ways of creating a multi-series stock: creating several series in one plot or creating several plots with a series (or several series again) in each. Let's create a sample with several series belong to one plot and another sample demonstrating a multi-plot stock. You can find more about multi-series Line charts in the [Line Chart](../../Basic_Charts_Types/Line-Spline-StepLine_Charts) tutorial.


```
    // set the series
    var series_euro = chart.plot(0).line(mapping_euro);
    series_euro.name("Euro to Dollar Rate");
    var series_rub = chart.plot(0).line(mapping_rub);
    series_rub.name("Euro to Dollar Rate");
```

{sample}STOCK\_Line\_03{sample}

It's quite clear that it's not a good idea to combine series describing even similar parameters changes, but in such different value ranges. In situations like this it's much better to use plots. Plots are AnyStock features of a very good help when we've got several series like two of them above which values correspond to the same X-axis categories.

To create a new plot, use the {api:anychart.charts.Stock#plot}.plot(){api} method. Don't forget to set the plot index (basically, its number) as an argument for this method.


```
    // set the series
    var series_euro = chart.plot(0).line(mapping_euro);
    series_euro.name("Euro to Dollar Rate");
    var series_rub = chart.plot(1).line(mapping_rub);
    series_rub.name("Euro to Dollar Rate");
```

{sample}STOCK\_Line\_04{sample}

Note that the only difference here with the previous sample is in setting another plot ID.

Read more about plots in the [Plots tutorial](../Chart_Plots).


### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use *seriesType()* method.


## Visualization

There are some visual parameters of the Line series, such as color, stroke width, line style and other. Look through the next paragraph to get acknowledged with those and how to manage them.

### Coloring

In Lines, there's no filling colors due to chart specifics. To set the stroke color for the line series use {api:anychart.core.stock.series.Line#stroke}.stroke(){api} with a color set as a parameter.

```
	 // coloring
	 series_euro.stroke("#ff0000");
```

{sample}STOCK\_Line\_05{sample}


### Hovered state

When you hover a point in a stock chart, there's a crosshair shows up, highlighting the hovered point. This can be adjusted as well using the {api:anychart.core.stock.Plot#dateTimeHighlighter}.dateTimeHighlighter(){api} method. A highlighter (or a crosshair) is held to a plot, so it's possible to make all highlighters different of edit only one of them. Its parameters are color, thickness, dashPattern, lineJoin and lineCap, though it's not necessary to define them all.

```
	 // crosshair adjusting
	 chart.plot(0).dateTimeHighlighter("green", 0.5, "10 4");
```

{sample}STOCK\_Line\_06{sample}