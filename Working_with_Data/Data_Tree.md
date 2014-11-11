{:index 6}
Data Tree
===============

* [Overview](#overview)
* [Usage](#usage)
* [Data Manipulation](#data_manipulation)

## Overview

Tree Data is one of the ways to structure data. Tree structure is quite useful way of implementing data which assume
tree like hierarchy with parent/child division. Such structure visualize data nodes connections thus
simplifies data adjusting and improve data organization.

## Usage

The most common case of using data tree is data grid. Data grid represents hierarchy of data. Here is a sample
representing data division.


```
	//Data set through tree method
	var treeType = anychart.data.tree([
    {name: 'Node 1'},
    {name: 'Parent Node', children:[
      {name: 'Child Node 1'},
      {name: 'Child Node 2'},
    ]},
    {name: 'Node 2'}
  ], anychart.enums.TreeFillingMethod.AS_TREE);

  //Data set through table method
	var treeType = anychart.data.tree([
    {name: 'Node 1', id: 1},
    {name: 'Parent Node', id: 2},
    {name: 'Child Node 1', parent: 2, id: 3},
    {name: 'Child Node 2', parent: 2, id: 4},
    {name: 'Node 2', id: 5}
  ], anychart.enums.TreeFillingMethod.AS_TABLE);
```

{sample}Data\_Tree\_01{sample}

## Data Manipulation

Data Manipulation includes CRUD operations, such as:


 * Updating - you can change the values of the existing points.
 * Adding - you can add one or several points between the existing points.
 * Removing - you can remove any point from a data set.


This operations may be proceeded for root elements as well as for children of a node. Tutorial on CRUD operations for
 **.set()** method can be found in [Data Manipulation article](Data_Manipulation).

### Create

Data in a tree may be added through several methods. Sample below demonstrates adding of

{sample}Data\_Tree\_02{sample}