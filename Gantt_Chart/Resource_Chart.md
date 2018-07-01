# Resource Chart

## Overview

JavaScript Resources Gantt Chart is one of two types of Gantt Charts. It is intended for showing the resources you have and spreading these resources along the timeline (into periods). Resources can be servers, equipment, vacancies of employees, expendable materials, or anything else.

## Chart

The JS Resource Gantt Chart creation is the same as JS Project Chart except you should define the resource chat type using the {api:anychart#ganttResource}ganttResource(){api} method:

```
// create resource gantt chart
chart = anychart.ganttResource();
```

Here is a sample demonstrates how to create a simple Project Chart.

{sample :width 690 :height 180}GANTT\_Chart\_01{sample}

## Expand/Collapse

Also there is an ability to expand resources using parent property.

<table>
<tbody>
<tr>
<td>Method</td>
<td>Description</td>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#expandAll}expandAll(){api}</td>
<td>Allows to expand all tasks.</td>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#collapseAll}collapseAll(){api}</td>
<td>Used to collapse all tasks.</td>
</tr><tr>
<td>{api:anychart.charts.Gantt#expandTask}expandTask(taskID){api}</td>
<td>Expands one task.</td>
</tr>
<tr>
<td>{api:anychart.charts.Gantt#collapseTask}collapseTask(taskID){api}</td>
<td>Collapses one task.</td>
</tr>
</tbody>
</table>

{sample :width 690 :height 210}GANTT\_Chart\_08{sample}

## Periods

As shown above every resource has a set of its own properties:

```
"id": "1",
"name": "main server",
"periods": [..]
```

Each period has the id, name, start and end time.

```
"periods": [
      {"id": "1_1", "start": "2013-01-20", "end": "2013-03-02"}},
      {"id": "1_2", "start": "2013-03-20", "end": "2013-04-05")}}
      ]
```

Also you can define the appearance of the given period:

{sample :width 710 :height 190}GANTT\_Chart\_03{sample}
