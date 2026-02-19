---
sidebar_position: 2
---
# Architecture

## Overview

The AnyMap component helps to create very graphic Maps and dashboards. It consists of several parts, such as the Map file itself and the code of the map you've created (with Data Sets). Look through the information below to know more about creating interactive JavaScript Maps with AnyChart.

Main ideas of AnyChart Maps are:

* AnyChart gets the GeoData (which you can create yourself or use maps AnyChart provides)
* You provide AnyChart component the data you want to display (such as values, region ID's, extra information)
* The GeoData and your Data together with AnyChart component create a map

We recommend to go through the [AnyMap Quick Start](../quick-start) where you can find the basic information about AnyMap architecture.

## Supported Formats

AnyChart Map Component can process GeoData in three formats:

* GeoJSON [en.wikipedia.org/wiki/GeoJSON](https://en.wikipedia.org/wiki/GeoJSON)
* TopoJSON [en.wikipedia.org/wiki/GeoJSON#TopoJSON](https://en.wikipedia.org/wiki/GeoJSON#TopoJSON)
* SVG [en.wikipedia.org/wiki/Scalable_Vector_Graphics](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

## Where to Get Maps

If you don't have your own Geo Data, you may use maps which you can find in [AnyChart Maps List](maps-list). 
AnyChart provides GeoData in GeoJSON, TopoJSON, SVG and SHP format to make it easier to customize maps when needed.

## Custom Maps
  
AnyChart component is able to work with files in GeoJSON, TopoJSON and SVG formats. If your GeoData is in SHP format or any other, you need to convert it before using with AnyChart. You can find more about custom maps in the following articles:

* [Custom GeoJSON Maps](custom-geojson-maps)
* [Custom TopJSON Maps](custom-topojson)
* [Custom SVG Maps](custom-svg-maps)

## Map Series Types

### Colored Maps

Colored Maps, or Choropleth Maps, are maps where areas are colored or shaded according to the prearranged key and each shade or colour represents a range of values. This type of maps is created with a help of [Choropleth Map Series](choropleth-map).

### Bubble Maps

Bubble Maps, or Proportional Symbol maps, are maps where bubbles (or other symbols) of the proportional size are placed on a map. This type of maps is created with a help of [Proportional Symbol Map Series](proportional-symbol-map).

### Point Maps

Dot (or Point, or Marker) Maps are those that demonstrate the existence of a subject or a feature. Unlike Bubble Maps, the dots' sizes don't depend on values. This type of maps is created with a help of [Dot Map Series](dot-point-map)\_Map).

### Seat Maps

Seat Maps are not Geographical Maps, seat map or seating chart, is a diagram of the seat layout inside a building, passenger aircraft or else. They are often published by airlines for informational purposes, and are of use to passengers for selection of their seat at booking or check-in. AnyMap technology allows to create any kind of seat maps, schemes or interactive layouts. See [Seat Map](seat-maps) article for more.

## Controls

AnyChart Maps provide the following controls to be used on Maps:

* [Legend](legend)
* [Color Range](colorrange)

## Settings

There a lot of settings in AnyMap, most of them are explained and mentioned in articles on certain topics, controls or series types. 

* [Map Projections](map-projections) article shows how to change the projection map is displayed in.
* [Visualisation](visualisation) article highlights main visualization settings that can be done with maps.
* [Labels](labels) article describes how to handle and configure map labels.
* [Tooltips](tooltips) article describes how to handle and configure map tooltips.
* [Scales](scales) article describes map scales - a critical feature when working with [Color Range](colorrange) control.

## Interactivity

* [Event Listeners](event-listeners) article tells how to handle different events maps can dispatch.
* [Move_and_Zoom](move-and-zoom) article tells about methods you can use to create navigational controls.
* [Drill Down Maps](drill-down-maps/overview) articles tell you how to create multi-level maps and load new maps during run-time.


