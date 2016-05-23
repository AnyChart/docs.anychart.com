{:index 17}
Drill Down Maps
=================

* [Overview](#overview)
* [Usage cases](#usage_cases)
* [Creating Drill Down Maps](#creating_drill_down_maps)
 * [Data](#data)
 * [Drill To and Drill Up](#drill_to_and_drill_up)
 * [Drill Down Path](#drill_down_path)
 * [DrillDownMap](#drilldownmap)
* [Breadcrumbs](#breadcrumbs)

## Overview

AnyChart Maps are JavaScript interactive maps, with ability to create Drill Down maps, you can find several samples of such maps at [AnyChart Drill Down Maps Gallery](http://www.anychart.com/products/anymap/gallery/Maps_with_Drill_Down/).

{api:anychart.charts.Map#drillTo}drillTo(){api} and {api:anychart.charts.Map#drillUp}drillUp(){api} are two main methods used to create maps with drill down functionality, [Move and Zoom](Move_and_Zoom) functions may help to create better user experience. 

## Usage cases

There are three types of drilldown maps that we offer:
 - Change GeoData and Data: when we drill down to any level, we change only the data and geojson data, while all visual settings, controls and other stay the same as in the root map;
 - Change GeoData, Data and some custom things: when we drill down, the data and geojson data changes obviously, with some other custom settings (some labels or series can be added), but the controls stay the same as in th root map;
 - Completely Custom: all settings, data and controls are different on each level of drill down.

## Creating Drill Down Maps

### Data

The main thing about a drill down map data is that it should contain the data about the regions of all levels of drill down that you are going to use. For example, if it's necessary to show the districts of a state, while you take the world map as a root map, you should define not only the values of the world map regions (countries), but also the values of those countries' (at least of one) regions (or states), and then the values of districts of these regions.

Let's now create a map with such data. Explore the sample in the playground to see all data sets.

{sample}Maps\_Drill\_Down\_01{sample}

In this sample we have added all data for Canada and its regions. 

### Drill To and Drill Up

Now we can add the {api:anychart.charts.Map#drillTo}drillTo(){api} and {api:anychart.charts.Map#drillUp}drillUp(){api} methods to enable the drilldown feature in the map and add the regions that we're going to drill down into. The best to do it is to use [listeners](Event_Listeners).

```

```

{sample}Maps\_Drill\_Down\_02{sample}

Now, our map can only drill to a region and drill up to the root map. Let's now consider one more way to create a map with drill down function and then we'll pass to the ways of managing this function.


### DrillDownMap

There is one more way to create a map with drill down. Use {api:anychart.charts.Map#drillDownMap}.drillDownMap(){api} to set the transitions of drill down.

```

```

{sample}Maps\_Drill\_Down\_03{sample}


### Drill Down Path

When we drill down into the map, we may need to get the whole path to the current level. That's when we use the {api:anychart.charts.TreeMap#getDrilldownPath}.getDrilldownPath(){api} method. It returns the objects (levels) that precede the current level.

```

```

{sample}Maps\_Drill\_Down\_04{sample}

Using this function, it becomes easier to drill into any of the levels previous to the current one. Using breadcrumbs helps to visualize the process.

## Breadcrumbs

Breadcrumbs help to find the location of the current drill down level. To get the path to the current region, use {api:anychart.charts.TreeMap#getDrilldownPath}.getDrilldownPath(){api} method. It returns the levels as objects in order, so it's possible to get some information about the path to your current location. Breadcrumbs can be used to get to any level upper in the path, as they represent all levels, so it makes exploring maps easier and more comfortable. 

Let's use our previous map sample and add breadcrumbs.

```
```

{sample}Maps\_Drill\_Down\_05{sample}
