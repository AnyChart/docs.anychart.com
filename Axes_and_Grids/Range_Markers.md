{:index 8}
# Range Markers

* [Overview](#overview)
* [Declare](#declare)
* [Range and Text Markers](#range_and_text_markers)
* [Advanced Visualization](#advanced_visualization)

## Overview

Range Markers (sometimes referred as areas or zones) are colored areas bound to a chart scale. These areas are useful when you need to highlight some value(s) on axis. You can add Range Markers on any scale, both x scale, y scale and additional scale.

## Declare

To add range marker you need to use {api:anychart.axisMarkers.Range}**rangeMarker()**{api} method. Each range marker has several mandatory properties set by {api:anychart.axisMarkers.Range#from}**from()**{api}, {api:anychart.axisMarkers.Range#to}**to()**{api} and {api:anychart.axisMarkers.Range#fill}**fill()**{api} methods.

```
  // create range marker
  var marker = chart.rangeMarker();
  // set start point of the marker
  marker.from(0);
  // set end point of the marker
  marker.to(10000);
  // set marker inner color
  marker.fill("#fcd8d7");
```

Using this code let's create a marker that highlights unsatisfactory result.

{sample}AGST\_Range\_Marker\_04{sample}

##Position

As you can see range marker highlights the area between {api:anychart.axisMarkers.Range#from}**from()**{api} and {api:anychart.axisMarkers.Range#to}**to()**{api} parameters. You can manage the scale for marker to be bind to using **.scale()** method. If you want to rotate your marker by 90 degrees you need to change its layout using **.layout()** method. 

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

Combination of range and text markers may be very useful to emphasize certain information or to set a kind of comment or mark some kind of data.

{sample}AGST\_Range\_Marker\_02{sample}

## Advanced Visualization

As far as range marker has method {api:anychart.graphics.vector.Fill}**fill()**{api}, you can also use gradient and image fills of range to achieve desired style of your charts.

```
  // create range marker
  var rangeMarker = chart.rangeMarker();
  // bind marker to scale
  rangeMarker.scale(chart.yScale());
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
