{:index 8}
# Dot (Point) Maps

## Overview

Dot Maps use dots (points, markers) to demonstrate the existence of a subject or a feature. It's a lot like Bubble Maps ([Proportional Symbol Maps](Proportional_Symbol_Map)), but the dots' sizes don't depend on their values, as there's no size setting. Usually the tooltips are formatted to show some information about points - so these maps are very useful and popular in census, tourism, health service and any other researches.

Spreading points (or dots) across a Map is rather alike scatter (or marker) series. So, in AnyChart, this series in maps is of [Marker type](../Basic_Charts/Marker_Chart).

Note that when you use this type to draw density maps they must be drawn on an equal area map projection. This is critical - using a map projection which does not preserve the size of areas will distort the perceived density of the dots.

There are two general types of Marker Maps: One-To-One and One-To-Many. One-To-One is a type where a marker stands for an only feature, event or any other subject. One-To-Many means that one marker describes several subjects or values. There is no difference in setting the data, this is just general information that doesn't affect the way of managing the data.

Here is a basic sample of Dot map:

{sample}Maps\_Marker\_01{sample}

When you hover a point you can see the information it contains.

## Creating Markers

To create Dot/Point/Marker type series in Maps we use {api:anychart.charts.Map#marker}marker{api} method.

```
// create marker series
var series = map.marker(data);
```
Depending on the purpose of the map, it can contain a number of series. In the sample above you can see an example, where the series contains the longitude and latitude coordinates of the point. It's easy to create several series more if necessary. It'd be better if your series' would be of one mapping type.

### Data

You can create points on a map by defining longitude and latitude or by setting the region id. In the second case you'll get a point in the center of the defined region, and if you set long and lat parameters it means that you define the exact placement for each point.

#### Latitude and Longitude

Latitude and longitude are two parameters that define the position of any point on our planet. If you need to show something located in a certain point, it's better to define latitude and longitude parameters.

That's how it looks like in the code:

```
// create the dataset of points that are defined by latitude and longitude values
var data = [
    {lat: -25.75, long: 122.18, name: "ACME Corp. branch #1", value: 321},
    {lat: -18.50, long: 135.24, name: "ACME Corp. branch #2", value: 293},
    {lat: -23.12, long: 148.62, name: "ACME Corp. branch #3", value: 312},
    {lat: -17.89, long: 145.09, name: "ACME Corp. branch #4", value: 198},
    {lat: -33.28, long: 135.58, name: "ACME Corp. branch #5", value: 309},
    {lat: -31.21, long: 116.44, name: "ACME Corp. branch #6", value: 215},
    {lat: -32.26, long: 151.44, name: "ACME Corp. branch #7", value: 219},
    {lat: -25.63, long: 152.37, name: "ACME Corp. branch #8", value: 179}
];
```

Now look at the example below. Here we can see a Dot Map where each point contains not only the coordinates but also some extra information about the point, like the number of the ACME Corp. branch and the yearly profit this branch makes.

{sample}Maps\_Marker\_02{sample}

Note: this sample uses third party proj4.js library, to learn how, why and figure out if you need it please see [Map Projections](Map_Projections) article.

#### Region ID

In case when we define the ID of the point, we'll get the region's name shown above the point. It's a good way of setting the data if you need to show something on the map that has no particular place (e.g. a big lake, desert, etc.) or if you need to show something connected to a region but not a particular place (e.g. numerical parameters, like population density or some rates).

That's how it looks like in the code:

```
// create the dataset of points that are defined by the region id
var data = [
    {id: "AU.NS", farms: 240},
    {id: "AU.NT", farms: 202},
    {id: "AU.WA", farms: 193},
    {id: "AU.SA", farms: 196},
    {id: "AU.VI", farms: 48},
    {id: "AU.TS", farms: 13},
    {id: "AU.QL", farms: 136}
];
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

We can change our labels and tooltips behavior by using standard {api:anychart.core.map.series.Marker#labels}labels(){api} and {api:anychart.core.map.series.Marker#tooltip}tooltip(){api} methods. We can format the text and their appearance or disable them using those methods. Let's adjust tooltips to show no title and no separator but the yearly profit value. Look how it's done and format the labels also:

```
// format the tooltips
series_acme.tooltip({title: false, separator: false});
series_acme.tooltip().format("Yearly profit: ${%value}");

// format the labels
series_acme.labels().fontSize(10)
series_acme.labels().fontColor("#000");
series_acme.labels().fontFamily("Georgia");
```

{sample}Maps\_Marker\_05{sample}

It's possible to change labels and tooltips for the points in another state. To edit the behavior of the hovered points labels we use {api:anychart.core.map.series.Marker#hoverLabels}hoverLabels(){api} and for selected ones we use {api:anychart.core.map.series.Marker#selectLabels}selectLabels(){api}. Let's make our labels to become of dark red color and of bigger size when hovered and selected.

```
// hovered and selected labels
series_acme.hovered().labels().fontSize(12);
series_acme.hovered().labels().fontColor("#660000");
series_acme.selected().labels().fontSize(12);
series_acme.selected().labels().fontColor("#660000");
```

{sample}Maps\_Marker\_06{sample}

You can find more information about formatting labels and tooltips in the [Labels](../Common_Settings/Labels), [Tooltips](../Common_Settings/Tooltip) and [Text Formatters](../Common_Settings/Text_Formatters) tutorials.

### Series colors

The colors of series can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.map.series.Marker#normal}normal(){api}, {api:anychart.core.map.series.Marker#hovered}hovered(){api}, and {api:anychart.core.map.series.Marker#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#fill}stroke(){api} to set the stroke

In the sample below, there is a Dot Map with two series. The colors of one of them are configured:

```
// change the color of the CITRUS series
series_citrus.normal().fill("#ef6c00", 0.3);
series_citrus.hovered().fill("#ef6c00", 0.1);
series_citrus.selected().fill("#ef6c00", 0.5);
series_citrus.normal().stroke("#ef6c00");
series_citrus.hovered().stroke("#ef6c00", 2);
series_citrus.selected().stroke("#ef6c00", 2);
```

{sample}Maps\_Marker\_07{sample}

### Markers

The type and size of markers can be configured in three states: normal, hover, and selected. Use the {api:anychart.core.map.series.Marker#normal}normal(){api}, {api:anychart.core.map.series.Marker#hovered}hovered(){api}, and {api:anychart.core.map.series.Marker#selected}selected(){api} methods and combine them with {api:anychart.core.scatter.series.Marker#type}type(){api} and {api:anychart.core.scatter.series.Marker#size}size(){api}:

```
// set the size of CITRUS markers
series_citrus.normal().size(8);
series_citrus.hovered().size(10);
series_citrus.selected().size(10);

// set the size of ACME markers 
series_acme.normal().size(4);
series_acme.hovered().size(5);
series_acme.selected().size(5);

// set the type of CITRUS markers
series_citrus.normal().type("star4");
series_citrus.hovered().type("star5");
series_citrus.selected().type("star6");
```

{sample}Maps\_Marker\_08{sample}

We can customize our map by creating our own, unique markers. We need to set a function as a value for the {api:anychart.core.scatter.series.Marker#type}type(){api} method:

```
// creating a custom marker for the CITRUS company series using a function
series_citrus.type(customMarkerType);
series_citrus.hoverType(customMarkerType);

function customMarkerType(path, x, y, size) {
var numericSize = +size;
var point1 = {x: x + 1.3 * numericSize, y: y - 0.4 * numericSize};
var point2 = {x: x - 0.4 * numericSize, y: y - 0.5 * numericSize};
path.moveTo(point1.x, point1.y)
    .arcToByEndPoint(point2.x, point2.y, numericSize, numericSize, true, true)
    .arcToByEndPoint(point1.x, point1.y, numericSize / 3, numericSize / 3, false, false)
    .moveTo(point1.x, point1.y)
    .close();
return path;
}
```

Note that we've created a special function to draw a marker in order not to create a marker several times.

Another way to create unique markers is to set an image (or an array of images) as an argument for the {api:anychart.core.StateSettings#fill}fill(){api} method. The following sample describes this in details. Note that in this example we have also used external function for the same purpose as before.

```
// set the images for the ACME series
series_acme.normal().fill(customImageMarker(1));
series_acme.hovered().fill(customImageMarker(0.5));
series_acme.selected().fill(customImageMarker(1));

function customImageMarker(op){
var image_link = 'https://static.anychart.com/images/acme.jpg';
  return {
      src: image_link,
        mode: 'stretch',
        opacity: op
    }  
}
```

{sample}Maps\_Marker\_09{sample}
