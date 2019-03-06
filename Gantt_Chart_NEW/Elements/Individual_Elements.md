{:index 5}
# Individual Elements

## Project Chart

To adjust individual elements of a **Project chart**, use the following data fields:

* `"actual"` to configure all [task types](#tasks_\(actual\))
* `"baseline"` to configure [baselines](#baselines_\(planned\))
* `"progress"` to configure [progress bars](#progress_bars)
* `"connector"` to configure [connectors](#connectors)

Combine them with fields corresponding to the methods of elements, for example `fill` and `stroke`:

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
        baseline: {fill: "#dd2c00 0.3", stroke: "0.5 #dd2c00"}
        actualStart: "2018-01-27",
        actualEnd: "2018-02-08",
        actual: {fill: "#dd2c00", stroke: "0.5 #dd2c00"},
        progressValue: "75%",
        progress: {fill: "#455a64 0.5", stroke: "0.5 #dd2c00"}
        connectTo: "1_2",
        connectorType: "finish-finish",
        connector: {fill: "#dd2c00", stroke: "2 #dd2c00"}
      },
      {
        id: "1_2",
        name: "Design",
        baselineStart: "2018-02-04",
        baselineEnd: "2018-02-24",
        actualStart: "2018-02-04",
        actualEnd: "2018-03-02",
        progressValue: "100%",
        connectTo: "1_4",
        connectorType: "start-start"
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
        actualEnd: "2018-03-24",
        progressValue: "60%"
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

// create a chart
var chart = anychart.ganttProject();

// set the data
chart.data(treeData);   
```

{sample :height 220}GANTT\_NEW\_Elements\_Individual\_01{sample}

## Resource Chart

To adjust an individual [period](#periods) of a **Resource chart**, you need to add extra data fields to the object that defines this period. Use fields corresponding to the methods of periods, for example `fill` and `stroke`:

```
// create data
var data = [
  {
    id: "1",
    name: "Server 1",
    periods: [
      {id:"1_1", start: "2018-01-02", end: "2018-01-25",
       fill: "#dd2c00", stroke: "#dd2c00"},
      {id:"1_2", start: "2018-01-28", end: "2018-02-22"},
      {id:"1_3", start: "2018-03-03", end: "2018-03-25"}
  ]},
  {
    id: "2",
    name: "Server 2",
    periods: [
      {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
      {id: "2_2", start: "2018-02-26", end: "2018-03-20"}
  ]},
  {
    id: "3",
    name: "Server 3",
    periods: [
      {id: "3_1", start: "2018-01-04", end: "2018-03-25"}
  ]}
];

// create a data tree
var treeData = anychart.data.tree(data, "as-tree");

// create a chart
var chart = anychart.ganttResource(); 

// set the data
chart.data(treeData);   
```

{sample :height 160}GANTT\_NEW\_Elements\_Individual\_02{sample}