# Element stroke settings.
* [1. Line thickness and dash settings](#thickness-dashed)
* [2. Color fill settings: Solid color, linear/radial gradient](#color)

## Line thickness and dash settings
Inking thickness is set by a value in pixels similar to the gradient key setting
 `thickness color opacity`, or by a separate object: 

 ```
 {
     position: ,
     color: ,
     opacity:
 }
 ```

Dash settings are set by the string with figures separated by spaces.
 This string will be used as dash pattern. That means, if  string value is
 `5`, the resulting patternt will be `5 5 5 5 5 ...`, and if string value is 
 `5 5 10`, that will result with `5 5 10 5 5 10 5 5 10 ...`.
 
Every odd-numbered figure is a dash length, and every even-numbered figure is a
 space length.

E.g.,

{sample}stroke_dashed{sample}

```
.stroke('yellow', 5, '5 5 10')
```

## Color fill settings: solid color, gradient
Stroke color is set similar to fill procedure. 
The setting supports fill with:
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