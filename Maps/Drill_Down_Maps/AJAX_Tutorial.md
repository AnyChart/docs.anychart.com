{:index 4}
#Data Adapter or AJAX

* [Include AnyMap component](#include_anymap_component)
* [AJAX and Data Adapter](#ajax_and_data_adapter)
* [Data](#data)
* [Load maps using Data Adapter](#load_maps_using_data_adapter)
 * [Drill To](#drill_to)
 * [Dynamic URL](#dynamic_url)
* [Adjust settings](#adjust_settings)

## Include AnyMap component

First of all, you need the AnyMap component, which can be found on the [download page](../../Quick_Start/Downloading_AnyChart). Reference the AnyMap JavaScript file in the <head> section of your web page. 

```
<head>
<script src="https://cdn.anychart.com/js/latest/anymap.min.js" type="text/javascript"></script>
</head>
```

If you need any other AnyChart components, it's better to include anychart-bundle.min.js, which can be found on the same page.

It is better to add the root map the same way:

```
<script src="https://cdn.anychart.com/geodata/1.2.0/countries/united_states_of_america/united_states_of_america.js"></script>
```

## AJAX and Data Adapter

To create a sample with maps being added through AJAX request, we need to include some AJAX component to our Drill Down Map sample (in the same &lt;head&gt; section). We will use jQuery.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```

Actually, it is possible to include any AJAX library you prefer, but AnyChart provides a special feature - Data Adapter. It does completely the same job as the AJAX. The following code sample shows how to add the AnyChart Data Adapter into the page.

```
<script src="https://cdn.anychart.com/js/latest/data-adapter.min.js"></script>
```

The following sections and examples are describing and demonstrating working with theAnyChart Data Adapter. With AJAX, the code would look quite similar.

## Data

Let's create a data set for the current map of the USA and for maps of Florida and Texas, which we're going to load later using the Data Adapter. We have used the data about population in 2000 in those states for this sample.

As usual, we can define the data as array of arrays or as array of objects. In the next sample we've set the data as array of objects.

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
// create series for the USA map
usaSeries = usaMap.choropleth(usaDataSet);
```

Now, it's time to enable the drill down interactivity in our map.

## Load maps using Data Adapter

Using the Data Adapter means that you don't load all maps you're going to use in your Drill Down Map simultaneously - you load a map only when it is needed. 

The request of the JSON file with the Data Adapter should be done through the {api:anychart.data#loadJsonFile}loadJsonFile(){api} method. There are several parameters of this method, all of them can be found in the API. The necessary parameters are the following:
- URL: the URL of the JSON file that is requested
- Success function: the function that is performed if the JSON file can be found and loaded by the URL

```
anychart.data.loadJsonFile(URL, function (data){}); 
```

You can find all links to our maps on the <a href="https://cdn.anychart.com/#map-collection">AnyChart Map Collection</a> page.

### Drill To

To drill to a map we use the {api:anychart.charts.Map#drillTo}drillTo(){api} method, which requires the id of the map and the map name. 

So, when the Data Adapter request is successfully performed, we create a map, pass the data that we have into the new map's geoData, then create a series and use a {api:anychart.charts.Map#drillTo}drillTo{api} method to load the map of the selected region and perform the drill down. So the code of the function which are to be performed after the request looks like the following:

```
anychart.data.loadJsonFile("https://cdn.anychart.com/geodata/1.2.0/usa_states/texas/texas.json", function (data){
  var txMap = anychart.map();
  txMap.geoData(data);
  txSeries = txMap.choropleth(dataSetTX); 
  usaMap.drillTo("US.TX", txMap);
});   
```

To load the map of the higher level, or simply to drill up, press "Esc" button. Find more about special methods of drill down in the [Methods](Methods) article.

{sample}Maps\_Drill\_Down\_AJAX\_01{sample}

### Dynamic URL

It's rather inconvenient to write a new request for each state. Let's change the Data Adapter request a bit to let it use different URLs depending of the state selected.

Let's create a function that performs a Data Adapter request, it will have three parameters: the id of the clicked region, the URL corresponding to the clicked regions and the root map. This function will be called on the "pointclick" event.

We need to add a field with URL to both states in the dataset of the USA map:

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

// load the map
function loadMap(id, url, map){
    anychart.data.loadJsonFile(url, function (data){
    // create a map to load
    var drillMap = anychart.map();
    // put the data into the map
    drillMap.geoData(data);
    drillMapSeries = drillMap.choropleth(drillMap.choropleth(dataSets[id])); 
    map.drillTo(id, drillMap);
}); 
}                                                                              
```

{sample}Maps\_Drill\_Down\_AJAX\_02{sample}

To open a map of a previous level press "Esc" button.

Explore the sample to see the full source code.

## Adjust settings

The sample demonstrated in this article uses the Data Adapter request to load maps. If you prefer to reference the maps directly, check out the [Basic Tutorial](Basic_Tutorial) article. For other drill down methods look into the [Methods](Methods) article.
