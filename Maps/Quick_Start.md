{:index 1}
# AnyMap Quick Start
  
## Getting started with Maps

To get started with AnyMap follow these simple steps and you will get your first web html5 ready geo map in a minute.

##1. Include AnyMap into Your Web Page

Reference the JavaScript file in the `<head>` section of your web page. 

```
<head>
    <script src="https://cdn.anychart.com/js/latest/anymap.min.js" type="text/javascript"></script>
</head>
```

You can use the link as shown above or download anychart-bundle.min.js from the [AnyChart download page](../Quick_Start/Downloading_AnyChart) and then put it into any folder of your site (you’ll have to use your own link in such case).

##2. Include the necessary Map into Your Web Page

Reference the Map JavaScript file in the `<head>` section of your web page.

```
<head>
    <script src="https://cdn.anychart.com/geodata/1.2.0/countries/australia/australia.js"></script>
</head>
```

You also can use **GeoJSON**, **TopoJSON** or **SVG** formats. See [AnyChart Map List](./Maps_List) and [Supported Formats](Architecture#supported_formats) to learn more about supported formats and ways of creating maps.

You can use the link as shown above or download file from the [Map Collection](./Maps_List), put it into any folder of your site (you’ll have to use your own link in such case).

If you are going to use geographic cooridnates, it is necessary to reference to prof4.js file:

```
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.15/proj4.js" data-export="true"></script>
</head>
```


##3. Create a Container for the Map

Add a block-level HTML element into your page, set the `id`, `width` and `height` attributes. Unless you don’t, AnyMap will use 100% of the container.

```
<body>
    <div id="container" style="width: 500px; height: 400px;"></div>
</body>
```

##4. Prepare your Data

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

##5. Create a map

Add the JavaScript tag `<script>` with the following code anywhere in the page. 

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
	
	// disable labels
    series.labels(false);

    // set the container
    map.container('container');
    map.draw();
  });
</script>
```

Several map series types are available, see [AnyChart Map Series Types](Architecture#map_series_types) to learn more.
  
## The result

After all these steps you should have the following result. You can launch and explore this example further here:

{sample}Maps\_Overview\_01{sample}

##Full source code

You can copy this code to a file on your computer and open it in your browser to display the map above:

```
<!doctype html>
<html>
  <head>
    <script src="https://cdn.anychart.com/js/latest/anychart-bundle.min.js"></script>
    <script src="https://cdn.anychart.com/geodata/1.2.0/countries/australia/australia.js"></script>
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
	
	// disable labels
    series.labels(false);

    // set the container
    map.container('container');
    map.draw();
  });
    </script>
  </body>
</html>

```
