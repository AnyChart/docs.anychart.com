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

## Overview

AnyChart html5 charting library gives you the ability to create, read, update and delete charts in real-time without full reloading and redrawing - our charts can be cnanged fast and in a flexible manner.

You can solve the following tasks using some easy-in-use Java Script methods:

* Data-Stream - you can add some new data to the end of a data set while optional removing some data from its beginning. 
* Add - you can add one or several points to the end of the data set.
* Meta-add - you can add some metadata to the chart.
* Update - you can change the values of the existing points.
* Remove - you can remove any point from a data set.
* Insert - you can add one or several points between the existing points.

This article shows how to solve each of these tasks.

**Note**: this article contains information on data mapping and series data managing. Information about managing chart's series and series visual appearance can be found in [Series Manipulation article](../Working_with_Data/Series_Manipulation).

### Add

AnyChart allows to adjust chart at any moment after it is displayed. To add an element into a data set, use {api:anychart.data.Set#append}append(){api} method. 
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

Updating the charts' data sets is to be done using {api:anychart.data#set}set(){api} method. That's how a part of a code should look like:

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

As far as we can add data, we can remove it too. Use {api:anychart.data.Set#remove}remove(){api} method to delete a row from data set.

```
dataset.remove(0); // removes first row in dataset
```

This sample below demonstrates removing data. After clicking on any column the first one will be removed. 

{sample}CRUD\_04{sample}

### Insert

{api:anychart.data.Set#insert}insert(){api} method is very similar to the {api:anychart.data.Set#append}append(){api} method, but it allows you to insert information into any position.

```
dataSet.insert(
  {x: 'new P', value : 50},   //new data to set
  2                           //row to insert data
)
```

The sample illustrates inserting new column into a random position and colorizing it with red.

{sample}CRUD\_05{sample}

## Data Streaming

Data Streaming adds and/or removes points sequentially, usually by timer. To stream data we can use two methods described above: {api:anychart.data.Set#append}append(){api} and {api:anychart.data.Set#remove}remove(){api}. In the sample below we set event on button click which appends a new data point with random value and removes first data point.

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
}, 
200   // interval 
```

{sample}CRUD\_06{sample}
