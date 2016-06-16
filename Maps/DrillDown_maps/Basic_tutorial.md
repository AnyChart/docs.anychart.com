{:index 3}
Basic tutorial


## Include AnyMap into Drill Down Map

First of all, you need the Anymap component, which can be found on the [download page](../Quick_Start/Downloading_AnyChart). Reference the AnyMap JavaScript file in the <head> section of your web page. 

```
<head>
    <script src="//cdn.anychart.com/js/latest/anymap.min.js" type="text/javascript"></script> 
</head>
```

If you need any other AnyChart components, it's better to include anychart-bundle.min.js, which can be found on the same page.


### Include maps into Drill Down Map

There are several ways how to include maps in your Drill Down Map: through scripts or using AJAX. The first way is described in this article; if you need the tutorial for AJAX, visit the [AJAX](AJAX_Tutorial) page.

To include a map as script, reference the JavaScript file with this map in the <head> section of your web page.
You can use the link as shown below or download all necessary maps from the <a href="http://cdn.anychart.com/#map-collection">download page</a> and then reference them locally.
Note that all maps that will be used should be referenced like in this code sample. In the following code sample we reference the root map (the world map), the USA map and maps of Texas and Florida, as we're not going to use any other maps.

```
<head>
    <script src="//cdn.anychart.com/geodata/1.2.0/custom/world/world.js" type="text/javascript"></script> 
    <script src="//cdn.anychart.com/geodata/1.2.0/countries/united_states_of_america/united_states_of_america.js" type="text/javascript"></script> 
    <script src="//cdn.anychart.com/geodata/1.2.0/usa_states/florida/florida.js" type="text/javascript"></script> 
    <script src="//cdn.anychart.com/geodata/1.2.0/usa_states/texas/texas.js" type="text/javascript"></script> 
</head>
```

After the maps are referenced in the <head> section, we can create the map objects and get the geoData from these maps. Look at the next code sample:

```
	// world map creating
	var worldMap = anychart.map();
    worldMap.geoData(anychart.maps.world);
```

Here we have created the world map, other maps are to be defined the same. You can find geoData names for all available maps on the <a href = "http://cdn.anychart.com/#map-collection">maps collection page</a>. The regions' IDs can be found there as well. Choose the "Demo" of a necessary map to see how it should be defined.


### Data

Now it's time for defining the data. As with other components, there are two ways of the data defining: as array of arrays or as array of objects. Note that you should set the data for all maps that are used in Drill Down. 

Let's use some statistic data about population in those states in 2000 for the next sample.

``` 
    // set the data for the world map
    var worldDataSet = anychart.data.set([
        {id: "US", name: "USA", value: "A1"}
    ]);

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
        {'id': 'US.FL.063', 'value': 46755}, //Jackson]
        {'id': 'US.FL.091', 'value': 170498}, //Okaloosa
        {'id': 'US.FL.077', 'value': 7021}, //Liberty County
        {'id': 'US.FL.079', 'value': 18733}, //Madison
    });
```

After we have defined the data, it's time to pass to the series.

## Series

AnyMaps provide a wide range of series avaliable for usage, so at the first step you should make up your maind about which series (map) type you're going to use in you Drill Down Map. All supported series types can be found in the [Maps](../Maps_List) list.

In this sample we've decided to use Choropleth, as it's one of the most popular series type and it's qiute
pictorial when we talk about population.

```
    // Set the series for all maps
    worldSeries = chart.choropleth(worldDataSet);
    usaSeries = usaMap.choropleth(usaDataSet);
    txSeries = txMap.choropleth(dataSetTX);    
    flSeries = flMap.choropleth(dataSetFL);
```

{sample}Maps\_Drill\_Down\_Methods\_01{sample}

