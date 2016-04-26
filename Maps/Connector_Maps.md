{:index 7}
#Connector Maps
==================

* [Overview](#overview)
* [Data](#data)
 * [Object notation](#object_notation)
 * [Array notation](#array_notation)
 * [Settings](#settings)
 * [Segments](#segments)
* [Altering Connectors](#altering_connectors)
 * [Connector settings](#connector_settings)
  * [Curvature](#curvature)
  * [Start/end size](#start/end_size)
 * [Series colors](#series_colors)
 * [Markers](#markers)
 * [Labels and Tooltips](#labels_and_tooltips)
* [Maps usage](#maps_usage)
 * [Route Map](#route_map)
 * [Flight Map](#flight_map)
 * [Areas and Landscape](#areas_and_landscape)

## Overview

Connector Maps are those used to represent routes, areas and some landscape elements (such as rivers) in a schematic way. They are quite popular in geography, airlines, economics and advertising. Also they suit well for describing places of touristic interest, so they are also rather claimed in touristic companies. Start and end points for connectors in these maps are defined by the latitude and longitude parameters.

Look at the example below. That's a sample of Connector Map:

{sample}Maps\_Connectors\_01{sample}

## Data

As it was mentioned before, it's necessary to set latitude and longitude for the start and end point of each connector. Note that latitude of the point should be defined first and then the longitude for each point. There are two different data notations: the data can be arranged as objects or as arrays.

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

First two values are the longitude and latitude of the start point and the second pair of values are responsible for the end point coordinates.

That's how a Connector Map with this dataset will look like:

{sample}Maps\_Connectors\_02{sample}

Now let's look how the same data will look in the array notation.

### Array notation

When the data is being represented in the array mode, it's not necessary to mention the names of the default adjusted parameters.

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

Nothing has changed in our map appearance:

{sample}Maps\_Connectors\_03{sample}


### Settings

There are some parameters of our series and points can be adjusted through the data: for example, colors of the connectors, the point markers and so on. Let's look at the dataSet with some parameters set through it:

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

One of the Connector Maps features is the ability to create segments: several connectors are connected as one point, creating segments of the route. Look at the code and sample below.

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

There are several connectors created that consist of a number of segments. To create a multi-segmental connector add a pair of values (representing longitude and latitude) to the data of this connector. Watch the number of values: it should stay even in each point (connector) data.

## Altering Connectors

### Connector settings

There are several settings can be adjusted for the series. 

#### Curvature

As you might have noticed, all connectors in the samples above look like curves of the same curvature. Let's adjust this parameter with the {api:anychart.core.map.series.Connector#curvature}**.curvature()**{api} method. Let's make the connectors series look as straight lines:

```
	// changing the curvature of the series
	series.curvature(0);
```

{sample}Maps\_Connectors\_06{sample}

It's possible to define curvature for each connector separately through the data, like in the sample below:

```
var data = anychart.data.set([    
    {points: [50.8, -3.6, 51.1, -2.8, 50.7, -2.4, 50.8, -1.6], stroke:'red', to: "New Forest National Park", marker: {fill: "#9fa8da"}},
    {points: [50.8, -1.6, 51.5, -0.16], stroke:'green', to: "Stonehenge", curvature: -0.6},
    {points: [51.5,-0.16, 51.7, -1.29], to: "London"},
    {points: [51.7, -1.29, 52.2, 0.27, 53.3, -1.5], to: "Cambridge"},
    {points: [53.3, -1.5, 53.4, -3.02], to: "Peak District National Park"},
    {points: [53.4, -3.02,54.1,-3.29], to: "Liverpool", curvature:-0.2},
    {points: [54.1, -3.29,54.4,-3.18, 54.5,-3.4, 55.2, -1.9], to: "Nunnykirk Caravan Club Site"},
    {points: [55.2, -1.9, 56.4, -3.5], to: "Edinburgh", curvature: 0.6},
    {points: [56.4, -3.5, 57.1, -2.19], stroke:'green', to: "Aberdeen", curvature:1}
    ]);
```

{sample}Maps\_Connectors\_07{sample}

Note that curvature might be negative. Negative value make the segment's curve go in the other direction.

#### Start/end size

Two more features of our map connector series are {api:anychart.core.map.series.Connector#startSize}**.startSize()**{api} and {api:anychart.core.map.series.Connector#endSize}**.endSize()**{api}. These methods make our connector look more like arrows, tapering or expanding the connector curve (or line) to its end or from its start. These settings are also available to be adjusted through the data set. In the next sample we've defined both settings for the series in general.

```
	// changing the startSize and endSize of the connectors
	series.startSize(7);
	series.endSize(0);
```

{sample}Maps\_Connectors\_08{sample}

### Series colors

Now, note that as soon as our connectors have become of some width, we will need to set some value for the {api:anychart.core.map.series.Connector#fill}**.fill()**{api} method of our series in addition to {api:anychart.core.map.series.Connector#stroke}**.stroke()**{api}, if we'd like our connectors to be colored somehow differently from the default. Of course, these colors can be also defined through the dataset. As usual, it's possible to edit colors for hovered and selected states also - for these states use {api:anychart.core.map.series.Connector#hoverFill}**.hoverFill()**{api}, {api:anychart.core.map.series.Connector#hoverstroke}**.hoverStroke()**{api}, {api:anychart.core.map.series.Connector#selectFill}**.selectFill()**{api} and {api:anychart.core.map.series.Connector#selectStroke}**.selectStroke()**{api} methods.

```
	// setting colors for hovered and selected
	series.hoverFill("black");
	series.selectFill("red");
	series.hoverStroke("black");
	series.selectStroke("red");
```

{sample}Maps\_Connectors\_09{sample}

Curvature parameter cannot be different for hovered and selected states, as well as the {api:anychart.core.map.series.Connector#endSize}**.endSize()**{api} and {api:anychart.core.map.series.Connector#startSize}**.startSize()**{api} parameters. They stay the same in all states.

### Markers

Another special parameter of the connectors is their markers' position. To adjust it use {api:anychart.core.ui.MarkersFactory.Marker#position}**.position()**{api} method which accepts string values like "start", "end", "middle", or ratio from 0 to 1, or a percent value. This method manages each marker's position on a connector. It can be defined through the dataSet as well. Let's use both ways of defining our markers' position in the next sample.

```
	// create data set
	var data = anychart.data.set([    
	    {points: [50.8, -3.6, 51.1, -2.8, 50.7, -2.4, 50.8, -1.6], stroke:'red', to: "New Forest National Park", marker: {fill: "#9fa8da"}},
	    {points: [50.8, -1.6, 51.5, -0.16], stroke:'green', to: "Stonehenge"},
	    {points: [51.5,-0.16, 51.7, -1.29], to: "London"},
	    {points: [51.7, -1.29, 52.2, 0.27, 53.3, -1.5], to: "Cambridge"},
	    {points: [53.3, -1.5, 53.4, -3.02], to: "Peak District National Park"},
	    {points: [53.4, -3.02,54.1,-3.29], to: "Liverpool", curvature:-0.2},
	    {points: [54.1, -3.29,54.5,-3.4, 55.2, -1.9], to: "Nunnykirk Caravan Club Site"},
	    {points: [55.2, -1.9, 56.4, -3.5], to: "Edinburgh"},
	    {points: [56.4, -3.5, 57.1, -2.19], stroke:'green', to: "Aberdeen", marker: {position:"end"}}
	]);
	// setting the marker position
	var markers = series.markers();
	markers.position("middle");
```

{sample}Maps\_Connectors\_10{sample}

The anchor of the marker depends on its position and its connector's curvature, though it can be adjusted. Use the {api:anychart.core.ui.MarkersFactory.Marker#anchor}**.anchor()**{api} method to set it. You will need to define a string value, chosing one from the {api:anychart.enums.Anchor}Anchor type list{api}. Look a the next sample. Anchors are set for the markers, which are transformed to look more like arrows using the {api:anychart.core.ui.MarkersFactory.Marker#type}**.type()**{api} method. All default marker types can be found on the {api:anychart.enums.Marker}Marker Type list{api}.

```
	// setting the marker type
	markers.type(anychart.enums.MarkerType.ARROWHEAD);
	markers.size(15);

	// setting the anchor
	markers.anchor("leftCenter");
```

{sample}Maps\_Connectors\_11{sample}

The size of markers were changes as well through the {api:anychart.core.ui.MarkersFactory.Marker#}**.size()**{api} method.

Another way to emphasize the start and/or end points is to create a Marker series. You can find the instructions in the [Marker series tutorial](/Dot_(Point)_Map).

### Labels and Tooltips

Adjusting the position of labels is similar to adjusting it for the markers. Set
 "start", "end", "middle", or ratio from 0 to 1, or a percent value for the {api:anychart.core.ui.LabelsFactory.Label#position}**.position()**{api} method. 

The anchor of the label depends on its position and its connector's curvature, but can be adjusted as well by using the {api:anychart.core.ui.LabelsFactory.Label#anchor}**.anchor()**{api} method.

Let's create a sample with labels held to some point.

```
	тут что-то пошло не так, position работает только через датасет, и то как-то коряво
```

{sample}Maps\_Connectors\_12{sample}

## Maps Usage

Let's create three different maps with connectors to understand the specifics of each map type. Here we will use another series together with connectors. You can any types of series you need with connectors, it's

### Route Map

This Map type is intended to show some route that can be useful for a traveler or in any other case when we need to give the instructions about getting somewhere. 

Let's create a map showing the touristic route through France.

{sample}Maps\_Connectors\_13{sample}

### Flight Map

This Map type can be found almost on all airlines' sites as it is used to show customers:
1) how a plane goes over a planet during each flight;
2) which flights to which direcions the airline provides.

Let's create a sample showing 10 most popular flights from Washington.

{sample}Maps\_Connectors\_14{sample}

### Areas and Landscape

This Map can be used for showing some borders between countries, landscapes on topographic maps, war borders. Let's create a map representing the border separating the United States and Confederate States in the American Civil War.

{sample}Maps\_Connectors\_15{sample}