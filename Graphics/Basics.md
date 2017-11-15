{:index 2.5}
# GraphicJS Basics

* [Overview](#overview)
* [Note to AnyChart Users](#note_to_anychart_users)
* [Basics](#basics)
* [Shapes and primitives](#basic_shapes_and_primitives)
* [Path](#path)
  * [Building the path](#building_the_path)
  * [Coloring](#coloring)
* [Layers](#layers)
* [Text and image](#text_and_image)
  
## Overview

As you may have learned from [GraphicsJS Overview](Overview), GraphicJS is a JavaScript graphics library which includes an [intuitive graphics API](https://api.anychart.com/latest/anychart.graphics), [Virtual DOM](Virtual_DOM), and [SVG/VML](Browser_Support) renderers.

In this article we will try to give an overview of GraphicsJS capabilities and go slightly far than [GraphicsJS Quick Start](Quick_Start) article does.

## Note to AnyChart Users

If you have already used AnyChart html5 charting solution or explored samples in [AnyChart Documentation](https://docs.anychart.com/) articles or [AnyChart PlayGround](https://playground.anychart.com/), you might have noticed the code like this:

```
// set stage
var stage = anychart.graphics.create('container');
```

or like this:

```
table.getCell(14,1).content().textWrap(anychart.graphics.vector.Text.TextWrap.NO_WRAP);
```

These lines mean that the usage of anychart.graphics takes place in this or that sample. What is this anychart.graphics once again?

anychart.graphics is [the JavaScript drawing library AnyChart 7+ is build upon](Overview), and it is integrated in AnyChart, the library does everything in terms of rendering and display. All charts are based on this library. It *is not necessary to know how it works to use AnyChart charts*, but if you want to use options like drawing custom markers, create complicated dashboards or pattern fills, you should deal with some methods and techniques from GraphicsJS.

## Basics

Everything is drawn on a stage. To create the stage use the {api:anychart.graphics#create}create(){api} method:

```
var stage = anychart.graphics.create('container');
```

This creates a stage with the width and height of the container. To create a new stage of 800px in width and 600px in height add width and height parameters:

```
var stage = anychart.graphics.create('container', 800, 600);
```

Note that the stage coordinate system starts in the left top corner.

## Basic shapes and primitives

On a stage, you can draw anything using simple shapes, such as [rectangles, ellipses, starts and more](Shapes), [lines](Paths), [Text](Text_and_Fonts), Images and more.Let's draw a simple picture: put a "ball" into the "box" using {api:anychart.graphics.vector.Stage#circle}circle(){api} and {api:anychart.graphics.vector.Stage#rect}rect(){api} methods:

```
// draw a circle
stage.circle(200, 250, 100);

// draw a square 
stage.rect(25, 50, 350, 300);
```

{sample}GFX\_Basics\_01{sample}

There are a lot of shapes and predefined paths in GraphicsJS: see [Shapes](Shapes) and [Paths](Paths) articles for more.

## Path

### Building the path 

To draw a custom complicated shapes use the {api:anychart.graphics#path}path(){api} method. Don't forget to check [Shapes](Shapes) article, GraphicsJS has several built-in primitives, like {api:anychart.graphics.vector.Stage#star}star(){api} or {api:anychart.graphics.vector.Stage#cross}cross(){api}.

But {api:anychart.graphics#path}path(){api} allows you to draw any shape. Let's draw a triangle outside of the circle and a line inside the triangle:

```   
// draw a triangle
stage.path().moveTo(25, 350)
            .lineTo(200, 50)
            .lineTo(375, 350)
            .close();
            
// draw a wand in the middle
stage.path().moveTo(200,50)
            .lineTo(200,350);
```

{sample}GFX\_Basics\_02{sample}

As you can see, {api:anychart.graphics.vector.Path#moveTo}moveTo(){api} function is used to define the starting point of a drawing. To draw a line to the next point the {api:anychart.graphics.vector.Path#lineTo}lineTo(){api} method is used. To define that the particular drawing is finished the {api:anychart.graphics.vector.Path#close}close(){api} method is used.

There are a several drawing methods, like {api:anychart.graphics.vector.Path#arcTo}arcTo(){api} or {api:anychart.graphics.vector.Path#curveTo}curveTo(){api}, learn more about learn more about them in [Paths](Paths) article or {api:anychart.graphics.vector.Path}GraphicsJS Path Class API{api}.
 
### Coloring

There are several ways of coloring the shapes and lines. To change the color of the stroke set the color as a parameter of {api:anychart.graphics.vector.Shape#stroke}stroke(){api}. The same with filling the shapes: use {api:anychart.graphics.vector.Shape#fill}fill(){api} methid to set the color. Let's make the stroke red and fill the shapes with different colors. Note that all shapes are transparent by default being filled, so when color is set we need to define the order of the shapes. For this we use {api:anychart.graphics.vector.Element#zIndex}zIndex(){api}.

```   
//draw the circle
stage.circle(200, 250, 100)
            .stroke('red')
            .zIndex(2)
            .fill(['gold', 'white'],30);
```

{sample}GFX\_Basics\_03{sample}

Visit the [Fill](Fill_Settings) or the [Stroke Guide](Stroke_Settings) to learn more about coloring.

## Layers

To create anything more complex than a bunch of lines and shapes you should use [Layers](Layers), for example, if we want to show a pseudo-3D picture with a cube, cylinder and a hexagonal prism and make a realistic pseudo-3D we should not only color and position the figures correctly, but put some lights and shades together too. In terms of logic - working with layers is pretty similar to working with groups and layers in Photoshop or Illustrator.

One 3D figure may contain several shapes created using [primitives](Shapes) or [paths](Paths). Layers allow as to group, control and [transform](Transformations) several elements at once. Using layers makes it really easy to operate with groups of elements, when you need to possible to [transform](Transformations), [remove or add a plenty of elements](Virtual_DOM) - don't draw everything on a stage directly, [Layers](Layers) is the way to go. 

Layers are transparent by default, have no bounds and can be created as many times as necessary:

```
// create several layers in a stage
var layer_cube = stage.layer();        // cube layer
var layer_cylinder = stage.layer();    // cylinder layer
var layer_prism = stage.layer();       // hexagonal prism layer
var layer_main_shadow = stage.layer(); // shadow layer
```

And here is a sample with all these shapes and layers:

{sample}GFX\_Basics\_04{sample}

Layers can be transformed. For example, in the sample above the {api:anychart.graphics.vector.Element#translate}translate(){api} method is used to change the layers' position, the {api:anychart.graphics.vector.Element#rotate}rotate(){api} method to rotate and {api:anychart.graphics.vector.Element#scale}scale(){api}, if we need to scale it in some way.

It's possible to add and remove elements on a layer separately using its names or indexes. Use the {api:anychart.graphics.vector.Stage#addChild}addChild(){api} method to add an element to a stage or layer by its name if you have already created it using the AnyChart constructor. 

The similar method {api:anychart.graphics.vector.Stage#addChildAt}addChildAt(){api} will allow you to put the new element between the existing layers or behind them by defining not only the name but the index for this element.

The same thing is with removing elements. We use {api:anychart.graphics.vector.Element#remove}remove(){api} to remove the element. As layers are elements themselves, so they can be put one into another. 
 
In the example above 5 different layers are used to build each figure and its shadows on each layer. Now if any layer is removed, it will look like we've removed a figure. 

Let's use the {api:anychart.graphics.vector.Stage#removeChild}remove(){api} method to remove the cylinder with its shadow.

```
//remove the cylinder layer
layer_cylinder.remove();
```

{sample}GFX\_Basics\_05{sample}

The situation would be different if we decided to remove the cube also. In this case we should have used the {api:anychart.graphics.vector.Element#remove}remove(){api} method to get rid of the big shadow under all objects which is situated on the separate layer.

```
// remove the cylinder layer
layer_cylinder.remove();

// remove the cube and shadows
layer_cube.remove();
layer_main_shadow.remove();
layer_5.removeChild(cube_shadow_prism);
```

{sample}GFX\_Basics\_06{sample}

## Text and image

On a stage you can create any comments, titles or other labels that you need. The difference between charts' text and text on a stage is that the second one is considered as an element, just like any shape in it. The sample below demonstrates the process of creation and adjusting a simple piece of text.

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

{sample}GFX\_Basics\_07{sample}

There are far much more settings to fix with the text elements. You can find all of them in [Text and Fonts](Text_and_Fonts) article and in {api:anychart.graphics.vector.Text}GraphicsJS Text Class API{api}.

