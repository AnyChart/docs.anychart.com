Scroller

* [Overview](#overview)
* [Enable](#enable)
* [Adjust](#adjust)
 * [Zoom](#zoom)
 * [Scroll](#scroll)
 * [Thumbs](#thumbs)
* [Get|set methods](#get|set_methods)
 * [Scroll](#scroll)
 * [Zoom](#zoom)

## Overview

Sometimes we've got so much data that we cannot display it all, keeping it comfortable for understanding. In this case we can enable the scroller for the chart axes.

All X / Y Axes based charts (Bar, Line, Area, Candlestick, OHLC, Combinations, etc.) can have Axes with scroll bar. 

Note that Logarithmic Axes are not scrollable.

## Enable

We use standard {api:anychart.core.ui.Scroller#enabled}**.enabled()**{api} method to switch the scroller on. Let's create a simple column chart and enable the scroller on it:

```
	// turn it on
	var chart = anychart.column();
	....
	chart.xScroller(true);
	....
```

{sample}CS\_Scroller\_01{sample}

Now you can see that there is a scroller shown up, but the general view has not changed (though, you can drag it). That's because we should zoom the chart - set the area we'd like to display.

## Adjust

In this section we will consider the zooming and viewing settings of the chart. 

### Zoom

First of all, we need to define that area of the chart that we'd like to have being displayed. We can do it differently, in accordance with out needs and preferences.

#### Set the limits by ratio

The simplest way of limiting the show area is using the ratio. We've got the {api:anychart.charts.Cartesian.XZoom#setTo}**.setTo()**{api} method for that. Use two values with this method: the start ratio value (e.g. 0) and the end one (e.g. 0.3). Look at the following sample.

```
	// turn it on
	chart.xZoom().setTo(0, 0.3);
```

{sample}CS\_Scroller\_02{sample}

#### Set the limits by values

Another option is to define the particular values which exist on the scale. In this case you'll have to set the scale as the third parameter, unless you do it, the chart.xScale() will be counted as this scale automatically. So, if we'd like to zoom the chart to the area from 2010 то 2015 by Y-axis, we should use the {api:anychart.charts.Cartesian.XZoom#setToValue}**.setToValue()**{api} method and write the following:

```
	// set the yZoom
	var yZoom = chart.yZoom();

	// turn it on
	yZoom().setToValue(2010, 2015, yZoom);
```

{sample}CS\_Scroller\_03{sample}

#### Set the limits by the points count

Note that it's only Heatmaps which can be scrolled or zoomed by Y-scale.

The third variant of setting the limits of the shown is to set the number of points from start or end value exists on the axis. We set the number of points, the second boolean means if the points should be counted from the end axis value and the third parameter is the scale again (this one is optional). The point will be counted from start by default, if you need them to be counted from end, set "true" as se second value:

```
	// set the xZoom
	var xZoom = chart.xZoom();

	// turn it on
	xZoom.setToPointsCount(10, true);
```

{sample}CS\_Scroller\_04{sample}

#### Screen scrolling

Note that this method works only with ordinal scales. 

By default, the screen is moving while being scrolled. We can prevent the scrolling while the mouse button is not being released. For this option we've got the {api:anychart.charts.Cartesian.XZoom#continuous}**.continuous()**{api} method:

```
	// set the xZoom
	var xZoom = chart.xZoom();

	// prevent the scrolling while the button is not released yet
    xZoom.continuous(false);
```

{sample}CS\_Scroller\_05{sample}

#### Get the limits ratio

You can also get the limiting points ratio using {api:anychart.charts.Cartesian.XZoom#getStartRatio}**.getStartRatio()**{api} and {api:anychart.charts.Cartesian.XZoom#getEndRatio}**.getEndRatio()**{api} functions. They will return the limiting ratio values.


```
	// set the xZoom
	var xZoom = chart.xZoom();

	// Zooms series by defined points count
	xZoom.setToPointsCount(5);

	// prevent the scrolling while the button is not released yet
    chart.title("The chart shows the part from " + xZoom.getStartRatio() + " and ends at " + xZoom.getEndRatio());
```

{sample}CS\_Scroller\_06{sample}

Let's now talk about the scroller itself. Look through the next paragraph.



### Scroll

The scroll bar is rather flexible in its look and behavior. We can change the colors, sizes, positioning, etc. Let's make some changes with a couple of previous samples.


#### Orientation

With the {api:anychart.core.ui.Scroller#orientation}**.orietation()**{api} method we can set the orientation of the scroller. Let's create a simple bar chart with zoom and a scroller with orientation to the right.

```	
    // change the scroller orientation
    chart.xScroller().orientation("right");

```

{sample}CS\_Scroller\_07{sample}


#### Position

This works when our scroll bar is next to any axes. We can set the "afterAxes" or "beforeAxes" positions. The afterAxes position is set by default.

```	
    // change the scroller orientation
    chart.xScroller().position("beforeAxes");

```

{sample}CS\_Scroller\_08{sample}

#### Hiding the scroll bar

#### Changing the range

#### Colors

Fill
SelectedFill
OutsideStroke

#### Dimensions

Height
maxHeight
minHeight

#### Thumbs

### Thumbs
