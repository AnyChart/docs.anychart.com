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

AnyChart component gives you the ability to, create, read, update and delete data points in real-time without full 
chart reloading and redrawing - you can do just what you need in a fast and flexible way.
  
  
Several easy to use Java Script methods allow you to solve the following tasks:
  
  
 * Data-Streaming - adding new points with new data to the end of one or several data sets with optional ability to 
 remove some points from the beginning of the data set. 
 * Updating - you can change the values of the existing points.
 * Insertion - you can add one or several points between some existing points.
 * Removing - you can remove on point by the given timestamp or several points by the given range.
  
  
This article shows how to solve each of this tasks and features examples for all methods described.

### Create

AnyChart allows to adjust chart at any moment even after drawing. The most simple case is adding new point. To add
 an element into chart, use **.append()** method

```
    dataSet.append({x: 'P6', value: 20});
```

We can set an event trigger on any element. Here is a sample with adding point after click on a areaChart

{sample}CRUD\_01{sample}

**Note:**
Append method helps to add information at the end of the data set. To add information into any desirable position study
 [**.insert** method section](#insert) below.

### Read

Adding custom data is quite nice function, but it requires much more then that for a creating useful dashboard. Any 
point may contain any meta information. Additional information (comparison with the previous year) is available on a 
column click.

{sample}CRUD\_02{sample}

### Update

Updating data in real time or is a data flow determines for which time or event data item is to be adjusted. AnyChart
 data can be adjusted through **.set()** method. 
  
  
Sample below demonstrates adding 5 to a column on click.

{sample}CRUD\_03{sample}

### Delete

As far as we can add data, we can remove it too. Use **.remove()** method to delete a row from data.

```
    dataset.remove(0); //removes first row in dataset
```

Sample below demonstrates data removing. After click on any column removes the first one. 

{sample}CRUD\_04{sample}

### Insert

Method **.insert()** is very similar to the **.append()** method, but adds information into any position. 

```
    dataSet.insert(
        {x: 'new P', value : 50},   //new data to set
        2                           //row to insert data
    )
```

Sample below illustrates inserting column into random position and set red color to it.

{sample}CRUD\_05{sample}

## Data Stream

Data Stream is a data flow determines for which time which data item is scheduled to enter or leave. For streaming 
data we can use 2 methods described above: **append()** and **remove()**. In the sample below we create chart and a 
button and set event on button's click, which appends a new data point with random value and removes first data 
point.

{sample}CRUD\_06{sample}
 