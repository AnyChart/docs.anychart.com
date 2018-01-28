{:index 2}

# Event Markers Basics

## Overview

An event marker is an element of the chart indicating an event that took place at a certain time. As a rule, each marker has a text symbol, and the description of events is shown in tooltips.

This article explains how to add event markers, group them, and configure their appearance.

To learn more, see the [Tooltips](Tooltips) and [Events](Events) articles.

## Quick Start

To add event markers, pass your data to the {api:anychart.core.stock.Plot#eventMarkers}eventMarkers(){api} method.

The only thing you need to specify is the dates of events. If you want the information about events to be shown in tooltips, add the `description` data field.

This sample demonstrates how to add one group of event markers with basic settings:

```
// add event markers
plot.eventMarkers({"groups": [
  {
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
```

{sample}STOCK\_Event\_Markers\_Basics\_01{sample}

## Data

You can use three methods to add event markers:

* {api:anychart.core.stock.Plot#eventMarkers}eventMarkers(){api}
* {api:anychart.core.stock.eventMarkers.Controller#group}group(){api}
* {api:anychart.core.stock.eventMarkers.Controller#data}data(){api}

As shown in the subsections below, for each method you should organize data in a different way and use different data fields. 

There are two data fields working with all methods:

* `date`
* `description`

The `date` is the only field that is always required. The `description` field is optional, but it is shown in tooltips by default. If there is no description, the symbol of a group is shown instead.

The symbol is a text element displayed on markers and shared by all elements of the group. The way to customize symbols depends on the method you use. Since they are resized to fit markers, the best choice is to specify one or two letters (with an empty string, no text is displayed). The default symbol is "A" for all groups.

**Note:** You can add custom fields to your data. See [Tooltips](Tooltips).

### eventMarkers()

The {api:anychart.core.stock.Plot#eventMarkers}eventMarkers(){api} method accepts a JSON object with the information about the groups of markers.

Here are data fields affecting groups:

* `group`
* `data`
* `format` (optional)

The following fields affect events inside groups: 

* `date`
* `description` (optional)

The `groups` field contains an array of groups, and `data` contains an array of events belonging to one group. To specify the symbol of a group, use `format`.

**Note:** Even if you are going to create only one group of markers, you still have to include the `group` field into your data.

In this sample, there are two groups of markers. For each group a symbol is specified, and each event has a description:

```
// add two groups of event markers
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
  },
  {
    "format": "B",
    "data": [
      {
        "date": "2009-02-10",
        "description": "Cisco and Tata Consultancy Services announced strategic alliance."
      },
      {
        "date": "2009-02-12",
        "description": "Cisco unveiled 'Intelligent Urbanisation' vision for Bangalore."
      }
    ]
  }
]});
```

{sample}STOCK\_Event\_Markers\_Basics\_02{sample}

### group()

You can create a group with a certain index: combine {api:anychart.core.stock.Plot#eventMarkers}eventMarkers(){api} with {api:anychart.core.stock.eventMarkers.Controller#group}group(){api}.

This method accepts an index as the first parameter and an array of objects (with the information about events) as the second one.

Only standard data fields are used:

* `date`
* `description` (optional)

You cannot change the symbols of groups through data, but you can use the {api:anychart.core.stock.eventMarkers.Controller#format}format(){api} method.

**Note:** As a "getter", {api:anychart.core.stock.eventMarkers.Controller#group}group(){api} allows you to access a group with a certain index.

The following sample shows how to add two groups of markers. For each group a symbol is specified, and each event has a description:

```
var eventMarkers = plot.eventMarkers();

// add the first group of event markers
eventMarkers.group(0, [
  {
    "date": "2004-02-20",
    "description": "Cisco announced the acquisition of Andiamo Systems, Inc."
  },
  {
    "date": "2008-04-27",
    "description": "Cisco announced its intent to acquire PostPath, Inc."
  }
]);

// set the symbol of the first group
eventMarkers.group(0).format("A");

// add the second group of event markers
eventMarkers.group(1, [
  {
    "date": "2009-02-10",
    "description": "Cisco and Tata Consultancy Services announced strategic alliance."
  },
  {
    "date": "2009-02-12",
    "description": "Cisco unveiled 'Intelligent Urbanisation' vision for Bangalore."
  }
]);

// set the symbol of the second group
eventMarkers.group(1).format("B");
```

{sample}STOCK\_Event\_Markers\_Basics\_03{sample}

### data()

If you need to add only one group of markers, it makes sense to combine {api:anychart.core.stock.Plot#eventMarkers}eventMarkers(){api} with {api:anychart.core.stock.eventMarkers.Controller#data}data(){api}.

This method accepts an array of objects with the information about events belonging to one group. Unlike {api:anychart.core.stock.eventMarkers.Controller#group}group(){api}, it does not allow specifying the index of your group explicitly. Therefore, only one group can be created this way (its index is 0).

```
// add event markers
plot.eventMarkers().data([
  {
    "date": "2004-02-20",
    "description": "Cisco announced the acquisition of Andiamo Systems, Inc."
  },
  {
    "date": "2008-04-27",
    "description": "Cisco announced its intent to acquire PostPath, Inc."
  }
]);
```

{sample}STOCK\_Event\_Markers\_Basics\_04{sample}

## Type

{api:anychart.core.StateSettings#type}type(){api}

Here is the list of available marker types: {api:anychart.enums.EventMarkerType}Event Marker Types{api}.

...

**Note**: These method affect all markers belonging to the same group. To learn how to adjust individual markers, see [Individual Markers](#individual_markers).

```

```

{sample}STOCK\_Event\_Markers\_Basics\_05{sample}

## Format

* [Data](#data)
* [Individual Markers](#individual_markers)

...

## Appearance

The [appearance settings](../Appearance_Settings) of event markers can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.stock.eventMarkers.Controller#normal}normal(){api}, {api:anychart.core.stock.eventMarkers.Controller#hovered}hovered(){api}, and {api:anychart.core.stock.eventMarkers.Controller#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

...

* {api:anychart.core.StateSettings#fontStyle}fontColor(){api} to set the font color
* {api:anychart.core.StateSettings#fontWeight}fontWeight(){api} to set the font weight 

{api:anychart.core.StateSettings}anychart.core.StateSettings{api}.

**Note**: These methods affect all markers belonging to the same group. To learn how to adjust individual markers, see [Individual Markers](#individual_markers).

In the sample below, there is a chart with one group of event markers, their type and other appearance settings configured:

```
var eventMarkers = plot.eventMarkers();

// configure the appearance of markers

eventMarkers.normal().fill("#d1ead9");
eventMarkers.hovered().fill("white");
eventMarkers.selected().fill("white");

eventMarkers.normal().stroke("2 #009933");
eventMarkers.hovered().stroke("2 #009933");
eventMarkers.selected().stroke("2 #004d1a");

eventMarkers.normal().fontColor("#009933");
eventMarkers.hovered().fontColor("#009933");
eventMarkers.selected().fontColor("#004d1a");
eventMarkers.normal().fontWeight(600);
```

{sample}STOCK\_Event\_Markers\_Basics\_06{sample}

## Width

...

```

```

{sample}STOCK\_Event\_Markers\_Basics\_07{sample}

## Position

By default, event markers are bound to the X-axis, but you can also bind them to a series value. To set the position of event markers, call the {api:anychart.core.stock.eventMarkers.Controller#position}position(){api} method with one of the following parameters:

* `axis` (default)
* `series` 
* `series-negative`
* `series-positive`
* `zero`

When you choose `series-negative`, `series-positive`, or `zero`, a marker is displayed on the series only if the value corresponding to its date is <= 0 / >= 0 / = 0. Otherwise, the marker is shown on the zero of the Y-axis.

Some series types (for example, OHLC) suggest that each data point has more than one value. In this case, all positions except `axis` require specifying the value (data field) you want markers to be bound to. Use the {api:anychart.core.stock.eventMarkers.Controller#fieldName}fieldName(){api} method:

```
// create an ohlc series
plot.ohlc(mapping);

// set the position of event markers
plot.eventMarkers().position("series");
plot.eventMarkers().fieldName("high");
```

In this sample, you can bind event markers either to the X-axis or to one of the four values of the OHLC series:

{sample}STOCK\_Event\_Markers\_Basics\_08{sample}

If there are two or more series on the plot, for all positions except `axis` you need to specify the index of the series on which you are going to show markers – {api:anychart.core.stock.eventMarkers.Controller#seriesId}seriesId(){api}:

```
// bind event markers to the first series
plot.eventMarkers().position("series");
plot.eventMarkers().seriesId(0);
```

In the following sample, there are two series, and you can display markers on either of them:

{sample}STOCK\_Event\_Markers\_Basics\_09{sample}

## Individual Markers

You can also configure each marker individually – use extra data fields corresponding with the methods... :

```
// add event markers
plot.eventMarkers({"groups": [
  {
    "data": [
      {
        "symbol": "1",
        "date": "2004-02-20",
        "description": "Cisco announced the acquisition of Andiamo Systems, Inc.",
        "normal":   {"fill": "#d1ead9", "stroke": "2 #009933",
                     "fontColor": "#009933", "fontWeight": 600,
                     "type": "rect"},
        "hovered":  {"fill": "white", "stroke": "2 #009933",
                     "fontColor": "#009933"},
        "selected": {"fill": "white", "stroke": "2 #194d00",
                     "fontColor": "#194d00"}   
      },
      {
        "symbol": "2",
        "date": "2008-04-27",
        "description": "Cisco announced its intent to acquire PostPath, Inc.",
        "normal":   {"fill": "#ead9d1", "stroke": "2 #990033",
                     "fontColor": "#990033", "fontWeight": 600,
                     "type": "circle"},
        "hovered":  {"fill": "white", "stroke": "2 #990033",
                     "fontColor": "#990033"},
        "selected": {"fill": "white", "stroke": "2 #4d1a00",
                     "fontColor": "#4d1a00"}   
      },
    ]
  }
]});

// set the symbol of event markers
plot.eventMarkers().format(function (){
  return this.getData("symbol");
});
```

{sample}STOCK\_Event\_Markers\_Basics\_10{sample}