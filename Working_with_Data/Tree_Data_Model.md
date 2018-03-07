{:index 5}
# Tree Data Model

## Overview

Tree Data is a way of implementing hierarchical structures with parent/child relations.

Tree Data Structure is crucial for [AnyGantt: AnyChart Gantt Charts](../Gantt_Chart/Quick_Start) and [Treemap Charts](../Basic_Charts/Treemap_Chart).

## Structure

### Tree

In this sample we will use standalone Datagrid to show how to work with tree data. AnyChart charting library accepts two methods of setting data tree: through table and through tree. The code below demonstrates setting the same data through both methods. You can also use CSV, which is similar to table in terms of structure, but set differently, see [Gantt: Getting Data from JSON, XML or CSV](../Gantt_Chart/Data_from_JSON,_XML,_CSV#csv) to learn more.

```
// Data set through tree method
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
  "as-tree"  // data type settings
);

// Data set through table method
var treeType = anychart.data.tree(
  // section with raw data in a table format
  [
    {name: 'Node 1', id: 1},
    {name: 'Parent Node', id: 2},
    {name: 'Child Node 1', parent: 2, id: 3},
    {name: 'Child Node 2', parent: 2, id: 4},
    {name: 'Node 2', id: 5}
  ],
  "as-table" // data type settings
);
```

Here is a sample with the result of processing data from the code above.

{sample :height 180}Data\_Tree\_01{sample}


### Table

## Data Manipulation

Data Manipulation includes CRUD operations, such as:

 * Updating - you can change the values of the existing points,
 * Adding - you can add one or several points between the existing points,
 * Removing - you can remove any point from a data set,
 * Searching - you can look for a certain element in a tree basing on some criteria,
 * Cycling (Traversing) - you can go through all the elements of the tree.

These operations can be performed on root elements as well as on children of a node. 

Note: Create, Read, Update and Delete operations for non-tree data is described in [Data Manipulation article](Data_Manipulation).

### Creating

You can add some data as a tree using several methods. Sample below demonstrates adding a child into data grid on a button click.

{sample :height 400}Data\_Tree\_02{sample}

Adding a child is quite a useful method of adjusting data in real time and visualizing actual processes. Nevertheless, adding only one child at a time may appear to be ineffective for managing data. Transferring prepared data with predefined hierarchy is an advanced way of managing data in a tree.  You need the data type and the data itself to use the {api:anychart.data.Tree#addData}addData(){api} method.

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
  newData,    // data
  "as-table"  // data type
);
```

You can see how it works on the sample below.

{sample :height 270}Data\_Tree\_03{sample}

### Reading

Data tree item may have an unlimited number of data fields thus it requires methods for reading data from any field and item search through field value. The {api:anychart.data.Tree.DataItem#get}get(){api} method gets a value of a specified field of an item. The sample below demonstrates a data grid with custom columns. Each column reads data from custom fields of the data grid (`"year 2004"`, `"year 2005"`). The code below shows how to use this method.

```
// get the value in a field "year2004" of an item
return item.get('year2004'); 
```

{sample :height 200}Data\_Tree\_04{sample}

### Updating

Every node in a data tree may be updated. The node should be obtained to proceed with data adjustment. Here is how you can add 1000 to a value of the third node:

```
// this part of a code is responsible for increasing the value of the third field "Value"
function addValue() {
  tree.getChildAt(2).set("value", tree.getChildAt(2).get("value") + 1000);
}
```

{sample :height 200}Data\_Tree\_05{sample}

### Deleting

As far as we can add data, we can remove it too. Use {api:anychart.data.Tree#removeChild}removeChild(){api} method to delete an item from data set.

```
tree.removeChildAt(0); // remove first element in data tree
```

The sample below demonstrates removing first element from the data tree.

{sample :height 200}Data\_Tree\_06{sample}

### Searching

When you work with tree data sets you may need to look for an element of the tree to navigate or highlight, or use other CRUD operations. There are two methods for this: {api:anychart.data.Tree#search}search(){api} and {api:anychart.data.Tree#searchItems}searchItems(){api}.

Here is a sample of using {api:anychart.data.Tree#search}search(){api} method with [Treemap Chart](../Basic_Charts/Treemap_Chart) and its {api:anychart.charts.TreeMap#drillTo}drillTo(){api} method:

```
/* locate an item in the data tree,
get the item as an object*/
var item = treeData.search("name", "Lvl 3-4");
// drill down to the item
chart.drillTo(item);

// drill up
chart.drillUp();
```

{sample :height 600}BCT\_Treemap\_Chart\_17{sample}

### Traversing

Traversing (or cycling through) the tree is the way to go through all the elements of the tree, AnyChart makes it easier with
{api:anychart.data.Tree#getTraverser}getTraverser(){api} method that obtains an instance of {api:anychart.data.Traverser}Traverser{api} object, which has everything you need to go over the tree in an efficient way.

In the next sample traverser is used to go through the tree and [drill to](../Basic_Charts/Treemap_Chart#interactivity) each element one by one, when cycle is done - traverser is {api:anychart.data.Traverser#reset}reset{api} and you can go again.

{sample :height 600}Data\_Tree\_07{sample}
