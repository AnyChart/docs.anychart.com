{:index 4}

# Tooltips

## Overview

A tooltip is a text box displayed when a point on a chart is hovered, which allows you to show the detailed information about an event marker. You can either adjust the built-in AnyChart tooltips or create custom HTML tooltips.


## Built-In Tooltips

The built-in tooltips of event markers work the same way as any other tooltips - see the [Tooltip](../../Common_Settings/Tooltip) article. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

When you create data for event markers, you can add an optional data field - `description`. By default, it is shown in tooltips, and if there is no description, the symbol of a group is shown instead.

The built-in tooltips are adjusted with the help of either tokens or formatting functions.

### Tokens

You can configure the main text or titles of tooltips by combining the {api:anychart.core.stock.eventMarkers.Controller#tooltip}tooltip(){api} method with {api:anychart.core.ui.Tooltip#format}format(){api} or {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} and the following [tokens](../../Common_Settings/Text_Formatters#string_tokens):

* `{%date}`
* `{%symbol}`
* `{%description}`

Also, you can always add a custom field to your data and use a custom token corresponding to it.

In the sample below, both the main text and titles of tooltips are configured. In addition to the default tokens, a custom token *{%short_desc}* is used:

```
// add event markers
plot.eventMarkers({"groups": [
  {
    "format": "A",
    "data": [
      {
        "date": "2006-06-08",
        "description": "Cisco announced the acquisition of Audium Corporation.",
        "short_desc": "Audium Corporation Acquisition"
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

### Formatting Functions

To adjust tooltips, you can combine the {api:anychart.core.stock.eventMarkers.Controller#tooltip}tooltip(){api} method with {api:anychart.core.ui.Tooltip#format}format(){api} or {api:anychart.core.ui.Tooltip#titleFormat}titleFormat(){api} and [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions).

Here are fields that work with formatting functions: 

* `date`
* `symbol`
* `description`

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

This sample shows how adjust the main text and titles of tooltips. Along with the default fields, a custom data field *"short desc"* is used:

```
// add event markers
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
  }
]});

plot.eventMarkers().tooltip().titleFormat( function (){
  return this.getData("short_desc") + " (" + this.symbol + ")";
});

plot.eventMarkers().tooltip().format( function (){
  return "On " + anychart.format.dateTime(this.date, "MMMM dd") +
         ", " + this.description;
});
```

{sample}STOCK\_Event\_Markers\_Tooltips\_02{sample}

## Custom HTML Tooltips

The built-in tooltips can be turned off and replaced with custom HTML tooltips. Use HTML/CSS and [events](Events):

{sample}STOCK\_Event\_Markers\_Tooltips\_03{sample}