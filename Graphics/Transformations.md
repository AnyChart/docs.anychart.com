{:index 5}
# GraphicsJS Transformations

* [Overview](#overview)

GraphicsJS provides a convenient Transformations API that allows to move, scale, rotate and shear both elements and groups of elements. Transformations, in good hands, when used along with [flexible Event Model](Events) and [Virtual DOM](Virtual_DOM), is a very powerfull tool.

The following methods allow you to work with transformation matrix, which is the fastest way to change elements, especially in groups:

* {api:anychart.graphics.vector.Element#setTransformationMatrix}setTransformationMatrix(){api}
* {api:anychart.graphics.vector.Element#getTransformationMatrix}getTransformationMatrix(){api}
* {api:anychart.graphics.vector.Element#appendTransformationMatrix}appendTransformationMatrix(){api}

To change specific settings use:

* {api:anychart.graphics.vector.Element#translate}translate(){api}
* {api:anychart.graphics.vector.Element#rotate}rotate(){api}
* {api:anychart.graphics.vector.Element#rotateByAnchor}rotateByAnchor(){api}
* {api:anychart.graphics.vector.Element#scale}scale(){api}
* {api:anychart.graphics.vector.Element#scaleByAnchor}scaleByAnchor(){api}
* {api:anychart.graphics.vector.Element#setPosition}setPosition(){api}
* {api:anychart.graphics.vector.Element#setRotation}setRotation(){api}
* {api:anychart.graphics.vector.Element#setRotationByAnchor}setRotationByAnchor(){api}

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
