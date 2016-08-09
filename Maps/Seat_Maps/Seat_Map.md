{:index 0}
Seat Maps
===========

* [Overview](#overview)
* [Preparing SVG Image](#preparing_svg_image)
* [Creating Seat Map](#creating_seat_map)
 * [Upload the SVG Data](#upload_the_svg_data)
  * [AJAX](#ajax)
  * [jQuery](#jquery)
  * [As String](#as_string)
 * [Map Data](#map_data)
* [Coloring](#coloring)
* [Unbound Regions](#unbound_regions)
* [Labels and Tooltips](#labels_and_tooltips)
* [Gallery Samples](#gallery_samples)


## Overview

Seat Maps are not Geographical Maps, seat map or seating chart, is a diagram of the seat layout inside a building, passenger aircraft or else. They are often published by airlines for informational purposes, and are of use to passengers for selection of their seat at booking or check-in. AnyMap technology allows to create any kind of seat maps, schemes or interactive layouts.


## Preparing SVG Image

Creating seat maps is made possible by AnyMap ability to load specially formatted SVG Images and using them as the source for maps. How SVG image should be formatted is described in [Custom SVG Maps](Custom_SVG_Maps) article.

If you need to create your own SVG-picture in a graphic editor, look through the [Preparing SVG Image](Preparing_SVG_Image) article.


## Creating Seat Map

When you have a suitable SVG image with assign identifiers you can start developing your own Seat Map. 

### Upload the SVG Data

When your SVG image is ready, we need to upload it to our sample to work with its attributes. There are three ways how to get the access to the file: through AJAX-request, requesting a file through jQuery or put all the SVG-code in a string.

#### AJAX

At first, we put an object with the link of the SVG-file into the "body" section of the sample file. 

```
<body>
<div id="container"></div>
<object style="width: 0; height: 0;" data="svg_images/house.svg" type="image/svg+xml" width="100%" height="100%"></object>
</body>
```

To get the data of the SVG-file we need to load the document using AJAX:

```
$.ajax({
    type: 'GET',
    url: 'http://cdn.anychart.com/svg-data/seat-map/house.svg',
```

{sample}Maps\_Seat\_01{sample}

This option is highly recommended to use because of its flexibility. It doesn't matter for AJAX how much time is it neccessary to upload the file or how big this file is - unlike others.

#### jQuery

This way is nice for you if your svg-file is located in the same directory as the map file. It is necessary to use event listeners in case you'd prefer this way of getting the SVG, as the file will not be loaded asynchronously.

As well as with AJAX, it's necessary to put an object with the link to the SVG-file into the "body" section of the Map file. 

```
<body>
<div id="container"></div>
<object style="width: 0; height: 0;" data="svg_images/house.svg" type="image/svg+xml" id="house" width="100%" height="100%"></object>
</body>
```

Note that we've added one more attribute to the object: we need the "id" field to bind the object to the following code. The .getElementByID() method needs the ID of the element on a page - in our case this ID is "house".

```
$(window).on('load', function () {

    var a = document.getElementById("house");
    //note that it's important to add and load event listener to the object

        var svgDoc = a.contentDocument; //get the inner DOM of boeing.svg
        //add behaviour

        anychart.onDocumentReady(function () {
```
{sample}Maps\_Seat\_02{sample}

#### As String

Another way to define the SVG-code is to put it directly in the file as a string object. This way may suit you if your SVG contains a little information; in case with large SVG-images define it the same as in one of the previous samples.

```
svgString = '<svg xmlns="http://www.w3.org/2000/svg">' +
            '<g data-ac-wrapper-id="3">' +
            '<circle id="1" cx="50" cy="50" r="20"></circle>' +
            '<circle id="2" cx="150" cy="40" r="30"></circle>' +
            '<circle id="3" cx="100" cy="100" r="10" width="200" height="100" fill="#aed581" stroke="black"></circle>' +
            '</g></svg>';
```

{sample}Maps\_Seat\_03{sample}

### Map Data

Besides the SVG-image, we need a Map data, which objects are groups of attributes. If the AJAX request was successful,  Set IDs and values in the Map dataset.

```
success: function(svgData){
// data set
chart = anychart.seatMap([
	{id: 'Hall', value: '720'},
	{id: 'Room2', value: '165'},
	{id: 'WC', value: '49'},
	{id: 'Room1', value: '143'},
	{id: 'Kitchen', value: '208'}
]);

// set svg data
chart.geoData(svgData);
```

{sample}Maps\_Seat\_01{sample}

Now, as we've made our sample to work, we can turn to the sample's details of view.

## Coloring

The easiest way to change the colors of the elements in Seat Maps is to use the dataSet. Just add the necessary fields to the objects representing points:

```
chart = anychart.seatMap([
    {id: "Hall", value: "720"},
    {id: "Room2", value: "165"},
    {id: "WC", value: "49", hoverFill: "green 0.1", hoverStroke: "3 green"},
    {id: "Room1", value: "143", hoverFill: "blue 0.1", hoverStroke: "3 navy"},
    {id: "Kitchen", value: "208"}
]);

// set svg data
chart.geoData(svgData);
```

{sample}Maps\_Seat\_04{sample}

Colors can be also defined through the SVG-code. Look through the [Advanced Coloring](Advanced_Coloring) article for this information.


## Unbound Regions

The {api:anychart.charts.Map#unboundRegions}.unboundRegion(){api} method sets the color to the regions that have no value defined in the map data. Let's remove one of the points from the map dataSet:

```
// data set
chart = anychart.seatMap([
    {id: 'Hall', value: '720'},
    {id: 'Room2', value: '165'},
    {id: 'WC', value: '49'},
    {id: 'Room1', value: '143'},
]);
```

There are two modes of highlighting those regions (points, areas): "as-is" and "hide". In the first case the unbound region will be colored according to the settings in the SVG image, with no reaction on hovering or selecting:

```
// load svg-file how it looked(colors stroke/fill except for elements of series)
chart.unboundRegions('as-is');
```

{sample}Maps\_Seat\_05{sample}

If you set the {api:anychart.charts.Map#unboundRegions}.unboundRegion(){api} method in the "hide" mode, these regions will not be shown at all.


```
// load svg-file without elements with no values
chart.unboundRegions('hide');
```

{sample}Maps\_Seat\_06{sample}


### Labels and Tooltips

Let's transform our labels and tooltips. We'll put additional information about sizes and square feets of the rooms into the dataSet and use standard {api:anychart.charts.Map#label}.label(){api} and {api:anychart.charts.Map#tooltip}.tooltip(){api} methods to set them.

```
// data set
    chart = anychart.seatMap([
    {id: 'Hall', value: '720', info: "30\' 0\" x 24\'0\"" , sq: "720 sq. ft."},
    {id: 'Room2', value: '165', info: "15\' 0\" x 11\'0\"" , sq: "165 sq. ft."},
    {id: 'WC', value: '49', info: "7\' 0\" x 7\'0\"" , sq: "49 sq. ft."},
    {id: 'Room1', value: '143', info: "11\' 0\" x 13\'0\"" , sq: "143 sq. ft."},
    {id: 'Kitchen', value: '208', info: "13\' 0\" x 16\'0\"" , sq: "208 sq. ft."}
]);
```


```

```

{sample}Maps\_Seat\_07{sample}

To edit the information described in our tooltips, use the {api:anychart.charts.Map#tooltip}.tooltip(){api} method. We can edit the text in the title and in the body of a tooltip using the {api:anychart.core.ui.ChartTooltip#titleFormatter}.titleFormatter(){api} and {api:anychart.core.ui.ChartTooltip#textFormatter}.textFormatter(){api} methods, as well as the tooltips' appearance: their form, colors, etc. You can find more information about tooltips in our [Tooltips](../../Common_Settings/Tooltip) and [Map Tooltips](../Tooltips) articles.

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

{sample}Maps\_Seat\_08{sample}


## Gallery Samples

You can find samples of using SVG images to create Seat Maps in [AnyMap: Seat Maps Gallery](http://www.anychart.com/products/anymap/gallery/Seat_Maps/). 