{:index 7}
# Line Markers

* [Overview](#overview)
* [Declare](#declare)
* [Visualization](#visualization)
* [Line and Text Markers](#line_and_text_markers)

## Overview

Line markers are lines bound to a scale and require a value to be drawn at.
  
  
These lines are useful when you need to highlight some value(s) on an axis. If you need to highlight value with text, not line, please take look at [Text Markers](Text_Markers) article.
  
  
You can add custom line markers to any scale, both x scale, y scale and additional scales.

## Declare

To add line marker you need to use {api:anychart.charts.Cartesian#lineMarker}**lineMarker()**{api} method. Also, {api:anychart.core.axisMarkers.Line#value}**value()**{api} method controls line position on the chart plot.

```
  var marker = chart.lineMarker();
  marker.value(9000);
```

Here is a sample with a line marker placed to show the year with the lowest amount of income:

{sample}AGST\_Line\_Marker\_03{sample}

## Visualization

Line marker is a simple line through the whole chart therefore it can be tuned as easy as any line in AnyChart. The main way to adjust line marker is using {api:anychart.core.axisMarkers.Line#stroke}**stroke()**{api} method.

```
  var marker = chart.lineMarker();
  marker.value(9000);
  marker.stroke({
     thickness: 2,
     color: green,
     dash: "2 7"
  })
```

Here is the sample quite similar to the one above but with visually tuned line marker:

{sample}AGST\_Line\_Marker\_04{sample}


and tune it using {api:anychart.core.axisMarkers.Line#scale}**scale()**{api}, {api:anychart.core.axisMarkers.Line#stroke}**stroke()**{api} and {api:anychart.core.axisMarkers.Line#layout}**layout()**{api} parameters:

```
  // create line marker
  var firstMarker = chart.lineMarker(0);
  // set line color
  firstMarker.stroke("#090");
  // bind marker to scale
  firstMarker.scale(chart.yScale());
  // set markers position on plot
  firstMarker.value(9000);
  
  // create second marker
  var secondMarker = chart.lineMarker(1);
  // line visual settings
  secondMarker.stroke({
    // set line color
    color: "#dd2c00",
    // set dashes 
    dash: 7,
    // set stroke opacity
    opacity: 1});
  // bind marker to scale 
  secondMarker.scale(chart.yScale());
  // set markers position
  secondMarker.value(19000);
```

The sample below shows horizontal lines that indicate minimum and maximum value.

{sample}AGST\_Line\_Marker\_01{sample}

As far as scatter chart has

## Line and Text Markers

In some cases it is much more useful to combine line and text markers for emphasizing particular data. Here is a sample:

{sample}AGST\_Line\_Marker\_02{sample}

