# Interactivity


* [Overview](#overview)
* [Default interactivity](#default_interactivity)
* [Altering interactivity](#altering_interactivity)
 * [Charts behaviour](#charts_behaviour)
  * [Hover](#hover)
  * [Select](#select)
 * [Series behaviour](#series_behaviour)
  * [Hover](#series_hover)
  * [Select](#series_select)
 * [Handling chart events](#handling_chart_events)
  * [Navigating by URL](#navigating_by_url)
  * [DrillDown](#drilldown)
 * [Creating Custom Tooltip](#creating_custom_tooltip)
 * [Interactivity Settings in Data Sets](#interactivity_settings_in_data_sets)


## Overview 

Our charts are interactive by default, and almost everything can be adjusted to your liking. This article describes the default charts behaviour and tells how to adjust charts' interactivity settings.

## Default interactivity

That's what happens by default when users interact with charts:
 - series and points are highlighted when hovered
 - points are selected
 - tooltips of hovered points are shown
 - series becomes highlighted when a legend is hovered
 - the series gets shown or hidden when a legend element is clicked
 - a number of series are selected (multi-selecting)

Lets' now take a look at a couple of samples with default interactivity settings.
<br>
Here we've got a line chart with three series and a legend enabled. Click on legend items to hide/show series.

You can see the code of this sample in the playground.

{sample}CS\_Interactivity\_01{sample}

The following sample shows a scatter chart with marker series, you can hover and select the points, and do everything you can do in the previous cartesian chart sample.

{sample}CS\_Interactivity\_02{sample}

## Altering interactivity

And now let's talk about customising the charts' behaviour. There are two levels of interactivity: charts behaviour in general and the series interactivity level.

## Charts behaviour

We can make some changes in charts behaviour using the {api:anychart.core.utils.Interactivity}**.interactivity()**{api} method. It helps to adjust hover and select settings, as well as create a "highlighting area" - a spot of a custom-defined radius that highlights (hovers) all points within that radius.

So, if we need to change something with hover, we should use {api:anychart.core.utils.Interactivity#hoverMode}**.hoverMode()**{api} with an argument "bySpot" or "byX". In first case we may adjust the radius of a "spot",  making it bigger or smaller..

There are also two basic events: hover and select.

### Hover

Our interactive hover might be of two types: "bySpot", which is a sort of multi-hovering, and "byX", which is the same as single-select. <a name = "bySpot"> </a>

#### bySpot 

So the hover of bySpot type (with a Spot of 30px radius) is being enabled by the following line:

```
// multi-hover enabling 
chart.interactivity().hoverMode('bySpot');
chart.interactivity().spotRadius(30);
```
{sample}CS\_Interactivity\_03{sample}

This way of hovering, when a couple of points are hovered simultaneously, is a multi-hover mode. Now let's look at the single-hovering mode ("byX").<a name="byX"></a>

#### byX

Note that you can define the mode in a easier way:
```
// single-hover enabling 
chart.interactivity('byX');
```

The code line above does the same as the previous one, but we have changed the hovering mode. The following sample demonstrates the difference:

{sample}CS\_Interactivity\_04{sample}

So, the "byX" mode gives us a single-hover mode, when it even isn't necessary to hover the point, you just need to move the cursor over the chart plot. So the y-coordinate doesn't matter at all in this case. It might be useful when you've got a lot of points on a chart and you need to emphasize them.

<br>
Now, let's have a look at the <b>select and multi-select</b> features.


### Select

If you want to change the selection settings, use the {api:anychart.core.utils.Interactivity#selectionMode}**.selectionMode()**{api} method with one of the following arguments: "none", "singleSelect" or "multiSelect". The "none" value disables the ability to select completely, "singleSelect" disables multi-select and "multiSelect" is the default.

The **Shift** key is used as it is usually used with selection: if you need to select several points, hold **Shift** key while clicking them one by one.
Selection feature is enabled by default, to switch it off do the following:

```
// disabling select
chart.interactivity().selectionMode('none');
```

{sample}CS\_Interactivity\_05{sample} 

<a name="multiselect"></a>

#### Multi-select

Multi-selection mode is enabled by default. However, if you have turned it off and then you need it back, use this:

```
// multi-select enabling
chart.interactivity().selectionMode('multiSelect');
```

{sample}CS\_Interactivity\_06{sample} 

<a name="singleselect"></a>

#### Single-select

And the last is single selection mode. As you could guess, the "singleSelect" is to be used in this case.

```
// single-select enabling
chart.interactivity().selectionMode('singleSelect');
```

{sample}CS\_Interactivity\_07{sample} 


## Series behaviour
<a name="series_hover"></a>
### Hover 

Usually, when you hover a point, it becomes highlighted. However, if you are creating a custom dashboard or a complex control elements, it might be necessary to highlight the points before you even drag a cursor over a chart. In this case use the {api:anychart.core.SeriesBase#hover}**.hover()**{api} method with a number of point (or array of numbers) that needs to be highlighted at the moment of loading.

If you provide no arguments to the {api:anychart.core.SeriesBase#hover}**.hover()**{api} function, all points of the series (a series itself) will be hovered, no matter which interactivity type you use.

Change the hovering mode in playground and see the difference.

```	
	// setting some points for the series
	series_1.hover([4, 6, 9, 12, 16, 19]);
	series_2.hover([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 16, 17, 18, 20]);	
```

{sample}CS\_Interactivity\_08{sample} 


<a name="series_select"> </a>
### Select 

There might be some points which you'd like to be selected by default or adjust the selecting feature according to your needs. The method {api:anychart.core.SeriesBase#select}**.select()**{api} works here (similar to {api:anychart.core.SeriesBase#hover}**.hover()**{api}).

```
	// making series_1 and some points of series_2 selected
    series_1.select();
    series_2.select([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 16, 17, 18, 20]);
```

{sample}CS\_Interactivity\_09{sample} 

The same as with hovering action, just define an array with the numbers and you'll get a couple of points selected at the beginning.

Note that if there is no arguments for the {api:anychart.core.SeriesBase#select}**.select()**{api} function, the continuous series will be selected, but not the discrete one.

If you need the whole series being selected as the chart is created, don't define the arguments at all. Try to do that in playground and see what difference it makes.

Some of our charts might have something specific about their series - for example, maps or OHLC charts. Those components and charts have special setting for selections.

We can adjust the color of selection using the {api:anychart.core.cartesian.series.Column#selectFill}**.selectFill**{api} (or {api:anychart.core.cartesian.series.Column#selectHatchFill}**.selectHatchFill**{api} for monochromatic), the selection stroke color - {api:anychart.core.cartesian.series.Column#selectStroke}**.selectStroke()**{api}. 

Let's change the selection settings for the box chart.

```
    // change the selected points look
    series.selectHatchFill("soliddiamond", "#FFF", 1, 5);
    series.selectStroke("none");
    series.select([2,4,9]);
```

{sample}CS\_Interactivity\_10{sample} 

OHLC charts have special settings such as {api:anychart.core.cartesian.series.OHLC#risingStroke}**.risingStroke()**{api}, {api:anychart.core.cartesian.series.OHLC#selectRisingStroke}**.selectRisingStroke()**{api} or {api:anychart.core.cartesian.series.OHLC#hoverFallingStroke}**.hoverFallingStroke()**{api}. You can find more in {api:anychart.core.cartesian.series.OHLC}[API Reference]{api}.

```
	// change the selected regions color to the dark violet from the default
    // series.risingStroke('#5400BA');
    series.hoverRisingStroke('#FFF');
	
	// enabling the selection
	series.select([1,2,5,6,7,9]);
```

{sample}CS\_Interactivity\_11{sample} 


If you want to disable the selection ability, use "none" as the {api:anychart.core.utils.Interactivity#selectionMode}**.selectionMode()**{api} argument.


## Handling chart events

In some cases you might need a custom chart reaction on some user's actions which cannot be set simply using the methods described above. That's where listeners may help. 

You can add a listener to any chart element, forcing it to react in some way. For example, you can make the chart body to listen to clicks and add a random point on each click; or you can tell the chart to listen to selects and uncolor all other elements when one is selected and color them back when the item gets unselected. It's possible to set some other custom interactivity using event listeners. 

You can find more about listeners [here](../Common_Settings/Event_Listeners).

### Navigating by URL

Let's look at the typical situation when we might need the listeners. We add a listener of double clicks to the series, which will navigate us to the pre-defined URL.

{sample}CS\_Interactivity\_12{sample} 

Explore the code of this sample in the playground.

### DrillDown

Using all these features, it's possible to create a drilldown chart. You can easily get points' data through the **.pointSelect()** method and show or hide them. Look at the following sample:

{sample}CS\_Interactivity\_13{sample} 


## Creating Custom Tooltip

There is one more thing you can do with the interactivity of our charts: you can create some elements from "outside" of the main chart code using JavaScript. In the next sample we have created a custom tooltip with no usage of AnyChart tooltips but only through jQuery. 

{sample}CS\_Interactivity\_15{sample} 

## Interactivity Settings in Data Sets

Now, let's look at our dataSets. If you have explored our samples in the playground, you may remember that in a couple of samples we added not only values but sometimes colors or url's, and mapped those accordingly. In this paragraph, we're going to shed some light on using dataSet values for defining interactivity parameters.
<br>
Look at the following sample.
<br>
{sample}CS\_Interactivity\_16{sample} 
<br>
Here we have defined all interactivity colors (selection and hovering fills) through the dataSet of the chart. That's how it looks like in the code:
<br>
```
    // data
    var data = anychart.data.set([
        ["John", 10000, 12000, '#ccc', '#FF9900', 'diamond'],
        ["Jake", 12000, 15000, '#ccc', '#FF9900', 'backwarddiagonal'],
        ["Peter", 18000, 16000, '#ccc', '#FF9900', 'diamond'],
        ["James", 11000, 13000, '#ccc', '#FF9900', 'diamond'],
        ["Mary", 9000, 19000, '#ccc', '#FF9900', 'diamond']                                                          
    ]);

    // map data for each series
	var Sales2003 = data.mapAs({x: [0], value: [1], hoverFill: [3], selectFill: [4]});
	var Sales2004 = data.mapAs({x: [0], value: [2], hoverFill: [3], selectHatchFill: [5]});
```

<br>
So, when you need or want to use our dataSet to set the series interactive behaviour, all you need is to map the parameters properly afterwards.

<br>
Another way of defining interactivity through the dataSet is setting the data as objects, like in the following:
<br>

```
// data
    var data = anychart.data.set([
        {x:1, value:990, selectFill:'Red'},
        {x:2, value:1100, selected:true, selectFill:'Blue'},
        {x:3, value:1050, selectFill:'Red'},
        {x:4, value:890,  selectFill:'Red'},
        {x:5, value:1300, selected:true, selectFill:'Red'},
        {x:6, value:840, selected:true, selectFill:'Green'},
        {x:7, value:900, selectFill:'Red'},
        {x:8, value:1000, selectFill:'Red'}                                                   
    ]);
```
<br>
{sample}CS\_Interactivity\_17{sample}
