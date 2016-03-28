{:index 1}
#Point (Dot) Maps
===========

* [Overview](#overview)
* [Creating Bubbles](#creating_bubbles)
 * [Data](#data)
  * [Latitude and Longitude](#latitude_and_longitude)
  * [Region ID](#region_id)
* [Visualization](#visualization)
 * [Series colors](#series_colors)
 * [Labels and Tooltips](#labels_and_tooltips)


## Overview

As the name implies, symbols (circles, bubbles), representing the values, are drawn of the proportional size to the size of the value being represented. The size of the bubbles (proportional symbols in maps) is not dependent on the size of the region associated with the variable. For example, if we show the value of unemployment on a proportional symbol map of the UK, Dundee would have bigger visual importance then Highland if their unemployment values were so (e.g. 3.5% in Dundee, 1% in Highland).

An example of proportional circles is shown below.

Dot Maps are those which use dots (points, markers) to demonstrate the existence of a subject or a feature. It's a lot like Bubble Maps ([Proportional Symbol Maps](Proportional_Symbol_Map)), but the dots' sizes don't depend on their values, as there's no size setting. Usually the tooltips are formatted to show some describing information for their points - so these maps should be quite useful and popular in guiding, tourism, health service and in other researches. 

Spreading points (or dots) across a Map is rather alike scatter (or marker) series. So, in AnyChart, this series in maps is of Marker type.

There are two general types of Marker Maps: One-To-One and One-To-Many. One-To-One is a type where a marker stands for an only feature, event or any other subject. One-To-Many means that one marker describes several subjects. The data for the map types should be defined properly.

An example of those points is shown below.

{sample}Maps\_Dot\_Point\_01{sample}

When you hover a point you can see the information it contains - latitude and longtitude values.


## Creating Markers

To create this Map type series we use {api:}**.marker**{api} method.

```
	// create marker series
	var series = map.marker(data);
```
Depending on the purpose of the map, it can contain more than one series. In the sample above you can see two serie


## Data

You can create points on a map by defining longtitude and latitude or by setting the region id. In the second case you'll get a point in the center of the defined region, and if you set long and lat params, you'll define the exact placement for each point.


### Latitude and Longtitude

Latitude and longtitude are two parameters that defines the position of any place on the Earth. If you need to show something located in a certain point, it's better to define lat and long params.

That's how it looks like in the code:

```
	// create the dataset of points that are defined by latitude and longtitude values
	var dataSet_lat_long = anychart.data.set([
        {lat: -25.758751446573896, long: 122.18216472408207},
        {lat: -18.506379573972872, long: 135.24294642224174},
        {lat: -23.12833157353524, long: 148.62674513057308},
        {lat: -17.897798647183976, long: 145.09867715290332},
        {lat: -33.2809649396655, long: 135.589751474883},
        {lat: -31.216760559507435, long: 116.44220156961407},
        {lat: -32.26380339970011, long: 151.44030365260178},
        {lat: -25.63226536838997, long: 152.37860865188998}
    ]);
```

### Region ID

In the case when we define the ID of the point, we'll get the region's name shown above the point. It's a good way of setting the data if you need to show something on the map that has no particular place (e.g. a big lake, desert, etc.) or if you need to show something connected to region but not a particular place (e.g. numerical parameters)

That's how it looks like in the code:

```
	// create the dataset of points that are defined by the region id
    var dataSet_id = anychart.data.set([
        {"id": "AU.NS"},
        {"id": "AU.NT"},
        {"id": "AU.WA"},
        {"id": "AU.SA"},
        {"id": "AU.VI"},
        {"id": "AU.TS"},
        {"id": "AU.QL"}
    ]);
```


### Visualization

We can edit the appearance of our map as we want. We can change the color of the series, the shape of markers, its behaviour, the tooltips and labels' view and content. That's what we are going to consider in this paragraph.

 * [Series colors](#series_colors)
 * [Labels and Tooltips](#labels_and_tooltips)