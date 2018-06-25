{:index 5}
# Tree Data Model

## Overview

The tree data model represents data as a hierarchical tree-like structure with data items connected by parent-child relationships.

It is used in the following chart types:

* [Gantt](../Gantt_Chart/Quick_Start)
* [Treemap](../Basic_Charts/Treemap_Chart)
* [Sunburst](../Basic_Charts/Sunburst_Chart)

This article explains how to set tree-like data, access data items, and perform operations on data.

## Classes

Here is the list of classes allowing you to work with tree data in AnyChart:

* tree – {api:anychart.data.Tree}anychart.data.Tree{api}
* item – {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api}
* traverser – {api:anychart.data.Traverser}anychart.data.Traverser{api}

## Quick Start

To create a chart with tree-like data, create a data tree by passing your data to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-tree"` as the second parameter. Then pass the tree to the chart constructor:

```
// create data
var data = [
  {name:   "Root", children: [
    {name:   "Child 1", value: 65511098},
    {name:   "Child 2", value: 64938716},
    {name:   "Child 3", value: 59797978},
    {name:   "Child 4", value: 46070146}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart and set the data
var chart = anychart.treeMap(treeData);

// set the chart container
treemap.container("container");

// initiate drawing the chart
treemap.draw();
```

The following sample shows how to create different chart types with the same tree-like data:

{sample :height 300}WD\_Data\_Tree\_01{sample}

## Setting Data

Tree data structures in Anychart are defined as instances of the {api:anychart.data.Tree}anychart.data.Tree{api} class, and data items are defined as instances of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api}.

