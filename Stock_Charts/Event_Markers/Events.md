{:index 5}

# Event Markers Events

## Overview

Using AnyChart [Event handling](../../Common_Settings/) with Event Markers allows you to integrate them in your application in more deep and meaningfull way.

## Events

To handle event markers events listen to appropriate events like this:

```
// show information when mouse is over a marker
chart.listen("eventmarkermouseover", function (e) {
    var symbol = e.eventMarker.symbol;
    var description = e.eventMarker.description;
    var date = e.eventMarker.date;
    document.getElementById("info").innerHTML =
      symbol + "@" + anychart.format.date(date)
      + ": " + description;
});

// hide information when mouse leaves a marker
chart.listen("eventmarkermouseout", function () {
    document.getElementById("info").innerHTML = "";
    chart.title("Event Marker Events: Move the mouse over or click markers");
});

// open a new window on click
chart.listen("eventmarkerclick", function (e) {
    var url = "https://www.google.ru/search?q=" +
              e.eventMarker.description;
    window.open(url);
});
```

{sample}STOCK\_Event\_Markers\_Events\_01{sample}

## Attach List Element

Here is a sample of attaching a list element: {pg:gallery/Stock_Event_Markers/Stock_OHLC_Chart_with_Sidebar_Events_Feed}Event Markers with Sidebar List{pg}

## Create HTML Tooltips

Creating HTML tooltips is shown in [Tooltips](Tooltips) article.

## Display info box

Coming soon.