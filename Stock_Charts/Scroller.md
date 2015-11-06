{:index 8}

#Scroller

* [Overview](#overview)
* [Enable](#enable)
* [Adjust](#adjust)
 * [Basic adjusting](#basic_adjusting)
 * [Background series](#background_series)
 * [Scroller axis](#scroller_axis)
* [Events](#events)


## Overview

AnyChart Stock provides a lot of features and tools to a chart viewer to make the working process rather comfortable and easily navigate these time based charts. The core navigation tool is Scroller, which is described in this article.

Scroller is a complex component, which consists of the several configurable parts: Scroller itself, thumbnail series in its background (optional) and thumbs. Actually, it looks almost like a thumbnail chart which has a couple of managing tools.

Scroller in Stocks is much alike basic Scroller, which you can find information about [here](../Common_Settings/Scroller). In this article we will mostly focus on those features that differ the Stock Scroller from the Basic one.

## Enable

We use standard {api:anychart.core.ui.Scroller#enabled}**.enabled()**{api} method to switch the scroller on and off. While the scroller is enabled by default, you can always switch it off by setting "false" to this method :

```
	// turn it off
	chart.scroller.enabled(false);
```

{sample}STOCK\_Scroller\_01{sample}

Also, we can pass the "true" or "false" value straight to the {api:anychart.charts.Cartesian#xScroller}**.scroller()**{api} method.

Now you can see that there is a scroller shown up, but the general view has not changed (though, you can drag the scroller thumbs and change the view). 

Let's now look at the features of the scroller we can adjust.


## Adjust

As we have already noted, the Stock Scroller has both the Basic Scroller features and special ones. Let's work with basic features first.

### Basic adjusting

Zoom, thumbs, scroller

Note that we cannot change the position of the scroller as well as its orientation, as its function is to scroll the time (X) axis. Also, in cannot hide automatically. Though, we are able to change the visual settings of the scroller. Look at the sample below. We have 

Colors
allowRangeChange

### Background series


We can add any of [supported series](Supported_Series) to the scroller if necessary, so the scroller will display a thumbnail stock in its background. Let's define the thumbnail series of line type and look at it:

{sample}{sample}


// create scroller series with mapped data
chart.scroller().column(mapping);



от обычного отличается тем, что
 - на нем можно рисовать серии (из тех же трех что на стоках)
 - нельзя позиционировать хз где
 - на нем можно создать ось - чтоб было лучше видно, какую часть данных просматриваем. 
