{:index 4}
# Series Manipulation

* [Overview](#overview)
* [Adding Series](#adding_series)
* [Identifying Series](#identifying_series)
 * [Index](#index)
 * [ID](#id)
* [Removing Series](#removing_series)

## Overview

Series is a single set of data, that is visualized on a chart's plot. Series has a type and series data can be changed any time you want. You'll see updated visualization instantly.
  
  
**Note**: This article contains information about managing charts series only. Information about managing series data can be found in [Data Manipulation article](../Working_with_Data/Data_Manipulation).

## Adding Series

In most cases you can create a new series by using method that is named after the series type (such as {api:anychart.charts.Cartesian#column}**.column()**{api}, {api:anychart.charts.Cartesian#bar}**.bar()**{api}, {api:anychart.charts.Cartesian#area}**.area()**{api}, etc.) and use data array as a parameter for the method. But there is one more way of creating multi-series chart. Method {api:anychart.charts.Cartesian#addSeries}**.addSeries()**{api} can create any number of series on the chart's plot. Data for the method can be passed in different formats: it can be a simple array of data objects, a data set or a data view. You can pass any number of parameters to create a series for each of these parameters. But before adding series, you have to define the type of the series. You can set the series type with the {api:anychart.charts.Cartesian#defaultSeriesType}**.defaultSeriesType()**{api} method.

```
// set chart type
var chart = anychart.bar();

// set default series type
chart.defaultSeriesType("bar");

// create series
chart.addSeries(data1, data2, data3);
```

All the series in the sample below was added using {api:anychart.charts.Cartesian#addSeries}**.addSeries()**{api} method. Open the sample in playground to examine the code.

{sample}CRUD\_07{sample}

### Identifying Series

After adding multiple series you may need to get one of them for further adjustments. This section contains information on possible ways of getting series.

#### Index

Each series has an index and this index can be used to get series for further manipulations. Method {api:anychart.charts.Cartesian#getSeriesAt}**.getSeriesAt()**{api} can be used to obtain a series and it uses series index as a parameter.

```
// get forth series
var series = chart.getSeriesAt(3);

// set series inner color
series.fill("red");
```

If you try to pass number which exceeds amount of series on current chart, the **null** will be returned. This makes it quite continent to adjust each of chart's series using **while** loop. Here is how it is done.

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
  chart.getSeriesAt(i).name((i+1)+counter(i+1)+" Series");
  i++;
}

function counter(number){
	switch ((number+1)%10){
		case 1: return "st";
		case 2: return "nd";
		case 3: return "rd";
		default: return "th";
	}
}
```

Moreover, the exact number of chart's series at current time can be found out using {api:anychart.charts.Cartesian#getSeriesCount}**.getSeriesCount()**{api} method.
  
  
Below there is a sample with demonstration of the code from above. Each series was renamed. The chart's legend was enabled to demonstrate series names.

{sample}CRUD\_08{sample}

#### ID

Another way to get one of the series is to use series id. Method {api:anychart.core.cartesian.series.Base#id}**.id()**{api} sets a unique identificator for a series to simplify further series manipulations. After setting custom id, the series can be obtained using {api:anychart.charts.Cartesian#getSeries}**.getSeries()**{api} method with the series id as a parameter.

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

### Removing Series

As far as any chart can be adjusted at any time there may be a need in removing some of chart's series. If you know the id of the series that should be removed, invoke {api:anychart.charts.Cartesian#removeSeries}**.removeSeries()**{api} method and use series ID as a parameter for this method. In the situation, when the series has no ID it can be removed using {api:anychart.charts.Cartesian#removeSeriesAt}**.removeSeriesAt()**{api} method. Method {api:anychart.charts.Cartesian#removeSeriesAt}**.removeSeriesAt()**{api} uses series index as a parameter and removes the series with the index.

```
// create chart
var chart = anychart.bar();

// create 3 series
chart.addSeries(data0, data1, data2);

// remove third series
chart.removeSeriesAt(2);
```

Along with removing series one by one you can remove all series of the chart using one single method. Call {api:anychart.charts.Cartesian#removeAllSeries}**.removeAllSeries()**{api} method to remove all series of the current chart. Note, that data sets and data mapping help to prevent original data affection while managing series and series data.
  
  
Click on a label in the sample below to add/remove series on the chart's plot.

{sample}CRUD\_09{sample}

As a conclusion of this section here is a bit sophisticated sample with advanced opportunities of series manipulation.

{sample}CRUD\_10{sample}
