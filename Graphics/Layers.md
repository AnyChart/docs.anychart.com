{:index 5.5}
# GraphicsJS Layers

## Overview 

{api:anychart.graphics.vector.Layer}Layer{api} is an object used to group elements in GraphicsJS. Elements must be grouped if you want to apply similar changes to them,  [transformation](Transformations) and alike. You can change layers in [suspended mode](Virtual_DOM), increasing performance and improving user experience.

Layers are transparent, by default they have no bounds (which can be changed using {api:anychart.graphics.vector.Layer#clip}clip(){api} method) and you can create as many layers as necessary, including nested layers (using {api:anychart.graphics.vector.Layer#addChild}addChild(){api} method).

Some basic samples of working with layers can be found in the [Basics: Layers](Basics#layers) article.

## Creating and Managing

Layers can be created using:

* {api:anychart.graphics.vector.Stage#layer}stage.layer(){api} method to create stage bound layer.
* {api:anychart.graphics#layer}anychart.graphics.layer(){api} method to create an unbound layer.

To remove a layer use:

* {api:anychart.graphics.vector.Layer#remove}remove(){api} method.

To add new elements to a layer use:

* {api:anychart.graphics.vector.Layer#addChild}addChild(){api} or {api:anychart.graphics.vector.Layer#addChild}addChildAt(){api} methods in case of appending unbound elements,
* or use {api:anychart.graphics.vector.Layer#rect}layer.rect(){api}, {api:anychart.graphics.vector.Layer#circle}layer.circle(){api}, {api:anychart.graphics.vector.Layer#path}layer.path(){api}, and others to create elements directly in a layer.

Do not forget you can [suspend and resume](Virtual_DOM) rendering while changing layers or elements within layers.

## Transformation

Using layers makes it easier to operate with groups of elements. It's possible to transform them as a whole instead of working with each shape, path and element separately. See [Transformation](Transformations) article.

## Clipping and Bounds

By default each layer has no bounds and spans across the parent, you can change bounds of a layer using {api:anychart.graphics.vector.Layer#clip()}clip(){api} method, clipping can be of any custom shape.

## zIndex

You can swap layers using {api:anychart.graphics.vector.Layer#swapChildren}swapChildren(){api} or {api:anychart.graphics.vector.Layer#swapChildrenAt}swapChildrenAt(){api} methods of a parent, or by changing zIndex using {api:anychart.graphics.vector.Layer#swapChildren}zIndex(){api} method.