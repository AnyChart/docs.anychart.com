{:index 5}
# Tree Data Model

## Overview

The Tree Data Model is a data model in which the data is organized as a hierarchical tree-like structure with data items connected by parent/child relationships.

It is used in the following chart types:

* [Gantt](../Gantt_Chart/Quick_Start)
* [Treemap](../Basic_Charts/Treemap_Chart)
* [Sunburst](../Basic_Charts/Sunburst_Chart)

Data trees in Anychart are defined as instances of the {api:anychart.data.Tree class}anychart.data.Tree{api}, and data items are defined as instances of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api}.

This article explains how to organize your data to create a data tree and how to manipulate it: see the [Structure](#structure) and [Data Manipulation](#data_manipulation) sections.

## Structure

To create a data tree, you can arrange your data either [as a tree](#tree) or [as a table](#table).

### Tree

To organize data as a tree, create an instance of the {api:the anychart.data.Tree class}anychart.data.Tree{api} class: pass the data to the {api:anychart.data#tree}anychart.data.tree(){api} method and use `"as-tree"` as the second parameter. Then pass the data tree to the chart constructor.

You can also pass your data directly to the chart constructor or to the **data()** method of the chart. However, [data manipulations](#data_manipulation) require the data tree to be created explicitly with {api:anychart.data#tree}anychart.data.tree(){api}.

The choice of data fields depends on the chart type. But `children` is always required – it is used to specify the hierarchy of elements.

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

### Table

To organize your data as a table, create an instance of the {api:the anychart.data.Tree class}anychart.data.Tree{api} class: pass the data to the {api:anychart.data#tree}anychart.data.tree(){api} method and use `"as-table"` as the second parameter. Then pass the data tree to the chart constructor.

**Note:** You can also pass your data directly to the chart constructor or to the **data()** method of the chart. However, [data manipulations](#data_manipulation) require the data tree to be created explicitly with {api:anychart.data#tree}anychart.data.tree(){api}.

The choice of data fields depends on the chart type. But `id` and `parent` are always required – they are used to specify the hierarchy of elements.

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
* [Adding (Creating)](#adding)
* [Updating](#updating)
* [Removing (Deleting)](#removing)
* [Searching](#searching)
* [Traversing](#traversing)

**Note:** Operations with non-tree data are described in the [Data Manipulation](Data_Manipulation) article.

### Reading

Here are the methods for reading data:

* {api:anychart.data.Tree#getChildAt}Tree.getChildAt(){api} and {api:anychart.data.Tree.DataItem#getChildAt}DataItem.getChildAt(){api} – return a given data item
* {api:anychart.data.Tree#getChildren}Tree.getChildren(){api} and {api:anychart.data.Tree.DataItem#getChildren}DataItem.getChildren(){api} –  return all children of a given item
* {api:anychart.data.Tree#numChildren}Tree.numChildren(){api} and {api:anychart.data.Tree.DataItem#numChildren}DataItem.numChildren(){api} – return the number of children of a given item
* {api:anychart.data.Tree.DataItem#getParent}DataItem.getParent(){api} – (?)
* {api:anychart.data.Tree.DataItem#indexOfChild}DataItem.indexOfChild(){api} – (?)
* {api:anychart.data.Tree.DataItem#get}DataItem.get(){api} – returns the value of a given data field

When you call the {api:anychart.data.Tree#getChildAt}Tree.getChildAt(){api} method, it returns a root item (instance of {api}anychart.data.Tree.DataItem{api}) with a given index.

To go deeper than the root level, you need to call the {api:anychart.data.Tree.DataItem#getChildAt}DataItem.getChildAt(){api} method. For example, that is how you get the third child of the first root item:

```
treeData.getChildAt(0).getChildAt(2);
```

The {api:anychart.data.Tree#getChildren}getChildren(){api} method is used to get all children of an element with a given index. It returns an array of data items (instance of {api}anychart.data.Tree.DataItem{api}):

```

```


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