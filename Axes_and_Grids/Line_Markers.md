{:index 7}
# Line Markers

* [Overview](#overview)
* [Declare](#declare)
* [Visualization](#visualization)
* [Advanced Layout](#advanced_layout)
* [Multiple Lines](#multiple_lines)

## Overview

Line marker is a line that is drawn on chart plot and bound to some value on an axis. It may be used to show a trend or mark an important value. You can also place [Range Markers](../Axes_and_Grids/Range_Markers) to show Ranges and [Text Markers](../Axes_and_Grids/Text_Markers) to show Text.

## Declare

To create a line marker use the {api:anychart.charts.Cartesian#lineMarker}anychart.charts.Cartesian#lineMarker} method. By default this method creates a marker on a primary y axis. You can bind the marker to another axis using {api:anychart.core.axisMarkers.Line#axis}axis(){api} method. To set a position for a marker use {api:anychart.core.axisMarkers.Line#value}value(){api} method.

```
var yAxis = chart.yAxis();
  
var marker = chart.lineMarker();
marker.axis(yAxis);
marker.value(9000);
```

Here is a sample with a line marker on Y Axis:

{sample}AGST\_Line\_Marker\_03{sample}

## Visualization

Line marker appearance is defined using {api:anychart.core.axisMarkers.Line#stroke}stroke(){api} method, like any other line in AnyChart.

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

## Advanced Layout

In some cases you may need to customize your marker's emplacement. The {api:anychart.core.axisMarkers.Line#layout}layout(){api} method can set horizontal or vertical placement. When a marker is bind to an axis using {api:anychart.core.axisMarkers.Line#axis}axis(){api} method the marker's layout is defined to be perpendicular to the axis' orientation.

### Advanced option

Along with binding marker to an axis, it is possible to use a scale for marker positioning. The scale for the marker can be defined using {api:anychart.core.axisMarkers.Line#scale}scale(){api} method. As far as scales don't have any layout you need to define layout for the marker using {api:anychart.core.axisMarkers.Line#layout}layout(){api} method.  
  
**Note**: if you define neither {api:anychart.core.axisMarkers.Line#scale}scale(){api} nor {api:anychart.core.axisMarkers.Line#axis}axis(){api} the marker will be bound to the primary y axis.

```
var marker = chart.lineMarker();
marker.layout("vertical");
marker.value(Date.UTC(2016, 1, 01));
marker.scale(chart.xScale());
```

Here is a sample that shows the production of crude oil. The line marker is used to mark the date of chart's creation which means that all the data to the right of the marker is a prediction for the future. As you can see, the line marker uses {api:anychart.core.axisMarkers.Line#scale}scale(){api} and {api:anychart.core.axisMarkers.Line#layout}layout(){api} methods to use advanced marker's positioning. Let's use main {api:anychart.core.axisMarkers.Text#axis}axis(){api} method for positioning text marker on the same sport and see the result:

```
var text = chart.textMarker();
text.value(Date.UTC(2016, 1, 01));
text.axis(chart.xAxis());
```

{sample}AGST\_Line\_Marker\_06{sample}

## Multiple Lines

AnyChart does not set any limits on the number of line markers on the chart plot. To create multiple lines the 
{api:anychart.charts.Cartesian#lineMarker}lineMarker(){api} method should be called with an index as a parameter. 

```
// define first marker
var marker1 = chart.lineMarker(0);
  
// define second marker
var marker2 = chart.lineMarker(1);
```

After defining a marker it is vital **to bind a marker to an axis or bind it to a scale and set markers layout**. Otherwise, you will get a horizontal marker that is bound to the primary y axis.
  
```
var marker1 = chart.lineMarker(0);
var marker2 = chart.lineMarker(1);
  
// set axis for the first marker
marker1.axis(chart.yAxis());
// set axis for the second marker
marker2.axis(chart.yAxis());
```

Here is a sample with multiple lines. Both of them indicate extremes of the chart.

{sample}AGST\_Line\_Marker\_05{sample}
