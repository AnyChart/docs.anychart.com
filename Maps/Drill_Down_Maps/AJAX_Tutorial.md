{:index 4}
#AJAX tutorial

* [Include AnyMap component](#include_anymap_component)
* [AJAX and Maps](#ajax_and_maps)
* [Data](#data)
* [Load maps using AJAX](#load_maps_using_ajax)
 * [Drill To](#drill_to)
 * [Dynamic URL](#dynamic_url)
* [Adjust settings](#adjust_settings)

## Include AnyMap component

First of all, you need the AnyMap component, which can be found on the [download page](../../Quick_Start/Downloading_AnyChart). Reference the AnyMap JavaScript file in the <head> section of your web page. 

```
<head>
<script src="https://cdn.anychart.com/js/{{branch-name}}/anymap.min.js" type="text/javascript"></script>
</head>
```

If you need any other AnyChart components, it's better to include anychart-bundle.min.js, which can be found on the same page.

## AJAX and Maps

To create a sample with maps being added through AJAX request, we need to do is to include some AJAX component to our Drill Down Map sample (in the same &lt;head&gt; section). We will use jQuery.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```

It is better to add the root map the same way as the AnyMap component and jQuery:

```
<script src="https://cdn.anychart.com/geodata/1.2.0/countries/united_states_of_america/united_states_of_america.js"></script>
```

## Data

Let's create a data set for the current map of the USA and for maps of Floorida and Texas, which we're going to load later using AJAX. We have used data about population in those states in 2000 for this sample.

As usual, we can define the data in array of arrays or in array of objects format. In the next sample we've set the data as array of objects.

``` 
// set the data for the USA map
var dataSetUSA = anychart.data.set([
    {"id": "US.TX", "value": 26956958},
    {"id": "US.FL", "value": 19552860}
]);

// create data set for Texas
var dataSetTX = anychart.data.set([
    {'id': 'US.TX.111', 'value': 6222}, // Dallam
    {'id': 'US.TX.421', 'value': 3186}, // Sherman
    {'id': 'US.TX.195', 'value': 5369}, // Hansford
    {'id': 'US.TX.357', 'value': 9006}, // Ochiltree
    {'id': 'US.TX.295', 'value': 3057}, // Lipscomb
]);

// create data set for Florida 
var dataSetFL = anychart.data.set([
    {'id': 'US.FL.063', 'value': 46755}, //Jackson
    {'id': 'US.FL.091', 'value': 170498}, //Okaloosa
    {'id': 'US.FL.077', 'value': 7021}, //Liberty County
    {'id': 'US.FL.079', 'value': 18733}, //Madison
});
```

After we have defined the data, it's time to create series.

AnyMap provides several types of series, so at the first step you should make up your mind about which series (map) type (or types) you are going to use in your Drill Down Map.

In this sample we've decided to use [Choropleth Map](../Choropleth_Map), as it's one of the most popular series type.

```
// create series for USA map
usaSeries = usaMap.choropleth(usaDataSet);
```

Now, it's time to enable the drill down interactivity in our map.

## Load maps using AJAX

Using AJAX means that you don't load all maps you're going to use in your Drill Down Map simultaneously - you loading a map  time when needed. 

In jQuery AJAX request should contain following fields:
 - type: "GET" and "POST",
 - url: a link to the requested file,
 - dateType: a type of the data of the requested file ("json" when you load map in GeoJSON format),
 - success: in this field we set a function which is to be run when the requested file has been successfully loaded,
 - error: this field contains actions that should be performed if the request fails (this field is not necessary). In our case it shows an alert, warning a user of failed map load.

```
jQuery.ajax({
    type: "GET", 
    url: "https://cdn.anychart.com/geodata/1.2.0/usa_states/texas/texas.json",
    dataType: "json",
    success: function(data){
    },
    error: function(){
    	alert("Map loading failed");
    },
});
```

You can find links to all maps in <a href="https://cdn.anychart.com/">AnyChart Map Collection</a> page.

### Drill To

To drill to a map we use the {api:anychart.charts.Map#drillTo}drillTo(){api} method, which requires the id of the map and the map name. 

So, when AJAX request is successfully performed, we create a map, pass the data that we got into the new map's geoData, then create a series and use a {api:anychart.charts.Map#drillTo}drillTo{api} method to load the map of the selected region and perform the drill down. So the "success" field of the AJAX request will look like the following:

```
success: function(data){
    var txMap = anychart.map();
    txMap.geoData(data);
    txSeries = txMap.choropleth(dataSetTX); 
    usaMap.drillTo("US.TX", txMap);  
}, 
```

To load the map of the higher level, or simply to drill up, press "Esc" button. Find more about special methods of drill down in the [Methods](Methods) article.

{sample}Maps\_Drill\_Down\_AJAX\_01{sample}

### Dynamic URL

It's rather inconvenient to write a new AJAX request for each state. Let's change the AJAX-request a bit to let it use different URLs depending of the state we have selected.

Let's create a function that peforms AJAX requests, it will have three parameters: the id of the clicked region, the url corresponding to the clicked regions and the root map. This function will be called on the "pointclick" event.

We need to add a field with url to both states in the dataset of the USA map:

```
// set the data for the USA map
var usaDataSet = anychart.data.set([
    {"id": "US.TX", "value": 26956958, "url": "https://cdn.anychart.com/geodata/1.2.0/usa_states/texas/texas.json"},
    {"id": "US.FL", "value": 19552860, "url": "https://cdn.anychart.com/geodata/1.2.0/usa_states/florida/florida.json"}
]);

// load the map using AJAX
usaSeries.listen("pointClick", function(e) {
    loadMap(e.point.get("id"), e.point.get("url"), usaMap);      
});

function loadMap(id, url, map){
  jQuery.ajax({
    type: "GET",
    url: url, 
    dataType: "json", 
    success: function(data){              
              // create a map to load
              var drillMap = anychart.map();
              // put the data into the map
              drillMap.geoData(data);
              // perform a drill down into the drillMap
              map.drillTo(id, drillMap);
              var drillMapSeries = drillMap.choropleth(dataSets[id]);
            },
    error: function(){
            alert('Error: ', data);
          }
  });
}                                                                               
```

{sample}Maps\_Drill\_Down\_AJAX\_02{sample}

To open a map of a previous level press "Esc" button.

Explore the sample to see the full source code.

## Adjust settings

The sample demonstrated in this article uses AJAX request to load maps. If you prefer to reference the maps directly, check out the [Basic Tutorial](Basic_Tutorial) article. For other drill down methods look into the [Methods](Methods) article.
