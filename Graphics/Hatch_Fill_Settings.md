# Hatch Fill Settings
* [Overview](#overview)
* [Hatch fill presets](#hatch_fill_presets)
    * [Color settings](#color_settings)
    * [Thickness settings](#thickness_settings)
    * [Size settings](#size_settings)
* [Pattern settings](#pattern_settings)

## Overview
Some color printers print colors unpredictable and sometimes it is quite hard to identify similar colors as different. 
Also it is impossible to identify colors on prints of black and white (monochrome) printers and in e-books. 
AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind.

## Hatch fill presets
We provide a list of hatch fill presets, full list of them is available in the {api:anychart.graphics.vector.HatchFill#HatchFillType}API reference{api}.

In case of graphic elements, you need to set hatchFill through the **.fill()** method: 
```
    .fill(acgraph.hatchFill('soliddiamond'));
```

{sample}GS\_E\_hatch\_hatchFill{sample}

Explore the sample in our playground too see how it works.

### Color settings

If needed, you can color the hatch using Hex, RGB, HSL or HTML color name with the opacity. Color opacity can be set in two ways:
* RGBA, HSLA modificators;
* Dedicated parameter:
    * Call function with the parameters <code>{api:anychart.graphics.vector.Fill}fill{api}(_color_, _**opacity**_);</code>
    * Single value <code>{api:anychart.graphics.vector.Fill}fill{api}('color **opacity**')</code> (one string value separated by space).

```
            ellipse.fill(acgraph.hatchFill('plaid', 'gold 0.5'));

```

{sample}GS\_E\_hatch\_color{sample}

### Thickness settings
Hatch lines thickness is set using thickness parameter:

```
    circle.fill(acgraph.hatchFill('diagonal', 'red', 5.01));
```

{sample}GS\_E\_hatch\_thickness{sample}

Note that several types of hatchFill don't have stroke to define thickness.

### Size settings
Also, you can modify hatch using size parameter, which changes the size of the pattern:

```
    ellipse.fill(acgraph.hatchFill('horizontal', 'gold 1.5', 2, 5));
```

{sample}GS\_E\_hatch\_size{sample}

## Pattern settings
If you are not satisfied with presets, you can create your own pattern, here an example: 

```
  // initialize pattern
  var pattern = stage.pattern(new acgraph.math.Rect(0,0,stage.width(),stage.height()));
  // circles settings
  var circles = {
    cx: stage.width()/2,
    cy: stage.height()/2,
    step : 5
  };
  var max_circle_radius = Math.max(stage.width(), stage.height())/2;
  // draw circles
  for (var i = 0; i < max_circle_radius; i++){
    pattern.circle(circles.cx, circles.cy, circles.step*i).fill('none').stroke('1 blue 0.9');
  }
```

{sample}GS\_E\_hatch\_pattern{sample}

Note that in case of using pattern you should create it as for a hatchFill, but define it as an object for the .fill() settings:
```
	ellipse.fill(pattern);
```