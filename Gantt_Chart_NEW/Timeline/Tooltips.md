{:index 6}
# Tooltips

* {api:anychart.core.ui.Tooltip}anychart.core.ui.Tooltip{api}
* [tokens](../../Common_Settings/Text_Formatters#string_tokens)
* [formatting functions](../../Common_Settings/Text_Formatters#formatting_functions)
* [Project Gantt](../Project_Chart)
* [Resource Gantt](../Resource_Chart)

A [Tooltip](../../Common_Settings/Tooltip) is a text box displayed a timeline or data grid row is hovered over.

To learn how to adjust data grid tooltips, see [Data Grid: Tooltips](../Data_Grid#tooltips).

## Tokens

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