To create a chart based on tree-like data, you should organize your data either [as a tree](#as_tree) or [as a table](#as_table). Then it is processed by the component, and an instance of {api:anychart.data.Tree}anychart.data.Tree{api} is created.

The first step is passing your data to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-tree"` or `"as-table"` as the second parameter:

```
// create a data tree
treeData = anychart.data.tree(data, "as-tree");
```

```
// create a data tree
treeData = anychart.data.tree(data, "as-table");
```

Then pass the instance of the {api:anychart.data.Tree}anychart.data.Tree{api} class created by this method to the chart constructor:

```
// create a chart and set the data
var chart = anychart.treeMap(treeData);
```

You can as well skip the first step and pass your data to the **data()** method of the chart or directly to the chart constructor, also with the `"as-tree"` or `"as-table"` parameter. In this case the instance of {api:anychart.data#tree}anychart.data.tree(){api} is created implicitly (to get it, use the **data()** method of the chart).

The choice of data fields depends on the chart type and on the way your data is structured. If the data is organized [as a tree](#as_tree), the `children` field is always required. If it is organized [as a table](#as_table), `id` and `parent` are required – they are used to specify the hierarchy of elements.

**Note 1:** To learn how to rename the default fields of the tree data model (`children`, `parent`, `id`), see the [Mapping](#mapping) section.

**Note 2:** The `id` field is required for the live edit mode of the Gantt Chart. To learn more, read the the [Live Edit UI and API](../Gantt_Chart/Live_Edit_UI_and_API) article and take a look at the sample in the [Events](#events) section of this article.

### As Tree

This sample shows how to set data if it data is organized **as a tree**:

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

// create a data tree
treeData = anychart.data.tree(data, "as-tree");

// create a chart and set the data
var chart = anychart.treeMap(treeData);
```

{sample}WD\_Data\_Tree\_02{sample}

### As Table

In the following sample data is organized **as a table**:

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

// create a data tree
treeData = anychart.data.tree(data, "as-table");

// create a chart and set the data
var chart = anychart.treeMap(treeData);
```

{sample}WD\_Data\_Tree\_03{sample}

### Mapping

If you need to map your data, call the {api:anychart.data.Tree#mapAs}mapAs{api} method on the instance of {api:anychart.data.Tree}anychart.data.Tree{api}. Then pass the mapped data to the chart constructor or to the **data()** method of the chart.

The {api:anychart.data.Tree#mapAs}mapAs{api} method allows you to map any field fields except the fields required by the tree data model – `children`, `parent`, `id`. Instead, you should use the {api:anychart.data#tree}anychart.data.tree(){api} constructor with a mapping object as the fourth parameter. Please note that the third parameter works only with CSV data, so it should be set to `null`.

In the following sample, the {api:anychart.data#tree}anychart.data.tree(){api} constructor is used to map a custom field `child_items` as the `children` field required by the tree data model. The {api:anychart.data.Tree#mapAs}mapAs{api} method maps `start` and `end` as `actualStart` and `actualEnd` required by the Gantt chart:

```
// create data
var data = [
  {
    name:   "Root",
    start: Date.UTC(2018, 0, 25),
    end: Date.UTC(2018, 2, 14),
    child_items: [
      {
        name:   "Child 1",
        start: Date.UTC(2018, 0, 25),
        end: Date.UTC(2018, 1, 3)
      },
      {
        name:   "Child 2",
        start: Date.UTC(2018, 1, 4),
        end: Date.UTC(2018, 1, 4)
      },
      {
        name:   "Child 3",
        start: Date.UTC(2018, 1, 4),
        end: Date.UTC(2018, 1, 24)
      },
      {
        name:   "Child 4",
        start: Date.UTC(2018, 1, 24),
        end: Date.UTC(2018, 2, 14)
      }
    ]
}];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree", null, {children: "child_items"});

// map the data
var mapping = treeData.mapAs({actualStart: "start", actualEnd: "end"});

// create a chart
chart = anychart.ganttProject();

// set the data
chart.data(mapping);
```

{sample :height 250}WD\_Data\_Tree\_04{sample}

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

For example, this is how you get the sixth child of the third child of the first root item:

```
treeData.getChildAt(0).getChildAt(2).getChildAt(5);
```

Manipulating data very often requires accessing data items, so the methods listed above are used in most samples in the [Data Manipulation](#data_manipulation) section.

## Data Manipulation

You can perform the following data operations:

* [Reading](#reading)
* [Adding](#adding)
* [Updating](#updating)
* [Removing](#removing)
* [Searching](#searching)
* [Traversing](#traversing)

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

To search for an item, use the following methods of the {api:anychart.data.Tree}anychart.data.Tree{api} class:
* {api:anychart.data.Tree#search}search(){api}
* {api:anychart.data.Tree#searchItems}searchItems(){api}
* {api:anychart.data.Tree#sfilter}filter(){api}

#### search()

The {api:anychart.data.Tree#search}search(){api} method returns either an array of data items or one item, while {api:anychart.data.Tree#searchItems}searchItems(){api} always returns an array. Both methods are called with three parameters: the name of a data field, a value, and a comparison function.

In the next sample {api:anychart.data.Tree#search}search(){api}, combined with the {api:anychart.charts.TreeMap#drillTo}drillTo{api} method of the Treemap, is used to find an item with a certain name and drill down to it:

```
/* locate an item in the data tree
and get it as an object */
var item = treeData.search("name", "Item 3-4");

// drill down to the item
chart.drillTo(item);
```

{sample}WD\_Data\_Tree\_10{sample}

The comparison function accepts the name of a data field and a value and returns a negative number, zero, or positive number...

(?) ДОПИСАТЬ ПОДРОБНОСТИ

The following sample shows how to perform a search with the {api:anychart.data.Tree#searchItems}searchItems(){api} method and a comparison function, which is used to access properties of objects in the custom data field `employee`:

```
// create data
var data = [
  {
    name:   "Root",
    actualStart: Date.UTC(2018, 0, 25),
    actualEnd: Date.UTC(2018, 2, 14),
    employee: {firstName: null, lastName: null},
    children: [
      {
        name:   "Child 1",
        actualStart: Date.UTC(2018, 0, 25),
        actualEnd: Date.UTC(2018, 1, 3),
        employee: {firstName: "John", lastName: "Doe"}
      },
      {
        name:   "Child 2",
        actualStart: Date.UTC(2018, 1, 4),
        actualEnd: Date.UTC(2018, 1, 4),
        employee: {firstName: "Frank", lastName: "Foe"}
      },
      {
        name:   "Child 3",
        actualStart: Date.UTC(2018, 1, 4),
        actualEnd: Date.UTC(2018, 1, 24),
        employee: {firstName: "John", lastName: "Doe"}
      },
      {
        name:   "Child 4",
        actualStart: Date.UTC(2018, 1, 24),
        actualEnd: Date.UTC(2018, 2, 14),
        employee: {firstName: "Marta", lastName: "Moe"}
      }
    ]
}];

// create a data tree
treeData = anychart.data.tree(data, "as-tree");

// create a gantt chart
chart = anychart.ganttProject();

// set the data
chart.data(treeData);

// a comparison function
function comparisonFunction(fieldValue, comparisonValue) {
  if (comparisonValue == fieldValue.firstName + fieldValue.lastName) {
    return 0;
  } else {
    return 1;
  }
};

// search for items
var items = treeData.searchItems("employee", "JohnDoe", comparisonFunction);
```

{sample :height 300}WD\_Data\_Tree\_11{sample}

#### filter()

The {api:anychart.data.Tree#filter}filter(){api} method returns an array of data items. It is always called with a filter function as a parameter, which accepts a data item and returns `true` or `false`.

Use this method to set advanced search conditions, for example to find all elements greater or less than a given value or to compare two data fields, like in the sample below.

In this sample a filter function is used to find items with duration greater than a given one. Their names displayed in the title of the chart, and nodes are colored.

```
// search for items with duration equal or greater than a given one
var inputValue = (document.getElementById("inputValue").value) * 1000 * 3600 * 24;
var items = treeData.filter(function(item) {
  return item.get("actualEnd") - item.get("actualStart") >= inputValue;
});
```

{sample :height 300}WD\_Data\_Tree\_12{sample}

#### Indexes

Some [operations](#data_manipulation) are performed faster on indexed data. To create an index on a data field, call the {api:anychart.data.Tree#createIndexOn}createIndexOn(){api} on the instance of {api:anychart.data.Tree}anychart.data.Tree{api} and specify the name of the field as a parameter:

```
// create an index
treeData.createIndexOn("value");
```

**Note:** You cannot create an index on the `parent` or `child` field.

(!) ДОПИСАТЬ ПРО ФУНКЦИЮ

To remove the index on a field, use {api:anychart.data.Tree#removeIndexOn}removeIndexOn(){api} with the name of the field as a parameter:

```
// remove the index
treeData.removeIndexOn("value");
```

When you click the button in the following sample, random tree-like data is generated, then an index is created, and a search on the indexed field is performed. Then the index is removed, and a new search on the same field is preformed. The time each step takes is logged, which allows you to see that the search on the indexed field is faster. The search result is shown on a Treemap chart:

{sample :height 450}WD\_Data\_Tree\_13{sample}

(+) ПРИМЕР С ПОИСКОМ ПО ОБЪЕКТАМ

{sample}WD\_Data\_Tree\_14{sample}

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

{sample}WD\_Data\_Tree\_15{sample}

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

{sample}WD\_Data\_Tree\_16{sample}

## Events

Here is the full list of [events](../Common_Settings/Event_Listeners) that work with the tree data model:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemCreate</td><td> item created</td></tr>
<tr><td>treeItemMove</td><td>item moved</td></tr>
<tr><td>treeItemRemove</td><td>item removed</td></tr>
<tr><td>treeItemUpdate</td><td>item updated</td></tr>
</table>

Please note that you can not only [listen to events](../Common_Settings/Event_Listeners#listener_types), but also stop or start dispatching them by calling the {api:anychart.data.Tree#dispatchEvents}dispatchEvents(){api} method with `true` or `false` as a parameter.

In the sample below, there is a Gantt chart with the [editing mode](../Gantt_Chart/Live_Edit_UI_and_API) enabled: you can use the mouse to update items (change the position, duration, name, etc). Also, there is a button for [adding items](#adding). Even listeners are used to update the chart title whenever an item is updated or added:

```
// update the chart title when an item is updated
treeData.listen("treeItemUpdate", function (e) {
  var itemName = e.item.get("name");
  chart.title().useHtml(true);
  chart.title("Tree Data Model: Events<br><br>" +
              "<span style = 'color:#990000'>" +
              itemName + "</span> updated");
});

// update the chart title when an item is added
treeData.listen("treeItemCreate", function (e) {
  var itemName = e.item.get("name");
  chart.title().useHtml(true);
  chart.title("Tree Data Model: Events<br><br>" +
              "<span style = 'color:#990000'>" +
              itemName + "</span> added");
});
```

{sample}WD\_Data\_Tree\_17{sample}