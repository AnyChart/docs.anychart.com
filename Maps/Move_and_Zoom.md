{:index 16}
Move and Zoom API
=================

* [Overview](#overview)
* [Interactivity](#interactivity)
 * [Default](#default)
 * [Adjusting](#adjusting)
  * [Text](#text)
  * [Zoom](#zoom)
  * [Move](#move)
 * [Disable](#disable)


## Overview


AnyChart Maps are JavaScript interactive maps, with ability to change color when you move mouse over the element, when you select them or move mouse over the legend or color range item, they have interactive labels and tooltips, but surely one of the most demanded features of interactive maps is an ability to zoom in/zoom out and move the map to provide end-user with ability to dig into the data represented on the map.

By default maps already have keyboard/mouse zoom in/out and pan features enabled, this can be turned on/off or tuned using {api:anychart.charts.Map#interactivity}interactivity(){api} method.


## Interactivity

AnyChart Maps are JavaScript interactive maps: use mouse and keyboard to manage the behavior and view of the map or its part. Some interactive features, like zooming and moving, are enabled by default. Let's now look at some default interactive settings.


### Default

Use a keyboard to zoom the map in (press the "Ctrl" + "+" (for Mac: "cmd" + "+")) and out ("Ctrl" + "-" (for Mac: "cmd" + "-")) or use mouse and click twice on the map at the point you want to zoom to, and move map using the arrows on the keyboard or drill the map by mouse buttons. Note that keyboard interactivity works only when the focus is on the map, so it's necessary to click somewhere on the map to activate the keyboard interactivity.

When there is a point selected or a couple of them, it's possible to copy some information about them. Select the regions you need and use standard hotkeys to copy their data: Ctrl+C in Windows or Cmd+C in Mac. By default, the information you get contains the series number, the selected regions' Id's and indexes. 


### Adjusting

The text that you get from the point can be adjusted by using the {api:anychart.core.utils.MapInteractivity#copyFormatter}.copyFormatter(){api} method. Look at the sample below. Select several points and use copying hotkeys to get those points' data.


```
    // Adjust the text
    currentInteractivity.copyFormatter(function() {
        return "In the "+ this.point.getFeatureProp()["name"] + " region there are "+ this.point.get("value") + " sheep farms";
    });
```

{sample}Maps\_Move\_and\_Zoom\_01{sample}



### Zoom

AnyMaps have an interesting and quite popular feature that is frequently being asked for. This feature uses mouse wheel for zooming the map with a bind. To enable this feature use {api:anychart.core.utils.MapInteractivity#mouseWheel}.mouseWheel(){api} method.

```
    // Enables the mouse wheel
    currentInteractivity.mouseWheel(true);
```

{sample}Maps\_Move\_and\_Zoom\_02{sample}

Note that when the mouse wheel zooming is enabled, it becomes possible to zoom a point by double-clicking it.

Another useful feature is general zoom. Use {api:anychart.charts.Map#zoom}.zoom(){api} with a zoom factor as the method argument to zoom the map. In the next sample the 2x zoom is being performed when you click the button.

```
    // creating a button
    var zoomButton = anychart.ui.label();
    zoomButton.listen("click", function() {

        // Zoom map in 2 times.
        australiaMap.zoom(2);
    });
```

{sample}Maps\_Move\_and\_Zoom\_03{sample}

Another zooming option provided by our component is zooming to a some point. While {api:anychart.charts.Map#zoom}.zoom(){api} takes the central point of a map as the target zooming point, the {api:anychart.charts.Map#zoomTo}.zoomTo(){api} method allows to set this target point ahead. In the next sample, click twice any point you prefer; the map will be zoomed to this point.

```
    // set zoom
    australiaMap.listen("click", function(evt) {
        console.log(evt.clientX);
        if (clickNum == 0){                 
            australiaMap.zoomTo(5, evt.clientX, evt.clientY);
            clickNum = 1
        }
            else {
            australiaMap.zoomTo(0.2, evt.clientX, evt.clientY);
            clickNum = 0
        }
    });
```

{sample}Maps\_Move\_and\_Zoom\_04{sample}

Note that {api:anychart.charts.Map#zoomTo}.zoomTo(){api} requires not only the zoom factor but the target point coordinates as well. If those are not set, the center point of the map will be considered as the target zoom point.


There is another popular feature - zooming to a particular region on a map. Use the {api:anychart.charts.Map#zoomToFeature}.zoomToFeature(){api} method to enable it.

```
    // zoom to a region
    australiaMap.listen('pointClick', function(e) {
        australiaMap.zoomToFeature(e.point.get('id'));
    })
```

{sample}Maps\_Move\_and\_Zoom\_05{sample}

Note that here we used a listener to catch the click on a region. Read about listeners in the [Map Event Listener article](Event_Listeners).


### Move

Moving function is being created with the {api:anychart.charts.Map#move}.move(){api} method. Set the factor as an argument.

In this sample there are arrow buttons created that are intended to move the map.

```
    // up button
    upButton = createLabel("Up", 0, 50);
    upButton.listen("click", function(){
        australiaMap.move(0, 10);
    });
```

{sample}Maps\_Move\_and\_Zoom\_06{sample}


### Disable

To turn off all interactivity in the map use the {api:anychart.charts.Map#interactivity}.interactivity(){api} method. 

```
    // disable all interactivity
    map.interactivity(false);
```

{sample}Maps\_Move\_and\_Zoom\_07{sample}