{:index 6}
# Tooltips

## Overview

[Tooltips](../../Common_Settings/Tooltip) are text boxes displayed when timeline or [data grid](../Data_Grid) rows are hovered over. They are defined as instances of the {api:anychart.core.ui.Tooltip}anychart.core.ui.Tooltip{api} class.

To access tooltips, call the {api:anychart.core.ui.Timeline#tooltip}tooltip(){api} method of the timeline.

To enable or disable tooltips, pass `true` / `false` either directly to {api:anychart.core.ui.Timeline#tooltip}tooltip(){api} or to the {api:anychart.core.ui.Tooltip#enabled}enabled(){api} method of tooltips:

```
var chart.getTimeline().tooltip(true);
```

```
chart.getTimeline().tooltip).enabled(true);
```

To configure tooltips, use other methods of {api:anychart.core.ui.Tooltip}anychart.core.ui.Tooltip{api}. For example, you can set the text format by combining the {api:anychart.core.ui.Tooltip#format}format(){api} method with either [tokens](../../Common_Settings/Text_Formatters#string_tokens) or [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions) – read the sections below to learn more.

**Note:** The tooltips that are shown on data grid are configured independently from the timeline tooltips. See [Data Grid: Tooltips](../Data_Grid/Tooltips).

## Tokens

To format the text of tooltips, combine the {api:anychart.core.ui.Tooltip#format}format(){api} method with [tokens](../../Common_Settings/Text_Formatters#string_tokens).

Please keep in mind that in addition to default tokens you can always use a custom token corresponding to a custom field in your data.

Also, if you need to enable HTML, pass `true` to {api:anychart.core.ui.Tooltip#useHtml()}useHtml(){api}.

For the [Project Gantt](../Project_Chart) chart, the following tokens are available:

* ``
* ``
* ``
* ``

...

```
// configure tooltips of the timeline
chart.getTimeline().tooltip().useHtml(true);    
chart.getTimeline().tooltip().format(
  "<span style='font-weight:600;font-size:12pt'>" +
  "{%actualStart}{dateTimeFormat:dd MMM} – " +
  "{%actualEnd}{dateTimeFormat:dd MMM}</span><br><br>" +
  "Progress: {%progress}<br>" +
  "Manager: {%manager}"
);
```

{sample :height 220}GANTT\_NEW\_Timeline\_Tooltips\_01{sample}

The [Resource Gantt](../Resource_Chart) chart supports these tokens:

* ``
* ``
* ``
* ``

...

```
// configure tooltips of the timeline
chart.getTimeline().tooltip().useHtml(true);    
chart.getTimeline().tooltip().format(
  "<span style='font-weight:600;font-size:12pt'>" +
  "{%start}{dateTimeFormat:dd MMM} – " +
  "{%end}{dateTimeFormat:dd MMM}</span><br><br>" +
  "Disc Space: {%disc_space}"
);
```

{sample :height 160}GANTT\_NEW\_Timeline\_Tooltips\_02{sample}

## Formatting Functions

You can configure the text of tooltips by combining the {api:anychart.core.ui.Tooltip#format}format(){api} method with [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions).

In these functions, a number of default fields is available, and the {api:anychart.format.Context#getData}getData(){api} method allows you to refer to a custom field in your data.

Also, if you need to enable HTML, pass `true` to {api:anychart.core.ui.Tooltip#useHtml()}useHtml(){api}.

For the [Project Gantt](../Project_Chart), the following fields are available in formatting functions:

* ``
* ``
* ``
* ``

...

```
// configure tooltips of the timeline
chart.getTimeline().tooltip().useHtml(true);
chart.getTimeline().tooltip().format(function() {
  var duration = (this.actualEnd - this.actualStart) / 1000 / 3600 / 24;
  var progress = this.progress * 100 + "%";
  if (this.progress == 1) {
    progress = "COMPLETE";
  }
  return "<span style='font-weight:600;font-size:12pt'>" +
         duration + " days </span><br><br>" +
         "Progress: " + progress + "<br>" +
         "Manager: " + this.getData("manager");
});
```

{sample :height 220}GANTT\_NEW\_Timeline\_Tooltips\_03{sample}

Here are the fields supported by the [Resource Gantt](../Resource_Chart):

* ``
* ``
* ``
* ``

...

```
// configure tooltips of the timeline
chart.getTimeline().tooltip().useHtml(true);
chart.getTimeline().tooltip().format(function() {
  var duration = (this.end - this.start) / 1000 / 3600 
  return "<span style='font-weight:600;font-size:12pt'>
         duration + " days </span><br><br>" +
         "Disc Space: " + this.getData("disc_space");
});
```

{sample :height 160}GANTT\_NEW\_Timeline\_Tooltips\_04{sample}