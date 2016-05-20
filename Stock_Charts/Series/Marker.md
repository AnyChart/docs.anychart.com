# AnyStock Marker Series

* [Overview](#overview)
* [AnyStock Marker Series Adjustment](#anystock_marker_series_adjustment)
 * [Data](#data)
 * [Switching series type](#switching_series_type)
* [Visualization](#visualization)
 * [Coloring](#coloring)
 * [Marker type](#marker_type)
 * [Hovered state](#hovered_state)

## Overview

The most popular usage of basic Marker series is demonstrating the distribution of some events through the timeline. It's rather useful in statistics, ecomonics, sports, finances, etc. Marker Charts use only points to show the values. It can display a lot of series at once - this feature might be quite useful in some cases. Find more about Marker series in the [Marker Chart tutorial](../../Basic_Chart_Types/Marker_Chart).

In Stocks, Marker series are intended to show a big amount of data, so some their settings in stocks are special. We'll consider them in this article.

## AnyStock Marker Series Adjustment

### Data

The first difference between Basic Charts and AnyStock is the data format. All data points in Stocks should be represented in table format. Let's create a sample to show how it looks like: 

```
	// set the data
	table = anychart.data.table("x");
	table.addData([
        {x:'1790', value:3929214},
        {x:'1795', value:4390561},
        {x:'1800', value:5236631},
        {x:'1805', value:5989289},
        {x:'1810', value:7239881},
        {x:'2005', value:299456285},
        {x:'2010', value:308745538},
        {x:'2015', value:318914629}
	]);
  
	// map the data
	mapping = table.mapAs({'x':"x", 'value':"value"});

	// chart type
	chart = anychart.stock();

	// set the series
	var series = chart.plot(0).marker(mapping);
    series.name("USA population growth (Object Data notation)");
```

{sample}STOCK\_Marker\_01{sample}

In this sample, the data was arranged as array of objects. Now, let's look at the same sample with this data arranged as array of arrays.

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

	// chart type
	chart = anychart.stock();

 	// set the series
	var series = chart.plot(0).marker(mapping);
    series.name("USA population growth (Array Data notation)");
```

{sample}STOCK\_Marker\_02{sample}

It seems quite clear that nothing has finally changed in the stock appearance. So, choose the data type you prefer to work with.

As lots of chart types supports being multiserial, as well as stocks do. There are two ways to create a multi-series stock: to create several series in one plot (find more about them in the [Plot article](../Chart_Plots)) or create several plots and distribute all series among these plots. Let's look at the next couple of Marker Stocks. 

```
	// set the data
	table = anychart.data.table();
	table.addData([
        ['1995', 272119084, 49066487],
        ['2000', 281421906, 49138831],
        ['2005', 299456285, 51121448],
        ['2010', 308745538, 53012456],
        ['2015', 318914629, 54986564]
	]);
  
	// map the data
	mapping_usa = table.mapAs();
	mapping_usa.addField('value', 1);
	mapping_uk = table.mapAs();
	mapping_uk.addField('value', 2);

	// chart type
	chart = anychart.stock();

	// set the US series
	var series_usa = chart.plot(0).marker(mapping_usa);
    series_usa.name("USA population growth");

	// set the UK series
	var series_uk = chart.plot(0).marker(mapping_uk);
    series_uk.name("UK population growth");
```

{sample}STOCK\_Marker\_03{sample}

```
	// set the US series
    var series = chart.plot(0).marker(mapping_usa);
    series.name("USA population growth");

    // set the UK series
    var series = chart.plot(1).marker(mapping_uk);
    series.name("UK population growth");
```

{sample}STOCK\_Marker\_04{sample}

The only difference between these two code samples is the index of the second plot, but it changes a lot in the stocks' appearance and its perspicuity. 

### Switching series type

Our stocks has a method allowing to change the series type at once if the current series and the replacing one have the same or similar fields. Look up the [Series Type](Series_Type) and [series types table](Supported_Series#list_of_supported_series) to be sure it's possible to switch those series you need.

To switch the series use *seriesType()* method.


## Visualization

Some Stock Marker visualization settings are different from the similar ones in Basic Markers due to its specifics. Let's have a look at them.

### Coloring

Coloring is a very useful feature when it comes to emphasizing some values or series on a chart. In stocks, use {api:anychart.core.stock.series.Marker#fill}.fill(){api} and {api:anychart.core.stock.series.Marker#stroke}.stroke(){api} to change the default colors. 

AnyStocks have one more interesting feature. In case of having problems with eyesight, you might want to use hatch fillings, which monochrome palette allows to distinguish series without coloring them differently. Let's use our previous sample to show those features in action.

```
	// coloring
    series_usa.fill("#CC9933");
    series_usa.stroke("#FFCC33");

    // hatch fill
    series_uk.hatchFill("confetti");
    series_uk.fill("#fff");
    series_uk.stroke("#000");
```

{sample}STOCK\_Marker\_05{sample}

Note that despite being fill with hatch fills, the lower chart has not become easier to recognize the points. It seems necessary to make them bigger in size and possibly change the form. That's what the next paragrach about.


### Marker type 

Marker series have one more special feature: a marker type. It's possible to define special markers form for the whole series (which can be useful in multi-series stocks) or for some particular points in order to emphasize their importance (e.g. the highest and the lowest values). The {api:anychart.core.stock.series.Marker#type}.type(){api} method is responsible for that.
Another useful setting is marker size. It's possible to make markers much bigger or smaller. In our case it's definiteley necessary to enlarge the markers. We will use {api:anychart.core.stock.series.Marker#size}.size(){api} method.

```
	// type and size
    series_uk.type("square");
    series_uk.size(7);
```

{sample}STOCK\_Marker\_06{sample}

### Hovered state

In hovered state, points don't change their color or size, but there is a highlghter (crosshair) that helps to follow the points you hover. It helps especially when there are too many points with one value on X-axis, so a union tooltip shows up and demonstrated all those values. It's possible to adjust the crosshair default settings.

```
	// crosshair settings
    chart.plot(0).dateTimeHighlighter("#999", 1.5, "6 2", "round");
```

{sample}STOCK\_Marker\_07{sample}