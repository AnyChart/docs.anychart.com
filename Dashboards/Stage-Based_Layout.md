# Stage-based Layout

* [Overview](#overview)
* [Enabling the stage](#enabling_the_stage)
* [Visual Settings](#visual_settings)
  * [Cells Width and Height](#cells_width_and_height)
  * [Fill](#fill)
  * [Border](#border)
  * [Text Settings and Padding](#text_settings_and_padding)
  * [Span](#span)
* [Using Table](#using_table)
  * [Title](#title)
  * [Header Row](#header_row)
  * [Common Elements](#common_elements)

  
## Overview

All elements of our charts are drawn using graphics. So, the stage is a graphics tool, which helps to position a number of charts on one page. 
Rendering capability of any chart components is based on anychart.graphics library, which is in charge of visual display. This display is 
It manages visual appearance and logic structure of data.


##Enabling the stage

To create the stage we only need to define stage as a container:

```
var stage = anychart.graphics.create('container');
```

This will make the stage with the width and height of the main container by default. To change the default values of those parameters, write them after the name of the container in brackets. 
For example, to define the new stage of 800px in width and 600px in height, write the following:

```
var stage = anychart.graphics.create('container', 800, 600);
```

On a stage, you can position a lot of elements: not only the charts but figures such as rectangles, circles, lines, etc. Note that the center of the scale is in the left top corner of the monitor.
Let's make a simple picture using stage instruments like circle and lines:

```
    //draw the circle
    stage.circle(200, 250, 100).fill('red').stroke('3 green')
                .zIndex(1);
   
   //draw the triangle
    stage.path().moveTo(25, 350)
                .lineTo(200, 50)
                .lineTo(375, 350)
                .close()
                .fill('blue')
                .zIndex(0)
                .stroke('2px gold');
                
    //draw the wand in the middle
    stage.path().moveTo(200,50)
                .lineTo(200,350)
                .stroke('2 white')
                .zIndex(1);
```
{sample}DB\_Stage\_01{sample}

Note that there's almost no figures besides rectangles and circles, but there are those elements of drawing like lines and arcs that allow you to draw anything you need. 
Here we used zIndex to position one element over another, but it's possible to do the same using layers. Layers are transparent by default, have no bounds and can be created as many times as necessary:

```
	// set layers
    var layer_1 = stage.layer();
    var layer_2 = stage.layer();
    var layer_3 = stage.layer();
    var layer_4 = stage.layer();
    
    //create a square behide the Deathly Hallows symbol
    layer_1.rect(25, 50, 350, 300);
```
{sample}DB\_Stage\_02{sample}

Using layers makes it easier to operate with groups of elements. It's possible to transform, remove or add a plenty of elements with the only line. Working with layers with AnyChart is similar to working with layers
For example, let's remove the lowest layer from our last sample.
We use {api:anychart.graphics.vector.Element.remove()}**.remove()**{api} for this:

```
//removing the first layer
layer_1.remove();

```
{sample}DB\_Stage\_03{sample}

Layers might be transformed. For example, we use {api:anychart.graphics.vector.Element#translate}**.translate()**{api}
 to change the layers' position, {api:anychart.graphics.vector.Element#rotate}**.rotate()**{api} 
for rotating them and {api:anychart.graphics.vector.Element#scale}**.scale()**{api},
 if we need to scale it some way.

It's possible to add and remove elements on a layer separately using its names or indexes. 
Use the {api:anychart.graphics.vector.Stage#addChild}**.addChild()**{api}
 method to add an element to a stage or layer by its name if you have already created it using the AnyChart constructor. 
The similar method {api:anychart.graphics.vector.Stage#addChildAt}**.addChildAt()**{api}
 will allow you to put the new element between the existing layers or behind them by defining not only the name but the index for this element.
The same thing is with removing elements. We use {api:anychart.graphics.vector.Element#remove}**.remove()**{api}
 to remove the element. As layers are elements themselves, so they can be put each into other. 
 
 Let's now make a more complicated example to show those features. Explore the sample in the playground to see the code.
 
{sample}DB\_Stage\_04{sample}

Here we used 3 different layers to build each figure and its shadows on each layer. Now if we remove any layer, it will look like we've removed a figure. 
Let's use the {api:anychart.graphics.vector.Stage#removeChild}**.remove()**{api} method to remove the cylinder with its shadow.

```
    //remove the cylinder layer
    layer_cylinder.remove();
```
{sample}DB\_Stage\_05{sample}

The situation would be different if we decided to remove the cube also. In this case we should have used the {api:anychart.graphics.vector.Element.removeChild()}**.removeChild()**{api} method to get rid of the big shadow under all objects which is situated on a separated layer.
```
    //remove the cylinder layer
    layer_cylinder.remove();
    
    //remove the cube and shadows
    layer_cube.remove();
    layer_main_shadow.remove();
    layer_5.removeChild(cube_shadow_prism);
```
{sample}DB\_Stage\_06{sample}





