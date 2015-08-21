{:index 8}
# Range Markers

* [Overview](#overview)
* [Declare](#declare)
* [Range and Text Markers](#range_and_text_markers)
* [Advanced Visualization](#advanced_visualization)

## Overview

Range Markers (sometimes referred as areas or zones) are colored areas bound to a scale, that are drawn through data plot. These areas are useful when you need to name a highlight some value(s) on axis. You can add Range Markers on any scale, both x scale, y scale and additional scale.

## Declare

To add range marker you need to use {api:anychart.axisMarkers.Range}**rangeMarker()**{api} method. Each range marker has several mandatory properties set by {api:anychart.axisMarkers.Range#scale}**scale()**{api}, {api:anychart.axisMarkers.Range#from}**from()**{api}, {api:anychart.axisMarkers.Range#to}**to()**{api} and {api:anychart.axisMarkers.Range#fill}**fill()**{api} methods. If you want to bound range marker to a horizontal scale, you have to set {api:anychart.axisMarkers.Range#layout}**layout(vertical)**{api}. Otherwise it will be horizontal.

```
  // create first range marker
  var marker1 = chart.rangeMarker(0);
  // bind marker to the scale
  marker1.scale(yScale);
  // set start value for range
  marker1.from(20000);
  // set end point for range
  marker1.to(30000);
  // set range color
  marker1.fill("#d7fcda");
  
  // create second marker
  var marker2 = chart.rangeMarker(1);
  // bind marker to scale
  marker2.scale(chart.yScale());
  // set start point of the marker
  marker2.from(10000);
  // set end point of the marker
  marker2.to(20000);
  // set marker's inner color
  marker2.fill("#ffffdc");
  
  // create third marker
  var marker3 = chart.rangeMarker(2);
  // bind marker to the chart scale
  marker3.scale(chart.yScale());
  // set start point of the marker
  marker3.from(0);
  // set end point of the marker
  marker3.to(10000);
  // set marker inner color
  marker3.fill("#fcd8d7");
```

lol {
 padding: 0;
}

The sample below shows horizontal axes ranges.

{sample}AGST\_Range\_Marker\_01{sample}

## Range and Text Markers

Combination of range and text markers may be very useful to emphasize certain information or to set a kind of comment 
or mark some kind of data.

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

**Note**: more information on advanced color settings can be found in [Fill Settings tutorial](#../Graphics/Fill_Settings)