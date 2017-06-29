{:index 1}
# PERT Chart Quick Start
 
## Getting started with PERT Chart

To get started with PERT Chart follow these simple steps and you will get your first web PERT chart in a minute.

###1. Include PERT Chart into Your Web Page
Include the JavaScript file in the `<head>` section of your web page – visit the [download page](../Quick_Start/Downloading_AnyChart) for those or use CDN as shown below:

```
<head>
    <script src="https://cdn.anychart.com/js/latest/anygantt.min.js" type="text/javascript"></script>
</head>
```

###2. Create a Container for the Chart
Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes. AnyChart charting library uses 100% of the container if other behaviour is not specified. 

```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```
###3. Prepare Your Data

There are two ways to set data for PERT charts, both based on [Anychart Data Tree Model](../Working_with_Data/Using_Data_Tree_Model): nodes and connections between them can be set either simultaneously or separately, in two sets of data. In this sample, the first way is shown:

```
// data
var data = [
    {id: "1", duration: 1, name: "Task A"},
    {id: "2", duration: 4, name: "Task B"},
    {id: "3", duration: 3, name: "Task C"},
    {id: "4", duration: 1, name: "Task D"},
    {id: "5", duration: 2, name: "Task AD", dependsOn: ["1", "4"]},
    {id: "6", duration: 2, name: "Task BC", dependsOn: ["2", "3"]}
];
```

Look through the [Data article](Data) for more information about setting and managing the data.

###4. Create a Chart
Add the JavaScript tag `<script>` with the following code anywhere in the  page. 
This code example uses JavaScript API to create a chart, but you also can use [JSON, XML and CSV](../Working_with_Data/Supported_Data_Formats). 

```
<script>
anychart.onDocumentReady(function () {
	   
// data
var data = [
	{id: "1", duration: 1, name: "Task A"},
	{id: "2", duration: 4, name: "Task B"},
	{id: "3", duration: 3, name: "Task C"},
	{id: "4", duration: 1, name: "Task D"},
	{id: "5", duration: 2, name: "Task AD", dependsOn: ["1", "4"]},
	{id: "6", duration: 2, name: "Task BC", dependsOn: ["2", "3"]}
];

// create a PERT chart
chart = anychart.pert();

// set chart data
chart.data(data, "asTable");

// set the title of the chart
chart.title("PERT Chart");

// set the container id for the chart
chart.container("container");

// initiate drawing the chart
chart.draw();
});
</script>
```

## The Result
### See the Result
After all these steps you should have the following result. This example, like any other on our site, can be launched and explored using AnyChart Playground.

{sample :width 700 :height 700}PERT\_Basic\_Sample{sample}

### Full Source Code
You can copy this to a file on your computer and open it in your browser to display the PERT Chart shown above:

```
<!doctype html>
<html>
  <head>
    <script src="https://cdn.anychart.com/js/latest/anygantt.min.js"></script>
    <style>
      html, body, #container {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="container"></div>
    <script>
	anychart.onDocumentReady(function () {
		   
		// data
		var data = [
		    {id: "1", duration: 1, name: "Task A"},
		    {id: "2", duration: 4, name: "Task B"},
		    {id: "3", duration: 3, name: "Task C"},
		    {id: "4", duration: 1, name: "Task D"},
		    {id: "5", duration: 2, name: "Task AD", dependsOn: ["1", "4"]},
		    {id: "6", duration: 2, name: "Task BC", dependsOn: ["2", "3"]}
		];

		// create a PERT chart
		chart = anychart.pert();

		// set chart data
		chart.data(data, "asTable");

		// set the title of the chart
		chart.title("PERT Chart");

		// set the container id for the chart
		chart.container("container");

		// initiate drawing the chart
		chart.draw();
	});
    </script>
  </body>
</html>
```