{:index 1}
# Create Read Update Delete Data Manipulation

* [Overview](#overview)
* [Declaration](#declaration)
* [Title](#title)
* [Position](#position)
* [Labels](#labels)
* [Axis line](#axis_line)
* [Tickmarks](#tickmarks)

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