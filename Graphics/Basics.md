# Basics

* [Overview](#overview)
* [Basic](#basic)
* [Basic shapes and primitives](#basic_shapes_and_primitives)
* [Path](#path)
  * [Building the path](#building_the_path)
  * [Coloring](#coloring)
* [Layers](#layers)
* [Text and image](#text_and_image)
* [Custom marker](#custom_marker)
  
## Overview

If you have already used AnyChart or explored samples in our articles, you might have noticed the code like:

```
// set stage
var stage = anychart.graphics.create('container');
```
or like this:
```
table.getCell(14,1).content().textWrap(anychart.graphics.vector.Text.TextWrap.NO_WRAP);
```


These lines mean that the usage of anychart.graphics takes place in this or that sample. What is this anychart.graphics?


Anychart.graphics is one of AnyChart components, the library which is capable for rendering and display. All charts are based on this library. It's not necessary to know how it works 
to use AnyChart components, but if you want to use those options like drawing custom forms and use them as markers or create complicated dashboards, you should deal with some things.
Read this article or visit the api of **{api:anychart.graphics}AnyСhart.graphics{api}**.

##Basic

All our charts are drawn using stage. When we create a chart, there's always a stage where this chart is placed, but we can get nothing from the stage unless we do a custom stage creation.
To create the stage clearly we only need to write the following:
```
var stage = anychart.graphics.create('container');
```

This will make the stage with the width and height of the main container by default. To change the default values of those parameters, write them after the name of the container in brackets. 
For example, to define the new stage of 800px in width and 600px in height, write the following:

```
var stage = anychart.graphics.create('container', 800, 600);
```
Note that the center of the stage coordinate system is in the left top corner of the monitor.

##Basic shapes and primitives

On a stage, you can draw pictures using simple shapes, such as rectangles, circles, lines, etc. 
Let's make a simple picture: put a "ball" into the "box" using stage instruments like circle and square:

```
    //draw the circle
    stage.circle(200, 250, 100);
   
    //create a square 
    stage.rect(25, 50, 350, 300);
```
{sample}GRAPHICS\_Basics\_01{sample}

There are three default shapes in graphics: circle, rectangle and ellipse. If you need to draw something more complicated, use the **{api:anychart.graphics#path}.path(){api}** method.

##Path

###Building the path 

To draw more complicated shapes you should use the {api:anychart.graphics#path}**.path()**{api} method. 

Using this, you will be able to draw any shape. Let's draw a triangle outside of the circle and a line inside the triangle.

```   
	//draw the triangle
    stage.path().moveTo(25, 350)
                .lineTo(200, 50)
                .lineTo(375, 350)
                .close();
                
    //draw the wand in the middle
    stage.path().moveTo(200,50)
                .lineTo(200,350);
```
{sample}GRAPHICS\_Basics\_02{sample}

As you can see, here we used the **{api:anychart.graphics.vector.Path#moveTo}.moveTo(){api}** function to define the starting point of drawing. To draw a line to the next 
point we use the **{api:anychart.graphics.vector.Path#lineTo}.lineTo(){api}** function. To define that we have finished with the particular figure we 
use **{api:anychart.graphics.vector.Path#close}.close(){api}**. 
There are a lot of drawing functions, like **{api:anychart.graphics.vector.Path#arcTo}.arcTo(){api}** or **{api:anychart.graphics.vector.Path#curveTo}.curveTo(){api}**, that helps to draw arcs and curves.
Find more in our **{api:anychart.graphics.vector.Path}Path{api}** API.
 
###Coloring

There are several ways of coloring the shapes and lines on a stage. To change the color of the stroke set the color as a parameter of {api:anychart.graphics.vector.Shape#stroke}**.stroke()**{api},
 as with other AnyChart components. The same is with filling the shapes: use **{api:anychart.graphics.vector.Shape#fill}.fill(){api}** to set the color. Let's make the stroke of red color 
 and fill the shapes with different colors in the sample above. Note that all shapes are transparent before being filled, so when we set colors we need to define the order of the shapes. 
 For this we use **{api:anychart.core.VisualBase#zIndex}.zIndex(){api}**;
```   
	//draw the circle
    stage.circle(200, 250, 100)
                .stroke('red')
                .zIndex(2)
                .fill(['gold', 'white'],30);
```
{sample}GRAPHICS\_Basics\_03{sample}

As you can see, here we painted the circle with a slight gradient. It can be done with the stroke too; in general, color settings on a stage are the same as with usual container. Visit the [Fill Guide](../Graphics/Fill_Settings) or the [Stroke Guide](../Graphics/Stroke_Settings) to know more about the colors.

##Layers

Let's now create something more complicated, for example, let it be a pseudo-3D picture with a cube, cylinder and a hexagonal prism.
To make a realistic 3D-picture we should not only color and position the figures correctly, but put lights and shades. 
One 3D-figure may contain several shapes created using primitives or **{api:anychart.graphics.vector.Path}.path(){api}**. In this case, working with zIndex, which we used in the sample above to position one element over another, will be not as effective as layers.
Layers are transparent by default, have no bounds and can be created as many times as necessary:

```
    // set layers of stage
    var layer_cube = stage.layer(); //layer for the cube
    var layer_cylinder = stage.layer(); //layer for the cylinder
    var layer_prism = stage.layer(); //layer for the hexagonal prism
    var layer_main_shadow = stage.layer(); //layer for the big shadow under the figures 
    var layer_5 = stage.layer();
    
```


Using layers makes it easier to operate with groups of elements. It's possible to transform, remove or add a plenty of elements with the only line. Working with layers with AnyChart is similar to working with layers in Photoshop.


{sample}GRAPHICS\_Basics\_04{sample}


Layers might be transformed. For example, we use {api:anychart.graphics.vector.Element#translate}**.translate()**{api}
 to change the layers' position, {api:anychart.graphics.vector.Element#rotate}**.rotate()**{api} 
for rotating them and {api:anychart.graphics.vector.Element#scale}**.scale()**{api},
 if we need to scale it in some way.

 
It's possible to add and remove elements on a layer separately using its names or indexes. 
Use the **{api:anychart.graphics.vector.Stage#addChild}.addChild(){api}**
 method to add an element to a stage or layer by its name if you have already created it using the AnyChart constructor. 
The similar method **{api:anychart.graphics.vector.Stage#addChildAt}.addChildAt(){api}**
 will allow you to put the new element between the existing layers or behind them by defining not only the name but the index for this element.
The same thing is with removing elements. We use **{api:anychart.graphics.vector.Element#remove}.remove(){api}**
 to remove the element. As layers are elements themselves, so they can be put each into other. 
 
 
In the example above we used 5 different layers to build each figure and its shadows on each layer. Now if we remove any layer, it will look like we've removed a figure. 
Let's use the {api:anychart.graphics.vector.Stage#removeChild}**.remove()**{api} method to remove the cylinder with its shadow.
```
    //remove the cylinder layer
    layer_cylinder.remove();
```
{sample}GRAPHICS\_Basics\_05{sample}

The situation would be different if we decided to remove the cube also. In this case we should have used the **{api:anychart.graphics.vector.Element.removeChild()}**.removeChild()**{api}** method to get rid of the big shadow under all objects which is situated on a separated layer.
```
    //remove the cylinder layer
    layer_cylinder.remove();
    
    //remove the cube and shadows
    layer_cube.remove();
    layer_main_shadow.remove();
    layer_5.removeChild(cube_shadow_prism);
```
{sample}GRAPHICS\_Basics\_06{sample}



##Text and image

On a stage you can create any comments, titles or other inscriptions that you need. The difference between charts' text and text on a stage is that the second one is considered as an element,
just like any shape in it. The sample below demonstrates the process of creation and adjusting a simple piece of text.

```
    //create the text element
    var textElement = stage.text();
    textElement.x(30);
    textElement.y(375);
    textElement.text('The Deathly Hallows');
    textElement.fontSize(30);
    textElement.fontWeight('bold');
    textElement.color('red');
```

That's how the sample will look like with our added text element:

{sample}GRAPHICS\_Basics\_07{sample}

There are far much more settings to fix with the text elements. You can find all of them {api:anychart.graphics.vector.Text}here{api}.
 For some general information about the text in graphics visit our {api:anychart.graphics#text}Text{api} API.


##Custom marker

If you are still in doubt about why to use graphics, put your attention on this paragraph. Here we'll talk about custom markers, which can be simply created with graphics. 

Let's use stage to create a simple bar chart where we place our self-made marker. You can find more about stage in our [Stage](../Dashboards/Stage-Based_Laoyut) tutorial.

{sample}GRAPHICS\_Basics\_08{sample}

```
	//a function that enables custom marker resizing
    function customMarkerDrawer(path, x, y, size) {
        //create a custom marker
        path.moveTo(x, y)
                    .lineTo(x + 25, y - 20)
                    .arcTo(50,25,180,325)
                    .close();
    }    
```

Using graphics makes it simple to create new forms and shapes, which may become markers on a chart or visualize something else, e.g. it can be useful in dashboards building. 
Visit [Stage-Based Layout](../Dashboards/Stage-Based_Layout) tutorial to read more about using graphics and stage in dashboards.

