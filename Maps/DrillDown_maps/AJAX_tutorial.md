{:index 4}
#AJAX tutorial



## Include AnyMap component

First of all, you need the AnyMap component, which can be found on the [download page](../Quick_Start/Downloading_AnyChart). Reference the AnyMap JavaScript file in the <head> section of your web page. 

```
<head>
    <script src="//cdn.anychart.com/js/latest/anymap.min.js" type="text/javascript"></script> 
</head>
```

If you need any other AnyChart components, it's better to include anychart-bundle.min.js, which can be found on the same page.


## Add AJAX and Maps


To create a sample with maps being added through AJAX request, we need to do is to include the ajax component to our Drill Down Map sample (in the same <head> section). 

```
<head>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
</head>
```

The root map is better to be added the same way as the AnyMap component and AJAX:

```
<head>
	<script src="http://cdn.anychart.com/geodata/1.2.0/countries/united_states_of_america/united_states_of_america.js"></script>
</head>
```

## Add maps

Using AJAX means that you don't simultaneously load all maps you're going to use in your Drill Down Map, but you get a necessary map each time you make an AJAX request. 

A request in AJAX should have the following fields:
 - type: AnyChart suppots two request types, "GET" and "POST"
 - url: A link to the requested file
 - dateType: a type of the data of the requested file
 - success: in this field we set a function which is to be run, if the requested file has been successfully loaded
 - error: this field contains actions that should be performed if the request fails (this field is not necessary)

 In this sample we have used maps in .json format.

```
jQuery.ajax({
    type: "GET", 
    url: "http://cdn.anychart.com/geodata/1.2.0/usa_states/texas/texas.json", 
    dataType: "json",
    success: function(data){
	    console.log(data);
	    txMap.geoData(data.features);
	    txSeries = txMap.choropleth(dataSetTX);    
    },
    error: function(){
        console.log(arguments);
    },
});
```








## Data

Now it's time for defining the data. As with other components, there are two ways of the data defining: as array of arrays or as array of objects. Note that you should set the data for all maps that are used in Drill Down. 

Let's use some statistical data about population in those states in 2000 for the next sample.

``` 
// set the data for the USA map
var usaDataSet = anychart.data.set([
    {"id": "US.TX", "value": 26956958},
    {"id": "US.FL", "value": 19552860}
]);

// create dataset for Texas
var dataSetTX = anychart.data.set([
    {'id': 'US.TX.111', 'value': 6222}, // Dallam
    {'id': 'US.TX.421', 'value': 3186}, // Sherman
    {'id': 'US.TX.195', 'value': 5369}, // Hansford
    {'id': 'US.TX.357', 'value': 9006}, // Ochiltree
    {'id': 'US.TX.295', 'value': 3057}, // Lipscomb
]);

// create dataset for Florida 
var dataSetFL = anychart.data.set([
    {'id': 'US.FL.063', 'value': 46755}, //Jackson
    {'id': 'US.FL.091', 'value': 170498}, //Okaloosa
    {'id': 'US.FL.077', 'value': 7021}, //Liberty County
    {'id': 'US.FL.079', 'value': 18733}, //Madison
});
```

After we have defined the data, it's time to pass to series defining.

AnyMaps provide a wide range of series avaliable for usage, so at the first step you should make up your mind about which series (map) type (or types) you're going to use in your Drill Down Map. All supported Maps can be found in the [Maps](../Maps_List) list.

In this sample we've decided to use Choropleth, as it's one of the most popular series type and it's quite a good choice for performing the information about population.

```
// Set the series for all maps
usaSeries = usaMap.choropleth(usaDataSet);
txSeries = txMap.choropleth(dataSetTX);    
flSeries = flMap.choropleth(dataSetFL);
```

Now, it's time to enable the drill down interactivity in our map.


## Drill Down Map

To enable the drill down in the map, we use {api:anychart.charts.Map#drillDownMap}.drillDownMap(){api} method. Explore the next sample.

```
usaMap.drillDownMap({
    "US.TX": txMap,   
    "US.FL": flMap
});

// set the selectionMode    
usaMap.interactivity({selectionMode: "drillDown"});
```

Note that using this method requires setting the {api:anychart.charts.Map#interactivity}.interactivity(){api} method into drillDown mode.

{sample}Maps\_Drill\_Down\_Basic\_01{sample}

By default, the {api:anychart.charts.Map#drillUp}.drillUp(){api} method is performed on "Esc" click, so use Esc to open the map of the previous level in the sample.


## Adjust settings

The sample demonstrated in this article uses AJAX request for loading maps. If you prefer reference the maps directly from the document, check the [Basic Tutorial](Basic_Tutorial) article. For other drill down methods look through the [Methods](Methods) article. If you need to create breadcrumbs - find information about them in the [Breadcrumbs](Breadcrumbs) article.
