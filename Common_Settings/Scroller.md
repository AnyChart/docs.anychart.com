# Scroller

## Overview

Sometimes when there is too much data that it cannot be displayed simultaneously keeping it comfortable for understanding. In this case we can enable the scroller.

Use {api:anychart.core.ui.Scroller#enabled}enabled(){api} method to switch the scroller on and off. Passing `true` to the {api:anychart.charts.Cartesian#xScroller}xScroller(){api} method is a shortcut to enable scroller:

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
chart.xZoom().setTo(0, 0.3);
```

{sample}CS\_Scroller\_02{sample}

### Limits by values

Another option is to define the particular values which exist on the scale. In this case you have to set the scale as the third parameter, the default xScale is used when no scale is specified. If you like to zoom the chart to the area from "Part 1" to "Part 4" on the heatmap we should use the {api:anychart.core.utils.OrdinalZoom#setToValues}setToValues(){api} method:

**Note:** only [Heat maps](../Basic_Charts/Heat_Map_Chart) support scroll or zoom by Y in this version.

```
// set zoom limits by values
chart.yZoom().setToValues("Part 1", "Part 4");
```

{sample}CS\_Scroller\_03{sample}

### Limits by the number of points

The third way of setting the limits is to set the number of points from the beginning or end of the scale. We set the number of points, the second boolean parameter defines if the points should be counted from the end of the scale and the third parameter is the scale. The point will be counted from start by default, if you need them to be counted from end, set `true` as the second value.

```
// set limits using a number of points
chart.xZoom()setToPointsCount(10, true);
```

{sample}CS\_Scroller\_04{sample}

### Get the limits ratio

To get the limiting points ratio using {api:anychart.core.utils.OrdinalZoom#getStartRatio}getStartRatio(){api} and {api:anychart.core.utils.OrdinalZoom#getEndRatio}getEndRatio(){api} methods.

```
// set the xZoom
var xZoom = chart.xZoom();

// Zooms series by defined points count
xZoom.setToPointsCount(5);

// get the limits ratio
chart.title("The chart shows the part from " + xZoom.getStartRatio() + " and ends at " + xZoom.getEndRatio());
```

{sample}CS\_Scroller\_05{sample}

### Allow range change

To limit the amount of items displayed you can use the {api:anychart.core.ui.Scroller#allowRangeChange}allowRangeChange(){api} method. 

``` 
// forbid scroller range change
chart.xScroller().allowRangeChange(false);
```
{sample}CS\_Scroller\_06{sample}

## Scroll bar

The scroll bar is flexible in its look and behavior, you can change colors, size, position, etc. 

### Orientation

With the {api:anychart.core.ui.Scroller#orientation}orientation(){api} method you can set the orientation of the scroller. 

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

Colors of the scroll bar can be easily changed with simple methods {api:anychart.core.ui.Scroller#fill}fill(){api}, {api:anychart.core.ui.Scroller#selectedFill}selectedFill(){api} and {api:anychart.core.ui.Scroller#outlineStroke}outlineStroke(){api}:

```
// set the fill color
chart.xScroller().fill("#33CC33");

// set the selected fill color
chart.xScroller().selectedFill("#339966");

// set the stroke of the bar
chart.xScroller().outlineStroke("#33CC33", 2);
```

{sample}CS\_Scroller\_09{sample}

### Size

To adjust scroll bar height (width) use the {api:anychart.core.ui.Scroller#height}height(){api} method. There are also  {api:anychart.core.ui.Scroller#maxHeight}maxHeight(){api} and {api:anychart.core.ui.Scroller#minHeight}minHeight(){api} methods which are useful when your charts are being resized.

```
// set the bar height
chart.xScroller().minHeight(5);

// set the bar height
chart.xScroller().maxHeight(35);
```

{sample}CS\_Scroller\_10{sample}

### Thumbs

The scroll bar thumbs can be adjusted too. You change their look, dimensions or enable/disable them. 
 - {api:anychart.core.ui.Scroller.Thumbs#enabled}enabled(){api} method enables and disables thumbs.
 - {api:anychart.core.ui.Scroller.Thumbs#autoHide}autoHide(){api} method sets if thumbs are displayed only when the scroll bar is hovered.
 - {api:anychart.core.ui.Scroller.Thumbs#fill}fill(){api} and {api:anychart.core.ui.Scroller.Thumbs#stroke}stroke(){api} color thumbs in the default state.
 - {api:anychart.core.ui.Scroller.Thumbs#hovered}hovered(){api} to color thumbs in hovered state.

```
// adjusting the thumbs behavior and look
chart.xScroller().thumbs().autoHide(true);
chart.xScroller().thumbs().hoverFill("#FFD700");
```

{sample}CS\_Scroller\_11{sample}

## Live update

By default, the chart is changing while being scrolled. To redraw a chart only when the mouse button is released use the {api:anychart.core.utils.OrdinalZoom#continuous}continuous(){api} method. This may improve user experience when you show very large data sets.

```
// prevent the scrolling while the button is not released yet
chart.xZoom().continuous(false);
```

{sample}CS\_Scroller\_12{sample}

### Auto hide

You can prevent the scroller from showing if there is no need in it. Use the {api:anychart.core.ui.Scroller#autoHide}autoHide(){api} method in such cases:

``` 
// autoHide the scroller
chart.xScroller().autoHide(true);
```

In this sample a dataSet has 20 points, zoom settings allow to show only 15. You can remove points simply by clicking them, and when 15 or less are left - scroll bar will disappear.

{sample}CS\_Scroller\_13{sample}

## Events

Basic information about event listeners can be found in the [Event Listeners tutorial](Event_Listeners).

There are three events which scroller can dispatch: 
- **scrollerchange**
- **scrollerchangestart**
- **scrollerchangefinish**.

These events are dispatched when we drag the scroll bar, click on it or change it's size. All events provide information about the source of changes (thumbDrag, selectedRangeDrag or backgroundClick), the startRatio and endRatio values.

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