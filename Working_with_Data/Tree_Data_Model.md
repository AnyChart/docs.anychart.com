{:index 5}
# Tree Data Model

## Overview

The tree data model represents data as a hierarchical tree-like structure with data items connected by parent-child relationships.

It is used in the following chart types:

* [Gantt](../Gantt_Chart/Quick_Start)
* [Treemap](../Basic_Charts/Treemap_Chart)
* [Sunburst](../Basic_Charts/Sunburst_Chart)

This article explains how to set tree-like data, access data items, and perform data operations: see the [Setting Data](#setting_data), [Accessing Items](#accessing_items), and [Data Manipulation](#data_manipulation) sections.

## Quick Start

* пример с вкладками, где показать все типы чартов, или с радио
* container(null);
* chart.enabled(false); ?

{sample :height 450}WD\_Data\_Tree\_01{sample}

## Setting Data

Tree data structures in Anychart are defined as instances of the {api:anychart.data.Tree}anychart.data.Tree{api} class, and data items are defined as instances of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api}.

To create a chart based on tree-like data, you should organize your data either [as a tree](#as_tree) or [as a table](#as_table). Then it is processed by the component, and an instance of {api:anychart.data.Tree}anychart.data.Tree{api} is created – see the subsections below for detailed explanation.

### As Tree

If your data is organized **as a tree**, pass it to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-tree"` as the second parameter. Then pass the instance of the {api:anychart.data.Tree}anychart.data.Tree{api} class created by this method to the chart constructor.

You can as well skip the first step and pass your data to the **data()** method of the chart or directly to the chart constructor, also with the `as-tree` parameter. In this case the instance of {api:anychart.data#tree}anychart.data.tree(){api} is created implicitly (to get it, use the **data()** method of the chart). 

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

{sample :height 450}WD\_Data\_Tree\_02{sample}

### As Table

If you store data in a relational database table, it is particularly useful to organize it **as a table**. To set such data, you should pass it to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-table"` as the second parameter. Then pass the instance of the {api:anychart.data.Tree}anychart.data.Tree{api} class created by this method to the chart constructor.

You can as well skip the first step and pass your data to the **data()** method of the chart or directly to the chart constructor, also with the `as-table` parameter. In this case the instance of {api:anychart.data#tree}anychart.data.tree(){api} is created implicitly (to get it, use the **data()** method of the chart).

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

{sample :height 450}WD\_Data\_Tree\_03{sample}

### Mapping

{sample :height 450}WD\_Data\_Tree\_04{sample}

## Accessing Items

Data items in AnyChart are defined as instances of the {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} class. If you need to access them, you can either [search](#searching) for them or call special methods.

To access items at the root level, use the following methods of {api:anychart.data.Tree}anychart.data.Tree{api}:

* {api:anychart.data.Tree#getChildAt}getChildAt(){api} – returns a root item with a given index
* {api:anychart.data.Tree#getChildren}getChildren(){api} - returns an array of root items
* {api:anychart.data.Tree#numChildren}numChildren(){api} – returns the number of roots
* {api:anychart.data.Tree#indexOfChild}indexOfChild(){api} – returns the index of a given item if it is a root (or -1 if it is not)

To go deeper, use the methods of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api}:

* {api:anychart.data.Tree.DataItem#getChildAt}getChildAt(){api} – returns an item's child with a given index
* {api:anychart.data.Tree.DataItem#getChildren}getChildren(){api} – returns an array containing all children of an item
* {api:anychart.data.Tree.DataItem#numChildren}numChildren(){api} – returns the number of an item's children
* {api:anychart.data.Tree.DataItem#getParent}getParent(){api} – returns the parent of an item

For example, that is how you get the sixth child of the third child of the first root item:

```
treeData.getChildAt(0).getChildAt(2).getChildAt(5);
```

Manipulating data very often requires accessing data items, so the methods listed above are used in most samples in the [Data Manipulation](#data_manipulation) section.

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

You can read the value of an item's data field with a given name: [access](#accessing_items) the instance of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} and use the {api:anychart.data.Tree.DataItem#get}get(){api} method.

In the sample below, this method is used to display the name of the last child in the title of the chart:

```
// get the name of the last child
var lastChild = treeData.getChildAt(0).getChildren().length - 1;
var lastChildName = treeData.getChildAt(0).getChildAt(lastChild).get("name");
```

{sample}WD\_Data\_Tree\_05{sample}

### Adding

You can add a root item to your data: call the {api:anychart.data.Tree#addChild}addChild(){api} or {api:anychart.data.Tree#addChildAt}addChildAt(){api} method on the instance of {api:anychart.data.Tree}anychart.data.Tree{api}. Please note that the second method adds an item with a given index.

To add a child element to a data item, [access](#accessing_items) the instance of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} and call {api:anychart.data.Tree.DataItem#addChild}addChild(){api} or {api:anychart.data.Tree.DataItem#addChild}addChildAt(){api} on it:

```
var itemCount = 1;

// add a new data item
function addItem(){
  var name = "New Child " + itemCount++;
  treeData.getChildAt(0).addChild({"name": name, "value": 10000000});
};
```

{sample}WD\_Data\_Tree\_06{sample}

You can also add several root items at once: use the {api:anychart.data.Tree#addData}addData(){api} method.

**Note:** Only one root element can be displayed on the Treemap chart, so using this method does not change the way the Treemap looks, though the data is updated anyway.

Here is a Sunburst chart with a button adding two root nodes at a time:

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

{sample :width 500 :height 500}WD\_Data\_Tree\_07{sample}

### Updating

To update a data field of an item, [access](#accessing_items) the instance of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} and call {api:anychart.data.Tree.DataItem#set}set(){api}. Use the name of the field and a new value as parameters:

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

{sample}WD\_Data\_Tree\_08{sample}

### Removing

To remove root items from your data, call one of the following methods on the instance of {api:anychart.data.Tree}anychart.data.Tree{api}:

* {api:anychart.data.Tree#removeChild}removeChild(){api} – removes a root
* {api:anychart.data.Tree#removeChildAt}removeChildAt(){api} – removes a root with a given index
* {api:anychart.data.Tree#removeChildren}removeChildren(){api} – removes all roots 

To remove a child of a data item, [access](#accessing_items) the instance of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} and call one of these methods:

* {api:anychart.data.Tree.DataItem#removeChild}removeChild(){api} – removes a child
* {api:anychart.data.Tree.DataItem#removeChildAt}removeChildAt(){api} – removes a child with a given index
* {api:anychart.data.Tree.DataItem#removeChildren}removeChildren(){api} – removes all children

In this sample the current last child of the root item is removed each time you press the button:

```
var lastChild = treeData.getChildAt(0).getChildren().length - 1;
treeData.getChildAt(0).removeChildAt(lastChild);
```

{sample}WD\_Data\_Tree\_09{sample}

### Searching

To search for an item, use the {api:anychart.data.Tree#search}search(){api} and {api:anychart.data.Tree#searchItems}searchItems(){api} methods of the {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} class.  Please note that {api:anychart.data.Tree#searchItems}searchItems(){api}, unlike {api:anychart.data.Tree#search}search(){api}, always returns an array, which is the only difference between them.

These methods accept three parameters: the name of a data field, a value, and a comparison function. The function is optional: you can just search for an item with a given value in a given data field.

The following sample shows how to perform a search with the {api:anychart.data.Tree#searchItems}searchItems(){api} method and a comparison function – it is used to find items with values greater than a given number. The names of these items are displayed in the title of the chart, and the fill color of their nodes is changed:

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

  // update the chart title
  chart.title("Tree Data Model: Searching<br><br>" +
              "<span style = 'color:#990000'>" +
              text.substr(0, text.length - 2) + "</span>");
};
```

{sample}WD\_Data\_Tree\_10{sample}

In the next sample {api:anychart.data.Tree#search}search(){api}, combined with the {api:anychart.charts.TreeMap#drillTo}drillTo{api} method of the Treemap, is used to find an item with a certain name and drill down to it:

```
/* locate an item in the data tree
and get it as an object */
var item = treeData.search("name", "Item 3-4");

// drill down to the item
chart.drillTo(item);
```

{sample}WD\_Data\_Tree\_11{sample}

### Traversing

Traversing is a process of going through all the items of a tree. You can [access](#accessing_items) them directly, but AnyChart offers an easier and faster out-of-the-box solution.

To perform a traversal, use the {api:anychart.data.Tree#getTraverser}getTraverser(){api} method to obtain the {api:anychart.data.Traverser}anychart.data.Traverser{api} object. Then call its methods:

* {api:anychart.data.Traverser#advance}advance(){api} – advances the traverser to the next data item
* {api:anychart.data.Traverser#current}current(){api} – returns the current item
* {api:anychart.data.Traverser#get}get(){api} – returns the current item's value in a given data field
* {api:anychart.data.Traverser#getDepth}getDepth(){api} – returns the depth of the current item
* {api:anychart.data.Traverser#meta}meta(){api} – sets/gets the meta value of the current item
* {api:anychart.data.Traverser#nodeYieldCondition}nodeYieldCondition(){api} – sets/gets a function that determines whether an item is returned
* {api:anychart.data.Traverser#set}set(){api} – sets the value of the current item in a given data field
* {api:anychart.data.Traverser#reset}reset(){api} – resets the traverser to its default position before the first item
* {api:anychart.data.Traverser#toArray}toArray(){api} – returns the current traverser as an array of data items
* {api:anychart.data.Traverser#traverseChildrenCondition}traverseChildrenCondition(){api} – sets/gets a function that determines whether the traverser goes through the children of an item

In the sample below the {api:anychart.data.Traverser#advance}advance(){api} and {api:anychart.data.Traverser#get}get(){api} methods are used to display the names of all the data items:

```
// get the traverser of a tree
var traverser = treeData.getTraverser();

/* get the element displaying
the information about the tree */
var treeInfo = document.getElementById("treeInfo");

// display the names of all data items in the tree
while (traverser.advance()) {
  var newElement = document.createElement("li");
  newElement.innerText = traverser.get("name");
  treeInfo.appendChild(newElement);
};
```

{sample}WD\_Data\_Tree\_12{sample}

In the next sample {api:anychart.data.Traverser#advance}advance(){api} and {api:anychart.data.Traverser#current}current(){api}, combined with the {api:anychart.charts.TreeMap#drillTo}drillTo{api} method of the Treemap, are used to drill down through all the nodes of the chart. The {api:anychart.data.Traverser#reset}reset(){api} method allows starting the traversal again when it is finished.

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

{sample}WD\_Data\_Tree\_13{sample}

## Index

* {api:anychart.data.Tree#createIndexOn()}createIndexOn(){api}
* {api:anychart.data.Tree#removeIndex()}removeIndex(){api}

{sample}WD\_Data\_Tree\_14{sample}

## Events

* список событий
* упомянуть {api:anychart.data.Tree#dispatchEvents()}dispatchEvents(){api}

пример: гантт, кнопка, которая добавляет ноды + перетаскивание --> реакция на эти события

{sample}WD\_Data\_Tree\_15{sample}