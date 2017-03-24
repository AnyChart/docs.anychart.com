# AnyStock Range Spline Area Series

* [Overview](#overview)
* [AnyStock Range Spline Area Series Adjustment](#anystock_range_spline_area_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Hovered state](#hovered_state)

## Overview

Range Spline Area demonstrates how a range of some object's volume changes in time or during some process. There are two values to be set for this series: low and high. Find more about this series type in [Range Spline Area Chart](../../Basic_Charts_Types/Range_Area-SplineArea_Charts).

This series is can be successfully used as stock series. There are some things different about parameters of Range Spline Area in Basic Charts and in Stocks due to a big amount of data in the last case, so we will consider those in this article.

## AnyStock Range Spline Area Series Adjustment

At first, let's look at the data of the Range Spline Area Stocks.

### Data

The data in Stocks should be set in table format, arranged as array of arrays or array of objects. The next two samples demonstrates stocks with the same data differently arranged. Look through the code samples or explore the samples in our playground to understand the difference between these two types.

The data in this sample below is arranged as array of objects.

```
	// set the data
    table = anychart.data.table("x");
    table.addData([
        {x: "January 2000", low: 2, high: 6},
        {x: "February 2000", low: 2, high: 7},
        {x: "March 2000", low: 3, high: 10},
        {x: "April 2000", low: 5, high: 13},
        {x: "May 2000", low: 8, high: 17},
        {x: "June 2000", low: 11, high: 20},
        {x: "July 2000", low: 13, high: 22},
        {x: "August 2000", low: 13, high: 21},
        {x: "September 2000", low: 11, high: 19},
        {x: "October 2000", low: 8, high: 14},
        {x: "November 2000", low: 5, high: 10},
        {x: "December 2000", low: 5, high: 7}
    ]);
  
    // map the data
    mapping = table.mapAs({'x':"x", 'high':"high", 'low': "low"});

    // chart type
    chart = anychart.stock();

    // set the series
    var series = chart.plot(0).rangeSplineArea(mapping);
    series.name("Temperature Range");
```

{sample}STOCK\_Range\_Spline\_Area\_01{sample}

The next sample demonstrates the data arranged as array of arrays. 

```
// set the data
    table = anychart.data.table();
    table.addData([
        ["January 2000", 2, 6],
        ["February 2000", 2, 7],
        ["March 2000", 3, 10],
        ["April 2000", 5, 13],
        ["May 2000", 8, 17],
        ["June 2000", 11, 20],
        ["July 2000", 13, 22],
        ["August 2000", 13, 21],
        ["September 2000", 11, 19],
        ["October 2000", 8, 14],
        ["November 2000", 5, 10],
        ["December 2000", 5, 7]
    ]);
  
    // map the data
    mapping = table.mapAs();
    mapping.addField('low', 1);
    mapping.addField('high', 2);

    // chart type
    chart = anychart.stock();

    // set the series
    var series = chart.plot(0).rangeSplineArea(mapping);
    series.name("Temperature Range");
```

{sample}STOCK\_Range\_Spline\_Area\_02{sample}

Note that nothing has changed in the view of a stock when we reaaranged the data. So you are free to choose the way of data arranging you prefer or the one that better suits your goals.

Now, let's add a series to one of the previous samples.

```
// set the data
    table = anychart.data.table();
    table.addData([
        ["January 2000", 2, 6, -3, 4],
        ["February 2000", 2, 7, -2, 5],
        ["March 2000", 3, 10, 2, 10],
        ["April 2000", 5, 13, 7, 16],
        ["May 2000", 8, 17, 12, 22]
    ]);
  
    // map the data
    mapping_lon = table.mapAs();
    mapping_lon.addField('low', 1);
    mapping_lon.addField('high', 2);
    mapping_ny = table.mapAs();
    mapping_ny.addField('low', 3);
    mapping_ny.addField('high', 4);

    // chart type
    chart = anychart.stock();

    // set the series
    var series_lon = chart.plot(0).rangeSplineArea(mapping_lon);
    series_lon.name("Temperature Range (London 2000-2004)");

    // set the series
    var series_ny = chart.plot(0).rangeSplineArea(mapping_ny);
    series_ny.name("Temperature Range (New York 2000-2004)");
```

{sample}STOCK\_Range\_Spline\_Area\_03{sample}

Adding more series to the stock chart will make it less understandable. In this case it's better to use plots - a feature that helps to place several series in one chart separately from each other, making it easier to get the values.

To create a plot use {api:anychart.charts.Stock#plot}.plot(){api} and set the plot index as an argument for this method.

You can find all information about plots in the [Plot tutorial](../Chart_Plots).

```
    // set the series
    var series_lon = chart.plot(0).rangeSplineArea(mapping_lon);
    series_lon.name("Temperature Range (London 2000-2004)");

    // set the series
    var series_ny = chart.plot(1).rangeSplineArea(mapping_ny);
    series_ny.name("Temperature Range (New York 2000-2004)");

```

{sample}STOCK\_Range\_Spline\_Area\_04{sample}

### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use *seriesType()* method.


## Visualization

Some Stock Range Spline Area visualization settings are different from the similar ones in Basic Range Spline Area due to its specifics. Let's have a look at them.

### Coloring

Colors help us to distinguish the series, especialy when we'got a number of them in one plot. There are default colors that can be adjusted if necessary. Use {api:anychart.core.stock.series.RangeSplineArea#fill}.fill(){api} for changing the range filling color. This method usage would look like the following:

```
// set the colors
    series_lon.fill("#FFCC99 0.5");
    series_ny.fill("#33CCCC 0.5");
```

{sample}STOCK\_Range\_Spline\_Area\_05{sample}

However, there is a category of people who cannot understand the colors. There is a hatch filling feature in AnyStocks helps in case of having some sight problems. Use {api:anychart.core.stock.series.RangeSplineArea#hatchFill}.hatchFill(){api} to set the hatch filling for your Range Area. Look up the {api:anychart.graphics.vector.HatchFill.HatchFillType}HatchFill pattern list{api} to choose the style you prefer.

```
	// set the colors
    series_lon.fill("#fff 0.5");
    series_ny.fill("#fff 0.5");
    series_lon.hatchFill("horizontalBrick");
    series_ny.hatchFill("confetti");
```

{sample}STOCK\_Range\_Spline\_Area\_06{sample}

### Hovered state

While it's common for the Basic Charts to change the series colors or behaviour when they are hovered, it's different in stocks.When we hover a point, a crosshair shows up with a tooltip demonstrating all the values that belong to this point. It can be adjusted as well: use the {api:anychart.core.stock.Plot#dateTimeHighlighter}.dateTimeHighlighter(){api} to change the croshair's defaults.

```
	// crosshair settings
    chart.plot(0).dateTimeHighlighter("#FF0000", 2, "8 2");
```

{sample}STOCK\_Range\_Spline\_Area\_07{sample}

Find more about crosshair in the [Crosshair article](../../Axes_and_Grids/Crosshair).