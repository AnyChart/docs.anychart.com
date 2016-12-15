# AnyStock JumpLine Series

* [Overview](#overview)
* [AnyStock JumpLine Series Adjustment](#anystock_jumpline_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

JumpLine Series are quite alike Column or StepLine Series, but the difference is in points view: while the points of Column Series are columns, the points of Line Series are simple points connected with line segments, the JumpLine Series uses line segments of the value height - like columns with no width. Read more about JumpLine Series in the [JumpLine Series tutorial](../../Basic_Chart_Types/JumpLine_Chart).

The main difference between basic JumpLine Series and JumpLine Series in Stocks is in amount of information displayed. Stocks are intended to show bigger amount of information than basic charts, so some features are different due to this reason. Let's now consider using JumpLine Series in Stocks.

## AnyStock JumpLine Series Adjustment

Before considering the series in stocks, it's necessary to add some data. 
 
### Data

The data in stocks should be formatted as table, though there are two ways of setting it: as array of arrays or as array of objects. Using the first way, you define the values only and then map the dataSet. In the second case you need to name each value and then map the dataSet as well. Let's create two samples with the same data differently arranged.

```
// set the data
table = anychart.data.table();
table.addData([
    ['2004-01-02', 29955800],
    ['2004-01-05', 38892100],
    ['2004-01-06', 43684400],
    ['2004-01-07', 48757500]
]);

// map the data
mapping = table.mapAs();
mapping.addField('value', 1);
```

{sample}STOCK\_JumpLine\_01{sample}

In the sample above we arranged data as an array of arrays. The next sample contains the same data, but this time it's arranged as an array of objects.

```
// set the data
table = anychart.data.table("x");
table.addData([
    {'x':"2004-01-02", 'value': 29955800},
    {'x':"2004-01-05", 'value': 38892100},
    {'x':"2004-01-06", 'value': 43684400},
    {'x':"2004-01-07", 'value': 48757500},
]);

// map the data
mapping = table.mapAs({'x': 'x', 'value': 'value'});
```

{sample}STOCK\_JumpLine\_02{sample}

It's rather clear that there's no difference in both samples, so there's no matter for your stock appearance which data type you choose - it depends only on your preferences. Find more about setting and arranging data in Stocks in the [Stocks Data tutorial](../Data).

A stock can contain several series. There are also two ways of creating a multi-series stock: creating several series in one plot or creating several plots with a series (or several series again) in each. Let's create a sample with several series belong to one plot and another sample demonstrating a multi-plot stock. 

```
// set the series
var series_total = chart.plot(0).jumpLine(mapping_total);
series_total.name("Total Request number");
var series_region = chart.plot(0).jumpLine(mapping_region);
series_region.name("Region Request Number");
```

{sample}STOCK\_JumpLine\_03{sample}

It's quite clear that it's not a good idea to combine series describing even similar parameters changes, but in such different value ranges. In situations like this it's much better to use plots. Plots are AnyStock features of a very good help when we've got several series like two of them above which values correspond to the same X-axis categories.

To create a new plot, use the {api:anychart.charts.Stock#plot}plot(){api} method. Don't forget to set the plot index (basically, its number) as an argument for this method.

```
// set the series
var series_total = chart.plot(0).jumpLine(mapping_total);
series_total.name("Total Request number");
var series_region = chart.plot(1).jumpLine(mapping_region);
series_region.name("Region Request Number");
```

{sample}STOCK\_JumpLine\_04{sample}

Note that the only difference here with the previous sample is in setting another plot ID.

Read more about plots in the [Plots tutorial](../Chart_Plots).

### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.

## Visualization

There are some visual parameters of the JumpLine series, such as color, stroke width, line style and other. This paragraph helps to consider those.

### Coloring

JumpLine has no fill due to series specifics. To set the stroke color for the series use {api:anychart.core.stock.series.Line#stroke}stroke(){api} with a color set as a parameter.

```
// coloring
series_total.stroke("#ff0000");
```

{sample}STOCK\_JumpLine\_05{sample}

### Hovered state

When you hover a point in a stock chart, there's a crosshair shows up, highlighting the hovered point. This can be adjusted as well using the {api:anychart.core.stock.Plot#dateTimeHighlighter}dateTimeHighlighter(){api} method. A highlighter (or a crosshair) is held to a plot, so it's possible to make all highlighters different of edit only one of them. Its parameters are color, thickness, dashPattern, lineJoin and lineCap, though it's not necessary to define them all.

```
// crosshair adjusting
chart.plot(0).dateTimeHighlighter("green", 0.5, "10 4");
```

{sample}STOCK\_JumpLine\_06{sample}