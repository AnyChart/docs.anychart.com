Interactivity
======================

* [Overview](#overview)
* [Default interactivity](#default_interactivity)
* [Altering interactivity](#altering_interactivity)
 * [Charts behaviour](#charts_behaviour)
  * [Hover](#hover)
  * [Select](#select)
 * [Series behaviour](#series_behaviour)
  * [Hover](#hover)
  * [Select](#select)
 * [Define interactivity parameters through dataSets](#define_interactivity_parameters_through_datasets)


# Overview 

Interactivity is a kind of "dialog" that occurs between a user and a computer program, so in case with charts - between a user and a chart. Our charts perform some interactivity by default and also can be adjusted somehow to perform custom interactivity. This article describes the default charts behaviour and tells how to adjust charts' settings to create special interactivity.

# Default interactivity

Default interactivity of our charts contains the following:
 - highlighting the hovered series and points
 - selecting the points 
 - showing tooltips on hovered points
 - highlighting a series when a legend is hovered
 - showing/hiding the series when a legend element is clicked
 - multiselecting

Now we're going to consider a couple of samples showing these kinds of interactivity.

{sample}CS\_Interactivity\_01{sample}

<br>
Here we've got a line chart with three series and a legend enabled. Click on legend items to hide/show series, hover them and see the tooltips.

You can see the code of this sample in the playground.

In the following sample there is a marker chart, where we can hover and select the points, do the same as in the previous sample with the legend.

{sample}CS\_Interactivity\_02{sample}

# Altering interactivity

And now let's talk about customising the charts' performance and behaviour. There are two levels of interactivity: charts behaviour in general and the series level.

## Charts behaviour

We can make some changes in charts behaviour using the {api}**.interactivity()**{api} method. It helps to adjust hover and select settings, as well as create a "highlighting area" - a spot of a custom-defined radius that highlights (hovers) all points that belong to that radius.

So, if we need to change something in hover performance, we should use {api:}**.hoverMode(){api} with an argument "bySpot" or "byX". In first case we may adjust the radius of a "spot",  making it bigger or smaller..

There are also two basic reaction types: hover and select.

### Hover

So the hover of bySpot type (with a Spot of 30px radius) is being enabled by the following line:

```
// multi-hover enabling 
chart.interactivity().hoverMode('bySpot');
chart.interactivity().spotRadius(30);
```
{sample}CS\_Interactivity\_03{sample}

This way of hovering, when a couple of points are hovered simultaneously, is a multi-hover mode. 

Note that there is a short version of this command:
```
// single-hover enabling 
chart.interactivity('byX');
```

The code line above does the same as the previous one, but we have changed the mode of performance. The following sample demonstrates the difference:

{sample}CS\_Interactivity\_04{sample}

So, the "byX" mode gives us a single-hover mode, when it even isn't necessary to hover the point, you just need to drag the cursor anywhere above or under the point. So the y-coordinate doesn't matter at all in this case. It might be useful when you've got a lot of points on a chart and you need to emphasize them.

<br>
Now, let'l look at the select editing tools.


### Select

There is a {api}**.selectionMode()**{api} method created for changing the selection settings. The argument should be one of those: "none", "singleSelect" or "multiSelect".

The **Shift** key is being used as usual, so ,if you need to select many points, hold **Shift** key while checking them.

As selection is enabled by default, for some reasons it might be necessary to switch it off:

```
// select disabling
chart.interactivity().selectionMode('none');
```

{sample}CS\_Interactivity\_05{sample} 

The mode that is on by default is a multi-selection mode. However, if you have turned it off and then you need a selection tool back, use this:

```
// multi-select enabling
chart.interactivity().selectionMode('multiSelect');
```

{sample}CS\_Interactivity\_06{sample} 

And the last is single selection mode. As you could guess, the "singleSelect" is to be used in this case.

```
// single-select enabling
chart.interactivity().selectionMode('singleSelect');
```

{sample}CS\_Interactivity\_07{sample} 


## Series behaviour

### Hover

Usually, when you hover a point, it becomes highlighted. However, it might be necessary to hightlight the points before you even drag a cursor over the chart. In this case use the {api}**.hover()**{api} method with a number of point (of array of numbers) that needs to be highlighted at the moment of loading:

If you define nothing as an argument for the {api}**.hover()**{api} function, the hovering will be disabled for the discrete series but switched on for the whole continous ones, if the hover mode is set as "bySpot". When the hover mode is "byX", using {api:}**.hover()**{api} without arguments will lead to the same picture, but it will be impossible to unhover the continuous series and one of the points of a discrete series will be hovered also (which one depends on the x-coordinate, nearest to the cursor position).

Change the hovering mode in playground and see the difference.

```
	// hovering mode
	chart.interactivity().hoverMode('bySpot');
	
	// setting some points of series_2 and an providing no arguments for the series_1 
	series_1.hover();
	series_2.hover([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 16, 17, 18, 20]);	
```

{sample}CS\_Interactivity\_08{sample} 

If you define an exact number of an array of points for a continuous series, there would be no difference - the continuous series is being hovered regardless of the arguments given to the {api}**.hover()**{api} method.

### Select

There might be some points which you'd like to be selected by default or adjust the selecting feature according to your needs. The method {api}**.select()**{api} works here (similar to {api}**.hover()**{api}).

So, let's select the same points as above on a marker chart:

```
	// making series_1 and some points of series_2 selected
	series_1.select();
	series_2.select([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 16, 17, 18, 20]);	
```

{sample}CS\_Interactivity\_09{sample} 

The same as with hovering action, just define an array with the numbers and you'll get a couple of points selected at the beginning.

Note that if there is no arguments for the {api}**.select()**{api} function, the continuous series will be selected, but not the discrete one.

If you need the whole series being selected as the chart is created, don't define the arguments at all. Try to do that in playground and see what difference it makes.

Some of our charts might have something specific about their series - for example, maps or OHLC charts. Those components and charts have special setting for selections.

We can adjust the color of selection using the {api}**.selectFill**{api} (or {api}**.selectHatchFill**{api} for monochromatic), the selection stroking color - {api}**.selectStroke()**{api}. 

Let's change the selection color for the box chart.

```
	// change the selected regions color to the dark violet from the default and add white stroke
    series_2.selectFill('#5400BA');
    series_2.selectStroke('#FFF');
```

{sample}CS\_Interactivity\_10{sample} 

OHLC charts have special settings such as {api:anychart.core.cartesian.series.OHLC#risingStroke}**.risingStroke()**{api}, {api:anychart.core.cartesian.series.OHLC#risingStroke}**.selectRisingStroke()**(api) or {api: anychart.core.cartesian.series.OHLC#hoverFallingStroke}**.hoverFallingStroke()**{api}. You can find more in {api:anychart.core.cartesian.series.OHLC}[API Reference]{api}.

```
	// change the selected regions color to the dark violet from the default
    // series.risingStroke('#5400BA');
    series.hoverRisingStroke('#FFF');
	
	// enabling the selection
	series. select([1,2,5,6,7,9]);
```

{sample}CS\_Interactivity\_11{sample} 


If you want to disable the selection ability, there is an only way to use the enum {api}**.selectionModel**(single|multi|none){api} with arguments of "single", "none" or "multi".

## Define interactivity parameters through dataSets

It's not possible to define the interactivity itself through the dataSet, but we can adjust some interactivity settings. That would look like the following:

{sample}CS\_Interactivity\_12{sample} 

```
	...		
        ['22', 60, 25, 'green', {thickness:3, color:'black'}],
	...
	
	// select the defined points
	series_2.select([0,2,5,6,9,11,12,13,17,19,21,24,26,29]);
```

As you can see, there are some points differently colored and stroked when selected. This was defined through the dataset, (look up for the whole dataSet in playground). You can adjust the similar settings the same way.

