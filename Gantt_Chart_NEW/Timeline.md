{:index 10}
# Timeline

## Overview

* {api:anychart.core.ui.Timeline}anychart.core.ui.Timeline{api}
* [Project Gantt](Project_Chart)
* [Resource Gantt](Resource_Chart)
* (?)

## Appearance

misc:

* [Basic Settings: Rows and Columns](Basic_Settings#rows_and_columns)
* (?) [Data Grid](Data_Grid)

methods:

* {api:anychart.core.ui.Timeline#backgroundFill}backgroundFill(){api} to set the background fill
* {api:anychart.core.ui.Timeline#columnStroke}columnStroke(){api} to set the stroke of columns
* {api:anychart.core.ui.Timeline#rowFill}rowFill(){api}, {api:anychart.core.ui.Timeline#rowHoverFill}rowHoverFill(){api}, and {api:anychart.core.ui.Timeline#rowSelectedFill}rowSelectedFill(){api} to set the fill of rows
* {api:anychart.core.ui.Timeline#rowEvenFill}rowEvenFill(){api} and {api:anychart.core.ui.Timeline#rowOddFill}rowOddFill(){api} to set the fill of even and odd rows


```
// configure the appearance of the timeline
var timeline = chart.getTimeline();
timeline.columnStroke(null);
timeline.rowEvenFill("gray 0.3");
timeline.rowOddFill("gray 0.1");
timeline.rowHoverFill("#ffd54f 0.3");
timeline.rowSelectedFill("#ffd54f 0.3");
```

{sample :height 220}GANTT\_NEW\_Timeline\_01{sample}

## Scale

misc:

* {api:anychart.scales.GanttDateTime}anychart.scales.GanttDateTime{api}
* {api:anychart.scales.GanttDateTime.ZoomLevelsSettings}anychart.scales.GanttDateTime.ZoomLevelsSettings{api}
* [Header](#header)
* уровни нужно задавать в порядке от самого мелкого к самому крупному

methods:

* scale: {api:anychart.core.ui.Timeline#scale}scale(){api}
* {api:anychart.scales.GanttDateTime#maximum}maximum(){api}
* {api:anychart.scales.GanttDateTime#minimum}minimum(){api}
* {api:anychart.scales.GanttDateTime#zoomLevels}zoomLevels(){api}


```
// configure the scale
chart.getTimeline().scale().minimum("2018-01-01");
chart.getTimeline().scale().maximum("2018-07-15");
```

{sample :height 220}GANTT\_NEW\_Timeline\_02{sample}

```
// configure the scale
chart.getTimeline().scale().zoomLevels([
  [
    {unit: 'month', count: 1},
    {unit: 'quarter', count: 1}
  ]
]);
```

{sample :height 220}GANTT\_NEW\_Timeline\_03{sample}

## Header

misc:

* {api:anychart.core.gantt.TimeLineHeader}anychart.core.gantt.TimeLineHeader{api}
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper}anychart.core.gantt.TimeLineHeader.LevelWrapper{api}
* [Scale](#scale)
* [Basic Settings: Header and Row Height](Basic_Settings#header_and_row_height)
* [tokens](../../Common_Settings/Text_Formatters#string_tokens), [formatting functions](../Common_Settings/Text_Formatters#formatting_functions)
* [Project Gantt](Project_Chart)
* [Resource Gantt](Resource_Chart)

methods:

* header: {api:anychart.core.ui.Timeline#header}header(){api}
* {api:anychart.core.gantt.TimeLineHeader#enabled}enabled(){api} + `true` / `false`
* {api:anychart.core.gantt.TimeLineHeader#fill}fill(){api} and {api:anychart.core.gantt.TimeLineHeader#stroke}stroke(){api}
* {api:anychart.core.gantt.TimeLineHeader#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader#fontFamily}fontFamily(){api}, {api:anychart.core.gantt.TimeLineHeader#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader#fontWeight}fontWeight(){api}, and other font settings
* {api:anychart.core.gantt.TimeLineHeader#format}format(){api}
* {api:anychart.core.gantt.TimeLineHeader#level}level(){api} and {api:anychart.core.gantt.TimeLineHeader#levelHeight}levelHeight(){api} 

methods (levels):
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#enabled}enabled(){api} + `true` / `false`
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fill}fill(){api} and {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#stroke}stroke{api}
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontColor}fontColor(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontFamily}fontFamily(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontSize}fontSize(){api}, {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#fontWeight}fontWeight(){api}, and other font settings
* {api:anychart.core.gantt.TimeLineHeader.LevelWrapper#format}format(){api}


```
// configure the timeline header
var header = chart.getTimeline().header();
header.fill("#64b5f6 0.2");
header.stroke("#64b5f6");
header.fontColor("#64b5f6");
header.fontWeight(600);
header.format(function() {
  if (this.value == "March") {
    return "(!) " + this.value;
  } else {
    return this.value;
  }
});
```

{sample :height 220}GANTT\_NEW\_Timeline\_04{sample}

```
// configure the first level of the timeline header
var header = chart.getTimeline().header();
header.level(0).fill("#64b5f6 0.2");
header.level(0).stroke("#64b5f6");
header.level(0).fontColor("#64b5f6");
header.level(0).fontWeight(600);
header.level(0).format(function() {
  if (this.value == "March") {
    return "(!) " + this.value;
  } else {
    return this.value;
  }
});
 ```

{sample :height 220}GANTT\_NEW\_Timeline\_05{sample}

## Timeline Markers

* [line](#line), [range](#range), [text](#text)
* {api:anychart.core.ui.Timeline#lineMarker}lineMarker(){api}, {api:anychart.core.ui.Timeline#rangeMarker}rangeMarker(){api}, {api:anychart.core.ui.Timeline#textMarker}textMarker(){api}

### Line

* {api:anychart.core.axisMarkers.GanttLine}anychart.core.axisMarkers.GanttLine{api}
* {api:anychart.enums.GanttDateTimeMarkers}anychart.enums.GanttDateTimeMarkers{api}
* {api:anychart.core.ui.Timeline#lineMarker}lineMarker(){api}
* {api:anychart.core.axisMarkers.GanttLine#value}value(){api}, {api:anychart.core.axisMarkers.GanttLine#stroke}stroke(){api}, {api:anychart.core.axisMarkers.GanttLine#enabled}enabled(){api}
* можно задать настройки как объект


```
// create two line markers
var marker_1 = chart.getTimeline().lineMarker(0);
var marker_2 = chart.getTimeline().lineMarker(1);

// set values of markers
marker_1.value("2018-02-15");
marker_2.value("end");

// set the stroke of markers
marker_1.stroke("2 #455a64");
marker_2.stroke("2 #dd2c00");
```

{sample :height 220}GANTT\_NEW\_Timeline\_06{sample}

### Range

* {api:anychart.core.axisMarkers.GanttRange}anychart.core.axisMarkers.GanttRange{api}
* {api:anychart.enums.GanttDateTimeMarkers}anychart.enums.GanttDateTimeMarkers{api}
* {api:anychart.core.ui.Timeline#rangeMarker}rangeMarker(){api}
* {api:anychart.core.axisMarkers.GanttRange#from}from(){api}, {api:anychart.core.axisMarkers.GanttRange#to}to(){api}, {api:anychart.core.axisMarkers.GanttRange#fill}fill(){api}, {api:anychart.core.axisMarkers.GanttRange#enabled}enabled(){api}
* можно задать как объект


```
// create two range markers
var marker_1 = chart.getTimeline().rangeMarker(0);
var marker_2 = chart.getTimeline().rangeMarker(1);

// set the range of the first marker
marker_1.from("2018-02-15");
marker_1.to("2018-02-22");

// set the range of the second marker
marker_2.from("2018-03-25");
marker_2.to("end");

// set the fill of markers
marker_1.fill("#455a64 0.2");
marker_2.fill("#dd2c00 0.2");
```

{sample :height 220}GANTT\_NEW\_Timeline\_07{sample}

### Text

{api:anychart.core.axisMarkers.GanttText}anychart.core.axisMarkers.GanttText{api}
* {api:anychart.enums.GanttDateTimeMarkers}anychart.enums.GanttDateTimeMarkers{api}
* {api:anychart.core.ui.Timeline#textMarker}textMarker(){api}
* {api:#}(){api}, {api:#}(){api}, {api:#}(){api}
* можно задать как объект


```
// create two text markers
var marker_1 = chart.getTimeline().textMarker(0);
var marker_2 = chart.getTimeline().textMarker(1);

// set values of markers
marker_1.value("2018-02-15");
marker_2.value("end");

// set the text of markers
marker_1.useHtml(true);
marker_1.text(
  "marker <span style='font-size:26'>1</span>"
);
marker_2.text("marker 2");

// configure the position of markers
marker_1.rotation(0);
marker_1.padding(5)
marker_1.offsetY(31);
marker_2.offsetX(-10);

// configure the font of markers
marker_1.fontColor("#455a64");
marker_2.fontColor("#dd2c00");
marker_1.fontWeight(600);
marker_2.fontWeight(600);

// configure the background of the first marker
marker_1.background().enabled(true);
marker_1.background().fill("#e3e8e8");
marker_1.background().stroke("2 #455a64");
```

{sample :height 220}GANTT\_NEW\_Timeline\_08{sample}

## Labels

* [Elements: Labels](Elements#labels)

## Tooltips

* {api:anychart.core.ui.Tooltip}anychart.core.ui.Tooltip{api}
* [tokens](../../Common_Settings/Text_Formatters#string_tokens)
* [formatting functions](../Common_Settings/Text_Formatters#formatting_functions)
* [Project Gantt](Project_Chart)
* [Resource Gantt](Resource_Chart)

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed a timeline or data grid row is hovered over.

To learn how to adjust data grid tooltips, see [Data Grid: Tooltips](Data_Grid#tooltips).

### Tokens

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

{sample :height 220}GANTT\_NEW\_Timeline\_09{sample}

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

{sample :height 160}GANTT\_NEW\_Timeline\_10{sample}

### Formatting Functions

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

{sample :height 220}GANTT\_NEW\_Timeline\_11{sample}

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

{sample :height 160}GANTT\_NEW\_Timeline\_12{sample}