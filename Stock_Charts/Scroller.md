{:index 7}

# Scroller

## Overview

Scroller is a main navigational control AnyStock provides to a chart viewer to make chart comprehension process comfortable and easy. 

Scroller is a complex component that consists of the several configurable parts: Scroller itself, optional thumbnail series in its background and thumbs.

Note: this is a Scroller for Stock charts, basic charts have their own [basic scroller](../Common_Settings/Scroller) with slightly different settings.

The scroller is enabled by default, it is possible to enable/disable the scroller by passing the "true" or "false" value to the {api:anychart.charts.Stock#scroller}scroller(){api} method or {api:anychart.core.stock.Scroller#enabled}enabled(){api} method:

```
// turn scroller on
chart.scroller(true);

// turn it off
chart.scroller().enabled(false);
```

{sample}STOCK\_Scroller\_01{sample}

## Basics

In Stock charts the position of the scroller cannot be changed, as well as its orientation, as its function is to scroll the time (X) axis. 

There are several basic methods to configure the scroller:
- {api:anychart.charts.Stock#selectRange}selectRange(){api}
- {api:anychart.core.stock.Scroller#allowRange}thumbs(){api}
- {api:anychart.core.stock.Scroller#fill}fill(){api}
- {api:anychart.core.stock.Scroller#selectedFill}selectedFill(){api}
- {api:anychart.core.stock.Scroller#allowRangeChange}allowRangeChange(){api}

```
// adjust the scroller
chart.selectRange('2004-01-02','2004-01-15');
chart.scroller().thumbs(false);
chart.scroller().fill('green 0.1');
chart.scroller().selectedFill('green 0.5');
chart.scroller().allowRangeChange(false);
```

{sample}STOCK\_Scroller\_02{sample}

### Background Series

Scroller can display one of the [supported series](Series/Supported_Series) in the background. It is done pretty much like creating a series in a plot:

```
// create scroller series with mapped data
chart.scroller().column(mapping);
```

{sample}STOCK\_Scroller\_03{sample}

Visit [Supported series](Series/Supported_Series) article to know more about series supported by AnyStock Charts.

### Scroller Axis

Stock scroller has an extra X axis inside, it can be disabled or configured using the {api:anychart.core.stock.Scroller#xAxis}xAxis(){api} method:

```
// disable the scroller axis
chart.scroller().xAxis(false);
```

{sample}STOCK\_Scroller\_04{sample}

To adjust the labels of the scroller axis work with it like with [any other axis in Stock Charts](Axes).

```
// access labels
labels = chart.scroller().xAxis().labels();
minorLabels = chart.scroller().xAxis().minorLabels();

// set major labels text format
labels.format(function() {
  return "'" + anychart.format.dateTime(this.tickValue, "yy");
});
// set labels color
labels.fontColor('#000000');

// set minor labels text format
minorLabels.format(function(){
  return anychart.format.dateTime(this.tickValue, 'MMM, d');
});

// set minor labels font 
minorLabels.fontColor('#000000');
minorLabels.fontSize(9);
```

{sample}STOCK\_Scroller\_05{sample}

## Events

You can handle scroller events using event listeners (find out more about them in [Event Listeners](../Common_Settings/Event_Listeners) article).

There are 4 events that can be handled when the selected time range changes. These events can be used to handle user actions, e.g. to display a chosen time interval as text or to update any extra UI elements. 

Events that can be listened by a chart:
- **selectedrangebeforechange** - dispatches before user changes the selected range of the scroller
- **selectedrangechangestart** - dispatches when user starts changing a scroller, on *mouseDown* event 
- **selectedrangechange** - dispatches when user changes a scroller somehow, on *mouseMove* event
- **selectedrangechangefinish** - dispatches when user releases the mouse button and finishes the scroller change, on *mouseUp* event

Here is a sample listener:

```
// events
chart.listen("selectedrangechangestart", function(e){
    chart.title("The selected range is: " + anychart.format.dateTime(e.firstSelected, 'dd MMM yyyy') + " - " + anychart.format.dateTime(e.lastSelected, 'dd MMM yyyy'));
});
```

Here is a live sample:

{sample}STOCK\_Scroller\_06{sample}

## Preserve Selected Range

The {api:anychart.charts.Stock#preserveSelectedRangeOnDataUpdate}preserveSelectedRangeOnDataUpdate(){api} method is used to define the behavior of Scroller when data is streamed. By default the selected range is visually the same, if set to 'true' - it stays the same logically. 

```
chart.preserveSelectedRangeOnDataUpdate(true);
```