{:index 6.1}

# Timeline Chart

## Overview

A timeline chart is...

[a display of a list of events in chronological order. It is typically a graphic design showing a long bar labelled with dates paralleling it, and usually contemporaneous events. A [Gantt chart](../Gantt_Chart) is a form of timeline used in project management.]

This article explains how to create a basic Timeline chart as well as configure settings that are specific to the type. You can also see the table below to get a brief overview of the Timeline chart's characteristics:

<table border="1" class="seriesTABLE">
<tr><td>Modules</td><td>[Core](../Quick_Start/Modules#core) + [Network Graph](../Quick_Start/Modules#timeline)</td></tr>
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

To create a Timeline chart, use the {api:anychart#timeline}anychart.timeline(){api} chart constructor, like in the following sample:

```
// create data
var rangesData = [
  ['Spirit Mars rover', Date.UTC(2004,0,4), Date.UTC(2010,2,22)],
  ['Opportunity Mars rover', Date.UTC(2004,0,25), Date.UTC(2018,5,10)],
  ['Mars Science Laboratory (Curiosity rover)', Date.UTC(2012,7,6)]
];

var spiritMoments = [
  [Date.UTC(2004,1,6), 'First intentional grinding of a rock'],
  [Date.UTC(2005,2,9), 'Dust devil cleaned solar panels'],
  [Date.UTC(2009,4,1), 'Stuck in the sand trap']
];

var oppyMoments = [
  [Date.UTC(2004,1,17), 'Digs hole with his wheel'],
  [Date.UTC(2005,0,14), 'Found meteorite'],
  [Date.UTC(2006,8,26), 'Reached Victoria crater'],
  [Date.UTC(2009,9,10), 'Found vulcanic rock'],
  [Date.UTC(2014,6,28), 'Drove more than 40 kilometers'],
  [Date.UTC(2018,5,1), 'Got caught in global sand storm']
];

var curiosityMoments = [
  [Date.UTC(2012, 7, 22), 'Started driving'],
  [Date.UTC(2014, 8, 1), 'Reached Mount Sharp'],
  [Date.UTC(2018, 10, 26), 'Spotted shiny object']
];

// create a chart
var chart = anychart.timeline();  

// create various series to be displayed on timeline
var rangesSeriesRovers = chart.range(rangesData).name('Mars rovers');
var spiritMomentsSeries = chart.moment(spiritMoments).name('Spirit rover');
var oppyMomentsSeries = chart.moment(oppyMoments).name('Opportunity rover');
var curiosityMomentsSeries = chart.moment(curiosityMoments).name('Curiosity rover');

// set the container id
chart.container('container');

// initiate drawing the chart  
chart.draw();
```

{sample}BCT\_Timeline\_Chart\_01{sample}

## General Settings

In AnyChart there are many settings that are configured in the same way for all chart types, including the Timeline chart (for example, legend and interactivity settings).

Read the overview of general settings: [General Settings](General_Settings).

## Special Settings

### Data

```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

### Moment Series

* {api:anychart.charts.Timeline#moment}moment(){api}
* {api:anychart.core.timeline.series.Moment}anychart.core.timeline.series.Moment{api}
* {api:anychart.core.timeline.series.Moment#direction}direction(){api}
* {api:anychart.core.timeline.series.Moment#markers}markers(){api} + {api:anychart.core.ui.MarkersFactory}anychart.core.ui.MarkersFactory{api}
* {api:anychart.core.timeline.series.Moment#normal}normal(){api} + {api:anychart.core.timeline.series.Moment#hovered}hovered(){api} + {api:anychart.core.timeline.series.Moment#selected}selected(){api}
* [appearance](../Appearance_Settings)


```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

### Range Series

* {api:anychart.charts.Timeline#range}range(){api}
* {api:anychart.core.timeline.series.Range}anychart.core.timeline.series.Range{api}
* {api:anychart.core.timeline.series.Range#direction}direction(){api}
* {api:anychart.core.timeline.series.Range#height}height(){api}
* {api:anychart.core.timeline.series.Range#normal}normal(){api} + {api:anychart.core.timeline.series.Range#hovered}hovered(){api} + {api:anychart.core.timeline.series.Range#selected}selected(){api}
* [appearance](../Appearance_Settings)


```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

### (?) Appearance

отсылочный раздел

### Markers

#### Line

* {api:anychart.charts.Timeline#lineMarker}lineMarker(){api}
* {api:anychart.charts.Timeline#todayMarker}todayMarker(){api}


```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

#### Range

* {api:anychart.charts.Timeline#rangeMarker}rangeMarker(){api}


```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

#### Text

* {api:anychart.charts.Timeline#textMarker}textMarker(){api}


```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

### (?) Labels and Tooltips

#### (?) Tokens

#### (?) Formatting Functions

### Navigation

#### Methods

* {api:anychart.charts.Timeline#fit}fit(){api}
* {api:anychart.charts.Timeline#scroll}scroll(){api}
* {api:anychart.charts.Timeline#zoomTo}zoomTo(){api}

пример на {api:anychart.charts.Timeline#fit}fit(){api}:

```

```

{sample}BCT\_Timeline\_Chart\_01{sample}

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

{sample}BCT\_Timeline\_Chart\_01{sample}