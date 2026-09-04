{:index 5}
# Individual Elements

## Project Chart

To adjust individual elements of a Project chart, use the following data fields:

* `"actual"` to configure all [task types](Project_Chart#tasks_\(actual\))
* `"baseline"` to configure [baselines](Project_Chart#baselines_\(planned\))
* `"progress"` to configure [progress bars](Project_Chart#progress_bars)
* `"connector"` to configure [connectors](Project_Chart#connectors)

Combine them with fields corresponding to the methods of elements - for example, with `fill` and `stroke`:

```
// create data
var data = [
  {
    id: "1",
    name: "Development",
    baselineStart: "2026-01-16",
    baselineEnd: "2026-03-08",
    actualStart: "2026-01-19",
    actualEnd: "2026-03-14",
    children: [
      {
        id: "1_1",
        name: "Analysis",
        baselineStart: "2026-01-16",
        baselineEnd: "2026-01-29",
        baseline: {fill: "#dd2c00 0.3", stroke: "0.5 #dd2c00"},
        actualStart: "2026-01-19",
        actualEnd: "2026-01-29",
        actual: {fill: "#dd2c00", stroke: "0.5 #dd2c00"},
        progressValue: "75%",
        progress: {fill: "#455a64 0.5", stroke: "0.5 #dd2c00"},
        connectTo: "1_2",
        connectorType: "finish-finish",
        connector: {fill: "#dd2c00", stroke: "2 #dd2c00"}
      },
      {
        id: "1_2",
        name: "Design",
        baselineStart: "2026-01-24",
        baselineEnd: "2026-02-04",
        actualStart: "2026-01-24",
        actualEnd: "2026-02-08",
        progressValue: "100%",
        connectTo: "1_4",
        connectorType: "start-start"
      },
      {
        id: "1_3",
        name: "Meeting",
        actualStart: "2026-02-09",
        actualEnd: "2026-02-09"
      },
      {
        id: "1_4",
        name: "Implementation",
        baselineStart: "2026-02-05",
        baselineEnd: "2026-02-23",
        actualStart: "2026-02-09",
        actualEnd: "2026-02-28",
        progressValue: "60%"
      },
      {
        id: "1_5",
        name: "Testing",
        baselineStart: "2026-02-24",
        baselineEnd: "2026-03-09",
        actualStart: "2026-03-01",
        actualEnd: "2026-03-14"
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

{sample :height 220}GANTT\_Elements\_Individual\_01{sample}

## Resource Chart

To adjust an individual [period](Resource_Chart#periods) of a Resource chart, you need to add extra data fields to the object that defines this period.

Use the `"connector"` field to configure [connectors](Resource_Chart#connectors) and fields corresponding to the methods of periods - for example, `fill` and `stroke`:

```
// create data
var data = [
  {
    id: "1",
    name: "Server 1",
    periods: [
      {id:"1_1", start: "2026-01-06", end: "2026-01-29",
       fill: "#dd2c00", stroke: "#dd2c00",
       connectTo: "1_2", connectorType: "finish-start",
       connector: {fill: "#dd2c00", stroke: "2 #dd2c00"}},
      {id:"1_2", start: "2026-02-01", end: "2026-02-26"},
      {id:"1_3", start: "2026-03-07", end: "2026-03-29"}
  ]},
  {
    id: "2",
    name: "Server 2",
    periods: [
      {id: "2_1", start: "2026-01-11", end: "2026-02-19",
       connectTo: "2_2", connectorType: "finish-start"},
      {id: "2_2", start: "2026-03-02", end: "2026-03-24"}
  ]},
  {
    id: "3",
    name: "Server 3",
    periods: [
      {id: "3_1", start: "2026-01-08", end: "2026-03-29"}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttResource(); 

// set the data
chart.data(treeData);   
```

{sample :height 160}GANTT\_Elements\_Individual\_02{sample}