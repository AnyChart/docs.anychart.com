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
    "id": "1",
    "name": "Phase 1 - Strategic Plan",
    "actualStart": 1171468800000,
    "actualEnd": 1171987200000
  },
  {
    "id": "2",
    "name": "Self-Assessment",
    "actualStart": 1173024000000,
    "actualEnd": 1173715200000
  },
  {
    "id": "3",
    "name": "Define business vision",
    "actualStart": 1169740800000,
    "actualEnd": 1170172800000
  },
  {
    "id": "4",
    "name": "Identify available skills, information and support",
    "actualStart": 1171814400000,
    "actualEnd": 1172419200000
  },
  {
    "id": "5",
    "name": "Decide whether to proceed",
    "actualStart": 1171296000000,
    "actualEnd": 1171382400000
  },
  {
    "id": "6",
    "name": "Define the Opportunity",
    "actualStart": 1173628800000,
    "actualEnd": 1174320000000
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
  var treeData = anychart.data.tree(getData(), anychart.enums.TreeFillingMethod.AS_TABLE);
  var chart = anychart.ganttProject();                  // chart type
  chart.bounds(0, 0, '100%', '100%');                   // chart position
  chart.data(treeData);                                 // chart data
  chart.splitterPosition(170);                          // data tree width
  var dataGrid = chart.getDataGrid();                   // create data grid
  dataGrid.column(0).width(30).title().text('#');       // settings for first column

  // settings for the second column
  dataGrid.column(1).width(140).textFormatter(function(item) {
    return item.get('name');
  }).title().text('Plan');

  // set container and initiate drawing
  chart.container('container').draw();
});
</script>
```
  
## The result
###See the result
After all these steps you should have the following result. This example, like any other on our site, can be launched and explored using the samples playground.
{sample}Gantt\_Chart{sample}
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
        "actualStart": 1171468800000,
        "actualEnd": 1171987200000
      },
      {
        "name": "Draft plan",
        "actualStart": 1173024000000,
        "actualEnd": 1173715200000
      },
      {
        "name": "Board meeting",
        "actualStart": 1169740800000,
        "actualEnd": 1170172800000
      },
      {
        "name": "Research option",
        "actualStart": 1171814400000,
        "actualEnd": 1172419200000
      },
      {
        "name": "Final plan",
        "actualStart": 1171296000000,
        "actualEnd": 1171382400000
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