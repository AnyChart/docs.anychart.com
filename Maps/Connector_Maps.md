#Connector Maps

* [Overview](#overview)
* [Data](#data)
 * [Object notation](#object_notation)
 * [Array notation](#array_notation)
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
	{points: [50.8, -3.6, 51.1, -2.8], to: "Exmoor National Park"},
    {points: [51.1, -2.8, 50.7, -2.4], to: "Maiden Castle"},
    {points: [50.7, -2.4, 50.8, -1.6], to: "New Forest National Park"},
    {points: [50.8, -1.6, 51.5, -0.16], to: "Stonehenge"},
    {points: [51.5,-0.16, 51.7, -1.29], to: "London"}
    ]);
```

First two values are the longitude and latitude

That's how a Connector Map with this dataset will look like:

{sample}Maps\_Connectors\_02{sample}

Now let's look how the same data will look in the array notation.

### Array notation

When we represent the data in the array mode, we don't need to mention the names of the default adjusted parameters.

```
	var data = anychart.data.set([
	   [50.8, -3.6, 51.1, -2.8],
	   [51.1, -2.8, 50.7, -2.4],
	   [50.7, -2.4, 50.8, -1.6],
	   [50.8, -1.6, 51.5, -0.16],
	   [51.5,-0.16, 51.7, -1.29],
	   [51.7, -1.29, 52.2, 0.27]
	]);

```

We can see that nothing has changed in our map appearance:

{sample}Maps\_Connectors\_03{sample}


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

{sample}Maps\_Connectors\_04{sample}



### Segments

One of the Connector Maps features is that we can have several connectors as one point, creating segments of the route. Look at the code and sample below.

```
	{points: [50.8, -3.6, 51.1, -2.8, 50.7, -2.4, 50.8, -1.6], stroke:'red', to: "New Forest National Park", marker: {fill: "#9fa8da"}},
    {points: [50.8, -1.6, 51.5, -0.16], stroke:'green', to: "Stonehenge"},
    {points: [51.5,-0.16, 51.7, -1.29], to: "London"},
    {points: [51.7, -1.29, 52.2, 0.27, 53.3, -1.5], to: "Cambridge"},
    {points: [53.3, -1.5, 53.4, -3.02], to: "Peak District National Park"},
    {points: [53.4, -3.02,54.1,-3.29], to: "Liverpool"},
    {points: [54.1, -3.29,54.4,-3.18, 54.5,-3.4, 55.2, -1.9], to: "Nunnykirk Caravan Club Site"},
    {points: [55.2, -1.9, 56.4, -3.5], to: "Edinburgh"},
    {points: [56.4, -3.5, 57.1, -2.19], stroke:'green', to: "Aberdeen"}
```
{sample}Maps\_Connectors\_05{sample}

In this sample we've created several connectors that consist of a number of segments. To make a connector multi-segmental we should add as many points as the number of segments we need. So each time we add a segment to a connector two more values are to be added to the data of this connector. Watch the number of values in each point data should stay even.


## Altering Connectors

### Connector settings

There are several settings that we can adjust for the series. As you might have noticed, all connectors in the samples above look like curves of the same curvature. We can adjust this parameter with the {api:anychart.core.map.series.Connector#curvature}**.curvature()**{api} method. Let's make the connector series look straight lines:

```
	// changing the curvature of the series
	series.curvature(0);
```
{sample}Maps\_Connectors\_06{sample}

We can also define curvature for each connector separately through the data, like in the sample below:

```
var data = anychart.data.set([    
    {points: [50.8, -3.6, 51.1, -2.8, 50.7, -2.4, 50.8, -1.6], stroke:'red', to: "New Forest National Park", marker: {fill: "#9fa8da"}},
    {points: [50.8, -1.6, 51.5, -0.16], stroke:'green', to: "Stonehenge"},
    {points: [51.5,-0.16, 51.7, -1.29], to: "London"},
    {points: [51.7, -1.29, 52.2, 0.27, 53.3, -1.5], to: "Cambridge"},
    {points: [53.3, -1.5, 53.4, -3.02], to: "Peak District National Park"},
    {points: [53.4, -3.02,54.1,-3.29], to: "Liverpool", curvature:-0.2},
    {points: [54.1, -3.29,54.4,-3.18, 54.5,-3.4, 55.2, -1.9], to: "Nunnykirk Caravan Club Site"},
    {points: [55.2, -1.9, 56.4, -3.5], to: "Edinburgh"},
    {points: [56.4, -3.5, 57.1, -2.19], stroke:'green', to: "Aberdeen", curvature:1}
    ]);
```
{sample}Maps\_Connectors\_07{sample}

Note that curvature might be negative. Negative value will simply curve the segment in the other direction.

Two more features of our map connector series are {api:anychart.core.map.series.Connector#startSize}**.startSize()**{api} and {api:anychart.core.map.series.Connector#endSize}**.endSize(){api}. These methods make our connector look more like arrows, tapering or expanding the connector curve (or line) to its ens or from its start. These settings are also available to be adjusted through the data set. In the next sample we've defined both settings for the series in general.

```
var data = anychart.data.set([    
    {points: [50.8, -3.6, 51.1, -2.8, 50.7, -2.4, 50.8, -1.6], stroke:'red', to: "New Forest National Park", marker: {fill: "#9fa8da"}},
    {points: [50.8, -1.6, 51.5, -0.16], stroke:'green', to: "Stonehenge"},
    {points: [51.5,-0.16, 51.7, -1.29], to: "London"},
    {points: [51.7, -1.29, 52.2, 0.27, 53.3, -1.5], to: "Cambridge"},
    {points: [53.3, -1.5, 53.4, -3.02], to: "Peak District National Park"},
    {points: [53.4, -3.02,54.1,-3.29], to: "Liverpool", curvature:-0.2},
    {points: [54.1, -3.29,54.4,-3.18, 54.5,-3.4, 55.2, -1.9], to: "Nunnykirk Caravan Club Site"},
    {points: [55.2, -1.9, 56.4, -3.5], to: "Edinburgh"},
    {points: [56.4, -3.5, 57.1, -2.19], stroke:'green', to: "Aberdeen", curvature:1}
    ]);
```
{sample}Maps\_Connectors\_08{sample}

Now, note that as soon as our connectors have become of some width, we will need to set some value for the {api:anychart.core.map.series.Connector#fill}**.fill()**{api} method of our series in addition to {api:anychart.core.map.series.Connector#stroke}**.stroke()**{api}, if we'd like our connectors to be colored somehow differently from the default. Of course, these can be also defined through the dataset. 


Hover select



#### Markers

To adjust the position of markers we use {api}**.position()**{api} method which accepts string values like "start", "end", "middle", or ratio from 0 to 1, or a percent value.

The anchor of the marker depends on its posiiton and its connector's curvature, but it can be adjusted if necessary.


#### Labels

Adjusting the position of labels is similar to adjusting it for the markers. We should set "start", "end", "middle", or ratio from 0 to 1, or a percent value for the {api}**.position()**{api} method.

The anchor of the label depends on its posiiton and its connector's curvature.

### Series colors

### Labels and Tooltips


## Maps Usage

Let's create three different maps with connectors to understand the specifics of each map type.

### Route Map

### Flight Map

### Areas and Landscape
