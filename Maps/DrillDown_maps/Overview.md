{:index 1}
Overview
=================

* [Overview](#overview)
* [Usage cases](#usage_cases)
* [Data](#data)

## Overview

AnyChart Maps are JavaScript interactive maps, with ability to create Drill Down maps, you can find several samples of such maps at [AnyChart Drill Down Maps Gallery](http://www.anychart.com/products/anymap/gallery/Maps_with_Drill_Down/).

{api:anychart.charts.Map#drillTo}drillTo(){api} and {api:anychart.charts.Map#drillUp}drillUp(){api} are two main methods used to create maps with drill down functionality, [Move and Zoom](Move_and_Zoom) functions may help to create better user experience. 

## Usage cases

There are three types of drilldown maps that we offer:
	- Change GeoData and Data: when we drill down to any level, we change only the data and geojson data, while all visual settings, controls and other stay the same as in the root map;
	- Change GeoData, Data and some custom things: when we drill down, the data and geojson data changes obviously, with some other custom settings (some labels or series can be added), but the controls stay the same as in the root map;
	- Completely Custom: all settings, data and controls are different on each level of drill down.

 ## Data

The main thing about a drill down map data is that it should contain the data about the regions of all levels of drill down that you are going to use. For example, if it's necessary to show the districts of a state, while you take the world map as a root map, you should define not only the world map regions (countries), but also those countries' (at least of one) regions (or states), and then the districts of these regions. This way of setting the data might be rather satisfatory if you are not going to operate a big number of maps, but, anyway, this way leads to the page loading time increase. To avoid this, you can use AJAX for loading the necessary maps without linking them as scripts. The second way how to avoid linking the maps as scripts is to load a JSON configuration. Though, this does not help a lot with the page size, getting rid of links might be useful in case it's not possible to use AJAX.