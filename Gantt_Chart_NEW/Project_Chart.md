{:index 4}
# Project Gantt Chart

## Overview

The Project Gantt chart, defined as an instance of {api:anychart.charts.Gantt}anychart.charts.Gantt{api} class, is used to schedule projects.

Project tasks are visualized as horizontal bars, their width representing the duration. It is also possible to show the progress of tasks as well as hierarchical relationships and connections between them.

This is how the Project chart is structured:

<img width="700" src ="https://static.anychart.com/images/project_timeline.jpg" />

This article explains how to organize [data](#data) for the Project chart and what timeline [elements](#elements) it displays.

## Quick Start

To create a Project Gantt chart, use the {api:anychart#ganttProject}anychart.ganttProject{api} chart constructor, like in the sample below. To learn more, see the [Quick Start (Project)](Quick_Start_\(Project\)) article.

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-25",
    actualEnd: "2018-03-10",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: "2018-01-25",
        actualEnd: "2018-02-08"
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: "2018-02-04",
        actualEnd: "2018-02-14"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-02-15",
        actualEnd: "2018-02-15"
      },
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "2018-02-15",
        actualEnd: "2018-02-27"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "2018-02-28",
        actualEnd: "2018-03-10"
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
```

{sample :height 220}GANTT\_NEW\_Project\_Chart\_01{sample}

## Data

### Data Fields

The Project chart requires setting [tasks](#tasks_\(actual\)) by using the following data fields:

* `id` to set unique identifiers
* `name` to set names
* `actualStart` to set start dates
* `actualEnd` to set end dates

In addition, you can use optional fields:

* `children` / `parent` to set the [hierarchy](#hierarchy)
* `baselineStart` and `baselineEnd` to add [baselines](#baselines_\(planned\))
* `progressValue` to add [progress bars](#progress_bars)
* `connectTo` and `connectorType` to add [connectors](#connectors)
* `actual`, `baseline`, `progress`, and `connector` to configure [individual elements](Elements/Individual_Elements#project_chart)
* `markers` to add [markers](#milestones_and_markers)
* `rowHeight` to set the [row height](Basic_Settings#header_and_row_height)
* `collapsed` to [expand or collapse](../Basic_Settings#expanding_/_collapsing) a parent task

To learn how to rename the default data fields, see [Data: Mapping](Data#mapping).

**Note:** You can also add custom fields to your data and use them to configure text – like, for example, in all the samples from [Timeline: Tooltips](Timeline/Tooltips).

### Setting Data

To create a Project chart, you should use the [tree data model](../Working_with_Data/Tree_Data_Model) and organize your data either [as a tree](#as_tree) or [as a table](#as_table).

**1. Creating Data Tree.** The first step is creating a data tree by passing your data to the {api:anychart.data#tree}anychart.data.tree(){api} method with `"as-tree"` or `"as-table"` as the second parameter:

```
var treeData = anychart.data.tree(data, "as-tree");
```

```
var treeData = anychart.data.tree(data, "as-table");
```

If the [hierarchy](#hierarchy) between data items is not specified, there is no difference between the tree and table structures, and both parameters can be used.

**2. Creating Chart.** Then create a Project chart by using the {api:anychart#ganttProject}anychart.ganttProject(){api} chart constructor:

```
var chart = anychart.ganttProject();
```

**3. Setting Data.** Finally, pass the data tree to the {api:anychart.charts.Gantt#data}data(){api} method of the chart:

```
chart.data(treeData);
```

You can as well skip the first step and pass your data directly to the {api:anychart.charts.Gantt#data}data(){api} method, also with the `"as-tree"` or `"as-table"` parameter. In this case the data tree is created implicitly.

### Hierarchy

Usually, there are hierarchical relationships between data items of Project Gantt charts. There are two ways to specify these relationships, depending on how you organize the data: [as a tree](#as_tree) or [as a table](#as_table).

Please note that Project charts can have multiple roots. Also, you can create data without specifying the hierarchy – in this case, technically, all items are roots.

#### As Tree

If you organize data **as a tree**, each parent item should have a `children` data field where an array of child items is specified.

The following sample shows how to set data with two roots as a tree:

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-25",
    actualEnd: "2018-03-10",
    children: [
      {
        id: "1_2",
        name: "Analysis",
        actualStart: "2018-01-25",
        actualEnd: "2018-02-08"
      },
      {
        id: "1_3",
        name: "Design",
        actualStart: "2018-02-04",
        actualEnd: "2018-02-14"
      },
      {
        id: "1_4",
        name: "Meeting",
        actualStart: "2018-02-15",
        actualEnd: "2018-02-15"
      },
      {
        id: "1_5",
        name: "Implementation",
        actualStart: "2018-02-15",
        actualEnd: "2018-02-27"
      },
      {
        id: "1_6",
        name: "Testing",
        actualStart: "2018-02-28",
        actualEnd: "2018-03-10"
      }
  ]},
  { 
    id: "2",
    name: "PR Campaign",
    actualStart: "2018-02-15",
    actualEnd: "2018-03-22",
    children: [
      {
        id: "2_1",
        name: "Planning",
        actualStart: "2018-02-15",
        actualEnd: "2018-03-10"
      },
      {
        id: "2_2",
        name: "Promoting",
        actualStart: "2018-03-11",
        actualEnd: "2018-03-22"
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 280}GANTT\_NEW\_Project\_Chart\_02{sample}

#### As Table

If you organize data **as a table**, in the `parent` field of each item, you should specify the `id` value of its parent. The parent of a root item should be set to `null` or just not specified.

This sample shows how to set data with two roots as a table:

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-25",
    actualEnd: "2018-03-10"
  },
  {
    id: "1_2",
    parent: "1",
    name: "Analysis",
    actualStart: "2018-01-25",
    actualEnd: "2018-02-08"
  },
  {
    id: "1_3",
    parent: "1",
    name: "Design",
    actualStart: "2018-02-04",
    actualEnd: "2018-02-14"
  },
  {
    id: "1_4",
    parent: "1",
    name: "Meeting",
    actualStart: "2018-02-15",
    actualEnd: "2018-02-15"
  },
  {
    id: "1_5",
    parent: "1",
    name: "Implementation",
    actualStart: "2018-02-15",
    actualEnd: "2018-02-27"
  },
  {
    id: "1_6",
    parent: "1",
    name: "Testing",
    actualStart: "2018-02-28",
    actualEnd: "2018-03-10"
  },
  {
    id: "2",
    name: "PR Campaign",
    actualStart: "2018-02-28",
    actualEnd: "2018-03-22"
  },
  {
    id: "2_1",
    parent: "2",
    name: "Planning",
    actualStart: "2018-02-15",
    actualEnd: "2018-03-10"
  },
  {
    id: "2_2",
    parent: "2",
    name: "Promoting",
    actualStart: "2018-03-11",
    actualEnd: "2018-03-22"
  }
];
    
// create a data tree
var treeData = anychart.data.tree(data, "as-table");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 280}GANTT\_NEW\_Project\_Chart\_03{sample}

## Elements

This section briefly explains how to add and configure the elements that are shown on the [timeline](Timeline) of the Project chart. To learn more, see the [Elements](Elements) section.

The main element of the Project chart is the [task](#tasks_\(actual\)). Other elements, such as [baselines](#baselines_\(planned\)), [progress bars](#progress_bars), [connectors](#connectors), and [markers](Elements/Markers), are set by adding special data fields to tasks.

### Tasks (Actual)

A **task** is an element showing the **actual duration** of a task, while the planned duration is represented by the [baseline](#baselines_\(planned\)).

The following data fields are used to set tasks:

* `name` to set names
* `id` to set unique identifiers
* `actualStart` to set start dates
* `actualEnd` to set end dates
* `children` / `parent` (optional) to set the [hierarchy](#hierarchy)
* `actual` (optional) to configure [individual tasks](Elements/Individual_Elements#project_chart)

There are three task types, each of them visualized in a different way:

* regular tasks
* parent tasks
* milestones

The difference between **regular tasks** and **parent tasks** lies in their relationships with other tasks: parent tasks have children, and regular ones do not. To set these relationships, use the  `children` or `parent` data field – read the [Hierarchy](#hierarchy) section to learn more.


Note that if you do not specify the  `actualStart` and `actualEnd` dates of a parent task, they are calculated automatically from the dates of its children.

Also, see [Basic Settings: Expanding / Collapsing](../Basic_Settings#expanding_/_collapsing) to learn how to expand or collapse parent tasks.

**Milestones** are elements representing events. To add a milestone, you should create a task with zero duration: specify the same date in the `actualStart` and `actualEnd` fields.

If you need to create multiple milestones in one row, use an alternative way to visualize events – add **markers**. Multiple markers can be shown in one row – on a task or anywhere on the timeline depending on the dates you specify. For more information, see [Elements: Markers](Elements/Markers).

To learn how to configure tasks, see the [Elements: Project Chart](Elements/Project_Chart#tasks_\(actual\)) article. 

The sample below demonstrates task types. Also, it shows that regular and parent tasks can occupy different places in the hierarchy: a parent task can be a child itself, and a regular task can be a root.

```
// create data
var data = [
  {
    id: "1",
    name: "Parent Task",
    actualStart: "2018-01-25",
    actualEnd: "2018-03-10",
    children: [
      {
        id: "1_1",
        name: "Task",
        actualStart: "2018-01-15",
        actualEnd: "2018-01-25"
      },
      {
        id: "1_2",
        name: "Task",
        actualStart: "2018-01-20",
        actualEnd: "2018-02-04"
      },
      {
        id: "1_3",
        name: "Milestone",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-05"
      },
      {
        id: "1_4",
        name: "Parent Task",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-24",
        children: [
          {
            id: "1_4_1",
            name: "Task",
            actualStart: "2018-02-05",
            actualEnd: "2018-02-10"
          },
          {
            id: "1_4_2",
            name: "Task",
            actualStart: "2018-02-11",
            actualEnd: "2018-02-24"
          }
      ]},
      {
        id: "2",
        name: "Task",
        actualStart: "2018-02-05",
        actualEnd: "2018-03-10",
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 260}GANTT\_NEW\_Project\_Chart\_04{sample}

### Baselines (Planned)

A **baseline** is an element showing the **planned duration** of a regular or parent [task](#tasks_\(actual\)).

The following data fields are used to set baselines:

* `baselineStart` to set start dates
* `baselineEnd` to set end dates
* `baseline` (optional) to configure [individual baselines](Elements/Individual_Elements#project_chart)

By default, baselines are shown under tasks, but can be placed above them – see the [Elements: Project Chart](Elements/Project_Chart#baselines_\(planned\)) article.

In this sample, baselines are added to all regular tasks and the parent one:

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    baselineStart: "2018-01-12",
    baselineEnd: "2018-03-04",
    actualStart: "2018-01-15",
    actualEnd: "2018-03-10",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        baselineStart: "2018-01-12",
        baselineEnd: "2018-01-25",
        actualStart: "2018-01-15",
        actualEnd: "2018-01-25"
      },
      {
        id: "1_2",
        name: "Design",
        baselineStart: "2018-01-20",
        baselineEnd: "2018-01-31",
        actualStart: "2018-01-20",
        actualEnd: "2018-02-04"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-05"
      },
      {
        id: "1_4",
        name: "Implementation",
        baselineStart: "2018-02-01",
        baselineEnd: "2018-02-19",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-24"
      },
      {
        id: "1_5",
        name: "Testing",
        baselineStart: "2018-02-20",
        baselineEnd: "2018-03-05",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-10"
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 220}GANTT\_NEW\_Project\_Chart\_05{sample}

### Progress Bars

A **progress bar** is an element showing the progress of a regular or parent [task](#tasks_\(actual\)). Also, the progress is shown in [labels](Elements/Labels) of tasks. 

The following data fields are used to set progress bars:

* `progressValue` to set the progress value as a percentage
* `progress` (optional) to configure [individual progress bars](Elements/Individual_Elements#project_chart)

By default, the progress value of all tasks is 0%, so progress bars are not shown. If you do not set the progress value of a parent task, it is calculated automatically from the progress values of its children.

To learn how to configure progress bars, see the [Elements: Project Chart](Elements/Project_Chart#progress_bars) article.

In the following sample, progress values are added to all regular tasks except for the last one. The progress value of the parent task is calculated automatically.

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-15",
    actualEnd: "2018-03-10",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: "2018-01-15",
        actualEnd: "2018-01-25",
        progressValue: "75%"
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: "2018-01-20",
        actualEnd: "2018-02-04",
        progressValue: "100%"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-05"
      },
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-24",
        progressValue: "60%"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-10"
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);
```

{sample :height 220}GANTT\_NEW\_Project\_Chart\_06{sample}

### Connectors

A **connector** is an element showing the dependencies between all [task types](#tasks_\(actual\)). 

The following data fields are used to set connectors:

* `connectTo` to set the target task
* `connectorType` to set the connector type
* `connector` (optional) to configure [individual connectors](Elements/Individual_Elements#project_chart)

To add a connector, you should add these fields to a **predecessor task**. In the `connectTo` field, specify the `id` value of the **successor task**. In `connectorType`, specify the type of the connector.

There are four connector types, which are listed in {api:anychart.enums.ConnectorType}anychart.enums.ConnectorType{api}:

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>`"start-start"`</td>
<td>The predecessor must start before the successor can start.</td>
</tr>
<tr>
<td>`"start-finish"`</td>
<td>The predecessor must start before the successor can finish. </td>
</tr>
<tr>
<td>`"finish-start"`</td>
<td>The predecessor must finish before the successor can start. </td>
</tr>
<tr>
<td>`"finish-finish"`</td>
<td>The predecessor must finish before the successor can finish.</td>
</tr>
</tbody>
</table>

To learn how to configure connectors, see the [Elements: Project Chart](Elements/Project_Chart#connectors) article.

Please note that a task can have several predecessors, but only one successor. Also, a task can be at the same time a successor to one task or tasks and a predecessor to another. All these nuances are illustrated by the sample below, which visualizes the following dependencies between tasks:

* Task 1 (predecessor) &#8594; Task 2 (successor) – `"finish-start"`
* Task 2 (predecessor) &#8594; Task 5 (successor) – `"start-start"`
* Task 3 (predecessor) &#8594; Task 4 (successor) – `"finish-finish"`
* Task 4 (predecessor) &#8594; Task 5 (successor) – `"start-finish"`

{sample :height 220}GANTT\_NEW\_Project\_Chart\_07{sample}

```
// create data
var data = [
  {
    id: "1",
    name: "Tasks",
    actualStart: "2018-02-02",
    actualEnd: "2018-02-25",
    children: [
      {
        id: "1_1",
        name: "Task 1",
        actualStart: "2018-02-02",
        actualEnd: "2018-02-07",
        connectTo: "1_2",
        connectorType: "finish-start"
      },
      {
        id: "1_2",
        name: "Task 2",
        actualStart: "2018-02-09",
        actualEnd: "2018-02-09",
        connectTo: "1_5",
        connectorType: "start-start"
      },
      {
        id: "1_3",
        name: "Task 3",
        actualStart: "2018-02-11",
        actualEnd: "2018-02-23",
        connectTo: "1_4",
        connectorType: "finish-finish"
      },
      {
        id: "1_4",
        name: "Task 4",
        actualStart: "2018-02-18",
        actualEnd: "2018-02-25",
        connectTo: "1_5",
        connectorType: "start-finish"
      },
      {
        id: "1_5",
        name: "Task 5",
        actualStart: "2018-02-15",
        actualEnd: "2018-02-21"
      }
  ]}
];
```

### Milestones and Markers

To visualize an event, add a task with zero duration, or **milestone**. See the [Tasks (Actual)](#tasks_\(actual\)) section and [Elements: Project Chart](Elements/Project_Chart#milestones) article to learn more. 

If you need to create multiple milestones in one row, use an alternative way to visualize events – add **markers**. Multiple markers can be shown in one row – on a task or anywhere on the timeline depending on the dates you specify. For more information, see [Elements: Markers](Elements/Markers).