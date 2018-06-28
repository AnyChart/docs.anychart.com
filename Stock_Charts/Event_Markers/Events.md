{:index 5}

# Events

## Overview

This section explains how handling [AnyChart Events](../../Common_Settings/Event_Listeners) helps to embed event markers into your application.

## Events

Here is the full list of events that work with event markers:

<table>
<tr><th>Value</th><th>Description</th></tr>
<tr><td>eventMarkersHover</td><td>Event type for hover on markers</td></tr>
<tr><td>eventMarkersSelect</td><td>Event type for select on markers</td></tr>
<tr><td>eventMarkerClick</td><td>Event type for the marker click</td></tr>
<tr><td>eventMarkerDblClick</td><td>Event type for the marker double click</td></tr>
<tr><td>eventMarkerMouseDown</td><td>Event type for the marker mouse down</td></tr>
<tr><td>eventMarkerMouseMove</td><td>Event type for the marker mouse move</td></tr>
<tr><td>eventMarkerMouseOut</td><td>Event type for the marker mouse over</td></tr>
<tr><td>eventMarkerMouseOver</td><td>Event type for the marker mouse over</td></tr>
<tr><td>eventMarkerMouseUp</td><td>Event type for the marker mouse up</td></tr>
</table>

The following sample shows how listening to these events can be used:

```
// show information when mouse is over a marker
chart.listen("eventMarkerMouseOver", function (e) {
    var symbol = e.eventMarker.symbol;
    var description = e.eventMarker.description;
    var date = e.eventMarker.date;
    document.getElementById("info").innerHTML =
      symbol + "@" + anychart.format.date(date)
      + ": " + description;
});

// hide information when mouse leaves a marker
chart.listen("eventMarkerMouseOut", function () {
    document.getElementById("info").innerHTML = "";
});

// open a url when a marker is clicked
chart.listen("eventMarkerClick", function (e) {
    var url = "https://www.google.ru/search?q=" +
              e.eventMarker.description;
    window.open(url, "_blank");
});
```

{sample}STOCK\_Event\_Markers\_Events\_01{sample}

## Interactive List

In this sample, events are used to create an interactive list showing additional information about event markers: {pg:gallery/Stock_Event_Markers/Stock_OHLC_Chart_with_Sidebar_Events_Feed}Event Markers with Sidebar List{pg}.

## HTML Tooltips

You can also use events to add custom HTML tooltips to your chart - see the [Tooltips](Tooltips) article.