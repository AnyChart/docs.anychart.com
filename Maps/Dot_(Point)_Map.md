{:index 1}
Point (Dot) Maps
===========

* [Overview](#overview)
* [Creating Bubbles](#creating_bubbles)
 * [Data](#data)
  * [Latitude and Longitude](#latitude_and_longitude)
  * [Region ID](#region_id)
* [Visualization](#visualization)
 * [Labels and Tooltips](#labels_and_tooltips)
 * [Series colors](#series_colors)
 * [Markers](#markers)


## Overview

Dot Maps use dots (points, markers) to demonstrate the existence of a subject or a feature. It's a lot like Bubble Maps ([Proportional Symbol Maps](Proportional_Symbol_Map)), but the dots' sizes don't depend on their values, as there's no size setting. Usually the tooltips are formatted to show some describing information for their points - so these maps should be quite useful and popular in guiding, tourism, health service and in other researches. 

Spreading points (or dots) across a Map is rather alike scatter (or marker) series. So, in AnyChart, this series in maps is of Marker type.

Note that all dot density maps must be drawn on an equal area map projection. This is critical - using a map projection which does not preserve the size of areas will distort the perceived density of the dots.

There are two general types of Marker Maps: One-To-One and One-To-Many. One-To-One is a type where a marker stands for an only feature, event or any other subject. One-To-Many means that one marker describes several subjects or values. There is no difference in setting the data, this is just general information that doesn't affect the way of managing the data.

An example of those points is shown below.

{sample}Maps\_Marker\_01{sample}

When you hover a point you can see the information it contains. One series shows the latitude and longtitude values and another one demonstrates the region Ids.


## Creating Markers

To create Dot/Point/Marker type series in Maps we use {api:anychart.charts.Map#marker}**.marker**{api} method.

```
	// create marker series
	var series = map.marker(data);
```
Depending on the purpose of the map, it can contain a number of series. In the sample above you can see a two-series example, where one of the series contains the longtitude and latitude coordinates of the point and each point of the second one shows the corresponding region's Id.


### Data

You can create points on a map by defining longtitude and latitude or by setting the region id. In the second case you'll get a point in the center of the defined region, and if you set long and lat params, you'll define the exact placement for each point.


#### Latitude and Longtitude

Latitude and longtitude are two parameters that define the position of any point on our planet. If you need to show something located in a certain point, it's better to define latitude and longtitude params.

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

#### Region ID

In case when we define the ID of the point, we'll get the region's name shown above the point. It's a good way of setting the data if you need to show something on the map that has no particular place (e.g. a big lake, desert, etc.) or if you need to show something connected to region but not a particular place (e.g. numerical parameters, like population density or some rates).

That's how it looks like in the code:

```
	// create the dataset of points that are defined by the region id
    var dataSet_id = anychart.data.set([
        {"id": "AU.NS", "farms": 240},
        {"id": "AU.NT", "farms": 202},
        {"id": "AU.WA", "farms": 193},
        {"id": "AU.SA", "farms": 196},
        {"id": "AU.VI", "farms": 48},
        {"id": "AU.TS", "farms": 13},
        {"id": "AU.QL", "farms": 136}
    ]);
```


## Visualization

We can edit the appearance of our map as we want. We can change the color of the series, the shape of markers, its behaviour, the tooltips and labels' view and content. That's what we are going to consider in this paragraph.


### Labels and Tooltips

We can change our labels and tooltips behavior by using standard {api:anychart.core.map.series.Marker#labels}**.labels()**{api} and {api:anychart.core.map.series.Marker#tooltip}**.tooltip()**{api} methods. We can format the text and their appearance or disable them using those methods. The tooltips of the series that is defined with latitude and longtitude are already formatted to show no title and no separator. Let's look how it's done and format the labels of another series:

```
	// format the tooltips of the lat_long series
    series_lat_long.tooltip({title: false, separator: false});

    //format the labels of the id-defined series
    series_id.labels().textFormatter(function(e){
      return this.id + ": " + e.getDataValue("farms") + " sheep farms";
    });
```
{sample}Maps\_Marker\_02{sample}

It's possible to change labels and tooltips for the points in another state. To edit the behavior of the hovered points labels we use {api:anychart.core.map.series.Marker#hoverLabels}**.hoverLabels()**{api} and for selected ones we use {api:anychart.core.map.series.Marker#selectLabels}**.selectLabels()**{api}. Let's make our labels to become of black color and of "bold" type when hovered and of red color when selected.

```
    // hovered and selected labels
    series_id.hoverLabels().fontColor("black");
    series_id.selectLabels().fontColor("red");
```
{sample}Maps\_Marker\_03{sample}



### Series colors

We can also edit the series here as in all other maps. To change the series filling and stroking colors we use {api:anychart.core.map.series.Marker#fill}**.fill()**{api} and {api:anychart.core.map.series.Marker#stroke}**.stroke()**{api} methods. Also we can change the markers' size with the {api:anychart.core.map.series.Marker#size}**.size()**{api} method. For hovered state we've got {api:anychart.core.map.series.Marker#hoverFill}**.hoverFill()**{api}, {api:anychart.core.map.series.Marker#hoverStroke}**.hoverStroke()**{api} and {api:anychart.core.map.series.Marker#hoverSize}**.hoverSize()**{api}.

Let's change the marker stroke color to green and the filling color to gold for the first series, and make the markers of the second series bigger in size. 

```
	// change the color of the lat-long series
    series_lat_long.stroke("green");
    series_lat_long.fill("gold");

    // make the markers of the series with id bigger
    series_id.size("10");
    series_id.hoverSize("10");
```
{sample}Maps\_Marker\_04{sample}

### Markers

Also we can change the shape of the markers using the {api:anychart.core.scatter.series.Marker#type}**.type()**{api} method (and {api:anychart.core.scatter.series.Marker#hoverType}**.hoverType()**{api} for hovered state). Here we should set the string value, one from the {api:anychart.enums.MarkerType}**marker type list**{api}. Let's change the marker types for both series below.

```
	// change the markers type
    series_id.type("square");
    series_lat_long.type("cross");

```
{sample}Maps\_Marker\_05{sample}

We can customize our map by creating our own, unique markers. We need to set a function as a value for the {api:anychart.core.scatter.series.Marker#type}**.type()**{api} method:

```
	// sets custom function to display marker
    series_id.type(function(path, x, y, size) {
        var numericSize = +size;
        var point1 = {x: x + 1.3 * numericSize, y: y - 0.4 * numericSize};
        var point2 = {x: x - 0.4 * numericSize, y: y - 0.5 * numericSize};
        path.moveTo(point1.x, point1.y)
                .arcToByEndPoint(point2.x, point2.y, numericSize, numericSize, true, true)
                .arcToByEndPoint(point1.x, point1.y, numericSize / 3, numericSize / 3, false, false)
                .moveTo(point1.x, point1.y)
                .close();
        return path;
    }); 

    series_id.hoverType(function(path, x, y, size) {
        var numericSize = +size;
        var point1 = {x: x + 1.3 * numericSize, y: y - 0.4 * numericSize};
        var point2 = {x: x - 0.4 * numericSize, y: y - 0.5 * numericSize};
        path.moveTo(point1.x, point1.y)
                .arcToByEndPoint(point2.x, point2.y, numericSize, numericSize, true, true)
                .arcToByEndPoint(point1.x, point1.y, numericSize / 3, numericSize / 3, false, false)
                .moveTo(point1.x, point1.y)
                .close();
        return path;
    });
```

Another way to create unique markers is to set an image (or an array of images) as an argument for {api:anychart.core.map.series.Marker#fill}**.fill()**{api} and {api:anychart.core.map.series.Marker#hoverFill}**.hoverFill()**{api} methods. The following sample describes this in details:

```
    // set the link for the directory with images
    var image_link = 'http://static.anychart.com/images/parks_of_the_world/';
    

    // set the images for dots of the series defined by latitude and longtitude in normal state
    series_lat_long.fill(function () {
    if (this.index >= 0) {
        return {
            src: image_link + (this.index+1) + ".jpg",
            mode: 'fitMax'
        }
    }
    });

    // set the images for dots of the series defined by latitude and longtitude in hovered state
    series_lat_long.hoverFill(function () {
    if (this.index >= 0) {
        return {
          src: image_link + (this.index+1) + ".jpg",
            mode: 'fitMax',
            opacity: 0.7
        }
    }
    });

```
{sample}Maps\_Marker\_06{sample}