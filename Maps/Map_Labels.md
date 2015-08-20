Map Labels
======================
* [Overview](#overview)
* [General settings](#overview)
* [Labels Display Modes](#labels_display_modes)
 * [Always](#always)
 * [NonOverLap](#nonoverlap)
 * [RegionBounds](#regionbounds)
 * [RegionBoundsNonOverLap](#regionboundsnonoverlap)
* [Custom Labels for Small Regions](#custom_labels_for_small_regions)
* [General Labels Configuration](#general_labels_configuration)

## Overview

Each region on a map is similar to a point of a chart, so they've got labels that work almost the same as usual labels' points.

## General settings

As map labels has got almost the same settings as chart labels, we advise you to look through these articles:
 - [Axes Labels Formatting](../../Axes_and_Grids/Axes_Labels_Formatting);  
 - [Labels](../../Common_Settings/Labels).
 
 You'll find there all general information and answers on "how to color it" or "how to change the labels' position".

## Labels Display Modes

There are four display modes that might be applied to the map labels:
 - "Always"
 - "NonOverLap"
 - "RegionBounds"
 - "RegionBoundsNonOverLap"
 
Setting the mode is being done using {api}**.**{api} method.

### Always

So, even if the labels intend to overlap each other, they will be shown if the mode "always" is on.

{sample}Maps\_Labels\_01{sample}

```
	// set the display mode for the map labels
	
```

### NonOverLap

If you're not satisfied with the view of your map you've got after setting the previous mode, you may like this one: if "nonoverlap" mode is on, the labels will not overlay each other.

{sample}Maps\_Labels\_02{sample}

```
	// set the display mode for the map labels
	
```

### RegionBounds

This mode allows to show labels only when labels can be displayed within region bounds. This one is quite useful when you use zoom control: the bigger your image is, the more labels are displayed.

{sample}Maps\_Labels\_03{sample}

```
	// set the display mode for the map labels
	
```

### RegionBoundsNonOverLap

In this mode you will see all labels that fit into the regions and some more labels which can be displayed without overlapping. Allows to show more labels even in case of smaller display.

{sample}Maps\_Labels\_04{sample}

```
	// set the display mode for the map labels
	
```

## Custom Labels for Small Regions

There's one more feature that can be done with small regions. Sometimes it's rather important to define those small territories, but it's not possible to perform without overlapping other labels. In this case you may enable the {api}**.**{api} method which creates special, "outer" labels. The full region labels is shown when its symbol is hovered.

```
	// enable the 
	
```

{sample}Maps\_Labels\_05{sample}


## General Labels Configuration
