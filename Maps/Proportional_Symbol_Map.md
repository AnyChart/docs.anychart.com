{:index 9}
# Proportional Symbol Map

## Overview

As the name implies, symbols (circles, bubbles), representing the values, are drawn of the proportional size to the size of the value being represented. The size of the bubbles (proportional symbols in maps) does not depend on the size of the region associated with the variable. For example, if we show the value of unemployment on a proportional symbol map of the UK, Dundee would have bigger visual importance then Highland if their unemployment values were so (e.g., 3.5% in Dundee, 1% in Highland).

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

Latitude specifies the north-south position and longitude is the east-west coordinate of an object on the Earth's surface. Both are measured as angles: latitude is in a range from 0&deg; at the Equator to 90&deg; N at north and 90&deg; S at south (or 90&deg; and -90&deg; accordingly); longitude is being ranged from 0&deg; at the Prime Meridian to +180&deg; eastward and -180&deg; westward. 

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

You can set the size as a percentage of the map size as well:

```
// set the maximum size of the bubble
map.maxBubbleSize('20%');

// set the minimum size of the bubble
map.minBubbleSize('1%');
```

{sample}Maps\_Proportional\_Symbol\_09{sample}

## Altering Bubble Series

Altering the series looks pretty much the same as in [basic Bubble Charts](../Basic_Charts/Bubble_Chart#appearance). We can easily do it here. Let's look through a couple of samples.

### Series colors

The colors of bubbles can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.map.series.Bubble#normal}normal(){api}, {api:anychart.core.map.series.Bubble#hovered}hovered(){api}, and {api:anychart.core.map.series.Bubble#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#hatchFill}hatchFill(){api} to set the hatch fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

In the sample below, there is a Proportional Symbol Map with colors configured:

```
// set colors
series.normal().fill("#00cc99", 0.3);
series.hovered().fill("#00cc99", 0.1);
series.selected().fill("#00cc99", 0.5);
series.normal().stroke("#00cc99");
series.hovered().stroke("#00cc99", 2);
series.selected().stroke("#00cc99", 4);
```

{sample}Maps\_Proportional\_Symbol\_05{sample}

Hatch fills can be used to create monochromatic maps:

```
// set colors
series.normal().hatchFill("percent30");
series.hovered().hatchFill("percent20");
series.selected().hatchFill("percent50");
series.normal().fill("white");
series.hovered().fill("white");
series.selected().fill("white");
series.normal().stroke("black");
series.hovered().stroke("black", 2);
series.selected().stroke("black", 2);
```

{sample}Maps\_Proportional\_Symbol\_06{sample}

You can change the colors of individual bubbles by adding special fields to your data:

```
var data = [
    {'id': 'AU.NS', 'size': 7565500},
    {'id': 'AU.NT', 'size': 243700},
    {'id': 'AU.WA', 'size': 2565600},
    {'id': 'AU.SA', 'size': 1682600},
    {'id': 'AU.VI', 'size': 5866300},
    {'id': 'AU.QL', 'size': 4750500,
     normal:   {
                 fill: "#b30059 0.3",
                 stroke: "#b30059"
               },
     hovered:  {
                 fill: "#b30059 0.1",
                 stroke: "2 #b30059"
               },
     selected: {
                 fill: "#b30059 0.5",
                 stroke: "4 #b30059"
               }
    },
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

Labels are enabled by default, they can be turned on and off using the {api:anychart.core.ui.Label#enabled}enabled(){api} method as usual.

{sample}Maps\_Proportional\_Symbol\_11{sample}

## Multi series

You can add several series to a map, no matter which type. We can create a multiple-series Bubble Map or have different kinds of series on a map. Let's first create an Australia Map with choropleth and bubble series. 

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
