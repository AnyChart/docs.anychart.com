{:index 5}
# Tree Data Model

## Overview

The tree data model represents data as a hierarchical tree-like structure with data items connected by parent-child relationships.

It is used in the following chart types:

* [Gantt](../Gantt_Chart)
* [Treemap](../Basic_Charts/Treemap_Chart)
* [Sunburst](../Basic_Charts/Sunburst_Chart)
* [Word Tree](../Basic_Charts/Word_Tree)

This article explains how to set tree-like data, access data items, and perform operations on data.

## Classes

Here is the list of classes allowing you to work with tree data in AnyChart:

* tree - {api:anychart.data.Tree}anychart.data.Tree{api}
* item - {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api}
* traverser - {api:anychart.data.Traverser}anychart.data.Traverser{api}

## Quick Start

To create a chart with tree-like data, create a data tree by passing your data to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-tree"` as the second parameter. Then pass the tree to a chart constructor:

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

// set the container id
treemap.container("container");

// initiate drawing the chart
treemap.draw();
```

The following sample shows how to create different chart types with the same tree-like data:

{sample :height 300}WD\_Tree\_Data\_01{sample}

## Setting Data

Tree data structures in Anychart are defined as instances of the {api:anychart.data.Tree}anychart.data.Tree{api} class, and data items are defined as instances of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api}.

To create a chart based on tree-like data, you should organize your data either [as a tree](#as_tree) or [as a table](#as_table). Also, you can use a [CSV string](#csv_string) (see also: [Data from CSV](Data_From_CSV)). Then the data is processed by the component, and an instance of {api:anychart.data.Tree}anychart.data.Tree{api} is created.

**1. Creating Data Tree.** The first step is passing your data to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-tree"` or `"as-table"` as the second parameter:

```
var treeData = anychart.data.tree(data, "as-tree");
```

```
var treeData = anychart.data.tree(data, "as-table");
```

