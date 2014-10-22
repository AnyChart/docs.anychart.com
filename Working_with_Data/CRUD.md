{:index 1}
# Create Read Update Delete Data Manipulation

* [Overview](#overview)
 * [Create](#create)
 * [Read](#read)
 * [Update](#update)
 * [Delete](#delete)
 * [Insert](#insert)
* [Data Stream](#data_stream)

## Overview

AnyChart component gives you the ability to create, read, update and delete data points in real-time without full 
chart reloading and redrawing - you can do  what you need in a fast and flexible way.
  
  
Several easy to use Java Script methods allow you to solve the following tasks:
  
  
 * Data-Streaming - adding new points with new data to the end of one or several data sets with optional ability to 
 remove some points from the beginning of a data set. 
 * Updating - you can change the values of the existing points.
 * Adding - you can add one or several points between the existing points.
 * Removing - you can remove any point from a data set.
  
  
This article shows how to solve each of these tasks and features examples for all methods.

### Create

AnyChart allows to adjust chart at any moment after it is displayed. The most simple case is adding a new point. To add an element into a data set, use **.append()** method

```
    dataSet.append({x: 'P6', value: 20});
```

We can set an event handler on any element. Here is a sample with adding point after click on an areaChart

{sample}CRUD\_01{sample}

**Note:**
Append method helps to add information at the end of the data set. To add information into any position see
 [.insert() method section](#insert) below.

### Read

Adding custom data is nice function, but much more then that is required to creating useful chart or dashboard. Any  point may contain meta information. Additional information (comparison with the previous year in this case) is available on a column click.

{sample}CRUD\_02{sample}

### Update

Updating data is AnyChart data set is done usinf **.set()** method.  Sample below demonstrates adding 5 to a column on click.

{sample}CRUD\_03{sample}

### Delete

As far as we can add data, we can remove it too. Use **.remove()** method to delete a row from data set.

```
    dataset.remove(0); // removes first row in dataset
```

Sample below demonstrates removing data. After clicking on any column, the first one is removed. 

{sample}CRUD\_04{sample}

### Insert

**.insert()** method is very similar to the **.append()** method, but adds information into any position. 

```
    dataSet.insert(
        {x: 'new P', value : 50},   //new data to set
        2                           //row to insert data
    )
```

Sample below illustrates inserting column into a random position and sets colors it red.

{sample}CRUD\_05{sample}

## Data Stream

Data Streaming is basically adding and/or removing points sequentially, usually by timer. To stream data we can use two methods described above: **append()** and **remove()**. In the sample below we create a chart and a 
button and set event on button click which appends a new data point with random value and removes first data 
point.

{sample}CRUD\_06{sample}
 
