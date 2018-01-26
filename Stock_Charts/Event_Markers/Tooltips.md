{:index 4}

# Event Marker Tooltips

## Overview

*Event Markers are very helpful elements of the chart, as they allow showing user explicitly an event that took place at a specific moment of time. Tooltip is an important part of Event markers, it shows detailed information when user moves the mouse over the event marker.*

*AnyChart Stock charts provide two ways to show tooltips for event markers: Built-in Tooltips and custom HTML tooltips.*

## Built-In Tooltips

*Built-in tooltips work as all other tooltips in AnyChart, learn the basics in [Tooltip](../../Common_Settings/Tooltip) article and see how it works with Event Markers:*

### Tokens

```
// add event markers
plot.eventMarkers({"groups": [
  {
    "format": "A",
    "data": [
      {
        "date": "2004-02-20",
        "description": "Cisco announced the acquisition of Andiamo Systems, Inc.",
        "short_desc": "Andiamo Systems Acquisition"
      },
      {
        "date": "2008-04-27",
        "description": "Cisco announced its intent to acquire PostPath, Inc.",
        "short_desc": "PostPath Acquisition"
      }
    ]
  }
]});

// configure the tooltips of event markers
plot.eventMarkers().tooltip().titleFormat("{%short_desc} ({%symbol})");
plot.eventMarkers().tooltip().format("Event: {%description}");
```

{sample}STOCK\_Event\_Markers\_Tooltips\_01{sample}

### Formatting Funcitons

```
// add event markers
plot.eventMarkers({"groups": [
  {
    "format": "A",
    "data": [
      {
        "date": "2004-02-20",
        "description": "Cisco announced the acquisition of Andiamo Systems, Inc."
      },
      {
        "date": "2008-04-27",
        "description": "Cisco announced its intent to acquire PostPath, Inc."
      }
    ]
  }
]});

plot.eventMarkers().tooltip().titleFormat( function (){
  return anychart.format.dateTime(this.date, "yyyy") +
         " (" + this.symbol + ")";
});

plot.eventMarkers().tooltip().format( function (){
  return "On " + anychart.format.dateTime(this.date, "MMMM dd") +
         ", " + this.description;
});
```

{sample}STOCK\_Event\_Markers\_Tooltips\_02{sample}


## Custom HTML Tooltips

*External tooltips are custom HTML elements that can be created and tuned to your taste. They are created by the means of HTML/CSS and [Events](Events) mechanism.*

```
/* show a custom tooltip
when the mouse is over a marker */
eventMarker.listen("eventMarkerMouseOver", function(e) {

  // show the tooltip
  tooltip.style.visibility = "visible"; 

  // set the text of the tooltip
  tooltip.innerHTML = e.eventMarker.description;
});

/* hide the custom tooltip
when the mouse is out of a marker */
eventMarker.listen("eventMarkerMouseOut", function() {
  tooltip.style.visibility = "hidden";
});

// set the position of custom tooltips
chart.listen("mouseMove", function(e) {

  var clientX = e["offsetX"];
  var clientY = e["offsetY"];

  tooltip.style.left = clientX + 20 + "px";
  tooltip.style.top = clientY + 10 + "px";
  tooltip.style.zIndex = 10000;
  tooltip.style.border = "solid black 2px";
});
```

{sample}STOCK\_Event\_Markers\_Tooltips\_03{sample}