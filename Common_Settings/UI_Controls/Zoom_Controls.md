{:index 2}
Zoom Controls
===========

* [Overview](#overview)
* [Enable](#enable)
* [Dispose](#dispose)

## Overview

Zoom Control Panel is an HTML object with three buttons: Zoom All (100%, or 1x Zoom), Zoom In and Zoom Out. It can be easily put on the Map with the {api:anychart.ui#zoom}zoom(){api} method. This zooming panel is rather useful and comfortable in case user has no mouse and uses a touchpad.


## Enable

First of all, it is necessary to reference the following files for sample functioning correctly.

```
<link rel="stylesheet" href="http://cdn.anychart.com/css/latest/anychart-ui.min.css" />
<link rel="stylesheet" href="https://cdn.anychart.com/fonts/2.5.0/anychart.css" />
```

There is a new layer created for the Zoom Control Panel over the chart layer. The {api:anychart.ui.Zoom#target}target(){api} method is necessary to set the target map for the zooming panel, and the {api:anychart.ui.Zoom#render}render(){api} method provides the Zoom Controls Panel rendering.

```
var zoomController = anychart.ui.zoom();
zoomController.target(map);
zoomController.render();
```
{sample}Maps\_ZoomControls\_01{sample}


## Dispose

If it is necessary to get rid of the Zoom Control Panel, call the {api:anychart.ui.Zoom#dispose}dispose(){api} method.

```
// dispose the zoom controlling panel on click
map.listen("click", function(){
  zoomController.dispose();
});
```
{sample}Maps\_ZoomControls\_02{sample}

