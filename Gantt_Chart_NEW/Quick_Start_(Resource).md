{:index 3}
# Quick Start: Resource Gantt Chart

## Modules

```
<head>
  <script src="https://cdn.anychart.com/releases/DVF-4143-gantt/js/anychart-core.min.js" type="text/javascript"></script>
  <script src="https://cdn.anychart.com/releases/DVF-4143-gantt/js/anychart-gantt.min.js" type="text/javascript"></script>
</head>
```

## Container

```
<body>
  <div id="container"></div>
<body>
```

## Data

```
// create data
var data = [
  {
    id: "1",
    name: "Server 1",
    periods: [
      {id:"1_1", start: "2018-01-01", end: "2018-01-25"},
      {id:"1_2", start: "2018-01-28", end: "2018-02-22"},
      {id:"1_3", start: "2018-03-03", end: "2018-03-17"},
    ]
  },
  {
    id: "2",
    name: "Server 2",
    periods: [
      {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
      {id: "2_2", start: "2018-02-16", end: "2018-03-20"},
    ]
  },
  {
    id: "3",
    name: "Server 3",
    periods: [
      {id: "3_1", start: "2018-01-13", end: "2018-03-05"}]
  }
];
```

## Chart

```
<script>
  anychart.onDocumentReady(function () {    	
    // create data
    var data = [
      {
        id: "1",
        name: "Server 1",
        periods: [
          {id:"1_1", start: "2018-01-01", end: "2018-01-25"},
          {id:"1_2", start: "2018-01-28", end: "2018-02-22"},
          {id:"1_3", start: "2018-03-03", end: "2018-03-17"},
        ]
      },
      {
        id: "2",
        name: "Server 2",
        periods: [
          {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
          {id: "2_2", start: "2018-02-16", end: "2018-03-20"},
        ]
      },
      {
        id: "3",
        name: "Server 3",
        periods: [
          {id: "3_1", start: "2018-01-13", end: "2018-03-05"}]
      }
    ];    
    // create a data tree
    var treeData = anychart.data.tree(data, "as-table");  
    // create a chart
    var chart = anychart.ganttResource();  
    // set the data
    chart.data(treeData);  
    // set the container id
    chart.container("container");  
    // initiate drawing the chart
    chart.draw();
    // fit items to the width of the timeline
    chart.fitAll();
  });  
</script>
```

## Sample

{sample :height 160}GANTT\_NEW\_Quick\_Start\_Resource{sample}

## Source Code

```
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-base.min.js?hcode=a0c21fc77e1449cc86299c5faa067dc4"></script>
    <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-gantt.min.js?hcode=a0c21fc77e1449cc86299c5faa067dc4" type="text/javascript"></script>
  </head>
  <body>
    <div id="container"></div>
    <script>
      anychart.onDocumentReady(function () {    
        // create data
        var data = [
          {
            id: "1",
            name: "Server 1",
            periods: [
              {id:"1_1", start: "2018-01-01", end: "2018-01-25"},
              {id:"1_2", start: "2018-01-28", end: "2018-02-22"},
              {id:"1_3", start: "2018-03-03", end: "2018-03-17"},
            ]
          },
          {
            id: "2",
            name: "Server 2",
            periods: [
              {id: "2_1", start: "2018-01-05", end: "2018-02-15"},
              {id: "2_2", start: "2018-02-16", end: "2018-03-20"},
            ]
          },
          {
            id: "3",
            name: "Server 3",
            periods: [
              {id: "3_1", start: "2018-01-13", end: "2018-03-05"}]
          }
        ];
        // create a data tree
        var treeData = anychart.data.tree(data, "as-table");    
        // create a chart
        var chart = anychart.ganttResource();    
        // set the data
        chart.data(data);    
        // set the container id
        chart.container("container");    
        // initiate drawing the chart
        chart.draw();    
        // fit items to the width of the timeline
        chart.fitAll();
      });    
    </script>
  </body>
</html>
```