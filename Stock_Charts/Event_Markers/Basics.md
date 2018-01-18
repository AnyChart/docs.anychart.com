{:index 2}

# Event Markers Basics

## Overview

Event Markers are very helpful elements of the chart, as they allow showing user explicitly an event that took place at a specific moment of time.

This article explains how to add event markers to a chart, how to create different markers groups, and how to configure the appearance.

Check out [Event Marker Tooltips](Tooltips) and [Event Marers Events](Events) to learn more.

## Quick Start

This is a basic sample that shows how to add single marker group to a chart:

```
// add event markers
var eventMarkers = plot.eventMarkers();
eventMarkers.data([
  {
    date: "2004-02-20",
    description: "Cisco announced the acquisition " +
                 "of Andiamo Systems, Inc."
  },
  {
    date: "2008-04-27",
    description: "Cisco announced its intent " +
                 "to acquire PostPath, Inc."
  }
]);  
```

{sample}STOCK\_Event\_Markers\_Basic\_01{sample}

## Data

The only required field in an event marker is date, all other fields can be choosen by you. By default the description field is shown in built-in tooltip and format field is used as the source of the symbol.

### Array

Event markers can be loaded into the chart or plot from an array of JSON objects:

```
// add two groups of event markers
plot.eventMarkers({ groups: [
  {
     "format": "A",
     "data": [
       {
         "date": "2004-02-20",
         "description": "Cisco announced the acquisition " +
                        "of Andiamo Systems, Inc."
       },
       {
         "date": "2008-04-27",
         "description": "Cisco announced its intent " +
                        "to acquire PostPath, Inc."
       },
     ]
  },
  {
     "format": "B",
     "data": [
       {
         "date": "2009-02-10",
         "description": "Cisco and Tata Consultancy Services " +
                        "announce strategic alliance."
       },
       {
         "date": "2009-02-12",
         "description": "Cisco unveils 'Intelligent Urbanisation' " +
                        "vision for Bengaluru."
       }
     ]
  }
]});
```

{sample}STOCK\_Event\_Markers\_Basic\_02{sample}

### Methods

Or you can pass array to the {api:anychart.core.stock.eventMarkers.Controller#group}group(){api} method and create groups. You can create as many event marker groups as you need and use the same or different symbols:

```
var eventMarkers = plot.eventMarkers();

// add the first group of event markers
eventMarkers.group(0, [
  {
    date: "2004-02-20",
    description: "Cisco announced the acquisition " +
                 "of Andiamo Systems, Inc."
  },
  {
    date: "2008-04-27",
    description: "Cisco announced its intent " +
                 "to acquire PostPath, Inc."
  }
]);

// set the symbol of the first group
eventMarkers.group(0).format("A");

// add the second group of event markers
eventMarkers.group(1, [
  {
    date: "2009-02-10",
    description: "Cisco and Tata Consultancy Services " +
                   "announce strategic alliance."
  },
  {
    date: "2009-02-12",
    description: "Cisco unveils 'Intelligent Urbanisation' " +
                   "vision for Bengaluru."
  }
]);

// set the symbol of the second group
eventMarkers.group(1).format("B");
```

{sample}STOCK\_Event\_Markers\_Basic\_03{sample}

## Appearance

Configuring appearance is as easy as with any other element of AnyChart. Choose a shape, color and configure a connector of event markers like this:

```
var eventMarkers = plot.eventMarkers();

// configure the type and appearance of markers
eventMarkers.normal().type("rect");
eventMarkers.normal().fill("#00802b");
eventMarkers.hovered().fill("#a0d3b1");
eventMarkers.selected().fill("#00cc44"); 
```

{sample}STOCK\_Event\_Markers\_Basic\_04{sample}

```
// add event markers
var eventMarkers = plot.eventMarkers();
eventMarkers.data([
  {
    date: "2004-02-20",
    description: "Cisco announced the acquisition " +
                 "of Andiamo Systems, Inc.",
    normal:   {fill: "#00802b", type: "rect"},
    hovered:  {fill: "#a0d3b1"},
    selected: {fill: "#00cc44"}   
  },
  {
    date: "2008-04-27",
    description: "Cisco announced its intent " +
                 "to acquire PostPath, Inc.",
    normal:   {fill: "#802b00", type: "circle"},
    hovered:  {fill: "#d3b1a0"},
    selected: {fill: "#cc4400"}   
  }
]);
```

{sample}STOCK\_Event\_Markers\_Basic\_05{sample}

## Position

Event markers can be placed on the X axis, or be bound to any series on the plot. When bound to a series - you can define which value is used in case of multi-value series (e.g. OHLC). When there is only one series on the plot and position is set to `'series'` - chart will determine this automatically.

```
// get eventMarkers
var eventMarkers = plot.eventMarkers();

// set event markers position settings
eventMarkers.position('series');
eventMarkers.fieldName('high');
eventMarkers.seriesId('someSeries');
```

{sample}STOCK\_Event\_Markers\_Basic\_06{sample}