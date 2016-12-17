{:index 7}

#Scroller

* [Overview](#overview)
* [Enable](#enable)
* [Adjust](#adjust)
 * [Basic Adjusting](#basic_adjusting)
 * [Background Series](#background_series)
 * [Scroller Axis](#scroller_axis)
* [Events](#events)

## Overview

AnyStock provides a lot of features and tools to a chart viewer to make the working process rather comfortable and easily navigate these time based charts. The core navigation tool is Scroller, which is described in this article.

Scroller is a complex component, which consists of the several configurable parts: Scroller itself, thumbnail series in its background (optional) and thumbs. Actually, it looks almost like a thumbnail chart which has a couple of managing tools.

Scroller in AnyStock charts is much alike basic Scroller (read about it in the [Scroller](../Common_Settings/Scroller) article). This article mostly considers those features that differ the AnyStock Scroller from the Basic one.

## Enable

Use standard {api:anychart.core.ui.Scroller#enabled}enabled(){api} method to switch the scroller on and off. While the scroller is enabled by default, it is always possible to switch it off by setting "false" to this method:

```
// turn it off
chart.scroller().enabled(false);
```

{sample}STOCK\_Scroller\_01{sample}

Also, it is possible to enable/disable the scroller by passing the "true" or "false" value straight to the {api:anychart.charts.Cartesian#xScroller}scroller(){api} method.

Let's now look at the features of the scroller which can be adjusted.

## Adjust

### Basic Adjusting

Note that the position of the scroller cannot be changed, as well as its orientation, as its function is to scroll the time (X) axis. Also, it cannot hide automatically. Though, it is possible to change the visual settings of the scroller. Look at the sample below. Zoom is set into only 10 points, thumbs are disabled, the scroller colors are changed and the range changing is prohibited. There are several methods used for causing all these changes: {api:anychart.core.stock.Scroller#selectedRange}selectedRange(){api}, {api:anychart.core.stock.Scroller#allowRange}thumbs(){api}, {api:anychart.core.stock.Scroller#fill}fill(){api}, {api:anychart.core.stock.Scroller#selectedFill}selectedFill(){api} and {api:anychart.core.stock.Scroller#allowRangeChange}allowRangeChange(){api}:

```
// adjust the scroller
chart.selectRange('2004-01-02','2004-01-15');
chart.scroller().thumbs(false);
chart.scroller().fill('green 0.1');
chart.scroller().selectedFill('green 0.5');
chart.scroller().allowRangeChange(false);
```

{sample}STOCK\_Scroller\_02{sample}

Note that opposite to basic charts scrollr, it is possible to zoom the AnyStock charts only by setting the selected range.

### Background Series

Now, as common elements for the AnyStock and the Basic scroller are changed, let's adjust some parameters that only AnyStock scroller can have. Let's add any of the [supported series](Supported_Series) to the scroller if necessary, so the scroller will display a thumbnail AnyStock chart in its background. Let's define the thumbnail series of column type and look at it:

```
// create scroller series with mapped data
chart.scroller().column(mapping);
```

{sample}STOCK\_Scroller\_03{sample}

Visit [Supported series](Supported_Series) articles to know more about series supported by AnyStock Charts.

### Scroller Axis

There's one more feature that only AnyStock scroller has - an additional axis inside, which helps to control the shown and hidden parts of the data and not to get lost. Let's disable it:

```
// disable the scroller axis
chart.scroller().xAxis(false);
```

{sample}STOCK\_Scroller\_04{sample}

We can also adjust the labels of the axis. For example, let's make them of black color and format them to show the first day of each month.

```
// adjust the scroller axis

var labels = chart.scroller().xAxis().labels();

var minorLabels = chart.scroller().xAxis().minorLabels();
    
labels.textFormatter(function() {
  return anychart.format.dateTime(this.tickValue, 'dd MMM yyyy');
});
labels.fontColor('#000');

minorLabels.textFormatter(function(){
  return anychart.format.dateTime(this.tickValue, 'dd MMM yyyy');
});
minorLabels.fontColor('#000');
```

{sample}STOCK\_Scroller\_05{sample}

## Events

When a user interacts with a chart scroller, several events are dispatched. To handle these events use event listeners (find out more about it in [Event Listeners](../Common_Settings/Event_Listeners) article).

There are 4 events that can be handled when the selected time range changes. These events can be used to handle user actions, e.g. to display a chosen time interval as text or to update any extra UI elements. Let's look at the list of those events.

Events that can be listened by a chart:
* **selectedrangebeforechange** - dispatches before user changes the selected range of the scroller
* **selectedrangechangestart** - dispatches when user starts changing a scroller, on \mouseDown\ event 
* **selectedrangechange** - dispatches when user changes a scroller somehow, on \mouseMove\ event
* **selectedrangechangefinish** - dispatches when user releases the mouse button and finishes the scroller change, on \mouseUp\ event

Now, let's create a couple of event listeners with these events. 

```
// events
chart.listen("selectedrangechangestart", function(e){
    chart.title("The selected range is: " + anychart.format.dateTime(e.firstSelected, 'dd MMM yyyy') + " - " + anychart.format.dateTime(e.lastSelected, 'dd MMM yyyy'));
});
```

{sample}STOCK\_Scroller\_06{sample}