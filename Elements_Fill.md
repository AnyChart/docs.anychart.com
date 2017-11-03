# Element color fill and stroke settings.

## Fill settings.

### Solid color

The most simple fill is solid color fill. 

Color can be set in the following formats:
* Hex
* RGB
* HSL
* HTML color name

Color opacity can be set in two ways:
* RGBA, HSLA modificators;
* Dedicated parameter:
    * Call function with the parameters <code>fill(_color_, _**opacity**_);</code>
    * Single value <code>fill('color **opacity**')</code>
 (one string value separated by space).

{sample}fill_solid{sample}

### Linear Gradient

Gradient key is a necessary parameter to set linear gradient. Gradient key consists of two or three values: gradient **position**, its **color** and **opacity** as an option. There should be more than one key, otherwise the fill will be solid.

Gradient position is set by a number from 0 to 1, where 0 and 1 are gradient borders. If gradient position is not set manually, it will be calculated automatically depending on the number of keys to make gradients allocated proportionally. 

Gradient key settings: `'position color opacity'` or 

```
{
    position: ,
    color: ,
    opacity:
}
```

E.g., two-step gradient:

{sample}fill_linearGradient{sample}

```
.fill(['red', 'yellow'])
```

E.g., multiple-key gradient:

{sample}fill\_linearGradient\_m{sample}

```
.fill(['0.1 red', '.3 yellow', '.6 white', '.9 orange'])
```

#### Additional values

* **opacity** - sets an opacity value for gradient;
* **angle** - sets gradient angle, depending on the mode;
* **fill mode** - as described below.

#### Fill modes

ObjectBoundingBox without angle value preservation
In this mode, gradient vector is calculated with the preset angle, but the result gradient angle on the rendered page can be changed if the object proportion is not 1:1 in the browser. So visually the result gradient angle may **not correspond** to the original settings.

ObjectBoundingBox with angle value preservation In this mode the result angle will visually correspond the original setting, non regarding browser scaling duplication (so, for objects that do not have 1:1 proportion with the original figure, the gradient angle will correspond to the initial value due to internal calculations).

Please see the following illustration of how these modes work:

{sample}fill\_linearG\_angle{sample}

```
.fill(['0.4 black', '.6 white'], 45)
```

UserSpaceOnUse
In this mode gradient settings are added by gradient size and borders/coordinates, and rendering is calculated within those borders. After that, the fill is executed on the element figure according to its coordinates.

This can be shown in the following way:

{sample}fill\_linearG\_userspace{sample}

```
.fill({
    keys: ['.1 red', '.5 green', '.9 blue'],
    angle: -45,
    mode: anychart.math.rect(150, 70, 100, 50),
    opacity: 1
});
```

Gradient settings are set by 'fill settings’, and this gradient fills **figures 1-3**.

If the container size in gradient settings are larger than the filled element size, it will result in the following:

{sample}fill\_linearG\_userspace2{sample}

```
.fill({
    keys: ['.1 red', '.5 green', '.9 blue'],
    angle: -45,
    mode: anychart.math.rect(5, 0, 395, 200),
    opacity: 1
})
```

###  Radial Gradient

Radial Gradient basic parameters are:

1. _Gradient keys_, more then one (just like in linear gradient) 
2. _Center location_, which is set by a number from 0 to 1 as a percentage ratio
 from the container dimensions.

E.g., radial gradient fill with center location (0.5, 0.5):

{sample}fill_radialG{sample}

```
.fill(['black', 'white'], .5, .5)
```

Additional parameters:
* **opacity** - sets an opacity value for gradient;
* **fill area** - same as in UserSpaceOnUse. 
 If fill area is not set, whole container is filled in.
 If the resulting proportions ratio is not 1:1, the fill will stretch
 to fill all area (resulting with an ellipse).
* **focal spot location** - sets a focal point location as a percentage ratio
 from container dimensions (0, 1). Focal spot location must not overrun the
 ellipse borders.

E.g., focal spot figure. Focal spot must lay within ellipse borders.

{sample}fill\_radialG\_m{sample}

```
.fill(['black', 'white'], .5, .5, null, 1, 0.23, 0.81)
```

E.g., figure with defined fill area:

{sample}fill\_radialG\_usos{sample}

```
.fill(['black', 'white'], .5, .5, anychart.math.rect(0, 0, 400, 400), 1, .5, .7)
```

### Image fill

To fill an element with picture, it is needed to pass to fill procedure the following settings: object with the image details (src) and fil mode (stretch/squeeze, proportions, pattern fill settings). 

E.g.,

{sample}fill_image{sample}

```
.fill({
    src: 'http://static.anychart.com/kitty.png',
    mode: acgraph.vector.ImageFillMode.TILE
})
```

## Stroke settings.

### Line thickness and dash settings

Inking thickness is set by a value in pixels similar to the gradient key setting `thickness color opacity`, or by a separate object: 

 ```
 {
     position: ,
     color: ,
     opacity:
 }
 ```

Dash settings are set by the string with figures separated by spaces. This string will be used as dash pattern. That means, if  string value is `5`, the resulting patternt will be `5 5 5 5 5 ...`, and if string value is `5 5 10`, that will result with `5 5 10 5 5 10 5 5 10 ...`.
 
Every odd-numbered figure is a dash length, and every even-numbered figure is a space length.

E.g.,

{sample}stroke_dashed{sample}

```
.stroke('yellow', 5, '5 5 10')
```

### Color fill settings: solid color, gradient

Stroke color is set similar to fill procedure. The setting supports fill with:
* solid color
* linear gradient
* radial gradient

Image fill **not supported**.

E.g., stroke color fill:

{sample}stroke_color{sample}

```
.stroke({
  keys: ['.1 red', 'white'],
  cx: .5,
  cy: .5,
  fx: .3,
  fy: .4
}, 4)
```