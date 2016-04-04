{:index 6}
Dot (Point) Maps
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
        {lat: -25.758751446573896, long: 122.18216472408207, name: "ACME Corp. branch No. 1", value: 321},
        {lat: -18.506379573972872, long: 135.24294642224174, name: "ACME Corp. branch No. 2", value: 293},
        {lat: -23.12833157353524, long: 148.62674513057308, name: "ACME Corp. branch No. 3", value: 312},
        {lat: -17.897798647183976, long: 145.09867715290332, name: "ACME Corp. branch No. 4", value: 198},
        {lat: -33.2809649396655, long: 135.589751474883, name: "ACME Corp. branch No. 5", value: 309},
        {lat: -31.216760559507435, long: 116.44220156961407, name: "ACME Corp. branch No. 6", value: 215},
        {lat: -32.26380339970011, long: 151.44030365260178, name: "ACME Corp. branch No. 7", value: 219},
        {lat: -25.63226536838997, long: 152.37860865188998, name: "ACME Corp. branch No. 8", value: 179}
    ]);
```

Now look at the example below. Here we can see a Dot Map where each point contains not only the coordinates but also some extra information about the point, like the number of the ACME Corp. branch and the yearly profit this branch makes.

{sample}Maps\_Marker\_02{sample}

#### Region ID

In case when we define the ID of the point, we'll get the region's name shown above the point. It's a good way of setting the data if you need to show something on the map that has no particular place (e.g. a big lake, desert, etc.) or if you need to show something connected to a region but not a particular place (e.g. numerical parameters, like population density or some rates).

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

In this sample we show how many sheep farms are in this or that region of Australia. 

{sample}Maps\_Marker\_03{sample}

It's also possible to create several datasets with different organization principles, though it's not recommended. Basically, if you need to show some information about a region at the same time with showing something with a determined place of existence, it's better to create a Choropleth series on the map. Let's put both previous datasets together in one sample just to see how it would look:


{sample}Maps\_Marker\_04{sample}

The combination of both series types is not typical and it's being used rarely.

You can notice that we've adjusted labels and tooltips to make the map easier to understand. In the next paragraph you can find how to edit them when necessary.


## Visualization

We can edit the appearance of our map as we want. We can change the color of the series, the shape of markers, its behaviour, the tooltips and labels' view and content. That's what we are going to consider in this paragraph.


### Labels and Tooltips

We can change our labels and tooltips behavior by using standard {api:anychart.core.map.series.Marker#labels}**.labels()**{api} and {api:anychart.core.map.series.Marker#tooltip}**.tooltip()**{api} methods. We can format the text and their appearance or disable them using those methods. Let's adjust tooltips to show no title and no separator but the yearly profit value. Look how it's done and format the labels of another series:

```
    // format the tooltips
    series_lat_long.tooltip({title: false, separator: false});
    series_lat_long.tooltip().textFormatter(function(e){
       return "Yearly profit: $" + e.getDataValue("value") + "m";
    });

    // format the labels
    series_lat_long.labels().fontSize(10)
    series_lat_long.labels().fontColor("#000");
```
{sample}Maps\_Marker\_05{sample}

It's possible to change labels and tooltips for the points in another state. To edit the behavior of the hovered points labels we use {api:anychart.core.map.series.Marker#hoverLabels}**.hoverLabels()**{api} and for selected ones we use {api:anychart.core.map.series.Marker#selectLabels}**.selectLabels()**{api}. Let's make our labels to become of dark red color and of bigger size when hovered and selected.

```
    // hovered and selected labels
    series_lat_long.hoverLabels().fontSize(12);
    series_lat_long.hoverLabels().fontColor("#660000");
    series_lat_long.selectLabels().fontSize(12);
    series_lat_long.selectLabels().fontColor("#660000");
```
{sample}Maps\_Marker\_06{sample}



### Series colors

We can also edit the series here as in all other maps. To change the series filling and stroking colors we use {api:anychart.core.map.series.Marker#fill}**.fill()**{api} and {api:anychart.core.map.series.Marker#stroke}**.stroke()**{api} methods. Also we can change the markers' size with the {api:anychart.core.map.series.Marker#size}**.size()**{api} method. For hovered state we've got {api:anychart.core.map.series.Marker#hoverFill}**.hoverFill()**{api}, {api:anychart.core.map.series.Marker#hoverStroke}**.hoverStroke()**{api} and {api:anychart.core.map.series.Marker#hoverSize}**.hoverSize()**{api}.

Let's add another series demonstrating the CITRUS company profit rates and change the ACME series's marker stroke color to green and the filling color to gold, and make the markers of the second series bigger in size. 

```
	// change the color of the ACME series
    series_CITRUS.stroke("green");
    series_CITRUS.fill("gold");

    // make the markers of the CITRUS series 
    series_CITRUS.size(8);
    series_CITRUS.hoverSize(10);
```
{sample}Maps\_Marker\_07{sample}

### Markers

Also we can change the shape of the markers using the {api:anychart.core.scatter.series.Marker#type}**.type()**{api} method (and {api:anychart.core.scatter.series.Marker#hoverType}**.hoverType()**{api} for hovered state). Here we should set the string value, one from the {api:anychart.enums.MarkerType}**marker type list**{api}. Let's change the marker types for both series below.

```
	// change the markers type
    series_ACME.type("square");
    series_CITRUS.type("cross");

```
{sample}Maps\_Marker\_08{sample}

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
{sample}Maps\_Marker\_09{sample}