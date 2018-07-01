{:index 8}
# Connector Maps

## Overview

Connector Maps are those used to represent routes, areas and some landscape elements (such as rivers) in a schematic way. They are quite popular in geography, airlines, economics and advertising. Also they suit well for describing places of touristic interest, so they are also rather claimed in touristic companies. Start and end points for connectors in these maps are defined by the latitude and longitude parameters.

## Data

It's necessary to set latitude and longitude for the start and end point of each connector. Note that latitude of the point should be defined first and then the longitude for each point. There are two different data notations: the data can be arranged as objects or as arrays.

### Object notation

Let's now create a small route map. This dataSet represents the route through the UK that connects several places of touristic interest.

```
// create data set
var data = [    
    {points: [50.8, -3.6, 50.8, -1.6]},
    {points: [50.8, -1.6, 51.5, -0.16], to: "New Forest National Park"},
    {points: [51.5,-0.16, 51.7, -1.29]},
    {points: [51.7, -1.29, 52.2, 0.27]},
    {points: [52.2, 0.27, 53.3, -1.5], to: "Cambridge"},
    {points: [53.3, -1.5, 54.5,-3.4], to: "Edinburgh"},
    {points: [54.5, -3.4, 57.1, -2.19], to: "Aberdeen"}
];
```

First two values are the longitude and latitude of the start point and the second pair of values are responsible for the end point coordinates.

That's how a Connector Map with this dataset will look like:

{sample}Maps\_Connectors\_01{sample}

Now let's look how the same data will look in the array notation.

### Array notation

When the data is being represented in the array mode, it's not necessary to mention the names of the default adjusted parameters.

```
var data = [    
    [[50.8, -3.6, 50.8, -1.6]],
    [[50.8, -1.6, 51.5, -0.16]],
    [[51.5,-0.16, 51.7, -1.29]],
    [[51.7, -1.29, 52.2, 0.27]],
    [[52.2, 0.27, 53.3, -1.5]],
    [[53.3, -1.5, 54.5,-3.4]],
    [[54.5, -3.4, 57.1, -2.19]]
];
```

Nothing has changed in our map appearance:

{sample}Maps\_Connectors\_02{sample}

### Settings

There are some parameters of our series and points can be adjusted through the data: for example, colors of the connectors, the point markers and so on. Let's look at the dataSet with some parameters set through it:

```
var data = [    
    {points: [50.8, -3.6, 50.8, -1.6]},
    {points: [50.8, -1.6, 51.5, -0.16], stroke:'red', to: "New Forest National Park", marker: {fill: "#9fa8da"}},
    {points: [51.5,-0.16, 51.7, -1.29]},
    {points: [51.7, -1.29, 52.2, 0.27]},
    {points: [52.2, 0.27, 53.3, -1.5], to: "Cambridge"},
    {points: [53.3, -1.5, 54.5,-3.4], to: "Edinburgh"},
    {points: [54.5, -3.4, 57.1, -2.19], stroke:'green', to: "Aberdeen"}
];
```

That's how the appearance of our map has changed after applying some settings through the dataSet:

{sample}Maps\_Connectors\_03{sample}

### Segments

One of the Connector Maps features is the ability to create segments: several connectors are connected as one point, creating segments of the route. Look at the code and sample below.

```
var data = [  
    {points: [50.8, -3.6, 50.8, -1.6, 51.5, -0.16], stroke:'red', to: "New Forest National Park", marker: {fill: "#9fa8da"}},
    {points: [51.5,-0.16, 51.7, -1.29, 52.2, 0.27, 53.3, -1.5], to: "Cambridge"},
    {points: [53.3, -1.5, 54.5,-3.4], to: "Edinburgh"},
    {points: [54.5, -3.4, 57.1, -2.19], stroke:'green', to: "Aberdeen"}
];
```

{sample}Maps\_Connectors\_04{sample}

There are several connectors created that consist of a number of segments. To create a multi-segmental connector add a pair of values (representing longitude and latitude) to the data of this connector. Watch the number of values: it should stay even in each point (connector) data.

Note: this sample uses third party proj4.js library, to learn how, why and figure out if you need it please see [Map Projections](Map_Projections) article.

