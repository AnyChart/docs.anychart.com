{:index 8.4}

# GraphicsJS Hatch Fill Settings

* [Overview](#overview)
* [Hatch fill presets](#hatch_fill_presets)
  * [Color](#color)
  * [Thickness](#thickness)
  * [Pattern Size](#pattern_size)
* [Pattern](#pattern)
  * [Shape](#shape)
  * [Font](#font)


## Overview

Some color printers print colors unpredictable and sometimes it is quite hard to identify similar colors as different. 
Also it is impossible to identify colors on prints of black and white (monochrome) printers and in e-books. 
AnyChart js charting library has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind.

## Hatch fill presets

We provide a list of hatch fill presets, full list of them is available in the {api:anychart.graphics.vector.HatchFill.HatchFillType}HatchFill Type API reference{api}.

In case of graphic elements, you need to set hatchFill through the **fill()** method: 

```
fill(anychart.graphics.hatchFill('soliddiamond'));
```

{sample :height 260}GFX\_hatch\_hatchFill{sample}

### Color

If needed, you can color the hatch pattern using Hex, RGB, HSL or HTML color name with the opacity. Color opacity can be set in two ways:

* RGBA, HSLA modificators;
* Dedicated parameter:
    * Call function with the parameters <code>{api:anychart.graphics.vector.Fill}fill{api}(_color_, _**opacity**_);</code>
    * Single value <code>{api:anychart.graphics.vector.Fill}fill{api}('color **opacity**')</code> (one string value separated by space).

```
ellipse.fill(anychart.graphics.hatchFill('plaid', 'gold 0.5'));
```

{sample}GFX\_hatch\_color{sample}

### Thickness

Hatch lines thickness is set using thickness parameter:

```
circle.fill(anychart.graphics.hatchFill('diagonal', 'red', 5.01));
```

{sample}GFX\_hatch\_thickness{sample}

Note that several types of hatchFill don't have stroke to define thickness.

### Size

Also, you can modify hatch using size parameter, which changes the size of the pattern:

```
ellipse.fill(anychart.graphics.hatchFill('horizontal', 'gold 1.5', 2, 5));
```

{sample}GFX\_hatch\_size{sample}

## Pattern

If you are not satisfied with presets, you can create your own pattern.

### Shapes

Here an example of [Shapes](Shapes) based pattern: 

```
stage = anychart.graphics.create("container");

// pattern
var pattern = stage.pattern(new anychart.graphics.math.Rect(0,0,20,20));

pattern.circle(10, 10, 8).fill("none").stroke("1 blue 0.9");
pattern.star5(10, 10, 6).fill("1 blue 0.9");
```

Note that in case of using pattern you should create it as for a hatchFill, but define it as an object for the **fill()** settings:

```
// create chart
stage.rect(0, 0, 150, 50).fill(pattern);
stage.circle(150, 150, 50).fill(pattern);
```

Here is a sample:

{sample :height 230}GFX\_hatch\_pattern\_shape{sample}

### Font

The flexibility of GraphicsJS allows to create not only shapes-based patterns, but also font-based. An example of doing so with an Interdex font can be found in [AnyChart Interdex Hatch Fill Sample](https://playground.anychart.com/gallery/latest/Custom_Drawing/HatchFill_By_Font).

Here is a simplified version of a font-based pattern fill:

```
var text = anychart.graphics.text().text(String.fromCharCode(169));
var pattern = stage.pattern(text.getBounds());
pattern.addChild(text);
```

{sample :height 230}GFX\_hatch\_pattern\_font{sample}
