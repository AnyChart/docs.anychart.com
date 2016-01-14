{:index 7}
# Line Markers

* [Overview](#overview)
* [Declare](#declare)
* [Visualization](#visualization)
* [Multiple Lines](#multiple_lines)
* [Layout](#layout)

## Overview

Along with series there are several element that can present on the chart's plot. One of these elements of line marker. Line marker is a strait line that goes all through the charts plot. It may serve for several purposes: to define the value for comparing each of the series points or to visually separate some of chart's elements.

## Declare

To create a line marker you need to use the {api:anychart.axisMarkers#line}**.lineMarker()**{api} method. This method will create a simple horizontal line and place it on 0 value of the y scale. You can control marker's position using {api:anychart.axisMarkers.Line#value}**.value()**{api} method.

```
  var marker = chart.lineMarker();
  marker.value(9000);
```

Here is a sample with a line marker and it is used to indicate the year with the lowest amount of income:

{sample}AGST\_Line\_Marker\_03{sample}


## Visualization

Line marker is a simple line through the whole chart therefore it can be tuned as easy as any line in AnyChart. The main way to adjust line marker is using {api:anychart.core.axisMarkers.Line#stroke}**.stroke()**{api} method.

```
  var marker = chart.lineMarker();
  marker.value(9000);
  marker.stroke({
     thickness: 2,
     color: green,
     dash: "2 7"
  });
```

Here is the sample quite similar to the one above but with visually tuned line marker:

{sample}AGST\_Line\_Marker\_04{sample}

## Multiple Lines

AnyChart does not set any limits on the number of line markers on the chart plot. To create multiple lines the 
{api:anychart.charts.Cartesian#lineMarker}**.lineMarker()**{api} method should be called with an index as a parameter.

```
  // define first marker
  var marker1 = chart.lineMarker(0);
  
  // define second marker
  var marker2 = chart.lineMarker(1);
```

Here is a sample with multiple lines. Both of them indicates extremes of the chart. 

{sample}AGST\_Line\_Marker\_05{sample}

## Layout

You can easily manage line marker's layout using {api:anychart.axisMarkers.Line#layout}**.layout()**{api} method. Using this method you can set horizontal or vertical placement.

```
  var marker = chart.lineMarker();
  marker.layout("vertical");
  marker.value(1325289600000)
```

One of possible ways to use line marker's vertical layout is to :

{sample}AGST\_Line\_Marker\_06{sample}
