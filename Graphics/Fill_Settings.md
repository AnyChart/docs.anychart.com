# Fill Settings
* [Solid Color](#solid_color)
* [Linear Gradient](#linear_gradient)
* [Radial Gradient](#radial_gradient)
* [Image Fill](#image_fill)

## Solid color

The most simple fill is solid color fill. Color can be set in the following formats:
* Hex
* RGB
* HSL
* HTML color name

Color opacity can be set in two ways:
* RGBA, HSLA modificators;
* Dedicated parameter:
    * Call function with the parameters <code>{api:anychart.graphics.vector.Fill}fill{api}(_color_, _**opacity**_);</code>
    * Single value <code>{api:anychart.graphics.vector.Fill}fill{api}('color **opacity**')</code> (one string value separated by space).

{sample}GS\_E\_fill\_solid{sample}

## Linear Gradient

### Gradient key

Gradient is a required parameter to set {api:anychart.graphics.vector.LinearGradientFill}linear gradient{api}, it consists of two or three values: gradient **position**, **color** and **opacity** as an option. If you have only one key the fill will be solid.

Gradient position is set by a number from 0 to 1, where 0 and 1 are gradient borders. If gradient position is not set manually, it will be calculated automatically depending on the number of keys. 

Gradient key settings: `'position color opacity'` or 
```
{
    position: ,
    color: ,
    opacity:
}
```

Here is an example of two-step linear gradient:

{sample}GS\_E\_fill_linearGradient{sample}

```
.fill(['red', 'yellow'])
```
And here is an example of multiple-key linear gradient:

{sample}GS\_E\_fill\_linearGradient\_m{sample}

```
.fill(['0.1 red', '.3 yellow', '.6 white', '.9 orange'])
```
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

{sample}GS\_E\_fill\_linearG\_angle{sample}

```
// no angle preservation
.fill(['0.4 black', '.6 white'], 45)
// angle preservation
.fill(['0.4 black', '.6 white'], 45, true)

```

#### UserSpaceOnUse
In this mode gradient settings are added by gradient size and borders/coordinates, and rendering is calculated within those borders. After that, the fill is executed on the element figure according to its coordinates.

This can be shown in the following way:

{sample}GS\_E\_fill\_linearG\_userspace{sample}

```
.fill({
    keys: ['.1 red', '.5 green', '.9 blue'],
    angle: -45,
    mode: anychart.math.rect(150, 70, 100, 50),
    opacity: 1
});
```

Gradient settings are set by 'fill settings’, and these gradient fills
 **figures 1-3**.

If the container size in gradient settings are larger than the filled element size, it will result in the following:

{sample}GS\_E\_fill\_linearG\_userspace2{sample}

```
.fill({
    keys: ['.1 red', '.5 green', '.9 blue'],
    angle: -45,
    mode: anychart.math.rect(5, 0, 395, 200),
    opacity: 1
})
```

## Radial Gradient

### Radial Gradient basic parameters are:
1. _Gradient keys_, just like in linear gradient,
2. _Center location_, which is set by a number from 0 to 1 as a percentage ratio from the container dimensions.

Radial gradient fill with center location (0.5, 0.5):

{sample}GS\_E\_fill_radialG{sample}

```
.fill(['black', 'white'], .5, .5)
```

### Additional parameters:
* **opacity** - sets an opacity value for gradient;
* **fill area** - same as in 1.2.3.3 (UserSpaceOnUse). 
 If fill area is not set, whole container is filled in.
 If the resulting proportions ratio is not 1:1, the fill will stretch to fill all area (resulting in an ellipse).
* **focal spot location** - sets a focal point location as a percentage ratio from container dimensions (0, 1). Focal spot location must not overrun the ellipse borders.

An example of focal spot shape. Focal spot must lay within ellipse borders.

{sample}GS\_E\_fill\_radialG\_m{sample}

```
.fill(['black', 'white'], .5, .5, null, 1, 0.23, 0.81)
```

An example of shape with defined fill area:

{sample}GS\_E\_fill\_radialG\_usos{sample}

```
.fill(['black', 'white'], .5, .5, anychart.math.rect(0, 0, 400, 400), 1, .5, .7)
```

## Image fill
To fill an element with an image you need to pass the following settings: object with the image source and fill mode (stretch/squeeze, proportions, pattern fill settings). 

{sample}GS\_E\_fill_image{sample}

```
.fill({
    src: 'https://static.anychart.com/kitty.png',
    mode: acgraph.vector.ImageFillMode.TILE
})
```
