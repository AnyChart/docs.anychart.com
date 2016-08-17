{:index 13.6}
# Crosshair

* [Overview](#overview)
* [Enable](#enable)
* [Appearance](#appearance)
   * [Lines](#lines)
* [Labels](#labels)
   * [Disable](#disable)
   * [Change text](#change_text)

## Overview

Crosshair is a pair of perpendicular lines (horizontal and vertical), moving with the mouse. It might be useful, when you need to get the particular data of an action, while the axes contain any other information, such as years/months or any kind of percentage. Also, it looks similar to an aim in shooting; it's easier to "hit" the necessary point and get some extra information about it with the crosshair on a web chart.
  
Crosshair listens to these events: mouseMove, mouseOver, mouseOut, when mouse is inside a map, Crosshair appears.
 
## Enable           
 
If you want to switch the Crosshair on, set the {api:anychart.core.ui.Crosshair}crosshair(){api} as true:

```
// turn the crosshair on
map.crosshair(true);
```
{sample}Map\_Crosshair\_01{sample}

## Appearance

### Lines

In some situations you may not need one or both lines but highlighted labels are still necessary. Write {api:anychart.core.ui.Crosshair#xStroke}xStroke(null){api} to remove the x-axis line (or {api:anychart.core.ui.Crosshair#yStroke}yStroke(null){api} to remove the y-axis):

```
// remove the x-axis line
var crosshair = map.crosshair();
crosshair.xStroke(null); 
```
{sample}AGST\_Crosshair\_03{sample}

## Labels

### Disable

Use the standard function to disable the axes labels.

```
// disable the crosshair yLabels
var crosshair = map.crosshair();
crosshair.yLabel(false);
```
{sample}AGST\_Crosshair\_04{sample}

### Change text

The crosshair label's format is the same as axis label's format by default. You may use the {api:anychart.core.ui.CrosshairLabel#textFormatter}textFormatter(){api} to change the crosshair's labels' performance. 

```
// set the label performance
var yLabel = map.crosshair().yLabel();
yLabel.textFormatter(function() {
return this.value + "deg";
});
```

Here is the sample with customized both x and y crosshair labels.

{sample}AGST\_Crosshair\_05{sample}

As far as you can use any function as {api:anychart.core.ui.CrosshairLabel#textFormatter}textFormatter(){api} of crosshair labels you use these labels to display additional information. Here is a sample with more complex labels formatter.

{sample}AGST\_Crosshair\_06{sample}