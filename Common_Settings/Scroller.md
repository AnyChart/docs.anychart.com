#Scroller

* [Overview](#overview)
* [Zoom Settings](#zoom_settings)
 * [Limits by ratio](#limits_by_ratio)
 * [Limits by values](#limits_by_values)
 * [Limits by the number of points](#limits_by_the_number_of_points)
 * [Get the limits ratio](#get_the_limits_ratio)
 * [Allow range change](#allow_range_change) 
* [Scroll bar](#scroll_bar)
 * [Colors](#colors)
 * [Size](#size)
 * [Thumbs](#thumbs)
* [Live update](#live_update)
* [Auto hide](#auto_hide)
* [Events](#events)

## Overview

Sometimes when there is too much data that it cannot be displayed simultaneously keeping it comfortable for understanding. In this case we can enable the scroller.

Use {api:anychart.core.ui.Scroller#enabled}enabled(){api} method to switch the scroller on and off. Passing "true" to the {api:anychart.charts.Cartesian#xScroller}xScroller(){api} method is a shortcut to enable scroller:


```
// turn on X Scroller
var chart = anychart.column();
chart.xScroller(true);

// disable scroller
chart.xScroller().enabled(false);
```

{sample}CS\_Scroller\_01{sample}

## Zoom Settings

### Limits by ratio

The simplest way of limiting the show area is using the ratio. Do this with the {api:anychart.core.utils.OrdinalZoom#setTo}setTo(){api} method for that. Use two values with this method: the start ratio value (e.g. 0) and the end one (e.g. 0.3):

```
// set zoom ratio
chart.xZoom.setTo(0, 0.3);
```

{sample}CS\_Scroller\_02{sample}

### Limits by values

Another option is to define the particular values which exist on the scale. In this case you have to set the scale as the third parameter, the default xScale is used when no scale is specified. If you like to zoom the chart to the area from "Part 1" to "Part 4" on the heatmap we should use the {api:anychart.charts.Cartesian.XZoom#setToValues}setToValues(){api} method:

**Note:** only [Heat maps](../Basic_Charts_Types/Heat_Map_Chart) support scroll or zoom by Y in this version.

```
// set zoom limits by values
chart.yZoom().setToValues("Part 1", "Part 4");
```

{sample}CS\_Scroller\_03{sample}

### Limits by the number of points

The third way of setting the limits is to set the number of points from the beginning or end of the scale. We set the number of points, the second boolean parameter defines if the points should be counted from the end of the scale and the third parameter is the scale. The point will be counted from start by default, if you need them to be counted from end, set "true" as se second value.

```
// set limits using a number of points
chart.xZoom()setToPointsCount(10, true);
```

{sample}CS\_Scroller\_04{sample}

### Get the limits ratio

To get the limiting points ratio using {api:anychart.charts.Cartesian.XZoom#getStartRatio}getStartRatio(){api} and {api:anychart.charts.Cartesian.XZoom#getEndRatio}getEndRatio(){api} methods.

```
// set the xZoom
var xZoom = chart.xZoom();

// Zooms series by defined points count
xZoom.setToPointsCount(5);

// get the limits ratio
chart.title("The chart shows the part from " + xZoom.getStartRatio() + " and ends at " + xZoom.getEndRatio());
```

{sample}CS\_Scroller\_06{sample}

### Allow range change

While your chart displays only a part of all information, you might want to manage the amount of displayed using {api:anychart.core.ui.Scroller#allowRangeChange}allowRangeChange(){api}. This method is used to allow and prevent changing the amount of displayed by lengthening of shortening the scroll bar range. It's allowed by default; let's prevent this using the {api:anychart.core.ui.Scroller#allowRangeChange}allowRangeChange(){api} method.

``` 
// change the scroller orientation
chart.xScroller().allowRangeChange(false);
```
{sample}CS\_Scroller\_10{sample}

## Scroll bar

The scroll bar is flexible in its look and behavior, you can change colors, size, position, etc. 

### Orientation

With the {api:anychart.core.ui.Scroller#orientation}orientation(){api} method we can set the orientation of the scroller. 

```	
// change the scroller orientation
chart.xScroller().orientation("top");
chart.yScroller().orientation("left");
```

{sample}CS\_Scroller\_07{sample}

### Position

Scroller can be displayed in "afterAxes" or "beforeAxes" positions. The "afterAxes" position is set by default.

```	
// change the scroller orientation
chart.xScroller().position("beforeAxes");
```

{sample}CS\_Scroller\_08{sample}

### Colors

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

### Size

To adjust scroll bar height (width) use the {api:anychart.ui.Scroller#height}height(){api} method. There are also  {api:anychart.ui.Scroller#maxHeight}maxHeight(){api} and {api:anychart.ui.Scroller#minHeight}minHeight(){api} methods which are useful when your charts are being resized.

```
// set the bar height
chart.xScroller().minHeight(5);

// set the bar height
chart.xScroller().maxHeight(35);
```

{sample}CS\_Scroller\_12{sample}

### Thumbs

The scroll bar thumbs can be adjusted too. You change their look, dimensions or enable/disable them. 
 - {api:anychart.core.ui.Scroller.Thumbs#enabled}enabled(){api} method enables and disables thumbs.
 - {api:anychart.core.ui.Scroller.Thumbs#autoHide}autoHide(){api} method sets if thumbs are displayed only when the scroll bar is hovered.
 - {api:anychart.core.ui.Scroller.Thumbs#fill}fill(){api} and {api:anychart.core.ui.Scroller.Thumbs#stroke}stroke(){api} color thumbs in the default state.
 - {api:anychart.core.ui.Scroller.Thumbs#hoverFillhoverFill(){api} and {api:anychart.core.ui.Scroller.Thumbs#hoverStroke}hoverStroke(){api} color thumbs in hovered state.

```
// adjusting the thumbs behavior and look
xScroller.thumbs().autoHide(true);
xScroller.thumbs().hoverFill("#FFD700");
```

{sample}CS\_Scroller\_13{sample}

## Live update

By default, the chart is changing while being scrolled. It can be prevented. To redraw a chart only when the mouse button is released use the {api:anychart.charts.Cartesian.XZoom#continuous}continuous(){api} method. This may improve user experience when you show very large data sets.

```
// prevent the scrolling while the button is not released yet
chart.xZoom().continuous(false);
```

{sample}CS\_Scroller\_05{sample}

### Auto hide

You can prevent the scroller from showing if there is no need in it. For example, if your dataSet has 20 points while you allow to show only 15 and you've removed five or more points by clicking on them, there's no need in scroll bar anymore. Use the {api:anychart.core.ui.Scroller#autoHide}autoHide(){api} method in such cases:

``` 
// autoHide the scroller
chart.xScroller().autoHide(true);
```
{sample}CS\_Scroller\_09{sample}

## Events

Basic information about event listeners can be found in the [Event Listeners tutorial](Event_Listeners).

There are three events which scroller can dispatch: **scrollerchange**, **scrollerchangestart**, and **scrollerchangefinish**.These events are dispatched when we drag the scroll bar. All events provide information about the source of changes (thumbDrag, selectedRangeDrag or backgroundClick), the startRatio and endRatio values.

Here is the sample of **scrollerchangefinish** event listener:

```
// add a listener
chart.xScroller().listen("scrollerchangefinish", function(e){
    var startRatio = e.startRatio;
    var endRatio = e.endRatio;
    // change the chart title
    chart.title("The chart shows the part from " + startRatio + " and ends " + endRatio);
});
```

{sample}CS\_Scroller\_14{sample}
