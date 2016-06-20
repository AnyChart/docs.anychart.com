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


## Data

Let's create the dataSet for the current map of the USA and for maps of Floorida and Texxas, which we're going to load later using AJAX.
We have used some data about population in those states in 2000 for the sample.

As usual, we can define the data in array of arrays or in array of objects format. In the next sample we've set the data as array of objects.

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
```

Now, it's time to enable the drill down interactivity in our map.


## Add maps through AJAX

Using AJAX means that you don't simultaneously load all maps you're going to use in your Drill Down Map, but you get a necessary map each time you make an AJAX request. 

A request in AJAX should have the following fields:
 - type: AnyChart suppots two request types, "GET" and "POST"
 - url: A link to the requested file
 - dateType: a type of the data of the requested file
 - success: in this field we set a function which is to be run, if the requested file has been successfully loaded
 - error: this field contains actions that should be performed if the request fails (this field is not necessary). In our case it shows an alert warning a user of failed map load

 In this sample we have used maps in .json format.

```
jQuery.ajax({
    type: "GET", 
    url: "//cdn.anychart.com/geodata/1.2.0/usa_states/texas/texas.json", 
    dataType: "json",
    success: function(data){
    },
    error: function(){
    	alert("Map loading failed");
    },
});
```

You can find links to all maps on the <a href="http://cdn.anychart.com/#map-collection">Maps Collection</a> page.


### drillTo

To drill into a determined map, we use the {api:anychart.charts.Map#drillTo}.drillTo(){api} method, which requires the id of the map and the map name. 

So, in case when AJAX request ends with success, we create a map, transmit the data that we got into the new map's geoData, then create a series and use a {api:anychart.charts.Map#drillTo}.drillTo{api} method to load the map of the selected region and perform the drill down. So the "success" field of the AJAX request will look like the following:

```
success: function(data){
    var txMap = anychart.map();
    txMap.geoData(data);
    txSeries = txMap.choropleth(dataSetTX); 
    usaMap.drillTo("US.TX", txMap);  
}, 
```

To load the map of the higher level, or simply to drill up, press "Esc" button. Find more about special methods of drill down in the [Methods](Methods) article.


### Dynamic URL



{sample}Maps\_Drill\_Down\_Basic\_01{sample}


## Adjust settings

The sample demonstrated in this article uses AJAX request for loading maps. If you prefer reference the maps directly from the document, check the [Basic Tutorial](Basic_Tutorial) article. For other drill down methods look through the [Methods](Methods) article. If you need to create breadcrumbs - find information about them in the [Breadcrumbs](Breadcrumbs) article.
