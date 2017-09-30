# Project Chart

## Overview

Project Gantt Chart is intended for showing a progress of completion of a single task or a group of tasks, taking into consideration their planned and actual time periods, along with a progress made, tasks hierarchy and order.

## Chart

To create JavaScript Project Gantt Chart you should use the {api:anychart#ganttProject}ganttProject(){api} method.

```
// chart type
chart = anychart.ganttProject();
```

Here is a simple sample to illustrate how to create a project chart:

{sample :width 690 :height 180}GANTT\_Basic\_Sample{sample}


## Hierarchy

[Tree data model](../Working_with_Data/Using_Data_Tree_Model) is used in Project Gantt Charts to define a data hierarchy. It can be set in two ways: by table and by structure. In both samples below node "first" is the parent of node "second".

```
// hierarchy 1 by table

  {
    'id': 1,
    'name': 'first',
    'actualStart': Date.UTC(2010, 0, 17, 8),
    'actualEnd': Date.UTC(2010, 1, 5, 18),
  },
  {
    'id': 2,
    'parent': 1,
    'name': 'second',
    'actualStart': Date.UTC(2010, 0, 17, 8),
    'actualEnd': Date.UTC(2010, 0, 25, 12)
  }
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
      }
    ]
 }
```

Read more about handling tree data at: [Using Data Tree Model](../Working_with_Data/Using_Data_Tree_Model) section.

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
```

{sample :width 690 :height 170}GANTT\_Chart\_07{sample}

## Expand/Collapse control

You can control if the summary task is expanded or collapsed using these methods:

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#expandAll}expandAll(){api}</td>
<td>Allows to expand all tasks.</td>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#collapseAll}collapseAll(){api}</td>
<td>Used to collapse all tasks.</td>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#expandTask}expandTask(taskID){api}</td>
<td>Expands one task.</td>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#collapseTask}collapseTask(taskID){api}</td>
<td>Collapses one task.</td>
</tr>
</tbody>
</table>

{sample :width 690 :height 260}GANTT\_Chart\_02{sample}

## Task Progress

Tracking progress can be complicated, but you can show percent complete using progress bar. To use it you need to provide the required value of the "progressValue".

```
// progress in data
{
    "name": "research",
    "actualStart": Date.UTC(2009, 1, 4),
    "actualEnd": Date.UTC(2009, 2, 4),
    "progressValue": '13%'
}
```

{sample :width 690 :height 200}GANTT\_Chart\_05{sample}

Note that in the sample above we have changed progress bar color for one of the tasks, that's how one can do this:

```
    {
      'id': '4',
      'name': 'Task 4',
      'actualStart': Date.UTC(2008, 7, 5),
      'actualEnd': Date.UTC(2008, 7, 14),
      'progressValue': '25%',
      'progress':{'fill': 'red'}
    }
```

## Actual and Planned

Sometimes a task is taking longer than was planned, in this case it is useful to use additional bars to display planned vs actual. Actual progress is shown as the upper bar and planned - as the lower.

```
// planned and actual in data
{
    'name': "revision",
    'actualStart': Date.UTC(2010, 5, 1, 8),
    'actualEnd': Date.UTC(2010, 5, 24, 18),
    'baselineStart': Date.UTC(2010, 4, 29, 9),
    'baselineEnd': Date.UTC(2010, 5, 27, 18),
}
```

{sample :width 690 :height 180}GANTT\_Chart\_04{sample}

To configure how actual or baseline bar looks like you need to set the "fill" value in appropriate properties.

```
// planned and actual in data
{
    'name': "revision",
    'actualStart': Date.UTC(2010, 5, 1, 8),
    'actualEnd': Date.UTC(2010, 5, 24, 18),
    'actual':
        {
            'fill':
            {
                'keys': ['orange', 'red'],
                'angle': 0
            },
        },
    'baselineStart': Date.UTC(2010, 4, 29, 9),
    'baselineEnd': Date.UTC(2010, 5, 27, 18),
    'baseline':
        {
            'stroke': '3 black',
            'fill': {'color': 'gray'}
        }
}
```

### Swap Actual and Planned

If you want to display Planned (baseline) bars above the Actual bars, use *baselineAbove()* method of the {api:anychart.charts.Gantt#getTimeline}Timeline{api}:

```
chart.getTimeline().baselineAbove(true);
```

This is how it works:

{sample :width 690 :height 180}GANTT\_Chart\_04\_1{sample}

## Connectors

If there is a need to add an additional connection between tasks, you can define connectors with these settings:

{api:anychart.enums.GanttDataFields#CONNECTOR_TYPE}connectorType{api}. It can belong to one of four types: "start-start", "start-finish", "finish-start", "finish-finish"
(taskID
{api:anychart.enums.GanttDataFields#CONNECT_TO}connectTo){api}. It defines another node which will be connected with the first. For this purpose use the "id" value.

Types of task connectors:

<table border="1" class="dtTABLE">
<tbody>
<tr>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>start-start</td>
<td>The second can’t start until the first task starts</td>
</tr>
<tr>
<td>start-finish</td>
<td>The second task can’t finish until the first begins. </td>
</tr>
<tr>
<td>finish-start</td>
<td>The second task can’t start until the first is done. </td>
</tr>
<tr>
<td>finish-finish</td>
<td>The second task can’t finish until the first task is done.</td>
</tr>
</tbody>
</table>

```
// connectors in data
{
    "id": "4",
    "name": "resolution",
    parent:"2",
    "actualStart": Date.UTC(2010, 4, 29, 9),
    "actualEnd": Date.UTC(2010, 5, 12, 11),
    "connectTo": "5",
    "connectorType": "finish-start"
}
```

{sample :width 690 :height 170}GANTT\_Chart\_06{sample}

AnyChart JavaScript framework give you an opportunity to describe how connector should be displayed. If you want to customize the connector view you should set the "fill" and "stroke" parameters in **connector**, where "stroke" defines a color of connector line and "fill" defines the color of connector arrow.

```
'connector': {
    'stroke': {color: '#3300CC .2'},
    'fill': {'color': '6600CC .5'}
}
```

In the sample below we have a Gantt Chart with simple data and we'll color each connector to different color. Here is the sample:

{sample :width 690 :height 170}GANTT\_Chart\_16{sample}
