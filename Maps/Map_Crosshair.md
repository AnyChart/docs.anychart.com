{:index 13.6}
# Map Crosshair

## Overview

Map crosshair is a pair of perpendicular lines (horizontal and vertical), moving with the mouse. It might be useful, when you need to get the particular map area data, while the axes contain any other information, such as coordinates and more. Also, it looks similar to an aim in shooting; it's easier to "hit" the necessary region and get some extra information about it with the crosshair on a javascript web map.
  
Crosshair listens to these events: mouseMove, mouseOver, mouseOut, when mouse is inside a map, Crosshair appears.
 
## Enable           
 
If you want to switch the Crosshair on, use the {api:anychart.charts.Map#crosshair}crosshair(){api} method:

```
// turn the crosshair on
map.crosshair(true);
```
{sample}Maps\_Crosshair\_01{sample}

## Appearance

### Lines

In some situations you may not need one or both lines but highlighted labels are still necessary. Write {api:anychart.core.ui.Crosshair#xStroke}xStroke(null){api} to remove the x-axis line (or {api:anychart.core.ui.Crosshair#yStroke}yStroke(null){api} to remove the y-axis):

```
// remove the x-axis line
var crosshair = map.crosshair();
crosshair.xStroke(null); 
```
{sample}Maps\_Crosshair\_02{sample}

## Labels

### Disable

Use the standard function to disable the axes labels.

```
// disable the crosshair yLabels
var crosshair = map.crosshair();
crosshair.yLabel(false);
```
{sample}Maps\_Crosshair\_03{sample}

### Change text

The crosshair label's format is the same as axis label's format by default. You may use the {api:anychart.core.ui.CrosshairLabel#format}format(){api} to change the crosshair's labels' performance. 

```
// set the label formatting
var yLabel = map.crosshair().yLabel();
yLabel.format(function() {
	return "Lon:" + this.value;
});
```

Here is the sample with customized both x and y crosshair labels.

{sample}Maps\_Crosshair\_04{sample}