# AnyStock Step Area Series

* [Overview](#overview)
* [AnyStock Step Area Series Adjustment](#anystock_step_area_series_adjustment)
 * [Data](#data)
 * [Multi-series](#multi_series)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Step Area Series is quite similar to Area series, both in visualization and purpose. It uses one value for a point, but the points look like steps instead of vertexes of a polygon. Find more information about using Step Ares and Area Series in Basic Charts in the [Area Charts tutorial](../../Basic_Charts_Types/Area_Chart).

There are some settings differently managed when we use Step Area in Stocks, so let's look at them in this article.

## AnyStock Step Area Series Adjustment

The first difference between Basic Charts and Stocks comes when we start talking about the data.

### Data

When we set the data for the Step Area series in Stocks, we need to set it in table format, arranged as array of arrays or array of objects. Look through the next two samples: they both display the same data, but in the first one it is arranged as array of arrays.

```
	// set the data
	table = anychart.data.table();
	table.addData([
        ['2004-01-02', 29955800],
	    ['2004-01-05', 38892100],
	    ['2004-01-06', 43684400],
	    ['2004-01-07', 48757500],
	    ['2004-01-08', 61683300],
	    ['2004-01-09', 68856400],
	    ['2004-01-12', 52871900],
	    ['2004-01-13', 56334200]
	]);
  
	// map the data
	mapping = table.mapAs();
	mapping.addField('value', 1);

```

{sample}STOCK\_Step\_Area\_01{sample}

```
	// set the data
	table = anychart.data.table("x");
	table.addData([
        {'x':"2004-01-02", 'value': 29955800},
	    {'x':"2004-01-05", 'value': 38892100},
	    {'x':"2004-01-06", 'value': 43684400},
	    {'x':"2004-01-07", 'value': 48757500},
	    {'x':"2004-01-08", 'value': 61683300},
	    {'x':"2004-01-09", 'value': 68856400},
	    {'x':"2004-01-12", 'value': 52871900},
	    {'x':"2004-01-13", 'value': 56334200}
	]);
  
	// map the data
	mapping = table.mapAs({'x': 'x', 'value': 'value'});

```

{sample}STOCK\_Step\_Area\_02{sample}

Note that there is no visible changes in the samples. So, you are free to arrange your data the most suitable way. You can read more about mananging Data in Stocks in the [Stock Data tutorial](../Data).

### Multi-series

A Stock Chart can be multi-serial. Though, it's necessary to take into account the range of different series' values. Look at the next sample.

```
	// set the series
	var series_total = chart.plot(0).stepLine(mapping_total);
	series_total.name("Total Request Number");
	var series_region = chart.plot(0).stepLine(mapping_region);
    series_region.name("Region Request Number");

```

{sample}STOCK\_Step\_Area\_03{sample}

There are two series in one chart, but the second series looks like a line. It becomes so because of different value ranges. While the first series' values are counted in million, the second series' values are counted in thousands. In this case these series need to be separated. If it's necessary to keep them in one chart, the best solution is to create the second plot for the second series.

```  
	// set the series
	var series_total = chart.plot(0).stepLine(mapping_total);
	series_total.name("Total Request Number");
	var series_region = chart.plot(1).stepLine(mapping_region);
    series_region.name("Region Request Number");
```

{sample}STOCK\_Step\_Area\_04{sample}

The difference in the code is in a single parameter, means the plot ID, but the difference in the data visualization is spectacular. More about plots can be found in the [Plots tutorial](../Chart_Plots).


### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use *seriesType()* method.


## Visualization

There are some visualization settings managing in Stocks differ from these settings managing in Basic Chart. Let's look at them.

### Coloring

Color scheme makes your chart unique and helps to distinguish the series. It's possible to change the fill color using the {api:anychart.core.stock.series.StepArea#fill}.fill(){api} method and the stroke color using the {api:anychart.core.stock.series.StepArea#stroke}.stroke(){api} method.

Also, it's possible to set the hatch coloring in case of your Stock Charts being used by people with sight problems. Set the hatch type as a paramater of the {api:anychart.core.stock.series.StepArea#hatchFill}.hatchFill(){api} method.

```
	// coloring
	series_total.stroke("#ff0000");
	series_total.fill("#f00 0.6");
	series_region.stroke("#000");
	series_region.fill("#fff");
	series_region.hatchFill("diagonalCross");

```
{sample}STOCK\_Step\_Area\_05{sample}

### Hovered state

Points hovering in stocks differs from what it looks like in Basic Charts. In Stocks, when a point is hovered, there's a crosshair highlights it. You can adjust the crosshair (or highlighter) using the {api:anychart.core.stock.Plot#dateTimeHighlighter}.dateTimeHighlighter(){api} method. A highlighter (or a crosshair) is held by a plot, so it's possible to make all highlighters different of edit only one of them. Its parameters are color, thickness, dashPattern, lineJoin and lineCap, though it's not necessary to define them all.

```
	// crosshair adjusting
	chart.plot(0).dateTimeHighlighter("green", 0.5, "10 4");
```

{sample}STOCK\_Step\_Area\_06{sample}