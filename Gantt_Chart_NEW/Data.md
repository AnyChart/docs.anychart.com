{:index 6}
# Data

## Overview

This article explains how to organize, map, and set data for Gantt charts.

AnyGantt requires using the tree data model, which represents data as a hierarchical tree-like structure with data items connected by parent–child relationships. To learn more about it, read [Working with Data: Tree Data Model](../Working_with_Data/Tree_Data_Model).

Also, please keep in mind that working with data is slightly different for Project and Resource charts – see the [Project Chart: Data](Project_Chart#data) and [Resource Chart: Data](Resource_Chart#data) sections.

**Note:** You can rename default data fields, as explained in the [Mapping](#mapping) section of this article.

## Data Fields

Project and Resource charts work with different data fields:

* [Project Chart: Data Fields](Project_Chart#data_fields)
* [Resource Chart: Data Fields](Resource_Chart#data_fields)

Here is the full list of available fields: {api:anychart.enums.GanttDataFields}anychart.enums.GanttDataFields{api}.

**Note 1:** You can rename the default data fields – see the [Mapping](#mapping) section of this article.

**Note 2:** You can also add custom fields to your data and use them to configure text – like, for example, in all the samples from [Timeline: Tooltips](Timeline/Tooltips).

## Setting Data

To create a Gantt chart, perform the following steps:

**1.** Create a data tree by passing data to the {api:anychart.data#tree}anychart.data.tree(){api} constructor.<br>
**2.** Create a chart by using the {api:anychart#ganttProject}anychart.ganttProject(){api} / {api:anychart#ganttResource}anychart.ganttResource(){api} construtor.<br>
**3.** Pass the data tree to the {api:anychart.charts.Gantt#data}data(){api} method of the chart.


```
var treeData = anychart.data.tree(data, "as-tree");
var chart = anychart.ganttProject();
chart.data(treeData);
```

See the following sections to learn more:

* [Project Chart: Setting Data](Project_Chart#setting_data)
* [Resource Chart: Setting Data](Resource_Chart#setting_data)
* [Tree Data Model: Setting Data](../Working_with_Data/Tree_Data_Model#setting_data)

## Hierarchy

The sections below explain how to organize your data hierarchically:

* [Project Chart: Hierarchy](Project_Chart#hierarchy)
* [Resource Chart: Hierarchy](Resource_Chart#hierarchy)

## Mapping

To rename the `children`, `parent`, and `id` fields, use the {api:anychart.data#tree}anychart.data.tree(){api} constructor. Then pass the data tree to the {api:anychart.charts.Gantt#data}data(){api} method of the chart:

```
// create a data tree
var treeData = anychart.data.tree(data, "as-tree", null, {children: "child_items"});

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

To rename other fields, create a mapping by using the {api:anychart.data.Tree#mapAs}mapAs{api} method. Then pass it to the {api:anychart.charts.Gantt#data}data(){api} method of the chart:

```
// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// map the data
var mapping = treeData.mapAs({actualStart: "start_date"});

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(mapping);
```

These two ways of mapping data can be used simultaneously, like in the samples below.

Read more: [Tree Data Model: Mapping](../Working_with_Data/Tree_Data_Model#mapping).

### Project Chart

Here custom fields `child_items`, `start_date`, `end_date` are mapped as `children`, `actualStart`, `actualEnd`:

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    start_date: "2018-01-15",
    end_date: "2018-03-10",
    child_items: [
      {
        id: "1_1",
        name: "Analysis",
        start_date: "2018-01-15",
        end_date: "2018-01-25"
      },
      {
        id: "1_2",
        name: "Design",
        start_date: "2018-01-20",
        end_date: "2018-02-04"
      },
      {
        id: "1_3",
        name: "Meeting",
        start_date: "2018-02-05",
        actualEnd: "2018-02-05"
      },
      {
        id: "1_4",
        name: "Implementation",
        start_date: "2018-02-05",
        end_date: "2018-02-24"
      },
      {
        id: "1_5",
        name: "Testing",
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
var chart = anychart.ganttProject();

// set the data
chart.data(mapping);
```

{sample :height 220}GANTT\_NEW\_Data\_01{sample}

### Resource Chart

In this sample custom fields `child_items` and `intervals` are mapped as `children` and `periods`:

```
// create data
var data = [
  {
    id: "A",
    name: "Location A",
    child_items: [
      {
        id: "1",
        name: "Server 1",
        intervals: [
          {id: "1_1", start: "2018-01-02", end: "2018-01-25"},
          {id: "1_2", start: "2018-01-28", end: "2018-02-22"},
          {id: "1_3", start: "2018-03-03", end: "2018-03-25"}
      ]},
      {
        id: "2",
        name: "Server 2",
        intervals: [
          {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
          {id: "2_2", start: "2018-02-26", end: "2018-03-20"}
      ]}
  ]},
  {
    id: "B",
    name: "Location B",
    child_items: [
      {
        id: "3",
        name: "Server 3",
        intervals: [
          {id: "3_1", start: "2018-01-04", end: "2018-03-25"}
      ]}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree", null, {children: "child_items"});

// map the data
var mapping = treeData.mapAs({periods: "intervals"});

// create a chart
var chart = anychart.ganttResource();

// set the data
chart.data(mapping);
```

{sample :height 220}GANTT\_NEW\_Data\_02{sample}