## Altering Connectors

### Connector settings

There are several settings can be adjusted for the series. 

#### Curvature

As you might have noticed, all connectors in the samples above look like curves of the same curvature. Let's adjust this parameter with the {api:anychart.core.map.series.Connector#curvature}curvature(){api} method. Let's make the connectors series look as straight lines:

```
// changing the curvature of the series
series.curvature(0);
```

{sample}Maps\_Connectors\_05{sample}

It's possible to define curvature for each connector separately through the data, like in the sample below:

```
var data = [    
	{points: [50.8, -3.6, 51.1, -2.8, 50.7, -2.4, 50.8, -1.6], stroke:'red', to: "New Forest National Park", marker: {fill: "#9fa8da"}},
	{points: [50.8, -1.6, 51.5, -0.16], stroke:'green', to: "Stonehenge", curvature: -0.6},
	{points: [51.5,-0.16, 51.7, -1.29], to: "London"},
	{points: [51.7, -1.29, 52.2, 0.27, 53.3, -1.5], to: "Cambridge"},
	{points: [53.3, -1.5, 53.4, -3.02], to: "Peak District National Park"},
	{points: [53.4, -3.02,54.1,-3.29], to: "Liverpool", curvature:-0.2},
	{points: [54.1, -3.29,54.4,-3.18, 54.5,-3.4, 55.2, -1.9], to: "Nunnykirk Caravan Club Site"},
	{points: [55.2, -1.9, 56.4, -3.5], to: "Edinburgh", curvature: 0.6},
	{points: [56.4, -3.5, 57.1, -2.19], stroke:'green', to: "Aberdeen", curvature:1}
];
```

{sample}Maps\_Connectors\_06{sample}

Note that curvature may be negative. Negative value make the segment's curve go in the other direction.

#### Start/end size

