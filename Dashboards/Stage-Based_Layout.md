{:index 1}
# Stage-based Layout

## Overview

Rendering capability of AnyChart components is based on {api:anychart.graphics}anychart.graphics{api} library, which is in charge of visual display. This display is the stage, which is a graphics tool, that helps with positioning a number of charts and other elements on one page. It manages visual appearance and logic structure of data.

### Creating the stage

When we start working with any graphic elements of AnyChart charting library, the stage is created and enabled automatically, but in case this action was not defined directly, there's not much can be done with it.
To get an access to some useful settings of the stage we should do a custom creation of the stage using {api:anychart.graphics#create}create(){api} method:

```
var stage = anychart.graphics.create("container");
```

Here we have defined the container for the stage simultaneously with enabling the stage. The following piece of code means the same:

```
var stage = anychart.graphics.create();
stage.container("container");
```

This will make the stage of the main container's width and height by default. To change the default values of those parameters, write them after the name of the container in brackets. 
For example, to define the new stage of 800px in width and 600px in height, write the following:

```
var stage = anychart.graphics.create("container", 800, 600);
```

### Placing charts

On a stage, you can position a lot of charts and other elements. Dashboard means it, and there are several ways of positioning elements on a stage. 
One of them is [Table Layout](Table_Layout). The second option is to use stage as a dashboard basis.
Let's place a Column Chart sample on a stage. The only difference in this case is that we should set the stage and later define it as a container for drawing.

```
// set stage
var stage = anychart.graphics.create("container");
	
// draw
chart.container(stage).draw();
```

{sample}DB\_Stage\_01{sample}

In case you need to place more than one chart, you can use {api:anychart.charts.Cartesian#bounds}bounds(){api} method to adapt the dimensions of the charts to fit them on a web page or wherever you need.

```
// set stage
var stage = anychart.graphics.create("container");
	
// set chart_1
var chart_1 = anychart.column(data_1);
	
// chart size and position
chart_1.bounds(0, 0, "50%", "70%");
	
// set chart_2
var chart_2 = anychart.column(data_2);
	
// chart size and position
chart_2.bounds("50%", 0, "50%", "70%");
  
// draw charts
chart_1.container(stage);
chart_1.draw();
chart_2.container(stage);
chart_2.draw();
```

{sample :width 700 :height 600}DB\_Stage\_02{sample}

There are two ways of using bounds. If you define them in percent, your charts will resize each time the window they are opened in is resized. If you define bounds in pixels, the charts will not change their dimensions along with the resized window. Let's see what we'll get if we define bounds in pixels:

{sample :width 700 :height 600}DB\_Stage\_02-1{sample}

Explore the code in the playground to understand the difference.
  
When using stage, there's another way to place a number of charts next to each other. Using layers makes it easier to edit the dimensions of the charts and their location.

## Layers

Using layers makes it easier to operate with groups of elements. It's possible to transform, remove or add a plenty of elements with the only line. 
A workflow with AnyChart layers is organized quite similar to the same working process in Adobe Photoshop. You may edit a single layer with no changes made with other layers. 
This feature is rather helpful while creating dashboards.
Look at the next sample. Here we have four different same-positioned layers with different {api:anychart.graphics.vector.Layer#zIndex}zIndex(){api} parameters, which swap places when changing their zIndexes on clicking the buttons. 
Explore the sample in our playground to see the whole code.

{sample}DB\_Stage\_03{sample}

### Add or Remove

There are several options how to add a layer. You can see the first one in the sample above. The second way is to use the {api:anychart.graphics.vector.Stage#addChild}addChild(){api} method to add an element to a stage or layer by its name if you have already created it using the AnyChart constructor. The similar method {api:anychart.graphics.vector.Stage#addChildAt}addChildAt(){api} 
will allow you to put the new element between the existing layers or behind them by defining not only the name but the index for this element.
  
To remove a layer you can use one of those methods: {api:anychart.graphics.vector.Layer#remove}remove(){api}, {api:anychart.graphics.vector.Layer#removeChild}removeChild(){api} or {api:anychart.graphics.vector.Layer#removeChildAt}removeChildAt(){api}.
In this particular sample we use the {api:anychart.graphics.vector.Stage#addChild}addChild(){api} and {api:anychart.graphics.vector.Layer#remove}remove(){api} methods. 
Each click on the "Add" button adds a layer with a red square, each click on the "Remove" button removes the last layer added. Explore the sample in the playground to see the whole code.

```
// add a layer
var layer_1 = anychart.graphics.layer();
stage.addChild(layer_1); 

// remove a layer
var layerToRemove = layers.pop();
if (layerToRemove) layerToRemove.remove();
```
{sample :width 688 :height 500 }DB\_Stage\_04{sample}

### Adapt

As it was mentioned before, layers might be transformed. For example, we use {api:anychart.graphics.vector.Element#translate}translate(){api}  to change the layers' position, {api:anychart.graphics.vector.Element#rotate}rotate(){api} for rotating them and {api:anychart.graphics.vector.Element#scale}scale(){api}, if we need to scale it some way.
  
Let's now make a more complicated example to show those features. Explore the sample in the playground to see the code.
 
{sample :width 688 :height 500 }DB\_Stage\_05{sample}

Note that the center of the stage coordinate system is in the left top corner of the monitor and the vertical scale of the stage is directed to the bottom of the screen.

## Custom elements

Besides the advantage of using layers, there's one more thing that you can do with the stage - add some custom elements, e.g., lines, curves, circles and other shapes, like in the following example where the biocenosis of a fir-tree is shown. We have put the pics of animals, drawn the fir-tree and the lines leading to the charts using the stage graphics, - you can find more about graphics in our [Graphics](../Graphics/Basics) tutorial.

{sample :width 688 :height 700 }DB\_Stage\_06{sample}

## Printing

Every browser has a printing function. We can print any page using this function, but sometimes it can't guarantee that you get what you want or you may want to add "Print dashboard" or "Print chart" option to your application.

If you have created a dashboard using AnyChart Stage, you can easily print it, learn more in [Printing tutorial](../Common_Settings/Printing#stage_printing).