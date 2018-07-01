{:index 8}
# Range Markers

## Overview

Range Markers (sometimes referred as areas or zones) are colored areas bound to a chart axis. These areas are useful when you need to highlight some value(s) on axis. You can add Range Markers on any axis: the X- and Y-axes as well as additional axes. You can add text markers to any place of a chart. You can also place [Text Markers](../Axes_and_Grids/Text_Markers) to show Text and [Line Markers](../Axes_and_Grids/Line_Markers) to show Lines.

## Declare

To add range marker you need to use {api:anychart.core.axisMarkers.Range}rangeMarker(){api} method. By default this method creates a marker on a primary Y-axis. You can bind the marker to another axis using {api:anychart.core.axisMarkers.Range#axis}axis(){api} method. The basic range marker's properties can be set using {api:anychart.core.axisMarkers.Range#from}from(){api}, {api:anychart.core.axisMarkers.Range#to}to(){api} and {api:anychart.core.axisMarkers.Range#fill}fill(){api} methods.

```
// y axis getter
var yAxis = chart.yAxis();

// create range marker
var marker = chart.rangeMarker();
// set start point of the marker
marker.from(0);
// set end point of the marker
marker.to(10000);
// set marker inner color
marker.fill("#fcd8d7");
// set axis
marker.axis(yAxis);
```

Using horizontal range marker let's highlights unsatisfactory result and using vertical range marker we can highlight summer months.

{sample}AGST\_Range\_Marker\_04{sample}

## Advanced Layout

In some cases you may need to customize your marker's emplacement. The {api:anychart.core.axisMarkers.Range#layout}layout(){api} method can set horizontal or vertical placement. When a marker is bind to an axis using {api:anychart.core.axisMarkers.Range#axis}axis(){api} method the marker's layout is defined to be perpendicular to the axis' orientation.

### Advanced Option

Along with binding marker to an axis, it is possible to use a scale for marker positioning. The scale for the marker can be defined using {api:anychart.core.axisMarkers.Range#scale}scale(){api} method. As far as scales don't have any layout you need to define layout for the marker using {api:anychart.core.axisMarkers.Range#layout}layout(){api} method.  
  
**Note**: if you define neither {api:anychart.core.axisMarkers.Range#scale}scale(){api} nor {api:anychart.core.axisMarkers.Line#axis}axis(){api} the marker will be bound to the primary Y-axis.


```
// create range marker
var marker = chart.rangeMarker();
// set start point of the marker
marker.from("June");
// set end point of the marker
marker.to("August");
// rotate marker
marker.layout("vertical");
// bound marker to chart's x scale
marker.scale(chart.xScale());
// set marker inner color
marker.fill("#d7fcda");
```

In the next sample we will highlight summer months.

{sample}AGST\_Range\_Marker\_05{sample}

## Range and Text Markers

Combination of range and text markers may be very useful to emphasize certain information or to set a comment or mark some data.

{sample}AGST\_Range\_Marker\_02{sample}

## Advanced Visualization

You can use {api:anychart.graphics.vector.Fill}fill(){api}method to control the inner color of the marker. Note, that this method can be used to set gradient and image inner color for your marker.

```
// create range marker
var rangeMarker = chart.rangeMarker();
// bind marker to scale
rangeMarker.axis(chart.yAxis());
// set range start point
rangeMarker.from(0);
// set end point of the range
rangeMarker.to(30000);
// range color settings
rangeMarker.fill({
  // set gradient inner colors and positions
  keys: [".1 #009900", ".5 #ffa000", ".9 #dd2c00"],
  // set filling angle
  angle: -90,
  // set colors opacity
  opacity: 0.5
});
```

Sample below shows semitransparent filled range.

{sample}AGST\_Range\_Marker\_03{sample}

**Note**: more information on advanced color settings can be found in [Fill Settings tutorial](../Graphics/Fill_Settings)