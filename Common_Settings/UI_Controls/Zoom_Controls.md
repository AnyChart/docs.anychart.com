{:index 5}
# Zoom Controls

## Overview

Zoom Control Panel is an HTML object with three buttons: Zoom All (100%, or 1x Zoom), Zoom In and Zoom Out. To create a Zoom Control Panel use the {api:anychart.ui#zoom}zoom(){api} method. 

## Enable

First of all, it is necessary to reference the following files for sample functioning correctly.

```
<link rel="stylesheet" href="https://cdn.anychart.com/css/DVF-3692-table/anychart-ui.min.css" />
<link rel="stylesheet" href="https://cdn.anychart.com/releases/DVF-3692-table/fonts/css/anychart.css" />
```

There is a new layer created for the Zoom Control Panel over the chart layer. The {api:anychart.ui.Zoom#target}target(){api} method is necessary to set the target map for the zooming panel, and the {api:anychart.ui.Zoom#render}render(){api} method provides the Zoom Controls Panel rendering.

```
var zoomController = anychart.ui.zoom();
zoomController.target(map);
zoomController.render();
```
{sample}CS\_ZoomControls\_01{sample}

## Dispose

If it is necessary to get rid of the Zoom Control Panel, call the {api:anychart.ui.Zoom#dispose}dispose(){api} method.

```
// dispose the zoom controlling panel on click
map.listen("click", function (){
  zoomController.dispose();
});
```

{sample}CS\_ZoomControls\_02{sample}

## Appearance

If necessary, it is possible to change the appearance and position of the Zoom Control Panel using css. 