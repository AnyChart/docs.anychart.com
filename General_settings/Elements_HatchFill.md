# Element hatch fill

* [Overview](#overview)
* [Hatch fill presets](#hatch_fill_presets)
    * [Color settings](#color_settings)
    * [Thickness settings](#thickness_settings)
    * [Size settings](#size_settings)
* [Pattern settings](#pattern_settings)

## Overview
Some color printers print colors unpredictable and very often it is hard to identify similar colors. Also it is impossible to identify colors on prints of b/w (monochrome) printers and in e-books. AnyChart has very useful feature - hatch fills, ideal for differentiating elements for black and white display or for those who are color blind.

## Hatch fill presets
We provide several preset hatch fills, full list is available in the [API reference](https://api.anychart.com/7.1.0/anychart.graphics.vector.HatchFill).

To create a hatch fill you simply set the required string constant: 
```
    .hatchFill('percent60');
```

{sample}GS\_E\_hatch\_hatchFill{sample}


### Color settings

If needed you, can color the hatch, using Hex, RGB, HSL or HTML color name with the opacity. Color opacity can be set in two ways:
* RGBA, HSLA modificators;
* Dedicated parameter:
    * Call function with the parameters <code>fill(_color_, _**opacity**_);</code>
    * Single value <code>fill('color **opacity**')</code> (one string value separated by space).

```
    .hatchFill('diamiond', '#CC8800 0.8');
```

{sample}GS\_E\_hatch\_color{sample}

### Thickness settings
Hatch lines thickness is set using thickness parameter:

```
    .hatchFill(hatchType, color, thickness);
```

{sample}GS\_E\_hatch\_thickness{sample}

### Size settings
Also, you can modify hatch using size parameter, which changes the size of the pattern:

```
    .hatchFill(hatchType, color, thickness, size);
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
