{:index 17}
# Move and Zoom API

## Overview

AnyChart Maps are JavaScript interactive maps, with ability to change color when you move mouse over the element, when you select them or move mouse over the legend or color range item, they have interactive labels and tooltips, but surely one of the most demanded features of interactive maps is an ability to zoom in/zoom out and move the map to provide end-user with ability to dig into the data represented on the map.

By default maps already have keyboard/mouse zoom in/out and pan features enabled, this can be turned on/off or tuned using {api:anychart.charts.Map#interactivity}interactivity(){api} method.

## Interactivity

AnyChart Maps are JavaScript interactive maps: use mouse and keyboard to manage the behavior and view of the map or its part. Some interactive features, like zooming and moving, are enabled by default. Let's now look at the default interactive settings.

### Default

Use a keyboard to zoom the map in (press the "Ctrl" + "+" (for Mac: "cmd" + "+")) and out ("Ctrl" + "-" (for Mac: "cmd" + "-")) or use mouse and click twice on the map at the point you want to zoom to, and move map using the arrows on the keyboard or drill the map by mouse buttons. Note that keyboard interactivity works only when the focus is on the map, so it's necessary to click somewhere on the map to activate the keyboard interactivity.

When there is a point selected or a couple of them, it's possible to copy some information about them. Select the regions you need and use standard hotkeys to copy their data: Ctrl+C in Windows or Cmd+C in Mac. By default, the information you get contains the series number, the selected regions' Id's and indexes. 

### Enable/Disable

To enable or disable all interactive features we use {api:anychart.charts.Map#interactivity}.interactivity(){api} method. Set `true` or `false` to the method depending if you'd like to enable the map interactivity or disable. 

**NOTE**: This is a complete interactivity shutdown - you will not see tooltips or be able to hover regions if you disable interactivity in such way.

```
// disable all interactivity
map.interactivity(false);
```

{sample}Maps\_Move\_and\_Zoom\_01{sample}

### Navigational Interactivity

You can decide how you want to allow user to navigate a map, this is configured by the following three methods:

To enable or disable a mouse wheel zooming feature use {api:anychart.core.utils.MapInteractivity#zoomOnMouseWheel}zoomOnMouseWheel(){api} method.

To enable or disable a keyboard move and zoom feature use {api:anychart.core.utils.MapInteractivity#keyboardZoomAndMove}keyboardZoomAndMove(){api}. Cmd/Ctrl + "+/-/0" and keyboard arrows don't navigate a map when set to false.

To enable or disable zoom on double click behavior use {api:anychart.core.utils.MapInteractivity#zoomOnDoubleClick}zoomOnDoubleClick(){} method.

```
// Disables zoom On Mouse Wheel
map.interactivity().zoomOnMouseWheel(false);
// Disables zoom on double click
map.interactivity().keyboardZoomAndMove(false);
// Disables zoom on double click
map.interactivity().zoomOnDoubleClick(false);
```

The sample below shows the same map as above with navigational interactivity disabled. You still can click and hover regions and see tooltips.

{sample}Maps\_Move\_and\_Zoom\_03{sample}

### Clipboard Text

It is possible to put information about the points directly in computer clipboard by selecting a region or a several and using Copy & Paste hotkeys. The text with information that you get from the point can be adjusted using the {api:anychart.core.utils.MapInteractivity#copyFormat}copyFormat(){api} method. Look at the sample below. Select several points and use Copy & Paste hotkeys to get those points' data.

```
currentInteractivity = map.interactivity();

// Adjust the text
currentInteractivity.copyFormat(function () {
    return "There are "+ this.point.get("value") + " sheep farms in " +  this.point.getFeatureProp()["name"];
});
```

{sample}Maps\_Move\_and\_Zoom\_02{sample}

### Zoom

You can control zoom using the {api:anychart.charts.Map#zoom}.zoom(){api} method with a zoom factor as the method argument. If you add two more parameters – X- and Y-coordinates, the map will be zoomed to this certain point, unless the center point of the map will be considered as the target zooming point. In the next sample the 2x zoom is being performed when you click the button.

```
// Zoom map in 2 times.
map.zoom(2);
```

{sample}Maps\_Move\_and\_Zoom\_04{sample}

Another way to zoom a map is using {api:anychart.charts.Map#zoomTo}.zoomTo(){api}. This method also uses three parameters: zooming factor, X- and Y-coordinates. In the next sample, click any point you prefer; the map will be zoomed in this point's direction.

```
// set zoom
var clicked = true;
map.listen("click", function(evt) {
    if (clicked) {                 
        map.zoomTo(3, evt.clientX, evt.clientY);
    }
    else {
        map.zoomTo(0, evt.clientX, evt.clientY);
    }
clicked = !clicked;
});
```

{sample}Maps\_Move\_and\_Zoom\_05{sample}

Note the difference between the previous two methods. When you call {api:anychart.charts.Map#zoom}.zoom(){api} multiple times, the map will be zoomed as many times as the method was called, while using {api:anychart.charts.Map#zoomTo}.zoomTo(){api} will zoom the map only once to the defined factor.

The third zooming method is zooming to a particular region on a map using {api:anychart.charts.Map#zoomToFeature}.zoomToFeature(){api}.

```
// zoom to a region
map.listen('pointClick', function(e) {
    map.zoomToFeature(e.point.get('id'));
})
```

{sample}Maps\_Move\_and\_Zoom\_06{sample}

Note that event listener is used to handle region click event. Read more about event listeners in the [Map Event Listener article](Event_Listeners).

### Zoom Controls

There is one more option how to manage your map zooming. Instead of using listeners and methods described above, add the Zoom Control Panel on the map. This panel includes 3 buttons: for 100% view, for zooming in and zooming out. 

{sample}CS\_ZoomControls\_01{sample}

Read more about this feature in the [Zoom Control Panel](../Common_Settings/UI_Controls/Zoom_Controls)

### Move

Use the {api:anychart.charts.Map#move}.move(){api} method to the map with X- and Y-shifts as arguments, if you need to move the map on the defined distance.

In this sample there are arrow buttons created that are intended to move the map.

```
// up button
map.move(0, 10);
```

{sample}Maps\_Move\_and\_Zoom\_07{sample}
