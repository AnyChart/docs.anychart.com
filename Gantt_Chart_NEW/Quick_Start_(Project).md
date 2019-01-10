{:index 2}
# Quick Start: Project Gantt Chart

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
    name: "Activities",
    actualStart: "2018-01-25",
    actualEnd: "2018-04-07",
    children: [
      {
        name: "Analysis",
        actualStart: "2018-01-25",
        actualEnd: "2018-02-08"
      },
      {
        name: "Design",
        actualStart: "2018-02-04",
        actualEnd: "2018-02-24"
      },
      {
        name: "Meeting",
        actualStart: "2018-02-25",
        actualEnd: "2018-02-25"
      },
      {
        name: "Implementation",
        actualStart: "2018-02-25",
        actualEnd: "2018-03-14"
      },
      {
        name: "Testing",
        actualStart: "2018-03-15",
        actualEnd: "2018-04-07"
      }
    ]
}];
```

## Chart

```
<script>
  anychart.onDocumentReady(function () {    	
    // create data
    var data = [
      {
        name: "Activities",
        actualStart: "2018-01-25",
        actualEnd: "2018-04-07",
        children: [
          {
            name: "Analysis",
            actualStart: "2018-01-25",
            actualEnd: "2018-02-08"
          },
          {
            name: "Design",
            actualStart: "2018-02-04",
            actualEnd: "2018-02-24"
          },
          {
            name: "Meeting",
            actualStart: "2018-02-25",
            actualEnd: "2018-02-25"
          },
          {
            name: "Implementation",
            actualStart: "2018-02-25",
            actualEnd: "2018-03-14"
          },
          {
            name: "Testing",
            actualStart: "2018-03-15",
            actualEnd: "2018-04-07"
          }
        ]
    }];    
    // create a data tree
    var treeData = anychart.data.tree(data, "as-tree");  
    // create a chart
    var chart = anychart.ganttProject();  
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

{sample :height 220}GANTT\_NEW\_Quick\_Start\_Project{sample}

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
            name: "Activities",
            actualStart: "2018-01-25",
            actualEnd: "2018-04-07",
            children: [
              {
                name: "Analysis",
                actualStart: "2018-01-25",
                actualEnd: "2018-02-08"
              },
              {
                name: "Design",
                actualStart: "2018-02-04",
                actualEnd: "2018-02-24"
              },
              {
                name: "Meeting",
                actualStart: "2018-02-25",
                actualEnd: "2018-02-25"
              },
              {
                name: "Implementation",
                actualStart: "2018-02-25",
                actualEnd: "2018-03-14"
              },
              {
                name: "Testing",
                actualStart: "2018-03-15",
                actualEnd: "2018-04-07"
              }
            ]
        }];      
        // create a data tree
        var treeData = anychart.data.tree(data, "as-tree");    
        // create a chart
        var chart = anychart.ganttProject();    
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
  </body>
</html>
```