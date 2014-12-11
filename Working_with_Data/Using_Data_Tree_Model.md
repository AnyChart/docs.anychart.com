{:index 6}
Using Data Tree Model
===============

* [Overview](#overview)
* [Usage](#usage)
* [Data Manipulation](#data_manipulation)
 * [Create](#create)
 * [Read](#read)
 * [Update](#update)
 * [Delete](#dalete)


## Overview

Tree Data is quite useful way of implementing data which assume tree like hierarchy with parent/child division. Such structure visualize data nodes connections thus simplifies data adjusting, improves data organization and provides advanced opportunities of data manipulation.

## Usage

The most common case of using data tree is data grid. Data grid represents hierarchy of data. In sake of
convenience AnyChart accept two methods of setting data tree: through table and through tree. Code below demonstrates
 setting same data through both methods.

```
  //Data set through tree method
  var treeType = anychart.data.tree(
    // section with raw data in a tree format
    [
      {name: 'Node 1'},
      {name: 'Parent Node', children:[
        {name: 'Child Node 1'},
        {name: 'Child Node 2'},
      ]},
      {name: 'Node 2'}
    ],
    anychart.enums.TreeFillingMethod.AS_TREE  // data type settings
  );

  //Data set through table method
  var treeType = anychart.data.tree(
    // section with raw data in a table format
    [
      {name: 'Node 1', id: 1},
      {name: 'Parent Node', id: 2},
      {name: 'Child Node 1', parent: 2, id: 3},
      {name: 'Child Node 2', parent: 2, id: 4},
      {name: 'Node 2', id: 5}
    ],
    anychart.enums.TreeFillingMethod.AS_TABLE // data type settings
  );
```

Here is a sample with the result of proceeding data from the code above.

{sample}Data\_Tree\_01{sample}

## Data Manipulation

Data Manipulation includes CRUD operations, such as:


 * Updating - you can change the values of the existing points.
 * Adding - you can add one or several points between the existing points.
 * Removing - you can remove any point from a data set.


This operations can be performed on root elements as well as for children of a node. Tutorial on CRUD operations for
 **.set()** method can be found in [Data Manipulation article](Data_Manipulation).

### Create

Data in a tree may be added through several methods. Sample below demonstrates adding of a child into data grid on
click on a button.

{sample}Data\_Tree\_02{sample}

Adding a child is quite useful method for adjusting data in real time and visualizing  actual processes.
Nevertheless, adding only one child at a time may appear to be ineffective for managing data. Transferring prepared
data with predefined hierarchy is advanced way managing data in a tree. Method **.addData()** requires data to add
and type of new data.

```
  // data to add
  var newData = [
    {name: 'new Node 1', id: '6'},
    {name: 'new Parent Node', id: '7'},
    {name: 'new Node 3', id: '8'},
    {name: 'new Child Node', parent: 7, id: '9'}
  ];

  // adding data
  tree.addData(
    newData,                                  // data
    anychart.enums.TreeFillingMethod.AS_TABLE // data type
  );
```

Sample below demonstrates adding data on click on a button.

{sample}Data\_Tree\_03{sample}

### Read

Data tree item may have unlimited number of data fields thus it requires methods for reading data from any field and
item search through field value. **.get()** method reads required field of an item. Sample below demonstrates
data grid with custom columns. Each of them read data from custom field Data of data grid.

{sample}Data\_Tree\_04{sample}

### Update

Every node in data tree may be updated. The node should be gotten first to proceed information adjustment. Sample
below illustrates adding 1000 to a value of the third node.

{sample}Data\_Tree\_05{sample}


### Delete

As far as we can add data, we can remove it too. Use **.removeChild()** method to delete an item from data set.

```
  tree.removeChildAt(0); // remove first element in data tree
```

Sample below demonstrates removing first element in the data tree.

{sample :height 165}Data\_Tree\_06{sample}