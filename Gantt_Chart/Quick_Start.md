{:index 1}
# Gantt Chart Quick Start

## Getting started with Gantt Chart
###1. Include Gantt Chart into Your Web Page
Include the JavaScript file in the `<head>` section of your web page - visit the [download page](../Quick_Start/Downloading_AnyChart) for those or use CDN as shown below.

```
<head>
    <script src="https://cdn.anychart.com/js/latest/anygantt.min.js" type="text/javascript"></script> 
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

Gantt Chart provides quite a few opportunities to work with data (such as setting [tree like hierarchy with parent/child division](../Working_with_Data/Using_Data_Tree_Model)), thus it requires preparing data before usage. Raw data set for Gantt chart may look like this:

```
 var rawData = [
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
  }];
```

###4. Create a chart
Add the JavaScript tag `<script>` with the following code anywhere in the  page. 
This code example uses JavaScript API to create a chart, but you also can use [JSON, XML and CSV](Data_from_JSON,_XML,_CSV). 
Example:

```
<script>
anychart.onDocumentReady(function(){
 var rawData = [
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
  }];
  
  // data tree settings
  var treeData = anychart.data.tree(rawData, anychart.enums.TreeFillingMethod.AS_TREE);
  var chart = anychart.ganttProject();      // chart type
  chart.data(treeData);                     // chart data
  chart.container('container').draw();      // set container and initiate drawing
});
</script>
```
  
## The result
###See the result
After all these steps you should have the following result. This example, like any other on our site, can be launched and explored using the samples playground.
{sample :width 690 :height 180}GANTT\_Basic\_Sample{sample}
###Full source code
You can copy this to a file on your computer and open it in your browser to display the Gantt Chart shown above:
```
<!doctype html>
<head>
  <script src="//cdn.anychart.com/js/latest/anygantt.min.js" type="text/javascript"></script>
  <script>
	anychart.onDocumentReady(function(){
	
	    var rawData = [
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
	      }];
	
	  // tree data settings
	  var treeData = anychart.data.tree(rawData, anychart.enums.TreeFillingMethod.AS_TREE);
	
	  // chart type
	  chart = anychart.ganttProject();
	
	  // chart container
	  chart.container('container');
	
	  // set chart data
	  chart.data(treeData);
	
	  // initiate drawing
	  chart.draw();
	  
	  // show all items 
	  chart.fitAll();
	
	});
  </script>
</head>
<body>
	<div id="container" style="width: 500px; height: 400px;"></div>
</body>
</html>
```
