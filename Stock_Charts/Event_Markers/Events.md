{:index 5}

# Event Markers Events

## Overview

*Using AnyChart [Event handling](../../Common_Settings/) with Event Markers allows you to integrate them in your application in more deep and meaningfull way.*

## Events

*To handle event markers events listen to appropriate events like this:*

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

*Here is a sample of attaching a list element: {pg:gallery/Stock_Event_Markers/Stock_OHLC_Chart_with_Sidebar_Events_Feed}Event Markers with Sidebar List{pg}*

## HTML Tooltips

*Creating HTML tooltips is shown in [Tooltips](Tooltips) article.*

## Info Box

Coming soon.