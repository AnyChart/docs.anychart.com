{:index 9}
# Proportional Symbol Map

## Overview

As the name implies, symbols (circles, bubbles), representing the values, are drawn of the proportional size to the size of the value being represented. The size of the bubbles (proportional symbols in maps) does not depend on the size of the region associated with the variable. For example, if we show the value of unemployment on a proportional symbol map of the UK, Dundee would have bigger visual importance then Highland if their unemployment values were so (e.g. 3.5% in Dundee, 1% in Highland).

An example of proportional circles is shown below.

{sample}Maps\_Proportional\_Symbol\_01{sample}

The Bubble series in AnyChart JavaScript Maps is quite similar to the Basic JavaScript Bubble series. You can read about Bubble Charts in the [Bubble Chart tutorial](../Basic_Charts/Bubble_Chart), and in this article we will consider significant issues of Bubble charts used with maps.

## Creating Bubbles

Bubble series is being created the same as other series on a map. First, we should create the map, set the geoData and define series of bubble type:

```
// creating the map
map = anychart.map();

// setting the geoData
map.geoData(anychart.maps.australia);

// setting the series
var series = map.bubble(dataSet);
```

### Data

There are two ways of defining bubble placement data properly. Let's look at them.

### Latitude and Longitude

First of all, we need to remember, how we define the location of any object (town, country, house, memorial, ship, etc) in the world. Wherever the point is placed on the Earth and however small it is, there are always two geographic coordinates specifying this point location: latitude and longitude.

Latitude specifies the north-south position and longitude is the east-west coordinate of an object on the Earth's surface. Both are measured as angles: latitude is in a range from 0° at the Equator to 90° N at north and 90° S at south (or 90° and -90° accordingly); longitude is being ranged from 0° at the Prime Meridian to +180° eastward and −180° westward. 

We use this system of defining the point's location as the main one. While we use "x" and "y" in other charts and choropleth maps, we've got "long" and "lat" to define longitude and latitude.

Let's have a look at the sample below to understand the meaning of described.

```
// data
var data = [
    {'id': 'Sydney', 'size': 106, "lat":  -33.51, "long": 151.11},
    {'id': 'Cape York', 'size': 103, "lat":  -10.41, "long": 142.22},
    {'id': 'Cape South-Point', 'size': 109, "lat":  -39.08, "long": 142.22}, 
    {'id': 'Cape Byron', 'size': 108, "lat":  -28.36, "long": 153.38}, 
    {'id': 'Steep-Point Cape', 'size': 95, "lat":  -26.09, "long": 113.09},
    {'id': 'Alice Springs', 'size': 100, "lat": -23.69, "long": 133.87},
    {'id': 'Adelaide', 'size': 99, "lat": -34.98, "long": 138.42}
];

```
{sample}Maps\_Proportional\_Symbol\_03{sample}

### Region ID

Now, let's look at another way of defining the points locations on a map, when there are only one field is necessary: `id`, which binds by the field defined by {api:anychart.charts.Map#geoIdField}geoIdField(){api} method. Set the necessary parameters for the map and the series:

```
var data = [
    {id: 'AU.NS', size: 7565500},
    {id: 'AU.NT', size: 243700},
    {id: 'AU.WA', size: 2565600},
    {id: 'AU.SA', size: 1682600},
    {id: 'AU.VI', size: 5866300},
    {id: 'AU.QL', size: 4750500},
    {id: 'AU.TS', size: 514700}
];

// create map chart
map = anychart.map();

// set geodata 
map.geoData(anychart.maps.australia);

// create bubble series
var series = map.bubble(data);
```

{sample}Maps\_Proportional\_Symbol\_02{sample}

Note: this sample uses third party proj4.js library, to learn how, why and figure out if you need it please see the [Map Projections](Map_Projections) article.


### Size

You can adjust how the bubbles' size is defined. For this we use two methods: {api:anychart.charts.Map#maxBubbleSize}maxBubbleSize(){api} and {api:anychart.charts.Map#minBubbleSize}minBubbleSize(){api}. Let's see how it is done:

```
// set the maximum size of the bubble
map.maxBubbleSize(35);

// set the minimum size of the bubble
map.minBubbleSize(10);
```

{sample}Maps\_Proportional\_Symbol\_08{sample}

You can set the size in percents of map size as well:

```
// set the maximum size of the bubble
map.maxBubbleSize('20%');

// set the minimum size of the bubble
map.minBubbleSize('1%');
```

{sample}Maps\_Proportional\_Symbol\_09{sample}

## Altering Bubble Series

