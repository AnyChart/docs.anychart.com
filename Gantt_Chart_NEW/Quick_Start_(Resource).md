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
    name: "Activities",
    actualStart: Date.UTC(2018, 0, 25),
    actualEnd: Date.UTC(2018, 3, 7),
    children: [
      {
        name: "Analysis",
        actualStart: Date.UTC(2018, 0, 25),
        actualEnd: Date.UTC(2018, 1, 8)
      },
      {
        name: "Design",
        actualStart: Date.UTC(2018, 1, 4),
        actualEnd: Date.UTC(2018, 1, 24)
      },
      {
        name: "Meeting",
        actualStart: Date.UTC(2018, 1, 25),
        actualEnd: Date.UTC(2018, 1, 25)
      },
      {
        name: "Implementation",
        actualStart: Date.UTC(2018, 1, 25),
        actualEnd: Date.UTC(2018, 2, 14)
      },
      {
        name: "Testing",
        actualStart: Date.UTC(2018, 2, 15),
        actualEnd: Date.UTC(2018, 3, 7)
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
        actualStart: Date.UTC(2018, 0, 25),
        actualEnd: Date.UTC(2018, 3, 7),
        children: [
          {
            name: "Analysis",
            actualStart: Date.UTC(2018, 0, 25),
            actualEnd: Date.UTC(2018, 1, 8)
          },
          {
            name: "Design",
            actualStart: Date.UTC(2018, 1, 4),
            actualEnd: Date.UTC(2018, 1, 24)
          },
          {
            name: "Meeting",
            actualStart: Date.UTC(2018, 1, 25),
            actualEnd: Date.UTC(2018, 1, 25)
          },
          {
            name: "Implementation",
            actualStart: Date.UTC(2018, 1, 25),
            actualEnd: Date.UTC(2018, 2, 14)
          },
          {
            name: "Testing",
            actualStart: Date.UTC(2018, 2, 15),
            actualEnd: Date.UTC(2018, 3, 7)
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

{sample :height 250}GANTT\_NEW\_Quick\_Start\_Resource{sample}

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
            actualStart: Date.UTC(2018, 0, 25),
            actualEnd: Date.UTC(2018, 3, 7),
            children: [
              {
                name: "Analysis",
                actualStart: Date.UTC(2018, 0, 25),
                actualEnd: Date.UTC(2018, 1, 8)
              },
              {
                name: "Design",
                actualStart: Date.UTC(2018, 1, 4),
                actualEnd: Date.UTC(2018, 1, 24)
              },
              {
                name: "Meeting",
                actualStart: Date.UTC(2018, 1, 25),
                actualEnd: Date.UTC(2018, 1, 25)
              },
              {
                name: "Implementation",
                actualStart: Date.UTC(2018, 1, 25),
                actualEnd: Date.UTC(2018, 2, 14)
              },
              {
                name: "Testing",
                actualStart: Date.UTC(2018, 2, 15),
                actualEnd: Date.UTC(2018, 3, 7)
              }
            ]
        }];      
        // create a data tree
        var treeData = anychart.data.tree(data, "as-tree");    
        // create a chart
        var chart = anychart.ganttProject();    
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