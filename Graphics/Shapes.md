{:index 7}
# GraphicsJS Shapes and Primitives

## Overview

GraphicsJS is a lightweight JavaScript graphics library which allows to create graphic elements for all purposes, from very simple to very complex. This article describes how to draw simple shapes using GraphicsJS and use them to create more complex shapes.

When you work with GraphicsJS, you need to set stage as a container. On the [Quick Start page](Quick_Start) and [Basics](Basics) you can find how to use stage as a container.

## Basic Shapes

There are three basic shapes: Rectangle, Circle and Ellipse. This section describes all three types of basic shapes. 

### Rectangle

The {api:anychart.graphics#rect}rect(){api} method allows to draw a rectangle of some width and height in some point. This method accepts X- and Y-coordinates of the left-top rectangle corner and two values that stand for its width and height. The following sample demonstrates creating a rectangular in the point (100, 10) with the width of 400px and height of 40px:

```
stage.rect(100, 10, 400, 40);
```

{sample :height 150}GFX\_Basic\_Shapes\_01{sample}

### Circle

The {api:anychart.graphics#circle}circle(){api} method creates a circle. You need to set the coordinates of the center point of the circle and its radius to the method to make it work.

Let's add a circle to the picture from the sample above.

```
// draw a circle
stage.circle(300, 150, 70);
```

{sample :height 250}GFX\_Basic\_Shapes\_02{sample}

### Ellipse

Another simple shape is ellipse. Use {api:anychart.graphics#ellipse}ellipse(){api} method for creating an ellipse on your stage. This method requires four parameters: X- and Y-coordinates of the ellipse center, X-radius and Y-radius.

```
// draw an ellipse
stage.ellipse(300, 300, 200, 50);
```

{sample :height 500}GFX\_Basic\_Shapes\_03{sample}

## Predefined Shapes

Predefined Shapes are complex shapes which can be drawn on a stage using paths or with the help of special methods. Below you can find the list of those shapes which can significally shorten and simplify your code. Some of them need a basic shape to be applied to.

<table>
<tbody><tr>
<th width="50"><b>Method</b></th>
<th width="130"><b>Parameters</b></th>
<th width="130"><b>Description</b></th>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#cross}cross(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a cross set by it's circumscribed circle's center and radius.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#diagonalCross}diagonalCross(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a diagonal cross set by it's circumscribed circle's center and radius.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#diamond}diamond(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a diamond set by it's circumscribed circle's center and radius.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#donut}donut(){api}</td>
<td>stage/path, centerX, centerY, outerRadius, innerRadius, start angle (in degrees), sweep angle (in degrees)</td>
<td>Draws a donut sector with sides. If sweep modulus is larger or equal 360, draws two concentric circles (without sides).</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#pie}pie(){api}</td>
<td>stage/path, centerX, centerY, radius, start angle (in degrees), sweep angle (in degrees)</td>
<td>Draws a pie sector with sides (a curvilinear isosceles triangle with center in (cx, cy)).</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#roundedInnerRect}roundedInnerRect(){api}</td>
<td>stage or path, rectangle (which corners to truncate), radius (from 1 to 4 values: if set 1 value it will be applied to all corners; if set 2 values, first value will be applied to left-top and right-bottom corners and the second to right-top and left-bottom corners; if set 3 values, first one will be applied to the top-left corner, second to top-right and bottom-left and the third value will be applied to the bottom-right corner)</td>
<td>Draws a rectangle with rounded inner corners.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#roundedRect}roundedRect(){api}</td>
<td>stage or path, rectangle (which corners to truncate), radius (from 1 to 4 values: if set 1 value it will be applied to all corners; if set 2 values, first value will be applied to left-top and right-bottom corners and the second to right-top and left-bottom corners; if set 3 values, first one will be applied to the top-left corner, second to top-right and bottom-left and the third value will be applied to the bottom-right corner)</td>
<td>Draws a rectangle with rounded corners.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#star}star(){api}</td>
<td>stage/path, centerX, centerY, outerRadius, innerRadius, number of spikes, startDegrees, curvature</td>
<td>Draws multi-pointed star.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#star4}star4(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a 4-spiked star.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#star5}star5(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a 5-spiked star.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#star6}star6(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a 6-spiked star.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#star7}star7(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a 7-spiked star.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#star10}star10(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a 10-spiked star.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#triangleDown}triangleDown(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a triangle heading downwards set by it's circumscribed circle's center and radius.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#triangleLeft}triangleLeft(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a triangle heading leftwards set by it's circumscribed circle's center and radius.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#triangleRight}triangleRight(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a triangle heading rightwards set by it's circumscribed circle's center and radius.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#triangleUp}triangleUp(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a triangle heading upwards set by it's circumscribed circle's center and radius.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#truncatedRect}truncatedRect(){api}</td>
<td>stage or path, rectangle (which corners to truncate), radius (from 1 to 4 values: if set 1 value it will be applied to all corners; if set 2 values, first value will be applied to left-top and right-bottom corners and the second to right-top and left-bottom corners; if set 3 values, first one will be applied to the top-left corner, second to top-right and bottom-left and the third value will be applied to the bottom-right corner)</td>
<td>Draws a rectangle with truncated corners.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#hLine}hLine(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a thick horizontal line set by it's circumscribed circle's center and radius.</td>
</tr>
<tr>
<td>{api:anychart.graphics.vector.primitives#vLine}vLine(){api}</td>
<td>stage/path, centerX, centerY, outerRadius</td>
<td>Draws a thick vertical line set by it's circumscribed circle's center and radius.</td>
</tr>
</tbody>
</table>

The following sample demonstrates creating a shape from predefined objects. 

```
// draws a star
acgraph.vector.primitives.star(stage, 200, 70, 50, 17, 7, 20, -0.9);
```

{sample :height 150}GFX\_Basic\_Shapes\_04{sample}

## Clip

Clipping objects leads to creating new shapes and forms which can be used as custom graphic elements. Use the {api:anychart.graphics#clip}clip(){api} method to clip objects and create a new shape. 

```
stage = acgraph.create("container");

// Creates clip instance.
var clipArea = acgraph.clip(10, 10, 90, 90);

blueCircle.clip(clipArea);
```

{sample :height 150}GFX\_Basic\_Shapes\_05{sample}

## Coloring

There are several methods that can be used for coloring the shapes. You can find more information about colors in the following articles: 
 - [Fill Settings](Fill_Settings)
 - [Hatch Fill Settings](Hatch_Fill_Settings)
 - [Stroke Settings](Stroke_Settings)

Coloring methods accept values in HEX notation ("#00033A"), as web color ("black"), in RGB format ("rgb(0,0,255)") and more. Color can be set as rgb, rgba, hex, hsl, hsla or web constant, just as you do in [CSS Color](https://www.w3schools.com/cssref/css_colors_legal.asp).

### Fill

Use the {api:anychart.graphics.vector.Shape#fill}fill(){api} method to fill the shape with a color.

```
// color the star with a golden color
star.fill("gold")";
```

{sample :height 150}GFX\_Basic\_Shapes\_06{sample}

### Stroke

Use the {api:anychart.graphics.vector.Shape#stroke}stroke(){api} method to stroke the shape. You can also set the thickness of a stroking line and some other settings you can find more about in the [Stroke Settings](Stroke_Settings) article.

```
// set the stroke color to the star
star.stroke("#000000", "4");
```

{sample :height 150}GFX\_Basic\_Shapes\_07{sample}