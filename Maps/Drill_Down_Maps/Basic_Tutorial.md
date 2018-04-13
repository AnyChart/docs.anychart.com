{:index 3}
# Basic tutorial

## Include AnyMap component

First of all, you need the Anymap component, which can be found on the [download page](../../Quick_Start/Downloading_AnyChart). Reference the AnyMap JavaScript file in the <head> section of your web page. 

```
<head>
<script src="https://cdn.anychart.com/releases/RC-8.2.1/js/anychart-core.min.js" type="text/javascript"></script>
<script src="https://cdn.anychart.com/releases/RC-8.2.1/js/anychart-map.min.js" type="text/javascript"></script>
</head>
```

If you need any other AnyChart components, it's better to include anychart-bundle.min.js, which can be found on the same page.

## Add maps

There are several ways how to include maps in your Drill Down Map: through scripts or using AJAX. The first way is described in this article; if you need the tutorial for AJAX, visit the [AJAX](AJAX_Tutorial) page.

To include a map as script, reference the JavaScript file with this map in the <head> section of your web page.
You can use the link as shown below or download all necessary maps from the [download page](https://cdn.anychart.com/) and then reference them locally.
Note that all maps that will be used should be referenced like in this code sample. In the following code sample we reference the USA map and maps of Texas and Florida, as we're not going to use any other maps.

```
<head>
<script src="https://cdn.anychart.com/geodata/1.2.0/countries/united_states_of_america/united_states_of_america.js" type="text/javascript"></script>
<script src="https://cdn.anychart.com/geodata/1.2.0/usa_states/florida/florida.js" type="text/javascript"></script>
<script src="https://cdn.anychart.com/geodata/1.2.0/usa_states/texas/texas.js" type="text/javascript"></script>
</head>
```

After the maps are referenced in the &lt;head&gt; section, we can create the map objects and get the geoData from these maps. Look at the next code sample:

```
// creating the map of the USA
var map = anychart.map();
map.geoData(anychart.maps.united_states_of_america);
```

Here we have created the USA map, other maps are to be defined the same way. You can find geoData names for all available maps on the [AnyMap Map Collection](https://cdn.anychart.com/) page. The regions' IDs can be found there as well. Choose the "Demo" of a necessary map to see how it should be defined.

## Data

Now it's time for defining the data. As with other components, there are two ways of the data defining: as array of arrays or as array of objects. Note that you should set the data for all maps that are used in Drill Down. 

Let's use some statistical data about population in those states in 2000 for the next sample.

``` 
// set the data for the USA map
var dataSetUSA = [
    {'id': 'US.TX', 'value': 26956958},
    {'id': 'US.FL', 'value': 19552860}
];

// create dataset for Texas
var dataSetTX = [
    {'id': 'US.TX.111', 'value': 6222},
    {'id': 'US.TX.421', 'value': 3186},
    {'id': 'US.TX.195', 'value': 5369},
    {'id': 'US.TX.357', 'value': 9006},
    {'id': 'US.TX.295', 'value': 3057}, 
];

// create dataset for Florida 
var dataSetFL = [
    {'id': 'US.FL.063', 'value': 46755},
    {'id': 'US.FL.091', 'value': 170498},
    {'id': 'US.FL.077', 'value': 7021}, 
    {'id': 'US.FL.079', 'value': 18733},
};
```

After we have defined the data, it's time to pass it to series.

AnyMap provide a wide range of series, so at the first step you should make up your mind about which series (map) type (or types) you're going to use in your Drill Down Map

In this sample we've decided to use [Choropleth Map](../Choropleth_Map), as it's one of the most popular series type.

```
// Set the series for all maps
usaSeries = map.choropleth(dataSetUSA);
txSeries = txMap.choropleth(dataSetTX);    
flSeries = flMap.choropleth(dataSetFL);
```

Now, it's time to enable the drill down interactivity in our map.

## Drill Down Map

To enable the drill down in the map, we use {api:anychart.charts.Map#drillDownMap}drillDownMap(){api} method. Explore the next sample.

```
map.drillDownMap({
    "US.TX": txMap,   
    "US.FL": flMap
});

// set the Selection Mode    
map.interactivity().selectionMode("drillDown");
```

Note that using this method requires setting the {api:anychart.charts.Map#interactivity}interactivity(){api} method into drillDown mode.

{sample}Maps\_Drill\_Down\_Basic\_01{sample}

By default, the {api:anychart.charts.Map#drillUp}drillUp(){api} method is performed on "Esc" click, so use Esc to open the map of the previous level in the sample.

## Adjust settings

The sample demonstrated in this article is a simple one, but it can be improved and adjusted as you need. Check the [Methods](Methods) and [AJAX Tutorial](AJAX_Tutorial) articles to know all about special drill down methods and to understand how to use them.
