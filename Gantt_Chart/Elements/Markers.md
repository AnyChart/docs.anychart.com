{:index 7}
# Markers

## Overview

Like [milestones](Project_Chart#milestones), **markers** represent events. You can display multiple markers in one row - on a task or anywhere on the timeline depending on the dates you set.

Use the `markers` data field to add an array of markers to your data. In this array, specify the `value` of each marker - its date:

```
markers: [
  {value: "2026-01-22"},
  {value: "2026-02-06"},
  {value: "2026-02-09"},
  {value: "2026-03-05"},
  {value: "2026-03-10"}
],
```

To configure markers, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#markers}markers(){api} with methods {api:anychart.core.ui.MarkersFactory}anychart.core.ui.MarkersFactory{api} - for example, the following:

* {api:anychart.core.ui.MarkersFactory#type}type(){api} + enums from {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api} to set the type
* {api:anychart.core.ui.MarkersFactory#fill}fill(){api} to set the fill
* {api:anychart.core.ui.MarkersFactory#stroke}stroke(){api} to set the stroke


```
chart.getTimeline().markers().fill("#dd2c00");
chart.getTimeline().markers().stroke("black");
```

Also, you can configure individual markers with the help of extra data fields corresponding to the available methods:

```
markers: [
  {value: "2026-01-22", type: "cross"},
  {value: "2026-02-06", type: "circle"},
  {value: "2026-02-09", type: "diamond", fill: "#ffa000"},
  {value: "2026-03-05", type: "diagonal-cross"},
  {value: "2026-03-10", type: "diagonal-cross"}
]
```

## Project Chart

It is possible to add markers to any [task](../Project_Chart#tasks_\(actual\)) of a Project chart - a regular task, a parent task, or a milestone:

{sample :height 220}GANTT\_Elements\_Markers\_01{sample}

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2026-01-19",
    actualEnd: "2026-03-14",
    markers: [
      {value: "2026-01-22", type: "cross"},
      {value: "2026-02-06", type: "circle"},
      {value: "2026-02-09", type: "diamond", fill: "#ffa000"},
      {value: "2026-03-05", type: "diagonal-cross"},
      {value: "2026-03-10", type: "diagonal-cross"}
    ],
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: "2026-01-19",
        actualEnd: "2026-01-29"
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: "2026-01-24",
        actualEnd: "2026-02-08",
        markers: [
          {value: "2026-01-22", type: "cross"}
      ]},
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2026-02-09",
        actualEnd: "2026-02-09",
        markers: [
          {value: "2026-02-06", type: "circle"},
      ]},
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "2026-02-09",
        actualEnd: "2026-02-28"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "2026-03-01",
        actualEnd: "2026-03-14",
        markers: [
          {value: "2026-03-05", type: "diagonal-cross"},
          {value: "2026-03-10", type: "diagonal-cross"}
      ]}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);

// configure markers
chart.getTimeline().markers().fill("#dd2c00");
chart.getTimeline().markers().stroke("black");
```

## Resource Chart

In the case of the Resource chart, markers are added to [resources](../Resource_Chart#periods_and_resources):

{sample :height 200}GANTT\_Elements\_Markers\_02{sample}

```
// create data
var data = [
  {
    id: "A",
    name: "Location A",
    markers: [
      {value: "2026-01-14", type: "diagonal-cross"},
      {value: "2026-01-21", type: "cross"},
      {value: "2026-03-19", type: "diamond", fill: "#ffa000"}
    ],
    children: [
      {
        id: "1",
        name: "Server 1",
        periods: [
          {id: "1_1", start: "2026-01-09", end: "2026-01-29"},
          {id: "1_2", start: "2026-02-01", end: "2026-02-26"},
          {id: "1_3", start: "2026-03-07", end: "2026-03-29"}
      ]},
      {
        id: "2",
        name: "Server 2",
        periods: [
          {id: "2_1", start: "2026-01-11", end: "2026-02-19"},
          {id: "2_2", start: "2026-03-02", end: "2026-03-24"},
        ],
        markers: [
          {value: "2026-01-14", type: "diagonal-cross"},
          {value: "2026-01-21", type: "cross"},
          {value: "2026-03-19", type: "diamond", fill: "#ffa000"}
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
          {id: "3_1", start: "2026-01-08", end: "2026-03-29"}
    ]}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttResource(); 

// set the data
chart.data(treeData);  

// configure markers
chart.getTimeline().markers().fill("#dd2c00");
chart.getTimeline().markers().stroke("black");
```