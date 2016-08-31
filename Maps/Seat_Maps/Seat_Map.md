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

Seat Maps are diagrams of the seat layout inside a building, passenger aircraft or else. Aircraft Seat Maps are published by airlines for informational purposes, and they are used by passengers to select a seat when booking a ticket or checking in for a flight. Theatre, stadium or arena seat maps are used the same way. With AnyMap you can create any kind of seat maps, schemes or interactive layouts.


## Preparing SVG Image

To create a Seat Map with AnyMap you need an SVG image formatted in a specific way. Learn how an existing SVG image can be loaded, and how it should be formatted in [Custom SVG Maps](Custom_SVG_Maps) article.

If you need to create your own SVG picture in a graphic editor, study the [Preparing SVG Image](Preparing_SVG_Image) article.


## SVG Data

There are two ways to load SVG image into a Seat Map: load it using the AJAX technology or add SVG as string variable.

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

Another way to use SVG image is to put it directly in the script as a string. This way may suit you if the SVG image is not too big.

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

Use the {api:anychart.charts.Map#unboundRegions}unboundRegion(){api} method to define how the regions (points, seats) that have no value defined in the data set.

There are two modes of coloring unboun regions: "as-is" and "hide". In the "as-is" mode the unbound region is colored according to the settings in the SVG image, with no reaction when being hovered or selected:

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

Working with Seat Map labels and tooltips is absolutely identical to working with labels and tooltips in Maps, learn more in Maps/Tooltips and Maps/Labels articles. Usual {api:anychart.charts.Map#label}label(){api} and {api:anychart.charts.Map#tooltip}tooltip(){api} methods are used to work with them:

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