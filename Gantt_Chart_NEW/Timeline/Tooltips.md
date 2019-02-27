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

To configure tooltips, use other methods of {api:anychart.core.ui.Tooltip}anychart.core.ui.Tooltip{api}, for example:

* {api:anychart.core.ui.Tooltip#fontColor}fontColor(){api}
* {api:anychart.core.ui.Tooltip#fontWeight}fontWeight(){api}
* {api:anychart.core.ui.Tooltip#fontSize}fontSize(){api}
* {api:anychart.core.ui.Tooltip#fontFamily}fontFamily(){api}
* {api:anychart.core.ui.Tooltip#useHtml()}useHtml(){api}
* {api:anychart.core.ui.Tooltip#format}format(){api}


You can set the text format by combining the {api:anychart.core.ui.Tooltip#format}format(){api} method with either [tokens](../../Common_Settings/Text_Formatters#string_tokens) or [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions). To use HTML in formatters, pass `true` to {api:anychart.core.ui.Tooltip#useHtml()}useHtml(){api}. Read the sections below to learn more.

**Note:** The tooltips that are shown on data grid are configured independently from the timeline tooltips. See [Data Grid: Tooltips](../Data_Grid/Tooltips) to learn more.

## Tokens

For the [Project Gantt](../Project_Chart) chart, the following tokens are available:

* ``
* ``
* ``
* ``


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

fields:

* ``
* ``
* ``
* ``


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