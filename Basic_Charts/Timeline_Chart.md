{:index 6.1}

# Timeline Chart

## Overview

A timeline is a display of a list of events in chronological order. It is typically a graphic design showing a long bar labelled with dates paralleling it, and usually contemporaneous events. A [Gantt chart](../Gantt_Chart) is a form of timeline used in project management.

## Modules

The Timeline chart requires adding the [Core](../Quick_Start/Modules#core) and [Timeline Chart](../Quick_Start/Modules#timeline) modules:

```
<script src="https://cdn.anychart.com/releases/8.6.0/js/anychart-core.min.js"></script>
```

```
<script src="https://cdn.anychart.com/releases/8.6.0/js/anychart-timeline.min.js"></script>
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

Here is a live sample:

{sample}BCT\_Timeline\_Chart\_01{sample}