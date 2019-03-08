{:index 7}
# Markers

## Overview

Like [milestones](Project_Chart#milestones), **markers** represent events. You can display multiple markers in one row – on a task or anywhere on the timeline depending on the dates you set.

Use the `markers` data field to add an array of markers to your data. In this array, specify the `value` of each marker – its date:

```
markers: [
  {value: "2018-01-18"},
  {value: "2018-02-02"},
  {value: "2018-02-05"},
  {value: "2018-03-01"},
  {value: "2018-03-06"}
],
```

To configure markers, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} and {api:anychart.core.ui.Timeline#markers}markers(){api} with methods {api:anychart.core.ui.MarkersFactory}anychart.core.ui.MarkersFactory{api}, for example:

* {api:anychart.core.ui.MarkersFactory#type}type(){api} to set the type
* {api:anychart.core.ui.MarkersFactory#fill}fill(){api} to set the fill
* {api:anychart.core.ui.MarkersFactory#stroke}stroke(){api} to set the stroke


```
chart.getTimeline().markers().fill("#dd2c00");
chart.getTimeline().markers().stroke("black");
```

Also, you can configure individual markers with the help of extra data fields corresponding to the available methods:

```
markers: [
  {value: "2018-01-18", type: "cross"},
  {value: "2018-02-02", type: "circle"},
  {value: "2018-02-05", type: "diamond", fill: "#ffa000"},
  {value: "2018-03-01", type: "diagonal-cross"},
  {value: "2018-03-06", type: "diagonal-cross"}
]
```

## Project Chart

It is possible to add markers to any [task](../Project_Chart#tasks_\(actual\)) of a Project chart – a regular task, a parent task, or a milestone:

{sample :height 220}GANTT\_NEW\_Elements\_Markers\_01{sample}

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    actualStart: "2018-01-15",
    actualEnd: "2018-03-10",
    markers: [
      {value: "2018-01-18", type: "cross"},
      {value: "2018-02-02", type: "circle"},
      {value: "2018-02-05", type: "diamond", fill: "#ffa000"},
      {value: "2018-03-01", type: "diagonal-cross"},
      {value: "2018-03-06", type: "diagonal-cross"}
    ],
    children: [
      {
        id: "1_1",
        name: "Analysis",
        actualStart: "2018-01-15",
        actualEnd: "2018-01-25"
      },
      {
        id: "1_2",
        name: "Design",
        actualStart: "2018-01-20",
        actualEnd: "2018-02-04",
        markers: [
          {value: "2018-01-18", type: "cross"}
      ]},
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-05",
        markers: [
          {value: "2018-02-02", type: "circle"},
      ]},
      {
        id: "1_4",
        name: "Implementation",
        actualStart: "2018-02-05",
        actualEnd: "2018-02-24"
      },
      {
        id: "1_5",
        name: "Testing",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-10",
        markers: [
          {value: "2018-03-01", type: "diagonal-cross"},
          {value: "2018-03-06", type: "diagonal-cross"}
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

{sample :height 200}GANTT\_NEW\_Elements\_Markers\_02{sample}

```
// create data
var data = [
  {
    id: "A",
    name: "Location A",
    markers: [
      {value: "2018-01-10", type: "diagonal-cross"},
      {value: "2018-01-17", type: "cross"},
      {value: "2018-03-15", type: "diamond", fill: "#ffa000"}
    ],
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
          {id: "2_2", start: "2018-02-26", end: "2018-03-20"},
        ],
        markers: [
          {value: "2018-01-10", type: "diagonal-cross"},
          {value: "2018-01-17", type: "cross"},
          {value: "2018-03-15", type: "diamond", fill: "#ffa000"}
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

// configure markers
chart.getTimeline().markers().fill("#dd2c00");
chart.getTimeline().markers().stroke("black");
```