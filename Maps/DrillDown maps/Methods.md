{:index 17}
Drill Down Maps
=================

* [Overview](#overview)
* [Methods](#methods)
 * [Drill To](#drill_to)
 * [Drill Up](#drill_up)
 * [GetDrillDownPath](#getdrilldownpath)
 * [DrillDownMap](#drilldownmap)


## Overview

DrillDown Maps are useful but rather complicated, so we have created several methods to simplify the process of managing them. In this article, we will consider them. 
To find some information about creating DrillDown Maps and using AJAX for the data, read the [Basic Tutorial](Basic_tutorial) and [AJAX Tutorial](AJAX_Tutorial).
Our drilldown maps also have a special UI element that helps to navigate through the levels of a drill down path - breadcrumbs. Read the [Breadcrumbs Tutorial](Breadcrumbs_Tutorial) to get some information about them.


## Methods

There are four general methods that make your work with drilldown easier: {api:anychart.charts.Map#drillTo}.drillTo(){api}, {api:anychart.charts.Map#drillUp}.drillUp(){api}, {api:anychart.charts.Map#drillDownMap}.drillDownMap(){api} and {api:anychart.charts.Map#drillDownPath}.drillDownPath(){api}. Let's now look how they work.

### Drill To

Using the {api:anychart.charts.Map#drillTo}.drillTo(){api} method will drill you down to a selected region. This method uses the region ID for a animation of drilling into this determined region, though this parameter is not necessary - unless it is specified, the animation of drilling will be performed to the center of the map. The best way to set this method is to use [listeners](Event_Listeners).

```
// Drill down to specified map.
chart.drillTo(e.point.get("id"), usaMap);
```

{sample}Maps\_Drill\_Down\_01{sample}

Now, our map can only drill to a region. Let's now look how we can go to the previous level.


### Drill Up

The {api:anychart.charts.Map#drillUp}.drillUp(){api} method allows you to pass to a level above. 

```
// set drill up
txMap.drillUp();
```

{sample}Maps\_Drill\_Down\_02{sample}


### GetDrillDownPath

When we drill down into the map, we may need to get the whole path to the current level. That's when we use the {api:anychart.charts.TreeMap#getDrilldownPath}.getDrilldownPath(){api} method. It returns the objects (levels) that precede the current level and the current level object itself, so it should be considered while extracting the path. Note that there is a root element in the drill down path which is a bit different from other elements as it contains no level. Let's make the title of the next sample show this path.

```
// get drilldown path
var path = chart.getDrilldownPath();

// get link to the current chart
var cv = path[path.length - 1].getCurrentChart();
      
// update path in the title of appropriate instance
cv.title(printPath(path))
```
{sample}Maps\_Drill\_Down\_03{sample}

In the sample above we've used the {api:anychart.core.MapPoint#getCurrentChart}.getCurrentChart(){api} method to define the current drill down path object (chart, level) and transform in to a string, to make it possible to put it later in the title. A custom function helps to print the whole path in the title of the chart:

```
// function to turn current drill down path structure to string
function printPath(path){
    // root element is the World in this case
    var text = "World";
    // go through the next levels
    for (i = 1; i <  path.length; i++) { 
        text += "\-\>" + path[i].H.name;
    }
    return text;
}
```

Using {api:anychart.charts.TreeMap#getDrilldownPath}.getDrilldownPath(){api}, we can make it easier to drill into any of the levels previous to the current one. That's where the Breadcrumbs help us. Look up the [Breadcrumbs article](Breadcrumbs) to know how they can be used with the described method.


### DrillDownMap

There is one more way to create a map with drill down. Use {api:anychart.charts.Map#drillDownMap}.drillDownMap(){api} to set the transitions of drill down. This method requires those regions or countries into which we want to perform a drilldown. Besides this method, we should also set the appropriate selection mode. The code will look like in the following sample:

```
// set the selectionMode    
chart.interactivity({selectionMode: "drillDown"});
```

{sample}Maps\_Drill\_Down\_04{sample}

There were four methods that we use for managing the drill down. For more information about this read the [Basic Tutorial](Basic_tutorial) and [AJAX Tutorial](AJAX_Tutorial).