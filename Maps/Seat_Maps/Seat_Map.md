{:index 0}
Seat Maps
===========

* [Overview](#overview)
* [Preparing an SVG Image](#preparing_an_svg_image)
* [SVG Data](#svg_data)
 * [AJAX](#ajax)
 * [As a String](#as_a_string)
 * [HTML DOM Image](#html_dom_image)
* [Mapping Data](#mapping_data)
* [Coloring](#coloring)
* [Unbound Regions](#unbound_regions)
* [Labels and Tooltips](#labels_and_tooltips)
* [Gallery Samples](#gallery_samples)

---> Как все-таки - с заглавных букв пишем названия графиков или со строчных? Я всегда писала со строчной, т.к. это избавляет от необходимости палить случаи, когда речь не об эничартовских графиках, а об этом типе графика вообще (и заглавная тогда по идее не нужна). Пишешь все со строчной и не паришься. Но может, в маркетинговых целях и для улучшения читаемости заглавные нужны? В этой статье заглавные не трогала, хотя есть разнобой. Хочу услышать ответ, чтобы знать, как самой-то писать. И да, надо будет потом еще перепроверить по статье капитализацию, обязательно.

## Overview

With AnyMap you can create any kind of seat maps, schemes, and interactive layouts.

A Seat Map is a diagram of a seat layout inside a passenger aircraft, theater, stadium, arena, or any other building or space. Such layouts are published for informational purposes: for example, aircraft Seat Maps allow passengers to select a seat when booking a ticket or checking in for a flight. Other Seat Maps are mostly used in the similar way.

---> as well as they are used by passengers - ПОЧЕМУ as well? Я СЧИТАЮ, ЭТО ЧАСТЬ "informational purposes". ПОПРАВИЛА.
---> "the same way" is a colloquial form of "in the same way" - ХОЗЯЙКЕ НА ЗАМЕТКУ!
---> НЕМНОГО ПЕРЕПИСАЛА АБЗАЦ НА СВОЙ ВКУС, ДОБАВИЛА СВЯЗНОСТИ. ПЕРВОЕ ПРЕДЛОЖЕНИЕ (РАНЬШЕ ОНО БЫЛО ПОСЛЕДНИМ) ОСОБЕННО СЛОЖНО СВЯЗАТЬ С ОСТАЛЬНЫМИ. НО ВРОДЕ ТАКОЙ ВАРИАНТ БОЛЕЕ ИЛИ МЕНЕЕ НОРМ.

## Preparing an SVG Image

To create a Seat Map with AnyMap, you need an SVG image formatted in a specific way. Read the [Custom SVG Maps](Custom_SVG_Maps) article to learn how an existing SVG image can be loaded, and how it should be formatted.

If you need to create your own SVG picture in a graphic editor, study the [Preparing SVG Image](Preparing_SVG_Image) article.


## SVG Data

---> ХОЧЕТСЯ ГЛАГОЛ. Uploading SVG Data? Uploading an SVG Image?
     МОЖНО ЕЩЕ ПРЕДЫДУЩИЙ ПОМЕНЯТЬ НА: Preparing SVG Data.

There are three ways to upload an SVG image into a Seat Map: you can use the AJAX technology, add an SVG as a string variable, or add it through the HTML DOM.

---> ПЕРЕЧИТАЙ ЭТО ПРЕДЛОЖЕНИЕ - НЕ ПОТЕРЯЛСЯ СМЫСЛ В РЕЗУЛЬТАТЕ ПРАВОК?

### AJAX

---> Using AJAX ? ЕСЛИ ПЕРЕДЕЛАТЬ ОБЩЕЕ ЗАГЛАВИЕ (СМ. ВЫШЕ) И ЧУТЬ РАСШИРИТЬ ЗАГОЛОВКИ, ОГЛАВЛЕНИЕ БУДЕТ БОЛЕЕ ЧИТАЕМЫМ

In this article, AJAX is used in JavaScript with the help of the jQuery library, thought there are a lot of other ways. To include jQuery, add the script tag:

---> НЕМНОГО ВСЕ ПЕРЕСТРОИЛА, ТОЖЕ ПРОЧИТАЙ
---> МОЖЕТ, СЛОВО script КАК-ТО ВЫДЕЛИТЬ НАДО?

```
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
```

To load the SVG file, use .ajax request:

КАКОЙ АРТИКЛЬ НУЖЕН ПЕРЕД .ajax request? ЭТО КАКОЙ-ТО УНИКАЛЬНЫЙ ЗАПРОС (THE) ИЛИ ОНИ РАЗНЫЕ БЫВАЮТ?

```
$.ajax({
type: "GET",
url: "http://static.anychart.com/images/docs/house.svg",
```

{sample}Maps\_Seat\_01{sample}


### As a String

Another way to add an SVG image is to put it directly into the script as a string. This way may suit you if the SVG code is not too long.

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

---> As a HTML DOM Image ? Using (the) HTML DOM ?

Finally, there is an option to embed your image in the HTML DOM and then obtain it from the DOM when page is loaded. **Note** that this option works only when the SVG file is located in the same domain as the map file because of the [Same Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). 

---> В ДРУГОМ МЕСТО ДО ЭТОГО БЫЛО НАПИСАНО "the HTML DOM", Я И ТУТ ДЛЯ ЕДИНООБРАЗИЯ АРТИКЛЬ ПОСТАВИЛА, НО НЕ ЗНАЮ, КАК ПРАВИЛЬНО, ТК. НЕ ЗНАЮ, ЧТО ЭТО ТАКОЕ.

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
Take a look at the <a href="http://www.anychart.com/demos/seatmap/html-dom-embed.html">AnyChart Seat map sample</a> with an SVG file loaded from the HTML DOM.

---> И ТУТ ДОБАВИЛА the (HTML DOM).

## Mapping Data

When the SVG image is loaded as a source, you need to add data for the Seat Map. The IDs of data points should correspond the IDs of groups in the SVG file.

---> you need to add data: МОЖЕТ, ТУТ ЛУЧШЕ map?

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

If you open the original SVG image, you can easily notice that the colors in the sample above are different from those defined in the image itself. The next section explains how to work with colors in Seat Maps.


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

To configure labels and tooltips, use the {api:anychart.charts.Map#label}label(){api} and {api:anychart.charts.Map#tooltip}tooltip(){api} methods. Working with Seat Map labels and tooltips is absolutely identical to working with labels and tooltips in Maps, so you can learn more from the [Map Tooltips](Maps/Tooltips) and [Map Labels](Maps/Labels) articles.

---> ПЕРЕСТРОИЛА АБЗАЦ, ПЕРЕЧИТАЙ

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

To change the information shown in tooltips, use the {api:anychart.charts.Map#tooltip}tooltip(){api} method. Text in the tooltip title and text in the tooltip body are formatted using the {api:anychart.core.ui.ChartTooltip#titleFormatter}titleFormatter(){api} and {api:anychart.core.ui.ChartTooltip#textFormatter}textFormatter(){api} methods. Find more information about tooltips in our [Tooltips](../../Common_Settings/Tooltip) and [Map Tooltips](../Tooltips) articles.

---> Text in the tooltip title and text of the body of a tooltip are formatted...
     МОЖЕТ, ТАК? The title and body are formatted...

---> is formatted using... А МОЖЕТ ЗДЕСЬ via? Повтора не будет.

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