If your data is a CSV string, you should pass a CSV mapping object as the second parameter. Read more in the [CSV String](#csv_string) section.

**2. Creating Chart.** Then pass the instance of the {api:anychart.data.Tree}anychart.data.Tree{api} class created by this method to a chart constructor:

```
var chart = anychart.treeMap(treeData);
```

You can as well skip the first step and pass your data to the **data()** method of the chart or directly to the chart constructor, also with the `"as-tree"` or `"as-table"` parameter. In this case the instance of {api:anychart.data#tree}anychart.data.tree(){api} is created implicitly (to get it, use the **data()** method of the chart).

**3. Data Fields.** The choice of data fields depends on the chart type and on the way your data is structured. If the data is organized [as a tree](#as_tree), the `children` field is always required. If it is organized [as a table](#as_table) or a [CSV string](#csv_string), `id` and `parent` are required - they are used to specify the hierarchy of elements.

**Note 1:** To learn how to rename the default fields of the tree data model (`children`, `parent`, `id`) or map custom fields, see the [Mapping](#mapping) section.

**Note 2:** The `id` field is always required by [Gantt Charts](../Gantt_Chart).

### As Tree

If you organize data **as a tree**, each parent item should have a `children` data field where an array of child items is specified.

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

{sample}WD\_Tree\_Data\_02{sample}

### As Table

If you organize data **as a table**, in the `parent` field of each item, you should specify the `id` value of its parent. The parent of a root item should be set to `null` or just not specified.

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

{sample}WD\_Tree\_Data\_03{sample}

### CSV String

To set data as a **CSV string** (see also: [Data from CSV](Data_From_CSV)), call the {api:anychart.data#tree}anychart.data.tree(){api} method with the following parameters:

* a CSV string
* an object with CSV mapping
* an object with CSV settings (optional)

By default, AnyChart considers commas in CSV data to be column separators and line breaks to be row separators, but you can specify alternative settings in an object and pass it as the third parameter. 

Use the `columnsSeparator` and `rowsSeparator` fields to set separators and `ignoreFirstRow` to ignore the first row of data if needed.

**Note:** The structure of your data should be similar to data set [as a table](#as_table): specify the hierarchy of elements by mapping the `id` and `parent` fields (the choice of other fields depends on the chart type).

The sample below shows how to set data as a CSV string:

```
// create data
var data = "id;parent;name;value*" +
           "1;null;Root*"+
           "2;1;Parent 1*" +
           "3;2;Child 1-1;150000000*" +
           "4;2;Child 1-2;45000000*" +
           "5;2;Child 1-3;3200000*" +
           "6;1;Parent 2;*" +
           "7;6;Child 2-1;55000000*" +
           "8;6;Child 2-2;10600000*" +
           "9;6;Child 2-3;5200000*" +
           "10;1;Parent 3;*" +
           "11;10;Child 3-1;21000000*" +
           "12;10;Child 3-2;9000000*";

// create an object with a csv mapping
csvMapping = {"id": 0, "parent": 1, "name": 2, "value": 3};

// create an object with csv settings
csvSettings = {ignoreFirstRow: true, columnsSeparator: ";", rowsSeparator: "*"};

// create a data tree
var treeData = anychart.data.tree(data, csvMapping, csvSettings);

// create a chart and set the data
var chart = anychart.treeMap(treeData);
```

{sample}WD\_Tree\_Data\_04{sample}

### Mapping

**1.** To rename the fields required by the tree data model - `children`, `parent`, `id` - pass a mapping object to the {api:anychart.data#tree}anychart.data.tree(){api} constructor when you create a data tree.

If you set data [as a tree](#as_tree) or [as a table](#as_table), pass your mapping as the fourth parameter. Please note that the third one should be set to `null` - it is used only with [CSV data](#csv_string) to specify CSV settings. A mapping for CSV data should be passed as the second parameter.

After that, pass the data tree to a chart constructor or to the **data()** method of the chart.

```
// create a data tree
var treeData = anychart.data.tree(data, "as-tree", null, {children: "child_items"});

// create a chart
chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

**2.** In case you need to rename other fields, create a mapping by passing a mapping object to the {api:anychart.data.Tree#mapAs}mapAs{api} method of the data tree. Then pass the mapping to a chart constructor or to the **data()** method of the chart.

```
// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// map the data
var mapping = treeData.mapAs({actualStart: "start_date", actualEnd: "end_date"});

// create a chart
chart = anychart.ganttProject();

// set the data
chart.data(mapping);
```

These two ways of mapping data can be used simultaneously, like in the sample below.

Here the data is set as a tree. The {api:anychart.data#tree}anychart.data.tree(){api} constructor maps a custom field `child_items` as the `children` field required by the tree data model. The {api:anychart.data.Tree#mapAs}mapAs{api} method maps `start_date` and `end_date` as `actualStart` and `actualEnd` required by the Gantt chart:

```
// create data
var data = [
  {
    id: "1",
    name: "Root",
    start_date: "2018-01-15",
    end_date: "2018-03-10",
    child_items: [
      {
        id: "1_1",
        name: "Child 1",
        start_date: "2018-01-15",
        end_date: "2018-01-25"
      },
      {
        id: "1_2",
        name: "Child 2",
        start_date: "2018-01-20",
        end_date: "2018-02-04"
      },
      {
        id: "1_3",
        name: "Child 3",
        start_date: "2018-02-05",
        end_date: "2018-02-05"
      },
      {
        id: "1_4",
        name: "Child 4",
        start_date: "2018-02-05",
        end_date: "2018-02-24"
      },
      {
        id: "1_5",
        name: "Child 5",
        start_date: "2018-02-25",
        end_date: "2018-03-10"
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree", null, {children: "child_items"});

// map the data
var mapping = treeData.mapAs({actualStart: "start_date", actualEnd: "end_date"});

// create a chart
chart = anychart.ganttProject();

// set the data
chart.data(mapping);
```

{sample :height 260}WD\_Tree\_Data\_05{sample}

## Accessing Items

Data items in AnyChart are defined as instances of the {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} class. If you need to access them, you can either [search](#searching) for them or call special methods.

To access items at the root level, use the following methods of {api:anychart.data.Tree}anychart.data.Tree{api}:

* {api:anychart.data.Tree#getChildAt}getChildAt(){api} - returns a root item with a given index
* {api:anychart.data.Tree#getChildren}getChildren(){api} - returns an array of root items
* {api:anychart.data.Tree#numChildren}numChildren(){api} - returns the number of roots
* {api:anychart.data.Tree#indexOfChild}indexOfChild(){api} - returns the index of a given item (or -1 if it is a root)

To go deeper, use methods of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api}:

* {api:anychart.data.Tree.DataItem#getChildAt}getChildAt(){api} - returns an item's child with a given index
* {api:anychart.data.Tree.DataItem#getChildren}getChildren(){api} - returns an array containing all children of an item
* {api:anychart.data.Tree.DataItem#numChildren}numChildren(){api} - returns the number of an item's children
* {api:anychart.data.Tree.DataItem#getParent}getParent(){api} - returns the parent of an item

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

{sample}WD\_Tree\_Data\_06{sample}

### Adding

You can add a root item to your data: call the {api:anychart.data.Tree#addChild}addChild(){api} or {api:anychart.data.Tree#addChildAt}addChildAt(){api} method on the instance of {api:anychart.data.Tree}anychart.data.Tree{api}. Please note that the second method adds an item with a given index.

To add a child element to a data item, [access](#accessing_items) the instance of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} and call {api:anychart.data.Tree.DataItem#addChild}addChild(){api} or {api:anychart.data.Tree.DataItem#addChild}addChildAt(){api} on it:

```
// add a new data item
treeData.getChildAt(0).addChild({"name": "New Child", "value": 10000000});
```

{sample}WD\_Tree\_Data\_07{sample}

You can also add several root items at once by using the {api:anychart.data.Tree#addData}addData(){api} method:

```
//create new data
var newData = [
  {"name": "New Node 1", "value": 10000000},
  {"name": "New Node 2", "value": 10000000}
];

// add new data
treeData.addData(newData, "as-tree");
```

**Note:** Only one root element can be displayed on the Treemap chart, so using this method does not change the way the Treemap looks, though the data is updated anyway.

Here is a Sunburst chart with a button adding two root nodes at a time:

{sample :width 500 :height 500}WD\_Tree\_Data\_08{sample}

### Updating

To update a data field of an item, [access](#accessing_items) the instance of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} and call {api:anychart.data.Tree.DataItem#set}set(){api}. Use the name of the field and a new value as parameters:

```
// update the first child
treeData.getChildAt(0).getChildAt(0).set("name", "New Name");
treeData.getChildAt(0).getChildAt(0).set("value", 120000000);
treeData.getChildAt(0).getChildAt(0).set("fill", "#00bfa5");
```

{sample}WD\_Tree\_Data\_09{sample}

### Removing

To remove root items from your data, call one of the following methods on the instance of {api:anychart.data.Tree}anychart.data.Tree{api}:

* {api:anychart.data.Tree#removeChild}removeChild(){api} - removes a root
* {api:anychart.data.Tree#removeChildAt}removeChildAt(){api} - removes a root with a given index
* {api:anychart.data.Tree#removeChildren}removeChildren(){api} - removes all roots 

To remove a child of a data item, [access](#accessing_items) the instance of {api:anychart.data.Tree.DataItem}anychart.data.Tree.DataItem{api} and call one of these methods:

* {api:anychart.data.Tree.DataItem#removeChild}removeChild(){api} - removes a child
* {api:anychart.data.Tree.DataItem#removeChildAt}removeChildAt(){api} - removes a child with a given index
* {api:anychart.data.Tree.DataItem#removeChildren}removeChildren(){api} - removes all children

In this sample the current last child of the root item is removed each time you press the button:

```
var lastChild = treeData.getChildAt(0).getChildren().length - 1;
treeData.getChildAt(0).removeChildAt(lastChild);
```

{sample}WD\_Tree\_Data\_10{sample}

### Searching

To search for an item, use the following methods of the {api:anychart.data.Tree}anychart.data.Tree{api} class:
* {api:anychart.data.Tree#search}search(){api}
* {api:anychart.data.Tree#searchItems}searchItems(){api}
* {api:anychart.data.Tree#filter}filter(){api}

#### search()

The {api:anychart.data.Tree#search}search(){api} method returns either an array of data items or one item, while {api:anychart.data.Tree#searchItems}searchItems(){api} always returns an array. Both methods are called with three parameters: the name of a data field, a value, and a comparison function.

In the next sample {api:anychart.data.Tree#search}search(){api}, combined with the {api:anychart.charts.TreeMap#drillTo}drillTo(){api} method of the Treemap, is used to find an item with a certain name and drill down to it:

```
/* locate an item in the data tree
and get it as an object */
var item = treeData.search("name", "Item 3-4");

// drill down to the item
chart.drillTo(item);
```

{sample}WD\_Tree\_Data\_11{sample}

The comparison function accepts the name of a data field and a value and returns a negative number, zero, or positive number.

The following sample shows how to perform a search with the {api:anychart.data.Tree#searchItems}searchItems(){api} method and a comparison function, which is used to access properties of objects in the custom data field `employee`:

```
// create data
var data = [
  {
    id: "1",
    name: "Root",
    actualStart: "2018-01-15",
    actualEnd: "2018-03-10",
    actual: {},
    employee: {firstName: null, lastName: null},
    children: [
      {
        id: "1_1",
        name: "Child 1",
        actualStart: "2018-01-15",
        actualEnd: "2018-01-25",
        employee: {firstName: "John", lastName: "Doe"}
      },
      {
        id: "1_2",
        name: "Child 2",
        actualStart: "2018-01-20",
        actualEnd: "2018-02-04",
        employee: {firstName: "Frank", lastName: "Foe"}
      },
      {
        id: "1_3",
        name: "Child 3",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-05",
        employee: {firstName: "Marta", lastName: "Moe"}
      },
      {
        id: "1_4",
        name: "Child 4",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-24",
        employee: {firstName: "John", lastName: "Doe"}
      },
      {
        id: "1_5",
        name: "Child 5",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-10",
        employee: {firstName: "Jane", lastName: "Poe"}
      }
  ]}
];

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
}

// search for items
var items = treeData.searchItems("employee", "JohnDoe", comparisonFunction);
```

{sample :height 300}WD\_Tree\_Data\_12{sample}

#### filter()

The {api:anychart.data.Tree#filter}filter(){api} method returns an array of data items. It is always called with a filter function as a parameter, which accepts a data item and returns `true` or `false`.

Use this method to set advanced search conditions - for example, to find all elements greater or less than a given value or to compare two data fields, like in the sample below.

In this sample a filter function is used to find items with duration greater than a given one, duration being calculated from two data fields (the names of these items are displayed in the title of the chart, and their nodes are colored):

```
// search for items with duration equal or greater than a given one
var input = (document.getElementById("valueInput").value) * 1000 * 3600 * 24;
var items = treeData.filter(function(item) {
  return item.get("actualEnd") - item.get("actualStart") >= input;
});
```

{sample :height 335}WD\_Tree\_Data\_13{sample}

#### Indexes

Some [operations](#data_manipulation) are performed faster on indexed data. To create an index on a data field, call the {api:anychart.data.Tree#createIndexOn}createIndexOn(){api} on the instance of {api:anychart.data.Tree}anychart.data.Tree{api} and specify the name of the field as a parameter:

```
// create an index
treeData.createIndexOn("value");
```

**Note:** You cannot create an index on the `parent` or `child` field.

To remove the index on a field, use {api:anychart.data.Tree#removeIndexOn}removeIndexOn(){api} with the name of the field as a parameter:

```
// remove the index
treeData.removeIndexOn("value");
```

### Traversing

Traversing is a process of going through all the items of a tree. You can [access](#accessing_items) them directly, but AnyChart offers an easier and faster out-of-the-box solution.

To perform a traversal, use the {api:anychart.data.Tree#getTraverser}getTraverser(){api} method to obtain the {api:anychart.data.Traverser}anychart.data.Traverser{api} object. Then call its methods:

* {api:anychart.data.Traverser#advance}advance(){api} - advances the traverser to the next item
* {api:anychart.data.Traverser#current}current(){api} - returns the current item
* {api:anychart.data.Traverser#get}get(){api} - returns the current item's value in a given field
* {api:anychart.data.Traverser#getDepth}getDepth(){api} - returns the depth of the current item
* {api:anychart.data.Traverser#meta}meta(){api} - sets / gets the meta value of the current item in a given field
* {api:anychart.data.Traverser#nodeYieldCondition}nodeYieldCondition(){api} - sets / gets a function that determines whether an item is returned
* {api:anychart.data.Traverser#set}set(){api} - sets the value of the current item in a given field
* {api:anychart.data.Traverser#reset}reset(){api} - resets the traverser to its default position before the first item
* {api:anychart.data.Traverser#toArray}toArray(){api} - returns the current traverser as an array of items
* {api:anychart.data.Traverser#traverseChildrenCondition}traverseChildrenCondition(){api} - sets / gets a function that determines whether the traverser goes through the children of an item

In the sample below the {api:anychart.data.Traverser#advance}advance(){api} and {api:anychart.data.Traverser#get}get(){api} methods are used to display the names of all the data items:

```
// get the traverser of a tree
var traverser = treeData.getTraverser();

/* get the element displaying information about the tree */
var treeInfo = document.getElementById("treeInfo");

// display the names of all data items in the tree
while (traverser.advance()) {
  var newElement = document.createElement("li");
  newElement.innerText = traverser.get("name");
  treeInfo.appendChild(newElement);
}
```

{sample}WD\_Tree\_Data\_14{sample}

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
}
```

{sample}WD\_Tree\_Data\_15{sample}

## Events

Here is the full list of events that work with the tree data model:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>treeItemMove</td><td>A data item has been moved.</td></tr>
<tr><td>treeItemUpdate</td><td>A data item has been updated.</td></tr>
<tr><td>treeItemCreate</td><td>A data item has been created.</td></tr>
<tr><td>treeItemRemove</td><td>A data item has been removed.</td></tr>
</table>

You can [listen to events](../Common_Settings/Event_Listeners) as well as stop or start dispatching them by calling the {api:anychart.data.Tree#dispatchEvents}dispatchEvents(){api} method with `false` or `true` as a parameter.

In the sample below, there is a Gantt chart with the [Live Edit](../Gantt_Chart/Live_Edit) mode enabled. When you can drag and drop rows, `"treeItemMove"` is triggered. When you edit [elements](../Gantt_Chart/Elements) and the [data grid](../Gantt_Chart/Data_Grid) text, `"treeItemUpdate"` fires. To learn more, see [Live Edit: Default Behavior](../Gantt_Chart/Live_Edit#default_behavior).

Also, there is a custom button for [adding items](#adding), which triggers `"treeItemCreate"`.

Event listeners are used to update the chart title:

{sample :height 420}WD\_Tree\_Data\_16{sample}

```
/* listen to the treeItemMove event
and update the chart title */
treeData.listen("treeItemMove", function (e) {
  var itemName = e.item.get("name");
  chart.title("Tree Data Model: Events<br><br>< " +
              "<span style = 'color:#990000'>" +
              itemName + ": </span> treeItemMove >");
});

/* listen to the treeItemUpdate event
and update the chart title */
treeData.listen("treeItemUpdate", function (e) {
  var itemName = e.item.get("name");
  chart.title("Tree Data Model: Events<br><br>< " +
              "<span style = 'color:#990000'>" +
              itemName + ": </span> treeItemUpdate >");
});

/* listen to the treeItemCreate event
and update the chart title */
treeData.listen("treeItemCreate", function (e) {
  var itemName = e.item.get("name");
  chart.title("Tree Data Model: Events<br><br>< " +
              "<span style = 'color:#990000'>" +
              itemName + "</span>: treeItemCreate >");
});
```