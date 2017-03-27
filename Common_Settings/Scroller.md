#Scroller

* [Overview](#overview)
* [Enable](#enable)
* [Adjust](#adjust)
 * [Zoom](#zoom)
 * [Scroll](#scroll)
 * [Thumbs](#thumbs)
* [Events](#events)

## Overview

Sometimes we've got so much data that we cannot display it all, keeping it comfortable for understanding. In this case we can enable the scroller for the chart axes.

All X / Y Axes based charts (Bar, Line, Area, Candlestick, OHLC, Combinations, etc.) can have Axes with scroll bar. 

## Enable

We use standard {api:anychart.core.ui.Scroller#enabled}enabled(){api} method to switch the scroller on and off. Let's create a simple column chart and enable the scroller on it:

```
	// turn it on
	var chart = anychart.column();
	chart.xScroller(true);
```

{sample}CS\_Scroller\_01{sample}

Also, we can pass the "true" value straight to the {api:anychart.charts.Cartesian#xScroller}xScroller(){api} method.

Now you can see that there is a scroller shown up, but the general view has not changed (though, you can drag it). That's because we should zoom the chart - set the area we'd like to display.

## Adjust

In this section we will consider the zoom and scroll settings of a chart. 

### Zoom 

First of all, we need to define that area of the chart that we'd like to have being displayed. We can do it differently, in accordance with our needs and preferences.

#### Set the limits by ratio

The simplest way of limiting the show area is using the ratio. We have the {api:anychart.core.utils.OrdinalZoom#setTo}setTo(){api} method for that. Use two values with this method: the start ratio value (e.g. 0) and the end one (e.g. 0.3). Look at the following sample.

```
	// turn it on
	var xZoom = chart.xZoom();
	xZoom.setTo(0, 0.3);
```

{sample}CS\_Scroller\_02{sample}

#### Set the limits by values

Another option is to define the particular values which exist on the scale. In this case you have to set the scale as the third parameter, unless you do this, the default xScale is used. So, if we'd like to zoom the chart to the area from Part 1 to Part 4 by Y-axis, we should use the {api:anychart.core.utils.OrdinalZoom#setToValue}setToValue(){api} method and write the following:

```
	// set the yZoom
    var yZoom = chart.yZoom();

    // turn it on
    yZoom.setToValues("Part 1", "Part 4");
```

{sample}CS\_Scroller\_03{sample}

Note that it's only Heat maps which can be scrolled or zoomed by Y-scale.

#### Set the limits by the points count

The third way of setting the limits is to set the number of points from the beginning or end of the scale. We set the number of points, the second boolean parameter defines if the points should be counted from the end of the scale and the third parameter is the scale. The point will be counted from start by default, if you need them to be counted from end, set "true" as se second value. Let's consider this feature in the next sample, showing us the information about new Internet users in the Initech company.

```
// set the xZoom
var xZoom = chart.xZoom();

// turn it on
xZoom.setToPointsCount(10, true);
```

{sample}CS\_Scroller\_04{sample}

#### Screen scrolling

Note that this method works only with ordinal scales. 

By default, the chart is changing while being scrolled. We can prevent this and redraw chart only when the mouse button is released, this may improve user experience when you show very large data sets. For this option we've got the {api:anychart.core.utils.OrdinalZoom#continuous}continuous(){api} method:

```
// set the xZoom
var xZoom = chart.xZoom();

// prevent the scrolling while the button is not released yet
 xZoom.continuous(false);
```

{sample}CS\_Scroller\_05{sample}

#### Get the limits ratio

You can also get the limiting points ratio using {api:anychart.core.utils.OrdinalZoom#getStartRatio}getStartRatio(){api} and {api:anychart.core.utils.OrdinalZoom#getEndRatio}getEndRatio(){api} methods. They will return the limiting ratio values.


```
	// set the xZoom
	var xZoom = chart.xZoom();

	// Zooms series by defined points count
	xZoom.setToPointsCount(5);

	// get the limits ratio
    chart.title("The chart shows the part from " + xZoom.getStartRatio() + " and ends at " + xZoom.getEndRatio());
```

{sample}CS\_Scroller\_06{sample}

Let's now talk about the scroller itself. Look through the next paragraph.



### Scroll

The scroll bar is rather flexible in its look and behavior. We can change the colors, sizes, positioning, etc. Let's make some changes with a couple of previous samples.


#### Orientation

With the {api:anychart.core.ui.Scroller#orientation}orientation(){api} method we can set the orientation of the scroller. Let's create a simple bar chart with zoom and a scroller with orientation to the right.

```	
    // change the scroller orientation
    chart.xScroller().orientation("right");

```

{sample}CS\_Scroller\_07{sample}


#### Position

Scroller can be displayed in "afterAxes" or "beforeAxes" positions. The afterAxes position is set by default.

```	
    // change the scroller orientation
    chart.xScroller().position("beforeAxes");

```

{sample}CS\_Scroller\_08{sample}

#### Autohide

You can prevent the scroller from showing if there is no need in it. For example, if your dataSet has 20 points while you allow to show only 15 and you've removed five or more points by clicking on them, there's no need in scroll bar anymore. This is the example of a situation when you might need this function. We use {api:anychart.core.ui.Scroller#autoHide}autoHide(){api} method for it:

```	
    // autoHide the scroller
    chart.xScroller().autoHide(true);

```
{sample}CS\_Scroller\_09{sample}

#### Changing the range

While your chart displays only a part of all information, you might want to manage the amount of displayed using {api:anychart.core.ui.Scroller#allowRangeChange}allowRangeChange(){api}. This method is used to allow and prevent changing the amount of displayed by lengthening of shortening the scroll bar range. It's allowed by default; let's prevent this using the {api:anychart.core.ui.Scroller#allowRangeChange}allowRangeChange(){api} method.

```	
    // change the scroller orientation
    chart.xScroller().allowRangeChange(false);

```
{sample}CS\_Scroller\_10{sample}

#### Colors

Colors of the scroll bar can be easily changed with simple methods {api:anychart.core.ui.Scroller#fill}fill(){api}, {api:anychart.core.ui.Scroller#selectedFill}selectedFill(){api} and {api:anychart.core.ui.Scroller#outlineStroke}outlineStroke(){api}. Let's now create an example of a column chart with modified scroll bar. The {api:anychart.core.ui.Scroller#fill}fill(){api} method colors the background of the scroll bar and the {api:anychart.core.ui.Scroller#selectedFill}selectedFill(){api} method colors the bar itself.

```
	// set the fill color
    chart.xScroller().fill("#33CC33");

    // set the selected fill color
    chart.xScroller().selectedFill("#339966");

    // set the stroke of the bar
    chart.xScroller().outlineStroke("#33CC33", 2);
```

{sample}CS\_Scroller\_11{sample}

#### Dimensions

Now, let's adjust the scroll bar for the previous sample. We can set the scroll bar's height using the {api:anychart.ui.Scroller#height}height(){api} setter method. There are also methods {api:anychart.ui.Scroller#maxHeight}maxHeight(){api} and {api:anychart.ui.Scroller#minHeight}minHeight(){api} which are rather useful when your charts are being resized - these methods help to control the dimensions of the scroll bar and the charts' general view as a consequence. Let's look at the following sample.

```
    // set the bar height
    xScroller.minHeight(5);

    // set the bar height
    xScroller.maxHeight(35);
```

{sample}CS\_Scroller\_12{sample}

### Thumbs

The scroll bar thumbs can be adjusted too. We can change its look, dimensions or enable/disable them. There are several methods help us to do that: 
 - {api:anychart.core.ui.Scroller.Thumbs#enabled}enabled(){api} method needs a boolean value: when "true", thumbs are enabled. It returns "true" by default.
 - {api:anychart.core.ui.Scroller.Thumbs#autoHide}autoHide(){api} method needs a value of boolean type as well, when "true", thumbs are displayed only when the scroll bar is hovered. Returns "false" by default.
 - {api:anychart.core.ui.Scroller.Thumbs#fill}fill(){api} colors the thumbs.
 - {api:anychart.core.ui.Scroller.Thumbs#stroke}stroke(){api} method is being used for stroking the thumbs.
 - {api:anychart.core.ui.Scroller.Thumbs#hoverFillhoverFill(){api} and {api:anychart.core.ui.Scroller.Thumbs#hoverStroke}hoverStroke(){api} are used for coloring and stroking the thumbs in hovered state accordingly.

 Let's create an example with thumbs adjusted.

```
// set the thumbs
    var thumbs = xScroller.thumbs();

    // adjusting the thumbs
    thumbs.autoHide(true);
    thumbs.hoverFill("#FFD700");
	
```

{sample}CS\_Scroller\_13{sample}

Open any sample in our playground and try to use other methods to see and understand how they work.


## Events

As the scroller is an interactive object, which changing affects the view of the chart, it dispatches some events. You can find a lot of information about event listeners in the [Event Listeners tutorial](Event_Listeners).

There are three events, which our scroller can dispatch due to changes made on it: **scrollerchange**, **scrollerchangestart**, and **scrollerchangefinish**. These events are dispatched when we drag the scrollbar itself or its limits, making it show us more or less of the chart. All of them provide information about the source of changes (thumbDrag, selectedRangeDrag or backgroundClick), the startRatio and endRatio values, which then can be somehow used. Let's show this in a sample.

Here we created a listener of the **scrollerchangefinish** event. The values it returns then are shown in the chart title.


```
// adding a listener
        scroller.listen("scrollerchangefinish", function(e){
            var startRatio = e.startRatio;
            var endRatio = e.endRatio;
            // change the chart title
            chart.title("The chart shows the part from " + startRatio + " and ends " + endRatio);
        });
    
```

{sample}CS\_Scroller\_14{sample}
