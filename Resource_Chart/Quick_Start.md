{:index 3}
Resource Chart Quick Start
===========
 
## Getting started with Resource Chart
###1. Include Resource Chart into Your Web Page
Resource Chart needs no more than a Basic Chart, so all you need to include in your web page is the following:

```
<head>
    <script src="https://cdn.anychart.com/js/latest/anychart-bundle.min.js" type="text/javascript"></script>
</head>
```

Get the latest JS file from the [download page](../Quick_Start/Downloading_AnyChart) or use CDN as shown above.

###2. Create a Container for the Chart
Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes. AnyChart charting library uses 100% of the container if other behaviour is not specified. 

```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```

###3. Prepare Your Data

There are two ways to set data for Resource Charts, both based on [Anychart Data Tree Model](../Working_with_Data/Using_Data_Tree_Model): nodes and connections between them can be set either simultaneously or separately, in two sets of data. In this sample, the first way is shown:

```
var dataSet = anychart.data.set([
{
    "name": "Gym 3",
    "defaultMinutesPerDay": 360,
    "activities": [
        {
            "name": "FREESTYLE CYCLE",
            "group": "Group A",
            "start": '2016-06-10',
            "end": '2016-06-10',
            "minutesPerDay": 120
        },
        {
            "name": "FIGHT CLUB",
            "group": "Group E",
            "start": '2016-06-10',
            "end": '2016-06-10',
            "minutesPerDay": 120
        },
        {
            "name": "STAGING DANCE",
            "group": "Group C",
            "start": '2016-06-10',
            "end": '2016-06-16',
            "minutesPerDay": 120
        }
    ]
},{
    "name": "Aqua Zone",
    "defaultMinutesPerDay": 240,
    "activities": [
        {
            "name": "WATER AEROBICS",
            "start": '2016-06-10',
            "end": '2016-06-10',
            "minutesPerDay": 120
        },
        {
            "name": "SWIM CAMP",
            "start": '2016-06-10',
            "end": '2016-06-10',
            "minutesPerDay": 120
        }
    ]
},
]);
```

Find more information about data in the [Working with Data](Working_With_Data) article.

###4. Create a Chart
Add the JavaScript tag `<script>` with the following code anywhere in the page. 
This code example uses JavaScript API to create a chart, but you also can use [JSON](Data_from_JSON), [XML](Data_from__XML) and [CSV](Supported_Data_Formats). 

```
<script>
anychart.onDocumentReady(function () {
	   
var dataSet = anychart.data.set([
{
    "name": "Gym 3",
    "defaultMinutesPerDay": 360,
    "activities": [
        {
            "name": "FREESTYLE CYCLE",
            "group": "Group A",
            "start": '2016-06-10',
            "end": '2016-06-10',
            "minutesPerDay": 120
        },
        {
            "name": "FIGHT CLUB",
            "group": "Group E",
            "start": '2016-06-10',
            "end": '2016-06-10',
            "minutesPerDay": 120
        },
        {
            "name": "STAGING DANCE",
            "group": "Group C",
            "start": '2016-06-10',
            "end": '2016-06-16',
            "minutesPerDay": 120
        }
    ]
},{
    "name": "Aqua Zone",
    "defaultMinutesPerDay": 240,
    "activities": [
        {
            "name": "WATER AEROBICS",
            "start": '2016-06-10',
            "end": '2016-06-10',
            "minutesPerDay": 120
        },
        {
            "name": "SWIM CAMP",
            "start": '2016-06-10',
            "end": '2016-06-10',
            "minutesPerDay": 120
        }
    ]
},
]);

// create a resource chart
chart = anychart.resource();

// set the title of the chart
chart.title("Resource Chart");

// set the container id for the chart
chart.container("container");

// initiate drawing the chart
chart.draw();
});
</script>
```

## The Result
###See the Result
After all these steps you should have the following result. This example, like any other on our site, can be launched and explored using AnyChart Playground.

{sample :width 700 :height 700}Resource\_Quick\_Start\_01{sample}

###Full Source Code
You can copy this to a file on your computer and open it in your browser to display the resource Chart shown above:

```
<!doctype html>
<html>
  <head>
    <script src="https://cdn.anychart.com/js/develop/anychart-bundle.min.js"></script>
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
		var dataSet = anychart.data.set([
		{
		    "name": "Gym 3",
		    "defaultMinutesPerDay": 360,
		    "activities": [
		        {
		            "name": "FREESTYLE CYCLE",
		            "group": "Group A",
		            "start": '2016-06-10',
		            "end": '2016-06-10',
		            "minutesPerDay": 120
		        },
		        {
		            "name": "FIGHT CLUB",
		            "group": "Group E",
		            "start": '2016-06-10',
		            "end": '2016-06-10',
		            "minutesPerDay": 120
		        },
		        {
		            "name": "STAGING DANCE",
		            "group": "Group C",
		            "start": '2016-06-10',
		            "end": '2016-06-16',
		            "minutesPerDay": 120
		        }
		    ]
		},{
		    "name": "Aqua Zone",
		    "defaultMinutesPerDay": 240,
		    "activities": [
		        {
		            "name": "WATER AEROBICS",
		            "start": '2016-06-10',
		            "end": '2016-06-10',
		            "minutesPerDay": 120
		        },
		        {
		            "name": "SWIM CAMP",
		            "start": '2016-06-10',
		            "end": '2016-06-10',
		            "minutesPerDay": 120
		        }
		    ]
		},
		]);

		// create a resource chart
		chart = anychart.resource();

		// set chart data
		chart.data(dateSet.mapAs(undefined));

		// set the title of the chart
		chart.title("resource Chart");

		// set the container id for the chart
		chart.container("container");

		// initiate drawing the chart
		chart.draw();
	});
    </script>
  </body>
</html>
```

{sample}Resource\_Quick\_Start\_01{sample}