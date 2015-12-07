{:index 3}
# Data Manipulation

* [Overview](#overview)
 * [Add](#add)
 * [Meta-adding](#meta-add)
 * [Read](#read)
 * [Update](#update)
 * [Delete](#delete)
 * [Insert](#insert)
* [Data Streaming](#data_streaming)
* [Managing Series](#managing_series)
 * [Adding Series](#adding_series)
 * [Identifying Series](#identifying_series)
  * [Index](#index)
  * [ID](#id)
 * [Removing Series](#removing_series)

## Overview

AnyChart html5 charting library gives you the ability to create, read, update and delete charts in real-time without full reloading and redrawing - our charts can be edited fast and flexible.
  
  
You can solve the following tasks using some easy-in-use Java Script methods:
  
  
 * Data-Stream - you can add some new data to the end of a data set while optional removing some data from its beginning. 
 * Add - you can add one or several points to the end of the data set.
 * Meta-add - you can add some metadata to the chart.
 * Update - you can change the values of the existing points.
 * Remove - you can remove any point from a data set.
 * Insert - you can add one or several points between the existing points.
  
  
This article shows how to solve each of these tasks.

### Add

AnyChart allows to adjust chart at any moment after it is displayed. To add an element into a data set, use {api:anychart.data.Set#append}**.append()**{api} method. 
Here is the example:

```
    dataSet.append({x: 'P6', value: 20});
```

That's how it looks with the button which adds a point on a click.

{sample}CRUD\_01{sample}

Note that in case of adding a point automatically it has to be done as a function:

```
function addPoint(e) {
    // append data
    dataSet.append({

      // x value
      x: 'P' + indexSetter,

      // random value from 1 to 100
      value : Math.floor((Math.random() * 100)+ 1)
    });
    indexSetter++;
  }
```

**Note:**
Append method helps to add information only at the end of the data set. To add information into any position see [.insert() method section](#insert) below.

### Meta-add

Adding custom data is nice function, but charts have to be as useful and informative as possible. Any point of a chart may contain meta information. If you want some meta information to be available on hovering a part of a chart, that's how your code will look like: 

```
 // function, if listener triggers
    function(e) {
        var info = view.get(e.pointIndex, 'value');

        // receive all necessary information and summarize it in one variable
        var infoGetter = 'Application Name:<b>' +
        view.get(e.pointIndex, 'x') +
        '</b><br/><a style="color: red;">Average</a> Unique Users: <b>' +
        view.get(e.pointIndex, 'value') +
        '</b> millions<br/>Year Over Year: <b>' +
        view.get(e.pointIndex, 'yoy') + '%</b>' ;

        // set received information into chart title
        chart.title().text(infoGetter).fontWeight(300);
    }
```

Note that this method allows you to show this information in the chart title.

{sample}CRUD\_02{sample}

### Update

Updating the charts' data sets is to be done using {api:anychart.data#set}**.set()**{api} method. That's how a part of a code should look like:

```
 function(e) {
        view.set(
            e.pointIndex,   // get index of clicked column
            'value',        // get parameter to update
            view.get(e.pointIndex, 'value') + 5 // parameter updating
        );
    }
```
The sample below demonstrates adding 5 to a column on click.

{sample}CRUD\_03{sample}

### Delete

As far as we can add data, we can remove it too. Use {api:anychart.data.Set#remove}**.remove()**{api} method to delete a row from data set.

```
    dataset.remove(0); // removes first row in dataset
```

This sample below demonstrates removing data. After clicking on any column the first one will be removed. 

{sample}CRUD\_04{sample}

### Insert

{api:anychart.data.Set#insert}**.insert()**{api} method is very similar to the {api:anychart.data.Set#append}**.append()**{api} method, but it allows you to insert information into any position.

```
    dataSet.insert(
        {x: 'new P', value : 50},   //new data to set
        2                           //row to insert data
    )
```

The sample illustrates inserting new column into a random position and colorizing it with red.

{sample}CRUD\_05{sample}

## Data Streaming

Data Streaming adds and/or removes points sequentially, usually by timer. To stream data we can use two methods described above: {api:anychart.data.Set#append}**.append()**{api} and {api:anychart.data.Set#remove}**.remove()**{api}. In the sample below we set event on button click which appends a new data point with random value and removes first data point.

That's how our function code looks like:

```
function(e) {

        // append data
        dataSet.append({

          // x value
          x: 'P' + indexSetter,

          // random value from 1 to 500
          value : Math.floor((Math.random() * 500)+ 1)
        });

        // removes first point
        dataSet.remove(0);
        indexSetter++;
      }, 200            // interval 
```

{sample}CRUD\_06{sample}
 
## Managing Series

Along with manipulating series data, chart's series can be adjusted too. Let's take a closer look at ways of controlling chart's series.

### Adding Series

In most cases you can create a new series by using method that is named after the series type (such as {api:anychart.charts.Cartesian#column}**.column()**{api}, {api:anychart.charts.Cartesian#bar}**.bar()**{api}, {api:anychart.charts.Cartesian#area}**.area()**{api}, etc.) and use data array as a parameter for the method. But this way of setting series isn't convenient for managing lot's of series. There is another way to create multiple series. Method {api:anychart.charts.Cartesian#addSeries}**.addSeries()**{api} can create any number of series on the chart's plot. Data for the method can be passed in different formats: it can be a simple array of data objects, a data set or a data view. You can pass any number of parameters to create a series for each of these parameters. But before adding series, you have to define the type of the series. You can set desirable series type with {api:anychart.charts.Cartesian#defaultSeriesType}**.defaultSeriesType()**{api} method.

```
  // set chart type
  var chart = anychart.column();

  // set default series type
  chart.defaultSeriesType("column");

  // create series
  chart.addSeries(data1, data2, data3);
```

All the series in the sample below was added using {api:anychart.charts.Cartesian#addSeries}**.addSeries()**{api} method. Open the sample in playground to examine the code.

{sample}CRUD\_07{sample}

### Identifying Series

After adding multiple series you may need to get one of them for further adjustments. This section contains information on possible ways of getting series.

#### Index

Every chart's series has an index and this index can be used to get series for further manipulations. Method {api:anychart.charts.Cartesian#getSeriesAt}**.getSeriesAt()**{api} can be used to obtain a series and this method uses series index as a parameter.

```
  // get forth series
  var series = chart.getSeriesAt(3);

  // set series inner color
  series.fill("red");
```

If you try to pass number which exceeds amount of series on current chart, the **null** will be returned. This makes it quite continent to adjust each of chart's series using **while** loop. Here is how it is done.

```
  // create chart
  var chart = anychart.bar();
  
  // define default series type
  chart.defaultSeriesType("bar");
  
  // set data for multiple series
  chart.addSeries(data1, data2, data3);
  
  var i=0;
  // create a loop
  while (chart.getSeriesAt(i)){
    // rename each series
    chart.getSeriesAt(i).name((i+1)+"th Series");
    i++;
  }
```

Moreover, the exact number of chart's series at current time can be found out using {api:anychart.charts.Cartesian#getSeriesCount}**.getSeriesCount()**{api} method.
  
  
Below is a sample with demonstration of the code from above. Each series was renamed. The chart's legend was enabled to demonstrate series names.

{sample}CRUD\_08{sample}

#### ID

Another way to get one of series is to use series id. Method {api:anychart.core.cartesian.series.Base#id}**.id()**{api} sets a unique identificator for a series to simplify further series manipulations. After setting custom id, the series can be obtained using {api:anychart.charts.Cartesian#getSeries}**.getSeries()**{api} method with series id as a parameter.

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

Along with removing series one by one you can remove all series of the chart using one single method. Call {api:anychart.charts.Cartesian#removeAllSeries}**.removeAllSeries()**{api} method to remove every series of the current chart. Note, that series removal doesn't affect your data in any way.
  
  
Click on a labels in the sample below to add/remove series on the chart's plot.

{sample}CRUD\_09{sample}

As a conclusion of this section here is a bit sophisticated sample with advanced opportunities of series manipulation.

{sample}CRUD\_10{sample}
