{:index 5}
# Markers

## Overview

You can add three types of markers to the timeline: **line**, **range**, and **text**.

They are defined as instances of the following classes:

* [line](#line) – {api:anychart.core.axisMarkers.GanttLine}anychart.core.axisMarkers.GanttLine{api} 
* [range](#range) – {api:anychart.core.axisMarkers.GanttRange}anychart.core.axisMarkers.GanttRange{api}
* [text](#text) – {api:anychart.core.axisMarkers.GanttText}anychart.core.axisMarkers.GanttText{api}

To add markers, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} with the following methods:

* [line](#line) – {api:anychart.core.ui.Timeline#lineMarker}lineMarker(){api}
* [range](#range) – {api:anychart.core.ui.Timeline#rangeMarker}rangeMarker(){api}
* [text](#text) – {api:anychart.core.ui.Timeline#textMarker}textMarker(){api}

The sections below explain in detail how to configure each type.

## Line

To add a **line marker**, combine {api:anychart.charts.Gantt#getTimeline}getTimeline(){api} with {api:anychart.core.ui.Timeline#lineMarker}lineMarker(){api}. Specify the index of the marker:

```
var marker_1 = chart.getTimeline().lineMarker(0);
var marker_2 = chart.getTimeline().lineMarker(1);
```

To configure the marker, use methods of the {api:anychart.core.axisMarkers.GanttLine}anychart.core.axisMarkers.GanttLine{api} class:

* {api:anychart.core.axisMarkers.GanttLine#value}value(){api} to set the value
* {api:anychart.core.axisMarkers.GanttLine#enabled}enabled(){api} to enable / disable the marker
* {api:anychart.core.axisMarkers.GanttLine#stroke}stroke(){api} to configure the stroke

**Note:** Alternatively, you can specify these settings as an object and pass it to {api:anychart.core.ui.Timeline#lineMarker}lineMarker(){api}.

The {api:anychart.core.axisMarkers.GanttLine#value}value(){api} method is required to set the date on which you want the marker to be displayed. You can either set an exact date or use one of the enums from {api:anychart.enums.GanttDateTimeMarkers}anychart.enums.GanttDateTimeMarkers{api}:

* `start`
* `end`
* `current`

In this sample, there are two line markers with the stroke configured:

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

{sample :height 220}GANTT\_NEW\_Timeline\_Markers\_01{sample}

## Range

* {api:anychart.core.axisMarkers.GanttRange}anychart.core.axisMarkers.GanttRange{api}
* {api:anychart.enums.GanttDateTimeMarkers}anychart.enums.GanttDateTimeMarkers{api} + `current`, `end`, `start`
* {api:anychart.core.ui.Background}anychart.core.ui.Background{api}
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

{sample :height 220}GANTT\_NEW\_Timeline\_Markers\_02{sample}

## Text

misc:

* {api:anychart.core.axisMarkers.GanttText}anychart.core.axisMarkers.GanttText{api}
* {api:anychart.enums.GanttDateTimeMarkers}anychart.enums.GanttDateTimeMarkers{api} + `current`, `end`, `start`
* {api:anychart.core.ui.Timeline#textMarker}textMarker(){api}
* можно задать настройки как объект

methods:

* {api:anychart.core.axisMarkers.GanttText#enabled}enabled(){api}, {api:anychart.core.axisMarkers.GanttText#value}value(){api}, {api:anychart.core.axisMarkers.GanttText#text}text(){api}
* {api:anychart.core.axisMarkers.GanttText#useHtmle}useHtml(){api}
* {api:anychart.core.axisMarkers.GanttText#fontColor}fontColor(){api}, {api:anychart.core.axisMarkers.GanttText#fontFamily}fontFamily(){api}, {api:anychart.core.axisMarkers.GanttText#fontSize}fontSize(){api}, {api:anychart.core.axisMarkers.GanttText#fontWeight}fontWeight(){api}
* {api:anychart.core.axisMarkers.GanttText#background}background(){api}
* {api:anychart.core.axisMarkers.GanttText#rotation}rotation(){api}, {api:anychart.core.axisMarkers.GanttText#padding}padding(){api}, {api:anychart.core.axisMarkers.GanttText#offsetX}offsetX(){api}, {api:anychart.core.axisMarkers.GanttText#offsetY}offsetY(){api}


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

{sample :height 220}GANTT\_NEW\_Timeline\_Markers\_03{sample}