{:index 2}
Architecture
===========

## General

The AnyMap component helps to create very graphic Maps and dashboards. It consists of several parts, such as the Map file itself,  JavaScipt file and the code of the map you've created (with Data Set). Look through the information below to know more about creating and enabling the Maps.

We recommend you to look through the [Quick Start](./Quick_Start) before reading this document, where you can find the basic information about AnyMap architecture.

Main ideas of AnyChart Maps are:

 - AnyChart gets the GeoData (which might be provided by user or by AnyChart itself)
 - AnyChart gets the usual data (such as values, region ID's, extra information)
 - The GeoData and your Data together with AnyChart component creates a map.
 
We provide some GeoData in SHP format to make it easier to customize the maps. So, if you don't have your own GeoData, you may want to use one of our maps, which you can find [here](./Maps_List). 
Also, you'll find our GeoData provided in .geojson and .js formats so you may choose which to use.
  
<!-- TopoJSON is smaller in size but the GeoJSON is more simple, so it's up to you which option to choose.-->

AnyChart component is able to work with files in [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) and [TopoJSON](https://en.wikipedia.org/wiki/GeoJSON#TopoJSON) formats, so if your GeoData is in SHP format or any other, please convert it before using with AnyChart. You can find more about [making custom maps](./Custom_GeoJson_Maps).

