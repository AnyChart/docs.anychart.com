{:index 4}
# Series Manipulation

## Overview

Series is a single set of data, that is visualized on a chart's plot. Series has a type and series data can be changed any time you want, when data changes in the data set or you update series properties you see updated visualization instantly.

**Note**: This article contains information about managing charts series. Information about manipulating series data can be found in [Data Manipulation article](../Working_with_Data/Data_Manipulation).

## Adding Series

In most cases you can create a new series using a method that is named after the series type (such as {api:anychart.charts.Cartesian#column}column(){api}, {api:anychart.charts.Cartesian#bar}bar(){api}, {api:anychart.charts.Cartesian#area}area(){api}, etc.) and use data array or [data set](Using_Data_Sets) as a parameter for the method. There is one more way of creating multi-series charts: the {api:anychart.charts.Cartesian#addSeries}addSeries(){api} method can add any number of series to a chart. Data for the method can be passed in different formats: it can be a simple array of data objects, a data set or a data view. You can pass any number of parameters to create any number of series. But before adding series, you have to define the type of the series to be added. The type of series added by {api:anychart.charts.Cartesian#addSeries}addSeries(){api} is set by the {api:anychart.charts.Cartesian#defaultSeriesType}defaultSeriesType(){api} method.

```
// set chart type
var chart = anychart.cartesian();

// set default series type
chart.defaultSeriesType("column");

// create series
chart.addSeries(data1, data2, data3);
```

All the series in the sample below are added using {api:anychart.charts.Cartesian#addSeries}addSeries(){api} method. Open the sample in the playground to examine the code.

{sample}CRUD\_07{sample}

## Identifying Series

When you add multiple series in such way you may need to obtain a link to some or all of of them for further adjustments. You can use either series id or series index to do this.

### Index

Each series has an index and this index can be used to obtain a link to a series object. The {api:anychart.charts.Cartesian#getSeriesAt}getSeriesAt(){api} method can be used to obtain a link to a series and it uses series index as a parameter. Index is a sequence number of the series which is set by AnyChart Engine automatically and it can not be changed.

```
// get forth series
var series = chart.getSeriesAt(3);

// set series inner color
series.fill("red");
```

If you try to pass number which exceeds the number of series on the chart, **null** will be returned. This makes it quite convenient to adjust every series in a chart using **while** loop. Here is how it is done:

```
// create chart
var chart = anychart.column();

// define default series type
chart.defaultSeriesType("column");

// set data for multiple series
chart.addSeries(data1, data2, data3);

var i=0;
// create a loop
while (chart.getSeriesAt(i)){
  // rename each series
  chart.getSeriesAt(i).name("Series #" + (i+1));
  i++;
}
```

Also, you can get the exact number of series in a chart using {api:anychart.charts.Cartesian#getSeriesCount}getSeriesCount(){api} method and use for loop to cycle through all series. Note that indexes are always continuous, this cycle can be executed at any time and you will always go through every series, just as you will with while loop. Here is how it is done:

```
var seriesIndexes = [];
for (var i=0; i < chart.getSeriesCount();i++){
seriesIndexes.push(chart.getSeriesAt(i).index());
}
```

Sample below demonstrates the code shown above. Each series is renamed and legend is enabled to show modified series names.

{sample}CRUD\_08{sample}

### ID

Another way to obtain a link to a series object is to use series id. The {api:anychart.core.cartesian.series.Base#id}id(){api} method sets a unique identifier for a series. When custom id is set, the link to a series object can be obtained using {api:anychart.charts.Cartesian#getSeries}getSeries(){api} method with the series id as a parameter.

```
// create chart
var chart = anychart.column();

// create variable for series
var series;
// create first series
series = chart.column(data1);
// set id for the first series
series.id("First Series");
// create second series
series = chart.column(data2);
// set id for second series
series.id("Second Series");

// get first series
series = chart.getSeries("First Series");
// rename first series
series.name("First Series");
```

## Removing Series

As far as any chart can be adjusted or added at any time, you can also remove any series. If you know the id of the series that should be removed, invoke {api:anychart.charts.Cartesian#removeSeries}removeSeries(){api} method and use series id as a parameter for this method. In the situation, when the series has no id it can be removed using {api:anychart.charts.Cartesian#removeSeriesAt}removeSeriesAt(){api} method. {api:anychart.charts.Cartesian#removeSeriesAt}removeSeriesAt(){api} method uses series index as a parameter and removes the series with the given index.

```
// create chart
var chart = anychart.bar();

// create 3 series
chart.addSeries(data0, data1, data2);

// remove third series
chart.removeSeriesAt(2);
```

Along with removing series one by one you can remove all series from the chart using one single method. Call {api:anychart.charts.Cartesian#removeAllSeries}removeAllSeries(){api} method to remove all series from the current chart. Note, that if you use data sets and data mapping - the original data will not be  lost while managing series and series data, [you can create new series use mappings again](../Working_with_Data/Using_Data_Sets).
  
Click the buttons in the sample below to add or remove series.

{sample}CRUD\_09{sample}
