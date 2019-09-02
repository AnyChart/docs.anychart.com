{:index 6.1}

# Timeline Chart

## Overview

A timeline chart is...

/ a display of a list of events in chronological order. It is typically a graphic design showing a long bar labelled with dates paralleling it, and usually contemporaneous events. A [Gantt chart](../Gantt_Chart) is a form of timeline used in project management. /

This article explains how to create a basic Timeline chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Timeline chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Timeline](../Quick_Start/Modules#timeline)</td></tr>
<tr><th colspan=2>API</th></tr>
<tr><td>Class</td><td>{api:anychart.charts.Timeline}anychart.charts.Timeline{api}</td></tr>
<tr><th colspan=2>DATA</th></tr>
<tr><td>Data Fields</td><td>(?)</td></tr>
<tr><td>Multiple Series</td><td>N/A</td></tr>
<tr><th colspan=2>OPTIONS</th></tr>
<tr><td>Stacked</td><td>N/A</td></tr>
<tr><td>Vertical</td><td>N/A</td></tr>
<tr><td>3D</td><td>N/A</td></tr>
<tr><td>Error Bars</td><td>N/A</td></tr>
<tr><th colspan=2>SUPPORTED CHART PLOTS</th></tr>
<tr><td>Polar</td><td>N/A</td></tr>
<tr><td>Radar</td><td>N/A</td></tr>
<tr><td>Scatter</td><td>N/A</td></tr>
<tr><td>Stock</td><td>N/A</td></tr>
<tr><th colspan=2>RELATED TYPES</th></tr>
<tr><td></td><td>(?)</td></tr>
<tr><th colspan=2>SEE ALSO</th></tr>
<tr><td></td><td>[Chartopedia: Timeline Chart](https://www.anychart.com/chartopedia/chart-types/timeline-chart/)</td></tr>
<tr><td></td><td>[General Settings](General_Settings)</td></tr>
</table>

## Modules

The Timeline chart requires adding the [Core](../Quick_Start/Modules#core) and [Timeline Chart](../Quick_Start/Modules#timeline) modules:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-timeline.min.js"></script>
```

Learn more: [Modules](../Quick_Start/Modules).

## Quick Start

To create a Timeline chart, use the {api:anychart#timeline}anychart.timeline(){api} chart constructor.

Then call the {api:anychart.charts.Timeline#range}range(){api} and {api:anychart.charts.Timeline#moment}moment(){api} methods to create [range series](#range_series) and [moment series](#moment_series).

The following sample demonstrates how a basic Timeline chart is created:

```
// create data

var rangeData1 = [
  ["Task 1", Date.UTC(2004,0,4), Date.UTC(2004,7,1)],
  ["Task 2", Date.UTC(2004,7,1), Date.UTC(2005,8,10)]
];

var rangeData2 = [
  ["New Task 1", Date.UTC(2005,10,1), Date.UTC(2006,5,1)],
  ["New Task 2", Date.UTC(2006,5,15), Date.UTC(2006,11,1)]
];

var momentData1 = [
  [Date.UTC(2004,2,21), "Meeting 1"],
  [Date.UTC(2005,3,19), "Meeting 2"],
  [Date.UTC(2006,1,1),  "Meeting 3"]
];

var momentData2 = [
  [Date.UTC(2004,5,12), "Training 1"],
  [Date.UTC(2005,5,1),  "Training 2"],
  [Date.UTC(2006,1,26), "Training 3"]
];

// create a chart
var chart = anychart.timeline();

// create the first range series
var rangeSeries1 = chart.range(rangeData1);

// create the second range series
var rangeSeries2 = chart.range(rangeData2);

// create the first moment series
var momentSeries1 = chart.moment(momentData1);

// create the second moment series
var momentSeries2 = chart.moment(momentData2);

// set the container id
chart.container("container");

// initiate drawing the chart  
chart.draw();
```

{sample}BCT\_Timeline\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Timeline chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

There are two types of series: range and moment. Data for them are passed to the {api:anychart.charts.Timeline#range}range(){api} and {api:anychart.charts.Timeline#moment}moment(){api} methods.

Below you can find data fields that are required if you use object notation to set the data.

With [range series](#range_series), use the following fields:

* `name` to set names of ranges
* `start` to set  start dates
* `end` to set end dates

With [moment series](#moment_series), use these fields:

* `y` to set names of moments
* `x` to set dates

**Note:** It is possible to add custom fields to your data - see the [Labels and Tooltips](#labels_and_tooltips) section of this article.

If ranges overlap, they are drawn with different heights, like two first ranges in the following sample:

```
// create data

var rangeData1 = [
  {name: "Task 1", start: Date.UTC(2004,0,4), end: Date.UTC(2004,11,1)},
  {name: "Task 2", start: Date.UTC(2004,7,1), end: Date.UTC(2005,8,10)}
];

var rangeData2 = [
  {name: "New Task 1", start: Date.UTC(2005,10,1), end: Date.UTC(2006,5,1)},
  {name: "New Task 2", start: Date.UTC(2006,5,15), end: Date.UTC(2006,11,1)}
];

var momentData1 = [
  {x: Date.UTC(2004,2,21), y: "Meeting 1"},
  {x: Date.UTC(2005,3,19), y: "Meeting 2"},
  {x: Date.UTC(2006,1,1),  y: "Meeting 3"}
];

var momentData2 = [
  {x: Date.UTC(2004,5,12), y: "Training 1"},
  {x: Date.UTC(2005,5,1),  y: "Training 2"},
  {x: Date.UTC(2006,1,26), y: "Training 3"}
];

// create a chart
var chart = anychart.timeline();

// create the first range series
var rangeSeries1 = chart.range(rangeData1);

// create the second range series
var rangeSeries2 = chart.range(rangeData2);

// create the first moment series
var momentSeries1 = chart.moment(momentData1);

// create the second moment series
var momentSeries2 = chart.moment(momentData2);
```

{sample}BCT\_Timeline\_Chart\_02{sample}

### Range Series

Range series are used to show events that have duration.

To create a range series, call the {api:anychart.charts.Timeline#range}range(){api} method. In your [data](#data), add the `name`, `start`, and `end` fields.

You can adjust the height, direction, and appearance of all ranges in a series or of an individual range, as explained in the subsections below. Also, you can configure their labels and tooltips – see the [Labels and Tooltips](#labels_and_tooltips) section.

#### All Ranges

To configure the range series, use the following methods:

* {api:anychart.core.timeline.series.Range#height}height(){api} to set the height
* {api:anychart.core.timeline.series.Range#direction}direction(){api} to set the direction

The available directions are listed in {api:anychart.enums.Direction}anychart.enums.Direction{api}:

* `up`
* `down`
* `odd-even`
* `auto`

The [appearance](../Appearance_Settings) of ranges can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.timeline.series.Range#normal}normal(){api}, {api:anychart.core.timeline.series.Range#hovered}hovered(){api}, and {api:anychart.core.timeline.series.Range#selected}selected(){api} methods.

Combine them with methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}:

* {api:anychart.core.StateSettings#fill}fill(){api} to set the fill
* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke


```
// create the first range series
var rangeSeries1 = chart.range(rangeData1);

// configure the first range series
rangeSeries1.height(40);
rangeSeries1.direction("down");
rangeSeries1.normal().fill("#ff6600");
rangeSeries1.hovered().fill("#ff6600", 0.5);
rangeSeries1.selected().fill("#004e72", 0.5);
rangeSeries1.normal().stroke("#004e72");
rangeSeries1.hovered().stroke("#004e72", 2);
rangeSeries1.selected().stroke("#004e72", 2);

// create the second range series
var rangeSeries2 = chart.range(rangeData2);

// configure the second range series
rangeSeries2.direction("down");
rangeSeries2.normal().fill("#00a8e0");
rangeSeries2.hovered().fill("#00a8e0", 0.5);
rangeSeries2.selected().fill("#004e72", 0.5);
rangeSeries2.normal().stroke("#004e72");
rangeSeries2.hovered().stroke("#004e72", 2);
rangeSeries2.selected().stroke("#004e72", 2);
```

{sample}BCT\_Timeline\_Chart\_03{sample}

#### Individual Ranges

If you use object notation to set the data, it is possible to configure each node individually. Use extra data fields corresponding to the methods mentioned above:

```
// create data

var rangeData1 = [
  {name: "Task 1", start: Date.UTC(2004,0,4), end: Date.UTC(2004,7,1),
   normal: {fill: "#01b53f", stroke: "null"},
   hovered: {fill: "#01b53f", stroke: "null"},
   selected: {fill: "#01b53f", stroke: "null"}
  },
  {name: "Task 2", start: Date.UTC(2004,7,1), end: Date.UTC(2005,8,10),
   normal: {fill: "#ff6600", stroke: "null"},
   hovered: {fill: "#ff6600", stroke: "null"},
   selected: {fill: "#ff6600", stroke: "null"}
  }
];

var rangeData2 = [
  {name: "New Task 1", start: Date.UTC(2005,10,1), end: Date.UTC(2006,5,1),
   normal: {fill: "#00a8e0", stroke: "null"},
   hovered: {fill: "#00a8e0", stroke: "null"},
   selected: {fill: "#00a8e0", stroke: "null"}
  },
  {name: "New Task 2", start: Date.UTC(2006,5,15), end: Date.UTC(2006,11,1),
   normal: {fill: "#f6bc16", stroke: "null"},
   hovered: {fill: "#f6bc16", stroke: "null"},
   selected: {fill: "#f6bc16", stroke: "null"}
  }
];

// create a chart
var chart = anychart.timeline();

// create the first range series
var rangeSeries1 = chart.range(rangeData1);

// create the second range series
var rangeSeries2 = chart.range(rangeData2);
```

{sample}BCT\_Timeline\_Chart\_04{sample}

### Moment Series

Moment series are used to show events with zero.

To create a moment series, call the {api:anychart.charts.Timeline#moment}moment(){api} method. In your [data](#data), use the `y` and `x` fields.

You can adjust the direction and appearance of all ranges in a series or of an individual range, as explained in the subsections below. Also, you can configure their labels and tooltips – see the [Labels and Tooltips](#labels_and_tooltips) section.

#### All Moments

The {api:anychart.core.timeline.series.Moment#direction}direction(){api} method allows setting the direction of the moment series as one of the enums from {api:anychart.enums.Direction}anychart.enums.Direction{api}:

* `up`
* `down`
* `odd-even`
* `auto`

The [appearance](../Appearance_Settings) of moments and their markers as well as the shape and size of markers can be configured in three [states](../Common_Settings/Interactivity/States): **normal**, **hover**, and **selected**. Use the {api:anychart.core.timeline.series.Moment#normal}normal(){api}, {api:anychart.core.timeline.series.Moment#hovered}hovered(){api}, and {api:anychart.core.timeline.series.Moment#selected}selected(){api} methods.

Combine them with methods from {api:anychart.core.StateSettings}anychart.core.StateSettings{api}:

* {api:anychart.core.StateSettings#stroke}stroke(){api} to set the stroke
* {api:anychart.core.StateSettings#markers}markers(){api} to access markers

To adjust markers, use the following methods:

* {api:anychart.core.ui.MarkersFactory#type}type(){api} to set the type – {api:anychart.enums.MarkerType}anychart.enums.MarkerType{api}
* {api:anychart.core.ui.MarkersFactory#size}size(){api} to set the size
* {api:anychart.core.ui.MarkersFactory#fill}fill(){api} to set the fill
* {api:anychart.core.ui.MarkersFactory#stroke}stroke(){api} to set the stroke


```
// create the first moment series
var momentSeries1 = chart.moment(momentData1);

// configure the first moment series
momentSeries1.direction("down");
momentSeries1.normal().stroke("#dd2c00", 1, "5 3", "round");
momentSeries1.hovered().stroke("#dd2c00", 2, "5 3", "round");
momentSeries1.selected().stroke("#004e72", 2, "5 3", "round"); 

// configure markers of the first moment series 
momentSeries1.markers().type("circle");
momentSeries1.normal().markers().size(8);
momentSeries1.hovered().markers().size(8);
momentSeries1.selected().markers().size(8);
momentSeries1.normal().markers().fill("#dd2c00");
momentSeries1.hovered().markers().fill("#dd2c00");
momentSeries1.selected().markers().fill("#004e72");
momentSeries1.normal().markers().stroke("#dd2c00", 1);
momentSeries1.hovered().markers().stroke("#dd2c00", 2);
momentSeries1.selected().markers().stroke("#004e72", 2);

// create the second moment series
var momentSeries2 = chart.moment(momentData2);

// configure the second moment series
momentSeries2.direction("down");
momentSeries2.normal().stroke("#00bfa5", 1);
momentSeries2.hovered().stroke("#00bfa5", 2);
momentSeries2.selected().stroke("#004e72", 2); 

// configure markers of the second moment series
momentSeries2.markers().type("diamond"); 
momentSeries2.normal().markers().size(8);
momentSeries2.hovered().markers().size(8);
momentSeries2.selected().markers().size(8);
momentSeries2.normal().markers().fill("#00bfa5");
momentSeries2.hovered().markers().fill("#00bfa5");
momentSeries2.selected().markers().fill("#004e72");
momentSeries2.normal().markers().stroke("#00bfa5", 1);
momentSeries2.hovered().markers().stroke("#00bfa5", 2);
momentSeries2.selected().markers().stroke("#004e72", 2);
```

{sample}BCT\_Timeline\_Chart\_05{sample}

#### Individual Moments

If you use object notation to set the data, it is possible to configure each node individually. Use extra data fields corresponding to the methods mentioned above:

```
// create data

var momentData1 = [
  {x: Date.UTC(2004,2,21), y: "Meeting 1",
   normal:   {
               marker: {
                         type: "star5", size: 8,
                         fill: "#dd2c00", stroke: "2 #dd2c00"
                       },
               stroke: "2 #dd2c00"
             },
   hovered:  {
               marker: {
                         size: 8,
                         fill: "#dd2c00", stroke: "2 #dd2c00"
                       },
               stroke: "2 #dd2c00"
             },
   selected: {
                marker: {
                          size: 8,
                          fill: "#dd2c00", stroke: "2 #dd2c00"
                        },
                stroke: "2 #dd2c00"
             }
  },
  {x: Date.UTC(2005,3,19), y: "Meeting 2"},
  {x: Date.UTC(2006,1,1),  y: "Meeting 3"}
];

var momentData2 = [
  {x: Date.UTC(2004,5,12), y: "Training 1"},
  {x: Date.UTC(2005,5,1),  y: "Training 2"},
  {x: Date.UTC(2006,1,26), y: "Training 3"}
];

// create a chart
var chart = anychart.timeline();

// create the first moment series
var momentSeries1 = chart.moment(momentData1);

// create the second moment series
var momentSeries2 = chart.moment(momentData2);
```

{sample}BCT\_Timeline\_Chart\_06{sample}

### Axis

To configure the [appearance](../Appearance_Settings) and other settings of the axis, combine {api:anychart.charts.Timeline#axis}axis(){api} with the following methods:

* {api:anychart.core.axes.Timeline#height}height(){api} to set the height
* {api:anychart.core.axes.Timeline#fill}fill(){api} to set the fill
* {api:anychart.core.axes.Timeline#stroke}stroke(){api} to set the stroke
* {api:anychart.core.axes.Timeline#ticks}ticks(){api} + {api:anychart.core.axes.TimelineTicks#stroke}stroke(){api} to adjust the stroke of ticks

In addition, you can adjust the labels displayed on the axis – see the [Labels and Tooltips](#labels_and_tooltips) section.

**Note:** The way how axis looks is also affected by settings of the [scale](#scale).

This sample shows how to configure the axis:

```
// configure the axis
chart.axis().height(80);
chart.axis().fill("#00724e");
chart.axis().stroke("#004e72");
chart.axis().ticks().stroke("#00b37a", 3);
```

{sample}BCT\_Timeline\_Chart\_07{sample}

### Appearance

You can configure the [appearance](../Appearance_Settings) of moment and range series and the axis. See the [Moment Series](#moment_series), [Range Series](#range_series), [Axis](#axis) sections to learn more.

### Markers

You can add three types of markers to the timeline: 
line, range, and text. The sections below explain in detail how to configure each type.

#### Text

To add a text marker, use the {api:anychart.charts.Timeline#textMarker}textMarker(){api} method. Specify the index of the marker:

```
var textMarker1 = chart.textMarker(0);
var textMarker2 = chart.textMarker(1);
```

To configure the marker, use the following methods:

* {api:anychart.core.axisMarkers.Text#value}value(){api} to set the date
* {api:anychart.core.axisMarkers.Text#text}text(){api} to set the text
* {api:anychart.core.axisMarkers.Text#useHtml}useHtml(){api} to enable HTML
* {api:anychart.core.axisMarkers.Text#fontColor}fontColor(){api}, {api:anychart.core.axisMarkers.Text#fontFamily}fontFamily(){api}, {api:anychart.core.axisMarkers.Text#fontSize}fontSize(){api}, {api:anychart.core.axisMarkers.Text#fontWeight}fontWeight(){api}, etc. to configure the font
* {api:anychart.core.axisMarkers.Text#background}background(){api} to set the background
* {api:anychart.core.axisMarkers.Text#rotation}rotation(){api}, {api:anychart.core.axisMarkers.Text#padding}padding(){api}, {api:anychart.core.axisMarkers.Text#offsetX}offsetX(){api},  {api:anychart.core.axisMarkers.Text#offsetY}offsetY(){api}, etc, to set the position
* {api:anychart.core.axisMarkers.Text#enabled}enabled(){api}, to enable / disable the marker

In the sample below, there are two text markers with the font, background, and position configured. In the text of the first marker, HTML is used.

```
// create two text markers
var textMarker1 = chart.textMarker(0);
var textMarker2 = chart.textMarker(1);

// set the values of markers
textMarker1.value(Date.UTC(2004,0,1));
textMarker2.value(Date.UTC(2005,0,1));

// set the text of markers
textMarker1.useHtml(true);
textMarker1.text(
  "year: <br><span style='font-size:20'>" +
  anychart.format.dateTime(textMarker1.value(), "y") +
  "</span>");
textMarker2.text(
  "year: " +
  anychart.format.dateTime(textMarker2.value(), "y")
);

// configure the font of markers
textMarker1.fontColor("#dd2c00");
textMarker2.fontColor("#00bfa5");
textMarker1.fontWeight(600);
textMarker2.fontWeight(600);

// configure the background of the first marker
textMarker1.background().enabled(true);
textMarker1.background().fill("#dd2c00", 0.2);
textMarker1.background().stroke("#dd2c00", 2);

// configure the position of markers
textMarker1.rotation(0);
textMarker1.padding(10);
textMarker1.offsetX(-95);
textMarker1.offsetY(40);
textMarker2.offsetY(10);
```

{sample}BCT\_Timeline\_Chart\_08{sample}

#### Line

To add a line marker, use the {api:anychart.charts.Timeline#lineMarker}lineMarker(){api} method. Specify the index of the marker:

```
var lineMarker1 = chart.lineMarker(0);
var lineMarker2 = chart.lineMarker(1);
```

To configure the marker, use the following methods:

* {api:anychart.core.axisMarkers.Line#value}value(){api} to set the date
* {api:anychart.core.axisMarkers.Line#stroke}stroke(){api} to set the stroke
* {api:anychart.core.axisMarkers.Line#enabled}enabled(){api}, to enable / disable the marker

In this sample, there are two line markers with the stroke configured and two [text markers](#text) bound to them:

```
// create two line markers
var lineMarker1 = chart.lineMarker(0);
var lineMarker2 = chart.lineMarker(1);

// set values of markers
lineMarker1.value(Date.UTC(2004,0,1));
lineMarker2.value(Date.UTC(2005,0,1));

// set the stroke of markers
lineMarker1.stroke("#dd2c00", 3);
lineMarker2.stroke("#00bfa5", 3, "10 5", "round");
```

```
// create two text markers
var textMarker1 = chart.textMarker(0);
var textMarker2 = chart.textMarker(1);

// get the values of line markers
var lineMarker1Value = lineMarker1.value()
var lineMarker2Value = lineMarker2.value();

// set the values of text markers
textMarker1.value(lineMarker1Value);
textMarker2.value(lineMarker2Value);
```

{sample}BCT\_Timeline\_Chart\_09{sample}

To add a today marker (a line marker displayed on the current data), use the {api:anychart.charts.Timeline#todayMarker}todayMarker(){api} method. To configure it, use the methods of the line marker listed above.

In the following sample, a today marker is created and configured, and a [text marker](#text) is bound to it:

```
// create and configure a today marker
var todayMarker = chart.todayMarker();
todayMarker.stroke("#dd2c00", 3);
```

```
// create a text marker
var textMarker = chart.textMarker(0); 
var todayMarkerValue = todayMarker.value();
textMarker.value(todayMarkerValue);
```

{sample}BCT\_Timeline\_Chart\_10{sample}

#### Range

* {api:anychart.charts.Timeline#rangeMarker}rangeMarker(){api}

To add a range marker, use the {api:anychart.charts.Timeline#rangeMarker}rangeMarker(){api} method. Specify the index of the marker:

```
var rangeMarker1 = chart.rangeMarker(0);
var rangeMarker2 = chart.rangeMarker(1);
```

To configure the marker, use the following methods:

* {api:anychart.core.axisMarkers.Range#from}from(){api} to set the start date
* {api:anychart.core.axisMarkers.Range#to}to(){api} to set the end date
* {api:anychart.core.axisMarkers.Range#fill}fill(){api} to set the fill
* {api:anychart.core.axisMarkers.Range#enabled}enabled(){api}, to enable / disable the marker

In the sample below, there are two range markers with the fill configured and two [text markers](#text) bound to them:

```
// create two range markers
var rangeMarker1 = chart.rangeMarker(0);
var rangeMarker2 = chart.rangeMarker(1);

// set the range of the first marker
rangeMarker1.from(Date.UTC(2004,0,1));
rangeMarker1.to(Date.UTC(2005,0,1));

// set the range of the second marker
rangeMarker2.from(Date.UTC(2005,0,1));
rangeMarker2.to(Date.UTC(2006,0,1));

// set the fill of markers
rangeMarker1.fill("#dd2c00", 0.2);
rangeMarker2.fill("#00bfa5", 0.2);
```

```
// create two text markers
var textMarker1 = chart.textMarker(0);
var textMarker2 = chart.textMarker(1);

// get the 'from' values of line markers
var rangeMarker1FromValue = rangeMarker1.from()
var rangeMarker2FromValue = rangeMarker2.from();

// set the values of text markers
textMarker1.value(rangeMarker1FromValue);
textMarker2.value(rangeMarker2FromValue);
```

{sample}BCT\_Timeline\_Chart\_11{sample}

### Labels and Tooltips

[Labels](../Common_Settings/Labels) are text or image elements that can be placed anywhere on any chart (you can enable them on a whole series or in a single point). For text labels, font settings and [text formatters](../Common_Settings/Text_Formatters) are available.

A [Tooltip](../Common_Settings/Tooltip) is a text box displayed when a point on a chart is hovered over. There is a number of visual and other settings available: for example, you can edit the text by using font settings and text formatters, change the style of background, adjust the position of a tooltip, and so on.

#### Tokens

To change the text of all elements of the chart, combine the {api:anychart.charts.Timeline#labels}labels(){api} and {api:anychart.core.ui.LabelsFactory#format}format(){api} methods with [tokens](../Common_Settings/Text_Formatters#string_tokens).

To change the text of tooltips, do the same with the {api:anychart.charts.Timeline#tooltip}tooltip(){api} and {api:anychart.core.ui.Tooltip#format}format(){api} methods.

It is also possible to separately adjust labels and tooltips of the range and moment series well as labels of the axis. Use the corresponding methods of these elements with the tokens listed below.

Tokens for the [range series](#range_series):

* `{%name}` – the name of the range
* `{%seriesName}` – the name of the series
* `{%start}` – the start date (Unix timestamp)
* `{%end}` – the end date (Unix timestamp)

Tokens for the [moment series](#moment_series):

* `{%seriesName}` – the name of the series
* `{%y}` – the name of the moment
* `{%x}` – the date (Unix timestamp)

Tokens for the [axis](#axis):

* `{%tickValue}` – the tick value (Unix timestamp)

Also, you can always add a custom field to your data and use a custom token corresponding to it.

The following sample shows how to configure labels and tooltips and work with tokens to format their text. Along with regular tokens, a custom token `{%manager}` is used.

{sample}BCT\_Timeline\_Chart\_12{sample}

```
// format labels of range series
var rangeLabelFormat =
  "{%start}{dateTimeFormat:MMM} – {%end}{dateTimeFormat:MMM}";
rangeSeries1.labels().format(rangeLabelFormat);
rangeSeries2.labels().format(rangeLabelFormat);

// configure labels of range series
rangeSeries1.labels().fontColor("#64b5f6");
rangeSeries2.labels().fontColor("#1976d2");

// format labels of moment series
var momentLabelFormat = "{%x}{dateTimeFormat:dd MMM}";
momentSeries1.labels().format(momentLabelFormat);
momentSeries2.labels().format(momentLabelFormat);

// configure labels of moment series
momentSeries1.labels().width(50);
momentSeries2.labels().width(50);
momentSeries1.labels().fontColor("#96a6a6");
momentSeries2.labels().fontColor("#96a6a6");
momentSeries1.labels().background().stroke("#ffa000", 2);
momentSeries2.labels().background().stroke("#ffd54f", 2);

//format labels of the axis
chart.axis().labels().format(
  "{%tickValue}{dateTimeFormat:MMM y}"
);
```

```
// format tooltips of range series
var rangeTooltipFormat =
  "<span style='font-weight:600;font-size:12pt'>" +
  "{%name}</span><br><br>Dates: " +
  "{%start}{dateTimeFormat:dd MMM} – " +
  "{%end}{dateTimeFormat:dd MMM}" +
  "<br>Group: {%seriesName}<br><br>Manager: {%manager}";
rangeSeries1.tooltip().useHtml(true);
rangeSeries2.tooltip().useHtml(true);   
rangeSeries1.tooltip().format(rangeTooltipFormat);
rangeSeries2.tooltip().format(rangeTooltipFormat);

// configure tooltips of range series
rangeSeries1.tooltip().title().enabled(false);
rangeSeries2.tooltip().title().enabled(false);
rangeSeries1.tooltip().separator().enabled(false);
rangeSeries2.tooltip().separator().enabled(false);

// format tooltips of moment series
var momentTooltipFormat =
  "<span style='font-weight:600;font-size:12pt'>" +
  "{%y}</span><br><br>Date: {%x}{dateTimeFormat:dd MMM}" +
  "<br>Group: {%seriesName}";
momentSeries1.tooltip().useHtml(true);
momentSeries2.tooltip().useHtml(true);   
momentSeries1.tooltip().format(momentTooltipFormat);
momentSeries2.tooltip().format(momentTooltipFormat);

// configure tooltips of moment series
momentSeries1.tooltip().title().enabled(false);
momentSeries2.tooltip().title().enabled(false);
momentSeries1.tooltip().separator().enabled(false);
momentSeries2.tooltip().separator().enabled(false);
```

#### Formatting Functions

To configure labels and tooltips, you can use [formatting functions](../Common_Settings/Text_Formatters#formatting_functions) and the fields listed below.

Function fields for the [range series](#range_series):

* `seriesName` – the name of the series
* `start` – the start date
* `end` – the end date

Function fields for the [moment series](#moment_series):

* `value` – the name of the moment
* `seriesName` – the name of the series
* `x` – the date (Unix timestamp)

Function fields for the [axis](#axis):

* `tickValue` – the tick value (Unix timestamp)

You can also add a custom field to your data and refer to it by using the {api:anychart.format.Context#getData}getData(){api} method.

The sample below demonstrates how to configure labels and tooltips and work with formatting functions to format their text. Along with regular fields, a custom field `manager` is used.

{sample}BCT\_Timeline\_Chart\_13{sample}

```
// a function for formatting labels of range series
function rangeLabelFormat() {
  return this.getData("name").toUpperCase();  
}

// format labels of range series
rangeSeries1.labels().format(rangeLabelFormat);
rangeSeries2.labels().format(rangeLabelFormat);

// configure labels of range series
rangeSeries1.labels().fontColor("#64b5f6");
rangeSeries2.labels().fontColor("#1976d2");

// a functions for formatting labels of moment series
function momentLabelFormat() {
  return this.value.toUpperCase();  
}

// format labels of moment series
momentSeries1.labels().format(momentLabelFormat);
momentSeries2.labels().format(momentLabelFormat);

// configure labels of moment series
momentSeries1.labels().width(80);
momentSeries2.labels().width(80);
momentSeries1.labels().fontColor("#96a6a6");
momentSeries2.labels().fontColor("#96a6a6");
momentSeries1.labels().background().stroke("#ffa000", 2);
momentSeries2.labels().background().stroke("#ffd54f", 2);

// format labels of the axis
chart.axis().labels().format(function(){
  return this.value.substr(2); 
});
```

```
// a function for formatting tooltips of range series
function rangeTooltipFormat() {
  var duration = (this.end - this.start) / 1000 / 3600 / 24;
  var start = anychart.format.dateTime(this.start, "dd MMM");
  var end = anychart.format.dateTime(this.end, "dd MMM");
  return "<span style='font-weight:600;font-size:12pt'>" + 
          this.getData("name").toUpperCase() + "</span>" +
          "<br><br>Dates: " + start + " – " + end + 
          "<br>Duration: " + duration + " days" +
          "<br>Group: " + this.seriesName +
          "<br><br>Manager: " + this.getData("manager");  
}

// format tooltips of range series
rangeSeries1.tooltip().useHtml(true);
rangeSeries2.tooltip().useHtml(true); 
rangeSeries1.tooltip().format(rangeTooltipFormat);
rangeSeries2.tooltip().format(rangeTooltipFormat);

// configure tooltips of range series
rangeSeries1.tooltip().title().enabled(false);
rangeSeries2.tooltip().title().enabled(false);
rangeSeries1.tooltip().separator().enabled(false);
rangeSeries2.tooltip().separator().enabled(false);

// a function for formatting tooltips of range series
function momentTooltipFormat() {
  var date = anychart.format.dateTime(this.x, "dd MMM");
  return "<span style='font-weight:600;font-size:12pt'>" + 
          this.value.toUpperCase() + "</span>" +
          "<br><br>Date: " + date + 
          "<br>Group: " + this.seriesName;
}

// format tooltips of moment series
momentSeries1.tooltip().useHtml(true);
momentSeries2.tooltip().useHtml(true); 
momentSeries1.tooltip().format(momentTooltipFormat);
momentSeries2.tooltip().format(momentTooltipFormat);

// configure tooltips of moment series
momentSeries1.tooltip().title().enabled(false);
momentSeries2.tooltip().title().enabled(false);
momentSeries1.tooltip().separator().enabled(false);
momentSeries2.tooltip().separator().enabled(false);
```

### Scale

Settings of the scale affect the way how the [axis](#axis) looks. Configuring zoom levels also affects the way how [navigation](#navigation) and default [behavior](#behavior) work.

#### Basic Settings

To configure the scale, combine {api:anychart.charts.Timeline#scale}scale(){api} with the following methods:

* {api:anychart.scales.GanttDateTime#minimum}minimum(){api} to set the minimum date of the scale
* {api:anychart.scales.GanttDateTime#maximum}maximum(){api} to set the maximum date of the scale
* {api:anychart.scales.GanttDateTime#fiscalYearStartMonth}fiscalYearStartMonth(){api} to set the starting month of the fiscal year

**Note:** The starting month of the fiscal year is set as a number from 1 to 12. The default value is 1 (January).

This sample shows how to adjust the scale. Labels of the axis are configured to display the starting month of the fiscal year.

```
// set the minimum and maximum values of the scale
chart.scale().minimum(Date.UTC(2003,7,30));
chart.scale().maximum(Date.UTC(2007,5,30));

// set the starting month of the fiscal year
chart.scale().fiscalYearStartMonth(7);

// format labels of the axis
chart.axis().labels().format(
  "{%tickValue}{dateTimeFormat: MMM y}"
);
```

{sample}BCT\_Timeline\_Chart\_14{sample}

#### Zoom Levels

It is possible to zoom the Timeline chart in and out – for example, with the help of the mouse wheel. See the [Navigation](#navigation) and [Behavior](#behavior) sections to learn more. (Please note that in all previous samples zooming is disabled.)

You can specify time units that are displayed by the [axis](#axis) on each zoom level as well as in the default state. Combine {api:anychart.charts.Timeline#scale}scale(){api} with {api:anychart.scales.GanttDateTime#zoomLevels}zoomLevels(){api}.

Zoom levels are set as an array of objects. In each object, you should specify two values, `unit` and `count`: the time unit of the level and the number of units represented by one tick of the axis.

```
// set zoom levels of the scale
chart.scale().zoomLevels([
  [
    {unit: "year", count: 1},
    {unit: "month", count: 3}
  ]
]);
```

**Note:** Levels must be listed in a particular order: from the level with the smallest time unit to the level with the largest one, which is displayed in the default state. For example, the millisecond goes before the second, the month goes before the year, and so on.

The available units can be found in {api:anychart.enums.Interval}anychart.enums.Interval{api}:

* `"millisecond"`
* `"second"`
* `"minute"`
* `"hour"`
* `"day"`
* `"week"`
* `"third-of-month"`
* `"month"`
* `"quarter"`
* `"semester"`
* `"year"`

In the sample below, you can zoom the chart with the mouse wheel. There are three zoom levels, the week, the month, and the quarter – the latter shown in the default state.

```
chart.scale().zoomLevels([
  [
    {"unit": "week", count: 1},
    {"unit": "month", count: 1},
    {"unit": "quarter", count: 1}
  ]
]);
```

{sample}BCT\_Timeline\_Chart\_15{sample}

### Navigation

By default, you can navigate Timeline charts with the help of the mouse – see the [Behavior](#behavior) section. Also, you can use special methods, Zoom Control Panel, and the scroller, as shown in the subsections below.

**Note:** The way how zooming works depends on settings of the scale. Read [Scale: Zoom Levels](#zoom_levels) to learn more.

#### Methods

Use the following methods to navigate the chart:

* {api:anychart.charts.Timeline#zoomTo}zoomTo(){api} to zoom to a range of dates
* {api:anychart.charts.Timeline#fit}fit(){api} to fit the chart to the container


```
// zoom the chart to the given dates
chart.zoomTo(Date.UTC(2005,3,1), Date.UTC(2006,3,1)); 
```

```
// fit the chart to the container
chart.fit();
```

This is how these methods work:

{sample}BCT\_Timeline\_Chart\_16{sample}

#### Scroller

Scroller allows scrolling and zooming the chart. You can find a detailed guide on this element in the [Common Settings: Scroller](../Common_Settings/Scroller) article.

To enable or disable the scroller, pass `true` / `false` either to the {api:anychart.charts.Timeline#scroller}scroller(){api} method of the chart or to the {api:anychart.core.ui.ChartScroller#enabled()}enabled(){api} method of the scroller:

```
// enable the scroller
chart.scroller(true);
```

```
// enable the scroller
chart.scroller().enabled(true);
```

To configure the scroller, use other methods of the {api:anychart.core.ui.ChartScroller}anychart.core.ui.ChartScroller{api} class.

The following sample demonstrates how to enable and disable the scroller. By default, the chart is zoomed to a range of dates with the help of the {api:anychart.charts.Timeline#zoomTo}zoomTo(){api} [method](#methods). The scroller allows to change the range.

{sample}BCT\_Timeline\_Chart\_17{sample}

#### Zoom Control Panel

The [Zoom Control Panel](../Common_Settings/UI_Controls/Zoom_Controls) is an HTML object with three buttons that allow zooming in, zooming out, and resetting the chart.

It requires adding the [Common UI](../Quick_Start/Modules#common_ui) module:

```
<script src="https://cdn.anychart.com/releases/{{branch-name}}/js/anychart-ui.min.js"></script>
```

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/css/anychart-ui.min.css?hcode=a0c21fc77e1449cc86299c5faa067dc4"/> 
```

Also, you should reference the `anychart-ui.min.css` and `anychart-font.min.css` files:

```
<link rel="stylesheet" type="text/css" href="https://cdn.anychart.com/releases/{{branch-name}}/fonts/css/anychart-font.min.css"/>
```

Then combine the {api:anychart.ui#zoom}anychart.ui.zoom(){api} method with {api:anychart.ui.Zoom#target}target(){api} and {api:anychart.ui.Zoom#render}render(){api} to create the panel:

```
// add a zoom control panel
var zoomController = anychart.ui.zoom();
zoomController.target(chart);
zoomController.render();
```

{sample}BCT\_Timeline\_Chart\_18{sample}

### Behavior

By default, users have an opportunity to scroll the Timeline chart by dragging and dropping it. Also, it is possible to zoom the chart in and out with the mouse wheel. (Please note that in most samples in this article zooming is disabled.)

To prevent zooming, combine the {api:anychart.charts.Timeline#interactivity}interactivity{api} and **zoomOnMouseWheel()** methods:

```
// prevent zooming the chart with the mouse wheel
chart.interactivity().zoomOnMouseWheel(false);
```

**Note:** The way how zooming works depends on settings of the scale. Read [Scale: Zoom Levels](#zoom_levels) to learn more.

The sample below shows how to disable and enable zooming:

{sample}BCT\_Timeline\_Chart\_19{sample}