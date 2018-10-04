{:index 2}
# Drill Down Maps

## Overview

DrillDown Maps are useful but rather complicated, so we have created several methods to simplify the process of managing them. 
To find information about creating Drill Down Maps and using AJAX read the [Basic Tutorial](Basic_Tutorial) and [AJAX Tutorial](AJAX_Tutorial).

In all samples of this article all necessary maps are being loaded ahead as scripts. Look at the [Maps List](../Maps_List) for the list of AnyMaps and [Maps Quick Start article](../Quick_Start) to know how to load the maps. This way of working with maps can be reasonable in case if there is no need in a big amount of maps; otherwise, it's better to use AJAX requests, because a big amount of preloaded maps slows the page loading down.

## Methods

The following methods make working with drill down easier:
- {api:anychart.charts.Map#drillTo}drillTo(){api},
- {api:anychart.charts.Map#drillUp}drillUp(){api},
- {api:anychart.charts.Map#drillDownMap}drillDownMap(){api}
- {api:anychart.charts.Map#getDrilldownPath}getDrilldownPath(){api}. 

### Drill To

Using the {api:anychart.charts.Map#drillTo}drillTo(){api} method will drill down to a selected region. This method requires the ID of the region/country and the map which matches the defined region and will be loaded. This method is used naturally in [listeners](../../Common_Settings/Event_Listeners).

```
// Drill down to specified map
map.drillTo("US", map);
```

{sample}Maps\_Drill\_Down\_Methods\_01{sample}

Another way to create a map with a drill down function is not to specify all maps ahead but use AJAX instead. In case of managing quite a big number of maps, it's better to use AJAX requests. Then there will be no need in loading all maps at once, which reduces inital the page loading time. Find all information about using AJAX to create drill dowm maps in the [AJAX Tutorial](AJAX_Tutorial).

### Drill Up

The {api:anychart.charts.Map#drillUp}drillUp(){api} method loads the map of the previous level. This method requires no parameters, it works only when drill down caused by {api:anychart.charts.Map#drillTo}drillTo(){api} or {api:anychart.charts.Map#drillDownMap}drillDownMap(){api} happened prior to its execution. In the following sample we have set listeners to the chart title.

```
// drill up
map.drillUp();
```

{sample}Maps\_Drill\_Down\_Methods\_02{sample}

### Drill Down Map

Another way to create a map with drill down is {api:anychart.charts.Map#drillDownMap}drillDownMap(){api} method, which defines transitions of drill down. This method requires those regions into which we want to perform a drill down. Besides this method, we should also set the appropriate selection mode. The code should look like this:

```
// set the selection mode    
map.interactivity().selectionMode("drillDown");

// set the drillDownMaps
map.drillDownMap({
    "US": map,        
    "CA": canadaMap
});
```

{sample}Maps\_Drill\_Down\_Methods\_03{sample}

More information about the use of these methods can be found in the [Basic Tutorial](Basic_Tutorial) and the [AJAX Tutorial](AJAX_Tutorial).

### Get Drill Down Path

When we drill down into the map, we may need to get the whole path to the current level. That's when we use the {api:anychart.charts.Map#getDrilldownPath}getDrilldownPath(){api} method. It returns the array of points of {api:anychart.core.MapPoint}MapPoint{api} type, which represent the regions that were clicked on and used for drill down. Note that there is a root element in the drill down path which is a bit different from other elements as it contains no level. Let's make the title of the next sample show this path.

```
// get drilldown path
var path = map.getDrilldownPath();
      
// update path in the title of appropriate instance
map.title(printPath(path))

// function to turn current drill down path structure to string
function printPath(path){
    // root element is the World in this case
    var text = "World";
    // go through the next levels
    for (i = 1; i <  path.length; i++) { 
        text +=  " -> " + path[i].getProperties().name;
    }
    return text;
}
```

{sample}Maps\_Drill\_Down\_Methods\_04{sample}

In the sample above the {api:anychart.core.MapPoint#getCurrentChart}getCurrentChart(){api} method is used to obtain the link to the current map. A custom function *printpath(path)* helps to print the whole path in the title of the chart.

Using the {api:anychart.charts.Map#getDrilldownPath}getDrilldownPath(){api} method, we can make it easier to drill into any of the levels previous to the current one. That's where the Breadcrumbs help us. See the [Breadcrumbs article](Breadcrumbs) to know how they can be used with the described method.