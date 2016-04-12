#Connector Maps

* [Overview](#overview)
* [Data](#data)
 * [Object notation](#object_notation)
 * [Array notation](#array_notation)
 * [Missing Points](#missing_points)
 * [Settings](#settings)
* [Connectors features](#connectors_features)
 * [Route Map](#route_map)
 * [Flight Map](#flight_map)
 * [Areas and Landscape](#areas_and_landscape)
* [Altering Connectors](#altering_connectors)
 * [Connector settings](#connector_settings)
 * [Series colors](#series_colors)
 * [Labels and Tooltips](#labels_and_tooltips)


## Overview

Connector Maps are those which are being used for representing routes areas and some landscape elements (such as rivers, for example) in a schematical way. They are quite popular in geography, airlines, economics and advertising. Also they suit well for describing places of touristic interest, so they are also rather claimed in touristic companies. Start and end points for connectors in these maps are defined by the latitude and longitude parameters.

Look at the example below. That's how a complicated multi-functional Connector Map might look like.

{sample}Maps\_Connector\_01{sample}

There are three basic ways of using these maps: flight map, route map and area map. In this article we will create maps of all three types.

## Data

As it was mentioned before, we need to set latitude and longitude for the start and end point of each connector. Note that we should set the longitude first and then the latitude for each point, as it is done in all popular GIS-systems. There are two different data notations: we can set the data as objects and as arrays. For example, our dataset might look like the following:

### Object notation

Let's now create a small route map. This route through the UK will connect several places of touristic interest.

```
```

That's how a Connector Map with this dataset will look like:

{sample}Maps\_Connector\_02{sample}

Now let's look how the same data will look in the array notation.

### Array notation

When we represent the data in the array mode, we don't need to mention the names of the default adjusted parameters.

```
```

We can see that nothing has changed in our map appearance:

{sample}Maps\_Connector\_03{sample}


### Missing points

It's always possible that our data might be missing some points due to some reasons. Points are being considered as missing when some of the coordinates are not defined, or if a wrong notation was used for it. If a point is missing, it will not be shown as Connector Maps are not about demonstrating the values but the routes so there can be no gaps in our connectors.