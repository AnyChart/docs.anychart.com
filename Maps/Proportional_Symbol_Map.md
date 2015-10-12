{:index 6}
Proportional Symbol Map
===========

* [Overview](#overview)
* [Creating Bubbles](#creating_bubbles)
 * [Data](#data)

## Overview

As the name implies, symbols (circles), representing the values, are drawn of the proportional size to the size of the value being represented. The size of the bubbles (proportional symbols in maps) is not dependent on the size of the region associated with the variable. For example, if we show the value of unemployment on a proportional symbol map of Europe, Slovenia would have the bigger visual importance then Germany if their unemployment values were so (e.g. 9.3% in Slovenia, 4.7% in Germany).

An example of proportional circles is shown below.

{sample}{sample}

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
		{'id': 'AF.BG', 'size': 0},
		{'id': 'AF.HR', 'size': 1},
		{'id': 'AF.BM', 'size': 2},
		{'id': 'AF.BK', 'size': 3},
		{'id': 'AF.FB', 'size': 4},
    ]);
```

{sample}{sample}

In the other case, when we use "x" (which represents latitude) or/and "value" (longitude), 

```
var dataSet = anychart.data.set([
		{'x': 1, 'value': 2, 'size': 0},
		{'x': 1, 'value': 2, 'size': 1},
		{'x': 1, 'value': 2, 'size': 2},
		{'x': 1, 'value': 2, 'size': 3},
		{'x': 1, 'value': 2, 'size': 4},
    ]);
```

{sample}{sample}

You can define both "id" and "x" or/and "value" - in this case the last two ones will have the bigger priority in setting the center of the bubble.


```
var dataSet = anychart.data.set([
		{'id': 'AF.BG', 'x': 1, 'value': 2, 'size': 0},
		{'id': 'AF.HR', 'x': 1, 'value': 2, 'size': 1},
		{'id': 'AF.BM', 'x': 1, 'value': 2, 'size': 2},
		{'id': 'AF.BK', 'x': 1, 'value': 2, 'size': 3},
		{'id': 'AF.FB', 'x': 1, 'value': 2, 'size': 4},
    ]);
```

{sample}{sample}

