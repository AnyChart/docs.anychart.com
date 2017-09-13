{:index 4}
# AJAX Tutorial

## Include AnyMap component

First of all, add the AnyMap component, which can be found on the [download page](../../Quick_Start/Downloading_AnyChart). Reference the AnyMap JavaScript file in the <head> section of your web page. 

```
<head>
<script src="https://cdn.anychart.com/js/{{branch-name}}/anymap.min.js" type="text/javascript"></script>
</head>
```

Any other AnyChart components can be included separately the same way as AnyMap, but it's better to include anychart-bundle.min.js, which can be found on the [same download page](../../Quick_Start/Downloading_AnyChart).

It is better to add the root map the same way:

```
<script src="https://cdn.anychart.com/geodata/1.2.0/countries/united_states_of_america/united_states_of_america.js"></script>
```

## Data Adapter

There are a lot of ways how to add the maps into the charts. This article describes using the special AnyChart Data Adapter. If necessary, it is possible to use any other libriary, e.g. jQuery; though, the Data Adapter is functional enough. To create a sample with maps being added through AJAX request, include an AJAX component to the Drill Down Map sample (in the same &lt;head&gt; section):

```
<script src="https://cdn.anychart.com/js/{{branch-name}}/data-adapter.min.js"></script>
```

The following sections and examples are describing and demonstrating working with the AnyChart Data Adapter.

## Data

Let's create a data set for the current map of the USA and for maps of Florida and Texas, which will be loaded later using the Data Adapter. In the sample, the data about population in 2000 was used.

As usual, the data can be defined as array of arrays or as array of objects. In the next sample we've set the data as array of objects.

``` 
// set the data for the USA map
var dataSetUSA = [
    {"id": "US.TX", "value": 26956958},
    {"id": "US.FL", "value": 19552860}
];

// create data set for Texas
var dataSetTX = [
    {'id': 'US.TX.111', 'value': 6222},
    {'id': 'US.TX.421', 'value': 3186},
    {'id': 'US.TX.195', 'value': 5369},
    {'id': 'US.TX.357', 'value': 9006}, 
    {'id': 'US.TX.295', 'value': 3057},
];

// create data set for Florida 
var dataSetFL = [
    {'id': 'US.FL.063', 'value': 46755},
    {'id': 'US.FL.091', 'value': 170498},
    {'id': 'US.FL.077', 'value': 7021},
    {'id': 'US.FL.079', 'value': 18733},
};
```

When the data is defined, it's time to create series.

AnyMap provides several types of series, so at the first step make up your mind about which series (map) type (or types) is going to be used in the Drill Down Map.

The [Choropleth Map](../Choropleth_Map) is used in this sample, as it is one of the most popular series type.

```
// create series for the USA map
usaSeries = usaMap.choropleth(usaDataSet);
```

Now, it's time to enable the drill down interactivity in the map.

## Load maps using Data Adapter

Using the Data Adapter means it is not necessary to load all maps which are going to be shown in the Drill Down Map simultaneously - load a map only when it is needed. 

The request of the JSON file with the Data Adapter should be done through the {api:anychart.data#loadJsonFile}loadJsonFile(){api} method. There are several parameters of this method, all of them can be found in the API. The necessary parameters are the following:
- URL: the URL of the JSON file that is requested
- Success function: the function that is performed if the JSON file can be found and loaded by the URL

```
anychart.data.loadJsonFile(URL, function (data){}); 
```

Find all links to AnyChart Maps on the <a href="https://cdn.anychart.com/#map-collection">AnyChart Map Collection</a> page.

### Drill To

To drill to a map use the {api:anychart.charts.Map#drillTo}drillTo(){api} method, which requires the id of the map and the map name. 

So, when the Data Adapter request is successfully performed, create a map, pass the data into the new map's geoData, then create a series and use the  {api:anychart.charts.Map#drillTo}drillTo{api} method to load the map of the selected region and perform the drill down. So the code of the function which are to be performed after the request looks like the following:

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

Let's create a function that performs a Data Adapter request. It will have three parameters: the id of the clicked region, the URL corresponding to the clicked regions and the root map. This function will be called on the "pointclick" event.

It is necessary to add a field with URL to both states in the dataset of the USA map:

```
// set the data for the USA map
var usaDataSet = [
    {"id": "US.TX", "value": 26956958, "url": "https://cdn.anychart.com/geodata/1.2.0/usa_states/texas/texas.json"},
    {"id": "US.FL", "value": 19552860, "url": "https://cdn.anychart.com/geodata/1.2.0/usa_states/florida/florida.json"}
];

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

To open a map of a previous level press the "Esc" button.

Explore the sample to see the full source code.

## Adjust settings

The sample demonstrated in this article uses the Data Adapter request to load maps. If you prefer to reference the maps directly, check out the [Basic Tutorial](Basic_Tutorial) article. For other drill down methods look into the [Methods](Methods) article.
