{:index 5.5}
# GraphicsJS Layers

* [Overview](#overview)

Layers are transparent by default, have no bounds and you can create as many layers as necessary:

```
// set layers of stage
var layer_cube = stage.layer(); // layer for the cube
var layer_cylinder = stage.layer(); // layer for the cylinder
var layer_prism = stage.layer(); // layer for the hexagonal prism
var layer_main_shadow = stage.layer(); // layer for the big shadow under the figures 
var layer_5 = stage.layer();
```

Using layers makes it easier to operate with groups of elements. It's possible to transform, remove or add a plenty of elements with the only line. 

{sample}GRAPHICS\_Basics\_04{sample}

Layers mat be transformed using [Transformations](Transformations) and you can change layers in [suspended mode](Virtual_DOM). For example, we use {api:anychart.graphics.vector.Element#translate}translate(){api} to change the layers' position, {api:anychart.graphics.vector.Element#rotate}rotate(){api} to rotate them and {api:anychart.graphics.vector.Element#scale}scale(){api}, if we need to scale it in some way.

It's possible to add and remove elements on a layer separately using names or indexes. Use the {api:anychart.graphics.vector.Stage#addChild}addChild(){api} method to add an element to a stage or layer by its name if you have already created it using the AnyChart constructor. 

The similar method {api:anychart.graphics.vector.Stage#addChildAt}addChildAt(){api} will allow you to put the new element between the existing layers or behind them by defining not only the name but the index for this element.

The same thing is with removing elements. We use {api:anychart.graphics.vector.Element#remove}remove(){api} to remove the element. As layers are elements themselves, so they can be put each into other. 
 
In the example above we used 5 different layers to build each figure and its shadows on each layer. Now if we remove any layer, it will look like we've removed a figure. 

Let's use the {api:anychart.graphics.vector.Stage#removeChild}remove(){api} method to remove the cylinder with its shadow.

```
//remove the cylinder layer
layer_cylinder.remove();
```

{sample}GRAPHICS\_Basics\_05{sample}

The situation would be different if we decided to remove the cube also. In this case we should have used the {api:anychart.graphics.vector.Element#remove}remove(){api} method to get rid of the big shadow under all objects which is situated on the separate layer.

```
// remove the cylinder layer
layer_cylinder.remove();

// remove the cube and shadows
layer_cube.remove();
layer_main_shadow.remove();
layer_5.removeChild(cube_shadow_prism);
```

{sample}GRAPHICS\_Basics\_06{sample}/