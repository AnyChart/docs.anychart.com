# Resource Chart

## Overview

JavaScript Resources Gantt Chart is one of two types of Gantt Charts. It is intended for showing the resources you have and spreading these resources along the timeline (into periods). Resources can be servers, equipment, vacancies of employees, expendable materials, or anything else.

## Chart

The JS Resource Gantt Chart creation is the same as JS Project Chart except you should define the resource chat type using the {api:anychart#ganttResource}ganttResource(){api} method:

```
// create resource gantt chart
chart = anychart.ganttResource();
```

Here is a sample demonstrates how to create simple Project Chart.

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

Let's demonstrate these possibilities with some sample code:

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
      {"id": "1_1", "start": Date.UTC(2013, 1, 20), "end": Date.UTC(2013, 3, 2)}},
      {"id": "1_2", "start": Date.UTC(2013, 3, 2), "end": Date.UTC(2013, 4, 5)}}
      ]
```

Also you can define the view of the given period:

```
//solid fill
{"fill": "#FFFF00 0.7", "stroke": "none"},

//gradient fill
{"fill": {"angle": 0, "keys": [{"color": "orange", "position": 0}, {"color": "#6B9866", "position": 0.5}, {"color": "red", "position": 1}]}},
```

{sample :width 710 :height 190}GANTT\_Chart\_03{sample}

You may have some tasks that are associated with another task, for this purpose it is possible to use the "parent" property:

```
//the first resource is the parent of the second
 {
       "id":'main',
       "name": "first",
     },
     {
       "id":'second',
       "name": "second",
       "parent": "main",
       "periods": [
         {"id": "2_1", "start": Date.UTC(2012, 4, 25), "end": Date.UTC(2012, 4, 29)},
         {"id": "2_2", "start": Date.UTC(2012, 6, 25), "end": Date.UTC(2012, 7, 5)}
       ]
     }
```
