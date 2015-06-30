{:index 7}
# Line Markers

              
* [Overview](#overview)
* [Declare](#declare)
* [Line and Text Markers](#line_and_text_markers)

## Overview

Line markers are lines bound to a scale and require a value to be drawn at.
  
These lines are useful when you need to highlight some value(s) on an axis. If you need to highlight value with text, not line, please take look at [Text Markers](Text_Markers) article.
  
You can add custom line markers to any scale, both x scale, y scale and additional scales.

## Declare

To add line marker you need to use {api:anychart.charts.Cartesian#lineMarker}**.lineMarker()**{api} method and tune it using {api:anychart.core.axisMarkers.Line#scale}**.scale()**{api}, {api:anychart.core.axisMarkers.Line#stroke}**.stroke()**{api} and {api:anychart.core.axisMarkers.Line#layout}**.layout()**{api} parameters:

```
  var firstMarker = chart.lineMarker();
  firstMarker.stroke("green");
  firstMarker.scale(chart.yScale());
  firstMarker.value(9000);
  
  var secondMarker = chart.lineMarker(1);
  secondMarker.stroke({color: "red", dash: "7", opacity: 1});
  secondMarker.scale(chart.yScale());
  secondMarker.value(19000);
```

The sample below shows horizontal lines that indicate minimum and maximum value.

{sample}AGST\_Line\_Marker\_01{sample}

## Line and Text Markers

In some cases it is much more useful to combine line and text markers for emphasizing particular data. Here is a sample:

{sample}AGST\_Line\_Marker\_02{sample}

