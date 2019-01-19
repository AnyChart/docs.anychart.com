{:index 4}
# Project Chart

## Overview

...

* Project charts are defined as instances of the {api:anychart.charts.Gantt}api:anychart.charts.Gantt{api}
 class.
* The main [element](Elements) of a project chart is [task ](#tasks_\(actual\))...
* (?) [Hierarchy](#hierarchy)

## Quick Start

To create a Project Gantt chart, use the {api:}{api} chart constructor, like in the sample below. To learn more, see the [Quick Start (Project)](Quick_Start_\(Project\)) article.

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-25",
    actualEnd: "2018-04-07",
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
        actualEnd: "2018-02-24"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-02-25",
        actualEnd: "2018-02-25"
      },
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-14"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "2018-03-15",
        actualEnd: "2018-04-07"
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart and set the data
var chart = anychart.ganttProject(treeData);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();

// fit items to the width of the timeline
chart.fitAll();
```

{sample :height 220}GANTT\_NEW\_Project\_Chart\_01{sample}

## Data

### Data Fields

The Project chart requires setting [tasks](#tasks_\(actual\)). Use the following data fields:

* `name` to set names
* `id` to set unique identifiers
* `actualStrart` to set start dates
* `actualEnd` to set end dates

You can also use optional fields:

* `children` / `parent` to set the [hierarchy](#hierarchy)
* `actual` to add optional [task](#tasks_\(actual\)) settings
* `baselineStart`, `baselineEnd`, and `baseline` to add and configure [baselines](#baselines_\(planned\))
* `progressValue` and `progress` to add and configure [progress bars](#progress_bars)
* `connectTo`, `connectorType`, and `connector` to ass and configure [connectors](#connectors)
* `markers` to add [markers](#milestones_and_markers)
* `rowHeight` to set the [row height](Basic_Settings#header_and_row_height)
* `collapsed` to [expand or collapse](Basic_Settings#navigation) a parent task

**Note:** If you need to use custom data fields, see [Data: Mapping](Data#mapping).

### Setting Data

* имплицитное и эксплицитное задание дерева
* [as tree](#as_tree), [as table](#as_table)
* [Tree Data Model](../Working_with_Data/Tree_Data_Model)
* [as tree](#as_tree), [as table](#as_table)

**(?) Note:** If there is no hierarchical relationship between data items, there is no difference between the tree and table structure (in this case, technically, all items a roots). Both parameters can be used.

### Hierarchy

* multiple roots

#### As Tree

* `children`


```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-25",
    actualEnd: "2018-03-14",
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
        actualEnd: "2018-02-24"
      },
      {
        id: "1_4",
        name: "Meeting",
        actualStart: "2018-02-25",
        actualEnd: "2018-02-25"
      },
      {
        id: "1_5",
        name: "Implementation",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-14"
      },
      {
        id: "1_6",
        name: "Testing",
        actualStart: "2018-03-15",
        actualEnd: "2018-04-07"
      }
  ]},
  { 
    id: "2",
    name: "PR Campaign",
    actualStart: "2018-02-25",
    actualEnd: "2018-04-28",
    children: [
      {
        id: "2_1",
        name: "Planning",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-25"
      },
      {
        id: "2_2",
        name: "Promoting",
        actualStart: "2018-03-26",
        actualEnd: "2018-04-28"
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart and set the data
var chart = anychart.ganttProject(treeData);
```

{sample :height 280}GANTT\_NEW\_Project\_Chart\_02{sample}

#### As Table

* `parent`


```
// create data
var data = [
  {
    id: "1",
    parent: null,
    name: "Development",
    actualStart: "2018-01-25",
    actualEnd: "2018-03-14"
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
    actualEnd: "2018-02-24"
  },
  {
    id: "1_4",
    parent: "1",
    name: "Meeting",
    actualStart: "2018-02-25",
    actualEnd: "2018-02-25"
  },
  {
    id: "1_5",
    parent: "1",
    name: "Implementation",
    actualStart: "2018-02-25",
    actualEnd: "2018-03-14"
  },
  {
    id: "1_6",
    parent: "1",
    name: "Testing",
    actualStart: "2018-03-15",
    actualEnd: "2018-04-07"
  },
  {
    id: "2",
    parent: null,
    name: "PR Campaign",
    actualStart: "2018-02-25",
    actualEnd: "2018-04-28"
  },
  {
    id: "2_1",
    parent: "2",
    name: "Planning",
    actualStart: "2018-02-25",
    actualEnd: "2018-03-25"
  },
  {
    id: "2_2",
    parent: "2",
    name: "Promoting",
    actualStart: "2018-03-26",
    actualEnd: "2018-04-28"
  }
];

// create a data tree
var treeData = anychart.data.tree(data, "as-table");

// create a chart and set the data
var chart = anychart.ganttProject(treeData);
```

{sample :height 280}GANTT\_NEW\_Project\_Chart\_03{sample}

## Elements

* [Elements](Elements)
* [Timeline](Timeline)

### Tasks (Actual)

* `name`, `actualStart`, `actualEnd` + `actual`
* **basic tasks**, **parent tasks**, **milestones**
* так можно задать только actual, а planned см. [Baselines](#baselines_\(planned\))
* [Elements: Tasks](Elements#tasks_\(actual\))
* [Elements: Markers](Elements#markers)
* [Hierarchy](#hierarchy)


```
// create data
var data = [
  {
    id: "1",
    name: "Parent Task",
    actualStart: "2018-01-25",
    actualEnd: "2018-03-14",
    children: [
      {
        id: "1_1",
        name: "Task",
        actualStart: "2018-01-25",
        actualEnd: "2018-02-08"
      },
      {
        id: "1_2",
        name: "Task",
        actualStart: "2018-02-04",
        actualEnd: "2018-02-24"
      },
      {
        id: "1_3",
        name: "Milestone",
        actualStart: "2018-02-25",
        actualEnd: "2018-02-25"
      },
      {
        id: "1_4",
        name: "Parent Task",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-14",
        children: [
          {
            id: "1_4_1",
            name: "Task",
            actualStart: "2018-02-25",
            actualEnd: "2018-03-01"
          },
          {
            id: "1_4_2",
            name: "Task",
            actualStart: "2018-03-02",
            actualEnd: "2018-03-14"
          }
      ]}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart and set the data
var chart = anychart.ganttProject(treeData);
```

{sample :height 240}GANTT\_NEW\_Project\_Chart\_04{sample}

### Baselines (Planned)

* `baselineStart`, `baselineEnd` + `baseline`
* baselines can be added to basic and parent [tasks](#tasks_\(actual\))
* [Elements: Baselines](Elements#baselines_\(planned\))

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    baselineStart: "2018-01-25",
    baselineEnd: "2018-04-07",
    actualStart: "2018-01-25",
    actualEnd: "2018-04-20",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        baselineStart: "2018-01-25",
        baselineEnd: "2018-02-08",
        actualStart: "2018-01-27",
        actualEnd: "2018-02-08"
      },
      {
        id: "1_2",
        name: "Design",
        baselineStart: "2018-02-04",
        baselineEnd: "2018-02-24",
        actualStart: "2018-02-04",
        actualEnd: "2018-03-02"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-03-02",
        actualEnd: "2018-03-02"
      },
      {
        id: "1_4",
        name: "Implementation",
        baselineStart: "2018-02-25",
        baselineEnd: "2018-03-14",
        actualStart: "2018-03-02",
        actualEnd: "2018-03-24"
      },
      {
        id: "1_5",
        name: "Testing",
        baselineStart: "2018-03-15",
        baselineEnd: "2018-04-07",
        actualStart: "2018-03-25",
        actualEnd: "2018-04-20"
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart and set the data
var chart = anychart.ganttProject(treeData);
```

{sample :height 220}GANTT\_NEW\_Project\_Chart\_05{sample}

### Progress Bars

* `progressValue`, `progress`
* примечание: родитель автоматически вычисляет общий прогресс, но можно и задать вручную
* [Elements: Progress Bars](Elements#progress_bars)


```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-25",
    actualEnd: "2018-04-07",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: "2018-01-25",
        actualEnd: "2018-02-08",
        progressValue: "75%"
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: "2018-02-04",
        actualEnd: "2018-02-24",
        progressValue: "100%"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-02-25",
        actualEnd: "2018-02-25"
      },
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-14",
        progressValue: "60%"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "2018-03-15",
        actualEnd: "2018-04-07"
      }
  ]}
];
// create a data tree
var treeData = anychart.data.tree(data, "as-tree");
// create a chart and set the data
var chart = anychart.ganttProject(treeData);
```

{sample :height 220}GANTT\_NEW\_Project\_Chart\_06{sample}

### Connectors

* `connectTo`, `connectorType` + `connector`
* `"start-start"`, `"start-finish"`, `"finish-start"`, `"finish-finish"`
* {api:anychart.enums.ConnectorType}anychart.enums.ConnectorType{api}
* [Elements: Connectors](Elements#connectors)


```
// create data
var data = [
  {
    id: "1",
    name: "Tasks",
    actualStart: "2018-02-02",
    actualEnd: "2018-02-27",
    children: [
      {
        id: "1_1",
        name: "Task 1",
        actualStart: "2018-02-02",
        actualEnd: "2018-02-07",
        connectorType: "finish-start",
        connectTo: "1_2"
      },
      {
        id: "1_2",
        name: "Task 2",
        actualStart: "2018-02-09",
        actualEnd: "2018-02-27",
        connectorType: "start-start",
        connectTo: "1_5"
      },
      {
        id: "1_3",
        name: "Task 3",
        actualStart: "2018-02-11",
        actualEnd: "2018-02-23",
        connectorType: "finish-finish",
        connectTo: "1_4"
      },
      {
        id: "1_4",
        name: "Task 4",
        actualStart: "2018-02-18",
        actualEnd: "2018-02-25",
        connectorType: "start-finish",
        connectTo: "1_5"
      },
      {
        id: "1_5",
        name: "Task 5",
        actualStart: "2018-02-15",
        actualEnd: "2018-02-21"
      }
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart and set the data
var chart = anychart.ganttProject(treeData);
```

{sample :height 220}GANTT\_NEW\_Project\_Chart\_07{sample}

### Milestones and Markers

* [Tasks](#tasks_\(actual\))
* [Elements: Markers](Elements#markers)

## (?) Other Settings