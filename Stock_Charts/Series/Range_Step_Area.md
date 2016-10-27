# AnyStock Range Step Area Series

* [Overview](#overview)
* [AnyStock Range Step Area Series Adjustment](#anystock_range_step_area_series_adjustment)
 * [Data](#data)
 * [Multi-series](#multi_series)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Range Step Area Series is quite similar to Range Area series, both in visualization and purpose. It uses two values for a point, each point looks like a both-sided step, so the whole series form a polygon. Find more information about using Range Areas of different types in Basic Charts in the [Range Step Area Charts tutorial](../../Basic_Charts_Types/Range_Area-SplineArea_Charts).

There are some settings differently managed when we use Range Step Area in Stocks, so let's look at them in this article.

## AnyStock Step Area Series Adjustment

The first difference between Basic Charts and Stocks comes when we start talking about the data.

### Data

When we set the data for the Range Step Area series in Stocks, we need to set it in table format, arranged as array of arrays or array of objects. Look through the next two samples: they both display the same data, but in the first one it is arranged as array of arrays.

```
// set the data
table = anychart.data.table();
table.addData([
    ['2004-07-01', 23.65, 23.68],
    ['2004-07-02', 23.14, 23.21],
    ['2004-07-06', 22.68, 22.71],
    ['2004-07-07', 22.41, 22.74],
    ['2004-07-08', 22.29, 22.65],
    ['2004-07-09', 22.27, 22.58]
]);
  
// map the data
mapping = table.mapAs();
mapping.addField('low', 1);
mapping.addField('high', 2);
```

{sample}STOCK\_Range\_Step\_Area\_01{sample}

```
// set the data
table = anychart.data.table("x");
table.addData([
    {'x': "2004-07-01", 'low': 23.65, 'high': 23.68},
    {'x': "2004-07-02", 'low': 23.14, 'high': 23.21},
    {'x': "2004-07-06", 'low': 22.68, 'high': 22.71},
    {'x': "2004-07-07", 'low': 22.41, 'high': 22.74},
    {'x': "2004-07-08", 'low': 22.29, 'high': 22.65},
    {'x': "2004-07-09", 'low': 22.27, 'high': 22.58}
]);
  
// map the data
mapping = table.mapAs({'x': 'x', 'low': 'low', 'high': 'high'});
```

{sample}STOCK\_Range\_Step\_Area\_02{sample}

Note that there is no visible changes in the samples. So, you are free to arrange your data the most suitable way. You can read more about mananging Data in Stocks in the [Stock Data tutorial](../Data).

### Multi-series

A Stock Chart can be multi-serial. Though, it's necessary to take into account the range of different series' values. Look at the next sample.

```
// set the series
var series_ex1 = chart.plot(0).rangeStepArea(mapping_ex1);
series_ex1.name("Experiment 1");
var series_ex2 = chart.plot(0).rangeStepArea(mapping_ex2);
series_ex2.name("Experiment 2");
```

{sample}STOCK\_Range\_Step\_Area\_03{sample}

There are two series in one chart, but the second series looks like a line. It becomes so because of different value ranges. While the first series' values are counted in million, the second series' values are counted in thousands. In this case these series need to be separated. If it's necessary to keep them in one chart, the best solution is to create the second plot for the second series.

```  
// set the series
var series_ex1 = chart.plot(0).rangeStepArea(mapping_ex1);
series_ex1.name("Experiment 1");
var series_ex2 = chart.plot(1).rangeStepArea(mapping_ex2);
series_ex2.name("Experiment 2");
```

{sample}STOCK\_Range\_Step\_Area\_04{sample}

The difference in the code is in a single parameter, means the plot ID, but the difference in the data visualization is spectacular. More about plots can be found in the [Plots tutorial](../Chart_Plots).


### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use {api:anychart.core.stock.series.Base#seriesType}seriesType(){api} method.


## Visualization

There are some visualization settings managing in Stocks differ from these settings managing in Basic Chart. Let's look at them.

### Coloring

Color scheme makes your chart unique and helps to distinguish the series. It's possible to change the fill color using the {api:anychart.core.stock.scrollerSeries.RangeStepArea#fill}fill(){api} method.

Also, it's possible to set the hatch coloring in case of your Stock Charts being used by people with sight problems. Set the hatch type as a paramater of the {api:anychart.core.stock.series.StepArea#hatchFill}hatchFill(){api} method.

```
// coloring
series_ex1.fill("#f00 0.6");
series_ex2.fill("#fff");
series_ex2.hatchFill("diagonalCross");
```
{sample}STOCK\_Range\_Step\_Area\_05{sample}

### Hovered state

Points hovering in stocks differs from what it looks like in Basic Charts. In Stocks, when a point is hovered, there's a crosshair highlights it. You can adjust the crosshair (or highlighter) using the {api:anychart.core.stock.Plot#dateTimeHighlighter}dateTimeHighlighter(){api} method. A highlighter (or a crosshair) is held by a plot, so it's possible to make all highlighters different of edit only one of them. Its parameters are color, thickness, dashPattern, lineJoin and lineCap, though it's not necessary to define them all.

```
// crosshair adjusting
chart.plot(0).dateTimeHighlighter("green", 0.5, "10 4");
```

{sample}STOCK\_Range\_Step\_Area\_06{sample}