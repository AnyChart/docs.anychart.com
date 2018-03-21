{:index 5}
# Tree Data Model

## Overview

The Tree Data Model represents data as a hierarchical tree-like structure with data items connected by parent–child relationships.

It is used in the following chart types:

* [Gantt](../Gantt_Chart/Quick_Start)
* [Treemap](../Basic_Charts/Treemap_Chart)
* [Sunburst](../Basic_Charts/Sunburst_Chart)

This article explains how to create a tree data structure, pass it to a chart, and manipulate it: see the [Setting Data](#setting_data) and [Data Manipulation](#data_manipulation) sections.

## Setting Data

Tree data structures in Anychart are defined as instances of the {api:anychart.data.Tree class}anychart.data.Tree{api} class, and data items are defined as instances of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api}.

Your data can be arranged either [as a tree](#as-tree) or [as a table](#as-table). Then it is interpreted by the component, and an instance of {api:anychart.data.Tree class}anychart.data.Tree{api} is created.

To create an instance of {api:anychart.data.Tree class}anychart.data.Tree{api} explicitly, pass the data to the {api:anychart.data#tree}anychart.data.tree(){api} method. If you pass the data to the **data()** method of the chart or directly to the chart constructor, it is created implicitly.

### As Tree

If your data is organized as a tree, pass it to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-tree"` as the second parameter to create an instance of the {api:the anychart.data.Tree class}anychart.data.Tree{api} class. Then pass it to the chart constructor.

You can as well pass your data to the **data()** method of the chart or directly to the chart constructor, also with the `as-tree` parameter.

The choice of data fields depends on the chart type. But `children` is always required – it is used to specify the hierarchy of elements:

```
// create data
var data = [
  {name:     "Root", children: [
    {name:   "Parent 1", children: [
      {name: "Child 1-1", value: 150000000},
      {name: "Child 1-2", value:  45000000},
      {name: "Child 1-3", value:   3200000}
    ]},
    {name:   "Parent 2", children: [
      {name: "Child 2-1", value:  55000000},
      {name: "Child 2-2", value:  10600000},
      {name: "Child 2-3", value:   5200000}
    ]},
    {name:   "Parent 3", children: [
      {name: "Child 3-1", value:  21000000},
      {name: "Child 3-2", value:   9000000}
    ]}  
  ]} 
];

// create a storage for the data tree
treeData = anychart.data.tree(data, "as-tree");

// create a chart and set the data
var chart = anychart.treeMap(treeData);
```

{sample :height 450}WD\_Data\_Tree\_01{sample}

### As Table

If your data is organized as a table, pass it to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-table"` as the second parameter to create an instance of the {api:the anychart.data.Tree class}anychart.data.Tree{api} class. Then pass it to the chart constructor.

You can as well pass your data to the **data()** method of the chart or directly to the chart constructor, also with the `as-table` parameter.

The choice of data fields depends on the chart type. But `id` and `parent` are always required – they are used to specify the hierarchy of elements:

```
// create data
var data = [
  {id:  1, parent: null, name: "Root"},
  {id:  2, parent:    1, name: "Parent 1"},
  {id:  3, parent:    2, name: "Child 1-1", value: 150000000},
  {id:  4, parent:    2, name: "Child 1-2", value:  45000000},
  {id:  5, parent:    2, name: "Child 1-3", value:   3200000},
  {id:  6, parent:    1, name: "Parent 2"},
  {id:  7, parent:    6, name: "Child 2-1", value:  55000000},
  {id:  8, parent:    6, name: "Child 2-2", value:  10600000},
  {id:  9, parent:    6, name: "Child 2-3", value:   5200000},
  {id: 10, parent:    1, name: "Parent 3"},
  {id: 11, parent:   10, name: "Child 3-1", value:  21000000},
  {id: 12, parent:   10, name: "Child 3-2", value:   9000000}
];
// create a storage for the data tree
treeData = anychart.data.tree(data, "as-table");

// create a chart and set the data
var chart = anychart.treeMap(treeData);
```

{sample :height 450}WD\_Data\_Tree\_02{sample}

## Data Manipulation

You can perform the following data operations (including CRUD):

* [Reading](#reading)
* [Adding](#adding)
* [Updating](#updating)
* [Removing](#removing)
* [Searching](#searching)
* [Traversing](#traversing)

**Note:** Operations with non-tree data are described in the [Data Manipulation](Data_Manipulation) article.

### Reading

To read data at the root level, use the following methods of {api:anychart.data.Tree class}anychart.data.Tree{api}:

* {api:anychart.data.Tree#getChildAt}getChildAt(){api} – returns a root item with a given index
* {api:anychart.data.Tree#getChildren}getChildren(){api} - returns an array containing all children of a root item with a given index
* {api:anychart.data.Tree#numChildren}numChildren(){api} – returns the number of roots
* {api:anychart.data.Tree#indexOfChild}indexOfChild(){api} – returns (?)

To go deeper, use the methods of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api}:

* {api:anychart.data.Tree.DataItem#getChildAt}getChildAt(){api} – returns an item with a given index
* {api:anychart.data.Tree.DataItem#getChildren}getChildren(){api} – returns an array containing all children of an item with a given index
* {api:anychart.data.Tree.DataItem#numChildren}numChildren(){api} – returns the number of an item's children
* {api:anychart.data.Tree.DataItem#getParent}getParent(){api} – returns the parent of an item
* {api:anychart.data.Tree.DataItem#indexOfChild}indexOfChild(){api} – returns (?)
* {api:anychart.data.Tree.DataItem#get}get(){api} – returns the value of an item's data field with a given name

For example, that is how you get the 6th child of the 3rd child of the first root item:

```
treeData.getChildAt(0).getChildAt(2).getChildAt(5);
```

In the sample below, the number of the root item's children and the name of the last child are displayed in the title of the chart:

```
// get the number of children
var childrenTotal = treeData.getChildAt(0).numChildren();

// get the name of the last child
var lastChild = treeData.getChildAt(0).getChildren().length - 1;
var lastChildName = treeData.getChildAt(0).getChildAt(lastChild).get("name");
```

{sample}WD\_Data\_Tree\_03{sample}

### Adding

* пример: прямое обращение к элементам через такие-то методы, ссылка на read
* примечание: также к элементам можно обращаться с помощью методов, описанных в разделе searching

```
var itemCount = 1;

// add a new data item
function addItem(){
  var name = "New Child " + itemCount++;
  treeData.getChildAt(0).addChild({"name": name, "value": 10000000});
};
```

{sample}WD\_Data\_Tree\_04{sample}

* примечание: addData добавляет новые корневые элементы --> в тримапах данные будут обновляться, но новые данные не будут отображаться, т.к. всегда отображается только 1 корневой элемент

```
var itemCount = 1;

// add new data
function addItems(){
  //create new data
  var name_1 = "New Node " + itemCount++;
  var name_2 = "New Node " + itemCount++;
  var newData = [
    {"name": name_1, "value": 10000000},
    {"name": name_2, "value": 10000000}
  ];
  // add new data
  treeData.addData(newData, "as-tree");
};
```

{sample :width 500 :height 500}WD\_Data\_Tree\_05{sample}

### Updating

* метод set() класса anychart.data.Tree.DataItem

```
// update the first child
function updateItem(){
  var name = document.getElementById("inputName").value;
  var value = document.getElementById("inputValue").value;
  var color = document.getElementById("inputColor").value;
  treeData.getChildAt(0).getChildAt(0).set("name", name);
  treeData.getChildAt(0).getChildAt(0).set("value", value);
  treeData.getChildAt(0).getChildAt(0).set("fill", color);
};
```

{sample}WD\_Data\_Tree\_06{sample}

### Removing

* упомянуть три разных метода remove

```
var lastChild = treeData.getChildAt(0).getChildren().length - 1;
treeData.getChildAt(0).removeChildAt(lastChild);
```

{sample}WD\_Data\_Tree\_07{sample}

### Searching

```
// a comparison function
function comparisonFunction(fieldValue, comparisonValue) {
  if (comparisonValue > fieldValue)
    return true;
  else
    return false;
};

// search items with values greater than a given one
function searchValues(){

  // get the chart data as an instance of anychart.data.Tree
  var treeData = chart.data();

  // search items
  var inputValue = (document.getElementById("inputValue").value) * 1000000;
  var items = treeData.searchItems("value", inputValue, comparisonFunction);

  /* get the names of the found items, add them to a string variable,
  and set the fill colors of their nodes */
  var text = "";
  for (var i = 0; i < items.length; i++) {
    text += items[i].get("name") + ", ";
    items[i].set("fill", "#00bfa5");
  };
  if (items.length == 0)
    text = "(none)";
};
```

{sample}WD\_Data\_Tree\_08{sample}


```
/* locate an item in the data tree
and get it as an object */
var item = treeData.search("name", "Item 3-4");

// drill down to the item
chart.drillTo(item);
```

{sample}WD\_Data\_Tree\_09{sample}

### Traversing

```
// get the traverser of a tree
var traverser = treeData.getTraverser();

/* get the element displaying
the information about the tree */
var treeInfo = document.getElementById("treeInfo");

// display the names of all data items in the tree
while (traverser.advance()) {

  /* get the current item
  as an instance of the dataItem class */
  var dataItem = traverser.current();

  // display the name of the current item
  var newElement = document.createElement("li");
  newElement.innerText = dataItem.get("name");
  treeInfo.appendChild(newElement);

};
```

{sample}WD\_Data\_Tree\_10{sample}

```
// get the traverser of a tree
traverser = treeData.getTraverser();

// skip the root node
traverser.advance();

// get the next data item and drill to it
function nextItem() {
  // try to go to the next item
  if (traverser.advance()) {
    /* get the current item
    as an instance of the dataItem class */
    var dataItem = traverser.current();
    // drill down to the item
    chart.drillTo(dataItem);
  }
  else {
    //reset the traverser
    traverser.reset();
  }
};
```

{sample}WD\_Data\_Tree\_11{sample}