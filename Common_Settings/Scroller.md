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

We use standard {api:anychart.core.ui.Scroller#enabled}**.enabled()**{api} method to switch the scroller on. Let's create a simple bar chart and enable the scroller on it:

```
	// turn it on
	var chart = anychart.bar();
	....
	chart.yScroller(true);
	....
```

{sample}CS\_Scroller\_01{sample}

Now you can see that there is a scrollet shown up, but the general view has not changed. That's because we should zoom the chart - set the area we'd like to display.

## Adjust

In this section we will consider the zooming and viewing settings of the chart. 

### Zoom

First of all, we need to define that area of the chart that we'd like to have being displayed. We can do it differently, in accordance with out needs and preferences.

The simplest way of limiting the show area is using the ratio. We've got the {api:anychart.charts.Cartesian.XZoom#setTo}**.setTo()**{api} method for that. Use two values with this method: the start ratio value (e.g. 0) and the end one (e.g. 0.3). Look at the following sample.

```
	// turn it on
	chart.xZoom().setTo(0, 0.3);
```

{sample}CS\_Scroller\_02{sample}

Another option is to define the particular values which exist on the scale. In this case you'll have to set the scale as the third parameter, unless you do it, the chart.xScale() will be counted as this scale automatically. So, if we'd like to zoom the chart to the area from 2010 то 2015 by Y-axis, we should use the {api:anychart.charts.Cartesian.XZoom#setToValue}**.setToValue()**{api} method and write the following:

```
	// set the yZoom
	var yZoom = chart.yZoom();

	// turn it on
	chart.yZoom().setToValue(2010, 2015, yZoom);
```

{sample}CS\_Scroller\_03{sample}

Note that it's only Heatmaps which can be scrolled or zoomed by Y-scale.