{:index 5}
# GraphicsJS Transformations

## Overview

GraphicsJS provides a convenient Transformations API that allows to move, scale, rotate and shear both elements and groups of elements. Transformations, in good hands, when used along with [Layers](Layers), [flexible Event Model](Events) and [Virtual DOM](Virtual_DOM), is a very powerful tool.

## Methods

The following methods allow you to work with transformation matrix, which is the fastest way to change elements, especially in groups:

* {api:anychart.graphics.vector.Element#setTransformationMatrix}setTransformationMatrix(){api}
* {api:anychart.graphics.vector.Element#getTransformationMatrix}getTransformationMatrix(){api}
* {api:anychart.graphics.vector.Element#appendTransformationMatrix}appendTransformationMatrix(){api}

The following sample demonstrates a shape drawn on a stage and the same shape with a transformation matrix set.

```
// add the transformation matrix
rect.setTransformationMatrix(1, 0.05, 1.5, 0.5, 1, 1);
```

{sample :width 830 :height 150}GFX\_Transformation\_01{sample} 


To change specific settings use:

* {api:anychart.graphics.vector.Element#translate}translate(){api}
* {api:anychart.graphics.vector.Element#rotate}rotate(){api}
* {api:anychart.graphics.vector.Element#rotateByAnchor}rotateByAnchor(){api}
* {api:anychart.graphics.vector.Element#scale}scale(){api}
* {api:anychart.graphics.vector.Element#scaleByAnchor}scaleByAnchor(){api}
* {api:anychart.graphics.vector.Element#setPosition}setPosition(){api}
* {api:anychart.graphics.vector.Element#setRotation}setRotation(){api}
* {api:anychart.graphics.vector.Element#setRotationByAnchor}setRotationByAnchor(){api}

The following sample demonstrates a triangle drawn on a stage and the same triangle with several transformation settings added.

```
// transform the triangle
transformedTriangle.setPosition(250, 15);
transformedTriangle.rotate(45, 300, 15);
transformedTriangle.scale(1.5, 0.5, 0, 50);
```

{sample :width 830 :height 150}GFX\_Transformation\_02{sample}


To get the bounds, dimensions, and coordinates use:

* {api:anychart.graphics.vector.Element#getAbsoluteBounds}getAbsoluteBounds(){api}
* {api:anychart.graphics.vector.Element#getAbsoluteHeight}getAbsoluteHeight(){api}
* {api:anychart.graphics.vector.Element#getAbsoluteWidth}getAbsoluteWidth(){api}
* {api:anychart.graphics.vector.Element#getAbsoluteX}getAbsoluteX(){api}
* {api:anychart.graphics.vector.Element#getAbsoluteY}getAbsoluteY(){api}
* {api:anychart.graphics.vector.Element#getX}getX(){api}
* {api:anychart.graphics.vector.Element#getY}getY(){api}
* {api:anychart.graphics.vector.Element#getBounds}getBounds(){api}
* {api:anychart.graphics.vector.Element#getWidth}getWidth(){api}
* {api:anychart.graphics.vector.Element#getHeight}getHeight(){api}
* {api:anychart.graphics.vector.Element#getRotationAngle}getRotationAngle(){api}

These methods can be a great help when it is necessary to put an element somewhere corresponding to other elements or shapes. The following sample demonstrates the similar situation: here it is necessary to put a circle over a triangle in its center.

```
// get the triangle center point
triangleCenterX = triangle.getBounds().getLeft()+triangle.getBounds().getWidth()/2;
triangleCenterY = triangle.getBounds().getTop()+triangle.getBounds().getHeight()/2;

// create a circle
circle = stage.circle(triangleCenterX, triangleCenterY, 20);
```

{sample :width 830 :height 150}GFX\_Transformation\_03{sample}