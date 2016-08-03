{:index 8}
Seat Maps
===========

* [Overview](#overview)
* [Preparing SVG Image](#preparing_svg_image)
* [Creating Seat Map](#creating_seat_map)
 * [Upload the SVG Data](#upload_the_svg_data)
 * [Map Data](#map_data)
* [Colors](#colors)
 * [Elements coloring](#elements_coloring)
 * [Attributes coloring](#attributes_coloring)
 * [Unbound Regions](#unbound_regions)
* [Labels and Tooltips](#labels_and_tooltips)
* [Gallery Samples](#gallery_samples)


## Overview

Seat Maps are not Geographical Maps, seat map or seating chart, is a diagram of the seat layout inside a building, passenger aircraft or else. They are often published by airlines for informational purposes, and are of use to passengers for selection of their seat at booking or check-in. AnyMap technology allows to create any kind of seat maps, schemes or interactive layouts.


## Preparing SVG Image

Creating seat maps is made possible by AnyMap ability to load specially formatted SVG Images and using them as the source for maps. How SVG image should be formatted is described in [Custom SVG Maps](Custom_SVG_Maps) article.

If you need to create your own SVG-picture in a graphic editor, look through the [Preparing SVG Image](Preparing_SVG_Image) article.

If you have an SVG-image that you need to be edited in a some way, read the [Editing SVG Image](Editing_SVG_Image) article.


## Creating Seat Map

When you have a suitable SVG image with assign identifiers you can start developing your own Seat Map. 

### Upload the SVG Data

When your SVG image is ready, we need to upload it to our sample to work with its attributes. At first, We put an object with the link of the SVG-file into the "body" section of the sample file. 

```
<body>
<div id="container"></div>
<object style="width: 0; height: 0;" data="SVG_Image.svg" type="image/svg+xml" id="svg" width="100%" height="100%"></object>
</body>
```

To get the data of the SVG-file we need to load the document and get the inner DOM of the file by using jQuery:

```
$(window).on('load', function () {

var a = document.getElementById('svg');
//it's important to add an load event listener to the object, as it will load the svg doc asynchronously

//get the inner DOM of svg.svg
var svgDoc = a.contentDocument; 
```

### Map Data

Besides the SVG-image, we need a Map data, which objects are groups of attributes. Set IDs and values in the Map dataset.

```
// data set
chart = anychart.seatMap([
	{id: 'hall', value: '720'},
	{id: 'room2', value: '165'},
	{id: 'WC', value: '49'},
	{id: 'room1', value: '143'},
	{id: 'kitchen', value: '208'}
]);

// set svg data
chart.geoData(svgDoc);
```

{sample}Maps\_Seat\_01{sample}

Now, as we've made our sample to work, we can turn to the sample's details of view.

## Colors

You can see that the colors of the picture in the sample are different from the defined. To return the colors that we've used in the SVG-picture and change the interactivity colors, we need to use some methods that are considered below.

### Elements coloring

You can see that the colors of the picture in the sample are different from the defined. To return the colors that we've used in the SVG-picture, we need to use the following:


```

```

{sample}Maps\_Seat\_02{sample}

To change the interactivity colors (colors of the groups in a hovered or selected states)..

```

```

{sample}Maps\_Seat\_03{sample}


### Attributes coloring

It's also possible to chage the colors of the parts of a group, if there are any. 

```

```

{sample}Maps\_Seat\_04{sample}

### Unbound Regions

There are several modes of coloring those regions (points, areas) that have no map data.

```

```

{sample}Maps\_Seat\_05{sample}

```

```

{sample}Maps\_Seat\_06{sample}


### Labels and Tooltips

Let's transform our labels and tooltips. 

```

```

{sample}Maps\_Seat\_07{sample}


## Gallery Samples

You can find samples of using SVG images to create Seat Maps in [AnyMap: Seat Maps Gallery](http://www.anychart.com/products/anymap/gallery/Seat_Maps/). 