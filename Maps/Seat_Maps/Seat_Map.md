{:index 0}
Seat Maps
===========

* [Overview](#overview)
* [Preparing SVG Image](#preparing_svg_image)
* [SVG Data](#svg_data)
 * [AJAX](#ajax)
 * [As String](#as_string)
* [Map Data](#map_data)
* [Coloring](#coloring)
* [Unbound Regions](#unbound_regions)
* [Labels and Tooltips](#labels_and_tooltips)
* [Gallery Samples](#gallery_samples)


## Overview

Seat Maps are diagrams of the seat layout inside a building, passenger aircraft or else. They are often published by airlines for informational purposes, and they are of use to passengers for selection of their seat at booking or check-in. AnyMap technology allows to create any kind of seat maps, schemes or interactive layouts.


## Preparing SVG Image

Creating seat maps is made possible by AnyMap ability to load specially formatted SVG Images and to use them as the source for maps. How an existing SVG image should be loaded and formatted is described in [Custom SVG Maps](Custom_SVG_Maps) article.

If you need to create your own SVG picture in a graphic editor, look through the [Preparing SVG Image](Preparing_SVG_Image) article.


## SVG Data

When your SVG image is ready, you should upload it to the sample for the further work. There are two ways how to get the access to the file: request it through the AJAX or put all the SVG code in a string.

### AJAX

At first, we need to enable jQuery to connect with AJAX. Put a script with a link into the ```<head>``` section of the sample code.

```
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
```

To get the data of the SVG file we need to load the document using AJAX:

```
$.ajax({
    type: "GET",
    url: "http://static.anychart.com/images/docs/house.svg",
```

{sample}Maps\_Seat\_01{sample}

This option is highly recommended to use because of its flexibility. It doesn't matter for AJAX how much time is it neccessary to upload the file or how big this file is. 


### As String

Another way to upload the SVG image is to put its code directly in the file as a string object. This way may suit you if your SVG code is not too long; in case with large SVG document it's better to define it the same as in the previous sample.

```
svgString = "<svg xmlns='http://www.w3.org/2000/svg'>" +
            "<g data-ac-wrapper-id='3'>" +
            "<circle id='1' cx='50' cy='50' r='20'></circle>" +
            "<circle id='2' cx='150' cy='40' r='30'></circle>" +
            "<circle id='3' cx='100' cy='100' r='10' width='200' height='100' fill='#aed581' stroke='black'></circle>" +
            "</g></svg>";
```

{sample}Maps\_Seat\_02{sample}

## Map Data

Besides the SVG image, we need to set the data for our Map. This data points' IDs should correspond the groups' IDs in the SVG file.

```
success: function(svgData){
// data set
chart = anychart.seatMap([
	{id: "Hall", value: "720"},
	{id: "Room2", value: "165"},
	{id: "WC", value: "49"},
	{id: "Room1", value: "143"},
	{id: "Kitchen", value: "208"}
]);

// set svg data
chart.geoData(svgData);
```

{sample}Maps\_Seat\_01{sample}


## Coloring

The easiest way to change the colors of the Seat Maps elements is to use the data set. Just add the necessary fields to the objects that represent points:

```
chart = anychart.seatMap([
    {id: "Hall", value: "720"},
    {id: "Room2", value: "165"},
    {id: "WC", value: "49", hoverFill: "green 0.1", hoverStroke: "3 green"},
    {id: "Room1", value: "143", hoverFill: "blue 0.1", hoverStroke: "3 navy"},
    {id: "Kitchen", value: "208"}
]);
```

{sample}Maps\_Seat\_03{sample}

Colors can be also defined through the SVG code and through several other ways. Look through the [Advanced Coloring](Advanced_Coloring) article for this information.


## Unbound Regions

Use the {api:anychart.charts.Map#unboundRegions}unboundRegion(){api} method to set the view of the regions that have no value defined in the map data. Let's remove one of the points from the map data set:

```
// data set
chart = anychart.seatMap([
    {id: "Hall", value: "720"},
    {id: "Room2", value: "165"},
    {id: "WC", value: "49"},
    {id: "Room1", value: "143"},
]);
```

There are two modes of highlighting those regions (points, areas): "as-is" and "hide". In the first case the unbound region is being colored according to the settings in the SVG image, with no reaction on hovering or selecting:

```
// load svg file with original color scheme used for points without values
chart.unboundRegions("as-is");
```

{sample}Maps\_Seat\_04{sample}

When you set "hide" as argument of the {api:anychart.charts.Map#unboundRegions}unboundRegion(){api} method, regions with no values are not being shown at all. You can see that in the sample below our kitchen has simply disappeared.

```
// load svg file without elements with no values
chart.unboundRegions("hide");
```

{sample}Maps\_Seat\_05{sample}


### Labels and Tooltips

Let's transform our labels and tooltips. We'll put additional information about sizes and square feet of the rooms into the data set and use standard {api:anychart.charts.Map#label}label(){api} and {api:anychart.charts.Map#tooltip}tooltip(){api} methods to set them.

```
// data set
    chart = anychart.seatMap([
    {id: "Hall", value: "720", info: "30\' 0\" x 24\'0\"" , sq: "720 sq. ft."},
    {id: "Room2", value: "165", info: "15\' 0\" x 11\'0\"" , sq: "165 sq. ft."},
    {id: "WC", value: "49", info: "7\' 0\" x 7\'0\"" , sq: "49 sq. ft."},
    {id: "Room1", value: "143", info: "11\' 0\" x 13\'0\"" , sq: "143 sq. ft."},
    {id: "Kitchen", value: "208', info: "13\' 0\" x 16\'0\"" , sq: "208 sq. ft."}
]);

// enable labels and adjust them
labels.enabled(false);
series.labels({fontSize: 10});
labels.textFormatter("{%id} \n{%info} \n{%sq}");
```

{sample}Maps\_Seat\_06{sample}

To edit the information described in our tooltips, use the {api:anychart.charts.Map#tooltip}tooltip(){api} method. We can edit the text in the title and in the body of a tooltip using the {api:anychart.core.ui.ChartTooltip#titleFormatter}titleFormatter(){api} and {api:anychart.core.ui.ChartTooltip#textFormatter}textFormatter(){api} methods, as well as the tooltips' appearance: their form, colors, etc. You can find more information about tooltips in our [Tooltips](../../Common_Settings/Tooltip) and [Map Tooltips](../Tooltips) articles.

```
// set the tooltips
tooltips = series.tooltip();

// set the tooltips titles and body texts
tooltips.titleFormatter("{%id}");
tooltips.textFormatter("{%info}");

// set the tooltips colors
tooltips.background("green 0.8");
tooltips.separator("white");
```

{sample}Maps\_Seat\_07{sample}


## Gallery Samples

You can find samples of using SVG images to create Seat Maps in [AnyMap: Seat Maps Gallery](http://www.anychart.com/products/anymap/gallery/Seat_Maps/). 