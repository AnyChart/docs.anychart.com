{:index 7}
# Line Markers

* [Overview](#overview)
* [Declare](#declare)
* [Visualization](#visualization)
* [Layout](#layout)
* [Multiple Lines](#multiple_lines)

## Overview

Line marker is a line that is drawn on chart plot and bound to some value on an axis. It may be used to show a trend or mark an important value.

## Declare

To create a line marker use the {api:anychart.axisMarkers#line}**.lineMarker()**{api} method. By default this method creates a marker on a primary y scale. To set a position for a marker use {api:anychart.axisMarkers.Line#value}**.value()**{api} method.

```
  var marker = chart.lineMarker();
  marker.value(9000);
```

Here is a sample with a line marker on Y Axis:

{sample}AGST\_Line\_Marker\_03{sample}


## Visualization

Line marker appearance is defined using {api:anychart.core.axisMarkers.Line#stroke}**.stroke()**{api} method, like any other line in AnyChart.

```
  var marker = chart.lineMarker();
  marker.value(9000);
  marker.stroke({
     thickness: 2,
     color: green,
     dash: "2 7"
  });
```

Here is a sample with a dash line marker:

{sample}AGST\_Line\_Marker\_04{sample}

## Layout

You can easily manage line marker's layout using {api:anychart.axisMarkers.Line#layout}**.layout()**{api} method. Using this method you can set horizontal or vertical placement. Don't forget to bind markers to a scale using {api:anychart.axisMarkers.Line#scale}**.scale()**{api} method or your marker will be bound to the primary y scale.

```
  var marker = chart.lineMarker();
  marker.layout("vertical");
  marker.value(Date.UTC(2016, 1, 01));
  marker.scale(chart.xScale());
```

Here is a sample that shows the production of crude oil. The line marker is used to mark the date of chart's creation which means that all the data to the right of the marker is a prediction for the future.

{sample}AGST\_Line\_Marker\_06{sample}

## Multiple Lines

AnyChart does not set any limits on the number of line markers on the chart plot. To create multiple lines the 
{api:anychart.charts.Cartesian#lineMarker}**.lineMarker()**{api} method should be called with an index as a parameter. 

```
  // define first marker
  var marker1 = chart.lineMarker(0);
  
  // define second marker
  var marker2 = chart.lineMarker(1);
```

After defining a marker it is vital **to bind a marker to a scale and set markers layout**. Otherwise, you will get a horizontal marker that is bound to the primary y scale.
  
```
  var marker1 = chart.lineMarker(0);
  var marker2 = chart.lineMarker(1);
  
  // set scale for the first marker
  marker1.scale(chart.yScale());
  // set layout for the first marker
  marker1.layout("horizontal");
  
  // set scale for the second marker
  marker2.scale(chart.yScale());
  // set layout for the second marker
  marker2.layout("horizontal");
```

Here is a sample with multiple lines. Both of them indicate extremes of the chart.

{sample}AGST\_Line\_Marker\_05{sample}
