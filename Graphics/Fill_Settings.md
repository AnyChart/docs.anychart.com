{:index 8.3}

# GraphicsJS Fill Settings

## Overview

Fill settings define how a shape inner area is drawn. All [Shapes](Shapes) and closed [Paths](Paths) have the **fill()** method.

## Solid color

The most simple fill is a solid color fill. Color can be set as rgb, rgba, hex, hsl, hsla or web constant, just as you do in [CSS Color](https://www.w3schools.com/cssref/css_colors_legal.asp).

Color opacity can be set as:

* RGBA
* HSLA
* {api:anychart.graphics.vector.Fill}fill{api}

{sample}GFX\_fill\_solid{sample}

## Linear Gradient

### Gradient key

Gradient is a required parameter to set {api:anychart.graphics.vector.LinearGradientFill}linear gradient{api}, it consists of two or three values: gradient **position**, **color**, and **opacity** as an option. If you have only one key the fill will be solid.

Gradient position is set by a number from 0 to 1, where 0 and 1 are gradient borders. If gradient position is not set manually, it will be calculated automatically depending on the number of keys. 

Gradient key settings: `"position color opacity"` or 

```
{
    position: ,
    color: ,
    opacity:
}
```

Here is an example of two-step linear gradient:

```
.fill(['red', 'yellow'])
```

{sample}GFX\_fill_linearGradient{sample}

And here is an example of multiple-key linear gradient:

```
.fill(['0.1 red', '.3 yellow', '.6 white', '.9 orange'])
```

{sample}GFX\_fill\_linearGradient\_m{sample}

### Additional values

* **opacity** - sets an opacity value for gradient;
* **angle** - sets gradient angle, depending on the mode;
* **fill mode** - as described below.

### Fill modes

#### ObjectBoundingBox without angle value preservation

In this mode, AnyChart charting framework calculates gradient vector with the preset angle, but the result gradient angle on the rendered page can be changed if the object proportion is not 1:1 in the browser. So visually the result gradient angle may **not correspond** to the original settings.

#### ObjectBoundingBox with angle value preservation

In this mode the result angle will visually correspond the original setting, non regarding browser scaling duplication (so, for objects that do not have 1:1 proportion with the original figure, the gradient angle will correspond to the initial value due to internal calculations).

Please see the following illustration of these modes:

```
// no angle preservation
.fill(['0.4 black', '.6 white'], 45)
// angle preservation
.fill(['0.4 black', '.6 white'], 45, true)
```

{sample}GFX\_fill\_linearG\_angle{sample}

#### UserSpaceOnUse

In this mode gradient settings are added by gradient size and borders/coordinates, and rendering is calculated within those borders. After that, the fill is executed on the element figure according to its coordinates.

This can be shown in the following way:

```
.fill({
    keys: ['.1 red', '.5 green', '.9 blue'],
    angle: -45,
    mode: anychart.math.rect(150, 70, 100, 50),
    opacity: 1
});
```

{sample}GFX\_fill\_linearG\_userspace{sample}

Gradient settings are set by 'fill settings', and these gradient fills **figures 1-3**.

If the container size in gradient settings are larger than the filled element size, it will result in the following:

```
.fill({
    keys: ['.1 red', '.5 green', '.9 blue'],
    angle: -45,
    mode: anychart.math.rect(5, 0, 395, 200),
    opacity: 1
})
```

{sample}GFX\_fill\_linearG\_userspace2{sample}

## Radial Gradient

Radial Gradient basic parameters are:

1. **Gradient keys**, just like in linear gradient,
2. **Center location**, which is set by a number from 0 to 1 as a percentage of the container dimensions.

Radial gradient fill with center location (0.5, 0.5):

```
.fill(['black', 'white'], .5, .5)
```

{sample}GFX\_fill_radialG{sample}

Additional parameters:

* **opacity** - sets an opacity value for gradient;
* **fill area** - same as in 1.2.3.3 (UserSpaceOnUse). 
 If fill area is not set, whole container is filled in.
 If the resulting proportions ratio is not 1:1, the fill will stretch to fill all area (resulting in an ellipse).
* **focal spot location** - sets a focal point location as a percentage of container dimensions (0, 1). Focal spot location must not overrun the ellipse borders.

An example of focal spot shape. Focal spot must lay within ellipse borders.

```
.fill(['black', 'white'], .5, .5, null, 1, 0.23, 0.81)
```

{sample}GFX\_fill\_radialG\_m{sample}

An example of shape with defined fill area:

```
.fill(['black', 'white'], .5, .5, anychart.math.rect(0, 0, 400, 400), 1, .5, .7)
```

{sample}GFX\_fill\_radialG\_usos{sample}

## Image fill

To fill an element with an image you need to pass the following settings: object with the image source and fill mode. Available fill modes are listed in {api:anychart.graphics.vector.ImageFillMode}anychart.graphics.vector.ImageFillMode{api} enum.

```
.fill({
    src: 'https://static.anychart.com/images/kitty.png',
    mode: 'tile'
})
```

{sample}GFX\_fill_image{sample}

