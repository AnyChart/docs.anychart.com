{:index 0}
# Seat Maps

## Overview

With AnyMap you can create any kind of seat maps, schemes, and interactive layouts.

A seat map is a diagram of a seat layout inside a passenger aircraft, theater, stadium, arena, or any other building or space. Such layouts are published for informational purposes: for example, aircraft seat maps allow passengers to select a seat when booking a ticket or checking in for a flight. Other seat maps are mostly used in the similar way.

## Preparing an SVG Image

To create a seat map with AnyMap, you need an SVG image formatted in a specific way. Read the [Custom SVG Maps](../Custom_SVG_Maps) article to learn how an existing SVG image can be loaded, and how it should be formatted.

If you need to create your own SVG picture in a graphic editor, study the [Preparing SVG Image](Preparing_SVG_Image) article.

## SVG Data

There are three ways to upload an SVG image into a seat map: you can use the AJAX technology, add an SVG as a string variable, or add it through the HTML DOM.

### AJAX

In this article, AJAX is used in JavaScript with the help of the jQuery library, thought there are a lot of other ways. To include jQuery, add the script tag:

```
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
```

To load the SVG file, use an .ajax request:

```
$.ajax({
type: "GET",
url: "https://static.anychart.com/images/docs/seat_map/house.svg",
```

{sample}Maps\_Seat\_01{sample}

### As a String

Another way to add an SVG image is to put it directly into the script as a string. This way may suit you if the SVG code is not too long.

```
svgString = "<svg xmlns='https://www.w3.org/2000/svg'>" +
            "<g data-ac-wrapper-id='3'>" +
            "<circle id='1' cx='50' cy='50' r='20'></circle>" +
            "<circle id='2' cx='150' cy='40' r='30'></circle>" +
            "<circle id='3' cx='100' cy='100' r='10' width='200' height='100' fill='#aed581' stroke='black'></circle>" +
            "</g></svg>";
```

{sample}Maps\_Seat\_02{sample}

### HTML DOM Image

Finally, there is an option to embed your image in the HTML DOM and then obtain it from the DOM when page is loaded. **Note** that this option works only when the SVG file is located in the same domain as the map file because of the [Same Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). 

Put an `<object>` with the link to the SVG file into the `<body>` section of the Map file. 

```
<body>
<div id="container"></div>
<object style="width: 0; height: 0;" data="house.svg" type="image/svg+xml" id="house" width="100%" height="100%"></object>
</body>
```

Use the {api:anychart#onDocumentLoad}onDocumentLoad(){api} method to let the code run after the page is loaded with all external files.

```
anychart.onDocumentLoad(function () {
  // note that you should use onDocumentLoad to get the image
  var imageElement = document.getElementById("house");
```
Take a look at the [AnyChart Seat Map sample](https://www.anychart.com/demos/seatmap/html-dom-embed.html) with an SVG file loaded from the HTML DOM.

## Mapping Data

When the SVG image is loaded as a source, you need to add data for the seat map. The IDs of data points should correspond the IDs of groups in the SVG file.

```
// create a new series
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

If you open the original SVG image, you can easily notice that the colors in the sample above are different from those defined in the image itself. The next section explains how to work with colors in seat maps.

## Coloring

The easiest way to change the colors of the seat map elements is to use the data set. Just add the necessary fields to the objects (points):

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

Colors can be also defined through the SVG code and in several other ways. See the [Advanced Coloring](Advanced_Coloring) article to learn more.

## Unbound Regions

Use the {api:anychart.charts.Map#unboundRegions}unboundRegion(){api} method to define how the regions (points, seats) that have no value are defined in the data set.

There are two modes of coloring unbound regions: "as-is" and "hide". In the "as-is" mode the unbound region is colored according to the settings in the SVG image, with no reaction when being hovered or selected:

```
// load SVG image using original colors used for points without values in the data set
chart.unboundRegions("as-is");
```

{sample}Maps\_Seat\_04{sample}

When you set "hide" as the argument of the {api:anychart.charts.Map#unboundRegions}unboundRegion(){api} method, regions with no values are not shown at all. You can see that in the sample below the kitchen is not displayed at all.

```
// load SVG image and don't show elements without values in the data set
chart.unboundRegions("hide");
```

{sample}Maps\_Seat\_05{sample}

### Labels and Tooltips

To configure labels and tooltips, use the {api:anychart.charts.Map#label}label(){api} and {api:anychart.charts.Map#tooltip}tooltip(){api} methods. Working with labels and tooltips in Seat Maps is absolutely identical to working with labels and tooltips in Maps, so you can learn more from the [Map Tooltips](../Tooltips) and [Map Labels](../Labels) articles.

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
labels.format("{%id} \n{%info} \n{%sq}");
```

{sample}Maps\_Seat\_06{sample}

To change the information shown in tooltips, use the {api:anychart.charts.Map#tooltip}tooltip(){api} method. Text in the tooltip title and text in the tooltip body are formatted using the {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods. Find more information about tooltips in our [Tooltips](../../Common_Settings/Tooltip) and [Map Tooltips](../Tooltips) articles.

```
// set the tooltips
tooltips = series.tooltip();

// set the tooltips titles and body texts
tooltips.titleFormat("{%id}");
tooltips.format("{%info}");

// set the tooltips colors
tooltips.background("green 0.8");
tooltips.separator("white");
```

{sample}Maps\_Seat\_07{sample}

## Gallery Samples

You can find samples of using SVG images in seat maps in [AnyMap: Seat Maps Gallery](https://www.anychart.com/products/anymap/gallery/Seat_Maps/).