Two more features of our map connector series are {api:anychart.core.map.series.Connector#startSize}startSize(){api} and {api:anychart.core.map.series.Connector#endSize}endSize(){api}. These methods can make a connector look more like an arrow, tapering or expanding its curve. These settings are also available to be adjusted through the data set. In the next sample we've defined both settings for the series in general.

```
// changing the startSize and endSize of the connectors
series.startSize(10);
series.endSize(0);
```

{sample}Maps\_Connectors\_07{sample}

### Series colors

The colors of connectors can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.map.series.Connector#normal}normal(){api}, {api:anychart.core.map.series.Connector#hovered}hovered(){api}, and {api:anychart.core.map.series.Connector#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

**Note 1:** Only the stroke is visible by default. A fill can be added when the start or the end size is greater than zero. 

**Note 2:** The {api:anychart.core.map.series.Connector#curvature}curvature(){api} parameter cannot be different in the hover and selected states, as well as the {api:anychart.core.map.series.Connector#endSize}endSize(){api} and {api:anychart.core.map.series.Connector#startSize}startSize(){api} parameters. They stay the same in all states.

In the sample below, there is a Connector Map with colors configured:

```
// set colors
series.normal().fill("#ef6c00", 0.3);
series.hovered().fill("#ef6c00", 0.1);
series.selected().fill("#ef6c00", 0.5);
series.normal().stroke("#ef6c00");
series.hovered().stroke("#ef6c00", 2);
series.selected().stroke("#ef6c00", 2);
```

{sample}Maps\_Connectors\_08{sample}

### Markers

To change the position of a marker on a connector use {api:anychart.core.ui.MarkersFactory.Marker#position}position(){api} method. It accepts string values like "start", "end", "middle", or ratio from 0 to 1, or a percent value as a parameter. This method manages each marker's position on a connector and can be defined through the dataSet as well.

The anchor of the marker depends on its position and its connector's curvature, though it can be adjusted. Use the {api:anychart.core.ui.MarkersFactory.Marker#anchor}anchor(){api} method to set it. You will need to define a string value, chosing one from the {api:anychart.enums.Anchor}Anchor type list{api} Look at the next sample. Anchors are set for the markers, which are transformed to look more like arrows using the {api:anychart.core.ui.MarkersFactory.Marker#type}type(){api} method. All default marker types can be found on the {api:anychart.enums.MarkerType}Marker Type list{api}.

```
// create data set
var data = [    
    {points: [51.5, -3.2, 57.1, -2.19], from: "Cardiff", to: "Aberdeen", time: "2h 20m"},
    {points: [55.9, -3.2, 51.45, 0], from: "Edinburgh", to: "London", time: "1h 15m"},
    {points: [54.7, -5.9, 57.6,-3.9], from: "Dublin", to: "Iverness", time: "1h 15m"}
];
// setting the marker position
var markers = series.markers();
markers.position("end");

// setting the marker type
markers.type("arrowhead");
markers.size(15);

// setting the anchor
markers.anchor("left-center");
```

{sample}Maps\_Connectors\_09{sample}

The size of markers were changed as well using the {api:anychart.core.ui.MarkersFactory.Marker#size}size(){api} method.

Another way to emphasize the start and/or end points is to create a Marker series. You can find the instructions in the [Map Marker series tutorial](Dot_\(Point\)_Map).

### Labels and Tooltips

Labels and tooltips in Connector Maps are to be adjusted with the {api:anychart.core.map.series.Connector#labels}labels(){api} and {api:anychart.core.map.series.Connector#tooltip}tooltip(){api} methods.

Adjusting the position of labels is similar to adjusting it for the markers. Set "start", "end", "middle", or ratio from 0 to 1, or a percent value for the {api:anychart.core.ui.LabelsFactory.Label#position}position(){api} method. 

The anchor of the label depends on its position and its connector's curvature, but can be adjusted as well by using the {api:anychart.core.ui.LabelsFactory.Label#anchor}anchor(){api} method.

To change the content of labels use {api:anychart.core.ui.LabelsFactory#format}format(){api} method. To know more about labels and methods of adjusting then look up the [Labels tutorial](../Common_Settings/Labels).

Tooltips have similar methods of adjusting. Use {api:anychart.core.ui.Tooltip#format}format(){api} to change the content of the tooltip body and {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} to change the content of the tooltip title content. Its position and anchor are being set using the {api:anychart.core.ui.LabelsFactory.Label#position}position(){api} and {api:anychart.core.ui.LabelsFactory.Label#anchor}anchor(){api} methods as well. There are a lot of different tooltip features that can be adjusted. Find more about tooltips in the [Tooltip adjusting tutorial](../Common_Settings/Tooltip).

All label settings can be also defined through the dataSet as well.

```
// create data set
var data = [    
	{points: [51.5, -3.2, 57.1, -2.19], from: "Cardiff", to: "Aberdeen", time: "2h 20m"},
	{points: [55.9, -3.2, 51.45, 0], from: "Edinburgh", to: "London", time: "1h 15m", label:{anchor:"leftTop"}},
	{points: [54.7, -5.9, 57.6,-3.9], from: "Dublin", to: "Iverness", time: "2h 35m"}
];

// set the labels
var labels = series.labels();
labels.enabled(true);
labels.position("end");
labels.anchor("leftBottom");
labels.format("To {%to}");

// tooltip adjusting
series.tooltip().format("A flight from {%from} to {%to} takes at least {%time}");
```

{sample}Maps\_Connectors\_10{sample}

## Maps Usage

Let's create three different maps with connectors to understand the specifics of each map type. Here we will use another series together with connectors. You can combine any types of series you need with connectors.

### Route Map

This Map type is intended to show some route that can be useful for a traveler or in any other case when we need to give the instructions about getting somewhere. 

Let's create a map showing the touristic route through France.

{sample}Maps\_Connectors\_11{sample}

### Flight Map

This Map type can be found almost on all airlines' sites as it is used to show customers:
1) how a plane goes over a planet during each flight;
2) which flights to which direcions the airline provides.

Let's create a sample showing 7 most popular flights through Australia.

{sample}Maps\_Connectors\_12{sample}

### Areas and Landscape

This Map can be used for showing some borders between countries, landscapes on topographic maps, war borders. Let's create a map representing the border separating the United States and Confederate States in the American Civil War.

{sample}Maps\_Connectors\_13{sample}