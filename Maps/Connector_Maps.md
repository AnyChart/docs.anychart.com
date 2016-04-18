#Connector Maps

* [Overview](#overview)
* [Data](#data)
 * [Object notation](#object_notation)
 * [Array notation](#array_notation)
 * [Missing Points](#missing_points)
 * [Settings](#settings)
 * [Segments](#segments)
* [Altering Connectors](#altering_connectors)
 * [Connector settings](#connector_settings)
 * [Series colors](#series_colors)
 * [Labels and Tooltips](#labels_and_tooltips)
* [Maps usage](#maps_usage)
 * [Route Map](#route_map)
 * [Flight Map](#flight_map)
 * [Areas and Landscape](#areas_and_landscape)
## Overview

Connector Maps are those which are being used for representing routes areas and some landscape elements (such as rivers, for example) in a schematical way. They are quite popular in geography, airlines, economics and advertising. Also they suit well for describing places of touristic interest, so they are also rather claimed in touristic companies. Start and end points for connectors in these maps are defined by the latitude and longitude parameters.

Look at the example below. That's how a complicated multi-functional Connector Map might look like.

{sample}Maps\_Connectors\_01{sample}

There are three basic ways of using these maps: flight map, route map and area map. In this article we will create maps of all three types.

## Data

As it was mentioned before, we need to set latitude and longitude for the start and end point of each connector. Note that we should set the longitude first and then the latitude for each point, as it is done in all popular GIS-systems. There are two different data notations: we can set the data as objects and as arrays. For example, our dataset might look like the following:

### Object notation

Let's now create a small route map. This dataSet represents the route through the UK that connects several places of touristic interest.

```
var data = anychart.data.set([    
  {points: [50.8, -3.6, 51.1, -2.8], fill:'red', stroke:'red', to: "Exmoor National Park"},
    {points: [51.1, -2.8, 50.7, -2.4], fill:'red', stroke:'red', to: "Maiden Castle"},
    {points: [50.7, -2.4, 50.8, -1.6], fill:'red', stroke:'red', to: "New Forest National Park"},
    {points: [50.8, -1.6, 51.5, -0.16], fill:'red', stroke:'red', to: "Stonehenge"},
    {points: [51.5,-0.16, 51.7, -1.29], fill:'red', stroke:'red', to: "London"},
    {points: [51.7, -1.29, 52.2, 0.27], fill:'red', stroke:'red', to: "Oxford"},
    {points: [52.2, 0.27, 53.3, -1.5], fill:'red', stroke:'red', to: "Cambridge"},
    {points: [53.3, -1.5, 53.4, -3.02], fill:'red', stroke:'red', to: "Peak District National Park"},
    {points: [53.4, -3.02,54.1,-3.29], fill:'red', stroke:'red', to: "Liverpool"},
    {points: [54.1, -3.29,54.4,-3.18], fill:'red', stroke:'red', to: "The National Trust"},
    {points: [54.4,-3.18, 54.5,-3.4], fill:'red', stroke:'red', to: "Hadrian's Wall"},
    {points: [54.5,-3.4, 55.2, -1.9], fill:'red', stroke:'red', to: "Nunnykirk Caravan Club Site"},
    {points: [55.2, -1.9, 56.4, -3.5], fill:'red', stroke:'red', to: "Edinburgh"},
    {points: [56.4, -3.5, 57.1, -2.19], fill:'red', stroke:'red', to: "Aberdeen"}
    ]);
// create map chart
```

That's how a Connector Map with this dataset will look like:

{sample}Maps\_Connectors\_02{sample}

Now let's look how the same data will look in the array notation.

### Array notation

When we represent the data in the array mode, we don't need to mention the names of the default adjusted parameters.

```
	var data = anychart.data.set([
	   [[50.8, -3.6, 51.1, -2.8], 'red', 'red'],
	   [[51.1, -2.8, 50.7, -2.4], 'red', 'red'],
	   [[50.7, -2.4, 50.8, -1.6], 'red', 'red'],
	   [[50.8, -1.6, 51.5, -0.16], 'red', 'red'],
	   [[51.5,-0.16, 51.7, -1.29], 'red', 'red'],
	   [[51.7, -1.29, 52.2, 0.27], 'red', 'red'],
	   [[52.2, 0.27, 53.3, -1.5], 'red', 'red'],
	   [[53.3, -1.5, 53.4, -3.02], 'red', 'red'],
	   [[53.4, -3.02,54.1,-3.29], 'red', 'red'],
	   [[54.1, -3.29,54.4,-3.18], 'red', 'red'],
	   [[54.4,-3.18, 54.5,-3.4], 'red', 'red'],
	   [[54.5,-3.4, 55.2, -1.9], 'red', 'red'],
	   [[55.2, -1.9, 56.4, -3.5], 'red', 'red'],
	   [[56.4, -3.5, 57.1, -2.19], 'red', 'red']
	]);

```

We can see that nothing has changed in our map appearance:

{sample}Maps\_Connectors\_03{sample}


### Missing points

It's always possible that our data might be missing some points due to some reasons. Points are being considered as missing when some of the coordinates are not defined, or if a wrong notation was used for its defining. If a point is missing, it will not be shown as Connector Maps are not about demonstrating the values but the routes so there can be no gaps in our connectors.

Let's see how the dataSet with several points missed will be represented.


```
	var data = anychart.data.set([
	    {points: [50.8, -3.6, 51.1, -2.8], fill:'red', stroke:'red', to: "Exmoor National Park"},
	    {points: [51.1, -2.8, 50.7, -2.4], fill:'red', stroke:'red', to: "Maiden Castle"},
	    {points: [50.7, -2.4, 50.8, -1.6], fill:'red', stroke:'red', to: "New Forest National Park"},
	    {points: [50.8, -1.6, 51.5, -0.16], fill:'red', stroke:'red', to: "Stonehenge"},
	    {points: [], fill:'red', stroke:'red', to: "London"},
	    {points: [51.7, -1.29, 52.2, 0.27], fill:'red', stroke:'red', to: "Oxford"},
	    {points: [52.2, 0.27, 53.3, -1.5], fill:'red', stroke:'red', to: "Cambridge"},
	    {points: [53.3, -1.5, 53.4, -3.02], fill:'red', stroke:'red', to: "Peak District National Park"},
	    {points: [], fill:'red', stroke:'red', to: "Liverpool"},
	    {points: [], fill:'red', stroke:'red', to: "The National Trust"},
	    {points: [54.4,-3.18, 54.5,-3.4], fill:'red', stroke:'red', to: "Hadrian's Wall"},
	    {points: [54.5,-3.4, 55.2, -1.9], fill:'red', stroke:'red', to: "Nunnykirk Caravan Club Site"},
	    {points: [], fill:'red', stroke:'red', to: "Edinburgh"},
	    {points: [56.4, -3.5, 57.1, -2.19], fill:'red', stroke:'red', to: "Aberdeen"}
	]);
```

We can see that there are no missing parts of our route, as missing points are ignored.

{sample}Maps\_Connectors\_04{sample}


### Settings

There are some parameters of our series and points can be adjusted through the data. We can change the colors of our connectors, the point markers and so on. Let's look at the dataSet with some parameteres set through it:

```
	var data = anychart.data.set([    
	  {points: [50.8, -3.6, 51.1, -2.8], stroke:'red', to: "Exmoor National Park", marker: {fill: "#9fa8da"}},
	    {points: [51.1, -2.8, 50.7, -2.4], stroke:'green', to: "Maiden Castle"},
	    {points: [50.7, -2.4, 50.8, -1.6], stroke:'green', to: "New Forest National Park"},
	    {points: [50.8, -1.6, 51.5, -0.16], stroke:'green', to: "Stonehenge"},
	    {points: [51.5,-0.16, 51.7, -1.29], to: "London"},
	    {points: [51.7, -1.29, 52.2, 0.27], to: "Oxford"},
	    {points: [52.2, 0.27, 53.3, -1.5], to: "Cambridge"},
	    {points: [53.3, -1.5, 53.4, -3.02], to: "Peak District National Park"},
	    {points: [53.4, -3.02,54.1,-3.29], to: "Liverpool"},
	    {points: [54.1, -3.29,54.4,-3.18], to: "The National Trust"},
	    {points: [54.4,-3.18, 54.5,-3.4], stroke:'green', to: "Hadrian's Wall"},
	    {points: [54.5,-3.4, 55.2, -1.9], stroke:'red', to: "Nunnykirk Caravan Club Site"},
	    {points: [55.2, -1.9, 56.4, -3.5], to: "Edinburgh"},
	    {points: [56.4, -3.5, 57.1, -2.19], stroke:'green', to: "Aberdeen"}
	    ]);
```

That's how the appearance of our map has changed after applying some settings through the dataSet:

{sample}Maps\_Connectors\_05{sample}


### Segments

One of the Connector Maps features is that we can have several connectors as one point, creating segments of the route. Look at the code and sample below.

```
```
{sample}Maps\_Connectors\_06{sample}


## Altering Connectors

### Connector settings


#### Markers

To adjust the position of markers we use {api}**.position()**{api} method which accepts string values like "start", "end", "middle", or ratio from 0 to 1, or a percent value.

The anchor of the marker depends on its posiiton and its connector's curvature, but it can be adjusted if necessary.


#### Labels

Adjusting the position of labels is similar to adjusting it for the markers. We should set "start", "end", "middle", or ratio from 0 to 1, or a percent value for the {api}**.position()**{api} method.

The anchor of the label depends on its posiiton and its connector's curvature.

### Series colors

### Labels and Tooltips



Настройки на уровне серии
В соответствии с настройками из данных, на уровне серии можно настроить дефолтные значения при помощи следующих методов:
// hover/select вариантов у этих вещей нет.
series.curvature()
series.startSize()
series.endSize()
ЗЫ: дефолтные вещи, такие как fill, stroke, marker, label и их hover/select производные не расписываю, думаю и так понятно.


## Maps Usage

Let's create three different maps with connectors to understand the specifics of each map type.

### Route Map

### Flight Map

### Areas and Landscape
