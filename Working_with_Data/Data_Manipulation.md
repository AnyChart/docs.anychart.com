{:index 3}
# Data Manipulation

* [Overview](#overview)
 * [Add](#add)
 * [Meta-adding](#Meta-add)
 * [Read](#read)
 * [Update](#update)
 * [Delete](#delete)
 * [Insert](#insert)
* [Data Streaming](#data_streaming)
* [Series managing](#series_managing)
 * [Adding Series](#adding_series)
 * [Series Index](#series_index)
 * [Remove Series](#remove_series)
 * [Series ID](#series_id)

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
 
## Series Managing

Along with manipulating series data, chart's series can be adjusted too. Let's take a closer look at ways of controlling chart's series.

### Adding Series

In most cases you can create a new series by using method that is named after the series type (such as **column()**, **bar()**, **area()**, etc.) and use data array as a parameter for the method. But this way of setting series isn't convenient for managing lot's of series. There is another way to create multiple series. Method **.addSeries()** can create any number of series on the chart's plot. Use arrays as parameters for **.addSeries()** method to create series. You can pass any number of arrays with data to create a series for each of this arrays. But before adding series, you have to define the type of your series. You can set desirable series type with **.defaultSeriesType()** method. 

```
  // set chart type
  var chart = anychart.column();

  // set default series type
  chart.defaultSeriesType("column");

  // create series
  chart.addSeries(data1, data2, data3);
```

All the series in the sample below was added using **.addSeries()** method. Open the sample in playground to examine the code.

{sample}CRUD\_07{sample}

**Note**: you can find out the exact number of chart's series at current time using **.getSeriesCount()** method.

### Series Index

After adding multiple series you may need to get one of them for further adjustments. Every chart's series has an index and this index can be used to perform actions upon the series. Method **.getSeriesAt()** can be used to obtain a series and this method uses series index as a parameter.

```
  // get forth series
  var series = chart.getSeriesAt(3);
  
  // set series inner color
  series.fill("red");
```

If you try to pass number which exceeds amount of series on current chart, the **null** will be returned. This makes it quite continent to adjust each of chart's series using **while** loop. Here is how it is done.

```
  var chart = anychart.bar();
  
  chart.defaultSeriesType("bar");
  
  chart.addSeries(data1, data2, data3);
  
  var i=0;
  while (chart.getSeriesAt(i)){
    chart.getSeriesAt(i).name((i+1)+"th Series");
    i++;
  }
```

Below is a sample with demonstration of the code from above. Each series was renamed. The chart's legend was enabled to demonstrate series names.

{sample}CRUD\_07{sample}

### Remove Series

As far as any chart can be adjusted at any time there may be a need in removing some of chart's series. To remove any series you need just to pass series index to **.removeSeresAt()** method.

```
  var chart = anychart.column();
  
  // remove third series
  chart.removeSeriesAt(2);
```

As you can see, to remove a series you have to use series index as a parameter for **.removeSeriesAt()** method. Note, that if you want to hide series instead of removing it you can invoke **.enabled()** method for it with **false** parameter.

### Series ID

As far as chart's series can be easily added or removed, it may be difficult to manage every series using just their indexes. It is much more sensible to set a unique identificator for a series to simplify further series manipulations. Use **id()** method to set unique identificator for series. Method **.getSeries()** can be used to get series by id.

```
  var chart = anychart.column();

  var series;
  series = chart.column(data1);
  series.id("First Series");
  series = chart.column(data2);
  series.id("Second Series");

  series = chart.getSeries("First Series");
  series.name("First Series");
```

**Note**: if you pass series index to **.getSeries()** method, it will work pretty fine too and the series with the index will be returned. To remove series using id, please, use **.removeSeries()** method.

```
  // get third series
  chart.removeSeries("Second Series");
```

Here is a sample with a toolbar for series removing.

{sample}CRUD\_08{sample}
