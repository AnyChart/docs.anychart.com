{:index 5}
Using Data Tree Model
===============

* [Overview](#overview)
* [Usage](#usage)
* [Data Manipulation](#data_manipulation)
 * [Create](#create)
 * [Read](#read)
 * [Update](#update)
 * [Delete](#delete)


## Overview

Tree Data is quite a useful way of implementing data where "tree" means an hierarchy with parent/child division. Such structure of visualizing data nodes connections simplifies data adjusting, improves data organization and provides advanced opportunities of data manipulation.

Tree Data Structure is crucial for [AnyGantt: AnyChart Gantt Charts](../Gantt_Chart/Quick_Start).

## Usage

In this sample we will use standalone Datagrid to show how to work with tree data. AnyChart charting library accepts two methods of setting data tree: through table and through tree. The code below demonstrates setting the same data through both methods. You can also use CSV, which is similar to table in terms of structure, but set differently, see [Gantt: Getting Data from JSON, XML or CSV](../Gantt_Chart/Data_from_JSON,_XML,_CSV#csv) to learn more.

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

{sample :width 690 :height 180}Data\_Tree\_01{sample}

## Data Manipulation

Data Manipulation includes CRUD operations, such as:


 * Updating - you can change the values of the existing points.
 * Adding - you can add one or several points between the existing points.
 * Removing - you can remove any point from a data set.


These operations can be performed on root elements as well as on children of a node. 

Note: Create, Read, Update and Delete operations for non-tree data is described in [Data Manipulation article](Data_Manipulation).

### Create

You can add some data as a tree using several methods. Sample below demonstrates adding a child into data grid on a button click.

{sample :width 690 :height 400}Data\_Tree\_02{sample}

Adding a child is quite a useful method of adjusting data in real time and visualizing actual processes.
Nevertheless, adding only one child at a time may appear to be ineffective for managing data. Transferring prepared
data with predefined hierarchy is an advanced way of managing data in a tree.  You need the data type and the data itself to use the {api:anychart.data.Tree#addData}**.addData()**{api} method.

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

You can see how it works on the sample below.

{sample :width 690 :height 270}Data\_Tree\_03{sample}

### Read

Data tree item may have an unlimited number of data fields thus it requires methods for reading data from any field and item search through field value. The {api:anychart.data.Tree.DataItem#get}**.get()**{api} method gets a value of a specified field of an item. The sample below demonstrates data grid with custom columns. Each column reads data from custom fields of data grid ("year 2004", "year 2005"). The code below shows how to use this method.

```
return item.get('year2004');               // get the value in a field "year2004" of an item
```

{sample :width 690 :height 200}Data\_Tree\_04{sample}

### Update

Every node in data tree may be updated. The node should be got first to proceed information adjustment. Below there is an illustration of adding 1000 to values of the third node.

```
// this part of a code is responsible for increasing the value of the third field "Value"
function addValue() {
  tree.getChildAt(2).set("value", tree.getChildAt(2).get("value") + 1000);
}
```

{sample :width 690 :height 200}Data\_Tree\_05{sample}


### Delete

As far as we can add data, we can remove it too. Use {api:anychart.data.Tree#removeChild}**.removeChild()**{api} method to delete an item from data set.

```
  tree.removeChildAt(0); // remove first element in data tree
```

The sample below demonstrates removing first element from the data tree.

{sample :width 690 :height 200}Data\_Tree\_06{sample}
