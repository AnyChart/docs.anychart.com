{:index 6}
Proportional Symbol Map
===========

* [Overview](#overview)
* [Creating Bubbles](#creating_bubbles)
 * [Data](#data)
* [Altering Bubbles](#altering_bubbles)
 * [Series colors](#series_colors)
 * [Sizing](#sizing)
 * [Labels and Tooltips](#labels_and_tooltips)
* [Multi series](#multi_series)

## Overview

As the name implies, symbols (circles), representing the values, are drawn of the proportional size to the size of the value being represented. The size of the bubbles (proportional symbols in maps) is not dependent on the size of the region associated with the variable. For example, if we show the value of unemployment on a proportional symbol map of the UK, Clackmannanshire would have the bigger visual importance then Highland if their unemployment values were so (e.g. 3.5% in Clackmannanshire, 1% in Highland).

An example of proportional circles is shown below.

{sample}Maps\_Proportional\_Symbol\_01{sample}

The Bubble series in Maps is quite similar to the Basic Bubble series. The only difference about it is defining the center of each circle. While we can do it only one way in [Cartesian/Scatter](../Basic_Chart_Types/Bubble_Chart) - with the usage of necessary "x" and "value" fields and "size" for the bubbles' sizes, - in maps there are two options about doing that. We will consider them in this article.

All other bubbles configuration can be accomplished the way described in [Bubble Chart Tutorial](../Basic_Chart_Types/Bubble_Chart).

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

What about setting the data, there are two ways of defining it properly. Let's look at them.

### Data

The way of setting the data influence the bubble series view. 

If we use the "id" field in the data, we'll get the center of each bubble in the center of each region.

```
var dataSet = anychart.data.set([
    {'id': 'AU.NS', 'size': 7565500},
    {'id': 'AU.NT', 'size': 243700},
    {'id': 'AU.WA', 'size': 2565600},
    {'id': 'AU.SA', 'size': 1682600},
    {'id': 'AU.VI', 'size': 5866300},
    {'id': 'AU.QL', 'size': 4750500},
    {'id': 'AU.TS', 'size': 514700}
]);
```

{sample}Maps\_Proportional\_Symbol\_02{sample}

In the other case, we can use "x" or/and "value" ("x" and "y" map coordinates), then we can position each bubble separately.

```
var dataSet = anychart.data.set([
    {'size': 7565500, 'x':"6803", 'value': "-1537"},
    {'size': 243700, 'x':"5997", 'value': "-453"},
    {'size': 2565600, 'x':"5151", 'value': "-687"},
    {'size': 1682600, 'x':"5793", 'value': "-1551"},
    {'size': 5866300, 'x':"6562", 'value': "-605"},
    {'size': 4750500, 'x':"6685", 'value': "-1790"},
    {'size': 514700, 'x':"6270", 'value': "-1933"}
]);
```

{sample}Maps\_Proportional\_Symbol\_03{sample}

You can define both "id" and "x" or/and "value" - in this case the last two ones will have the bigger priority in setting the center of the bubble.


```
var dataSet = anychart.data.set([
    {'id': 'AU.NS', 'size': 7565500, 'x':"6803", 'value': "-1537"},
    {'id': 'AU.NT', 'size': 243700, 'x':"5997", 'value': "-453"},
    {'id': 'AU.WA', 'size': 2565600, 'x':"5151", 'value': "-687"},
    {'id': 'AU.SA', 'size': 1682600, 'x':"5793", 'value': "-1551"},
    {'id': 'AU.VI', 'size': 5866300, 'x':"6562", 'value': "-605"},
    {'id': 'AU.QL', 'size': 4750500, 'x':"6685", 'value': "-1790"},
    {'id': 'AU.TS', 'size': 514700, 'x':"6270", 'value': "-1933"}
]);

```
{sample}Maps\_Proportional\_Symbol\_04{sample}


## Altering Bubbles

Apart from positioning the bubbles, which can be done through the data, altering the series look is the same as in [basic Bubble Charts](../Basic_Chart_Types/Bubble_Chart#colors).

### Series colors

To color all bubbles in a series we use the {api:anychart.core.scatter.series.Bubble#fill}**.fill()**{api} method; to color the hovered bubbles there is a {api:anychart.core.scatter.series.Bubble#hoverFill}**.hoverFill()**{api} function; for selected bubbles we've got {api:anychart.core.scatter.series.Bubble#selectFill}**.selectFill()**{api}. For coloring the stroke we've got {api:anychart.core.scatter.series.Bubble#stroke}**.stroke()**{api}, {api:anychart.core.scatter.series.Bubble#hoverStroke}**.hoverStroke()**{api} and {api:anychart.core.scatter.series.Bubble#selectStroke}**.selectStroke()**{api} accordingly. If 

Let's make a sample of what's written above.

```
	// change the fill and hoverFill colors
	series.fill("#EBD670");
	series.hoverFill("#C7FF99");

	// change the stroke and hoverStroke colors
	series.stroke("#C7FF99");
	series.hoverStroke("#EBD670");

	// set the select colors
	series.selectStroke("#66FFCC");
	series.selectFill("#879CED");
```

{sample}Maps\_Proportional\_Symbol\_05{sample}

Also, we can make a monochromatic map using hatch fills. We use {api:anychart.core.scatter.series.Bubble#hatchFill}**.hatchFill**{api} for hatching the whole series, {api:anychart.core.scatter.series.Bubble#hoverHatchFill}**.hoverHatchFill**{api} for hatching the hovered series and {api:anychart.core.scatter.series.Bubble#selectHatchFill}**.selectHatchFill**{api} to make the selected elements hatched.


```
	// making the chart monochromatic
	series.hatchFill("horizontal");
	series.hoverHatchFill("diagonal_cross");
	series.selectHatchFill("confetti");
	series.stroke("black");
	series.fill(null);
```

{sample}Maps\_Proportional\_Symbol\_06{sample}

Note that we should get rid of the main filling color, unless we want the hatch over the color.

As usual, we can define the colors through the dataSet, especially if we need different color settings for some of our bubbles.

```
var dataSet = anychart.data.set([
    {'id': 'AU.NS', 'size': 7565500, 'fill': "red", hoverFill: "#FF6666", selectFill: "#800000"},
    {'id': 'AU.NT', 'size': 243700, 'fill': "green", hoverFill:"#80B280", selectFill: "#003300"},
    {'id': 'AU.WA', 'size': 2565600},
    {'id': 'AU.SA', 'size': 1682600},
    {'id': 'AU.VI', 'size': 5866300},
    {'id': 'AU.QL', 'size': 4750500},
    {'id': 'AU.TS', 'size': 514700}
]);
```
{sample}Maps\_Proportional\_Symbol\_07{sample}


### Sizing

We can adjust the bubbles' sizes as well. For this we use two methods: {api:anychart.charts.Scatter#maxBubbleSize}**.maxBubbleSize()**{api} and {api:anychart.charts.Scatter#minBubbleSize}**.minBubbleSize()**{api}. Let's now adjust the bubbles in one of the previous samples.

```
    // set the maximum size of the bubble
    map.maxBubbleSize(35);

    // set the minimum size of the bubble
    map.minBubbleSize(10);

```
{sample}Maps\_Proportional\_Symbol\_08{sample}

You can set the size in percent as well:

```
    // set the maximum size of the bubble
    map.maxBubbleSize('10%');

    // set the minimum size of the bubble
    map.minBubbleSize('2%');

```
{sample}Maps\_Proportional\_Symbol\_09{sample}


### Labels and Tooltips

You can also alter the labels' and tooltips' appearance. Use standard methods such as {api:anychart.core.ui.Label#fontColor}**.fontColor()**{api} for labels, format tooltips using .textFormatter() function. You can find everything about it in the [Labels](../Common_Settings/Labels) and [Tooltips](../Common_Settings/Tooltip) tutorial.

Let's now consider a couple of samples with labels and/or tooltips. First, let's change the font color with {api:anychart.ui.Label#fontColor}**.fontColor()**{api}, change their size and format them a bit with the usage of {api:anychart.core.ui.LabelsFactory#textFormatter}**.textFormatter()**{api} function.

```
    // set the color for the text of the labels
    series.labels().fontColor('black');
    series.labels().fontSize(10);

    // format the labels
    series.labels().textFormatter(function(){
        return(this.getDataValue("name")+"\n"+this.size);
    });

```

{sample}Maps\_Proportional\_Symbol\_10{sample}

Find more about Text Formatters [here](../Common_Settings/Text_Formatters).

Labels are always enabled by default, but if you have switched them off and then need to have them back, use the {api:anychart.ui.Label#fontColor}**.enable()**{api} method as usual.


{sample}Maps\_Proportional\_Symbol\_11{sample}


## Multi series

You can add several series to a map, no matter which type. We can create a multi-series Bubble Map or have different kinds of series on a map. Let's first create an Australia Map with choropleth and bubble series. 

For this we'd better set the data as array as we should map it properly. Then we should set the labels of both series

```
кто-то лох оставил пример дома и этот тут так херня из дома вставлю что надо
```

{sample}Maps\_Proportional\_Symbol\_12{sample}

We can create a multi-bubble-series map as well:

```
// create the data
var dataSet = anychart.data.set([
              ['AU.NS', 3.5, 8.5],
              ['AU.NT', 7.1, 12],
              ['AU.WA', 10.4, 2.9],
              ['AU.SA', 4.7, 28.2],
              ['AU.VI', 7.9, 19.4],
              ['AU.QL', 8, 3.7],
              ['AU.TS', 3.2, 7.3]
          ]);

// mapping the data
var series1Data = dataSet.mapAs({id:[0], size:[1]});
var series2Data = dataSet.mapAs({id:[0], size:[2]});

//set series geoId field settings
          series_1.geoIdField("code_hasc");
          series_2.geoIdField("code_hasc");

```

{sample}Maps\_Proportional\_Symbol\_13{sample}


As you can see, we can operate the series on a map quite easy and similar to working with basic charts. Find more about Choropleth series in the [Choropleth tutorial](Choropleth_Map) and some other features of Bubble series in the [Bubble tutorial](../Basic_Chart_Types/Bubble_Chart).