{:index 2}

# Basics

## Overview

An event marker is an element of the chart indicating an event that took place at a certain time. As a rule, a text symbol is displayed on each marker, and the description of events is shown in tooltips.

This article explains how to add and configure event markers.

To learn more, see the [Tooltips](Tooltips) and [Events](Events) articles.

## Quick Start

To add event markers, pass your data to the {api:anychart.core.stock.Plot#eventMarkers}eventMarkers(){api} method.

The only thing you need to specify is the dates of events. If you want information about events to be shown in tooltips, add the `description` data field.

This sample demonstrates how to add one group of event markers with basic settings:

```
// add event markers
plot.eventMarkers({"groups": [
  {
    "data": [
      {
        "date": "2006-06-08",
        "description": "Cisco announced the acquisition of Audium Corporation."
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

Event markers in AnyChart are organized in groups. There are different ways to add and group them - you can choose one of the three methods:

* {api:anychart.core.stock.Plot#eventMarkers}eventMarkers(){api}
* {api:anychart.core.stock.eventMarkers.Controller#group}group(){api}
* {api:anychart.core.stock.eventMarkers.Controller#data}data(){api}

As shown in the subsections below, for each method you should structure data in a different way and use different data fields. 

There are two data fields working with all methods:

* `date`
* `description`

The `date` is the only field that is always required. The `description` field is optional, but it is shown in tooltips by default (if there is no description, the symbol of a group is shown instead).

**Note:** Sometimes it makes sense to add custom fields to your data. See [Individual Markers](#individual_markers) and [Tooltips](Tooltips).

### eventMarkers()

The {api:anychart.core.stock.Plot#eventMarkers}eventMarkers(){api} method accepts a JSON object with information about the groups of markers.

Here are data fields affecting groups:

* `group`
* `data`
* `format` (optional)

The following fields affect events inside groups: 

* `date`
* `description` (optional)

The `groups` field contains an array of groups, and `data` contains an array of events belonging to the same group. To specify the symbol of a group, use `format`.

**Note:** Even if you are going to create only one group of markers, you still have to include the `group` field to your data.

In this sample, there are two groups of markers. For each group a symbol is specified, and each event has a description:

```
// add two groups of event markers
plot.eventMarkers({"groups": [
  {
    "format": "A",
    "data": [
      {
        "date": "2006-06-08",
        "description": "Cisco announced the acquisition of Audium Corporation."
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

This method accepts an index as the first parameter and an array of objects (with information about events) as the second one.

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
    "date": "2006-06-08",
    "description": "Cisco announced the acquisition of Audium Corporation."
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

This method accepts an array of objects with information about events. Unlike {api:anychart.core.stock.eventMarkers.Controller#group}group(){api}, it does not allow specifying the index of a group explicitly. Therefore, only one group can be created this way (its index is 0).

```
// add event markers
plot.eventMarkers().data([
  {
    "date": "2006-06-08",
    "description": "Cisco announced the acquisition of Audium Corporation."
  },
  {
    "date": "2008-04-27",
    "description": "Cisco announced its intent to acquire PostPath, Inc."
  }
]);
```

{sample}STOCK\_Event\_Markers\_Basics\_04{sample}

## Type

Four types of event markers are available: **circle**, **flag**, **pin**, and **rectangle**. To set the type, call the {api:anychart.core.stock.eventMarkers.Controller#type}type(){api} method with one of the parameters listed in {api:anychart.enums.EventMarkerType}anychart.enums.EventMarkerType{api}:

* `"circle"` (default)
* `"flag"`
* `"pin"`
* `"rect"`

```
// set the type of event markers
plot.eventMarkers().type("rect");
```

{sample}STOCK\_Event\_Markers\_Basics\_05{sample}

## Format (Symbol)

The symbol is a text element displayed on markers and shared by all elements of the group. The default symbol is "A" for all groups.

To set the symbol of a group, you should use either the `format` data field or the {api:anychart.core.stock.eventMarkers.Controller#format}format(){api} method, depending on the way your data are organized. See the [Data](#data) section to learn more.

You can also assign different symbols to markers belonging to the same group - read [Individual Markers](#individual_markers).

Finally, the [Appearance](#appearance) section explains how to adjust the font of symbols.

**Note:** To create a marker or group of markers with no text, use an empty string when you set the symbol.

## Appearance

The [appearance settings](../../Appearance_Settings) of event markers can be configured in three [states](../../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.stock.eventMarkers.Controller#normal}normal(){api}, {api:anychart.core.stock.eventMarkers.Controller#hovered}hovered(){api}, and {api:anychart.core.stock.eventMarkers.Controller#selected}selected(){api} methods.

Combine them with the following methods:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke

To configure the font of symbols, use:
* {api:anychart.core.StateSettings#fontStyle}fontColor(){api}
* {api:anychart.core.StateSettings#fontSize}fontSize(){api}* {api:anychart.core.StateSettings#fontWeight}fontWeight(){api}

* other methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}

**Note 1:** By default, the font size of symbols is adjusted to the size of markers. You can disable this setting by calling the {api:anychart.core.stock.eventMarkers.Controller#adjustFontSize}adjustFontSize(){api} method with `false` as a parameter and set the font size manually with {api:anychart.core.StateSettings#fontWeight}fontSize(){api}.

**Note 2:** You can also set the stroke of [connectors](#connectors).

In the sample below, there is a chart with one group of event markers, their appearance settings configured:

```
var eventMarkers = plot.eventMarkers();

// configure the appearance of event markers

eventMarkers.normal().fill("#d1ead9");
eventMarkers.hovered().fill("white");
eventMarkers.selected().fill("white");

eventMarkers.normal().stroke("#009933", 2);
eventMarkers.hovered().stroke("#009933", 2);
eventMarkers.selected().stroke("#004d1a", 2);

eventMarkers.normal().fontColor("#009933");
eventMarkers.hovered().fontColor("#009933");
eventMarkers.selected().fontColor("#004d1a");
eventMarkers.normal().fontWeight(600);
```

{sample}STOCK\_Event\_Markers\_Basics\_06{sample}

## Connectors

You can configure the connectors of event markers (lines that connect markers with the points they are bound to).

To set the length of connectors, use the {api:anychart.core.stock.eventMarkers.Controller#connector}connector(){api} and {api:anychart.core.utils.Connector#length}length(){api} methods:

```
eventMarkers.connector().length("20");
```

The stroke of connectors can be configured in three [states](../../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.stock.eventMarkers.Controller#normal}normal(){api}, {api:anychart.core.stock.eventMarkers.Controller#hovered}hovered(){api}, and {api:anychart.core.stock.eventMarkers.Controller#selected}selected(){api} methods, combined with {api:anychart.core.StateSettings#connector}connector(){api} and  {api:anychart.core.utils.Connector#stroke}stroke(){api}:

```
eventMarkers.normal().connector().stroke("#dd2c00");
eventMarkers.hovered().connector().stroke("#dd2c00", 2);
eventMarkers.selected().connector().stroke("#dd2c00", 3);
```

**Note**: To hide the stroke, call {api:anychart.core.utils.Connector#stroke}stroke(){api} with `null` as a parameter.

This sample shows how to configure both the length and stroke of connectors:

{sample}STOCK\_Event\_Markers\_Basics\_07{sample}

## Height and Width

The height and width of event markers can be set in three [states](../../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.stock.eventMarkers.Controller#normal}normal(){api}, {api:anychart.core.stock.eventMarkers.Controller#hovered}hovered(){api}, and {api:anychart.core.stock.eventMarkers.Controller#selected}selected(){api} methods.

Combine them with these methods:

* {api:anychart.core.StateSettings#height}height(){api}
* {api:anychart.core.StateSettings#width}width(){api}


```
// set the height of event markers
eventMarkers.normal().height(30);
eventMarkers.hovered().height(35);
eventMarkers.selected().height(40);

// set the width of event markers
eventMarkers.normal().width(35);
eventMarkers.hovered().width(40);
eventMarkers.selected().width(45);
```

{sample}STOCK\_Event\_Markers\_Basics\_08{sample}

## Position

By default, event markers are bound to the X-axis, but you can also bind them to a series value. To set the position of event markers, call the {api:anychart.core.stock.eventMarkers.Controller#position}position(){api} method with one of the parameters listed in {api:anychart.enums.EventMarkerPosition}anychart.enums.EventMarkerPosition{api}:

* `"axis"` (default)
* `"series"` 
* `"series-negative"`
* `"series-positive"`
* `"zero"`

When you choose `"series-negative"`, `"series-positive"`, or `"zero"`, a marker is displayed on the series only if the value corresponding to its date is <= 0 / >= 0 / = 0. Otherwise, the marker is shown on the zero of the Y-axis.

Some series types (for example, OHLC) suggest that each data point has more than one value. In this case, all positions except `"axis"` require specifying the value (data field) you want markers to be bound to. Use the {api:anychart.core.stock.eventMarkers.Controller#fieldName}fieldName(){api} method:

```
// create an ohlc series
plot.ohlc(mapping);

// set the position of event markers
plot.eventMarkers().position("series");
plot.eventMarkers().fieldName("high");
```

In this sample, you can bind event markers either to the X-axis or to one of the four values of the OHLC series:

{sample}STOCK\_Event\_Markers\_Basics\_09{sample}

If there are two or more series on the plot, for all positions except `axis` you need to specify the index of the series on which you are going to show markers - {api:anychart.core.stock.eventMarkers.Controller#seriesId}seriesId(){api}:

```
// bind event markers to the first series
plot.eventMarkers().position("series");
plot.eventMarkers().seriesId(0);
```

In the sample below, there are two series, and you can display markers on either of them:

{sample}STOCK\_Event\_Markers\_Basics\_10{sample}

## Direction

By default, the direction of markers is adjusted automatically so that they overlap the series as little as possible. To set the direction manually, use the {api:anychart.core.stock.eventMarkers.Controller#direction}direction(){api} method with one of the parameters listed in {api:anychart.enums.EventMarkerDirection}anychart.enums.EventMarkerDirection{api}:

* `"auto"` (default)
* `"down"`
* `"up"`


```
// set the position of event markers
plot.eventMarkers().direction("down");
```

In the default [position](#position) (`"axis"`), all markers are vertically oriented, no matter what direction you set. However, in other positions the direction matters. The following sample shows how changing the direction of markers affects them when the position is set to `"series"`:

{sample}STOCK\_Event\_Markers\_Basics\_11{sample}

## Sticking to Left Point

By default, each event marker sticks to the left closest point. You can disable or enable this mode by passing `false` or `true`  to the {api:anychart.core.stock.eventMarkers.Controller#stickToLeft}stickToLeft(){api} method: 

```
// disable sticking to the left point
plot.eventMarkers().stickToLeft(false);
```

In the following sample, data does not include dates the event markers are bound to, so they are displayed in the points to the left of them. When sticking to the left point is disabled, markers are shown in their actual dates:

```
// create data
dataTable = anychart.data.table();
dataTable.addData([
    ["2016-01-05",  -2.0],
    ["2016-01-07",  -9.4],
    ["2016-01-08",  -4.5],
    ["2016-01-11",  -3.1],
    ["2016-01-12",  -7.9]
]); 

// map the data
var mapping = dataTable.mapAs({value: 1});

// create a stock chart
chart = anychart.stock();

// create a plot on the chart
plot = chart.plot(0);

// create a line series
var series = plot.line(mapping);

// add event markers
plot.eventMarkers({"groups": [
  {
    "data": [
      {
        "date": "2016-01-06",
        "description": "Event 1"
      },
      {
        "date": "2016-01-09",
        "description": "Event 2"
      },
      {
        "date": "2016-01-10",
        "description": "Event 3"
      },
    ]
  }
]});

// disable sticking to the left point
plot.eventMarkers().stickToLeft(false);
```

{sample}STOCK\_Event\_Markers\_Basics\_12{sample}

## Individual Markers

Most settings are shared by markers belonging to the same group, but there is a way to make them look different from each other. Use extra data fields corresponding with the methods mentioned in the following sections: [Type](#type), [Appearance](#appearance), [Connectors](#connectors), [Height and Width](#height_and_width).

To set the format (symbol) of each marker individually, specify symbols in a custom data field and call the {api:anychart.core.stock.eventMarkers.Controller#format}format(){api} method with a function as a parameter. In the function, refer to the custom field with the help of {api:anychart.format.Context#getData}getData(){api}.

This sample shows how to adjust individual markers. Please note that here a custom data field (*symbol*) is used to set symbols:

```
// add event markers
plot.eventMarkers({"groups": [
  {
    "data": [
      {
        "symbol": "1",
        "date": "2006-06-08",
        "description": "Cisco announced the acquisition of Audium Corporation.",
        "normal":   {"type": "circle",
                     "fill": "#d1ead9", "stroke": "2 #009933",
                     "fontColor": "#009933", "fontWeight": 600,
                     "connector": {"stroke": "2 #009933"}},
        "hovered":  {"fill": "white", "stroke": "2 #009933",
                     "fontColor": "#009933",
                     "connector": {"stroke": "2 #009933"}},
        "selected": {"fill": "white", "stroke": "2 #194d00",
                     "fontColor": "#194d00",
                     "connector": {"stroke": "2 #194d00"}}
      },
      {
        "symbol": "2",
        "date": "2008-04-27",
        "description": "Cisco announced its intent to acquire PostPath, Inc.",
        "normal":   {"type": "rect", "width": 40,
                     "fill": "#ead9d1", "stroke": "2 #990033",
                     "fontColor": "#990033", "fontWeight": 600,
                     "connector": {"stroke": "2 #990033"}},
        "hovered":  {"fill": "white", "stroke": "2 #990033",
                     "fontColor": "#990033",
                     "connector": {"stroke": "2 #990033"}},
        "selected": {"fill": "white", "stroke": "2 #4d1a00",
                     "fontColor": "#4d1a00",
                     "connector": {"stroke": "2 #4d1a00"}}   
      },
    ]
  }
]});

// set the symbol of event markers
plot.eventMarkers().format(function() {
  return this.getData("symbol");
});
```

{sample}STOCK\_Event\_Markers\_Basics\_13{sample}