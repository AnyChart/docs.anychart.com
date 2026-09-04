{:index 3}
# Quick Start: Resource Gantt Chart

## Overview

This article demonstrates the steps required to create a basic Resource Gantt chart from scratch.

## Modules

AnyGantt requires adding two [modules](../Quick_Start/Modules) - [Core](../Quick_Start/Modules#core) and [Gantt](../Quick_Start/Modules#gantt). Place a link to two JavaScript files in the `<head>` section of your web page.

**Note:** These files can be downloaded from the [AnyChart download page](../Quick_Start/Downloading_AnyChart).

```
<head>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js" type="text/javascript"></script>
  <script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-gantt.min.js" type="text/javascript"></script>
</head>
```

## Container

Add a block-based HTML element to your page, set the `id`, `width`, and `height` attributes. AnyChart charting library uses 100% of the container if other behavior is not specified. 

```
<body>
  <div id="container"></div>
<body>
```

## Data

AnyGantt requires using the [tree data model](../Working_with_Data/Tree_Data_Model). This is how your data should be organized for it:

```
// create data
var data = [
  {
    id: "1",
    name: "Server 1",
    periods: [
      {id:"1_1", start: "2026-01-09", end: "2026-01-29"},
      {id:"1_2", start: "2026-02-01", end: "2026-02-26"},
      {id:"1_3", start: "2026-03-07", end: "2026-03-29"}
  ]},
  {
    id: "2",
    name: "Server 2",
    periods: [
      {id: "2_1", start: "2026-01-11", end: "2026-02-19"},
      {id: "2_2", start: "2026-03-02", end: "2026-03-24"}
  ]},
  {
    id: "3",
    name: "Server 3",
    periods: [
      {id: "3_1", start: "2026-01-08", end: "2026-03-29"}
  ]}
];
```

## Chart

To create a chart, add the JavaScript tag `<script>` with the code below.

```
<script>
  anychart.onDocumentReady(function () {    	
    // create data
    var data = [
      {
        id: "1",
        name: "Server 1",
        periods: [
          {id:"1_1", start: "2026-01-09", end: "2026-01-29"},
          {id:"1_2", start: "2026-02-01", end: "2026-02-26"},
          {id:"1_3", start: "2026-03-07", end: "2026-03-29"}
      ]},
      {
        id: "2",
        name: "Server 2",
        periods: [
          {id: "2_1", start: "2026-01-11", end: "2026-02-19"},
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
    var treeData = anychart.data.tree(data, "as-table");  
    // create a chart
    var chart = anychart.ganttResource(); 
    // set the data
    chart.data(treeData); 
    // set the container id
    chart.container("container");  
    // initiate drawing the chart
    chart.draw();
    // fit elements to the width of the timeline
    chart.fitAll();
  });  
</script>
```

## Sample

This sample demonstrates the result of the steps above. Like any other sample, it can be launched and modified in AnyChart Playground.

{sample :height 160}GANTT\_Quick\_Start\_Resource{sample}

## Source Code

Here is the full source code of the sample. You can copy the code to a file on your computer and open it with a browser to display the Resource Gantt chart.

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
              {id:"1_1", start: "2026-01-09", end: "2026-01-29"},
              {id:"1_2", start: "2026-02-01", end: "2026-02-26"},
              {id:"1_3", start: "2026-03-07", end: "2026-03-29"}
          ]},
          {
            id: "2",
            name: "Server 2",
            periods: [
              {id: "2_1", start: "2026-01-11", end: "2026-02-19"},
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
        var treeData = anychart.data.tree(data, "as-table");    
        // create a chart
        var chart = anychart.ganttResource(); 
        // set the data
        chart.data(treeData);   
        // set the container id
        chart.container("container");    
        // initiate drawing the chart
        chart.draw();    
        // fit elements to the width of the timeline
        chart.fitAll();
      });    
    </script>
  </body>
</html>
```