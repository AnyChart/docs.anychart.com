{:index 6}
# GraphicsJS Path

## Overview

{api:anychart.graphics.vector.Path}Path{api} is sequence of segments of different type, it can be opened or closed. To define the how to fill the shape created by a path the [EVEN-ODD](https://www.w3.org/TR/SVG/painting.html#FillProperties) rule is used. Path always starts with {api:anychart.graphics.vector.Path#moveTo}moveTo(){api} command.

GraphicsJS has one the most powerful line drawing features among SVG/VML based graphics libraries that provide only Bezier curves out of the box. GraphicsJS is great at working with mathematical functions. As a result, GraphicsJS allows you to draw not only Bezier curves out of the box, but literally anything; for example, you can draw some arc very quickly, whereas other graphics libraries will make you arrange it through numerous different curves. There are also [basic shapes available](Shapes).

## Creating 

Do not invoke class constructor directly. Use {api:anychart.graphics.vector.Stage#path}stage.path(){api}, {api:anychart.graphics.vector.Layer#path}layer.path(){api} or {api:anychart.graphics#path}anychart.graphics.path(){api} instead:

## Methods

<table>
<tr><th>Method</th><th>Description</th></tr>
<tr><td>{api:anychart.graphics.vector.Path#moveTo}moveTo(){api}</td><td>Moves path cursor position to a specified coordinate.</td></tr>
<tr><td>{api:anychart.graphics.vector.Path#close}close(){api}</td><td>Adds a command that closes the path by connecting the last point with the first straight line.</td></tr>
<tr><td>{api:anychart.graphics.vector.Path#clear}clear(){api}</td><td>Resets all path operations.</td></tr>
<tr><td>{api:anychart.graphics.vector.Path#getCurrentPoint}getCurrentPoint(){api}</td><td>Returns the last coordinates added to the path.</td></tr>
<tr><td>{api:anychart.graphics.vector.Path#arcTo}arcTo(){api}</td><td>Adds a command to the path that draws an arc of an ellipse.</td></tr>
<tr><td>{api:anychart.graphics.vector.Path#arcToAsCurves}arcToAsCurves(){api}</td><td>This method is similar to anychart.graphics.vector.Path#arcTo, but in this case the arc is approximated by Bezier curves.</td></tr>
<tr><td>{api:anychart.graphics.vector.Path#arcToByEndPoint}arcToByEndPoint(){api}</td><td>Adds a command to the path that draws an arc of an ellipse.</td></tr>
<tr><td>{api:anychart.graphics.vector.Path#circularArc}circularArc(){api}</td><td>Adds a command to the path that draws a circular arc.</td></tr>
<tr><td>{api:anychart.graphics.vector.Path#curveTo}curveTo(){api}</td><td>Adds specified points to the path, drawing sequentially a cubic Bezier curve from the current point to the next.</td></tr>
<tr><td>{api:anychart.graphics.vector.Path#lineTo}lineTo(){api}</td><td>Adds specified points to the current path, drawing sequentially a straight line through the specified coordinates.</td></tr>
<tr><td>{api:anychart.graphics.vector.Path#quadraticCurveTo}quadraticCurveTo(){api}</td><td>Adds specified points to the path, drawing sequentially a quadratic Bezier curve from the current point to the next.</td></tr>
</table>

Here is a sample code that shows how to create a closed shape using a path, and fill it with a [hatch fill](Hatch_Fill_Settings):

```
stage = anychart.graphics.create("container");

var linePath = stage.path();
// starting point
linePath.moveTo(200, 100);
// Add commands to the path
linePath.arcToByEndPoint(300, 100, 250, 50, true, true);
linePath.lineTo(250, 50);
// make the path a closed shape
linePath.close();

// fill with a pattern fill    
linePath.fill(stage.hatchFill("backwardDiagonal", "#2196F3 0.9", 1));
```

{sample :height 150}GFX\_path\_1{sample}

Here is a sample code that shows how to create an open line using a path, and make its [stroke dashed](Stroke_Settings#dash):

```
stage = anychart.graphics.create("container");

var linePath = stage.path();
// starting point
linePath.moveTo(200, 100);
// Add commands to the path
linePath.arcToByEndPoint(300, 100, 250, 50, true, true);
linePath.lineTo(250, 50);
linePath.arcToByEndPoint(180, 50, 10, 10, true, true);

// dash stroke and color a path    
linePath.stroke({color: "#2196F3"}, 2, "10 12", "round", "round");
```

{sample :height 150}GFX\_path\_2{sample}
