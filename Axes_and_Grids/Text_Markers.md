{:index 9}
# Text Markers

## Overview

Text Markers are useful when you want to place custom texts or description with or instead of axes values labels. You can add text markers to any place of a chart. You can also place [Range Markers](../Axes_and_Grids/Range_Markers) to show Ranges and [Line Markers](../Axes_and_Grids/Line_Markers) to show Lines.

## Declare

These text markers are just custom text placed on chart.

To add custom text you need to create {api:anychart.charts.Cartesian#textMarker}textMarker(){api} and set {api:anychart.core.axisMarkers.Text#value}value(){api}, {api:anychart.core.axisMarkers.Text#axis}axis(){api} and {api:anychart.core.axisMarkers.Text#text}text(){api}.You may use other options, but previous three are mandatory.

```
var textMarker = chart.textMarker();
textMarker.axis(chart.yAxis());
textMarker.value(18000);
textMarker.align("left");
textMarker.anchor("leftcenter");
textMarker.fontSize(12);
textMarker.fontColor("#212121");
textMarker.offsetX(5);
textMarker.text("Historical Maximum");
```

Sample below shows several variants of Text Marker usage: marking up values (High, Low), describing values (Historical Maximum) and marking only selected values on certain axis (8.00).

{sample}AGST\_Text\_Marker\_01{sample}

## Settings

You can configure text marker placement, font, anchor and text of any custom text using {api:anychart.core.axisMarkers.Text#value}value(){api}, {api:anychart.core.axisMarkers.Text#align}align(){api}, {api:anychart.core.axisMarkers.Text#anchor}anchor(){api}, {api:anychart.graphics.vector.Text#fontSize}fontSize(){api}, {api:anychart.core.axisMarkers.Text#offsetX}offsetX(){api}, {api:anychart.core.axisMarkers.Text#offsetY}offsetY(){api}, {api:anychart.core.axisMarkers.Text#text}text(){api} methods.

Markers placement is controlled using {api:anychart.enums.Align}align(){api} parameter.

```
var textMarker = chart.textMarker();
textMarker.axis(chart.yAxis());
textMarker.value(13);
textMarker.text("Align: right");
textMarker.align("right");
textMarker.offsetX(5);
textMarker.fontColor("#212121");
textMarker.anchor("rightcenter");
```

In the sample below you can see different text markers positions and text formatting:

{sample}AGST\_Text\_Marker\_02{sample}
