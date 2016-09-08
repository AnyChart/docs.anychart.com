{:index 0}
Seat Maps
===========

* [Overview](#overview)
* [Preparing SVG Image](#preparing_svg_image)
* [SVG Data](#svg_data)
 * [AJAX](#ajax)
 * [As String](#as_string)
 * [HTML DOM Image](#html_dom_image)
* [Map Data](#map_data)
* [Coloring](#coloring)
* [Unbound Regions](#unbound_regions)
* [Labels and Tooltips](#labels_and_tooltips)
* [Gallery Samples](#gallery_samples)


## Overview

Seat Map is a diagram of a seat layout inside a building, passenger aircraft or else. Aircraft Seat Maps are published by airlines for informational purposes, as well as they are used by passengers to select a seat when booking a ticket or checking in for a flight. Theatre, stadium or arena seat maps are used the same way. With AnyMap you can create any kind of seat maps, schemes or interactive layouts.


## Preparing SVG Image

To create a Seat Map with AnyMap you need an SVG image formatted in a specific way. Learn how an existing SVG image can be loaded, and how it should be formatted in [Custom SVG Maps](Custom_SVG_Maps) article.

If you need to create your own SVG picture in a graphic editor, study the [Preparing SVG Image](Preparing_SVG_Image) article.


## SVG Data

There are three ways to load SVG image into a Seat Map: using the AJAX technology, add SVG as string variable or through the HTML DOM.

### AJAX

There are a lot ways to use AJAX in the JavaScript. In this article we use jQuery library to do that. To include the jQuery library use the script tag:

```
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
```

Load SVG file using .ajax request:

```
$.ajax({
type: "GET",
url: "http://static.anychart.com/images/docs/house.svg",
```

{sample}Maps\_Seat\_01{sample}


### As String

Another way to use SVG image is to put it directly in the script as a string. This way may suit you if the SVG code is not too long.

```
svgString = "<svg xmlns='http://www.w3.org/2000/svg'>" +
            "<g data-ac-wrapper-id='3'>" +
            "<circle id='1' cx='50' cy='50' r='20'></circle>" +
            "<circle id='2' cx='150' cy='40' r='30'></circle>" +
            "<circle id='3' cx='100' cy='100' r='10' width='200' height='100' fill='#aed581' stroke='black'></circle>" +
            "</g></svg>";
```

{sample}Maps\_Seat\_02{sample}

### HTML DOM Image

Another option is to embed image in HTML DOM and then obtain it from the DOM when page is loaded. **Note** that this option works only when the SVG file is located in the same domain as the map file because of the [Same Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). 

Put an `<object>` with the link to the SVG file into the `<body>` section of the Map file. 

```
<body>
<div id="container"></div>
<object style="width: 0; height: 0;" data="house.svg" type="image/svg+xml" id="house" width="100%" height="100%"></object>
</body>
```

Use the {api:anychart#onDocumentLoad}onDocumentLoad(){api} method to let the code run after the page is loaded with all external files.

```
anychart.onDocumentLoad(function() {
  // note that you should use onDocumentLoad to get the image
  var imageElement = document.getElementById("house");
```
Take a look at the <a href="http://www.anychart.com/demos/seatmap/html-dom-embed.html">AnyChart Seat map sample</a> with an SVG file loaded from HTML DOM.


## Map Data

When SVG image is loaded as a source you need to add data for a Seat Map. Data points' IDs should correspond the groups' IDs in the SVG file.

```
// create new series
seatMapSeries = chart.choropleth();
// load data
seatMapSeries.data([
  {id: "Hall", value: "720"},
  {id: "Room2", value: "165"},
  {id: "WC", value: "49"},
  {id: "Room1", value: "143"},
  {id: "Kitchen", value: "208"}
]);
```

{sample}Maps\_Seat\_01{sample}

If you open the original SVG image, you can easily notice that the colors in the sample above are different from those defined in the image itself. Working with colors in Seat Maps is described in the next section.


## Coloring

The easiest way to change the colors of the Seat Map elements is to use the data set. Just add the necessary fields to the objects (points):

```
chart = anychart.seatMap([
    {id: "Hall", value: "720"},
    {id: "Room2", value: "165"},
    {id: "WC", value: "49", fill: "gold 0.5", hoverFill: "green 0.1", hoverStroke: "3 green"},
    {id: "Room1", value: "143", hoverFill: "blue 0.1", hoverStroke: "3 navy"},
    {id: "Kitchen", value: "208"}
]);
```

{sample}Maps\_Seat\_03{sample}

Colors can be also defined through the SVG code and several other ways. See the [Advanced Coloring](Advanced_Coloring) article to learn more.


## Unbound Regions

Use the {api:anychart.charts.Map#unboundRegions}unboundRegion(){api} method to define how the regions (points, seats) that have no value are defined in the data set.

There are two modes of coloring unbound regions: "as-is" and "hide". In the "as-is" mode the unbound region is colored according to the settings in the SVG image, with no reaction when being hovered or selected:

```
// load SVG image using original colors used for points without values in the data set
chart.unboundRegions("as-is");
```

{sample}Maps\_Seat\_04{sample}

When you set "hide" as the argument of the {api:anychart.charts.Map#unboundRegions}unboundRegion(){api} method, regions with no values are not shown at all. You can see that in the sample below, the kitchen is not displayed at all.

```
// load SVG image and don't show elements without values in the data set
chart.unboundRegions("hide");
```

{sample}Maps\_Seat\_05{sample}


### Labels and Tooltips

Working with Seat Map labels and tooltips is absolutely identical to working with labels and tooltips in Maps. Learn more in the [Map Tooltips](Maps/Tooltips) and [Map Labels](Maps/Labels) articles. The {api:anychart.charts.Map#label}label(){api} and {api:anychart.charts.Map#tooltip}tooltip(){api} methods are used to work with them:

```
// data set
    chart = anychart.seatMap([
    {id: "Hall", value: "720", info: "30\' 0\" x 24\'0\"" , sq: "720 sq. ft."},
    {id: "Room2", value: "165", info: "15\' 0\" x 11\'0\"" , sq: "165 sq. ft."},
    {id: "WC", value: "49", info: "7\' 0\" x 7\'0\"" , sq: "49 sq. ft."},
    {id: "Room1", value: "143", info: "11\' 0\" x 13\'0\"" , sq: "143 sq. ft."},
    {id: "Kitchen", value: "208", info: "13\' 0\" x 16\'0\"" , sq: "208 sq. ft."}
]);

// enable labels and adjust them
labels.enabled(false);
series.labels({fontSize: 10});
labels.textFormatter("{%id} \n{%info} \n{%sq}");
```

{sample}Maps\_Seat\_06{sample}

To change the information shown in tooltips, use the {api:anychart.charts.Map#tooltip}tooltip(){api} method. Text in the tooltip title and text of the body of a tooltip are formatted using the {api:anychart.core.ui.ChartTooltip#titleFormatter}titleFormatter(){api} and {api:anychart.core.ui.ChartTooltip#textFormatter}textFormatter(){api} methods. Find more information about tooltips in our [Tooltips](../../Common_Settings/Tooltip) and [Map Tooltips](../Tooltips) articles.

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

You can find samples of using SVG images in Seat Maps in [AnyMap: Seat Maps Gallery](http://www.anychart.com/products/anymap/gallery/Seat_Maps/). 