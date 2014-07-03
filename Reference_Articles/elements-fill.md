# Element color filling and stroke settings.
* 1. Fill settings
  * [1.1. Solid color](#solid-color)
  * [1.2. Linear Gradient](#linear-gradient)
  * [1.3. Radial Gradient](#radial-gradient)
  * [1.4. Image fill](#image-fill)
* 2. Stroke settings
  * [2.1. Line thickness and stipple settings](#thickness-dashed)
  * [2.2. Color filling settings: Solid color, linear/radial gradient](#color)

## Fill settings.
### [1.1. Solid color](id:solid-color)
The most simple fill is solid color fill. 
Color can be set in the following formats:
* Hex
* RGB
* HSL
* HTML color name

Color transparency can be set in two ways:
* RGBA, HSLA modificators;
* Dedicated parameter:
    * Call procedure with the parameters <code>fill(_color_, _**opacity**_);</code>
    * Single value <code>fill('color **opacity**')</code>
 (one string value separated by space).

{sample}fill_solid{sample}

### [1.2. Linear Gradient](id:linear-gradient)

#### 1.2.1. Gradient key is a necessary parameter to set linear gradient. 
Gradient key consists of two or three values: gradient **position**,
 its **color** and **opacity** as an option. There should be more than one key,
 otherwise the fill will be solid.

Gradient position is set by a number from 0 to 1, where 0 and 1 are gradient
 borders. If gradient position is not set manually, it will be calculated
 automatically depending on the number of keys to make gradients allocated
 proportionally. 

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
E.g., multiple-step gradient:

{sample}fill\_linearGradient\_m{sample}

```
.fill(['0.1 red', '.3 yellow', '.6 white', '.9 orange'])
```
#### 1.2.2. Additional values
* **opacity** - sets an opacity value for gradient;
* **angle** - sets gradient angle, depending on the mode;
* **filling mode** - as described below.

#### 1.2.3. Filling modes

##### 1.2.3.1 ObjectBoundingBox without angle value preservation
In this mode, gradient vector is calculated with the preset angle, but the
 result gradient angle on the rendered page can be changed if the page
 proportion is not 1:1 in the browser. So visually the result gradient angle
 may **not correspong** original setting.

##### 1.2.3.2. ObjectBoundingBox with angle value preservation
In this mode the result angle will visually correspond the original setting,
 non regarding browser scaling duplication (so, for pages that do not have 1:1
 proportion with the original figure, the gradient angle will correspond initial
 value due to internal calculations).

Please see the following illustration of how these modes work:

{sample}fill\_linearG\_angle{sample}

```
.fill(['0.4 black', '.6 white'], 45)
```

##### 1.2.3.3. UserSpaceOnUse
In this mode gradient settings are added by gradient size and
 borders/coordinates, and rendering is calculated within those borders
 (wih angle settings, corresponding to moder 1.2.3.2). After that, the filling
 is executed on the element figure according to its coordinates.

This can be illustraded in the following way:

{sample}fill\_linearG\_userspace{sample}

```
.fill({
    keys: ['.1 red', '.5 green', '.9 blue'],
    angle: -45,
    mode: new anychart.math.Rect(150, 70, 100, 50),
    opacity: 1
});
```

Gradient settings are set by 'fill settings’, and this gradient fills
 **figures 1-3**.

If the container size in gradient settings are larger than the filled element
 size, it will result as follows::

{sample}fill\_linearG\_userspace2{sample}

```
.fill({
    keys: ['.1 red', '.5 green', '.9 blue'],
    angle: -45,
    mode: new anychart.math.Rect(5, 0, 395, 200),
    opacity: 1
})
```

### [1.3. Radial Gradient](id:radial-gradient)

#### 1.3.1. Radial Gradient basic parameters are:
1. _Gradient keys_, more then one (just like in linear gradient) 
2. _Center location_, which is set by a number from 0 to 1 as a percentage ratio
 from the container dimensions.

E.g., radial gradient filling with center location (0.5, 0.5):

{sample}fill_radialG{sample}

```
.fill(['black', 'white'], .5, .5)
```

#### 1.3.2. Additional parameters:
* **opacity** - sets an opacity value for gradient;
* **filling aria** - same as in 1.2.3.3 (UserSpaceOnUse). 
 If filling area is not set, whole container is filled in.
 If the resulting page proportion ration is not 1:1, the filling will stretch
 to fill all area (resulting with an ellipse).
* **focal spot location** - sets a focal point location as a percentage ration
 from container dimensions (0, 1). Focal spot location must not overrun the
 ellipse borders.

E.g., focal spot figure. Focal spot must lay within ellipse borders.

{sample}fill\_radialG\_m{sample}

```
.fill(['black', 'white'], .5, .5, null, 1, 0.23, 0.81)
```

E.g., figure with defined filling area:

{sample}fill\_radialG\_usos{sample}

```
.fill(['black', 'white'], .5, .5, new anychart.math.Rect(0, 0, 400, 400), 1, .5, .7)
```

### [1.4. Image fill](id:image-fill)
To fill an element with picture, it is needed to pass to fill procedure the
 following settings: object with the image details (src) and filling mode
 (stretch/squeeze, proportions, pattern fill settings). 

E.g.,

{sample}fill_image{sample}

```
.fill({
    src: 'http://static.anychart.com/kitty.png',
    mode: acgraph.vector.ImageFillMode.TILE
})
```

## Stroke settings.
### [2.1. Line thickness and stripple stettings](id:thickness-dashed)
Inking thickness is set by a value in pixels similar to the gradient key setting
 `thickness color opacity`, or by a separate object: 

 ```
 {
     position: ,
     color: ,
     opacity:
 }
 ```

Stripple settings are set by the string with figures separated by spaces.
 This string will be used as stripple pattern. That means, if  string value is
 `5`, the resulting patternt will be `5 5 5 5 5 ...`, and if string value is 
 `5 5 10`, that will result with `5 5 10 5 5 10 5 5 10 ...`.
 
Every odd-numbered figure is a dash length, and every even-numbered figure is a
 space length.

E.g.,

{sample}stroke_dashed{sample}

```
.stroke('yellow', 5, '5 5 10')
```

### [2.2. Color fill settings: solid color, gradient](id:color)
Stroke color is set similar to fill procedure. 
The setting supports filling with:
* solid color
* linear gradient
* radial gradient

Image fill **not supported**.

E.g., stroke color filling:

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