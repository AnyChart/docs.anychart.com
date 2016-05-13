{:index 16}
Move and Zoom API
=================

* [Overview](#overview)
* [Interactivity](#interactivity)
 * [Default](#default)
 * [Other features](#other_features)
* [API](#api)
 * [Buttons](#buttons)
 * [Breadcrumbs](#breadcrumbs)


AnyChart Maps are JavaScript interactive maps, with ability to change color when you move mouse over the element, when you select them or move mouse over the legend or color range item, they have interactive labels and tooltips, but surely one of the most demanded features of interactive maps is an ability to zoom in/zoom out and move the map to provide end-user with ability to dig into the data represented on the map.

By default maps already have keyboard/mouse zoom in/out and pan features enabled, this can be turned on/off or tuned using {api:anychart.charts.Map#interactivity}interactivity(){api} method.


## Overview

AnyChart Maps are JavaScript interactive maps: use mouse and keyboard to manage the behavior and view of the map or its part. Some interactive features, like zooming and moving, are enabled by default. Let's now look at some default interactive settings.

### Default

Use a keyboard to zoom the map in (press the "Ctrl" + "+" (for Mac: "cmd" + "+")) and out ("Ctrl" + "-" (for Mac: "cmd" + "-")) or use mouse and click twice on the map at the point you want to zoom to, and move map using the arrows on the keyboard or drill the map by mouse buttons. Note that keyboard interactivity works only when the focus is on the map, so it's necessary to click somewhere on the map to activate the keyboard interactivity.

### Other features

AnyMaps have an interesting and quite popular feature that is frequently being asked for. This feature uses mouse wheel for zooming the map with a bind. To enable this feature use {api:anychart.core.utils.MapInteractivity#mouseWheel}.mouseWheel(){api} method.

```
	// Enables the mouse wheel
    currentInteractivity.mouseWheel(true);
```

{sample}Maps\_Move\_and\_Zoom\_01{sample}

Note that when the mouse wheel zooming is enabled, it becomes possible to zoom a point by double-clicking it.


There is another popular feature - zooming to a particular region on a map. Use the {api:anychart.charts.Map#zoomToFeature}.zoomToFeature(){api} method to enable it.

```
	// zoom to a region
    australiaMap.listen('pointClick', function(e) {
        australiaMap.zoomToFeature(e.point.get('id'));
    })
```

{sample}Maps\_Move\_and\_Zoom\_02{sample}

Note that here we used a listener to catch the click on a region. Read about listeners in the [Map Event Listener article](Event_Listeners).


In some cases it might be necessary to know the path to a place that is zoomed in at the moment. It's possible to get the path using the {api:}.drillDownMap(){api} method. In the sample below the path is being shown in the tooltip, so hover the region to get it.

```

```

{sample}Maps\_Move\_and\_Zoom\_03{sample}

XML JSON ???


4. Как задать карту переходов при помощи drillDownMap(), как это сделать через XML, как это сделать через JSON



To turn off all interactivity in the map use the {api:anychart.charts.Map#interactivity}.interactivity(){api} method. 

```
	// disable all interactivity
	map.interactivity(false);
```

{sample}Maps\_Move\_and\_Zoom\_04{sample}


## API


AnyChart JavaScript Maps provide full set of methods to control map zoom and move: {api:anychart.charts.Map#zoom}zoom(){api}, {api:anychart.charts.Map#zoomTo}zoomTo(){api} {api:anychart.charts.Map#zoomToFeature}zoomToFeature(){api} and {api:anychart.charts.Map#move}move{api}. It's possible to create some custom elements on a map to make it unique or to make it easier for customers to navigate the map. Let's consider those samples below.

### Buttons

In this sample there are arrow buttons created that are intended to move the map.

```
	// creating a button
	var zoomFirstLabel = anychart.ui.label();
    zoomFirstLabel.background({fill: "#9E9E9E"});
    zoomFirstLabel.text("2x Zoom.");
    zoomFirstLabel.fontColor("#fff");
    zoomFirstLabel.parentBounds(0, 0, 200, 200);
    zoomFirstLabel.padding(5);
    zoomFirstLabel.listen("click", function() {

        // Zoom map in 2 times.
        australiaMap.zoom(2);

    });
```

{sample}Maps\_Move\_and\_Zoom\_05{sample}