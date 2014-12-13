{:index 1}
Quick Start
===========
  
## 4 Simple Steps to Start Using Gantt Chart
###1. Include Gantt Chart into Your Web Page
Include the JavaScript file in the `<head>` section of your web page.  
You can use CDN as shown below or visit the [download page](./Downloading_AnyChart).

```
<head>
    <script src="//cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script> 
</head>
```

###2. Create a Container for the Chart
Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes. AnyChart uses 100% of the container if other behaviour is not specified. 
Example:
```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```
###3. Prepare your Data

AnyGantt provides opportunity  much more ways of working with data (such as setting tree like hierarchy with parent/child division), thus it requires preparing data before usage.

```
function getData() {
  return [
  {
    "name": "Activities",
    "actualStart": Date.UTC(2007, 0, 25),
    "actualEnd": Date.UTC(2007, 2, 14),
    "children": [
      {
        "name": "Draft plan",
        "actualStart": Date.UTC(2007, 0, 25),
        "actualEnd": Date.UTC(2007, 1, 3)
      },
      {
        "name": "Board meeting",
        "actualStart": Date.UTC(2007, 1, 4),
        "actualEnd": Date.UTC(2007, 1, 4)
      },
      {
        "name": "Research option",
        "actualStart": Date.UTC(2007, 1, 4),
        "actualEnd": Date.UTC(2007, 1, 24)
      },
      {
        "name": "Final plan",
        "actualStart": Date.UTC(2007, 1, 24),
        "actualEnd": Date.UTC(2007, 2, 14)
      }
    ]
  }
  ];
}
```

###4. Create a chart
Add the JavaScript tag `<script>` with the following code anywhere in the  page. 
This code example uses JavaScript API to create a chart, but you also can use JSON or XML format. <!--See [Supported Data Formats](../Working_with_Data/Supported_Data_Formats) to learn more about supported formats.-->
Example:

```
<script>
anychart.onDocumentReady(function(){
  // data tree settings
  var treeData = anychart.data.tree(getData(), anychart.enums.TreeFillingMethod.AS_TREE);
  var chart = anychart.ganttProject();      // chart type
  chart.data(treeData);                     // chart data
  var dataGrid = chart.getDataGrid();       // create data grid
  chart.container('container').draw();      // set container and initiate drawing
});
</script>
```
  
## The result
###See the result
After all these steps you should have the following result. This example, like any other on our site, can be launched and explored using the samples playground.
{sample :width 690 :height 200}Gantt\_Chart{sample}
###Full source code
You can copy this to a file on your computer and open it in your browser to display the Gantt Chart shown above:
```
<!doctype html>
<head>
  <script src="//cdn.anychart.com/js/latest/anychart.min.js" type="text/javascript"></script>
  <script>
    anychart.onDocumentReady(function(){
      // data tree settings
      var treeData = anychart.data.tree(getData(), anychart.enums.TreeFillingMethod.AS_TABLE);
      var chart = anychart.ganttProject();                  // chart type
      chart.bounds(0, 0, '100%', '100%');                   // chart position
      chart.data(treeData);                                 // chart data
      chart.splitterPosition(170);                          // data tree width
      var dataGrid = chart.getDataGrid();                   // create data grid
      dataGrid.column(0).width(30).title().text('#');       //  settings for first column

      // settings for the second column
      dataGrid.column(1).width(140).textFormatter(function(item) {
        return item.get('name');
      }).title().text('Plan');

      // set container and initiate drawing
      chart.container('container').draw();
    });

    // data
    function getData() {
      return [
      {
        "name": "Activities",
        "actualStart": Date.UTC(2007, 0, 25),
        "actualEnd": Date.UTC(2007, 2, 14),
        "children": [
          {
            "name": "Draft plan",
            "actualStart": Date.UTC(2007, 0, 25),
            "actualEnd": Date.UTC(2007, 1, 3)
          },
          {
            "name": "Board meeting",
            "actualStart": Date.UTC(2007, 1, 4),
            "actualEnd": Date.UTC(2007, 1, 4)
          },
          {
            "name": "Research option",
            "actualStart": Date.UTC(2007, 1, 4),
            "actualEnd": Date.UTC(2007, 1, 24)
          },
          {
            "name": "Final plan",
            "actualStart": Date.UTC(2007, 1, 24),
            "actualEnd": Date.UTC(2007, 2, 14)
          }
        ]
      }
      ];
    }
  </script>
</head>
<body>
	<div id="container" style="width: 500px; height: 400px;"></div>
</body>
</html>
```