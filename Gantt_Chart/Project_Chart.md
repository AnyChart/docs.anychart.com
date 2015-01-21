#Project Chart

* [Overview](#overview)
* [Chart](#chart)
* [Hierarchy] (#hierarchy)
* [tasks types](#tasks_types)
* [Milestones] (#milestones)
* [Progress] (#progress)
* [Actual and Planned] (#actual_and_planned)
* [Connectors] (#connectors)

## Overview

Project Gantt Chart is intended for showing a progress of completion of a single task or a group of tasks, taking into consideration their planned time periods and actual ones.

## Chart

```
// chart init
```

{sample}GANTT\_Chart\_01{sample}

## Hierarchy

Hierarchy can be set in two ways

```
// hierachy 1 by table
```

Text

```
// hierarchy 2 by structure
```

Read more about handling tree data at: [Link to article]

## tasks types

There are following types of tasks in Project Gantt Chart: Normal, Summary and Milestone.

**Normal**. This is a task that has start time, end time, and doesn't include any other tasks (isn't a parent of any other task).

**Parent**. This is a task that has both start and end time and also has some tasks inside it (is a "parent" of some tasks)

**Milestone**. It is some sort or waypoint that indicates some major event. Its start time is always equal to its end time.


```
    //how to create the tasks
    function getData() {
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

## Progress

To show progress you need to

```
// progress in data
```

## Actual and Planned

To show planned vs actual 

```
// planned and actual in data
```

## Connectors

You can show connectors:

```
// connectors in data
```
