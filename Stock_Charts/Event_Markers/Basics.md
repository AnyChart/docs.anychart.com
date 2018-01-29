{:index 2}

# Event Markers Basics

## Overview

Event Markers are very helpful elements of the chart, as they allow showing user explicitly an event that took place at a specific moment of time.

This article explains how to add event markers to a chart, how to create different markers groups, and how to configure the appearance.

Check out [Event Marker Tooltips](Tooltips) and [Event Marers Events](Events) to learn more.

## Quick Start

This is a basic sample that shows how to add single marker group to a chart:

{sample}STOCK\_Event\_Markers\_Basic\_01{sample}

## Data

The only required field in an event marker is date, all other fields can be choosen by you. By default the description field is shown in built-in tooltip and format field is used as the source of the symbol.

### Array

Event markers can be loaded into the chart or plot from a array of JSON objects of the following format:

```
[
  {
    "format": "J",
    "data": [
      {
        "date": "2016-01-15",
        "description": "Event Description",
        "customField": "some data"
      },
      {
        "date": "2016-01-21",
        "description": "Event Description",
        "customField": "some data"
      }
   },
  {
    "format": "G",
    "data": [
      {
        "date": "2016-01-15",
        "description": "Event Description"
      },
      {
        "date": "2016-01-21",
        "description": "Event Description"
      }
   }
]   
```

{sample}STOCK\_Event\_Markers\_Basic\_02{sample}

### Method

Or you can pass array to the {api:anychart.core.stock.eventMarkers.Controller#group}group(){api} method and create groups. You can create as many event marker groups as you need and use the same or different symbols:

```
var eventMarkers = plot.eventMarkers();
eventMarkers.group(0, [{date: '2006-10-12', description: 'Event A'}]);
eventMarkers.group(1, [{date: '2006-10-12', description: 'Event B1'}, {date: '2006-12-06', description: 'Event B2'}]).format("B");
```

{sample}STOCK\_Event\_Markers\_Basic\_03{sample}

## Appearance

Configuring appearance is as easy as with any other element of AnyChart. Choose a shape, color and configure a connector of event markers like this:

```
var eventMarkers = plot.eventMarkers();

// set event markers type
eventMarkers.type('pin');

// set hovered fill
eventMarkers.hovered().fill('#ff6e40');
```

{sample}STOCK\_Event\_Markers\_Basic\_04{sample}

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

{sample}STOCK\_Event\_Markers\_Basic\_05{sample}