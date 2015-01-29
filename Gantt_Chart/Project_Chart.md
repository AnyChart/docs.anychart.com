#Project Chart

* [Overview](#overview)
* [Chart](#chart)
* [Hierarchy](#hierarchy)
* [Tasks Types](#tasks_types)
* [Expand/Collapse control](#expand)
* [Task Progress](#progress)
* [Actual and Planned](#actual_and_planned)
* [Connectors](#connectors)

## Overview

Project Gantt Chart is intended for showing a progress of completion of a single task or a group of tasks, taking into consideration their planned and actual time periods, along with a progress made, tasks hierarchy and order.

## Chart

To create Project Gantt Chart you should use the {api:anychart#ganttProject}**anychart.ganttProject()**{api} method.

```
// chart type
chart = anychart.ganttProject();
```

Here is a simple sample to illustrate how to create a project chart:

{sample :width 690 :height 180}GANTT\_Basic\_Sample{sample}


## Hierarchy

[Tree data model](Using_Data_Tree_Model) is used in Project Gantt Charts to define a data hierarchy. It can be set in two ways: by table and by structure. In both samples below node "first" is the parent of node "second".

```
// hierarchy 1 by table

  {
    'name': 'first',
    'actualStart': Date.UTC(2010, 0, 17, 8),
    'actualEnd': Date.UTC(2010, 1, 5, 18),
  },
  {
    'name': 'second',
    'parent': 'first',
    'actualStart': Date.UTC(2010, 0, 17, 8),
    'actualEnd': Date.UTC(2010, 0, 25, 12)
  },
```

```
// hierarchy 2 by structure

 {
    "name": "first",
    "actualStart": Date.UTC(2007, 0, 25),
    "actualEnd": Date.UTC(2007, 2, 14),
    "children": [
      {
        "name": "second",
        "actualStart": Date.UTC(2007, 0, 25),
        "actualEnd": Date.UTC(2007, 1, 3)
      },
      ]
 }
```

Read more about handling tree data at: [Using Data Tree Model](Using_Data_Tree_Model) section.

## Tasks Types

There are following types of tasks in Project Gantt Chart: Normal, Parent and Milestone.

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>Normal</td>
<td>This is a task that has start time, end time, and doesn't include any other tasks (isn't a parent of any other task).</td>
</tr>
<tr>
<td>Parent</td>
<td>This is a task that has both start and end time and also has some tasks inside it (is a "parent" of some tasks)</td>
</tr>
<tr>
<td>Milestone</td>
<td>It is some sort or waypoint that indicates some major event. Its start time is always equal to its end time.</td>
</tr>
</tbody>
</table>

The tasks types are not explicitly defined, but they have a different behavior.

```
    //how to create the tasks
      return [
      {
        "name": "parent",
        "actualStart": Date.UTC(2007, 0, 25),
        "actualEnd": Date.UTC(2007, 2, 14),
        "children": [
          {
            "name": "first child",
            "actualStart": Date.UTC(2007, 0, 25),
            "actualEnd": Date.UTC(2007, 1, 3)
          },
          {
            "name": "second child",
            "actualStart": Date.UTC(2007, 1, 4),
            "actualEnd": Date.UTC(2007, 1, 4)
          },
          {
            "name": "milestone",
            "actualStart": Date.UTC(2007, 1, 4),
            "actualEnd": Date.UTC(2007, 1, 24)
          }
        ]
      }
      ];
    }
```

{sample :width 690 :height 180}GANTT\_Chart\_07{sample}

## Expand/Collapse control

You can control if the summary task is expanded or collapsed using these methods:

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#expandAll}**expandAll()**{api}</td>
<td>Allows to expand all tasks.</td>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#collapseAll}**collapseAll()**{api}</td>
<td>Used to collapse all tasks.</td>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#expandTask}**expandTask(taskID)**{api}</td>
<td>Expands one task.</td>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#collapseTask}**collapseTask(taskID)**{api}</td>
<td>Collapses one task.</td>
</tr>
</tbody>
</table>

{sample :width 780 :height 260}GANTT\_Chart\_02{sample}

## Task Progress

Tracking progress can be complicated, but you can show percent complete using progress bar. To use it you need to provide the required value of the "progressValue".

```
// progress in data
{
    "name": "research",
    "actualStart": Date.UTC(2009, 1, 4),
    "actualEnd": Date.UTC(2009, 2, 4),
    "progressValue": '13'
},
```

{sample :width 780 :height 220}GANTT\_Chart\_05{sample}

## Actual and Planned

Sometimes a task is taking longer than was planned, in this case it is useful to use additional bars to display planned vs actual. Actual progress is shown as the upper bar and planned - as the lower.

```
// planned and actual in data
{
    'name': "revision",
    'actualStart': Date.UTC(2010, 5, 1, 8),
    'actualEnd': Date.UTC(2010, 5, 24, 18),
    'progressValue': '41%',
    'baselineStart': Date.UTC(2010, 4, 29, 9),
    'baselineEnd': Date.UTC(2010, 5, 27, 18),
}
```

{sample :width 690 :height 180}GANTT\_Chart\_04{sample}

## Connectors

You can define connectors using these settings:

**connectorType**. It can belong to one of four types: StartStart, StartFinish, FinishStart, FinishFinish
**connectTo**. It defines another node which will be connected with the first. For this purpose use the "id" value.

```
// connectors in data
{"id": "4", "name": "resolution", parent:"2", "actualStart": 400000, "actualEnd": 800000, "connectTo": "5", "connectorType": "FinishStart"},
```

{sample :width 690 :height 180}GANTT\_Chart\_06{sample}