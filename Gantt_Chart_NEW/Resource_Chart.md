{:index 5}
# Resource Gantt Chart

## Overview

* Resource charts are defined as instances of the {api:anychart.charts.Gantt}anychart.charts.Gantt{api}
 class.
* The main [element](Elements) of the resource chart is the [period](#periods_and_resources)...

## Quick Start

To create a Resource Gantt chart, use the {api:anychart#ganttResource}anychart.ganttResource{api} chart constructor, like in the sample below. To learn more, see the [Quick Start (Resource)](Quick_Start_\(Resource\)) article.

```
// create data
var data = [
  {
    id: "1",
    name: "Server 1",
    periods: [
      {id:"1_1", start: "2018-01-02", end: "2018-01-25"},
      {id:"1_2", start: "2018-01-28", end: "2018-02-22"},
      {id:"1_3", start: "2018-03-03", end: "2018-03-25"}
  ]},
  {
    id: "2",
    name: "Server 2",
    periods: [
      {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
      {id: "2_2", start: "2018-02-26", end: "2018-03-20"}
  ]},
  {
    id: "3",
    name: "Server 3",
    periods: [
      {id: "3_1", start: "2018-01-04", end: "2018-03-25"}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-table");

// create a chart
var chart = anychart.ganttResource(); 

// set the data
chart.data(treeData);  

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();

// fit items to the width of the timeline
chart.fitAll();
```

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_01{sample}

## Data

### Data Fields

The Resource chart requires setting [resources](#periods_and_resources) by using the following data fields:

* `id` to set unique identifiers
* `name` to set names

A resource can include a [period](#periods_and_resources) or periods. Use these fields:

* `periods` to add an array of periods
* `id` to set unique identifiers
* `start` to set start dates
* `end` to set end dates

In addition, you can use optional fields:

* `children` / `parent` to set the [hierarchy](#hierarchy)
* `rowHeight` to set the [row height](Basic_Settings#header_and_row_height)
* `collapsed` to [expand or collapse](Basic_Settings#navigation) a parent resource

To learn how to rename the default data fields, see [Data: Mapping](Data#mapping).

(?) You can also add custom fields to your data and use them to configure [data grid tooltips](Data_Grid/Tooltips), [data grid labels](Data_Grid/Text(Labels)), [timeline tooltips](Timeline/Tooltips), and [labels of elements](Elements#labels).

### Setting Data

To create a Resource chart, you should use the [tree data model](../Working_with_Data/Tree_Data_Model) and organize your data either [as a tree](#as_tree) or [as a table](#as_table).

**1. Creating Data Tree.** The first step is creating a data tree by passing your data to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-tree"` or `"as-table"` as the second parameter:

```
var treeData = anychart.data.tree(data, "as-tree");
```

```
var treeData = anychart.data.tree(data, "as-table");
```

If the [hierarchy](#hierarchy) between data items is not specified, there is no difference between the tree and table structures, and both parameters can be used.

For example, in the [Quick Start](#quick_start) section, there is a sample where the `"as-table"` parameter is used, but it can be replaced with `"as-tree"` without changing the data structure since all data items occupy the same place in the hierarchy.

**2. Creating Chart.** Then create a Resource chart by using the {api:anychart#ganttResource}anychart.ganttResource{api} chart constructor:

```
var chart = anychart.ganttResource();
```

**3. Setting Data.** Finally, pass the data tree to the {api:anychart.charts.Gantt#data}data(){api} method of the chart:

```
chart.data(treeData);
```

You can as well skip the first step and pass your data directly to the {api:anychart.charts.Gantt#data}data(){api} method, also with the `"as-tree"` or `"as-table"` parameter. In this case the data tree is created implicitly.

### Hierarchy

You can specify the hierarchical relationships between the data items of a Resource Gantt chart. There are two ways to set them, depending on how you organize the data: [as a tree](#as_tree) or [as a table](#as_table).

Please note that Resource charts can have multiple roots. Also, you can create data without specifying the hierarchy, like in the [Quick Start](#quick_start) section. In this case, technically, all items are roots.

#### As Tree

If you organize data **as a tree**, each parent item should have a `children` data field where an array of child items is specified.

The following sample shows how to set data with two roots as a tree:

```
// create data
var data = [
  {
    id: "A",
    name: "Location A",
    children: [
      {
        id: "1",
        name: "Server 1",
        periods: [
          {id: "1_1", start: "2018-01-02", end: "2018-01-25"},
          {id: "1_2", start: "2018-01-28", end: "2018-02-22"},
          {id: "1_3", start: "2018-03-03", end: "2018-03-25"}
      ]},
      {
        id: "2",
        name: "Server 2",
        periods: [
          {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
          {id: "2_2", start: "2018-02-26", end: "2018-03-20"}
      ]}
  ]},
  {
    id: "B",
    name: "Location B",
    children: [
      {
        id: "3",
        name: "Server 3",
        periods: [
          {id: "3_1", start: "2018-01-04", end: "2018-03-25"}
      ]}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttResource(); 

// set the data
chart.data(treeData);  
```

{sample :height 200}GANTT\_NEW\_Resource\_Chart\_02{sample}

#### As Table

If you organize data **as a table**, in the `parent` field of each item, you should specify the `id` value of its parent. The parent of a root item should be set to `null` or just not specified.

This sample shows how to set data with two roots as a table:

```
// create data
var data = [
  {
    id: "A",
    name: "Location A",
    parent: null
  },
  {
    id: "1",
    name: "Server 1",
    parent: "A",
    periods: [
      {id: "1_1", start: "2018-01-02", end: "2018-01-25"},
      {id: "1_2", start: "2018-01-28", end: "2018-02-22"},
      {id: "1_3", start: "2018-03-03", end: "2018-03-25"}
  ]},
  {
    id: "2",
    name: "Server 2",
    parent: "A",
    periods: [
      {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
      {id: "2_2", start: "2018-02-26", end: "2018-03-20"}
  ]},
  {
    id: "B",
    name: "Location B",
    parent: null
  },
  {
    id: "3",
    name: "Server 3",
    parent: "B",
    periods: [
      {id: "3_1", start: "2018-01-04", end: "2018-03-25"}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-table");

// create a chart
var chart = anychart.ganttResource(); 

// set the data
chart.data(treeData);  
```

{sample :height 200}GANTT\_NEW\_Resource\_Chart\_03{sample}

## Elements

This section briefly explains how to add and configure the elements that are shown on the [timeline](Timeline) of the Resource chart. To learn more, see the [Elements](Elements) article.

The main timeline element of the Resource chart is the period, but logically, periods are grouped into resources – see [Periods and Resources](#periods_and_resources). Also, you can set [markers](Elements#markers) by adding special data fields to resources.

### Periods and Resources

**Resources** are logical elements. They have no direct representation on the [timeline](Timeline), but their names are shown as [data grid labels](Data_Grid/Text(Labels)). Any resource can include a **period** or periods, which are visualized as timeline elements.

For resources, use the following data fields:

* `"name"` to set names
* `"id"` to set unique identifiers
* `children` / `parent` (optional) to set the [hierarchy](#hierarchy)

For periods, use:

* `periods` to add an array of periods
* `id` to set unique identifiers
* `start` to set start dates
* `end` to set end dates

To learn how to configure periods, see the [Elements: Periods](Elements#periods) section. 

The sample below demonstrates how to set periods and resources and how they look like:

```
// create data
var data = [
  {
    id: "1",
    name: "Resource",
    periods: [
      {id:"1_1", start: "2018-01-02", end: "2018-01-25"},
      {id:"1_2", start: "2018-01-28", end: "2018-02-22"},
      {id:"1_3", start: "2018-03-03", end: "2018-03-25"}
  ]},
  {
    id: "2",
    name: "Resource",
    periods: [
      {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
      {id: "2_2", start: "2018-02-26", end: "2018-03-20"}
  ]},
  {
    id: "3",
    name: "Resource",
    periods: [
      {id: "3_1", start: "2018-01-04", end: "2018-03-25"}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-table");

// create a chart
var chart = anychart.ganttResource(); 

// set the data
chart.data(treeData);  
```

{sample :height 160}GANTT\_NEW\_Resource\_Chart\_04{sample}

### Markers

You can add a **marker** or multiple markers to a resource. A marker can be shown on a period or anywhere on the timeline, depending on the date you specify. For more information, see [Elements: Markers](Elements#markers).

## (?) Other Settings