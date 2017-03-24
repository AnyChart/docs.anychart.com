{:index 1}
AnyMap Quick Start
===========
  
## Getting started with Maps
###1. Include AnyMap into Your Web Page
Reference the JavaScript file in the <head> section of your web page.
You can use the link as shown below or download anychart-bundle.min.js from the [download page](../Quick_Start/Downloading_AnyChart) and then put it into any folder of your site (you’ll have to use your own link in this case).

```
<head>
    <script src="//cdn.anychart.com/js/latest/anymap.min.js" type="text/javascript"></script> 
</head>
```

###2. Include the necessary Map into Your Web Page
Reference the JavaScript file in the <head> section of your web page.
Download the *.zip file from the [Map Collection](./Maps_List), put it into any folder of your site and reference it or simply use the link as shown below.

```
<head>
    <script src="//cdn.anychart.com/geodata/countries/aus/australia.js"></script>
</head>
```

###3. Create a Container for the Map
Add a block-based HTML element into your page, set the `id`, `width` and `height` attributes. Unless you don’t, AnyMap will use 100% of the container.
Example:
```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```
###4. Prepare your Data

Map Data should be defined as an array of objects (each represents a region) containing at least a region id and a value. The number of fields that might a data object have is unlimited. 

```
dataSet = anychart.data.set([
    {'id': 'AU.WA', 'value': 300},
    {'id': 'AU.JB', 'value': 230}, 
    {'id': 'AU.NS', 'value': 240}, 
    {'id': 'AU.VI', 'value': 275}, 
    {'id': 'AU.NT', 'value': 130}, 
    {'id': 'AU.TS', 'value': 190}, 
    {'id': 'AU.CT', 'value': 100}, 				 
    {'id': 'AU.SA', 'value': 305},                
    {'id': 'AU.QL', 'value': 190}                 
]);
```

###4. Create a map
Add the JavaScript tag `<script>` with the following code anywhere in the page. 
This code example uses JavaScript API to create a chart, but you also can use GeoJSON format. See [Maps List](./Maps_List) and [Custom GeoJson Maps](./Custom_GeoJson_Maps) to learn more about supported formats and ways of creating maps.
Example:

```
<script>
anychart.onDocumentReady(function() {
    var dataSet = anychart.data.set([
		{'id': 'AU.WA', 'value': 300},
		{'id': 'AU.JB', 'value': 230}, 
		{'id': 'AU.NS', 'value': 240}, 
		{'id': 'AU.VI', 'value': 275}, 
		{'id': 'AU.NT', 'value': 130}, 
		{'id': 'AU.TS', 'value': 190}, 
		{'id': 'AU.CT', 'value': 100}, 				 
		{'id': 'AU.SA', 'value': 305},                
		{'id': 'AU.QL', 'value': 190}  
    ]);

    //
    var map = anychart.map();
    map.geoData(anychart.maps.australia);

    // set the series
    var series = map.choropleth(dataSet);
    series.geoIdField('code_hasc');
	
	// disable the labels
    series.labels(false);

    // set the container
    map.container('container');
    map.draw();
  });
</script>
```
  
## The result
###See the result
After all these steps you should have the following result. You can launch and explore this example further here:
{sample}Maps\_Overview\_01{sample}
###Full source code
You can copy this to a file on your computer and open it in your browser to display the Gauge shown above:
```
<!doctype html>
<html>
  <head>
    <script src="//cdn.anychart.com/js/develop/anychart-bundle.min.js"></script>
    <script src="//cdn.anychart.com/geodata/countries/aus/australia.js"></script>
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
	anychart.onDocumentReady(function() {
    var dataSet = anychart.data.set([
		{'id': 'AU.WA', 'value': 300},
		{'id': 'AU.JB', 'value': 230}, 
		{'id': 'AU.NS', 'value': 240}, 
		{'id': 'AU.VI', 'value': 275}, 
		{'id': 'AU.NT', 'value': 130}, 
		{'id': 'AU.TS', 'value': 190}, 
		{'id': 'AU.CT', 'value': 100}, 				 
		{'id': 'AU.SA', 'value': 305},                
		{'id': 'AU.QL', 'value': 190}  
    ]);

    //
    var map = anychart.map();
    map.geoData(anychart.maps.australia);

    // set the series
    var series = map.choropleth(dataSet);
    series.geoIdField('code_hasc');
	
	// disable the labels
    series.labels(false);

    // set the container
    map.container('container');
    map.draw();
  });
    </script>
  </body>
</html>

```