Altering the series looks pretty much the same as in [basic Bubble Charts](../Basic_Charts/Bubble_Chart#colors). We can easily do it here. Let's look through a couple of samples.

### Series colors

To color all bubbles in a series we use the {api:anychart.core.map.series.Bubble#fill}fill(){api} method; to color the hovered bubbles there is a {api:anychart.core.map.series.Bubble#hoverFill}hoverFill(){api} function; for selected bubbles we've got {api:anychart.core.map.series.Bubble#selectFill}selectFill(){api}. For coloring the stroke we've got {api:anychart.core.map.series.Bubble#stroke}stroke(){api}, {api:anychart.core.map.series.Bubble#hoverStroke}hoverStroke(){api} and {api:anychart.core.map.series.Bubble#selectStroke}selectStroke(){api} accordingly. 

Let's create a sample using things we've learned.

```
// change the fill and hoverFill colors
series.fill("#EBD670");
series.hovered().fill("#C7FF99");

// change the stroke and hoverStroke colors
series.stroke("#C7FF99");
series.hovered().stroke("#EBD670");

// set the select colors
series.selected().stroke("#66FFCC");
series.selected().fill("#879CED");
```

{sample}Maps\_Proportional\_Symbol\_05{sample}

Also, we can make a monochromatic map using hatch fills. We use {api:anychart.core.map.series.Bubble#hatchFill}hatchFill{api} to add a hatch pattern to the whole series, {api:anychart.core.map.series.Bubble#hoverHatchFill}hoverHatchFill{api} to add hatch to series in hovered state and {api:anychart.core.map.series.Bubble#selectHatchFill}selectHatchFill{api} to make the selected elements hatched.

```
// making the chart monochromatic
series.hatchFill("horizontal");
series.hovered().hatchFill("weave");
series.selected().hatchFill("confetti");
series.stroke("black");
series.fill(null);
```

{sample}Maps\_Proportional\_Symbol\_06{sample}

Note that we should get rid of the main filling color, unless we want the hatch being added over the color.

As usual, we can define the colors through the data, especially if we need different color settings for some of our bubbles.

```
var dataSet = [
    {'id': 'AU.NS', 'size': 7565500, 'fill': "red", hoverFill: "#FF6666", selectFill: "#800000"},
    {'id': 'AU.NT', 'size': 243700, 'fill': "green", hoverFill:"#80B280", selectFill: "#003300"},
    {'id': 'AU.WA', 'size': 2565600},
    {'id': 'AU.SA', 'size': 1682600},
    {'id': 'AU.VI', 'size': 5866300},
    {'id': 'AU.QL', 'size': 4750500},
    {'id': 'AU.TS', 'size': 514700}
];
```

{sample}Maps\_Proportional\_Symbol\_07{sample}

### Labels and Tooltips

You can also alter the labels' and tooltips' appearance. Use standard methods such as {api:anychart.core.ui.Label#fontColor}fontColor(){api} for labels, format tooltips using {api:anychart.core.ui.Tooltip#format}format(){api} function. You can find everything about this in the [Labels](../Common_Settings/Labels) and [Tooltips](../Common_Settings/Tooltip) tutorial.

Let's now take a look at the couple of samples with labels and/or tooltips. First, let's change the font color with {api:anychart.core.ui.Label#fontColor}fontColor(){api}, change their size and format them a bit using {api:anychart.core.ui.LabelsFactory#format}format(){api} function.

```
// set the text color 
series.labels().fontColor('black');
series.labels().fontSize(10);

// format the labels
series.labels().format("{%name}\n{%size}");
```

{sample}Maps\_Proportional\_Symbol\_10{sample}

Find out more about Text Formatters [here](../Common_Settings/Text_Formatters).

Labels are enabled by default, they can be turned on and off using the {api:anychart.core.ui.Label#enable}enable(){api} method as usual.

{sample}Maps\_Proportional\_Symbol\_11{sample}

## Multi series

You can add several series to a map, no matter which type. We can create a multi-series Bubble Map or have different kinds of series on a map. Let's first create an Australia Map with choropleth and bubble series. 

For this we'd better set the data as array as we should map it properly. Don't forget that bubble and choropleth series have different necessary data fields and the choropleth series has its own coloring settings. Read more about this [here](Choropleth_Map).

```
var dataSet = anychart.data.set([
  ['AU.NS', 3.5, 8.5],
  ['AU.NT', 7.1, 12],
  ['AU.WA', 10.4, 2.9],
  ['AU.SA', 4.7, 28.2],
  ['AU.VI', 7.9, 19.4],
  ['AU.QL', 8, 3.7],
  ['AU.TS', 3.2, 7.3]
]);

// create series
var series_1 = map.bubble(dataSet.mapAs({id: 0, size: 1}));
var series_2 = map.choropleth(dataSet.mapAs({id: 0, value: 2}));
```

{sample}Maps\_Proportional\_Symbol\_12{sample}

We can create a map with several bubble series as well:

{sample}Maps\_Proportional\_Symbol\_13{sample}

As you can see, we can operate the series on a map quite easy and similar to working with basic charts. Find more about Choropleth series in the [Choropleth tutorial](Choropleth_Map) and some other features of Bubble series in the [Bubble tutorial](../Basic_Charts/Bubble_Chart).
